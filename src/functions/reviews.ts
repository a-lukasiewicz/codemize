import { getDocs, collection, QuerySnapshot } from 'firebase/firestore';
import { db } from '@/main';
import { Review } from '@/types';

export const getReviews = async () => {
  const reviews = [] as Review[];

  const querySnapshot = (await getDocs(
    collection(db, 'reviews')
  )) as QuerySnapshot;

  querySnapshot.forEach((doc) => {
    reviews.push(doc.data() as Review);
  });

  return reviews;
};
