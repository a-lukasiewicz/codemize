<template>
  <AuthorizedTemplate v-cloak>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Home</h3>
    <Suspense>
      <template #default>
        <CurrentPath />
      </template>
      <template #fallback>
        <LoadingSpinner />
      </template>
    </Suspense>
  </AuthorizedTemplate>
</template>

<script setup lang="ts">
import AuthorizedTemplate from './AuthorizedTemplate.vue';
import CurrentPath from '@/components/authorized/home/CurrentPath.vue';
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue';
</script>
