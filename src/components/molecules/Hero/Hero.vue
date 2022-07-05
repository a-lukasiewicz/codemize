<template>
  <div class="pt-24">
    <div class="container flex flex-col flex-wrap items-center justify-around px-3 mx-auto md:flex-row">
      <div class="flex flex-col items-start justify-center w-full md:w-2/5">
        <h1 class="my-4 text-5xl font-bold leading-tight text-center lg:text-left">Master your skills easiest way possible.</h1>
        <p class="mb-8 text-2xl leading-normal">Codemize is for you all that want to start your carrer in IT. It's platform that gives oppurtunity to learn most important concepts to be job ready.</p>
        <router-link to="/zarejestruj">
        <Button class="text-white bg-main-1">Join us!</Button>
        </router-link>
      </div>
      <div class="w-full py-6 text-center md:w-3/5">
        <img class="z-50 w-full md:w-4/5" src="../../../assets/hero.png" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '../../atoms/Button.vue';</script>