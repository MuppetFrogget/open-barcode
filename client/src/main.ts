import { createApp } from "vue";
import { Quasar } from "quasar";

import { createPinia } from "pinia";

// Assumes your root component is App.vue
// and placed in same folder as main.ts
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Assumes you have a <div id="app"></div> in your index.html
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

app.mount("#app");
