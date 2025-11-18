# 🔧 Firebase Rate Limit Fix Guide

## ⚠️ Current Issue
You're experiencing a `TOO_MANY_ATTEMPTS_TRY_LATER` error (Firebase error code 17010) when trying to send email verification emails. This is Firebase's rate limiting protection kicking in due to multiple test signup attempts.

---

## ✅ Quick Solutions (Choose One)

### **Solution 1: Enable Firebase App Check (Recommended - Permanent Fix)**

Firebase App Check will whitelist your app and prevent rate limiting in the future.

#### Steps:

1. **Open Firebase Console**
   - Go to: https://console.firebase.google.com/
   - Select project: **ezparkk-e4d3b**

2. **Navigate to App Check**
   - Click "App Check" in the left sidebar (under "Build")
   - You should see your iOS app: `com.ezparkk.EzParkk`

3. **Register Debug Token**
   - Click on your iOS app
   - Click "Manage debug tokens" or "Debug tokens" tab
   - Click "Add debug token"
   - Enter: `246B9003-210D-4999-817A-35C0C78E57CF`
   - Give it a name: "Simulator Debug Token"
   - Click "Done"

4. **Enable App Check for Authentication**
   - Still in App Check section
   - Find **"Firebase Authentication"** in the list of services
   - Click the toggle to **"Enforce"**
   - Confirm the action

5. **Test**
   - Try creating a new account
   - Email verification should now work without rate limiting

---

### **Solution 2: Wait for Rate Limit Reset (1-2 Hours)**

Firebase will automatically lift the rate limit after 1-2 hours of inactivity.

**Steps:**
1. Wait 1-2 hours
2. Try creating a new account again
3. Should work normally

---

### **Solution 3: Delete Test User & Wait 15 Minutes**

1. **Delete the test user:**
   - Go to Firebase Console → **Authentication** → **Users**
   - Find user with email: `f0wvs@2200freefonts.com`
   - Click three dots (⋮) → **Delete user**
   - Confirm deletion

2. **Wait 10-15 minutes**

3. **Try again with a different email**

---

## 🔄 What Changed in the Code

I've updated the app to:

1. **Use Firebase Hosting URL instead of custom domain**
   - Old: `https://ezparkk.com/verify-email`
   - New: `https://ezparkk-e4d3b.web.app/verify-email`
   - This URL is automatically whitelisted by Firebase

2. **Deployed verify-email page to Firebase Hosting**
   - ✅ Page is live at: https://ezparkk-e4d3b.web.app/verify-email
   - Professional branded verification page with EzPark logo

3. **Added better error handling**
   - Added `FirebaseError.tooManyRequests` error type
   - Better error messages for rate limiting
   - User-friendly guidance in error messages

---

## 📝 Update Firebase Email Template

After enabling App Check, update your email template:

1. Go to: **Firebase Console** → **Authentication** → **Templates**
2. Click on **"Email address verification"**
3. Click the edit (pencil) icon
4. Update the action URL to:
   ```
   https://ezparkk-e4d3b.web.app/verify-email?mode=%MODE%&oobCode=%OOB_CODE%
   ```
5. Save the template

---

## 🎯 Why This Happened

Firebase has built-in rate limiting to prevent abuse:
- **Multiple signup attempts** from the same device trigger rate limits
- **Email verification requests** are throttled per device/IP
- **Testing repeatedly** causes Firebase to temporarily block requests

This is **normal behavior** and protects your app from spam/abuse.

---

## 🚀 Testing After Fix

Once you've enabled App Check or waited for the rate limit to reset:

1. **Create a new account** with a real email address
2. **Check your inbox** (and spam folder)
3. **Click the verification link** in the email
4. **Verify** you see the custom EzPark verification page
5. **Confirm** you're redirected back to the app
6. **Check** that your account is now verified

---

## 🔮 Optional: Use Custom Domain (Later)

If you want to use `ezparkk.com` instead of `ezparkk-e4d3b.web.app`:

1. **Add domain to Firebase Hosting:**
   - Firebase Console → Hosting → Add custom domain
   - Follow DNS configuration steps

2. **Whitelist domain for authentication:**
   - Firebase Console → Authentication → Settings
   - Click "Authorized domains"
   - Add `ezparkk.com`

3. **Update email template URL** back to:
   ```
   https://ezparkk.com/verify-email?mode=%MODE%&oobCode=%OOB_CODE%
   ```

---

## 🆘 Still Having Issues?

If you still can't send verification emails after 2 hours:

1. **Check Firebase Console logs:**
   - Firebase Console → Functions → Logs
   - Look for any error messages

2. **Verify email provider settings:**
   - Firebase Console → Authentication → Templates → SMTP settings
   - Make sure sender email is configured: `verify@ezparkk.com`

3. **Check spam folder:**
   - Emails might be going to spam
   - Add `verify@ezparkk.com` to safe senders

4. **Contact Firebase Support:**
   - If rate limit persists beyond 2 hours
   - They can manually reset it

---

## ✅ Summary

**Immediate Action:** Enable App Check in Firebase Console (Solution 1)

**Alternative:** Wait 1-2 hours and try again (Solution 2)

**Code Changes:** Already deployed and ready to use

**Result:** Email verification will work smoothly without rate limiting

---

**Last Updated:** November 11, 2025
**Status:** ✅ Code fixes deployed, awaiting Firebase Console configuration

