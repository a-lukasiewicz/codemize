<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Add New Course</h3>

    <div class="w-3/5 mb-20">
      <div class="flex items-center justify-between p-8 bg-blue-400">
        <h1 class="mx-12 font-bold">Select path to which you will add a lesson:</h1>
        <select class="w-full max-w-xs select">
          <option>Frontend Path</option>
          <option>Backend Path</option>
          <option>DevOps Path</option>
        </select>
      </div>
    </div>

    <h3 class="mt-6 text-2xl font-semibold">Add Lesson Data</h3>

    <div class="flex flex-col justify-center w-3/5">
      <div class="flex items-center justify-between p-8 mt-12 bg-blue-100">
        <h3 class="mr-12 font-bold">Add introduction:</h3>
        <textarea id="introduction" rows="4" cols="50" maxlength="2000"> </textarea>
      </div>

      <div class="flex items-center justify-between p-8 mt-12 bg-blue-100">
        <h3 class="mr-12 font-bold">Add practical knowledge header:</h3>
        <div class="flex flex-col items-center justify-center">
          <label class="p-4 font-bold"
            >Heading
            <input
              class="px-4 py-2 ml-4"
              type="text"
              name="practical_knowledge_heading"
            />
          </label>
          <label class="p-4 font-bold"
            >Link
            <input class="px-4 py-2 ml-4" type="text" name="practical_knowledge_link" />
          </label>
        </div>
      </div>

      <div class="flex items-center justify-between p-8 mt-12 bg-blue-100">
        <h3 class="mr-12 font-bold">Add most important elements section:</h3>
        <textarea id="important_element_section" rows="4" cols="50"> </textarea>
      </div>

      <div class="flex items-center justify-between p-8 mt-12 bg-blue-100">
        <h3 class="mr-12 font-bold">Add advices section:</h3>
        <textarea id="advices_section" rows="4" cols="50" maxlength="2000"> </textarea>
      </div>

      <div class="flex items-center justify-between p-8 mt-12 bg-blue-100">
        <h3 class="mr-12 font-bold">Add recap:</h3>
        <textarea id="recap" rows="4" cols="50"> </textarea>
      </div>

      <div class="flex items-center justify-between p-8 mt-12 bg-blue-100">
        <h3 class="mr-12 font-bold">Add useful links header:</h3>
        <div class="flex flex-col items-center justify-center">
          <label class="p-4 font-bold"
            >Heading
            <input class="px-4 py-2 ml-4" type="text" name="useful_links_header" />
          </label>
          <label class="p-4 font-bold"
            >Link
            <input class="px-4 py-2 ml-4" type="text" name="useful_links" />
          </label>
        </div>
      </div>

      <h3 class="mt-6 text-2xl font-semibold">Preview</h3>

      <h3 class="mt-6 mb-6 text-xl font-semibold">Introduction</h3>
      <div>Introduction</div>
      <h3 class="mt-6 mb-6 text-xl font-semibold">Practical knowledge</h3>
      <div>Practical knowledge</div>
      <h3 class="mt-6 mb-6 text-xl font-semibold">Advices</h3>
      <div>Recap</div>
      <h3 class="mt-6 mb-6 text-xl font-semibold">Recap</h3>
      <div>Recap</div>
      <div>
        <h3 class="mt-6 mb-6 text-xl font-semibold">Useful links</h3>
        <div>Useful links</div>
      </div>

      <div class="flex justify-center mt-12">
        <Button
          class="ml-2 text-sm text-white bg-green-400 md:text-base"
          @click="$router.go(-1)"
          >Create</Button
        >
      </div>
    </div>
  </AuthorizedTemplate>
</template>

<script setup lang="ts">
import AuthorizedTemplate from "./AuthorizedTemplate.vue";
import Button from "@/components/atoms/Button.vue";
</script>
