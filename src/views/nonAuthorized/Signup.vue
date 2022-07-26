<template>
  <div class="flex flex-col justify-around space-between">
    <Navbar />
    <Signup class="mt-16" />
    <Footer class="absolute bottom-0 w-screen" />
  </div>
</template>
<script setup lang="ts">
import Signup from '@/components/molecules/Authentication/Signup.vue';
import Navbar from '@/components/basic/Navbar.vue';
import Footer from '@/components/basic/Footer.vue';
</script>
