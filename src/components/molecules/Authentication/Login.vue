<template>
  <div>
    <Heading
      title="Sign in to your account"
      subTitle="Or register a new account"
    />
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
              class="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none"
              type="password"
              required
            />
          </div>
          <div class="flex items-center justify-between w-full px-3 mb-3">
            <a href="#" class="text-sm tracking-tight text-blue-500"
              >Forget your password?</a
            >
          </div>
          <div class="w-full px-3 mb-6 md:w-full">
            <button
              class="block w-full px-3 py-3 font-bold leading-tight text-gray-100 bg-blue-600 border border-gray-200 rounded-lg appearance-none hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
              @click="login"
            >
              Sign in
            </button>
          </div>
          <div class="pb-1 mx-auto mt-4 -mb-6">
            <span class="text-xs text-center text-gray-700"
              >or sign up with</span
            >
          </div>
          <div class="flex items-center w-full mt-2">
            <div
              class="w-full px-3 pt-4 mx-2 border-t border-gray-400 md:w-1/3"
            >
              <Button class="flex items-center justify-center w-full" @click="GoogleLogin">
                <img src="@assets/auth-providers/google.svg" alt="Github" />
              </Button>
            </div>
            <div class="w-full px-3 pt-4 mx-2 md:w-1/3">
              <Button class="flex items-center justify-center w-full" @click="FacebookLogin">
                <img src="@assets/auth-providers/facebook.svg" alt="Github" />
              </Button>
            </div>
            <div
              class="w-full px-3 pt-4 mx-2 border-t border-gray-400 md:w-1/3"
            >
              <Button class="flex items-center justify-center w-full">
                <img src="@assets/auth-providers/github.svg" alt="Github" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/components/atoms/Button.vue';
import Heading from '@/components/atoms/Heading.vue';
import { createToastFunction } from "@/helpers/createToast";

const providerGoogle = new GoogleAuthProvider();

const email = ref('');
const password = ref('');
const router = useRouter();
const auth = getAuth();

const providerFacebook = new FacebookAuthProvider();

const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      router.push('/kluby');
    })
    .catch((error) => {
      const errorMessage = error.message;
      createToastFunction('Niepoprawne dane logowania', errorMessage, 'danger');
    });
};

const FacebookLogin = () => {
  signInWithPopup(auth, providerFacebook)
    .then((result) => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      router.push('/kluby');
    })
    .catch((error) => {
      const errorMessage = error.message;
      createToastFunction(
        'Błąd logowania poprzez Facebook-a',
        errorMessage,
        'danger'
      );
    });
};

const GoogleLogin = () => {
  signInWithPopup(auth, providerGoogle)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      router.push('/kluby');
    })
    .catch((error) => {
      const errorMessage = error.message;

      createToastFunction(
        'Błąd logowania poprzez Google',
        errorMessage,
        'danger'
      );
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
</script>
