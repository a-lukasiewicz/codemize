import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import LoginPage from './views/LoginPage.vue';
import ForgotPasswordPage from './views/ForgotPasswordPage.vue';
import Signup from './views/Signup.vue';
import StartPanel from './views/StartPanel.vue';

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
  {
    path: '/forgot-password',
    component: ForgotPasswordPage,
  },
  {
    path: '/sign-up',
    component: Signup,
  },
  {
    path: '/start-panel',
    component: StartPanel,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
