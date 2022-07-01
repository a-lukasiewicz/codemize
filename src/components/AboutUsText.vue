<template lang="">
      <div class="flex flex-col justify-center w-3/5 px-6 ml-4">
        <p class="text-sm font-bold tracking-wider text-blue-500">{{topBadge}}</p>
        <p class="py-4 text-4xl font-bold text-black">{{ linkTitle }}</p>
        <p class="text-center">{{defaultText}}
        </p>
      </div>
</template>
<script setup lang="ts">
const props = defineProps({
  topBadge: { type: String },
  linkTitle: { type: String },
  defaultText: { type: String },
});
</script>