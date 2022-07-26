<template>
  <router-link to="/frontend-path/html5/basics">
    <div class="flex justify-between w-full">
      <div class="flex items-center">
        <h3 class="my-6 text-2xl font-semibold">Basics</h3>
        <span
          v-if="number >= 1"
          class="ml-4 text-sm font-bold bg-green-400 border-0 badge"
          >Completed</span
        >
      </div>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
  </router-link>

  <router-link to="/frontend-path/html5/tables">
    <div class="flex justify-between w-full">
      <div class="flex items-center">
        <h3 class="my-6 text-2xl font-semibold">Tables</h3>
        <span
          v-if="number >= 2"
          class="ml-4 text-sm font-bold bg-green-400 border-0 badge"
          >Completed</span
        >
      </div>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
  </router-link>

  <router-link to="/frontend-path/html5/forms">
    <div class="flex justify-between w-full">
      <div class="flex items-center">
        <h3 class="my-6 text-2xl font-semibold">Forms</h3>
        <span
          v-if="number >= 3"
          class="ml-4 text-sm font-bold bg-green-400 border-0 badge"
          >Completed</span
        >
      </div>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
  </router-link>

  <router-link to="/frontend-path/html5/semantic-elements">
    <div class="flex justify-between w-full">
      <div class="flex items-center">
        <h3 class="my-6 text-2xl font-semibold">Semantic Elements</h3>
        <span
          v-if="number >= 4"
          class="ml-4 text-sm font-bold bg-green-400 border-0 badge"
          >Completed</span
        >
      </div>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
  </router-link>

  <router-link to="/frontend-path/html5/all-flashcards">
    <div class="flex justify-between w-full">
      <h3 class="my-6 text-2xl font-semibold">All flashcards</h3>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
  </router-link>

  <router-link to="/frontend-path/html5/interview-questions">
    <div class="flex justify-between w-full">
      <h3 class="my-6 text-2xl font-semibold">Interview questions</h3>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
  </router-link>
</template>
<script setup lang="ts">
import { getUserData } from '@/functions/user';
import { auth } from '@/main';
import { onMounted, ref } from 'vue';

let number = ref(0);

onMounted(async () => {
  const userData = await getUserData(auth?.currentUser?.uid as string);
  number.value = userData?.currentPath?.doneOfTech;
});
</script>
