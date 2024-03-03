<script setup>
import { onMounted, watch } from 'vue';
import CompanyLogo from './CompanyLogo.vue';
import CompanyLogoMini from './CompanyLogoMini.vue';
import { gsap } from 'gsap';
import heroOneImage from '@/assets/images/heroOneImage.webp';

let tl = gsap.timeline({ defaults: { delay: 2 } });

onMounted(() => {
  tl.add('start')
    .to('.overlay', { y: '-100%', duration: 1.5 }, 'start')
    .from('.hero', { y: '+20%', opacity: 0, duration: 1.5 }, 'start');
});
</script>

<template>
  <header class="relative">
    <CompanyLogo />
    <div class="fixed w-full h-full overlay bg-black z-[9]" />
    <div class="hero">
      <img :src="heroOneImage" alt="hero image, slide one" />
      <div class="bg-primary h-screen">
        <nav class="relative grid grid-cols-12 justify-stretch p-3">
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
          <button
            class="flex col-span-3 w-[250px] ml-auto h-12 bg-black text-primary justify-end pr-3 items-center before:content-[url('./assets/images/icons/arrowRightIcon.svg')] before:flex before:w-6 before:h-5 before:mr-16"
          >
            Book a call
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>
