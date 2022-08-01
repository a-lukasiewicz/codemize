<template>
  <section class="py-8 border-b bg-main-1">
    <div
      id="ratings"
      ref="ratings"
      class="container flex flex-wrap pt-4 pb-12 mx-auto"
    >
      <Heading title="Our sponsors & mentors" :divider="true" whiteColors />
      <RatingBox
        v-for="el in reviews"
        :key="el.author"
        :title="el.title"
        :description="el.description"
        :author="el.author"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { getReviews } from '@/functions/reviews';
import { slideFromSideOpacity } from '@/helpers/animations';
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';
import Heading from '../../atoms/Heading.vue';
import RatingBox from './RatingBox.vue';

const reviews = await getReviews();

const ratings = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(ratings, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    slideFromSideOpacity('#ratings', 'right');
  }
  targetIsVisible.value = isIntersecting;
});
</script>
