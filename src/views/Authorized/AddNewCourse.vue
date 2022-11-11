<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Add New Course</h3>

    <div class="mb-20">
      <div
        class="flex flex-col items-center p-2 bg-blue-400 lg:flex-row lg:justify-between lg:p-8"
      >
        <h1 class="mx-1 font-bold lg:mx-12">
          Select path to which you will add a lesson:
        </h1>
        <select class="w-full max-w-xs select">
          <option>Frontend Path</option>
          <option>Backend Path</option>
          <option>DevOps Path</option>
        </select>
      </div>
      <div
        class="flex flex-col items-center p-2 bg-blue-400 lg:flex-row lg:justify-between lg:p-8"
      >
        <h1 class="mx-12 font-bold">Technology:</h1>
        <select class="w-full max-w-xs select">
          <option>HTML</option>
          <option>CSS</option>
          <option>JavaScript</option>
          <option>TypeScript</option>
          <option>React</option>
          <option>Node.js</option>
          <option>Python</option>
          <option>Java</option>
          <option>Bash</option>
        </select>
      </div>
    </div>

    <h3 class="mt-6 text-2xl font-semibold">Add Lesson Data</h3>

    <div class="flex flex-col justify-center w-full">
      <div
        class="flex flex-col justify-center p-4 my-4 bg-blue-100 lg:items-center lg:justify-between lg:p-8 lg:flex-row"
      >
        <h3 class="font-bold lg:mr-12">Add introduction:</h3>
        <textarea class="w-4/5 h-40 lg:w-96" v-model="introduction" id="introduction">
        </textarea>
      </div>

      <div
        class="flex flex-col justify-center p-4 my-4 bg-blue-100 lg:items-center lg:justify-between lg:p-8 lg:flex-row"
      >
        <h3 class="mr-12 font-bold">Add practical knowledge header:</h3>
        <div class="flex flex-col items-center justify-center">
          <label class="p-4 font-bold"
            >Heading
            <input
              v-model="practical_knowledge_heading"
              class="px-4 py-2 ml-4"
              type="text"
              name="practical_knowledge_heading"
            />
          </label>
          <label class="p-4 font-bold"
            >Link
            <input
              v-model="practical_knowledge_link"
              class="px-4 py-2 ml-4"
              type="text"
              name="practical_knowledge_link"
            />
          </label>
        </div>
      </div>

      <div
        class="flex flex-col justify-center p-4 my-4 bg-blue-100 lg:items-center lg:justify-between lg:p-8 lg:flex-row"
      >
        <h3 class="mr-12 font-bold">Add most important elements section:</h3>
        <textarea v-model="important_element_section" rows="4" cols="50"> </textarea>
      </div>

      <div
        class="flex flex-col justify-center p-4 my-4 bg-blue-100 lg:items-center lg:justify-between lg:p-8 lg:flex-row"
      >
        <h3 class="mr-12 font-bold">Add advices section:</h3>
        <textarea v-model="advices_section" rows="4" cols="50" maxlength="2000">
        </textarea>
      </div>

      <div
        class="flex flex-col justify-center p-4 my-4 bg-blue-100 lg:items-center lg:justify-between lg:p-8 lg:flex-row"
      >
        <h3 class="mr-12 font-bold">Add recap:</h3>
        <textarea v-model="recap" rows="4" cols="50"> </textarea>
      </div>

      <div
        class="flex flex-col justify-center p-4 my-4 bg-blue-100 lg:items-center lg:justify-between lg:p-8 lg:flex-row"
      >
        <h3 class="mr-12 font-bold">Add useful links header:</h3>
        <div class="flex flex-col items-center justify-center">
          <label class="p-4 font-bold"
            >Heading
            <input class="px-4 py-2 ml-4" type="text" v-model="useful_links_header" />
          </label>
          <label class="p-4 font-bold"
            >Link
            <input class="px-4 py-2 ml-4" type="text" v-model="useful_links" />
          </label>
        </div>
      </div>

      <h3 class="mt-6 text-2xl font-semibold">Preview</h3>

      <h3 class="mt-6 mb-6 text-xl font-semibold">Introduction</h3>
      <div>{{ introduction }}</div>
      <h3 class="mt-6 mb-6 text-xl font-semibold">Practical knowledge</h3>
      <h3>{{ practical_knowledge_heading }}</h3>
      <p>{{ practical_knowledge_link }}</p>
      <h3 class="mt-6 mb-6 text-xl font-semibold">Advices</h3>
      <div>{{ advices_section }}</div>
      <h3 class="mt-6 mb-6 text-xl font-semibold">Recap</h3>
      <div>{{ recap }}</div>
      <div>
        <h3 class="mt-6 mb-6 text-xl font-semibold">Useful links</h3>
        <h3>{{ useful_links_header }}</h3>
        <div>{{ useful_links }}</div>
      </div>

      <div class="flex justify-center mt-12">
        <Button
          class="ml-2 text-sm text-white bg-green-400 md:text-base"
          @click="createLesson"
          >Create</Button
        >
      </div>
    </div>
  </AuthorizedTemplate>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AuthorizedTemplate from "./AuthorizedTemplate.vue";
import { createToastFunction } from "@/helpers/createToast";
import { router } from "@/router";
import Button from "@/components/atoms/Button.vue";

const introduction = ref("");
const practical_knowledge_heading = ref("");
const practical_knowledge_link = ref("");
const important_element_section = ref("");
const advices_section = ref("");
const recap = ref("");
const useful_links_header = ref("");
const useful_links = ref("");

const createLesson = () => {
  try {
    createToastFunction("Lesson created successfully.", "success");
    router.push("/home");
  } catch (error) {
    console.error(error);
  }
};
</script>
