<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Lesson {{ path }}</h3>
    <h3 class="mt-6 mb-6 text-xl font-semibold">Introduction</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      necessitatibus quia vel totam commodi sequi officiis, aliquam, quam cumque
      hic voluptates nesciunt. Iusto necessitatibus officia molestias natus,
      reiciendis ut et explicabo? Quae quaerat nihil esse ab? Sequi consequatur
      sint, corporis nihil molestias assumenda a odit beatae nostrum,
      consectetur quod ad!
    </p>
    <h3 class="mt-6 mb-6 text-xl font-semibold">Practical knowledge</h3>
    <div class="mockup-code">
      <pre data-prefix="$"><code>Hello World</code></pre>
    </div>
    <h3 class="mt-6 mb-6 text-xl font-semibold">Most Important Tags</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      necessitatibus quia vel totam commodi sequi officiis, aliquam, quam cumque
      hic voluptates nesciunt. Iusto necessitatibus officia molestias natus,
      reiciendis ut et explicabo? Quae quaerat nihil esse ab? Sequi consequatur
      sint, corporis nihil molestias assumenda a odit beatae nostrum,
      consectetur quod ad!
    </p>
    <h3 class="mt-6 mb-6 text-xl font-semibold">Advices</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      necessitatibus quia vel totam commodi sequi officiis, aliquam, quam cumque
      hic voluptates nesciunt. Iusto necessitatibus officia molestias natus,
      reiciendis ut et explicabo? Quae quaerat nihil esse ab? Sequi consequatur
      sint, corporis nihil molestias assumenda a odit beatae nostrum,
      consectetur quod ad!
    </p>
    <h3 class="mt-6 mb-6 text-xl font-semibold">Recap</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
      necessitatibus quia vel totam commodi sequi officiis, aliquam, quam cumque
      hic voluptates nesciunt. Iusto necessitatibus officia molestias natus,
      reiciendis ut et explicabo? Quae quaerat nihil esse ab? Sequi consequatur
      sint, corporis nihil molestias assumenda a odit beatae nostrum,
      consectetur quod ad!
    </p>
    <h3 class="mt-6 mb-6 text-xl font-semibold">Flashcards for that lessons</h3>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="card in cards" :key="card.frontText">
        <Flashcard
          v-if="card.category === 'basics'"
          :frontText="card.frontText"
          :backText="card.backText"
        />
      </div>
    </div>
    <Button @click="$router.go(-1)">Go back</Button>
  </AuthorizedTemplate>
</template>
<script setup lang="ts">
import AuthorizedTemplate from '@views/Authorized/AuthorizedTemplate.vue';
import Flashcard from '@/components/authorized/course/Flashcard.vue';
import Button from '@/components/atoms/Button.vue';
import cards from '@/data/HTML/flashcards.json';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const path = computed(() => route.path);
</script>
