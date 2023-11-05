import { createApp } from "vue";
import router from "./routes";
import "./assets/css/tailwind.css";
import VWave from "v-wave";
import App from "./App.vue";

createApp(App).use(router).use(VWave).mount("#app");
