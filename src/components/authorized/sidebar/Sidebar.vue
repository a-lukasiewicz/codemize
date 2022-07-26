<template>
  <div
    class="lg:hidden top-0 text-center justify-center lg:left-0 fixed z-10 flex flex-row lg:flex-col w-screen lg:w-[17vw] px-10 items-center h-[8vh] lg:min-h-screen text-white bg-main-1"
  >
    <router-link to="/home">
      <Logo white />
    </router-link>
  </div>
  <div
    class="bottom-0 lg:left-0 fixed z-10 flex flex-row lg:flex-col w-screen lg:w-[17vw] px-10 items-center h-[8vh] lg:min-h-screen text-white bg-main-1"
  >
    <div class="hidden pt-12 ml-2 lg:block lg:ml-5">
      <router-link to="/home">
        <Logo white />
      </router-link>
    </div>
    <div v-if="loggedIn" class="w-full py-12">
      <div class="flex flex-row justify-between w-full lg:flex-col">
        <SidebarLink route="/home" iconURL="home.svg" linkTitle="Home" />
        <SidebarLink
          route="/your-paths"
          iconURL="chart-histogram.svg"
          linkTitle="Your paths"
        />
        <!-- <SidebarLink
          route="/new-courses"
          iconURL="alarm-clock.svg"
          linkTitle="New courses"
        /> -->
        <SidebarLink
          route="/our-team"
          iconURL="share.svg"
          linkTitle="Our team"
        />
        <SidebarLink
          route="/profile"
          iconURL="settings-sliders.svg"
          linkTitle="Your profile"
        />
        <SidebarLink
          route="/"
          iconURL="signout.svg"
          linkTitle="Log out"
          @click="logout"
        />
      </div>
      <hr class="hidden my-4 lg:block lg:my-8" />
    </div>
    <div v-if="!loggedIn" class="flex items-center justify-center flex-1 mx-4">
      <h3 class="text-2xl text-center">{{ notLoggedInText }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/atoms/Logo.vue';
import { createToastFunction } from '@/helpers/createToast';
import { getAuth, signOut } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SidebarLink from './SidebarLink.vue';

defineProps({
  loggedIn: { type: Boolean, default: false },
  notLoggedInText: { type: String, default: 'Dołącz do naszej społeczności!' },
});

const router = useRouter();
const auth = getAuth();
const isUserLogged = ref(auth.currentUser ? true : false);

const logout = () => {
  signOut(auth)
    .then(() => {
      isUserLogged.value = false;
      router.push('/');
      createToastFunction('Log out successfully', 'success');
    })
    .catch((error) => {
      createToastFunction(error, 'danger');
    });
};
</script>
