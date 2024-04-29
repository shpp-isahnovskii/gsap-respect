<script setup>
import { ref } from 'vue';
import BTBCard from './BTBCard.vue';
import LGCard from './LGCard.vue';

const pages = [
  { component: BTBCard },
  { component: LGCard },
];
const activePageIndex = ref(0);

const resetActivePage = (pageIndex) => {
  if (pageIndex !== 0) {
    activePageIndex.value = 0;
  }
};
</script>

<template>
  <section class="bg-white min-h-[480px] lg:min-h-[580px] px-3 sm:overflow-hidden w-full relative">
    <component
      v-for="(page, index) in pages"
      :key="index"
      :is="page.component"
      @focus-in="activePageIndex = index"
      @focus-out="resetActivePage(index)"
      :is-active="activePageIndex === index"
    />
  </section>
</template>
