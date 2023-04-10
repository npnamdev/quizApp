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
        <button class="btnadd" @click="setModalCreateUser(true)">
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
        :setModalCreateUser="setModalCreateUser"
        :handleClickBtnDelete="handleClickBtnDelete"
        :handleClickBtnUpdate="handleClickBtnUpdate"
      />
    </div>
  </div>
</template>


<script>
import TablePost from "./TablePost.vue";
// import ModalCreateUser from "./ModalCreateUser.vue";
// import ModalUpdateUser from "./ModalUpdateUser.vue";
// import ModalDeleteUser from "./ModalDeleteUser.vue";
import SearchPost from "./SearchPost.vue";
// import PaginationUser from "./PaginationUser.vue";
import FilterPost from "./FilterPost.vue";
import ShowRowPost from "./ShowRowPost.vue";

export default {
  data() {
    return {
      modalCreateUser: false,
      modalUpdateUser: false,
      modalDeleteUser: false,
      dataUpdate: "",
      dataDelete: "",
    };
  },
  methods: {
    setModalCreateUser(value) {
      this.modalCreateUser = value;
    },
    setModalUpdateUser(value) {
      this.modalUpdateUser = value;
    },
    setModalDeleteUser(value) {
      this.modalDeleteUser = value;
    },
    handleClickBtnUpdate(user) {
      this.modalUpdateUser = true;
      this.dataUpdate = user;
    },
    handleClickBtnDelete(user) {
      this.modalDeleteUser = true;
      this.dataDelete = user;
    },
  },
  components: {
    TablePost,
    // ModalCreateUser,
    // ModalUpdateUser,
    // ModalDeleteUser,
    // PaginationUser,
    SearchPost,
    FilterPost,
    ShowRowPost,
  },
  created() {
    this.$store.dispatch("getAllPosts");
  },
};
</script>