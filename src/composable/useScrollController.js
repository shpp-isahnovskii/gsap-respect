export const useScrollController = () => {
  const hideScroll = () => {
    document.body.style.overflow = 'hidden';
  };
  const showScroll = () => {
    document.body.style.overflow = 'auto';
  };

  return { hideScroll, showScroll };
};
