<template>
  <div
    class="flex flex-col flex-grow flex-shrink py-8 my-2 text-white rounded-md bg-main-3"
  >
    <p class="lg:text-4xl">{{ value || date || textInfo }}</p>
    <h3 class="text-sm tracking-widest">{{ text }}</h3>
  </div>
</template>
<script setup lang="ts">
import { Timestamp } from '@firebase/firestore';

defineProps({
  value: { type: Number, default: 0 },
  text: { type: String, default: '' },
  textInfo: { type: String, default: '' },
  date: { type: Timestamp, default: 0 },
});
</script>
