<script setup>
import PagePreloader from './components/PagePreloader.vue';
import LayoutPage from './components/LayoutPage.vue';
import { usePageReady } from '@/composables/useWindowLoad';

const { currentProgress, isReady } = usePageReady();
</script>

<template>
  <component :is="isReady ? LayoutPage : PagePreloader" />
</template>
