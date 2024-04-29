<script setup>
import imageOne from '@/assets/images/choose-us/imageOne.webp';
import imageTwo from '@/assets/images/choose-us/imageTwo.webp';
import imageThree from '@/assets/images/choose-us/imageThree.webp';
import { gsap } from 'gsap';
import { onMounted } from 'vue';

const imageSet = [
  {
    img: imageOne,
    x: 'top-0',
    y: 'right-0',
    zIndex: 'z-10',
  },
  {
    img: imageTwo,
    x: 'bottom-0',
    y: 'left-0',
    zIndex: 'z-20',
  },
  {
    img: imageThree,
    zIndex: 'z-[21]',
  },
];

onMounted(() => {
  gsap.set('.team-img', { scale: 1.5 });
  gsap.to('.team-img', {
    scale: 1,
    scrollTrigger: {
      trigger: '.team-image-set',
      start: 'top 50%',
      ease: 'power1.inOut',
    },
    duration: 1,
  });
});
</script>
<template>
  <div
    class="team-image-set relative w-full flex items-center justify-center"
  >
    <div
      v-for="(item, index) in imageSet"
      :key="index"
      :src="item.img"
      class="overflow-hidden w-5/12"
      :class="[index !== 2 && `${item.x} ${item.y} absolute`, item.zIndex, index === 2 && 'my-7 sm:my-10']"
    >
      <img :src="item.img" class="team-img" alt="team photo" width="288" height="393" />
    </div>
  </div>
</template>
