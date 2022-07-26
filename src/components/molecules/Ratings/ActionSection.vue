<template>
  <section class="py-8 border-b bg-main-1">
    <div class="container flex flex-wrap pt-4 pb-12 mx-auto">
      <Heading title="Our sponsors & mentors" :divider="true" whiteColors />
      <!-- <div v-for="el in reviews" :key="el.author"> -->
      <RatingBox
        v-for="el in reviews"
        :key="el.author"
        :title="el.title"
        :description="el.description"
        :author="el.author"
      />
      <!-- </div> -->
    </div>
  </section>
</template>
<script setup lang="ts">
import { getReviews } from '@/functions/reviews';
import Heading from '../../atoms/Heading.vue';
import RatingBox from './RatingBox.vue';

const reviews = await getReviews();
</script>
