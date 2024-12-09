import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js'; // Убедитесь, что путь к маршрутизатору верный

const app = createApp(App);

app.use(router);
app.mount('#app');
