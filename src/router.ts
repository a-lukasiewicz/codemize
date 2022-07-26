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
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.addRoute({ path: '/frontend-path/html5', component: Tech_HTML5 });
router.addRoute({
  path: '/frontend-path/html5/interview-questions',
  component: InterviewQuestions,
});
router.addRoute({ path: '/frontend-path/html5/basics', component: Lesson });
router.addRoute({ path: '/frontend-path/html5/tables', component: Lesson });
router.addRoute({ path: '/frontend-path/html5/forms', component: Lesson });
router.addRoute({
  path: '/frontend-path/html5/semantic-elements',
  component: Lesson,
});
router.addRoute({
  path: '/frontend-path/html5/all-flashcards',
  component: AllFlashcards,
});
