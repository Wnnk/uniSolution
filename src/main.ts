import { createSSRApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
// 引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
   // 注册持久化插件
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia);
  return {
    app,
  };
}
