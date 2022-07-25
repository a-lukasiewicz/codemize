<template>
  <div
    class="flex items-center justify-around w-full py-8 pr-5 mx-8 rounded-md lg:justify-end lg:w-4/5 bg-main-4"
  >
    <h1 class="text-2xl font-bold">{{ techName }}</h1>
    <div class="flex flex-col justify-end ml-6 md:items-center md:flex-row">
      <p class="text-xl text-right md:hidden md:text-left md:mx-8">
        {{ value }} / {{ numberOfLessons }}
      </p>
      <progress
        class="w-28 md:w-40 lg:w-48 progress progress-success"
        :value="value"
        max="100"
      ></progress>
      <p class="hidden text-xl text-right md:block md:text-left md:mx-8">
        {{ value }} / {{ numberOfLessons }}
      </p>
      <router-link to="html5">
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

console.log();
</script>
