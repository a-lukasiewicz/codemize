<template>
  <nav id="header" class="fixed top-0 z-30 w-full text-main-5 bg-main-2">
    <div
      class="container flex flex-wrap items-center w-full py-2 mx-auto mt-0 lg:justify-between"
    >
      <div class="block pr-4 lg:hidden">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="#fff"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="p-2 mt-3 text-black shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <router-link
                to="/login"
                class="inline-block px-4 py-2 font-bold no-underline hover:text-yellowMain"
                >Log in</router-link
              >
            </li>
            <li>
              <router-link
                class="inline-block px-4 py-2 font-bold no-underline hover:text-yellowMain"
                to="/pricing"
              >
                Pricing
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <router-link to="/" class="flex items-center pl-4">
        <Logo white />
      </router-link>

      <div
        id="nav-content"
        :class="{ visible: showMenu }"
        class="z-20 flex-grow hidden w-full p-4 mt-2 text-xl text-white bg-white lg:flex lg:items-center lg:w-auto lg:mt-0 lg:bg-transparent lg:p-0"
        @click="showMenu = !showMenu"
      >
        <ul class="items-center justify-end flex-1 list-reset lg:flex">
          <li v-if="isUserLogged" class="mr-3">
            <router-link
              to="/home"
              class="inline-block px-4 py-2 font-bold hover:text-yellowMain"
              >Your workspace</router-link
            >
          </li>
          <li class="mr-3">
            <router-link
              class="inline-block px-4 py-2 font-bold no-underline hover:text-yellowMain"
              to="/pricing"
            >
              Pricing
            </router-link>
          </li>
        </ul>
        <router-link
          v-if="!isUserLogged"
          id="navAction"
          to="/login"
          class="px-8 py-2 mx-auto font-bold text-white transition duration-300 ease-in-out transform shadow-lg bg-yellowMain p2-4 rounded-xl lg:mx-0 focus:outline-none focus:shadow-outline hover:scale-105"
          >Login</router-link
        >
        <router-link
          v-else
          id="navAction"
          to="/"
          class="px-8 py-2 mx-auto font-bold !text-white transition duration-300 ease-in-out transform shadow-lg bg-yellowMain p2-4 rounded-xl lg:mx-0 focus:outline-none focus:shadow-outline hover:scale-105"
          >Logout</router-link
        >
      </div>
    </div>
    <hr class="py-0 my-0 border-b border-gray-100 opacity-25" />
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Logo from '../atoms/Logo.vue';

const showMenu = ref(false);
const isUserLogged = ref(false);
</script>
