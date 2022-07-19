<template>
  <div class="flex justify-center w-full">
    <iframe
      width="560"
      height="315"
      :src="src"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script setup lang="ts">
defineProps({
  src: { type: String, default: '' },
});
</script>
