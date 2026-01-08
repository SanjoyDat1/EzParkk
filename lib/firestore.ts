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
    const fileName = `resumes/${Date.now()}_${file.name}`
    const storageRef = ref(storage, fileName)
    await uploadBytes(storageRef, file)
    const downloadURL = await getDownloadURL(storageRef)
    return downloadURL
  } catch (error: any) {
    console.error('Error uploading resume:', error)
    throw new Error('Failed to upload resume. Please try again.')
  }
}

export async function submitJobApplication(data: JobApplication): Promise<string> {
  try {
    // Add document with timestamp
    const docRef = await addDoc(collection(db, 'jobApplications'), {
      ...data,
      createdAt: serverTimestamp(),
    })

    return docRef.id
  } catch (error: any) {
    console.error('Error submitting job application:', error)
    throw error
  }
}

