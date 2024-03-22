import { computed, ref, onMounted } from 'vue';

const useWindowLoad = () => {
  const isLoaded = ref(false);

  onMounted(() => {
    window.onload = () => {
      isLoaded.value = true;
    };
  });

  return { isLoaded };
};

const usePageReady = () => {
  const { isLoaded: isWindowReady } = useWindowLoad();
  const isTimerReady = ref(false);
  const currentProgress = ref(2);

  const progressStep = (range) => {
    return Math.floor(Math.random() * range) + 1;
  };

  const timer = setInterval(() => {
    const step = progressStep(20);
    currentProgress.value = currentProgress.value + step > 100 ? 98 : currentProgress.value + step;
    if (currentProgress.value >= 98) {
      clearInterval(timer);
      isTimerReady.value = true;
      return;
    }
  }, 200);

  const isReady = computed(() => isWindowReady && isTimerReady.value);

  return { isReady, currentProgress };
};

export { usePageReady };
