<template>
    <div>
        <div class="flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-xl">
            <img :src="imageURL" alt="">
        </div>
        <h3 class="pt-4 pb-2 text-xl font-bold text-center text-black">{{title}}</h3>
        <p class="w-32 text-sm font-thin text-center text-black">{{text}}</p>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    iconURL: {type: String},
    title: {type: String},
    text: {type: String},
})

const imageURL = new URL(`/src/assets/${props.iconURL}`, import.meta.url).href;
</script>