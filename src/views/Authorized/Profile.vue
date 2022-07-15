<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Profile</h3>
    <div class="py-4">
      <ProfileCard />
    </div>
  </AuthorizedTemplate>
</template>

<script setup lang="ts">
import AuthorizedTemplate from './AuthorizedTemplate.vue';
import ProfileCard from '@/components/authorized/profile/ProfileCard.vue';
</script>
