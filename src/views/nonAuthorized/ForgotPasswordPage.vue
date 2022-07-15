<template>
  <div class="flex flex-col items-stretch justify-around min-h-screen">
    <Navbar />
    <ForgotPassword />
  </div>
</template>
<script setup lang="ts">
import ForgotPassword from '@/components/molecules/Authentication/ForgotPassword.vue';
import Navbar from '@/components/basic/Navbar.vue';
</script>
