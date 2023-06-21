import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import { ProjectAuth } from "./firebase/config";

let app;

ProjectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount("#app");
  }
});
