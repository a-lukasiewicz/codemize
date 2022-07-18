<template>
  <li class="my-2 bg-white shadow">
    <div class="flex justify-between px-6 cursor-pointer" @click="show = !show">
      <h2 class="flex flex-row items-center justify-between p-3 font-semibold">
        {{ question }}
      </h2>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
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
