<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import SplitType from 'split-type';

let firstWord;
let secondWord;

const splitType = (tag) => {
  return new SplitType(tag, { types: 'chars' }).chars.toSpliced(0, 1);
};

const tl = gsap.timeline({ defaults: { opacity: 0, stagger: 0.1, duration: 0.1 } });

onMounted(() => {
  firstWord = splitType('.title-respect');
  secondWord = splitType('.title-studio');

  tl.add('start')
    .from(firstWord, {}, 'start')
    .from(secondWord, {}, 'start')
    .delay(1)
    .play();
});
</script>

<template>
  <div class="relative [&>*]:absolute flex flex-col text-6xl text-primary z-10">
    <div class="title-respect">Respect</div>
    <div class="title-dot top-4">.</div>
    <div class="title-studio rotate-90 w-fit -left-12 top-[7.5rem]">Studio</div>
  </div>
</template>
