import { gsap } from 'gsap';

export const fadeIn = (node, options = { delay: 0.5 }) => {
  gsap.to(node, {
    delay: options.delay,
    opacity: 1,
    duration: 1,
  });
};
