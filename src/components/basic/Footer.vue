<template>
  <footer class="bg-main-5">
    <div class="container px-8 mx-auto">
      <div class="flex flex-col w-full py-6 md:flex-row">
        <div class="flex-1 mb-6 text-black">
          <Logo />
          <p class="pt-4 italic">"We can achieve much more together than you think it's possible"</p>
        </div>
        <div class="flex flex-row justify-between px-8 text-center">
          <div class="lg:mx-24 lg:w-1/2">
            <p class="text-gray-500 uppercase md:mb-6">Social</p>
          <ul class="mb-6 list-reset">
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a href="#" class="text-gray-800 no-underline hover:underline hover:text-main-1">Facebook</a>
            </li>
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a href="#" class="text-gray-800 no-underline hover:underline hover:text-main-1">Blog</a>
            </li>
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a href="#" class="text-gray-800 no-underline hover:underline hover:text-main-1">Linkedin</a>
            </li>
          </ul>
        </div>
        <div class="lg:flex-1">
          <p class="text-gray-500 uppercase md:mb-6">Company</p>
          <ul class="mb-6 list-reset">
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a href="#" class="text-gray-800 no-underline hover:underline hover:text-main-1">Support</a>
            </li>
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a href="#" class="text-gray-800 no-underline hover:underline hover:text-main-1">Contact</a>
            </li>
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a href="#" class="text-gray-800 no-underline hover:underline hover:text-main-1">Terms</a>
            </li>
            <li class="inline-block mt-2 mr-2 md:block md:mr-0">
              <a href="#" class="text-gray-800 no-underline hover:underline hover:text-main-1">About Us</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import Logo from "../atoms/Logo.vue"
</script>