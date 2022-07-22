import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/main';

export const createUser = async (
  uid: string,
  email: string,
  fullName?: string
) => {
  try {
    await setDoc(doc(db, 'users', uid), {
      fullName,
      currentPath: {},
      selectedPlan: '',
      email,
      createdAt: Timestamp.now().toDate(),
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getUser = async (uid: string) => {
  const docSnap = await getDoc(doc(db, 'cities', uid));
  return docSnap.exists() ? docSnap.data() : '';
};
