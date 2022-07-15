<template>
  <li class="my-2 bg-white shadow">
    <h2
      class="flex flex-row items-center justify-between p-3 font-semibold cursor-pointer"
      @click="show = !show"
    >
      {{ question }}
    </h2>
    <div :class="{ hidden: !show }">
      <p class="p-3 text-gray-900">
        {{ answer }}
      </p>
    </div>
  </li>
</template>
<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  question: { type: String, default: '' },
  answer: { type: String, default: '' },
});

let show = ref(false);
</script>
