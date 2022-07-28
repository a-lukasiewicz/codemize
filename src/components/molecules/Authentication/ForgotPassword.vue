<template>
  <div id="forgotPassword">
    <Heading title="Forgot password" subTitle="Send email to create a new" />
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
            <button
              class="block w-full px-3 py-3 font-bold leading-tight text-gray-100 bg-blue-600 border border-gray-200 rounded-lg appearance-none hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
              @click="forgotPassword"
            >
              Send email
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '@/components/atoms/Heading.vue';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { ref } from 'vue';
import { createToastFunction } from '@/helpers/createToast';
import { onMounted } from 'vue';
import { slideDownOpacity } from '@/helpers/animations';

const email = ref('');
const auth = getAuth();

onMounted(() => {
  slideDownOpacity('#forgotPassword');
});

const forgotPassword = (e: Event) => {
  e.preventDefault();
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      createToastFunction('Email has been sent', 'success');
    })
    .catch((error) => {
      createToastFunction(error.message, 'danger');
    });
};
</script>
