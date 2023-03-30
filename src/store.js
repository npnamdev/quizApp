import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
    state() {
        return {
            users: [],
            limit: 5,
            page: 1,
        }
    },
    actions: {
        async getAllUsers({ commit, state }) {
            try {
                const res = await axios.get(`http://localhost:8080/v1/api/users?limit=${state.limit}&page=${state.page}`);
                if (res.data.EC === 0) {
                    commit('setUsers', res.data.DT);
                }
            } catch (error) {
                console.error(error);
            }
        },

        async deleteUser({ commit, dispatch, state }, userId) {
            try {
                const res = await axios.delete(`http://localhost:8080/v1/api/users/${userId}`);
                if (res.data.EC === 0) {
                    let updatedUsers = state.users.filter(user => user.id !== userId);
                    commit('setUsers', updatedUsers);
                    dispatch('getAllUsers');
                }
            } catch (error) {
                console.error(error);
            }
        },

        async addUser({ commit, dispatch, state }, user) {
            console.log(user);
            try {
                const formData = new FormData();
                formData.append("username", user.username);
                formData.append("email", user.email);
                formData.append("password", user.password);
                formData.append("phone", user.phone);
                formData.append("address", user.address);
                formData.append("avatar", user.avatar);
                formData.append("role", user.role);

                const res = await axios.post(`http://localhost:8080/v1/api/users`, formData);
                if (res.data.EC === 0) {
                    let updatedUsers = [...state.users, res.data.DT];
                    commit('setUsers', updatedUsers);
                    dispatch('getAllUsers');
                }
            } catch (error) {
                console.log(error);
            }
        },

    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
    },
    getters: {
    },
})


export default store;