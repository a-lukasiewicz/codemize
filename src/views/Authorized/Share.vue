<template>
  <LoadingSpinner v-if="false" />
  <AuthorizedTemplate v-cloak>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Our team</h3>
    <Share />
  </AuthorizedTemplate>
</template>

<script setup lang="ts">
import AuthorizedTemplate from './AuthorizedTemplate.vue';
import Share from '@/components/authorized/share/Share.vue';
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue';
</script>
