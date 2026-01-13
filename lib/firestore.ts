import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from './firebase'

export interface WaitlistSubmission {
  name: string
  email: string
  role: string
  message: string
  createdAt?: any
}

export interface JobApplication {
  name: string
  email: string
  phone?: string
  role: string
  resume?: string
  coverLetter: string
  linkedIn?: string
  portfolio?: string
  instagram?: string
  tiktok?: string
  location?: string
  availability?: string
  heardAboutUs?: string
  createdAt?: any
}

export async function addToWaitlist(data: WaitlistSubmission): Promise<string> {
  try {
    // Check if email already exists
    const waitlistRef = collection(db, 'waitlist')
    const q = query(waitlistRef, where('email', '==', data.email))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      throw new Error('This email is already on the waitlist!')
    }

    // Add document with timestamp
    const docRef = await addDoc(collection(db, 'waitlist'), {
      ...data,
      createdAt: serverTimestamp(),
    })

    return docRef.id
  } catch (error: any) {
    console.error('Error adding to waitlist:', error)
    throw error
  }
}

export async function uploadResume(file: File, applicantEmail: string): Promise<string> {
  try {
    // Validate Firebase Storage is initialized
    if (!storage) {
      throw new Error('Firebase Storage is not initialized. Please check your Firebase configuration.')
    }

    // Validate file before upload
    if (!file || file.size === 0) {
      throw new Error('Invalid file. Please select a valid resume file.')
    }

    if (file.size > 5 * 1024 * 1024) {
      throw new Error('File size exceeds 5MB limit. Please compress your resume.')
    }

    // Validate file type
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
    if (!allowedTypes.includes(file.type)) {
      throw new Error('Invalid file type. Please upload a PDF, DOC, or DOCX file.')
    }

    // Sanitize file name - remove special characters and spaces
    const sanitizedEmail = applicantEmail.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50)
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_').substring(0, 100)
    const timestamp = Date.now()
    const fileName = `resumes/${timestamp}_${sanitizedEmail}_${sanitizedFileName}`
    
    console.log('Uploading resume:', { fileName, size: file.size, type: file.type })
    
    // Create storage reference
    const storageRef = ref(storage, fileName)
    
    // Upload file with metadata
    const metadata = {
      contentType: file.type || 'application/pdf',
      customMetadata: {
        applicantEmail: applicantEmail,
        uploadedAt: new Date().toISOString(),
        originalFileName: file.name,
      },
    }
    
    // Upload bytes with progress tracking
    console.log('Starting upload to Firebase Storage...')
    await uploadBytes(storageRef, file, metadata)
    console.log('Upload completed, getting download URL...')
    
    // Get download URL
    const downloadURL = await getDownloadURL(storageRef)
    console.log('Download URL obtained:', downloadURL)
    
    return downloadURL
  } catch (error: any) {
    console.error('Error uploading resume:', error)
    console.error('Error details:', {
      code: error.code,
      message: error.message,
      stack: error.stack,
    })
    
    // Provide more specific error messages
    if (error.code === 'storage/no-default-bucket') {
      throw new Error('Firebase Storage bucket is not configured. Please set NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET in your .env.local file. Format: your-project-id.appspot.com')
    } else if (error.code === 'storage/unauthorized') {
      throw new Error('Storage access denied. Please check Firebase Storage security rules in Firebase Console.')
    } else if (error.code === 'storage/canceled') {
      throw new Error('Upload was canceled. Please try again.')
    } else if (error.code === 'storage/unknown') {
      throw new Error('An unknown error occurred during upload. Please check your internet connection and try again.')
    } else if (error.code === 'storage/quota-exceeded') {
      throw new Error('Storage quota exceeded. Please contact support.')
    } else if (error.code === 'storage/unauthenticated') {
      throw new Error('Authentication required. Please check Firebase configuration.')
    } else if (error.message) {
      throw new Error(error.message)
    } else {
      throw new Error('Failed to upload resume. Please check your file and Firebase Storage configuration.')
    }
  }
}

export async function submitJobApplication(data: JobApplication): Promise<string> {
  try {
    // Validate Firestore is initialized
    if (!db) {
      throw new Error('Firestore is not initialized. Please check your Firebase configuration.')
    }

    // Validate required fields
    if (!data.name || !data.email || !data.role || !data.coverLetter) {
      throw new Error('Missing required fields. Please fill in all required information.')
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email address. Please enter a valid email.')
    }

    // Sanitize data - ensure no undefined values (Firestore doesn't accept undefined, use null or empty string)
    const sanitizedData = {
      name: String(data.name || '').trim(),
      email: String(data.email || '').trim(),
      phone: data.phone ? String(data.phone).trim() : '',
      role: String(data.role || '').trim(),
      resume: data.resume ? String(data.resume).trim() : '',
      coverLetter: String(data.coverLetter || '').trim(),
      linkedIn: data.linkedIn ? String(data.linkedIn).trim() : '',
      portfolio: data.portfolio ? String(data.portfolio).trim() : '',
      instagram: data.instagram ? String(data.instagram).trim() : '',
      tiktok: data.tiktok ? String(data.tiktok).trim() : '',
      location: data.location ? String(data.location).trim() : '',
      availability: data.availability ? String(data.availability).trim() : '',
      heardAboutUs: data.heardAboutUs ? String(data.heardAboutUs).trim() : '',
      createdAt: serverTimestamp(),
    }

    // Validate sanitized required fields again
    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.role || !sanitizedData.coverLetter) {
      throw new Error('Required fields are empty after sanitization.')
    }

    console.log('Submitting to Firestore collection "jobApplications" with data:', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      role: sanitizedData.role,
      hasResume: !!sanitizedData.resume,
      coverLetterLength: sanitizedData.coverLetter.length,
    })

    // Add document with timestamp
    // NOTE: If this fails, check the Network tab for a failed request to firestore.googleapis.com
    // This usually indicates a Permissions/Rules issue in Firebase Console
    
    // Add timeout to prevent hanging indefinitely (30 seconds)
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        reject(new Error('Firestore request timed out after 30 seconds. This usually means Firestore security rules are blocking the write. Please check your Firestore rules in Firebase Console.'))
      }, 30000)
    })

    console.log('Calling addDoc...')
    const addDocPromise = addDoc(collection(db, 'jobApplications'), sanitizedData)
    
    // Race between the addDoc and timeout
    const docRef = await Promise.race([addDocPromise, timeoutPromise])
    
    console.log('Successfully added document with ID:', docRef.id)
    return docRef.id
  } catch (error: any) {
    // Log detailed error information for debugging
    console.error('❌ Error submitting job application to Firestore:', error)
    console.error('Error code:', error.code)
    console.error('Error message:', error.message)
    console.error('Error stack:', error.stack)
    console.error('Full error object:', JSON.stringify(error, null, 2))
    
    // IMPORTANT: Check the Network tab in Chrome DevTools for failed requests to firestore.googleapis.com
    // Look for requests with status 403 (Forbidden) or 400 (Bad Request)
    // This will tell you exactly what Firestore security rule is blocking the write
    
    // Provide more specific error messages based on Firestore error codes
    if (error.code === 'permission-denied') {
      const detailedError = 'Permission denied. Your Firestore security rules are blocking this write. Please check Firebase Console → Firestore Database → Rules and ensure the "jobApplications" collection allows writes. Example rule: allow create: if request.resource.data.keys().hasAll([\'name\', \'email\', \'role\', \'coverLetter\']);'
      console.error('🔒 PERMISSION DENIED - Check Firestore Rules:', detailedError)
      throw new Error(detailedError)
    } else if (error.code === 'unavailable') {
      throw new Error('Firestore service temporarily unavailable. Please try again in a moment.')
    } else if (error.code === 'failed-precondition') {
      throw new Error('Firestore operation failed due to a precondition. Please check your Firestore rules.')
    } else if (error.code === 'invalid-argument') {
      throw new Error('Invalid data format. Please check all fields are properly filled.')
    } else if (error.code === 'not-found') {
      throw new Error('Firestore database not found. Please check your Firebase project configuration.')
    } else if (error.message && error.message.includes('timed out')) {
      // Timeout error - most likely security rules issue
      throw error
    } else if (error.message) {
      throw new Error(error.message)
    } else {
      throw new Error('Failed to submit application. Please check the browser console and Network tab for details. Look for failed requests to firestore.googleapis.com in the Network tab.')
    }
  }
}

