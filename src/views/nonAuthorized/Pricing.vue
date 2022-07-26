<template>
  <div class="flex flex-col items-stretch justify-around min-h-screen">
    <Navbar blue />
    <Pricing />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from '@/components/basic/Navbar.vue';
import Pricing from '@/components/molecules/Pricing/Pricing.vue';
import Footer from '@/components/basic/Footer.vue';
</script>
