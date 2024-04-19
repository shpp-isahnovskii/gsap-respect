import { computed } from 'vue';
import { useWindowResize } from '@/composable/useWindowResize';

const MOBILE_DEVICE_WIDTH = 640;

export const useMobileDevice = () => {
  const { width } = useWindowResize();
  const isMobile = computed(() => {
    return width.value < MOBILE_DEVICE_WIDTH;
  });
  return { isMobile };
};
