<template>
  <Sidebar :loggedIn="true" />
  <Transition name="fade" mode="out-in">
    <div>
      <div class="lg:ml-[18vw] p-6 mb-36">
        <div class="container p-2 mx-auto lg:p-6 pt-36 lg:pt-0">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Sidebar from '@components/authorized/sidebar/Sidebar.vue';
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
