import { db } from '@/main';
import { doc, getDoc } from 'firebase/firestore';
import { getUserData } from './user';

export const getUserCourseInfo = async (uid: string) => {
  const data = await getUserData(uid);

  return data && Object.keys(data).length === 0 && data.constructor === Object
    ? false
    : true;
};

export const getNumberOfCourseLessons = async () => {
  try {
    const docSnap = await getDoc(doc(db, 'paths', 'QK3n5NCwOKrfjyOYr9Nh'));
    return docSnap.exists() ? docSnap.data() : '';
  } catch (error) {
    console.error(error);
  }
};
