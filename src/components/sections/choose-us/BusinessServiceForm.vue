<script setup>
import { onMounted, ref } from 'vue';
import { splittedText } from '@/animations/splittedText';
import { fadeIn } from '@/animations/fadeIn';
import { gsap } from 'gsap';

const input = ref('');

const showLines = () => {
  gsap.to('.input-name-hr', { width: '100%', opacity: 1, duration: 1 });
};

onMounted(() => {
  /* preset */
  gsap.set(['.paragraph-qualification', '.input-name-here', '.input-name-hr'], { opacity: 0 });
  gsap.set('.input-name-hr', { width: '50%' });

  splittedText('.service-to-choose--header', () => {
    const ctx = gsap.context(() => {
      showLines();
      fadeIn(['.paragraph-qualification', '.input-name-here']);
    });
  });
});
</script>
<template>
  <div class="flex flex-col items-end">
    <h3 class="service-to-choose--header w-7/12 text-end mt-2 sm:mt-0 mb-4 sm:mb-14">
      Still not sure what service to choose?
    </h3>
    <p class="paragraph-qualification w-10/12 sm:w-4/12 text-end mb-4">
      Fill our qualification form to understand which service fits your business needs
    </p>
    <div class="w-full sm:w-8/12 mt-10 sm:mt-auto">
      <hr class="input-name-hr border-primary" />
      <form
        @submit.prevent="
          () => {
            console.log('submitted name:', input);
          }
        "
        class="input-name-here py-5 text-primary flex items-center"
      >
        <span class="min-w-[26px]">1<sup class="ml-1 text-[0.65rem]/[20px]" v-text="'/ 5'" /></span>
        <input
          v-model="input"
          type="text"
          class="ml-8 basis-[80%] placeholder-primary outline-0 pr-2"
          placeholder="Hey! Type your name here"
        />
        <button type="submit" class="btn-form-apply mr-2" aria-label="Submit form" />
      </form>
      <hr class="input-name-hr border-primary" />
    </div>
  </div>
</template>
