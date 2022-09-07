import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { appAxios } from './utils/appAxios';
import store from './store';

import "@/assets/style.css";



const app = createApp(App);
app.use(store);
app.use(router);
app.config.globalProperties.$appAxios= appAxios;
app.mount('#app');
