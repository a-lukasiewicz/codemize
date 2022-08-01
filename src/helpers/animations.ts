import { gsap } from 'gsap';

interface directions {
  left: string;
  right: string;
}

export const slideDownOpacity = (
  selection: string,
  duration: Array<number>,
  yStartPos: string
) => {
  gsap.to(selection, {
    duration: duration[0],
    ease: 'power4.out',
    y: yStartPos,
    opacity: 0,
  });
  gsap.to(selection, {
    duration: duration[1],
    ease: 'power4.out',
    y: 0,
    opacity: 1,
  });
};

export const slideFromSideOpacity = (selection: string, side: string) => {
  const directions: directions = {
    left: '-100%',
    right: '100%',
  };

  gsap.to(selection, {
    duration: 0.5,
    ease: 'power4.out',
    x: directions[side as keyof directions],
    opacity: 0,
  });
  gsap.to(selection, {
    duration: 2.5,
    ease: 'power4.out',
    x: 0,
    opacity: 1,
  });
};
