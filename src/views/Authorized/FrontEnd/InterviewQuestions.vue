<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">
      HTML5 - Interview Questions
    </h3>
    <div class="flex items-start justify-center my-2">
      <div class="w-full my-1 sm:w-10/12">
        <ul
          v-for="question in data"
          :key="question.answer"
          class="flex flex-col"
        >
          <Interview_Li
            :question="question.question"
            :answer="question.answer"
          />
        </ul>
      </div>
    </div>
    <Button @click="$router.go(-1)">Go back</Button>
  </AuthorizedTemplate>
</template>
<script setup lang="ts">
import AuthorizedTemplate from '@views/Authorized/AuthorizedTemplate.vue';
import data from '@/data/HTML/interview_questions.json';
import Interview_Li from './Interview_Li.vue';
import Button from '@/components/atoms/Button.vue';
</script>
