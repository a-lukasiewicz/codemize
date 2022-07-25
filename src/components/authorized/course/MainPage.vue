<template>
  <div
    class="flex items-center px-4 py-8 bg-main-5 border-[1px] border-white rounded"
  >
    <img src="@assets/bulb.svg" alt="Bulb" />
    <p class="ml-4 italic">
      Did you know that first version of HTML was written by Tim Berners-Lee in
      1993.
    </p>
  </div>
  <h3 class="mt-6 mb-6 text-2xl font-semibold">Control your progress:</h3>
  <div class="flex justify-center w-full py-8">
    <ul
      class="-ml-4 text-xs tracking-tighter md:ml-0 md:tracking-normal steps md:text-base"
    >
      <li class="step step-primary">HTML5</li>
      <li class="step">CSS3</li>
      <li class="step">JavaScript</li>
      <li class="step">React</li>
      <li class="step">Typescript</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 place-items-center">
    <Technology
      :value="user?.currentPath.doneOfTech"
      :buttonText="buttonText"
      choice="HTML"
      techName="HTML5"
    />
  </div>
  <h3 class="mt-6 mb-6 text-2xl font-semibold">
    Finish previous courses to unlock that technologies:
  </h3>
  <div class="grid grid-cols-1 gap-4 mb-12 place-items-center">
    <Technology
      :value="0"
      disabled
      buttonText="Start now"
      choice="CSS"
      techName="CSS3"
    />
    <Technology
      :value="0"
      disabled
      buttonText="Start now"
      choice="JS"
      techName="JavaScript"
    />
    <Technology
      :value="0"
      buttonText="Start now"
      disabled
      choice="REACT"
      techName="React"
    />
    <Technology
      :value="0"
      buttonText="Start now"
      disabled
      choice="TS"
      techName="Typescript"
    />
  </div>
</template>
<script setup lang="ts">
import Technology from '@/components/authorized/course/Technology.vue';
import { getUserData } from '@/functions/user';
import { auth } from '@/main';
import { ref } from 'vue';

let user = await getUserData(auth?.currentUser?.uid as string);

let buttonText = ref('');
if (user?.currentPath.doneOfTech === 0) {
  buttonText.value = 'Start now';
} else if (user?.currentPath.doneOfTech === 4) {
  buttonText.value = 'Finished!';
}
</script>
