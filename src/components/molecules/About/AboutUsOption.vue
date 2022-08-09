<template lang="">
  <div
    v-if="props.imagePosition === 'left'"
    id="left"
    ref="left"
    class="flex flex-col items-center justify-around md:flex-row"
  >
    <img :src="imageURL" class="w-full md:w-2/5" alt="" />
    <AboutUsText
      topBadge="EASY AND ACCESSABLE"
      linkTitle="Remote Access"
      defaultText="Codemize gives you oppurtunity to use it whenever you want. Could be during break, while riding a bus and many more options...
      You are deciding!"
    />
  </div>
  <div
    v-else
    id="right"
    class="flex flex-col items-center justify-around md:flex-row"
  >
    <AboutUsText
      topBadge="WEB PLATFORM"
      linkTitle="Control Progress"
      defaultText="Learn most important concepts to be job ready in simple stept. Every lesson contains practical knowledge. It's a perfect option, easy and not overwhelming learning paths."
    />
    <img :src="imageURL" alt="" />
  </div>
</template>
<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';
import AboutUsText from './AboutUsText.vue';
import { slideFromSideOpacity } from '@/helpers/animations';

const props = defineProps({
  iconURL: { type: String, default: '' },
  linkTitle: { type: String, default: '' },
  imagePosition: { type: String, default: '' },
});

const imageURL = new URL(`/src/assets/${props.iconURL}`, import.meta.url).href;

const left = ref(null);

const targetIsVisible = ref(false);

useIntersectionObserver(left, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    slideFromSideOpacity('#left', 'left');
    slideFromSideOpacity('#right', 'right');
  }
  targetIsVisible.value = isIntersecting;
});
</script>
