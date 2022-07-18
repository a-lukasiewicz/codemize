<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Lesson {{ path }}</h3>
  </AuthorizedTemplate>
</template>
<script setup lang="ts">
import AuthorizedTemplate from '@views/Authorized/AuthorizedTemplate.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const path = computed(() => route.path);
</script>
