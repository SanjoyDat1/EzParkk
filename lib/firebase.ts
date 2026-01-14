import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getStorage, FirebaseStorage } from 'firebase/storage'

// Fallback project ID if environment variable is missing
const FALLBACK_PROJECT_ID = 'ezparkk-e4d3b'

// Debug logging - check environment variables BEFORE config
console.log('Firebase Config Debug (Raw Env Vars):', {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? process.env.NEXT_PUBLIC_FIREBASE_API_KEY.substring(0, 10) + '...' : 'NOT SET',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
})

// IMPORTANT: Next.js only exposes NEXT_PUBLIC_* env vars to the browser
// If these are undefined, you need to:
// 1. Restart the dev server (npm run dev)
// 2. Clear .next cache (rm -rf .next)
// 3. Check .env.local file exists and has correct variable names

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '', // Firebase might work without this for some operations
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || FALLBACK_PROJECT_ID) + '.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || FALLBACK_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || FALLBACK_PROJECT_ID) + '.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
}

// Validate and warn if using fallbacks
if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
  console.warn('⚠️ NEXT_PUBLIC_FIREBASE_PROJECT_ID not found in environment variables!')
  console.warn(`⚠️ Using fallback project ID: ${FALLBACK_PROJECT_ID}`)
  console.warn('⚠️ Please set NEXT_PUBLIC_FIREBASE_PROJECT_ID in your .env.local file')
}

if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  console.warn('⚠️ NEXT_PUBLIC_FIREBASE_API_KEY not found in environment variables!')
  console.warn('⚠️ This may cause Firebase authentication errors')
  console.warn('⚠️ Solution: Restart your dev server (npm run dev) after setting env vars')
  console.warn('⚠️ Or clear cache: rm -rf .next && npm run dev')
}

console.log('Final Firebase Config:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  storageBucket: firebaseConfig.storageBucket,
  hasApiKey: !!firebaseConfig.apiKey,
  hasMessagingSenderId: !!firebaseConfig.messagingSenderId,
  hasAppId: !!firebaseConfig.appId,
  apiKeyPreview: firebaseConfig.apiKey ? firebaseConfig.apiKey.substring(0, 10) + '...' : 'MISSING',
})

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

// Log Firestore initialization for debugging
console.log('Firestore initialized:', {
  app: app.name,
  projectId: firebaseConfig.projectId,
  dbType: db.type,
})

// Initialize Storage with explicit bucket configuration
let storage: FirebaseStorage
try {
  if (firebaseConfig.storageBucket) {
    // Normalize bucket name - remove gs:// prefix if present
    const bucketName = firebaseConfig.storageBucket.replace(/^gs:\/\//, '')
    console.log('Initializing Firebase Storage with bucket:', bucketName)
    
    // For newer .firebasestorage.app buckets, use the bucket name directly
    // For older .appspot.com buckets, Firebase handles both formats
    if (bucketName.includes('.firebasestorage.app')) {
      // Newer format: use bucket name directly (Firebase SDK handles it)
      storage = getStorage(app, bucketName)
    } else {
      // Older format: can use with or without gs:// prefix
      storage = getStorage(app, `gs://${bucketName}`)
    }
  } else if (firebaseConfig.projectId) {
    // Fallback: construct bucket name from project ID (try newer format first)
    console.warn('NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET not set, trying default buckets')
    try {
      storage = getStorage(app, `${firebaseConfig.projectId}.firebasestorage.app`)
    } catch (e) {
      try {
        storage = getStorage(app, `gs://${firebaseConfig.projectId}.appspot.com`)
      } catch (e2) {
        storage = getStorage(app)
      }
    }
  } else {
    // Last resort: use default bucket (will fail if Storage not enabled)
    console.error('Firebase Storage bucket cannot be determined. Please set NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET')
    storage = getStorage(app)
  }
} catch (error: any) {
  console.error('Failed to initialize Firebase Storage:', error)
  const errorMessage = firebaseConfig.storageBucket 
    ? `Firebase Storage initialization failed. Error: ${error.message}. Please verify Storage is enabled in Firebase Console and the bucket name is correct.`
    : 'Firebase Storage is not configured. Please set NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET in your .env.local file (format: your-project-id.appspot.com or your-project-id.firebasestorage.app)'
  throw new Error(errorMessage)
}

export { storage }

export default app

