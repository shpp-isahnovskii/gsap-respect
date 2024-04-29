<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import BookACallBtn from '@/components/common/BookACallBtn.vue';
import HiringAndContacts from '@/components/common/HiringAndContacts.vue';
import { showCharsByScrolling, showCharsByTrigger } from '@/animations/fadeInCharArray';
import { fadeIn } from '@/animations/fadeIn';
import { useMobileDevice } from '@/composable/useMobileDevice';
import { MOBILE_DEVICE_WIDTH, TABLET_DEVICE_WIDTH } from '@/constants/media';
import { useMediaQuery } from '@/composable/useMediaQuery';

const { isMobile, isTablet } = useMobileDevice();
const { maxMediaQuery, minMediaQuery } = useMediaQuery();

onMounted(() => {
  gsap.set('.growing-business--annotation', { opacity: 0 });

  const mm = gsap.matchMedia();
  mm.add(maxMediaQuery(MOBILE_DEVICE_WIDTH), () => {
    showCharsByTrigger('.growing-business--text', () => fadeIn('.growing-business--annotation'));
  });
  mm.add(minMediaQuery(MOBILE_DEVICE_WIDTH + 1), () => {
    showCharsByScrolling('.growing-business--text', () => fadeIn('.growing-business--annotation'));
  });
});
</script>

<template>
  <section
    class="w-full h-[51svh] sm:h-[calc(100vh-60px)] bg-primary relative flex flex-col justify-between px-2"
  >
    <h1
      class="growing-business--text text-right w-[14rem] sm:w-8/12 xl:w-[44rem] ml-auto mt-auto sm:mt-0 sm:pt-16 lg:pt-24 sm:pr-3"
    >
      Growing businesses by building relationships
    </h1>
    <HiringAndContacts v-if="isMobile" class="ml-auto [&>*]:ml-3" />
    <div class="growing-business--annotation max-w-64 py-3 sm:p-3 pb-2 lg:pb-5 mt-auto w-36 sm:w-auto text-xs sm:text-base">
      B2B Marketing & LinkedIn Lead Generation agency
    </div>
    <BookACallBtn v-if="isMobile || isTablet" class="growing-business--annotation mb-3 sm:ml-3" />
  </section>
</template>
