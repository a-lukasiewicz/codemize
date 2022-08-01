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
      defaultText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos mollitia cumque, aliquam earum ex illo facere blanditiis reprehenderit ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis sequi excepturi deserunt minus eveniet sed."
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
      defaultText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos mollitia cumque, aliquam earum ex illo facere blanditiis reprehenderit ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis sequi excepturi deserunt minus eveniet sed."
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
