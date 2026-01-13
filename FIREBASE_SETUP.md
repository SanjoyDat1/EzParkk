# Firebase Setup Guide

This guide will help you set up Firebase for the EzParkk waitlist form.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project

## Step 2: Enable Firestore Database

1. In your Firebase project, go to **Firestore Database** in the left sidebar
2. Click **Create database**
3. Choose **Start in test mode** (for development) or **Start in production mode** (for production)
4. Select a location for your database (choose the closest to your users)
5. Click **Enable**

## Step 2.5: Enable Firebase Storage (for Resume Uploads)

1. In your Firebase project, go to **Storage** in the left sidebar
2. Click **Get started**
3. Choose **Start in test mode** (for development) or **Start in production mode** (for production)
4. Select the same location as your Firestore database
5. Click **Done**

## Step 3: Get Your Firebase Configuration

1. In your Firebase project, click the gear icon ⚙️ next to "Project Overview"
2. Select **Project settings**
3. Scroll down to the "Your apps" section
4. Click the **Web** icon (`</>`) to add a web app
5. Register your app with a nickname (e.g., "EzParkk Web")
6. Copy the Firebase configuration object

## Step 4: Set Up Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Copy the contents from `.env.local.example` and fill in your Firebase config values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

3. Replace the placeholder values with your actual Firebase config values

## Step 5: Set Up Firestore Security Rules (Important!)

1. Go to **Firestore Database** → **Rules** in Firebase Console
2. For development, you can use these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /waitlist/{document=**} {
      // Allow reads: only authenticated users (optional, adjust as needed)
      allow read: if false; // Disable reads from client for security
      
      // Allow writes: anyone can add to waitlist
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'role', 'message'])
                    && request.resource.data.email is string
                    && request.resource.data.email.matches('.*@.*\\..*');
    }
    
    match /jobApplications/{document=**} {
      // Allow reads: only authenticated users (optional, adjust as needed)
      allow read: if false; // Disable reads from client for security
      
      // Allow writes: anyone can submit job applications
      // IMPORTANT: This rule must allow 'create' for the form to work
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'role', 'coverLetter'])
                    && request.resource.data.email is string
                    && request.resource.data.email.matches('.*@.*\\..*')
                    && request.resource.data.name is string
                    && request.resource.data.role is string
                    && request.resource.data.coverLetter is string;
      
      // Disable update and delete from client
      allow update, delete: if false;
    }
  }
}
```

4. **Set up Firebase Storage Security Rules** (for resume uploads):
   - Go to **Storage** → **Rules** in Firebase Console
   - Add these rules (IMPORTANT: These rules allow uploads but restrict reads for security):

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /resumes/{fileName} {
      // Allow anyone to upload resumes (with size and type validation)
      allow write: if request.resource.size < 5 * 1024 * 1024 // 5MB limit
                    && (request.resource.contentType.matches('application/pdf')
                        || request.resource.contentType.matches('application/msword')
                        || request.resource.contentType.matches('application/vnd.openxmlformats-officedocument.wordprocessingml.document'));
      
      // Disable reads from client for security (only admins can read via Firebase Console)
      allow read: if false;
    }
    
    // Deny all other paths
    match /{allPaths=**} {
      allow read, write: if false;
    }
  }
}
```

   **Note:** If you're getting upload errors, you can temporarily use test mode rules for development:
   ```javascript
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read, write: if request.resource.size < 5 * 1024 * 1024;
       }
     }
   }
   ```
   ⚠️ **Warning:** Test mode allows anyone to upload/read files. Only use for testing and switch back to production rules before going live!

5. For production, consider adding authentication or additional validation
6. Click **Publish** to save both Firestore and Storage rules

## Step 6: Test the Form

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contact` page
3. Fill out the form and submit
4. Check your Firestore database to see the submission in the `waitlist` collection

## Troubleshooting

### "Firebase: Error (auth/configuration-not-found)"
- Make sure your `.env.local` file exists and has all required variables
- Restart your development server after adding environment variables
- Check that variable names start with `NEXT_PUBLIC_`

### "Permission denied" error
- Check your Firestore security rules
- Make sure the rules allow writes to the `waitlist` and `jobApplications` collections
- Check your Firebase Storage rules - they must allow writes to the `resumes/` path
- Make sure Storage is enabled in your Firebase project

### "Failed to upload resume" error
- Verify Firebase Storage is enabled in your Firebase Console
- Check Storage security rules allow writes to `resumes/{fileName}` path
- Ensure file size is under 5MB
- Ensure file type is PDF, DOC, or DOCX
- Check that `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` is set correctly in `.env.local`
- Verify the Storage bucket location matches your Firestore location

### "No default bucket found" or "storage/no-default-bucket" error
This error means Firebase Storage bucket is not configured. Follow these steps:

1. **Check your `.env.local` file** - Make sure you have:
   ```env
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   ```
   Replace `your-project-id` with your actual Firebase project ID.

2. **Get your Storage Bucket name from Firebase Console:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Go to **Storage** in the left sidebar
   - Look at the URL or the bucket name shown at the top
   - It should be in the format: `your-project-id.appspot.com`

3. **If Storage is not enabled:**
   - Go to **Storage** in Firebase Console
   - Click **Get started**
   - Choose **Start in test mode** or **Start in production mode**
   - Select a location (same as your Firestore location is recommended)
   - Click **Done**

4. **After updating `.env.local`:**
   - Restart your development server (`npm run dev`)
   - For production (Netlify), add the environment variable in Netlify dashboard:
     - Go to Site settings → Environment variables
     - Add `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` with value `your-project-id.appspot.com`

5. **Verify the bucket name format:**
   - Correct: `your-project-id.appspot.com` (no `gs://` prefix in env var)
   - The code will automatically add `gs://` prefix when needed

### "This email is already on the waitlist!"
- This is expected behavior - the form prevents duplicate email submissions
- The email already exists in your Firestore database

## Viewing Submissions

To view submissions:
1. Go to Firebase Console → Firestore Database
2. Click on the `waitlist` collection to see waitlist form submissions
3. Click on the `jobApplications` collection to see job application submissions
4. You'll see all submissions with their data and timestamps

