<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import heroImageOne from '@/assets/images/heroImageOne.webp';
import heroImageTwo from '@/assets/images/heroImageTwo.webp';
import heroImageThree from '@/assets/images/heroImageThree.webp';
import heroImageFour from '@/assets/images/heroImageFour.webp';

const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, delay: 1 });

onMounted(() => {
  tl.from('.hero-img', { opacity: 0, stagger: 1, duration: 0 });
});

const imagesArray = [heroImageFour, heroImageThree, heroImageTwo, heroImageOne];
</script>
<template>
  <img
    v-for="(image, index) in imagesArray"
    :key="index"
    :src="image"
    :class="[index !== 0 && 'absolute', 'hero-img w-full top-0']"
    :alt="`hero image, slide ${index}`"
  />
</template>
