<template>
  <div>
    <Heading title="Sign in to your account" />
    <div class="flex justify-center mx-4 my-2 md:mx-0">
      <form class="w-full max-w-xl p-6 bg-white rounded-lg shadow-md">
        <div class="flex flex-wrap mb-6 -mx-3">
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
          <div class="flex items-center justify-between w-full px-3 mb-3">
            <router-link
              to="forgot-password"
              class="text-sm tracking-tight text-blue-500 hover:underline"
              >Forget your password?</router-link
            >
            <router-link
              to="/sign-up"
              class="text-sm tracking-tight text-blue-500 hover:underline"
              >Don't have an account?</router-link
            >
          </div>
          <Socials
            action="login"
            :email="email"
            :password="password"
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

const email = ref('');
const password = ref('');
</script>
