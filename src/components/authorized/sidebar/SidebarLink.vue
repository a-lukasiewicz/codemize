<template>
  <div class="flex items-center justify-between my-5">
    <router-link :to="route" class="flex items-center justify-center">
      <img :src="imageURL" alt="" class="w-6 lg:w-8" />
      <h3 class="hidden pl-3 text-base md:block lg:pt-1 active:text-yellowMain hover:text-yellowMain">
        {{ linkTitle }}
      </h3>
    </router-link>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  iconURL: { type: String, default: "" },
  linkTitle: { type: String, default: "" },
  route: { type: String, default: "" },
});

const imageURL = new URL(`/src/assets/sidebar/${props.iconURL}`, import.meta.url).href;
</script>