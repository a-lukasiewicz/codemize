<template>
  <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
    <div class="flex-1 py-3 overflow-hidden bg-white rounded-t rounded-b-none shadow">
      <div class="flex items-center py-2 avatar">
        <div class="w-12 ml-3 rounded-full">
          <img src="https://placeimg.com/192/192/people" />
        </div>
        <p class="w-full px-6 text-xs text-gray-600 md:text-sm">{{ author }}</p>
      </div>
      <a href="#" class="flex flex-wrap no-underline hover:no-underline">
        <div class="w-full px-6 text-xl font-bold text-gray-800">
          {{ title }}
        </div>
        <p class="px-6 mb-5 text-base text-gray-800">
          {{ description }}
        </p>
      </a>
    </div>
    <div class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
    </div>
  </div>
</template>
<script setup lang="ts">

defineProps({
  author: { type: String, default: '' },
  title: { type: String, default: '' },
  description: { type: String, default: '' },
});
</script>
