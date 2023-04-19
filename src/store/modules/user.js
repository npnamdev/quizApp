import axios from "../../config/axiosConfig";
import { toast } from "vue3-toastify";

export default {
    state() {
        return {
            users: [],
            limit: 5,
            page: 1,
            search: "",
            filter: "",
            totalUsers: 0,
            totalPages: 0,
            isSearching: false,
            token: null,
            profileData: null,
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
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    handleClone();
                    state.page = 1;
                    dispatch('getAllUsers');
                } else {
                    toast.error(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },



        async getAllUsers({ commit, state }) {
            try {
                if (state.search && !state.filter) {
                    const res = await axios.get(`v1/api/users?limit=${state.limit}&page=${state.page}&search=${state.search}`);
                    if (res.EC === 0) {
                        commit('setUsers', res.DT);
                        state.totalUsers = res.totalUsers;
                        state.totalPages = res.totalPages;
                    }
                } else if (state.filter && !state.search) {
                    const res = await axios.get(`v1/api/users?limit=${state.limit}&page=${state.page}&filter=${state.filter}`);
                    if (res.EC === 0) {
                        commit('setUsers', res.DT);
                        state.totalUsers = res.totalUsers;
                        state.totalPages = res.totalPages;
                    }
                } else if (state.filter && state.search) {
                    const res = await axios.get(`v1/api/users?limit=${state.limit}&page=${state.page}&search=${state.search}&filter=${state.filter}`);
                    if (res.EC === 0) {
                        commit('setUsers', res.DT);
                        state.totalUsers = res.totalUsers;
                        state.totalPages = res.totalPages;
                    }
                } else {
                    const res = await axios.get(`v1/api/users?limit=${state.limit}&page=${state.page}`);
                    if (res.EC === 0) {
                        commit('setUsers', res.DT);
                        state.totalUsers = res.totalUsers;
                        state.totalPages = res.totalPages;
                    }
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

                    commit('setProfileData', res.DT)
                    sessionStorage.setItem('profileData', JSON.stringify(res.DT))


                    toast.success(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    handleClone();
                    state.page = 1;
                    dispatch("getAllUsers");
                } else {
                    toast.error(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
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
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    state.page = 1;
                    dispatch('getAllUsers');
                } else {
                    toast.error(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                }
            } catch (error) {
                console.error(error);
            }
        },

        async loginAdmin({ commit }, { auth, $router }) {
            try {
                const res = await axios.post('v1/api/login', auth);
                if (res.EC === 0) {
                    commit('setProfileData', res.DT)
                    sessionStorage.setItem('profileData', JSON.stringify(res.DT))

                    const token = res.DT.accessToken
                    sessionStorage.setItem('token', token)
                    commit('setToken', token)
                    $router.push('/admin');
                    toast.success(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                } else {
                    toast.error(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                }
            } catch (error) {
                console.error(error);
            }
        },



        async logoutAdmin({ commit }, { $router, handleClone }) {
            try {
                const res = await axios.post('v1/api/logout');
                if (res.EC === 0) {
                    sessionStorage.removeItem('token');
                    sessionStorage.removeItem('profileData');
                    $router.push('/login');
                    handleClone();
                } else {
                    toast.error(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }

    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setPage(state, newPage) {
            state.page = newPage;
        },
        setSearch(state, newSearch) {
            state.search = newSearch;
        },
        setFilter(state, newFilter) {
            state.filter = newFilter;
        },
        setLimit(state, newLimit) {
            state.limit = newLimit;
        },
        setToken(state, newToken) {
            state.token = newToken;
        },
        setProfileData(state, newProfileData) {
            state.profileData = newProfileData;
        }
    },
    getters: {
    },
};
