<script setup>
import PagePreloader from './components/PagePreloader.vue';
import PageLayout from './components/PageLayout.vue';
import { usePageReady } from '@/composable/useWindowLoad';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const { isReady } = usePageReady();
</script>

<template>
  <component :is="isReady ? PageLayout : PagePreloader" />
</template>
