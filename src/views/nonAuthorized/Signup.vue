<template>
<div class="flex flex-col items-stretch justify-around min-h-screen">
    <Navbar />
    <Signup />
</div>
</template>
<script setup lang="ts">
import Signup from '@/components/molecules/Authentication/Signup.vue';
import Navbar from '@/components/basic/Navbar.vue';
</script>