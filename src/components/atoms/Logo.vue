<template>
  <h1 id="title" :class="{ 'title-white': white, 'title-blue': !white }">
    codemize.
  </h1>
</template>
<script setup lang="ts">
defineProps({
  white: { type: Boolean, default: false },
});
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

#title {
  font-family: 'Bangers', sans-serif;
  font-size: 45px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title-white {
  background: linear-gradient(
    45deg,
    rgb(255, 255, 255) 0%,
    rgb(237, 237, 237) 100%
  );
}

.title-blue {
  background: linear-gradient(
    90deg,
    rgba(85, 150, 216, 1) 0%,
    rgba(139, 197, 245, 1) 83%
  );
}
</style>
