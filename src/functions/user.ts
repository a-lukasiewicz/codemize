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

export const isUserExsist = async (uid: string) => {
  const docSnap = await getDoc(doc(db, 'users', uid));
  return docSnap.exists() ? docSnap.data() : '';
};

export const getUserData = async (uid: string) => {
  const docSnap = await getDoc(doc(db, 'users', uid));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.error('Error while getting user data.');
  }
};

export const getUserCourseInfo = async (uid: string) => {
  const data = await getUserData(uid);

  return data && Object.keys(data).length === 0 && data.constructor === Object
    ? false
    : true;
};
