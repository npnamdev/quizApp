<template>
  <div id="content">
    <h2 class="content-title">Manage Post</h2>
    <div class="box-table">
      <div class="box-table-head">
        <div class="box-table-left">
          <SearchPost />
          <FilterPost />
          <ShowRowPost />
        </div>
        <button class="btnadd" @click="setModalCreatePost(true)">
          <box-icon
            class="icon-btn-add"
            name="plus"
            color="#9e9ea7"
            size="17px"
          ></box-icon>
          Add Post
        </button>
      </div>

      <TablePost
        :handleClickBtnDelete="handleClickBtnDelete"
        :handleClickBtnUpdate="handleClickBtnUpdate"
      />

      <ModalCreatePost
        :modalCreatePost="modalCreatePost"
        :setModalCreatePost="setModalCreatePost"
      />

      <ModalUpdatePost
        :modalUpdatePost="modalUpdatePost"
        :setModalUpdatePost="setModalUpdatePost"
        :dataUpdate="dataUpdate"
      />

      <ModalDeletePost
        :modalDeletePost="modalDeletePost"
        :setModalDeletePost="setModalDeletePost"
        :handkeSubmitDelete="handkeSubmitDelete"
        :dataDelete="dataDelete"
      />
    </div>
  </div>
</template>


<script>
import TablePost from "./TablePost.vue";
import ModalCreatePost from "./ModalCreatePost.vue";
import ModalUpdatePost from "./ModalUpdatePost.vue";
import ModalDeletePost from "./ModalDeletePost.vue";
import SearchPost from "./SearchPost.vue";
// import PaginationUser from "./PaginationUser.vue";
import FilterPost from "./FilterPost.vue";
import ShowRowPost from "./ShowRowPost.vue";

export default {
  data() {
    return {
      modalCreatePost: false,
      modalUpdatePost: false,
      modalDeletePost: false,
      dataUpdate: "",
      dataDelete: "",
    };
  },
  methods: {
    setModalCreatePost(value) {
      this.modalCreatePost = value;
    },

    setModalUpdatePost(value) {
      this.modalUpdatePost = value;
    },
    handleClickBtnUpdate(post) {
      this.modalUpdatePost = true;
      this.dataUpdate = post;
    },

    setModalDeletePost(value) {
      this.modalDeletePost = value;
    },
    handleClickBtnDelete(post) {
      this.modalDeletePost = true;
      this.dataDelete = post;
    },
  },
  components: {
    TablePost,
    ModalCreatePost,
    ModalUpdatePost,
    ModalDeletePost,
    // PaginationUser,
    SearchPost,
    FilterPost,
    ShowRowPost,
  },
  created() {
    this.$store.dispatch("getAllPosts");
    this.$store.dispatch("getAllCategorys");
  },
};
</script>