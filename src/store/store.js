import { createStore } from "vuex";
import usersModule from "./modules/user";
import categorysModule from "./modules/category";

const store = createStore({
    modules: {
        users: usersModule,
        categorys: categorysModule
    },
});

export default store;