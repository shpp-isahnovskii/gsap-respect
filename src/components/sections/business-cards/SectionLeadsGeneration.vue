<script setup>
import { ref } from 'vue';
import BTBMarketing from './BTBMarketing.vue';
import LeadGeneration from './LeadGeneration.vue';

const pages = [
  { component: BTBMarketing, index: 0 },
  { component: LeadGeneration, index: 1 },
];
const activePageIndex = ref(0);

const resetActivePage = (pageIndex) => {
  if (pageIndex !== 0) {
    activePageIndex.value = 0;
  }
};
</script>

<template>
  <section class="bg-white h-[70vh] sm:h-[80vh] pb-20 sm:pb-0 px-3 sm:overflow-hidden w-full relative">
    <component
      v-for="page in pages"
      :key="page.index"
      :is="page.component"
      @focus-in="activePageIndex = page.index"
      @focus-out="resetActivePage(page.index)"
      :is-active="activePageIndex === page.index"
    />
  </section>
</template>
