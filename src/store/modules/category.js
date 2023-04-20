import axios from "../../config/axiosConfig";
import { toast } from "vue3-toastify";

export default {
    state() {
        return {
            categorys: [],
        }
    },
    actions: {
        async addCategory({ commit, dispatch, state }, { category, handleClone }) {
            try {
                const res = await axios.post(`v1/api/categorys`, category);
                if (res.EC === 0) {
                    let updatedCategorys = [...state.categorys, res.DT];
                    commit('setCategorys', updatedCategorys);
                    toast.success(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    handleClone();
                    dispatch('getAllCategorys');
                } else {
                    toast.error(res.EM, {
                        autoClose: 3000,
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },



        async getAllCategorys({ commit, state }) {
            try {
                const res = await axios.get(`v1/api/categorys`);
                if (res.EC === 0) {
                    commit('setCategorys', res.DT);
                }
            } catch (error) {
                console.error(error);
            }
        },

        async getDetailCategorys({ commit, state }, categoryId) {
            try {
                const res = await axios.get(`v1/api/categorys/${categoryId}`);

                if (res.EC === 0) {
                    commit('setCategorys', res.DT);
                }
            } catch (error) {
                console.error(error);
            }
        },



        async updateCategory({ commit, dispatch, state }, { category, handleClone }) {
            try {
                const res = await axios.put(`v1/api/categorys/${category.id}`, category);
                if (res.EC === 0) {
                    const updatedCategorys = state.categorys.map((item) => {
                        if (item.id === category.id) {
                            return res.DT;
                        }
                        return item;
                    });
                    commit("setCategorys", updatedCategorys);
                    toast.success(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    handleClone();
                    dispatch("getAllCategorys");
                }
            } catch (error) {
                console.log(error);
            }
        },



        async deleteCategory({ commit, dispatch, state }, categoryId) {
            try {
                const res = await axios.delete(`v1/api/categorys/${categoryId}`);
                if (res.EC === 0) {
                    let updatedCategorys = state.categorys.filter(category => category.id !== categoryId);
                    commit('setCategorys', updatedCategorys);
                    toast.success(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    dispatch('getAllCategorys');
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
    mutations: {
        setCategorys(state, category) {
            state.categorys = category;
        },
    },
    getters: {
    },
};
