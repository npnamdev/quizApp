import axios from "../../config/axiosConfig";
import { toast } from "vue3-toastify";

export default {
    state() {
        return {
            posts: [],
            limit: 5,
            page: 1,
            // search: "",
            // filter: "",
            totalPost: 0,
            totalPage: 0,
            // isSearching: false,
            // token: null,
            // profileData: null,
        }
    },
    actions: {
        // async addUser({ commit, dispatch, state }, { user, handleClone }) {
        //     try {
        //         const formData = new FormData();
        //         formData.append("username", user.username);
        //         formData.append("email", user.email);
        //         formData.append("password", user.password);
        //         formData.append("phone", user.phone);
        //         formData.append("address", user.address);
        //         formData.append("avatar", user.avatar);
        //         formData.append("role", user.role || "user");
        //         const res = await axios.post(`v1/api/users`, formData);

        //         if (res.EC === 0) {
        //             let updatedUsers = [...state.users, res.DT];
        //             commit('setUsers', updatedUsers);
        //             toast.success(res.EM, {
        //                 autoClose: 3000,
        //                 position: toast.POSITION.BOTTOM_RIGHT,
        //             });
        //             handleClone();
        //             state.page = 1;
        //             dispatch('getAllUsers');
        //         } else {
        //             toast.error(res.EM, {
        //                 autoClose: 3000,
        //                 position: toast.POSITION.BOTTOM_RIGHT,
        //             });
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },



        async getAllPosts({ commit, state }) {
            try {
                const res = await axios.get(`v1/api/posts?limit=${state.limit}&page=${state.page}`);
                console.log(res.DT);
                if (res.EC === 0) {
                    commit('setPosts', res.DT);
                    state.totalPost = res.totalPost;
                    state.totalPage = res.totalPage;
                }
            } catch (error) {
                console.error(error);
            }
        },



        // async updateUser({ commit, dispatch, state }, { user, handleClone }) {
        //     try {
        //         const formData = new FormData();
        //         formData.append("username", user.username);
        //         formData.append("password", user.password);
        //         formData.append("phone", user.phone);
        //         formData.append("address", user.address);
        //         formData.append("avatar", user.avatar);
        //         formData.append("role", user.role);

        //         const res = await axios.put(`v1/api/users/${user.id}`, formData);
        //         if (res.EC === 0) {
        //             const updatedUsers = state.users.map((item) => {
        //                 if (item.id === user.id) {
        //                     return res.DT;
        //                 }
        //                 return item;
        //             });
        //             commit("setUsers", updatedUsers);
        //             toast.success(res.EM, {
        //                 autoClose: 3000,
        //                 position: toast.POSITION.BOTTOM_RIGHT,
        //             });
        //             handleClone();
        //             state.page = 1;
        //             dispatch("getAllUsers");
        //         } else {
        //             toast.error(res.EM, {
        //                 autoClose: 3000,
        //                 position: toast.POSITION.BOTTOM_RIGHT,
        //             });
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
        // },



        // async deleteUser({ commit, dispatch, state }, userId) {
        //     try {
        //         const res = await axios.delete(`v1/api/users/${userId}`);
        //         if (res.EC === 0) {
        //             let updatedUsers = state.users.filter(user => user.id !== userId);
        //             commit('setUsers', updatedUsers);
        //             toast.success(res.EM, {
        //                 autoClose: 3000,
        //                 position: toast.POSITION.BOTTOM_RIGHT,
        //             });
        //             state.page = 1;
        //             dispatch('getAllUsers');
        //         } else {
        //             toast.error(res.EM, {
        //                 autoClose: 3000,
        //                 position: toast.POSITION.BOTTOM_RIGHT,
        //             });
        //         }
        //     } catch (error) {
        //         console.error(error);
        //     }
        // },

    },
    mutations: {
        setPosts(state, newPosts) {
            state.posts = newPosts;
        },
        // setPage(state, newPage) {
        //     state.page = newPage;
        // },
        // setSearch(state, newSearch) {
        //     state.search = newSearch;
        // },
        // setFilter(state, newFilter) {
        //     state.filter = newFilter;
        // },
        // setLimit(state, newLimit) {
        //     state.limit = newLimit;
        // },

    },
    getters: {
    },
};
