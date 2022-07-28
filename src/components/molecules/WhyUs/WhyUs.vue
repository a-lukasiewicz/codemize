<template>
  <div v-if="experience" id="whyUs" class="flex flex-col px-5 pt-24 pb-20">
    <Heading
      title="Experience with perfection"
      subTitle="Heart of perdect business management"
      whiteColors
    />
    <div class="flex justify-around px-4 md:px-24 py-12 mb-4 lg:px-[25vw]">
      <WhyUsIcon
        iconURL="chart.svg"
        title="Make proggress"
        text="Record podcast as creatively as possible"
      />
      <WhyUsIcon
        iconURL="users.svg"
        title="Work together"
        text="Record podcast as creatively as possible"
      />
      <WhyUsIcon
        iconURL="heart.svg"
        title="Fun & easy way"
        text="Record podcast as creatively as possible"
      />
    </div>
  </div>
  <div v-else id="whyUs" class="relative flex flex-col px-5 pt-24 pb-20">
    <Heading
      title="Our stats"
      subTitle="Many successfull carreers starts here"
      whiteColors
    />
    <div class="flex justify-around px-4 md:px-24 py-12 mb-4 lg:px-[25vw]">
      <WhyUsIcon
        :number="50"
        title="Make proggress"
        text="Record podcast as creatively as possible"
      />
      <WhyUsIcon
        :number="50"
        title="Work together"
        text="Record podcast as creatively as possible"
      />
      <WhyUsIcon
        :number="50"
        title="Fun & easy way"
        text="Record podcast as creatively as possible"
      />
    </div>
    <div class="custom-shape-divider-bottom-1659005876">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import WhyUsIcon from './WhyUsIcon.vue';
import Heading from '../../atoms/Heading.vue';

defineProps({
  experience: { type: Boolean, default: false },
});
</script>
<style>
#whyUs {
  background: linear-gradient(
    60deg,
    rgba(84, 58, 183, 1) 0%,
    rgba(0, 172, 193, 1) 100%
  );
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
