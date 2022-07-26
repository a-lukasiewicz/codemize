<template>
  <div class="flex flex-col justify-around space-between">
    <Navbar blue />
    <Login class="mt-16" />
    <Footer class="absolute bottom-0 w-screen" />
  </div>
</template>
<script setup lang="ts">
import Login from '@/components/molecules/Authentication/Login.vue';
import Navbar from '@/components/basic/Navbar.vue';
import Footer from '@/components/basic/Footer.vue';
</script>
