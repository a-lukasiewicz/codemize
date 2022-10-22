<template>
  <div id="tech" ref="tech"
    class="flex items-center justify-between w-full pl-4 rounded-md lg:px-5 lg:py-8 lg:relative lg:w-4/5 bg-main-4">
    <div class="flex items-center justify-start lg:ml-10">
      <h1 class="text-2xl font-bold text-center">{{ techName }}</h1>
      <span v-if="value === 4" class="ml-4 text-sm font-bold bg-green-400 border-0 badge">Completed</span>
    </div>
    <div class="flex flex-col items-end justify-end py-4 pr-2 lg:ml-6 lg:justify-end lg:absolute lg:right-20 md:items-center md:flex-row">
      <p class="px-2 text-xl text-center lg:text-right md:hidden md:text-left md:mx-8">
        {{ value }} / {{ numberOfLessons }}
      </p>
      <progress class="hidden lg:block w-28 md:w-40 lg:w-48 progress progress-success" :value="value" :max="numberOfLessons"></progress>
      <p class="hidden text-xl text-right md:block md:text-left md:mx-8">
        {{ value }} / {{ numberOfLessons }}
      </p>
      <router-link to="/frontend-path/html5">
        <Button :disabled="disabled" :class="{ 'opacity-10': disabled }"
          class="mt-4 text-sm text-white md:mt-0 bg-main-1 md:text-xl">{{ props.buttonText }}</Button>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';
import { getNumberOfCourseLessons } from '@/functions/course';
import { slideDownOpacity } from '@/helpers/animations';
import { DocumentData } from '@firebase/firestore';
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

const props = defineProps({
  techName: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  buttonText: { type: String, default: '' },
  choice: { type: String, default: '' },
  value: { type: Number, default: 0 },
});

let data = (await getNumberOfCourseLessons()) as DocumentData;
const numberOfLessons = data[props.choice].numberOfLessons as number;

const tech = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(tech, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    slideDownOpacity('#tech', [0.5, 1.5], '-50%');
  }
  targetIsVisible.value = isIntersecting;
});
</script>
