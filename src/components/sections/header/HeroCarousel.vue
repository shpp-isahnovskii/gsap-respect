<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

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

const baseURL = '/src/assets/images/hero';
const imgNames = ['heroImageFour', 'heroImageThree', 'heroImageTwo', 'heroImageOne'];

</script>
<template>
  <div class="pinned-hero w-full">
    <div class="scroll-fading-hero">
      <picture v-for="(name, index) in imgNames">
        <source
          :srcset="$getImageURL(baseURL, 'lg', name)"
          media="(min-width: 1366px)"
          width="1366"
          height="800"
        />
        <source
          :srcset="$getImageURL(baseURL, 'md', name)"
          media="(min-width: 768px)"
          width="768"
          height="800"
        />
        <img
          :key="index"
          :src="$getImageURL(baseURL, 'xs', name)"
          :class="[{ absolute: index !== 0 }, 'hero-img h-auto w-full object-cover top-0']"
          :alt="`hero image, slide ${index}`"
        />
      </picture>
    </div>
  </div>
</template>
