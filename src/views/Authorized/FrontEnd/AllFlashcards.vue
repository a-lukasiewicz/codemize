<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">HTML5 - All Flashcards</h3>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="card in cards" :key="card.frontText">
        <Flashcard :frontText="card.frontText" :backText="card.backText" />
      </div>
    </div>
  </AuthorizedTemplate>
</template>
<script setup lang="ts">
import AuthorizedTemplate from '@views/Authorized/AuthorizedTemplate.vue';
import Flashcard from '@/components/authorized/course/Flashcard.vue';
import cards from '@/data/HTML/flashcards.json';
</script>
