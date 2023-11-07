import { createApp } from 'vue';
import router from './routes';
import './assets/css/tailwind.css';
import VWave from 'v-wave';
import VueAnimXYZ from '@animxyz/vue3';
import '@animxyz/core';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(VWave);
app.use(VueAnimXYZ);

app.mount('#app');
