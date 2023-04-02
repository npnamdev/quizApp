import axios from "../../config/axiosConfig";
import { toast } from "vue3-toastify";

export default {
    state() {
        return {
            users: [],
            limit: 5,
            page: 1,
            totalUsers: 0,
            isSearching: false,
        }
    },
    actions: {
        async addUser({ commit, dispatch, state }, { user, handleClone }) {
            try {
                const formData = new FormData();
                formData.append("username", user.username);
                formData.append("email", user.email);
                formData.append("password", user.password);
                formData.append("phone", user.phone);
                formData.append("address", user.address);
                formData.append("avatar", user.avatar);
                formData.append("role", user.role || "user");

                const res = await axios.post(`v1/api/users`, formData);
                if (res.EC === 0) {
                    let updatedUsers = [...state.users, res.DT];
                    commit('setUsers', updatedUsers);
                    toast.success(res.EM, {
                        autoClose: 3000,
                    });
                    handleClone();
                    state.page = 1;
                    dispatch('getAllUsers');
                } else {
                    toast.error(res.EM, {
                        autoClose: 3000,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },



        async getAllUsers({ commit, state }) {
            try {
                const res = await axios.get(`v1/api/users?limit=${state.limit}&page=${state.page}`);
                if (res.EC === 0) {
                    commit('setUsers', res.DT);
                    state.totalUsers = res.totalUsers;
                }
            } catch (error) {
                console.error(error);
            }
        },



        async updateUser({ commit, dispatch, state }, { user, handleClone }) {
            try {
                const formData = new FormData();
                formData.append("username", user.username);
                formData.append("password", user.password);
                formData.append("phone", user.phone);
                formData.append("address", user.address);
                formData.append("avatar", user.avatar);
                formData.append("role", user.role);

                const res = await axios.put(`v1/api/users/${user.id}`, formData);
                if (res.EC === 0) {
                    const updatedUsers = state.users.map((item) => {
                        if (item.id === user.id) {
                            return res.DT;
                        }
                        return item;
                    });
                    commit("setUsers", updatedUsers);
                    toast.success(res.EM, {
                        autoClose: 3000,
                    });
                    handleClone();
                    state.page = 1;
                    dispatch("getAllUsers");
                } else {
                    toast.error(res.EM, {
                        autoClose: 3000,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },



        async deleteUser({ commit, dispatch, state }, userId) {
            try {
                const res = await axios.delete(`v1/api/users/${userId}`);
                if (res.EC === 0) {
                    let updatedUsers = state.users.filter(user => user.id !== userId);
                    commit('setUsers', updatedUsers);
                    toast.success(res.EM, {
                        autoClose: 3000,
                    });
                    state.page = 1;
                    dispatch('getAllUsers');
                }
            } catch (error) {
                console.error(error);
            }
        },


        async searchUser({ commit, dispatch, state }, keyword) {
            try {
                const res = await axios.post(`v1/api/users/search/?keyword=${keyword}&limit=${state.limit}&page=${state.page}`);
                if (res.EC === 0) {
                    commit('setUsers', res.DT);
                    state.totalUsers = res.totalUsers;
                    // state.page = 1;
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setPage(state, newPage) {
            state.page = newPage;
        },
    },
    getters: {
    },
};
