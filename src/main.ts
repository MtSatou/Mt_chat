import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";
import 'cropperjs/dist/cropper.css';
import "@/assets/scss/index.scss";
import "@/assets/scss/ant-mixin.scss";

import Avatar from "@/components/avatar/index.vue";

const app = createApp(App);
const store = createPinia();
app.use(store);
app.use(Antd);
app.component("Avatar", Avatar)

app.mount("#app");
