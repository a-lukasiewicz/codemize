<template>
  <section class="py-8 bg-white border-b">
    <div class="container flex flex-wrap pt-4 pb-12 mx-auto">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Our sponsors & mentors</h1>
      <div class="w-full mb-4">
        <div class="divider"></div>
      </div>
      <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
        <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full px-6 text-xs text-gray-600 md:text-sm">Option 1</p>
            <div class="w-full px-6 text-xl font-bold text-gray-800">Lorem ipsum dolor sit amet.</div>
            <p class="px-6 mb-5 text-base text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
          </a>
        </div>
        <div class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
          <div class="flex items-center justify-end">
            <Button class="bg-blue-700">Action</Button>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
        <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full px-6 text-xs text-gray-600 md:text-sm">Option 1</p>
            <div class="w-full px-6 text-xl font-bold text-gray-800">Lorem ipsum dolor sit amet.</div>
            <p class="px-6 mb-5 text-base text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
          </a>
        </div>
        <div class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
          <div class="flex items-center justify-end">
            <Button class="bg-red-400">Action</Button>
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-grow flex-shrink w-full p-6 md:w-1/3">
        <div class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow">
          <a href="#" class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full px-6 text-xs text-gray-600 md:text-sm">Option 1</p>
            <div class="w-full px-6 text-xl font-bold text-gray-800">Lorem ipsum dolor sit amet.</div>
            <p class="px-6 mb-5 text-base text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
          </a>
        </div>
        <div class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow">
          <div class="flex items-center justify-end">
            <Button class="bg-yellow-400">Action</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Button from './Button.vue';
</script>