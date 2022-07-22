<template>
  <div class="relative flex w-full mb-6">
    <div class="flex flex-col items-center md:px-6">
      <div>
        <div class="flex flex-wrap justify-center">
          <div class="flex justify-center w-full">
            <div class="relative">
              <img
                src="@assets/defaultAvatar.png"
                class="shadow-xl rounded-full max-w-[150px]"
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
              An artist of considerable range, Mike is the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
              records all of his own music, giving it a warm.
            </p>
            <div class="grid grid-cols-3 gap-4">
              <ProfileBoxCard textInfo="Basic" text="Selected Plan" />
              <ProfileBoxCard
                class="col-span-2"
                :value="data?.email"
                text="Email"
              />
              <ProfileBoxCard
                class="col-span-3"
                :value="data?.createdAt.toDate().toLocaleDateString()"
                text="Account created"
              />
              <ProfileBoxCard :value="0" text="Paths Completed" />
              <ProfileBoxCard :value="12" text="Lessons Completed" />
              <ProfileBoxCard :value="12" text="Flashcards unlocked" />
            </div>
            <Button class="my-8 text-white bg-red-500">Delete Account</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';
import { getUserData } from '@/functions/user';
import { auth } from '@/main';
import ProfileBoxCard from './ProfileBoxCard.vue';

const data = await getUserData(auth.currentUser?.uid as string);
console.log(data?.createdAt.toDate().toLocaleDateString());
</script>
