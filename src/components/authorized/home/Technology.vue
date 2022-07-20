<template>
  <div
    class="flex items-center justify-start w-full px-4 py-2 rounded md:w-1/2 lg:w-1/3 gray-300 y-2"
  >
    <img class="w-8 h-8 mr-3" :src="imageURL" alt="Tech" />
    <h3 class="font-bold">{{ language }}</h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  language: { type: String, default: '' },
  img: { type: String, default: '' },
});
const imageURL = new URL(`/src/assets/tech/${props.img}`, import.meta.url).href;
</script>
