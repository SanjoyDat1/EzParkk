import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getStorage, FirebaseStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Validate required Firebase config
if (!firebaseConfig.storageBucket) {
  console.error('Firebase Storage Bucket is not configured!')
  console.error('Please set NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET in your .env.local file')
  console.error('Format: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com')
}

// Initialize Firebase
let app: FirebaseApp
if (!getApps().length) {
  app = initializeApp(firebaseConfig)
} else {
  app = getApps()[0]
}

// Initialize Firestore
export const db: Firestore = getFirestore(app)

// Initialize Storage with explicit bucket configuration
let storage: FirebaseStorage
try {
  if (firebaseConfig.storageBucket) {
    // Normalize bucket name - remove gs:// prefix if present, then add it back
    const bucketName = firebaseConfig.storageBucket.replace(/^gs:\/\//, '')
    // Explicitly pass the bucket URL to ensure it's set
    storage = getStorage(app, `gs://${bucketName}`)
  } else if (firebaseConfig.projectId) {
    // Fallback: construct bucket name from project ID
    console.warn('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET not set, using default bucket from project ID')
    storage = getStorage(app, `gs://${firebaseConfig.projectId}.appspot.com`)
  } else {
    // Last resort: use default bucket (will fail if Storage not enabled)
    console.error('Firebase Storage bucket cannot be determined. Please set NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET')
    storage = getStorage(app)
  }
} catch (error: any) {
  console.error('Failed to initialize Firebase Storage:', error)
  const errorMessage = firebaseConfig.storageBucket 
    ? `Firebase Storage initialization failed. Error: ${error.message}`
    : 'Firebase Storage is not configured. Please set NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET in your .env.local file (format: your-project-id.appspot.com)'
  throw new Error(errorMessage)
}

export { storage }

export default app

