<script setup>
import { usePageReady } from '@/composable/useWindowLoad';

const { currentProgress, isReady } = usePageReady();
</script>

<template>
  <div v-if="!isReady" class="absolute z-50 h-dvh w-full bg-black flex justify-end items-end">
    <span class="text-6xl sm:text-[10rem] text-primary leading-none mr-5 mb-2">{{
      currentProgress
    }}</span>
  </div>
</template>
