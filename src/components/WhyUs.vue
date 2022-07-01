<template>
  <section id="whyUs" class="pt-24 pb-20 bg-blue-300">
    <div class="flex flex-col">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Experience with perfection</h1>
      <h3 class="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-600">Heart of perfect business management</h3>
      <div class="flex justify-around px-24 py-12 mb-4">
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