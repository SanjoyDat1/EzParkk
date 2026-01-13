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
    // Validate required fields
    if (!data.name || !data.email || !data.role || !data.coverLetter) {
      throw new Error('Missing required fields. Please fill in all required information.')
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email address. Please enter a valid email.')
    }

    // Add document with timestamp
    const docRef = await addDoc(collection(db, 'jobApplications'), {
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      role: data.role,
      resume: data.resume || '',
      coverLetter: data.coverLetter,
      linkedIn: data.linkedIn || '',
      portfolio: data.portfolio || '',
      instagram: data.instagram || '',
      tiktok: data.tiktok || '',
      location: data.location || '',
      availability: data.availability || '',
      heardAboutUs: data.heardAboutUs || '',
      createdAt: serverTimestamp(),
    })

    return docRef.id
  } catch (error: any) {
    console.error('Error submitting job application:', error)
    
    // Provide more specific error messages
    if (error.code === 'permission-denied') {
      throw new Error('Permission denied. Please check Firestore security rules.')
    } else if (error.code === 'unavailable') {
      throw new Error('Service temporarily unavailable. Please try again in a moment.')
    } else if (error.message) {
      throw new Error(error.message)
    } else {
      throw new Error('Failed to submit application. Please try again.')
    }
  }
}

