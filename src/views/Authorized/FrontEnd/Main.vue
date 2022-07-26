<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Frontend Path</h3>
    <Suspense>
      <template #default>
        <MainPage />
      </template>
      <template #fallback>
        <div class="absolute -ml-6 top-1/2 left-1/2">
          <LoadingSpinner />
        </div>
      </template>
    </Suspense>
  </AuthorizedTemplate>
</template>
<script setup lang="ts">
import AuthorizedTemplate from '@views/Authorized/AuthorizedTemplate.vue';
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue';
import MainPage from '../../../components/authorized/course/MainPage.vue';
</script>
