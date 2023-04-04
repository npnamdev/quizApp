<template>
  <div id="content">
    <h2 class="content-title">Manage User</h2>
    <div class="box-table">
      <div class="box-table-head">
        <div class="box-table-left">
          <SearchUser />
          <FilterUser />
          <ShowRowUser />
        </div>
        <button class="btnadd" @click="setModalCreateUser(true)">
          <box-icon
            class="icon-btn-add"
            name="plus"
            color="#9e9ea7"
            size="17px"
          ></box-icon>
          Add User
        </button>
      </div>

      <TableUser
        :setModalCreateUser="setModalCreateUser"
        :handleClickBtnDelete="handleClickBtnDelete"
        :handleClickBtnUpdate="handleClickBtnUpdate"
      />
    </div>

    <div class="box-pagination">
      <span class="total-row">
        Total number of records: {{ $store.state.users.totalUsers }}
      </span>
      <PaginationUser />
    </div>
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
  </div>
</template>

<script>
import TableUser from "./TableUser.vue";
import ModalCreateUser from "./ModalCreateUser.vue";
import ModalUpdateUser from "./ModalUpdateUser.vue";
import ModalDeleteUser from "./ModalDeleteUser.vue";
import SearchUser from "./SearchUser.vue";
import PaginationUser from "./PaginationUser.vue";
import FilterUser from "./FilterUser.vue";
import ShowRowUser from "./ShowRowUser.vue";

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
    PaginationUser,
    SearchUser,
    FilterUser,
    ShowRowUser,
  },
  created() {
    this.$store.dispatch("getAllUsers");
  },
};
</script>


<style scoped>
.box-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.total-row {
  font-size: 15px;
  font-weight: 500;
}
</style>