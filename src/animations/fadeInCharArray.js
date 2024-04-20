import { gsap } from 'gsap';
import SplitType from 'split-type';

export const showCharsByScrolling = (
  text,
  onCompleteCallback = () => {},
  options = { end: 'bottom 40%' },
) => {
  const splittedText = new SplitType(text, { types: 'chars, lines' });

  return gsap.fromTo(
    splittedText.chars,
    { opacity: 0 },
    {
      scrollTrigger: {
        trigger: splittedText.lines,
        start: 'top 80%',
        end: options.end || 'bottom 40%',
        scrub: true,
        once: true,
      },
      onComplete: () => onCompleteCallback(),
      opacity: 1,
      stagger: 2,
    },
  );
};

export const showCharsByTrigger = (textNode, onCompleteCallback = () => {}) => {
  const splittedText = new SplitType(textNode, { types: 'chars, lines' });
  return gsap.fromTo(
    splittedText.chars,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.1,
      stagger: 0.04,
      delay: 4,
      onComplete: () => onCompleteCallback(),
    },
  );
};
