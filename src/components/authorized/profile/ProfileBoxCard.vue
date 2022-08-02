<template>
  <div
    class="flex flex-col flex-grow flex-shrink py-8 my-2 text-white rounded-md bg-main-2"
  >
    <p class="px-4 py-2 lg:text-2xl">{{ value || date || textInfo }}</p>
    <h3 class="text-sm font-bold tracking-widest">{{ text }}</h3>
  </div>
</template>
<script setup lang="ts">
defineProps({
  value: { type: Number, default: 0 },
  text: { type: String, default: '' },
  textInfo: { type: String, default: '' },
  date: { type: String, default: '' },
});
</script>
