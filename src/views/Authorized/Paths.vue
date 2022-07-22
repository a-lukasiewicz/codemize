<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Available Paths</h3>
    <Suspense>
      <template #default>
        <Paths />
      </template>
      <template #fallback>
        <LoadingSpinner />
      </template>
    </Suspense>
  </AuthorizedTemplate>
</template>

<script setup lang="ts">
import AuthorizedTemplate from './AuthorizedTemplate.vue';
import Paths from '@/components/authorized/paths/Paths.vue';
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue';
</script>
