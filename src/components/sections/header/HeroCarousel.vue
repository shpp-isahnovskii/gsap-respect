<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import heroImageOne from '@/assets/images/hero/heroImageOne.webp';
import heroImageTwo from '@/assets/images/hero/heroImageTwo.webp';
import heroImageThree from '@/assets/images/hero/heroImageThree.webp';
import heroImageFour from '@/assets/images/hero/heroImageFour.webp';

const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, delay: 1 });

onMounted(() => {
  tl.add('hero-loop').from(
    '.hero-img',
    {
      opacity: 0,
      stagger: 1,
      duration: 0,
    },
    'hero-loop',
  );
  gsap.to('.pinned-hero', {
    scrollTrigger: {
      trigger: '.pinned-hero',
      start: 'top top',
      pin: true,
      pinSpacing: false,
    },
  });
  gsap.to('.scroll-fading-hero', {
    scrollTrigger: {
      trigger: '.scroll-fading-hero',
      start: 'top top',
      scrub: true,
    },
    opacity: 0.5,
  });
});

const imagesArray = [heroImageFour, heroImageThree, heroImageTwo, heroImageOne];
</script>
<template>
  <div class="pinned-hero w-full">
    <div class="scroll-fading-hero">
      <img
        v-for="(image, index) in imagesArray"
        :key="index"
        :src="image"
        :class="[{ absolute: index !== 0 }, 'hero-img h-auto w-full object-cover top-0']"
        :alt="`hero image, slide ${index}`"
        height="905"
        width="2000"
      />
    </div>
  </div>
</template>
