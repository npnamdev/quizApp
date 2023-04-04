import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../components/HomePage/Home.vue';
import AdminPage from '../components/AdminPage/Admin.vue';
import Dashboard from '../components/AdminPage/Content/Dashboard/Dashboard.vue'
import ManagePost from '../components/AdminPage/Content/Post/ManagePost.vue'
import ManageCategory from '../components/AdminPage/Content/Category/ManageCategory.vue'
import ManageUser from '../components/AdminPage/Content/User/ManageUser.vue'

const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/admin',
        component: AdminPage,
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
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;