<template>
  <div
    id="intro"
    class="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black"
  >
    <div id="intro-text" class="text-3xl text-white">
      <h1 id="hide" class="overflow-hidden bg-black">
        <span id="text" class="inline-block translate-y-full"
          >Creating innovation</span
        >
      </h1>
      <h1 id="hide" class="overflow-hidden bg-black">
        <span id="text" class="inline-block translate-y-full"
          >For Everyday</span
        >
      </h1>
      <h1 id="hide" class="overflow-hidden bg-black">
        <span id="text" class="inline-block translate-y-full">people.</span>
      </h1>
    </div>
  </div>
  <div class="slider"></div>
</template>
<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

let loaded = ref(false);
onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
  tl.to('#text', { y: '0%', duration: 0.5, stagger: 0.25 });
  tl.to('#slider', { y: '-100%', duration: 1, delay: 0.5 });
  tl.to('#intro', { y: '-100%', duration: 0.8 }, '-=1');
  loaded.value = true;
});
</script>
