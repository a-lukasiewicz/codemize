import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from './views/nonAuthorized/Home.vue';
import About from './views/nonAuthorized/About.vue';
import LoginPage from './views/nonAuthorized/LoginPage.vue';
import ForgotPasswordPage from './views/nonAuthorized/ForgotPasswordPage.vue';
import Signup from './views/nonAuthorized/Signup.vue';
import AuthHome from './views/Authorized/AuthHome.vue';
import Paths from './views/Authorized/Paths.vue';
import NewCourses from './views/Authorized/NewCourses.vue';
import Share from './views/Authorized/Share.vue';
import Profile from './views/Authorized/Profile.vue';
import Main from './views/Authorized/FrontEnd/Main.vue';
import Tech_HTML5 from './views/Authorized/FrontEnd/Tech_HTML5.vue';
import InterviewQuestions from './views/Authorized/FrontEnd/InterviewQuestions.vue';

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
    path: '/home',
    component: AuthHome,
  },
  {
    path: '/your-paths',
    component: Paths,
  },
  {
    path: '/new-courses',
    component: NewCourses,
  },
  {
    path: '/our-team',
    component: Share,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/frontend-path',
    component: Main,
  },
  {
    path: '/html5',
    component: Tech_HTML5,
  },
  {
    path: '/interview-questions',
    component: InterviewQuestions,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
