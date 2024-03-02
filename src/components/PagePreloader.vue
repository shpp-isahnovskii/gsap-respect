<script setup>
import { usePageReady } from '@/composables/useWindowLoad';
const { currentProgress, isReady } = usePageReady();
</script>

<template>
  <div class="absolute z-10 h-dvh w-dvw bg-black" :class="{ hidden: isReady }">
    <span class="text-[10rem] text-primary absolute bottom-0 right-[20px]">{{
      currentProgress
    }}</span>
  </div>
</template>
