<script setup>
import { onMounted, watch } from 'vue';
import { gsap } from 'gsap';
import { useMobileDevice } from '@/composable/useMobileDevice';

const { isMobile, isTablet } = useMobileDevice();

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  animationName: {
    type: String,
    required: true,
  },
});

const tl = gsap.timeline();
watch(
  () => props.isActive,
  (isActive) => {
    if (!isActive) {
      tl.play();
      return;
    }
    tl.reverse();
  },
);

onMounted(() => {
  tl.to(`.${props.animationName}`, { opacity: 0.3, duration: 0.5 });
  if (!props.isActive) {
    tl.progress(1);
  }
  tl.pause();
});
</script>
<template>
  <div class="absolute h-full">
    <div
      class="h-full px-4 py-2 sm:p-8 sm:pr-12 md:min-h-[490px] lg:min-h-[580px] sm:w-[60vw] flex flex-col sm:overflow-hidden relative"
      @mouseenter="$emit('focusIn')"
      @mouseleave="$emit('focusOut')"
    >
      <span :class="props.animationName">{{ props.card.index }}</span>
      <h3 class="the-card pb-2 sm:py-2" :class="props.animationName">
        {{ props.card.header }}
      </h3>
      <p
        v-for="(paragraph, index) in (isTablet || isMobile) ? props.card.mobileParagraph : props.card.paragraph"
        :key="index"
        class="the-card pt-3 sm:pt-7 sm:max-w-[47rem]"
        :class="props.animationName"
      >
        {{ paragraph }}
      </p>
      <div :class="props.animationName" class="pb-12">
        <slot name="icon" />
      </div>
      <div :class="props.animationName" class="mb-5 mt-auto ml-auto sm:mb-0">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>
