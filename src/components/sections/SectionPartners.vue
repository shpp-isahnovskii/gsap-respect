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
      scrollTrigger: { trigger: '.trusted-lt', start: 'top 80%', once: true },
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
  { title: 'Revenue generated for clients', score: '1570', style: 'justify-end' },
  {
    title: 'Conversations opened',
    score: '1200',
    style: 'justify-center ml-[30%]',
  },
  { title: 'Leads generated via targeted', score: '378', style: 'sm:justify-center justify-end' },
  {
    title: 'Calls scheduled for clients',
    score: '197',
    style: 'justify-center ml-[40%] sm:ml-[50%]',
  },
];
</script>

<template>
  <section class="flex flex-col gap-y-[1px] bg-white px-2 pb-8 sm:pb-0">
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="partners-graph flex items-top h-14 sm:h-20 text-primary bg-black w-auto"
      :class="stat.style"
    >
      <span class="sm:text-base text-sm text-right mt-[2px] sm:mt-0 sm:w-40 ml-1 mr-3">{{
        stat.title
      }}</span>
      <span class="text-5xl sm:text-7xl mr-4">{{ stat.score }}</span>
    </div>
    <div class="flex flex-col w-full items-start text-primary mt-14 sm:mt-0">
      <hr class="trusted-lt--lines border-t-2 border-primary sm:mt-16 mb-2 opacity-50" />
      <h3 class="trusted-lt text-4xl md:text-5xl lg:text-7xl">Trusted long-term partner</h3>
      <span class="trusted-lt--bottom-section text-md md:text-3xl max-w-96 lg:self-end lg:text-right mt-2 sm:mt-3"
        >For leading B2B tech and service companies</span
      >
      <hr class="trusted-lt--lines border-t-2 border-primary mt-2 sm:mt-6 opacity-50" />
      <p class="trusted-lt--annotation text-base sm:text-lg mt-4 sm:mt-10 mb-4">
        We combine disruptive marketing techniques with proven tech solutions to provide maximum
        business value.
      </p>
    </div>
  </section>
</template>
