<script setup>
import { onMounted, watch } from 'vue';
import CompanyLogo from './CompanyLogo.vue';
import CompanyLogoMini from './CompanyLogoMini.vue';
import { usePageReady } from '@/composables/useWindowLoad';
import { gsap } from 'gsap';
import heroOneImage from '@/assets/images/heroOneImage.webp';

let tl = gsap.timeline({ defaults: { delay: 2 } });

const { isReady } = usePageReady();

onMounted(() => {
  watch(isReady, () => {
    tl.add('start')
      .to('.overlay', { y: '-100%', duration: 1.5 }, 'start')
      .from('.hero', { y: '+20%', opacity: 0, duration: 1.5 }, 'start');
  });
});
</script>

<template>
  <header class="relative">
    <CompanyLogo v-if="isReady" />
    <div class="fixed w-full h-full overlay bg-black z-[9]" />
    <div class="hero">
      <img :src="heroOneImage" alt="hero image, slide one" />
      <nav class="relative flex justify-center bg-primary h-screen">
        <CompanyLogoMini />
      </nav>
    </div>
  </header>
</template>
