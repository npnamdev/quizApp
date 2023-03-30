<template>
  <div id="content">
    <h2 class="content-title">Manage User</h2>
    <TableUser
      :setModalCreateUser="setModalCreateUser"
      :handleClickBtnDelete="handleClickBtnDelete"
      :handleClickBtnUpdate="handleClickBtnUpdate"
    />
    <ModalCreateUser
      :modalCreateUser="modalCreateUser"
      :setModalCreateUser="setModalCreateUser"
    />
    <ModalUpdateUser
      :modalUpdateUser="modalUpdateUser"
      :setModalUpdateUser="setModalUpdateUser"
      :dataUpdate="dataUpdate"
    />
    <ModalDeleteUser
      :modalDeleteUser="modalDeleteUser"
      :setModalDeleteUser="setModalDeleteUser"
      :handkeSubmitDelete="handkeSubmitDelete"
      :dataDelete="dataDelete"
    />
    <!-- <pre>{{ $store.state.users }}</pre> -->
  </div>
</template>

<script>
import TableUser from "./TableUser.vue";
import ModalCreateUser from "./ModalCreateUser.vue";
import ModalUpdateUser from "./ModalUpdateUser.vue";
import ModalDeleteUser from "./ModalDeleteUser.vue";

// import { mapState, mapActions } from "vuex";

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
    TableUser,
    ModalCreateUser,
    ModalUpdateUser,
    ModalDeleteUser,
  },
  created() {
    this.$store.dispatch("getAllUsers");
  },
  watch: {},
};
</script>
