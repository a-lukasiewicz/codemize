<template>
    <div class="py-24">
      <h1 class="w-full mt-2 text-5xl font-bold leading-tight text-center text-gray-800">Companies</h1>
      <h3 class="text-sm text-center text-gray-800">That we are cooperating with</h3>
      <Flicking class="flex items-center px-4 py-16" :options="{ moveType: 'freeScroll', bound: true, deceleration: 0.0075, duration: 1000, renderOnlyVisible: true }">
        <span class="py-4 mr-24 text-2xl text-center bg-red-400 rounded w-36 button is-white">🍎 Apple</span>
        <span class="py-4 mr-24 text-2xl text-center bg-red-400 rounded w-36 button is-white">🍎 Apple</span>
        <span class="py-4 mr-24 text-2xl text-center bg-red-400 rounded w-36 button is-white">🍎 Apple</span>
        <span class="py-4 mr-24 text-2xl text-center bg-red-400 rounded w-36 button is-white">🍎 Apple</span>
        <span class="py-4 mr-24 text-2xl text-center bg-red-400 rounded w-36 button is-white">🍎 Apple</span>
        <span class="py-4 mr-24 text-2xl text-center bg-red-400 rounded w-36 button is-white">🍎 Apple</span>
        <span class="py-4 mr-24 text-2xl text-center bg-red-400 rounded w-36 button is-white">🍎 Apple</span>
        <span class="py-4 mr-24 text-2xl text-center bg-red-400 rounded w-36 button is-white">🍎 Apple</span>
        <span class="py-4 mr-24 text-2xl text-center bg-red-400 rounded w-36 button is-white">🍎 Apple</span>
      </Flicking>
      <div class="w-full py-4 mb-4">
        <p class="italic text-center">"We can achieve so much more as a group than an individual" ~ Artur Potts Dawson</p>
      </div>
    </div>
</template>
<script setup lang="ts">
</script>