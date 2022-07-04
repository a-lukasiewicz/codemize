<template lang="">
    <div v-if="props.imagePosition==='left'" class="flex flex-col items-center justify-around md:flex-row">
      <img :src="imageURL" class="w-full md:w-2/5" alt="" />
      <AboutUsText topBadge="EASY AND ACCESSABLE" linkTitle="Remote Access" defaultText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos mollitia cumque, aliquam earum ex illo facere blanditiis reprehenderit ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis sequi excepturi deserunt minus eveniet sed." />
    </div>
    <div v-else class="flex flex-col items-center justify-around md:flex-row">
      <AboutUsText topBadge="WEB PLATFORM" linkTitle="Control Progress" defaultText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos mollitia cumque, aliquam earum ex illo facere blanditiis reprehenderit ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis sequi excepturi deserunt minus eveniet sed." />
      <img :src="imageURL" alt="" />
    </div>
</template>
<script setup lang="ts">
import AboutUsText from './AboutUsText.vue';

const props = defineProps({
  iconURL: { type: String, default: "" },
  linkTitle: { type: String, default: "" },
  imagePosition: {type: String, default: ""},
});

const imageURL = new URL(`/src/assets/about-us/${props.iconURL}`, import.meta.url).href;
</script>