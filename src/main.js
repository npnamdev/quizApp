import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css';
import BootstrapVueNext from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'boxicons';
import router from './routers/index';
import store from './store';

const app = createApp(App);
app.use(BootstrapVueNext);
app.use(router);
app.use(store)
app.mount('#app');