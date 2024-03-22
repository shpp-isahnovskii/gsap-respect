import { gsap } from 'gsap';

export const fadeIn = (node) => {
  gsap.to(node, {
    delay: 0.5,
    opacity: 1,
    duration: 1,
  });
};
