import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import bootstrap from './mixins/bootstrap';
import { createStore } from './store';

import '@/styles/main.scss';

const store = createStore();
const app = createApp(App).use(bootstrap).use(store).use(router);

app.mount('#app');
