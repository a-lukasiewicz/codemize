<template>
  <div class="overflow-x-auto">
    <table class="z-0 table w-full">
      <thead>
        <tr>
          <th class="z-0">Index</th>
          <th>Tag</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody v-for="(el, idx) in (data as any)" :key="idx">
        <tr v-for="(value, key) in (el as any)" :key="value">
          <td>{{ idx }}</td>
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
defineProps({
  data: {
    required: true,
    type: Array,
  },
});
</script>
