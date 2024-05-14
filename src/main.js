import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { installPinia } from "../pinia.ts";
import Antd from "ant-design-vue";

const app = createApp(App);
app.use(router);
app.use(Antd);
installPinia(app);

app.mount("#app");
