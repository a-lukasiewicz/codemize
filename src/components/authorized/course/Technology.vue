<template>
  <div
    class="flex items-center justify-end w-full py-8 pr-5 rounded-md lg:w-3/5 bg-main-4"
  >
    <h1 class="text-2xl font-bold">{{ techName }}</h1>
    <div class="flex items-center ml-6">
      <progress
        class="w-48 progress progress-success"
        :value="value"
        max="100"
      ></progress>
      <p class="mx-8 text-xl">{{ value }} / 100</p>
      <router-link to="html5">
        <Button
          :disabled="disabled"
          :class="{ 'opacity-10': disabled }"
          class="text-white bg-main-1"
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
