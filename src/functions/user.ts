import {
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from '@/main';
import { createToastFunction } from '@/helpers/createToast';
import { router } from '@/router';

export const createUser = async (
  uid: string,
  email: string,
  photoURL?: string,
  fullName?: string
) => {
  try {
    await setDoc(doc(db, 'users', uid), {
      fullName,
      currentPath: {},
      selectedPlan: '',
      photoURL,
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

export const deleteUser = async (uid: string) => {
  try {
    await deleteDoc(doc(db, 'users', uid));
    auth?.currentUser?.delete();
    createToastFunction('Account successfully deleted', 'success');
    router.push('/');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    createToastFunction(error, 'danger');
  }
};

export const addPathToUser = async (uid: string) => {
  try {
    await updateDoc(doc(db, 'users', uid), {
      currentPath: {
        pathID: 'QK3n5NCwOKrfjyOYr9Nh',
        currentTech: 'HTML',
        doneOfTech: 0,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
