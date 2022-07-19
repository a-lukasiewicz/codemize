<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Lesson {{ path }}</h3>
    <h3 class="mt-6 mb-6 text-xl font-semibold">Introduction</h3>
    <div v-for="el in data.introduction" :key="el">
      <Text class="py-2" :text="el" />
    </div>
    <Table v-if="path === '/tables'" :data="data.mostImportantTags" />
    <Form v-if="path === '/forms'" />
    <img
      v-if="path === '/semantic-elements'"
      src="@assets/semantic_elements.jpeg"
      alt="Semantic elements"
    />
    <h3 class="mt-6 mb-6 text-xl font-semibold">Practical knowledge</h3>
    <div class="mockup-code">
      <pre data-prefix="$"><code>{{data.practicalKnowledge[0]}}</code></pre>
    </div>
    <Video class="pt-2" :src="data.practicalKnowledge[1]" />
    <h3 class="mt-6 mb-6 text-xl font-semibold">Most Important Tags</h3>
    <Table :data="data.mostImportantTags" />
    <h3 class="mt-6 mb-6 text-xl font-semibold">Advices</h3>
    <ul v-for="el in data.advices" :key="el" class="list-disc list-inside">
      <li class="py-2">{{ el }}</li>
    </ul>
    <h3 class="mt-6 mb-6 text-xl font-semibold">Practise</h3>
    <Text :text="data.recap[0]" />
    <ul class="list-disc list-inside">
      <li>
        <a class="hover:text-main-1" :href="data.recap[1]">{{
          data.recap[1]
        }}</a>
      </li>
    </ul>
    <div v-if="data.usefulLinks">
      <h3 class="mt-6 mb-6 text-xl font-semibold">Useful links</h3>
      <ul v-for="el in data.usefulLinks" :key="el">
        <li class="my-2">
          <a class="hover:text-main-1" :href="el">{{ el }}</a>
        </li>
      </ul>
    </div>

    <h3 class="mt-6 text-xl font-semibold">Flashcards for that lessons</h3>
    <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="card in cards" :key="card.frontText">
        <Flashcard
          v-if="card.category === path"
          :frontText="card.frontText"
          :backText="card.backText"
        />
      </div>
    </div>
    <div class="flex flex-row justify-center w-full mt-6 text-sm md:block">
      <Button class="text-sm md:text-base" @click="$router.go(-1)"
        >Go back</Button
      >
      <Button
        class="ml-2 text-sm text-white bg-green-400 md:text-base"
        @click="$router.go(-1)"
        >Mark lesson as completed</Button
      >
    </div>
  </AuthorizedTemplate>
</template>
<script setup lang="ts">
import AuthorizedTemplate from '@views/Authorized/AuthorizedTemplate.vue';
import Flashcard from '@/components/authorized/course/Flashcard.vue';
import Button from '@/components/atoms/Button.vue';
import cards from '@/data/HTML/flashcards.json';

import basicsData from '@/data/HTML/lesson_basics.json';
import tablesData from '@/data/HTML/lesson_tables.json';
import formsData from '@/data/HTML/lesson_forms.json';
import semanticElementsData from '@/data/HTML/lesson_semantic_elements.json';

import { useRoute } from 'vue-router';
import { computed } from 'vue';
import Text from '../../../components/atoms/Text.vue';
import Video from '../../../components/atoms/Video.vue';
import Table from '../../../components/atoms/Table.vue';
import Form from '../../../components/authorized/course/Form.vue';

const route = useRoute();
const path = computed(() => route.path);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let data = {} as any;

if (path.value === '/basics') {
  data = basicsData;
} else if (path.value === '/tables') {
  data = tablesData;
} else if (path.value === '/forms') {
  data = formsData;
} else if (path.value === '/semantic-elements') {
  data = semanticElementsData;
}

console.log(data);
</script>
