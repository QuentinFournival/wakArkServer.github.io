import { createPinia } from 'pinia';
import { App } from 'vue';

const pinia = createPinia();
export function installPinia(app: App) {
  app.use(pinia);
}

export { pinia }