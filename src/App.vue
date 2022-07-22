<template>
  <LoadingSpinner v-if="false" />
  <router-view v-cloak></router-view>
</template>
<script setup lang="ts">
import LoadingSpinner from './components/atoms/LoadingSpinner.vue';
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
}
[v-cloak] {
  display: none;
}
</style>
