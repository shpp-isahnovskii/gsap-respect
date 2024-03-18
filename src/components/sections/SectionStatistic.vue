<script setup>
/* TODO: current graph need to be calculated by window height */
const graph = [27, 53, 61, 58, 31, 48, 59, 63, 55, 63, 71, 76, 67, 88];
</script>

<template>
  <section class="section-stats h-screen w-full bg-white">
    <div class="h-full flex flex-row gap-[1px] justify-around px-1 items-end">
      <div
        v-for="(value, index) in graph"
        :key="index"
        class="relative w-full max-h-[650px] bg-primary"
        :style="{ 'height': (650 / 100) * value + 'px'}"
      >
      <div class="text-primary bg-white text-sm text-center">{{ value }}</div>
      </div>
    </div>
  </section>
</template>
