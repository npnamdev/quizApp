import axios from 'axios'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
    showSpinner: false,
    easing: 'ease',
    speed: 1300,
    trickle: true,
    trickleSpeed: 200,
    template: `
      <div class="bar" role="bar" style="background-color: #3498db;">
        <div class="peg"></div>
      </div>
    `
});

// Thiết lập baseURL
const instance = axios.create({
    baseURL: 'http://localhost:8080/',
})


instance.interceptors.request.use(function (config) {
    // NProgress.start();
    const token = sessionStorage.getItem('token');
    config.headers['Authorization'] = `Bearer ${token}`

    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    // NProgress.done();
    return response && response.data ? response.data : response;
}, function (error) {
    // NProgress.done();
    return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
});

export default instance;