<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Lesson {{ path }}</h3>
    <h3 class="mt-6 mb-6 text-xl font-semibold">Introduction</h3>
    <Suspense>
      <template #default>
        <Lesson />
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
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue';
import Lesson from '../../../components/authorized/course/Lesson.vue';
import AuthorizedTemplate from '@views/Authorized/AuthorizedTemplate.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const path = computed(() => route.path);
</script>
