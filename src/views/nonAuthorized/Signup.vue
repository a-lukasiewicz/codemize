<template>
  <div class="flex flex-col justify-around">
    <Navbar blue />
    <Signup class="mt-16" />
    <Footer class="w-full mt-16 lg:absolute lg:bottom-0 " />
  </div>
</template>
<script setup lang="ts">
import Signup from '@/components/molecules/Authentication/Signup.vue';
import Navbar from '@/components/basic/Navbar.vue';
import Footer from '@/components/basic/Footer.vue';
</script>
