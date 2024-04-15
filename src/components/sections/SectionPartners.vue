<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const hideGraphicStatistics = (node) => {
  gsap.utils.toArray(node).forEach((child) => {
    gsap.set(child, { opacity: 0, x: -20 });
  });
};
const showGraphicStatistics = (node) => {
  gsap.utils.toArray(node).forEach((child) => {
    gsap.to(child, {
      opacity: 1,
      x: 0,
      duration: 1,
    });
  });
};

onMounted(() => {
  /* graphs */
  const elements = gsap.utils.toArray('.partners-graph');
  elements.forEach((node, i) => {
    hideGraphicStatistics(node.children);
    gsap.from(node, {
      width: 0,
      duration: 1.5,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: node,
        start: 'top 80%',
        once: true,
      },
      onComplete: () => {
        showGraphicStatistics(node.children);
      },
    });
  });
  const ctx = gsap.context(() => {
    /* hr lines */
    const splittedText = new SplitType('.trusted-lt', { types: 'chars, lines' });
    gsap.set('.trusted-lt--lines', { width: '30%' });
    gsap.to('.trusted-lt--lines', {
      width: '100%',
      duration: 1,
      scrollTrigger: { trigger: '.trusted-lt', start: 'top 80%', once: true, },
    });
    /* bottom text annotations */
    gsap.set(splittedText.chars, { opacity: 0 });
    gsap.set(['.trusted-lt--bottom-section', '.trusted-lt--annotation'], { opacity: 0 });
    gsap.to(splittedText.chars, {
      opacity: 1,
      duration: 0.3,
      stagger: 0.04,
      scrollTrigger: { trigger: '.trusted-lt', start: 'top 80%', once: true },
      onComplete: () => {
        gsap.to(['.trusted-lt--bottom-section', '.trusted-lt--annotation'], {
          opacity: 1,
          duration: 1,
        });
      },
    });
  });
});
const stats = [
  { title: 'Revenue generated for clients', score: '1570', options: { justify: 'justify-end' } },
  {
    title: 'Conversations opened',
    score: '1200',
    options: { justify: 'justify-center', ml: 'ml-[30%]' },
  },
  { title: 'Leads generated via targeted', score: '378' },
  {
    title: 'Calls scheduled for clients',
    score: '197',
    options: { justify: 'justify-center', ml: 'ml-[50%]' },
  },
];
</script>

<template>
  <section class="flex flex-col gap-y-[1px] h-[80vh] bg-white px-2">
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="partners-graph flex items-top h-20 text-primary bg-black w-auto"
      :class="[
        stat?.options?.justify && stat.options.justify,
        stat?.options?.ml && stat.options.ml,
      ]"
    >
      <span class="text-md text-right w-40 ml-1 mr-3">{{ stat.title }}</span>
      <span class="text-7xl mr-4">{{ stat.score }}</span>
    </div>
    <div class="flex flex-col w-full items-start text-primary">
      <hr class="trusted-lt--lines border-t-2 border-primary mt-16 mb-2 opacity-50" />
      <h3 class="trusted-lt text-8xl">Trusted long-term partner</h3>
      <span class="trusted-lt--bottom-section text-3xl max-w-96 self-end mt-3"
        >For leading B2B tech and service companies</span
      >
      <hr class="trusted-lt--lines border-t-2 border-primary mt-6 opacity-50" />
      <p class="trusted-lt--annotation text-lg mt-10">
        We combine disruptive marketing techniques with proven tech solutions to provide maximum
        business value.
      </p>
    </div>
  </section>
</template>
