<template>
  <div id="aboutUs" ref="aboutUs" class="py-20 bg-white">
    <div class="text-center text-gray-900">
      <h1 class="w-full my-2 text-3xl font-bold leading-tight">
        Remotely maintain your data, <br />
        from anywhere, anytime
      </h1>
      <p class="pt-4 md:px-24 lg:px-40">
        Learn most important concepts to be job ready in simple stept. Every lesson contains practical knowledge. It's a
        perfect option, easy and not overwhelming learning paths.
      </p>
      <router-link to="/pricing">
        <Button class="mt-4 text-white bg-main-1">Join Us!</Button>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { slideDownOpacity } from '@/helpers/animations';
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';
import Button from './Button.vue';

const aboutUs = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(aboutUs, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    slideDownOpacity('#aboutUs', [5.5, 6], '-1000');
  }
  targetIsVisible.value = isIntersecting;
});
</script>
