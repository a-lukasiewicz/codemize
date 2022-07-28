import { gsap } from 'gsap';

export const slideDownOpacity = (selection: string) => {
  gsap.to(selection, {
    duration: 0.5,
    ease: 'power4.out',
    y: '-50%',
    opacity: 0,
  });
  gsap.to(selection, {
    duration: 1.5,
    ease: 'power4.out',
    y: 0,
    opacity: 1,
  });
};
