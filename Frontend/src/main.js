import { createApp } from "vue";
import router from "./routes";
import "./assets/css/tailwind.css";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
