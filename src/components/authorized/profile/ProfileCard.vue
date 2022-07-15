<template>
  <div
    class="relative w-full max-w-md min-w-0 mx-auto mt-16 mb-6 break-words md:max-w-2xl"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="flex justify-center w-full">
          <div class="relative">
            <img
              src="@assets/defaultAvatar.png"
              class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
              alt="User Avatar"
            />
          </div>
        </div>
      </div>
      <div class="text-center mt-28">
        <h3 class="mb-1 text-2xl font-bold leading-normal text-slate-700">
          Mike Thompson
        </h3>
        <div class="mt-0 mb-2 text-xs font-bold uppercase text-slate-400">
          <i class="mr-2 opacity-75 fas fa-map-marker-alt text-slate-400"></i
          >Frontend Path
        </div>
      </div>
      <div class="py-6 mt-6 text-center border-t border-slate-200">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4">
            <p class="mb-4 leading-relaxed text-slate-600">
              An artist of considerable range, Mike is the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
              records all of his own music, giving it a warm.
            </p>
            <div class="grid grid-cols-3 gap-4">
              <ProfileBoxCard :value="12" text="Paths completed" />
              <ProfileBoxCard
                class="col-span-2"
                :value="33"
                text="Paths completed"
              />
              <ProfileBoxCard
                class="col-span-3"
                :value="12.06"
                text="Account created"
              />
              <ProfileBoxCard :value="12" text="Courses passed" />
              <ProfileBoxCard :value="12" text="Courses passed" />
              <ProfileBoxCard :value="12" text="Courses passed" />
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
import ProfileBoxCard from './ProfileBoxCard.vue';
</script>
