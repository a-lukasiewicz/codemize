<template>
    <h1 class="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800 md:text-5xl">{{title}}</h1>
    <h3 v-if="subTitle" class="w-full my-2 text-lg font-bold leading-tight text-center text-gray-600 md:text-2xl">{{subTitle}}</h3>
    <div v-if="divider" class="w-full mb-4">
        <div class="divider"></div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {type: String, default: ""},
    subTitle: {type: String, default: ""},
    divider: {type: Boolean, default: false},
})
</script>