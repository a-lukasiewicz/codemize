<template>
  <div id="profile" ref="profile" class="relative mb-6">
    <div class="flex items-center md:px-2">
      <div>
        <div class="flex flex-wrap justify-center">
          <div class="flex justify-center w-full">
            <div class="relative">
              <img
                v-if="data?.photoURL"
                :src="data?.photoURL"
                class="shadow-xl rounded-full w-[150px]"
                alt="User Avatar"
              />
              <img
                v-else
                class="shadow-xl rounded-full w-[150px]"
                src="@assets/defaultAvatar.png"
                alt="User Avatar"
              />
            </div>
          </div>
        </div>
        <div class="mt-6 text-center">
          <h3 class="mb-1 text-2xl font-bold leading-normal text-slate-700">
            {{ data?.fullName ?? 'Full name' }}
          </h3>
          <div class="mt-0 mb-2 text-xs font-bold uppercase text-slate-400">
            Frontend Path
          </div>
        </div>
      </div>
      <div class="py-6 mt-6 text-center border-t md:ml-8 border-slate-200">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4">
            <p class="mb-4 leading-relaxed text-slate-600">
              FRONTEND PATH DESCRIPTION
            </p>
            <div class="grid grid-cols-3 gap-4">
              <ProfileBoxCard
                :textInfo="data?.selectedPlan"
                text="Selected Plan"
              />
              <ProfileBoxCard
                class="col-span-2"
                :textInfo="data?.email"
                text="Email"
              />
              <ProfileBoxCard
                class="col-span-3"
                :textInfo="data?.createdAt.toDate().toLocaleDateString()"
                text="Account created"
              />
              <ProfileBoxCard :value="0" text="Paths Completed" />
              <ProfileBoxCard
                :value="data?.currentPath?.doneOfTech"
                text="Lessons Completed"
              />
              <ProfileBoxCard
                :value="data?.currentPath?.doneOfTech * 4"
                text="Flashcards unlocked"
              />
            </div>
            <Button
              class="my-8 text-white bg-red-500"
              @click="deleteUser(auth.currentUser?.uid as string)"
              >Delete Account</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';
import { deleteUser, getUserData } from '@/functions/user';
import { slideDownOpacity } from '@/helpers/animations';
import { auth } from '@/main';
import { useIntersectionObserver } from '@vueuse/core';
import { ref } from 'vue';
import ProfileBoxCard from './ProfileBoxCard.vue';
const data = await getUserData(auth.currentUser?.uid as string);

const profile = ref(null);
const targetIsVisible = ref(false);

useIntersectionObserver(profile, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    slideDownOpacity('#profile', [0.5, 1.5], '-100%');
  }
  targetIsVisible.value = isIntersecting;
});
</script>
