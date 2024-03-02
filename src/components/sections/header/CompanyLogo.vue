<script setup>
import { gsap } from 'gsap';
import { onMounted, watch } from 'vue';
import SplitType from 'split-type';
import { usePageReady } from '@/composables/useWindowLoad';

let firstWord;
let secondWord;

const createSplitType = (tag) => {
  return new SplitType(tag, { types: 'chars' }).chars.toSpliced(0, 1);
};

const tl = gsap.timeline({
  defaults: {
    duration: 0.1,
    stagger: 0.1,
    opacity: 0,
  },
});

const { isReady } = usePageReady();

onMounted(() => {
  firstWord = createSplitType('.title-respect');
  secondWord = createSplitType('.title-studio');
  tl.delay(1).from(firstWord, {}).from(secondWord, {}, '<');
});
</script>

<template>
  <div class="relative [&>*]:absolute flex flex-col text-5xl text-primary z-10">
    <div class="title-respect">Respect</div>
    <div class="top-4">.</div>
    <div class="title-studio rotate-90 w-fit -left-10 top-[6.5rem]">Studio</div>
  </div>
</template>
