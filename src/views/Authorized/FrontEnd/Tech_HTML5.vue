<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">HTML5</h3>

    <h3 class="my-6 text-2xl font-semibold">About this course:</h3>
    <p class="mb-6 text-center">
      Learn the basics of HTML5 and start building webpages!
    </p>

    <p>In this course we will provide:</p>
    <ul class="list-disc list-inside">
      <li><span class="font-semibold">12 lessons</span></li>
      <li>
        <span class="font-semibold">Flashcards</span> with that you should know
        after completing lessons
      </li>
      <li>
        By the end of a course, we will be able to find
        <span class="font-semibold">a list of interview question</span> for that
        specific technology
      </li>
    </ul>
    <hr class="border-[2px] my-8" />

    <div class="flex justify-between w-full">
      <h3 class="my-6 text-2xl font-semibold">Basics</h3>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
    <div class="flex justify-between w-full">
      <h3 class="my-6 text-2xl font-semibold">Tables</h3>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
    <div class="flex justify-between w-full">
      <h3 class="my-6 text-2xl font-semibold">Forms</h3>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
    <div class="flex justify-between w-full">
      <h3 class="my-6 text-2xl font-semibold">Semantic Elements</h3>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
    <div class="flex justify-between w-full">
      <h3 class="my-6 text-2xl font-semibold">All flashcards</h3>
      <img src="@assets/arrow-right.svg" alt="Arrow" />
    </div>
    <router-link to="/interview-questions">
      <div class="flex justify-between w-full">
        <h3 class="my-6 text-2xl font-semibold">Interview questions</h3>
        <img src="@assets/arrow-right.svg" alt="Arrow" />
      </div>
    </router-link>
  </AuthorizedTemplate>
</template>
<script setup lang="ts">
import AuthorizedTemplate from '@views/Authorized/AuthorizedTemplate.vue';
</script>
