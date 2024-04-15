<script setup>
import { usePageReady } from '@/composable/useWindowLoad';

const { currentProgress, isReady } = usePageReady();
</script>

<template>
  <div v-if="!isReady" class="absolute z-50 h-dvh w-full bg-black">
    <span class="text-[10rem] text-primary absolute bottom-0 right-[20px]">{{
      currentProgress
    }}</span>
  </div>
</template>
