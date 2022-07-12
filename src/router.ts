import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from './views/nonAuthorized/Home.vue';
import About from './views/nonAuthorized/About.vue';
import LoginPage from './views/nonAuthorized/LoginPage.vue';
import ForgotPasswordPage from './views/nonAuthorized/ForgotPasswordPage.vue';
import Signup from './views/nonAuthorized/Signup.vue';
import StartPanel from './views/authorized/StartPanel.vue';

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
