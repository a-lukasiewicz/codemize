<template>
  <section class="w-full py-24 bg-gray-100">
    <div class="container px-2 pt-4 pb-12 mx-auto text-gray-800">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Pricing
      </h1>
      <div class="w-full mb-4">
        <div class="divider"></div>
      </div>
      <div
        id="pricing"
        class="flex flex-col items-center justify-center pt-12 my-12 sm:my-4"
      >
        <div
          class="z-10 flex flex-col w-5/6 mx-auto mt-4 bg-white border-[3px] border-main-1 rounded-lg shadow-lg lg:w-1/3 lg:mx-0 sm:-mt-6"
        >
          <div
            class="flex-1 overflow-hidden bg-white rounded-t rounded-b-none shadow"
          >
            <div class="w-full p-8 text-3xl font-bold text-center">Basic</div>
            <div class="w-full h-1 py-0 my-0 rounded-t gradient"></div>
            <ul class="w-full text-base font-bold text-center">
              <li class="py-4 border-b">
                Access to every course and path available on Codemize
              </li>
              <li class="py-4 border-b">Tech support</li>
              <li class="py-4 border-b">Control your progress</li>
            </ul>
          </div>
          <div
            class="flex-none p-6 mt-auto overflow-hidden bg-white rounded-t-none rounded-b shadow"
          >
            <div class="w-full pt-6 text-4xl font-bold text-center">
              25 USD
              <span class="text-base">/ per month</span>
            </div>
            <div class="flex items-center justify-center mt-4">
              <router-link to="/login">
                <Button class="text-black bg-gray-200">Select</Button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Button from '../../atoms/Button.vue';
import { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  gsap.to('#pricing', {
    duration: 0.5,
    ease: 'power4.out',
    x: '-100%',
    opacity: 0,
  });
  gsap.to('#pricing', {
    duration: 1.5,
    ease: 'power4.out',
    x: 0,
    opacity: 1,
  });
});
</script>
