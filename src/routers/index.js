import { createRouter, createWebHistory } from 'vue-router'

import index from '../components/HomePage/index.vue';
import Home from '../components/HomePage/content/Home/Home.vue';
import About from '../components/HomePage/content/About.vue';
import Blog from '../components/HomePage/content/Blog.vue';
import Contact from '../components/HomePage/content/Contact.vue';


import AdminPage from '../components/AdminPage/Admin.vue';
import Dashboard from '../components/AdminPage/Content/Dashboard/Dashboard.vue'
import ManagePost from '../components/AdminPage/Content/Post/ManagePost.vue'
import ManageCategory from '../components/AdminPage/Content/Category/ManageCategory.vue'
import ManageUser from '../components/AdminPage/Content/User/ManageUser.vue'
import Login from '../components/AdminPage/Content/Auth/Login.vue'


const routes = [
    {
        path: '/',
        component: index,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'about',
                component: About
            },
            {
                path: 'service',
                component: ManageCategory
            },
            {
                path: 'blog',
                component: Blog,
            },
            {
                path: 'contact',
                component: Contact,
            },
        ],
    },
    {
        path: '/admin',
        component: AdminPage,
        //Hàm này chạy trước khi vào router
        beforeEnter: (to, from, next) => {
            const token = sessionStorage.getItem('token')
            if (!token) {
                next('/login')
            } else {
                next()
            }
        },
        children: [
            {
                path: '',
                component: Dashboard
            },
            {
                path: 'post',
                component: ManagePost
            },
            {
                path: 'category',
                component: ManageCategory
            },
            {
                path: 'user',
                component: ManageUser,
            },
        ],
    },
    {
        path: '/login',
        component: Login,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;