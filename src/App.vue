<script setup>
import PagePreloader from './components/PagePreloader.vue';
import PageLayout from './components/PageLayout.vue';
import { usePageReady } from '@/composable/useWindowLoad';
import { gsap, ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  gsap.set(document.body, { overflow: 'hidden' });
});

const { isReady } = usePageReady();
</script>

<template>
  <PagePreloader v-if="!isReady" />
  <PageLayout v-show="isReady" />
</template>
