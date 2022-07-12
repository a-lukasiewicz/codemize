<template>
    <label class="ml-4 text-lg font-medium text-white">{{ labelText }}</label>
    <input
        :type="type" :value="modelValue"
        class="w-full px-4 py-4 mt-2 mb-2 text-sm text-gray-700 placeholder-gray-400 bg-white rounded-md shadow focus:outline-none focus:shadow-outline"
        :placeholder="placeholder"
        style="transition: all 0.15s ease 0s" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
defineEmits(['update:modelValue'])
defineProps({
    modelValue: {type: String, default: ""},
    placeholder: {type: String, default: ""},
    type: {type: String, default: ""},
    labelText: {type: String, default: ""}
})
</script>