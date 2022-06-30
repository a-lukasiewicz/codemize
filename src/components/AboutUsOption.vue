<template lang="">
  <div class="flex items-center justify-around">
    <img :src="imageURL" alt="" />
    <p class="text-xl font-bold text-center lg:font-extrabold lg:text-3xl">{{ linkTitle }}</p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  iconURL: { type: String },
  linkTitle: { type: String },
});

const imageURL = new URL(`/src/assets/about-us/${props.iconURL}`, import.meta.url).href;
</script>