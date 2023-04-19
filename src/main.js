import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVueNext from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'boxicons';
import router from './routers/index';
import store from './store/store';
import 'vue3-toastify/dist/index.css';
import CKEditor from '@ckeditor/ckeditor5-vue';
import './assets/css/main.css';

const app = createApp(App);
app.use(CKEditor)
app.use(BootstrapVueNext);
app.use(router);
app.use(store)
app.mount('#app');