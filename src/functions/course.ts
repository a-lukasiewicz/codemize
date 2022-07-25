import { db } from '@/main';
import { doc, getDoc, increment, updateDoc } from 'firebase/firestore';
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

export const markAsCompleted = async (uid: string, value: number) => {
  try {
    await updateDoc(doc(db, 'users', uid), {
      currentPath: {
        pathID: 'QK3n5NCwOKrfjyOYr9Nh',
        currentTech: 'HTML',
        doneOfTech: increment(value),
      },
    });
  } catch (error) {
    console.error(error);
  }
};
