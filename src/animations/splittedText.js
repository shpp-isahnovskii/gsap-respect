import { gsap } from 'gsap';
import SplitType from 'split-type';

export const splittedText = (text, onCompleteCallback) => {
  const splittedText = new SplitType(text, { types: 'chars, lines' });

  return gsap.fromTo(
    splittedText.chars,
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: splittedText.lines,
        start: 'top 80%',
        end: 'bottom 40%',
        scrub: true,
        once: true,
      },
      onComplete: () => onCompleteCallback(),
      opacity: 1,
      stagger: 2,
    },
  );
};
