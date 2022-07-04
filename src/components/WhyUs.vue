<template>
  <section id="whyUs" class="pt-24 pb-20 bg-blue-300">
    <div class="flex flex-col px-5">
      <h1 class="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800 md:text-5xl">Experience with perfection</h1>
      <h3 class="w-full my-2 text-lg font-bold leading-tight text-center text-gray-600 md:text-2xl">Heart of perfect business management</h3>
      <div class="flex justify-around px-4 md:px-24 py-12 mb-4 lg:px-[25vw]">
        <WhyUsIcon iconURL="../assets/chart.svg" title="Make proggress" text='Record podcast as creatively as possible' />
        <WhyUsIcon iconURL="../assets/users.svg" title="Work together" text='Record podcast as creatively as possible' />
        <WhyUsIcon iconURL="../assets/heart.svg" title="Fun & easy way" text='Record podcast as creatively as possible' />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import WhyUsIcon from './WhyUsIcon.vue';
</script>