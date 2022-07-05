<template>
      <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
        <div class="flex-1 py-3 overflow-hidden bg-white rounded-t rounded-b-none shadow">
          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full px-6 text-xs text-gray-600 md:text-sm">Option 1</p>
            <div class="w-full px-6 text-xl font-bold text-gray-800">Lorem ipsum dolor sit amet.</div>
            <p class="px-6 mb-5 text-base text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
          </a>
        </div>
        <div class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
          <div class="flex items-center justify-end">
            <Button class="text-white bg-main-1">Action</Button>
          </div>
        </div>
      </div>
</template>
<script setup lang="ts">
import Button from '../../atoms/Button.vue';
</script>