<script setup>
import { onMounted, watch } from 'vue';
import CompanyLogoMini from './CompanyLogoMini.vue';
import HeroCarousel from './HeroCarousel.vue';
import CompanyLogo from './CompanyLogo.vue';
import { usePageReady } from '@/composable/useWindowLoad';
import { gsap } from 'gsap';

const { isReady } = usePageReady();
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
    <nav class="nav-section relative h-[10vh] bg-primary p-3 grid grid-cols-12 justify-stretch">
      <CompanyLogoMini class="absolute col-start-1 col-end-3" />
      <ul class="flex justify-between col-start-3 col-end-7 mt-3">
        <li><a href="#">Services</a></li>
        <li><a href="#">Case Studies</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About us</a></li>
      </ul>
      <ul class="flex justify-between col-start-8 col-end-10 mt-3">
        <li><a href="#">We're hiring</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
      <button class="btn-primary--header col-span-3 ml-auto">Book a call</button>
    </nav>
  </header>
</template>
