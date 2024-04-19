<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { splittedText } from '@/animations/splittedText';
import { fadeIn } from '@/animations/fadeIn';
import bayer from '@/assets/images/brands/bayer.svg';
import salesforce from '@/assets/images/brands/salesforce.svg';
import sap from '@/assets/images/brands/sap.svg';
import office from '@/assets/images/brands/office.svg';
import hp from '@/assets/images/brands/hp.svg';

onMounted(() => {
  /* preset */
  gsap.set(['.lead-companies', '.header-text--leads'], { opacity: 0 });
  gsap.set('.generated-lead--border', { height: 0 });
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.lead-companies',
      start: 'top 80%',
      end: 'top 80%',
      once: true,
    },
  });

  tl.to('.lead-companies', {
    opacity: 1,
    duration: 1,
  }).to('.generated-lead--border', {
    duration: 1,
    stagger: 0.1,
    height: '100%',
  }, '<');
  tl.pause();

  splittedText('.header-text--fight-cold', () => {
    fadeIn('.header-text--leads', {delay: 0});
    tl.play();
  }, {end: 'bottom 65%'});
});

const images = [
  {
    src: sap,
    alt: 'SAP',
  },
  {
    src: bayer,
    alt: 'Bayer',
  },
  {
    src: office,
    alt: 'Office 360',
  },
  {
    src: salesforce,
    alt: 'Sales-force',
  },
  {
    src: hp,
    alt: 'HP',
  },
];
</script>
<template>
  <section class="bg-white pb-2 px-2 pt-4 sm:tp-0">
    <h2 class="header-text--fight-cold pb-4 sm:pb-14">Let's fight cold <span v-text="'together'" class="text-primary" /></h2>
    <div class="header-text--leads max-w-[13rem] mb-12 sm:mb-24">We generated leads from top-performing companies</div>
    <div
      class="lead-companies flex flex-row justify-around items-top border-y-[1px] border-primary h-20 sm:h-40"
    >
      <div v-for="(image, index) in images" class="relative w-[20%]">
        <img
          :key="index"
          :src="image.src"
          :alt="image.alt"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 sm:w-auto"
        />
        <div
          class="generated-lead--border h-full"
          :class="[{ 'border-primary border-r-[1px]': index != images.length - 1 }]"
        />
      </div>
    </div>
  </section>
</template>
