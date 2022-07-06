import { createApp } from 'vue';
import { router } from './router';
import { store, key } from './store';
import App from './App.vue';
import './index.css';
import Flicking from '@egjs/vue3-flicking';
import '@egjs/vue3-flicking/dist/flicking.css';
import '@egjs/vue3-flicking/dist/flicking-inline.css';
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const app = createApp(App);
const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_UNIT,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
} as FirebaseOptions);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

app.use(store, key);
app.use(router);
app.component('Flicking', Flicking);

app.mount('#app');
