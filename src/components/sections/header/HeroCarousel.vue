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

const folder = 'hero';
const imgNames = ['heroImageFour', 'heroImageThree', 'heroImageTwo', 'heroImageOne'];

</script>
<template>
  <div class="pinned-hero w-full">
    <div class="scroll-fading-hero">
      <picture v-for="(name, index) in imgNames">
        <source
          :srcset="$getImageURL(folder, name, 'lg')"
          media="(min-width: 1366px)"
          width="1366"
          height="800"
        />
        <source
          :srcset="$getImageURL(folder, name, 'md')"
          media="(min-width: 768px)"
          width="768"
          height="800"
        />
        <img
          :key="index"
          :src="$getImageURL(folder, name, 'xs')"
          :class="[{ absolute: index !== 0 }, 'hero-img h-[calc(49vh-60px)] sm:h-[calc(100vh-60px)] w-full object-cover top-0']"
          :alt="`hero image, slide ${index}`"
        />
      </picture>
    </div>
  </div>
</template>
