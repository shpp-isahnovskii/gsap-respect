<script setup>
import BusinessCard from './BusinessCard.vue';
import AimIconSecond from '@/components/icons/AimIconSecond.vue';
import { gsap } from 'gsap';
import { onMounted } from 'vue';

const props = defineProps(['isActive']);

const tl = gsap.timeline();
onMounted(() => {
  tl.to('.lead-gen-card', {right: '0', duration: 1})
  tl.pause();
})

const cardText = {
  header: 'LinkedIn Lead Generation',
  paragraph: [
    'Your business is all set up and now feel ready to expand your client list? You understand your ideal client and how your product can solve their problems?',
    "That's when we come in with the comprehensive lead generation campaign to employ your sales team with more deals? Like experienced detectives, we will search for the prospects who drive the most value for your business. ext step? We make them talk to you. Unlike most sales outreaches, our customized campaign is focused on building long-term relationships. Your sales team will love it.",
  ],
  color: {
    bg: 'bg-secondary',
  },
};
</script>
<template>
  <BusinessCard
    class="lead-gen-card bg-black text-white absolute top-0 -right-[20vw]"
    :card="{ index: 2, ...cardText }"
    @focus-in="$emit('focusIn'), tl.play()"
    @focus-out="tl.reverse()"
    :is-active="props.isActive"
    animation-name="lead-generation-card"
  >
    <template #icon>
      <AimIconSecond class="absolute bottom-6" />
    </template>
    <template #button>
      <button class="btn-secondary ml-auto mt-auto">Learn more</button>
    </template>
  </BusinessCard>
</template>
