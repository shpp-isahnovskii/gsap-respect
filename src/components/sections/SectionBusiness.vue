<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import SplitType from 'split-type';

onMounted(() => {
  const splittedText = new SplitType('.section-business', { types: 'chars, lines' });
  gsap.from(splittedText.chars, {
    scrollTrigger: {
      trigger: splittedText.lines,
      start: 'top 80%',
      end: 'bottom 50%',
      scrub: true,
      once: true,
    },
    opacity: 0,
    stagger: 0.1,
    onComplete: () => {
      gsap.to('.section-business--agency', {
        delay: 0.5,
        opacity: 1,
        duration: 1,
      });
    },
  });
});
</script>

<template>
  <section class="w-full h-[90vh] bg-primary relative flex flex-col justify-between">
    <div class="section-business text-[7rem]/[6.5rem] text-right max-w-[54rem] ml-auto pt-24">
      Growing businesses by building relationships
    </div>
    <div class="section-business--agency max-w-64 p-3 pb-5 opacity-0">
      B2B Marketing & LinkedIn Lead Generation agency
    </div>
  </section>
</template>
