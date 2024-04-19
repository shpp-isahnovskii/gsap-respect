<script setup>
import { onMounted, watch } from 'vue';
import { gsap } from 'gsap';
import { useMobileDevice } from '@/composable/useMobileDevice';

const { isMobile } = useMobileDevice();

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
  <div>
    <div
      class="px-4 py-2 sm:p-8 sm:pr-12 sm:min-h-[490px] sm:w-[60vw] flex flex-col sm:overflow-hidden relative"
      @mouseenter="$emit('focusIn')"
      @mouseleave="$emit('focusOut')"
    >
      <span :class="props.animationName">{{ props.card.index }}</span>
      <h3 class="the-card pb-2 sm:py-2" :class="props.animationName">
        {{ props.card.header }}
      </h3>
      <p
        v-for="(paragraph, index) in isMobile ? props.card.mobileParagraph : props.card.paragraph"
        :key="index"
        class="the-card pt-3 sm:pt-7 sm:max-w-[47rem]"
        :class="[index + 1 === props.card.paragraph.length && 'pb-14', props.animationName]"
      >
        {{ paragraph }}
      </p>
      <div :class="props.animationName">
        <slot name="icon" />
      </div>
      <div :class="props.animationName" class="mb-5 sm:mt-auto sm:mb-0">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>
