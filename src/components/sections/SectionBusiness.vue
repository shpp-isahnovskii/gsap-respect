<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { splittedText } from '@/animations/splittedText';
import { fadeIn } from '@/animations/fadeIn';

onMounted(() => {
  /* preset */
  gsap.set('.section-analytics--paragraph', { opacity: 0 });

  splittedText('.section-business', () => fadeIn('.section-business--agency'));
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
