import { createRouter, createWebHistory } from 'vue-router'

import index from '../components/HomePage/index.vue';
import Home from '../components/HomePage/content/Home/Home.vue';
import Post from '../components/HomePage/content/Post/Post.vue';
import PostDetail from '../components/HomePage/content/PostDetail.vue';
import PostByCategory from '../components/HomePage/content/PostByCategory.vue';

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
                path: 'posts/all',
                component: Post,
            },
            {
                path: 'posts/all/:id',
                component: PostDetail
            },
            {
                path: 'posts/:category',
                component: PostByCategory,
            },
            {
                path: 'posts/:category/:id',
                // component: PostDetailByCategory,
            },
            {
                path: 'blog',
                component: Blog,
            },
            {
                path: 'service',
                component: ManageCategory
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
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
})

export default router;
