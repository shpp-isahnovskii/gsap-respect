<script setup>
import BusinessCardTemplate from './BusinessCardTemplate.vue';
import AimIconOne from '@/components/icons/AimIconOne.vue';
const cardText = {
  header: 'B2B Marketing',
  paragraph: [
    "Your solution is of high value and great quality, but you have a hard time attracting the right audience? Wish to work with specific clients but can't cut through the noise of a saturated market? Or simply looking to advance your growth efforts?",
    "That's the challenge for real B2B marketing pros. Having a perfect knowledge of the digital landscape, we will help you identify the lowest hanging fruits before you spend a fortune on marketing campaigns. While you make good use of the results, we work on a sustainable strategy to scale your business in the long run.",
  ],
  mobileParagraph: [
    "Your solution is of high value and great quality, but you looking to advance your growth efforts?",
    "Having a perfect knowledge of the digital landscape, we will help you identify the lowest hanging fruits before you spend a fortune on marketing campaigns.",
  ],
};
</script>
<template>
  <BusinessCardTemplate
    class="bg-primary text-white mx-3 sm:mx-0 sm:w-max z-10"
    :card="{ index: 1, ...cardText }"
    @focus-in="$emit('focusIn')"
    animation-name="business-to-business"
  >
    <template #icon>
      <AimIconOne class="absolute bottom-6" />
    </template>
    <template #button>
      <button class="btn-primary">Learn more</button>
    </template>
  </BusinessCardTemplate>
</template>
