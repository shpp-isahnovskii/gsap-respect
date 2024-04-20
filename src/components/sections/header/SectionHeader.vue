<script setup>
import { onMounted, watch } from 'vue';
import CompanyLogoMini from './CompanyLogoMini.vue';
import HeroCarousel from './HeroCarousel.vue';
import CompanyLogo from './CompanyLogo.vue';
import BookACallBtn from '@/components/common/BookACallBtn.vue';
import HiringAndContacts from '@/components/common/HiringAndContacts.vue';
import { usePageReady } from '@/composable/useWindowLoad';
import { useMobileDevice } from '@/composable/useMobileDevice';
import { gsap } from 'gsap';

const { isReady } = usePageReady();
const { isMobile } = useMobileDevice();
const tl = gsap.timeline();

watch(
  () => isReady.value,
  (isReady) => {
    if (isReady) {
      tl.play();
    }
  },
);
onMounted(() => {
  tl.add('start')
    .to('.scene-opener', { y: '-100%', duration: 1.5, delay: 2 }, 'start')
    .from(
      '.hero-appears',
      {
        y: '20%',
        opacity: 0,
        duration: 1.5,
        delay: 2,
      },
      'start',
    )
    .set(document.body, { overflowY: 'auto' })
    .pause();
});
</script>

<template>
  <header class="relative page-header h-[49vh] sm:h-screen">
    <div class="scene-opener fixed w-full h-screen bg-black z-30" />
    <CompanyLogo />
    <HeroCarousel class="hero-appears" />
    <nav class="nav-section h-[68px] relative bg-primary p-3 grid sm:grid-cols-12 justify-stretch">
      <CompanyLogoMini class="absolute col-start-1 col-end-2" />
      <ul
        class="flex justify-between h-min col-start-2 col-end-10 sm:col-end-6 sm:mt-3 [&>*]:underline sm:[&>*]:no-underline"
      >
        <li><a href="#">Services</a></li>
        <li><a href="#">Case Studies</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About us</a></li>
      </ul>
      <template v-if="!isMobile">
        <HiringAndContacts class="md:col-start-8 md:col-end-10" />
        <BookACallBtn class="col-start-11 col-end-12" />
      </template>
    </nav>
  </header>
</template>
