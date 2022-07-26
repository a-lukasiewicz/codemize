<template>
  <div class="pb-12 md:pb-0">
    <div
      class="container flex flex-col flex-wrap items-center justify-around px-6 mx-auto md:py-20 md:flex-row"
    >
      <div
        class="flex flex-col items-start justify-center w-full md:w-4/5 lg:w-2/5"
      >
        <h1
          class="my-4 text-3xl font-bold leading-tight text-center md:text-5xl lg:text-left"
        >
          Master your skills easiest way possible.
        </h1>
        <p class="py-6 mb-8 text-xl leading-normal md:text-2xl">
          Codemize is for you all that want to start your carrer in IT. It's
          platform that gives oppurtunity to learn most important concepts to be
          job ready.
        </p>
        <div class="flex justify-center w-full md:justify-end">
          <router-link to="/pricing">
            <Button class="text-white bg-main-1">Join us!</Button>
          </router-link>
        </div>
      </div>
      <div class="hidden w-full py-6 text-center lg:block md:w-2/5">
        <img class="z-50 w-full md:w-4/5" src="../../../assets/hero.png" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '../../atoms/Button.vue';
</script>
