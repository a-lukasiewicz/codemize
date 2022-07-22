<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Profile</h3>
    <Suspense>
      <template #default>
        <div class="py-4">
          <ProfileCard />
        </div>
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
import AuthorizedTemplate from './AuthorizedTemplate.vue';
import ProfileCard from '@/components/authorized/profile/ProfileCard.vue';
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue';
</script>
