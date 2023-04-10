import { createStore } from "vuex";
import usersModule from "./modules/user";
import categorysModule from "./modules/category";
import postsModule from "./modules/post";

const store = createStore({
    modules: {
        users: usersModule,
        categorys: categorysModule,
        posts: postsModule
    },
});

export default store;