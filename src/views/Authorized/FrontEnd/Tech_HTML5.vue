<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">HTML5</h3>

    <h3 class="my-6 text-2xl font-semibold">About this course:</h3>
    <p class="mb-6 tracking-wider text-center">
      Learn the basics of HTML5 and start building webpages!
    </p>

    <p>In this course we will provide:</p>
    <ul class="list-disc list-inside">
      <li><span class="font-semibold">4 lessons</span></li>
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
    <Suspense>
      <template #default>
        <LessonStructure />
      </template>
      <template #fallback>
        <div class="absolute -ml-6 top-1/2 left-1/2">
          <LoadingSpinner />
        </div>
      </template>
    </Suspense>
  </AuthorizedTemplate>
</template>
<script setup lang="ts">
import AuthorizedTemplate from '@views/Authorized/AuthorizedTemplate.vue';
import LessonStructure from '../../../components/authorized/course/LessonStructure.vue';
import LoadingSpinner from '@/components/atoms/LoadingSpinner.vue';
</script>
