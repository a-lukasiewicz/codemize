<template>
  <div id="companies" ref="companies" class="py-24">
    <Heading title="Companies" subTitle="That we are cooperating with" />
    <Flicking
      class="flex items-center px-4 py-16"
      :options="{
        moveType: 'freeScroll',
        bound: true,
        deceleration: 0.0075,
        duration: 1000,
        renderOnlyVisible: true,
      }"
    >
      <div>
        <span
          class="py-4 mr-24 text-2xl text-center rounded w-36 button is-white"
          >&#127762; Company 1</span
        >
        <span
          class="py-4 mr-24 text-2xl text-center rounded w-36 button is-white"
          >&#11035; Company 2</span
        >
        <span
          class="py-4 mr-24 text-2xl text-center rounded w-36 button is-white"
          >&#127891; Company 3</span
        >
        <span
          class="py-4 mr-24 text-2xl text-center rounded w-44 button is-white"
          >&#127750; Company 4</span
        >
        <span
          class="py-4 mr-24 text-2xl text-center rounded w-36 button is-white"
          >&#127757; Company 5</span
        >
      </div>
    </Flicking>
    <div class="w-full py-4 mb-4">
      <p class="italic text-center">
        "We can achieve so much more as a group than an individual" ~ Artur
        Potts Dawson
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { slideFromSideOpacity } from '@/helpers/animations';
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';
import Heading from '../../atoms/Heading.vue';

const companies = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(companies, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    slideFromSideOpacity('#companies', 'left');
  }
  targetIsVisible.value = isIntersecting;
});
</script>
