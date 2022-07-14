<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Home</h3>
    <CurrentPath />
  </AuthorizedTemplate>
</template>

<script setup lang="ts">
import AuthorizedTemplate from './AuthorizedTemplate.vue';
import CurrentPath from '@/components/authorized/home/CurrentPath.vue';
</script>
