<template>
  <div
    class="flex items-center justify-end w-full py-8 pr-5 mx-8 rounded-md lg:w-4/5 bg-main-4"
  >
    <h1 class="text-base font-bold md:text-2xl">{{ techName }}</h1>
    <div class="flex flex-col justify-end ml-6 md:items-center md:flex-row">
      <p class="text-xl text-right md:hidden md:text-left md:mx-8">
        {{ value }} / 100
      </p>
      <progress
        class="w-28 md:w-40 lg:w-48 progress progress-success"
        :value="value"
        max="100"
      ></progress>
      <p class="hidden text-xl text-right md:block md:text-left md:mx-8">
        {{ value }} / 100
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

defineProps({
  techName: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  buttonText: { type: String, default: '' },
  value: { type: Number, default: 0 },
});
</script>
