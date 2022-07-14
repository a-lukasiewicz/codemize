<template>
  <div class="relative text-black section">
    <div class="container px-4 mx-auto">
      <div class="flex flex-row flex-wrap justify-center -mx-4">
        <Creator name="Joe Antonio" role="Founder CEO" />
        <Creator name="Sarah Deava" role="Marketing" />
        <Creator name="Sarah Deava" role="Sales Manager" />
      </div>
      <h3 class="py-4 text-2xl font-bold">Frontend Path Creators</h3>
      <div class="flex flex-row flex-wrap justify-center -mx-4">
        <Creator name="Joe Antonio" role="Team Leader" />
        <Creator name="Sarah Deava" />
        <Creator name="Sarah Deava" />
        <Creator name="Sarah Deava" />
      </div>
      <h3 class="py-4 text-2xl font-bold">Backend Path Creators</h3>
      <div class="flex flex-row flex-wrap justify-center -mx-4">
        <Creator name="Joe Antonio" role="Team Leader" />
        <Creator name="Sarah Deava" />
        <Creator name="Sarah Deava" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Creator from './Creator.vue';
</script>
