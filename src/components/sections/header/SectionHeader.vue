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
  <header class="relative page-header h-[49svh] sm:h-screen">
    <div class="scene-opener fixed w-full h-screen bg-black z-30" />
    <CompanyLogo />
    <HeroCarousel class="hero-appears h-[calc(49vh-60px)] sm:h-[calc(100vh-60px)]" />
    <nav class="nav-section flex h-[60px] relative bg-primary p-3">
      <CompanyLogoMini class="absolute" />
      <ul
        class="flex justify-end w-full sm:w-auto sm:min-w-min sm:mt-[2px] sm:items-center [&>*]:ml-3 sm:[&>*]:ml-12 [&>*]:underline sm:[&>*]:no-underline"
      >
        <li><a href="#">Services</a></li>
        <li><a href="#">Case Studies</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About us</a></li>
      </ul>
      <template v-if="!isMobile">
        <HiringAndContacts class="[&>*]:mr-12 ml-auto mt-[2px]" />
        <BookACallBtn />
      </template>
    </nav>
  </header>
</template>
