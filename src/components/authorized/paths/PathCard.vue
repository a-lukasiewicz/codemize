<template>
  <div
    id="pathCard"
    ref="pathCard"
    :class="{ 'opacity-50': disabled }"
    class="relative w-full min-w-0 mx-auto mb-6 break-words bg-white shadow-lg xl:max-w-2xl rounded-xl"
  >
    <div class="card">
      <div class="card-header">
      <img
            class="w-auto"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="tailwind-card-image"
          />
      </div>
      <div class="card-body">
        <h4 class="font-semibold">{{ pathName }}</h4>
        <p class="mb-4 opcacity-60">{{ pathDescription }}</p>
        <div class="flex justify-end">
          <router-link to="/frontend-path">
            <Button
              v-if="pathName !== 'Frontend Developer'"
              :disabled="disabled"
              class="text-right text-white bg-main-1"
              @click="addPathToUser(auth?.currentUser?.uid as string)"
              >Not available yet</Button
            >
            <Button
              v-else
              :disabled="disabled"
              class="text-right text-white bg-main-1"
              >{{ buttonText }}</Button
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';
import { getUserCourseInfo } from '@/functions/course';
import { addPathToUser } from '@/functions/user';
import { slideFromSideOpacity } from '@/helpers/animations';
import { auth } from '@/main';
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';

defineProps({
  pathName: { type: String, default: '' },
  pathDescription: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
});

let started = ref(false);
started.value = await getUserCourseInfo(auth?.currentUser?.uid as string);

const buttonText = started.value ? 'Join path' : 'Continue learning';

const pathCard = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(pathCard, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    slideFromSideOpacity('#pathCard', 'right');
  }
  targetIsVisible.value = isIntersecting;
});
</script>
