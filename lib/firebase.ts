import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getFirestore, Firestore } from 'firebase/firestore'
import { getStorage, FirebaseStorage } from 'firebase/storage'

// Debug logging - check environment variables
console.log('Firebase Config Debug:', {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  hasApiKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  hasAuthDomain: !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  hasStorageBucket: !!process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  hasMessagingSenderId: !!process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  hasAppId: !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
})

// Fallback project ID if environment variable is missing
const FALLBACK_PROJECT_ID = 'ezparkk-e4d3b'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || FALLBACK_PROJECT_ID) + '.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || FALLBACK_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || FALLBACK_PROJECT_ID) + '.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Validate and warn if using fallback
if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
  console.warn('⚠️ NEXT_PUBLIC_FIREBASE_PROJECT_ID not found in environment variables!')
  console.warn(`⚠️ Using fallback project ID: ${FALLBACK_PROJECT_ID}`)
  console.warn('⚠️ Please set NEXT_PUBLIC_FIREBASE_PROJECT_ID in your .env.local file')
}

console.log('Final Firebase Config:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  storageBucket: firebaseConfig.storageBucket,
  hasApiKey: !!firebaseConfig.apiKey,
  hasMessagingSenderId: !!firebaseConfig.messagingSenderId,
  hasAppId: !!firebaseConfig.appId,
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

