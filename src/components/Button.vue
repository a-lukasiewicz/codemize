<template>
    <button
        class="px-6 py-3 mb-1 mr-1 text-lg font-semibold text-white shadow outline-none w-fit bg-yellowMain rounded-xl hover:shadow-lg focus:outline-none"
        :class="{ 'bg-gray-400': secondary, 'bg-gray-700 cursor-not-allowed': disabled }" :disabled="disabled"
        type="button" style="transition: all 0.15s ease 0s">
        <slot></slot></button>
</template>

<script setup lang="ts">
defineProps({
    secondary: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>