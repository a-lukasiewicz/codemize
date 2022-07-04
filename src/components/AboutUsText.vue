<template lang="">
      <div class="flex flex-col justify-center w-full px-2 ml-4 md:px-6 md:w-3/5">
        <p class="text-sm font-bold tracking-wider text-center text-blue-500 md:text-left">{{topBadge}}</p>
        <p class="py-4 text-4xl font-bold text-center text-black md:text-left">{{ linkTitle }}</p>
        <p class="text-center">{{defaultText}}
        </p>
      </div>
</template>
<script setup lang="ts">
defineProps({
  topBadge: { type: String, default: "" },
  linkTitle: { type: String, default: "" },
  defaultText: { type: String, default: "" },
});
</script>