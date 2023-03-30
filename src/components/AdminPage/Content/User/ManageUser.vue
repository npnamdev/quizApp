<template>
  <div id="content">
    <h2 class="content-title">Manage User</h2>
    <TableUser
      :setModalCreateUser="setModalCreateUser"
      :setModalDeleteUser="setModalDeleteUser"
      :handleClickBtnDelete="handleClickBtnDelete"
    />
    <ModalCreateUser
      :modalCreateUser="modalCreateUser"
      :setModalCreateUser="setModalCreateUser"
    />
    <ModalDeleteUser
      :modalDeleteUser="modalDeleteUser"
      :setModalDeleteUser="setModalDeleteUser"
      :handkeSubmitDelete="handkeSubmitDelete"
      :dataDelete="dataDelete"
    />
    <pre>{{ $store.state.users }}</pre>
  </div>
</template>


<script>
import TableUser from "./TableUser.vue";
import ModalCreateUser from "./ModalCreateUser.vue";
import ModalDeleteUser from "./ModalDeleteUser.vue";

// import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      modalCreateUser: false,
      modalDeleteUser: false,
      dataDelete: "",
    };
  },
  methods: {
    setModalCreateUser(value) {
      this.modalCreateUser = value;
    },
    setModalDeleteUser(value) {
      this.modalDeleteUser = value;
    },
    handleClickBtnDelete(user) {
      this.modalDeleteUser = true;
      this.dataDelete = user._id;
    },
  },
  components: {
    TableUser,
    ModalCreateUser,
    ModalDeleteUser,
  },
  created() {
    this.$store.dispatch("getAllUsers");
  },
  watch: {},
};
</script>
