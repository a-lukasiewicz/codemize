<template>
  <div
    id="tech"
    ref="tech"
    class="flex items-center justify-around w-full py-8 pr-5 mx-8 rounded-md lg:justify-end lg:w-3/5 bg-main-4"
  >
    <div class="flex items-center lg:mr-36">
      <h1 class="text-2xl font-bold text-center">{{ techName }}</h1>
      <span
        v-if="value === 4"
        class="ml-4 text-sm font-bold bg-green-400 border-0 badge"
        >Completed</span
      >
    </div>
    <div class="flex flex-col justify-end ml-6 md:items-center md:flex-row">
      <p class="text-xl text-right md:hidden md:text-left md:mx-8">
        {{ value }} / {{ numberOfLessons }}
      </p>
      <progress
        class="w-28 md:w-40 lg:w-48 progress progress-success"
        :value="value"
        :max="numberOfLessons"
      ></progress>
      <p class="hidden text-xl text-right md:block md:text-left md:mx-8">
        {{ value }} / {{ numberOfLessons }}
      </p>
      <router-link to="/frontend-path/html5">
        <Button
          :disabled="disabled"
          :class="{ 'opacity-10': disabled }"
          class="mt-4 text-sm text-white md:mt-0 bg-main-1 md:text-xl"
          >{{ buttonText }}</Button
        >
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';
import { getNumberOfCourseLessons } from '@/functions/course';
import { slideDownOpacity } from '@/helpers/animations';
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

const props = defineProps({
  techName: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  buttonText: { type: String, default: '' },
  choice: { type: String, default: '' },
  value: { type: Number, default: 0 },
});

let data = await getNumberOfCourseLessons();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const numberOfLessons = (data as any)[props.choice].numberOfLessons as number;

const tech = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(tech, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    slideDownOpacity('#tech', [0.5, 1.5], '-50%');
  }
  targetIsVisible.value = isIntersecting;
});
</script>
