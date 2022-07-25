<template>
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
  <div class="text-sm md:text-base mockup-code">
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
  <ul>
    <li>
      <a class="hidden md:block hover:text-main-1" :href="data.recap[1]">{{
        data.recap[1]
      }}</a>
      <a class="md:hidden hover:text-main-1" :href="data.recap[1]">{{
        data.recap[1].length > 30 ? 'LINK' : data.recap[1]
      }}</a>
    </li>
  </ul>
  <div v-if="data.usefulLinks">
    <h3 class="mt-6 mb-6 text-xl font-semibold">Useful links</h3>
    <ul v-for="el in data.usefulLinks" :key="el" class="list-inside">
      <li class="my-2">
        <a class="hidden md:block hover:text-main-1" :href="el">{{ el }}</a>
        <a class="md:hidden hover:text-main-1" :href="el">{{
          el.length > 30 ? 'LINK' : el
        }}</a>
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
      :class="{ disabled: 'opacity-30, bg-green-300' }"
      class="ml-2 text-sm text-white bg-green-400 md:text-base"
      :disabled="disabled"
      @click="mark(id + 1)"
      >Mark lesson as completed</Button
    >
  </div>
</template>
<script setup lang="ts">
import Flashcard from '@/components/authorized/course/Flashcard.vue';
import Button from '@/components/atoms/Button.vue';
import cards from '@/data/HTML/flashcards.json';

import basicsData from '@/data/HTML/lesson_basics.json';
import tablesData from '@/data/HTML/lesson_tables.json';
import formsData from '@/data/HTML/lesson_forms.json';
import semanticElementsData from '@/data/HTML/lesson_semantic_elements.json';

import { useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import Text from '../../../components/atoms/Text.vue';
import Video from '../../../components/atoms/Video.vue';
import Table from '../../../components/atoms/Table.vue';
import Form from '../../../components/authorized/course/Form.vue';
import { auth } from '@/main';
import { markAsCompleted } from '@/functions/course';
import { createToastFunction } from '@/helpers/createToast';
import { router } from '@/router';
import { getUserData } from '@/functions/user';

const route = useRoute();
const path = computed(() => route.path);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let data = {} as any;
let id = 0;

if (path.value === '/basics') {
  data = basicsData;
  id = 0;
} else if (path.value === '/tables') {
  data = tablesData;
  id = 1;
} else if (path.value === '/forms') {
  data = formsData;
  id = 2;
} else if (path.value === '/semantic-elements') {
  data = semanticElementsData;
  id = 3;
}
let disabled = ref(false);

onMounted(async () => {
  const userData = await getUserData(auth?.currentUser?.uid as string);
  console.log(userData?.currentPath?.doneOfTech);
  console.log(id);

  if (userData?.currentPath?.doneOfTech !== id) {
    disabled.value = true;
  }
});

const mark = async (number: number) => {
  try {
    markAsCompleted(auth?.currentUser?.uid as string, number);
    createToastFunction('Lesson completed', 'success');
    router.push('/html5');
    disabled.value = true;
  } catch (error) {
    console.error(error);
  }
};
</script>
