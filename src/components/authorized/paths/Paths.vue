<template>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
    <PathCard
      pathName="Frontend Developer"
      pathDescription="Frontend Developer description"
    />
  </div>
  <h3 class="py-4 text-2xl font-bold">Comming soon!</h3>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
    <PathCard
      disabled
      pathName="Backend Developer"
      pathDescription="Backend Developer description"
    />
    <PathCard
      disabled
      pathName="DevOps Developer"
      pathDescription="DevOps Developer description"
    />
  </div>
</template>

<script setup lang="ts">
import PathCard from './PathCard.vue';
</script>
