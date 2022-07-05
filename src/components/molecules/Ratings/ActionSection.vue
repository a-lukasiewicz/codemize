<template>
  <section class="py-8 border-b bg-main-1">
    <div class="container flex flex-wrap pt-4 pb-12 mx-auto">
      <Heading title="Our sponsors & mentors" :divider="true" whiteColors />
      <RatingBox />
      <RatingBox />
      <RatingBox />
      <RatingBox />
      <RatingBox />
    </div>
  </section>
</template>
<script setup lang="ts">
import Heading from '../../atoms/Heading.vue';
import RatingBox from './RatingBox.vue';
</script>