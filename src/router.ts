import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import LoginPage from './views/LoginPage.vue';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/login',
    component: LoginPage,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
