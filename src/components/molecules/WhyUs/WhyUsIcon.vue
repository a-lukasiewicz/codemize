<template>
    <div class="flex flex-col items-center justify-center px-2">
        <div class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl md:w-24 md:h-24 lg:w-32 lg:h-32">
            <img :src="imageURL" alt="">
            <h3 v-if="number" class="text-5xl font-bold">{{number}}</h3>
        </div>
        <h3 class="pt-4 pb-2 text-base font-bold text-center text-black md:text-xl">{{title}}</h3>
        <p class="text-sm font-thin text-center text-black">{{text}}</p>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    iconURL: {type: String, default: ""},
    title: {type: String, default: ""},
    text: {type: String, default: ""},
    number: {type: Number, default: 0}
})

const imageURL = new URL(`/src/assets/${props.iconURL}`, import.meta.url).href;
</script>