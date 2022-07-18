<template>
  <AuthorizedTemplate>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Frontend Path</h3>

    <div
      class="flex items-center px-4 py-8 bg-main-5 border-[1px] border-white rounded"
    >
      <img src="@assets/bulb.svg" alt="Bulb" />
      <p class="ml-4 italic">
        Did you know that first version of HTML was written by Tim Berners-Lee
        in 1993.
      </p>
    </div>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">Control your progress:</h3>
    <div class="flex justify-center w-full py-8">
      <ul class="steps">
        <li class="step step-primary">HTML5</li>
        <li class="step">CSS3</li>
        <li class="step">JavaScript</li>
        <li class="step">React</li>
        <li class="step">Typescript</li>
      </ul>
    </div>
    <div class="grid grid-cols-1 gap-4 place-items-center">
      <Technology :value="74" buttonText="Continue Learning" techName="HTML5" />
    </div>
    <h3></h3>
    <h3 class="mt-6 mb-6 text-2xl font-semibold">
      Finish previous courses to unlock that technologies:
    </h3>
    <div class="grid grid-cols-1 gap-4 place-items-center">
      <Technology
        :value="0"
        disabled
        buttonText="Start Learning"
        techName="CSS3"
      />
      <Technology
        :value="0"
        disabled
        buttonText="Start Learning"
        techName="JavaScript"
      />
      <Technology
        :value="0"
        buttonText="Start Learning"
        disabled
        techName="React"
      />
      <Technology
        :value="0"
        buttonText="Start Learning"
        disabled
        techName="Typescript"
      />
    </div>
  </AuthorizedTemplate>
</template>
<script setup lang="ts">
import AuthorizedTemplate from '@views/Authorized/AuthorizedTemplate.vue';
import Technology from '@/components/authorized/course/Technology.vue';
</script>
