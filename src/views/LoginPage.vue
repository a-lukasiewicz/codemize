<template>
<div class="flex flex-col items-stretch justify-around min-h-screen">
    <Navbar />
    <Login />
</div>
</template>
<script setup lang="ts">
import Login from '@/components/molecules/Authentication/Login.vue';
import Navbar from '@/components/basic/Navbar.vue';
</script>
