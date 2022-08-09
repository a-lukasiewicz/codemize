<template>
  <div v-if="experience" id="whyUs" ref="icons" class="flex flex-col px-5 pt-24 pb-20">
    <Heading title="Based on experience" subTitle="Heart of perdect business management" whiteColors />
    <div id="icons" class="flex justify-around px-4 md:px-24 py-12 mb-4 lg:px-[25vw]">
      <WhyUsIcon iconURL="chart.svg" title="Make proggress" text="Record your improvement" />
      <WhyUsIcon iconURL="users.svg" title="Join our team" text="Developers with years of experience" />
      <WhyUsIcon iconURL="heart.svg" title="Fun & easy way" text="It's fun to learn with us" />
    </div>
  </div>
  <div v-else id="whyUs" ref="icons" class="relative flex flex-col px-5 pt-24 pb-20">
    <Heading title="Our stats" subTitle="Many successfull carreers starts here" whiteColors />
    <div id="icons" class="flex justify-around px-4 md:px-24 py-12 mb-4 lg:px-[25vw]">
      <WhyUsIcon :number="44" title="Developers" text="How many developers we hire" />
      <WhyUsIcon :number="6" title="Carrer paths" text="Paths available" />
      <WhyUsIcon :number="120" title="Hours of learning" text="So much content to explore" />
    </div>
    <div class="custom-shape-divider-bottom-1659005876">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import WhyUsIcon from './WhyUsIcon.vue';
import Heading from '../../atoms/Heading.vue';
import { slideDownOpacity } from '@/helpers/animations';
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

defineProps({
  experience: { type: Boolean, default: false },
});

const icons = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(icons, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    slideDownOpacity('#icons', [0.5, 2], '-100%');
  }
  targetIsVisible.value = isIntersecting;
});
</script>
<style>
#whyUs {
  background: linear-gradient(60deg,
      rgba(84, 58, 183, 1) 0%,
      rgba(0, 172, 193, 1) 100%);
}

.custom-shape-divider-bottom-1659005876 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1659005876 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 76px;
}

.custom-shape-divider-bottom-1659005876 .shape-fill {
  fill: #ffffff;
}
</style>
