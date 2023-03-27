<template>
  <div id="content">
    <h2 class="content-title">Manage User</h2>
    <TableUser
      :setModalCreateUser="setModalCreateUser"
      :setModalDeleteUser="setModalDeleteUser"
    />
    <ModalCreateUser
      :modalCreateUser="modalCreateUser"
      :setModalCreateUser="setModalCreateUser"
    />
    <ModalDeleteUser
      :modalDeleteUser="modalDeleteUser"
      :setModalDeleteUser="setModalDeleteUser"
    />
  </div>
</template>


<script>
import TableUser from "./TableUser.vue";
import ModalCreateUser from "./ModalCreateUser.vue";
import ModalDeleteUser from "./ModalDeleteUser.vue";

export default {
  data() {
    return {
      modalCreateUser: false,
      modalDeleteUser: false,
    };
  },
  methods: {
    setModalCreateUser(value) {
      this.modalCreateUser = value;
    },
    setModalDeleteUser(value) {
      this.modalDeleteUser = value;
    },
  },
  components: {
    TableUser,
    ModalCreateUser,
    ModalDeleteUser,
  },
};
</script>
