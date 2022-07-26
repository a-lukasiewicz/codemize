<template>
  <div class="flex flex-col justify-around space-between">
    <Navbar />
    <ForgotPassword class="mt-16" />
    <Footer class="absolute bottom-0 w-screen" />
  </div>
</template>
<script setup lang="ts">
import ForgotPassword from '@/components/molecules/Authentication/ForgotPassword.vue';
import Navbar from '@/components/basic/Navbar.vue';
import Footer from '@/components/basic/Footer.vue';
</script>
