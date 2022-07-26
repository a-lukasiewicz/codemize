<template>
  <div v-if="started" class="w-full px-4 py-8 text-black rounded md:px-16">
    <h1 class="-ml-4 text-3xl font-bold">Frontend Developer Path</h1>
    <p class="-mb-4 font-bold tracking-wider text-main-1">Keep going</p>
    <div class="flex items-center justify-around pt-8">
      <div class="flex items-center my-4">
        <progress
          class="w-48 lg:w-64 progress progress-success"
          :value="data?.currentPath?.doneOfTech"
          max="77"
        ></progress>
        <p class="mx-2 text-xl md:mx-8">
          {{ data?.currentPath?.doneOfTech }} / 77
        </p>
      </div>
      <router-link to="/frontend-path">
        <Button class="hidden text-white md:block bg-main-1"
          >Continue Learning ></Button
        >
      </router-link>
    </div>
    <router-link to="/frontend-path">
      <Button class="block my-4 text-white md:hidden bg-main-1"
        >Continue Learning ></Button
      >
    </router-link>
    <hr class="py-[2px] my-4 bg-white rounded" />
    <div class="grid gap-8 p-4 my-8 text-black bg-white rounded">
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-bold">Technology that you need to pracise:</h3>
      </div>
      <Technology
        v-if="data?.currentPath?.doneOfTech < 4"
        language="HTML"
        img="html.svg"
      />
      <Technology
        v-if="data?.currentPath?.doneOfTech === 4"
        language="CSS"
        img="css.svg"
      />
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-bold">Technology that you already know:</h3>
      </div>
      <Technology
        v-if="data?.currentPath?.doneOfTech === 4"
        language="HTML"
        img="html.svg"
      />
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-bold">Not started:</h3>
      </div>
      <Technology
        v-if="data?.currentPath?.doneOfTech < 4"
        language="CSS"
        img="css.svg"
      />
      <Technology language="JavaScript" img="js.svg" />
      <Technology language="React" img="react.svg" />
      <Technology language="TypeScript" img="typescript.svg" />
    </div>
  </div>
  <div v-else>
    <h1 class="-ml-4 text-3xl font-bold">Before you start...</h1>
    <p class="-mb-4 font-bold tracking-wider text-main-1">Read about IT</p>
    <div class="mt-8">
      <a
        href="#"
        class="flex w-full transition-all duration-300 transform scale-100 hover:scale-95"
      >
        <div
          class="block w-2/5 h-24 overflow-hidden rounded"
          style="
            background: url(https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)
              center;
            background-size: cover;
          "
        ></div>
        <div class="w-3/5 pl-3">
          <p class="text-xs font-semibold text-gray-500 uppercase">SPORTS</p>
          <h3 class="mb-3 font-semibold leading-tight text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h3>
          <div
            class="flex items-center w-full text-xs font-medium text-gray-500"
          >
            <div
              class="w-5 h-5 mr-3 rounded-full"
              style="
                background: url(https://randomuser.me/api/portraits/men/41.jpg)
                  center;
                background-size: cover;
              "
            ></div>
            <div>Jack Ryan</div>
          </div>
        </div>
      </a>
    </div>
    <hr class="my-3 border-gray-200" />
    <div>
      <a
        href="#"
        class="flex w-full transition-all duration-300 transform scale-100 hover:scale-95"
      >
        <div
          class="block w-2/5 h-24 overflow-hidden rounded"
          style="
            background: url(https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)
              center;
            background-size: cover;
          "
        ></div>
        <div class="w-3/5 pl-3">
          <p class="text-xs font-semibold text-gray-500 uppercase">ART</p>
          <h3 class="mb-3 font-semibold leading-tight text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h3>
          <div
            class="flex items-center w-full text-xs font-medium text-gray-500"
          >
            <div
              class="w-5 h-5 mr-3 rounded-full"
              style="
                background: url(https://randomuser.me/api/portraits/men/63.jpg)
                  center;
                background-size: cover;
              "
            ></div>
            <div>Kevin Jackson</div>
          </div>
        </div>
      </a>
    </div>
    <hr class="my-3 border-gray-200" />
    <div>
      <a
        href="#"
        class="flex w-full transition-all duration-300 transform scale-100 hover:scale-95"
      >
        <div
          class="block w-2/5 h-24 overflow-hidden rounded"
          style="
            background: url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)
              center;
            background-size: cover;
          "
        ></div>
        <div class="w-3/5 pl-3">
          <p class="text-xs font-semibold text-gray-500 uppercase">MUSIC</p>
          <h3 class="mb-3 font-semibold leading-tight text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h3>
          <div
            class="flex items-center w-full text-xs font-medium text-gray-500"
          >
            <div
              class="w-5 h-5 mr-3 rounded-full"
              style="
                background: url(https://randomuser.me/api/portraits/women/11.jpg)
                  center;
                background-size: cover;
              "
            ></div>
            <div>Rowena Wheeler</div>
          </div>
        </div>
      </a>
    </div>
    <hr class="my-3 border-gray-200" />
    <div>
      <a
        href="#"
        class="flex w-full transition-all duration-300 transform scale-100 hover:scale-95"
      >
        <div
          class="block w-2/5 h-24 overflow-hidden rounded"
          style="
            background: url(https://images.unsplash.com/photo-1511068797325-6083f0f872b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)
              center;
            background-size: cover;
          "
        ></div>
        <div class="w-3/5 pl-3">
          <p class="text-xs font-semibold text-gray-500 uppercase">WORLD</p>
          <h3 class="mb-3 font-semibold leading-tight text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h3>
          <div
            class="flex items-center w-full text-xs font-medium text-gray-500"
          >
            <div
              class="w-5 h-5 mr-3 rounded-full"
              style="
                background: url(https://randomuser.me/api/portraits/women/74.jpg)
                  center;
                background-size: cover;
              "
            ></div>
            <div>Gwen Thomson</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/atoms/Button.vue';
import Technology from './Technology.vue';
import { ref } from 'vue';
import { getUserCourseInfo } from '@/functions/course';
import { auth } from '@/main';
import { getUserData } from '@/functions/user';

let started = ref(false);
started.value = await getUserCourseInfo(auth?.currentUser?.uid as string);

const data = await getUserData(auth?.currentUser?.uid as string);
</script>
