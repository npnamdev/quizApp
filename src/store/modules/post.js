import axios from "../../config/axiosConfig";
import { toast } from "vue3-toastify";

export default {
    state() {
        return {
            posts: [],
            limit: 8,
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
        async addPost({ commit, dispatch, state }, { post, handleClone }) {
            try {
                const formData = new FormData();
                formData.append("title", post.title);
                formData.append("description", post.description);
                formData.append("content", post.content);
                formData.append("categoryId", post.category);
                formData.append("image", post.image);
                const res = await axios.post(`v1/api/posts`, formData);
                console.log(res);
                if (res.EC === 0) {
                    let updatedPosts = [...state.posts, res.DT];
                    commit('setPosts', updatedPosts);
                    toast.success(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    handleClone();
                    dispatch('getAllPosts');
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



        async getAllPosts({ commit, state }) {
            try {
                const res = await axios.get(`v1/api/posts?limit=${state.limit}&page=${state.page}`);

                console.log(res);
                if (res.EC === 0) {
                    commit('setPosts', res.DT);
                    state.totalPost = res.totalPost;
                    state.totalPage = res.totalPage;
                }
            } catch (error) {
                console.error(error);
            }
        },

        async getDetailPosts({ commit, state }, postId) {
            try {
                const res = await axios.get(`v1/api/posts/${postId}`);

                console.log(res);
                if (res.EC === 0) {
                    commit('setPosts', res.DT);
                }
            } catch (error) {
                console.error(error);
            }
        },



        async updatePost({ commit, dispatch, state }, { post, handleClone }) {
            try {
                const formData = new FormData();
                formData.append("title", post.title);
                formData.append("description", post.description);
                formData.append("content", post.content);
                formData.append("categoryId", post.category);
                formData.append("image", post.image);

                const res = await axios.put(`v1/api/posts/${post.id}`, formData);

                if (res.EC === 0) {
                    const updatedPosts = state.posts.map((item) => {
                        if (item.id === post.id) {
                            return res.DT;
                        }
                        return item;
                    });
                    commit("setPosts", updatedPosts);
                    toast.success(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    handleClone();
                    dispatch("getAllPosts");
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



        async deletePost({ commit, dispatch, state }, postId) {
            try {
                const res = await axios.delete(`v1/api/posts/${postId}`);
                console.log(res);
                if (res.EC === 0) {
                    let updatedPosts = state.posts.filter(post => post.id !== postId);
                    commit('setPosts', updatedPosts);
                    toast.success(res.EM, {
                        autoClose: 3000,
                        position: toast.POSITION.BOTTOM_RIGHT,
                    });
                    dispatch('getAllPosts');
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
