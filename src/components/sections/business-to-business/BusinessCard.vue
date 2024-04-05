<script setup>
import { onMounted, watch } from 'vue';
import { gsap } from 'gsap';

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
  /* better way here is to use css hover and transitions, but I have tried GSAP */
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
      class="p-8 pr-12 min-h-[490px] w-[60vw] flex flex-col overflow-hidden relative"
      @mouseenter="$emit('focusIn')"
      @mouseleave="$emit('focusOut')"
    >
      <span :class="props.animationName">{{ props.card.index }}</span>
      <h3 class="the-card py-2" :class="props.animationName">
        {{ props.card.header }}
      </h3>
      <p
        v-for="(paragraph, index) in props.card.paragraph"
        :key="index"
        class="the-card pt-7 max-w-[47rem]"
        :class="[index + 1 === props.card.paragraph.length && 'pb-14', props.animationName]"
      >
        {{ paragraph }}
      </p>
      <div :class="props.animationName">
        <slot name="icon" />
      </div>
      <div :class="props.animationName">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>
