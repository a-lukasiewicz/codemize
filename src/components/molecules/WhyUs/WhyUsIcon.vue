<template>
  <div class="flex flex-col items-center justify-center px-2">
    <div
      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-2xl md:w-24 md:h-24 lg:w-32 lg:h-32"
    >
      <img :src="imageURL" alt="" />
      <h3 v-if="number" class="text-5xl font-bold">{{ defaultNumber }}</h3>
    </div>
    <h3 class="pt-4 pb-2 text-base font-bold text-center text-white md:text-xl">
      {{ title }}
    </h3>
    <p class="text-sm text-center text-white">{{ text }}</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps({
  iconURL: { type: String, default: '' },
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  number: { type: Number },
});

const imageURL = new URL(`/src/assets/${props.iconURL}`, import.meta.url).href;

let defaultNumber = ref(0);

onMounted(() => {
  const increaseNumber = setInterval(() => {
    defaultNumber.value += 1;
    if (defaultNumber.value === props?.number) {
      clearInterval(increaseNumber);
    }
  }, 50);
});
</script>
