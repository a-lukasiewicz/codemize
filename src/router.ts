import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { auth } from '@/main';

import Home from './views/nonAuthorized/Home.vue';
import About from './views/nonAuthorized/About.vue';
import LoginPage from './views/nonAuthorized/LoginPage.vue';
import ForgotPasswordPage from './views/nonAuthorized/ForgotPasswordPage.vue';
import Signup from './views/nonAuthorized/Signup.vue';
import AuthHome from './views/Authorized/AuthHome.vue';
import AddNewCourse from './views/Authorized/AddNewCourse.vue'
import Paths from './views/Authorized/Paths.vue';
import NewCourses from './views/Authorized/NewCourses.vue';
import Share from './views/Authorized/Share.vue';
import Profile from './views/Authorized/Profile.vue';
import Main from './views/Authorized/FrontEnd/Main.vue';
import Tech_HTML5 from './views/Authorized/FrontEnd/Tech_HTML5.vue';
import InterviewQuestions from './views/Authorized/FrontEnd/InterviewQuestions.vue';
import Lesson from './views/Authorized/FrontEnd/Lesson.vue';
import AllFlashcards from './views/Authorized/FrontEnd/AllFlashcards.vue';
import Pricing from './views/nonAuthorized/Pricing.vue';

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
    name: 'pricing',
    path: '/pricing',
    component: Pricing,
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
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/add-course',
    component: AddNewCourse,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/your-paths',
    component: Paths,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/new-courses',
    component: NewCourses,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/our-team',
    component: Share,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/frontend-path',
    component: Main,
    meta: {
      authRequired: true,
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.addRoute({
  path: '/frontend-path/html5',
  component: Tech_HTML5,
  meta: {
    authRequired: true,
  },
});

router.addRoute({
  path: '/frontend-path/html5/interview-questions',
  component: InterviewQuestions,
  meta: {
    authRequired: true,
  },
});

router.addRoute({
  path: '/frontend-path/html5/basics',
  component: Lesson,
  meta: {
    authRequired: true,
  },
});

router.addRoute({
  path: '/frontend-path/html5/tables',
  component: Lesson,
  meta: {
    authRequired: true,
  },
});

router.addRoute({
  path: '/frontend-path/html5/forms',
  component: Lesson,
  meta: {
    authRequired: true,
  },
});

router.addRoute({
  path: '/frontend-path/html5/semantic-elements',
  component: Lesson,
  meta: {
    authRequired: true,
  },
});

router.addRoute({
  path: '/frontend-path/html5/all-flashcards',
  component: AllFlashcards,
  meta: {
    authRequired: true,
  },
});

function authUser(): Promise<boolean> {
  return new Promise((resolve) => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
    setTimeout(() => {
      resolve(false);
    }, 1500);
  });
}

router.beforeEach(async (to, _, next) => {
  if (to.matched.some((record) => record.meta.authRequired)) {
    const canAccess = await authUser();
    if (await canAccess) {
      next();
    } else {
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});
