<template>
  <div>
    <div class="w-full px-3 mb-6 md:w-full">
      <button
        v-if="action === 'login'"
        class="block w-full px-3 py-3 font-bold leading-tight text-gray-100 bg-blue-600 border border-gray-200 rounded-lg appearance-none hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
        @click="login"
      >
        Sign in
      </button>
      <button
        v-else
        class="block w-full px-3 py-3 font-bold leading-tight text-gray-100 bg-blue-600 border border-gray-200 rounded-lg appearance-none hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
        @click="signup"
      >
        Create account
      </button>
    </div>
    <div class="pb-1 mx-auto mt-4 -mb-6 text-center">
      <span class="text-xs text-center text-gray-700">or sign up with</span>
    </div>
    <div class="flex items-center w-full mt-2">
      <div class="w-full px-3 pt-4 mx-2 border-t border-gray-400 md:w-1/3">
        <Button
          class="flex items-center justify-center w-full"
          @click="GoogleLogin"
        >
          <img src="@assets/auth-providers/google.svg" alt="Github" />
        </Button>
      </div>
      <div class="w-full px-3 pt-4 mx-2 md:w-1/3">
        <Button
          class="flex items-center justify-center w-full"
          @click="FacebookLogin"
        >
          <img src="@assets/auth-providers/facebook.svg" alt="Github" />
        </Button>
      </div>
      <div class="w-full px-3 pt-4 mx-2 border-t border-gray-400 md:w-1/3">
        <Button
          class="flex items-center justify-center w-full"
          @click="GithubLogin"
        >
          <img src="@assets/auth-providers/github.svg" alt="Github" />
        </Button>
      </div>
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
  GithubAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useRouter } from 'vue-router';
import Button from '@/components/atoms/Button.vue';
import { createToastFunction } from '@/helpers/createToast';
import { createUser, isUserExsist } from '@/functions/user';

const router = useRouter();
const auth = getAuth();

const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerGithub = new GithubAuthProvider();

providerGoogle.addScope('email');

const props = defineProps({
  action: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  fullName: { type: String, default: '' },
});

const login = (e: Event) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, props.email, props.password)
    .then(() => {
      router.push('/home');
    })
    .catch((error) => {
      createToastFunction(
        'Niepoprawne dane logowania',
        error.message,
        'danger'
      );
    });
};

const signup = (e: Event) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, props.email, props.password)
    .then(() => {
      createUser(props.email, props.fullName);
      router.push('/home');
      createToastFunction(
        'Account successfully created',
        'success',
        'Now you can verify your account'
      );
    })
    .catch((error) => {
      createToastFunction(error.message, 'danger');
    });
};

const FacebookLogin = () => {
  signInWithPopup(auth, providerFacebook)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(async (result: any) => {
      let found = await isUserExsist(auth?.currentUser?.uid as string);
      if (found === '') {
        createUser(
          auth?.currentUser?.uid as string,
          result.user.reloadUserInfo.providerUserInfo[0].email,
          result.user.photoURL,
          result.user.displayName
        );
        createToastFunction(
          'Account successfully created',
          'success',
          'Now you can verify your account'
        );
      }
      router.push('/home');
    })
    .catch((error) => {
      createToastFunction(
        'Błąd logowania poprzez Facebook-a',
        error.message,
        'danger'
      );
    });
};

const GoogleLogin = () => {
  signInWithPopup(auth, providerGoogle)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(async (result: any) => {
      let found = await isUserExsist(auth?.currentUser?.uid as string);

      if (found === '') {
        createUser(
          auth?.currentUser?.uid as string,
          result.user.reloadUserInfo.providerUserInfo[0].email,
          result.user.photoURL,
          result.user.displayName
        );
        createToastFunction(
          'Account successfully created',
          'success',
          'Now you can verify your account'
        );
      }
      router.push('/home');
    })
    .catch((error) => {
      createToastFunction(
        'Błąd logowania poprzez Google',
        error.message,
        'danger'
      );
    });
};

const GithubLogin = () => {
  signInWithPopup(auth, providerGithub)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(async (result: any) => {
      let found = await isUserExsist(auth?.currentUser?.uid as string);
      if (found === '') {
        createUser(
          auth?.currentUser?.uid as string,
          result.user.reloadUserInfo.providerUserInfo[0].email,
          result.user.photoURL,
          result.user.displayName
        );
        createToastFunction(
          'Account successfully created',
          'success',
          'Now you can verify your account'
        );
      }
      router.push('/home');
    })
    .catch((error) => {
      createToastFunction(
        'Błąd logowania poprzez Google',
        error.message,
        'danger'
      );
    });
};
</script>
