<template>
  <div v-if="!started" class="w-full px-4 py-8 text-black rounded md:px-16">
    <h1 class="-ml-4 text-3xl font-bold">Frontend Developer Path</h1>
    <p class="-mb-4 font-bold tracking-wider text-main-1">Keep going</p>
    <div class="flex items-center justify-around pt-8">
      <div class="flex items-center my-4">
        <progress
          class="w-48 lg:w-64 progress progress-success"
          value="34"
          max="56"
        ></progress>
        <p class="mx-2 text-xl md:mx-8">34 / 56</p>
      </div>
      <Button class="hidden text-white md:block bg-main-1"
        >Continue Learning ></Button
      >
    </div>
    <Button class="block my-4 text-white md:hidden bg-main-1"
      >Continue Learning ></Button
    >
    <hr class="py-[2px] my-4 bg-white rounded" />
    <div class="grid gap-8 p-4 my-8 text-black bg-white rounded">
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-bold">Technology that you need to pracise:</h3>
      </div>
      <Technology language="JavaScript" img="js.svg" />
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-bold">Technology that you already know:</h3>
      </div>
      <Technology language="HTML" img="html.svg" />
      <Technology language="CSS" img="css.svg" />
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-bold">Not started:</h3>
      </div>
      <Technology language="React" img="react.svg" />
      <Technology language="TypeScript" img="typescript.svg" />
    </div>
  </div>
  <div v-else>Not started template</div>
</template>
<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';
import Technology from './Technology.vue';
import { ref } from 'vue';
import { getUserCourseInfo } from '@/functions/course';
import { auth } from '@/main';

let started = ref(false);
started.value = await getUserCourseInfo(auth?.currentUser?.uid as string);
</script>
