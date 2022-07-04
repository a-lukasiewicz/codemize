import { createApp } from 'vue';
import { router } from './router';
import { store, key } from './store';
import App from './App.vue';
import './index.css';
import Flicking from '@egjs/vue3-flicking';
import '@egjs/vue3-flicking/dist/flicking.css';
import '@egjs/vue3-flicking/dist/flicking-inline.css';

const app = createApp(App);

app.use(store, key);
app.use(router);
app.component('Flicking', Flicking);

app.mount('#app');
