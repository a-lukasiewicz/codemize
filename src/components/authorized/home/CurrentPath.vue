<template>
  <div class="w-full px-16 py-8 text-black rounded">
    <h1 class="-ml-4 text-3xl font-bold">Frontend Developer Path</h1>
    <div class="flex items-center justify-center pt-8">
      <progress
        class="w-64 progress progress-success"
        value="34"
        max="56"
      ></progress>
      <p class="mx-8 text-xl">34 / 56</p>
      <Button class="text-white bg-main-1">Continue Learning</Button>
    </div>
    <hr class="py-[2px] my-4 bg-white rounded" />
    <div class="grid gap-8 p-4 my-8 text-black bg-white rounded">
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-bold">Technology that you need to pracise:</h3>
        <img src="@assets/tech/js.svg" class="w-16 h-16" alt="" />
      </div>
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-bold">Technology that you already know:</h3>
        <div class="flex">
          <img src="@assets/tech/html.svg" class="w-16 h-16" alt="HTML" />
          <img src="@assets/tech/css.svg" class="w-16 h-16" alt="CSS" />
        </div>
      </div>
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-bold">Not started:</h3>
        <div class="grid grid-cols-2 gap-4">
          <img src="@assets/tech/react.svg" class="w-16 h-16" alt="React" />
          <img
            src="@assets/tech/typescript.svg"
            class="w-16 h-16"
            alt="TypeScript"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';
</script>
