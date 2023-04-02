import axios from 'axios'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
    showSpinner: false,
    easing: 'ease',
    speed: 1000,
    trickle: true,
    trickleSpeed: 100,
    template: `
      <div class="bar" role="bar" style="background-color: #333;">
        <div class="peg"></div>
      </div>
    `
});

// Thiết lập baseURL
const instance = axios.create({
    baseURL: 'http://localhost:8080/',
})

instance.interceptors.request.use(function (config) {
    NProgress.start();
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    NProgress.done();
    return response && response.data ? response.data : response;
}, function (error) {
    NProgress.done();
    return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
});

export default instance;