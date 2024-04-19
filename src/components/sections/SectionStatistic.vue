<script setup>
import { gsap } from 'gsap';
import { computed, onMounted } from 'vue';
import { useWindowResize } from '@/composable/useWindowResize';
import { splittedText } from '@/animations/splittedText';
import { fadeIn } from '@/animations/fadeIn';

const { height, width } = useWindowResize();
let graphMaxHeight = computed(() => Math.floor(height.value * 0.85));

onMounted(() => {
  /* preset */
  gsap.set('.section-analytics--paragraph', { opacity: 0 });

  splittedText('.section-analytics--header-text', () => fadeIn('.section-analytics--paragraph'));
  gsap.from('.graph-column', {
    scrollTrigger: {
      trigger: '.section-analytics--paragraph',
      start: 'top 50%',
      end: 'top 50%',
      once: true,
    },
    height: '20',
    stagger: 0.05,
  });
});

const graph = [27, 43, 51, 42, 31, 48, 59, 63, 55, 63, 71, 76, 67, 91];
const adjustableGraph = computed(() => {
  const proportionValue = (width.value - (width.value % 100)) / 100 + 4;
  return graph.slice(0, proportionValue < graph.length ? proportionValue : graph.length);
});
</script>

<template>
  <section class="relative h-screen w-full bg-white pt-10 sm:pt-20">
    <h2 class="section-analytics--header-text max-w-[1000px] px-2">
      Consistent leads flow to streamline Your business growth.
    </h2>
    <p class="section-analytics--paragraph px-2 pt-4 sm:pt-8 max-w-[450px]">
      We combine disruptive marketing techniques with proven tech solutions to provide maximum
      business value.
    </p>
    <div class="absolute w-full bottom-0 flex flex-row gap-[1px] justify-around items-end px-2">
      <div v-for="(value, index) in adjustableGraph" :key="index" class="w-full">
        <div class="text-primary text-sm text-center">{{ value }}</div>
        <div
          class="graph-column relative w-full bg-primary"
          :style="{ height: (graphMaxHeight / 100) * value + 'px' }"
        />
      </div>
    </div>
  </section>
</template>
