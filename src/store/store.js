import { createStore } from "vuex";
import usersModule from "./modules/user";

const store = createStore({
    modules: {
        users: usersModule,
    },
});

export default store;