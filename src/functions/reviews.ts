import { getDocs, collection } from 'firebase/firestore';
import { db } from '@/main';

export const getReviews = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reviews = [] as any;
  const querySnapshot = await getDocs(collection(db, 'reviews'));

  querySnapshot.forEach((doc) => {
    reviews.push(doc.data());
  });
  return reviews;
};
