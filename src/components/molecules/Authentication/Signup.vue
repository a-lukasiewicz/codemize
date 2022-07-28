<template>
  <div id="signup">
    <Heading title="Register new account" />
    <div class="flex justify-center mx-4 my-2 md:mx-0">
      <form class="w-full max-w-xl p-6 bg-white rounded-lg shadow-md">
        <div class="flex flex-wrap mb-6 -mx-3">
          <div class="w-full px-3 mb-6 md:w-full">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              >Full Name</label
            >
            <input
              v-model="fullName"
              class="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none"
            />
          </div>
          <div class="w-full px-3 mb-6 md:w-full">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="Password"
              >Email address</label
            >
            <input
              v-model="email"
              class="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none"
              type="email"
              required
            />
          </div>
          <div class="w-full px-3 mb-6 md:w-full">
            <label
              class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
              for="Password"
              >Password</label
            >

            <input
              v-model="password"
              class="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none"
              type="password"
              required
            />
          </div>
          <Socials
            action="signup"
            :email="email"
            :password="password"
            :fullName="fullName"
            class="w-full"
          />
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import Heading from '@/components/atoms/Heading.vue';
import { ref } from 'vue';
import Socials from './Socials.vue';
import { onMounted } from 'vue';
import { slideDownOpacity } from '@/helpers/animations';

const email = ref('');
const password = ref('');
const fullName = ref('');

onMounted(() => {
  slideDownOpacity('#signup');
});
</script>
