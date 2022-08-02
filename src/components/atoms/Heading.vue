<template>
  <h1
    :class="{ 'text-white': whiteColors, 'text-gray-800': !whiteColors }"
    class="w-full my-2 text-3xl font-bold leading-tight text-center md:text-5xl"
  >
    {{ title }}
  </h1>
  <h3
    v-if="subTitle"
    :class="{ 'text-white': whiteColors, 'text-gray-600': !whiteColors }"
    class="w-full my-2 text-lg italic leading-tight text-center font-base md:text-xl"
  >
    {{ subTitle }}
  </h3>
  <div v-if="divider" class="w-full mb-4">
    <div class="divider"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default: '' },
  subTitle: { type: String, default: '' },
  divider: { type: Boolean, default: false },
  whiteColors: { type: Boolean, default: false },
});
</script>
