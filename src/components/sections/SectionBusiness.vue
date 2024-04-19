<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import BookACallBtn from '@/components/common/BookACallBtn.vue';
import HiringAndContacts from '@/components/common/HiringAndContacts.vue';
import { splittedText } from '@/animations/splittedText';
import { fadeIn } from '@/animations/fadeIn';
import { useMobileDevice } from '@/composable/useMobileDevice';

const { isMobile } = useMobileDevice();

onMounted(() => {
  /* preset */
  gsap.set('.section-analytics--paragraph', { opacity: 0 });

  splittedText('.section-business', () => fadeIn('.section-business--agency'));
});
</script>

<template>
  <section class="w-full sm:h-[90vh] bg-primary relative flex flex-col justify-between px-2">
    <h1 class="section-business text-right max-w-[14rem] sm:max-w-[54rem] ml-auto sm:pt-24 sm:pr-3">
      Growing businesses by building relationships
    </h1>
    <HiringAndContacts v-if="isMobile" class="max-w-40 ml-auto" />
    <div class="section-business--agency max-w-64 py-3 sm:p-3 pb-5 opacity-0 mt-4">
      B2B Marketing & LinkedIn Lead Generation agency
    </div>
    <BookACallBtn v-if="isMobile" class="mb-2" />
  </section>
</template>
