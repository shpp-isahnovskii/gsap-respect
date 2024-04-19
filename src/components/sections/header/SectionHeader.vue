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
  <header class="relative page-header">
    <div class="scene-opener fixed w-full h-screen bg-black z-30" />
    <CompanyLogo />
    <HeroCarousel class="hero-appears max-h-[90vh]" />
    <nav class="nav-section relative h-[10vh] bg-primary p-3 grid sm:grid-cols-12 justify-stretch">
      <CompanyLogoMini class="absolute col-start-1 col-end-3" />
      <ul
        class="flex justify-between h-min col-start-3 col-end-12 sm:col-end-7 sm:mt-3 [&>*]:underline sm:[&>*]:no-underline"
      >
        <li><a href="#">Services</a></li>
        <li><a href="#">Case Studies</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About us</a></li>
      </ul>
      <template v-if="!isMobile">
        <HiringAndContacts />
        <BookACallBtn />
      </template>
    </nav>
  </header>
</template>
