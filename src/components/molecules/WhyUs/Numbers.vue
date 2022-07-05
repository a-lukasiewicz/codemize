<template>
    <section id="whyUs" class="pt-24 pb-20 bg-main-4">
    <div class="flex flex-col px-5">
      <Heading title="Our stats" subTitle="Many successfull carreers starts here" />
      <div class="flex justify-around px-4 md:px-24 py-12 mb-4 lg:px-[25vw]">
        <WhyUsIcon :number="50" title="Make proggress" text='Record podcast as creatively as possible' />
        <WhyUsIcon :number="50" title="Work together" text='Record podcast as creatively as possible' />
        <WhyUsIcon :number="50" title="Fun & easy way" text='Record podcast as creatively as possible' />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import WhyUsIcon from './WhyUsIcon.vue';
import Heading from '../../atoms/Heading.vue';
</script>