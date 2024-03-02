<script setup>
import PagePreloader from './components/PagePreloader.vue';
import PageLayout from './components/PageLayout.vue';
import { gsap } from 'gsap';
import { ref } from 'vue';

const tl = gsap.timeline();

const isPreLoadFinished = ref(false);
</script>

<template>
  <PagePreloader @is-loaded="isPreLoadFinished = true" />
  <PageLayout :play-gsap="isPreLoadFinished" />
</template>
