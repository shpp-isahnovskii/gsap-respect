<script setup>
import BusinessCardTemplate from './BusinessCardTemplate.vue';
import AimIconTwo from '@/components/icons/AimIconTwo.vue';
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import { useMobileDevice } from '@/composable/useMobileDevice';

const { isMobile } = useMobileDevice();

const props = defineProps(['isActive']);

const tl = gsap.timeline();

const presetAnimation = () => {
  if (isMobile.value) {
    tl.to('.lead-gen-card', { zIndex: '20', duration: 0.1 });
    tl.pause();
    return;
  }
  tl.to('.lead-gen-card', { right: '0', duration: 1 });
  tl.pause();
};

onMounted(() => {
  presetAnimation();
});

const cardText = {
  header: 'LinkedIn Lead Generation',
  paragraph: [
    'Your business is all set up and now feel ready to expand your client list? You understand your ideal client and how your product can solve their problems?',
    "That's when we come in with the comprehensive lead generation campaign to employ your sales team with more deals? Like experienced detectives, we will search for the prospects who drive the most value for your business. Next step? We make them talk to you. Unlike most sales outreaches, our customized campaign is focused on building long-term relationships. Your sales team will love it.",
  ],
  mobileParagraph: [
    'You understand your ideal client and how your product can solve their problems?',
    'We will search for the prospects who drive the most value for your business. Our customized campaign is focused on building long-term relationships. Your sales team will love it.',
  ],
  color: {
    bg: 'bg-secondary',
  },
};
</script>
<template>
  <BusinessCardTemplate
    class="lead-gen-card bg-black text-white top-16 left-3 right-6 sm:left-auto sm:ml-0 absolute sm:top-0 sm:-right-[20vw]"
    :class="{ 'z-20' : !isMobile }"
    :card="{ index: 2, ...cardText }"
    @focus-in="$emit('focusIn'), tl.play()"
    @focus-out="tl.reverse()"
    :is-active="props.isActive"
    animation-name="lead-generation-card"
  >
    <template #icon>
      <AimIconTwo class="absolute bottom-6" />
    </template>
    <template #button>
      <button class="btn-secondary">Learn more</button>
    </template>
  </BusinessCardTemplate>
</template>
