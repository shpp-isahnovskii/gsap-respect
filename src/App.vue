<script setup>
import PagePreloader from './components/PagePreloader.vue';
import PageLayout from './components/PageLayout.vue';
import { usePageReset } from '@/composable/usePageReset.js';
import { gsap, ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const { scrollReset } = usePageReset();
scrollReset();

onMounted(() => {
  gsap.set(document.body, { overflow: 'hidden' });
});
</script>

<template>
  <PagePreloader />
  <PageLayout />
</template>
