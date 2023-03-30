<template>
  <div>
    <b-modal v-model="modalDelete" no-close-on-backdrop>
      <template #header>
        <div class="box-head-modal">
          Delete User
          <box-icon
            name="x"
            color="#867070"
            size="25px"
            class="icon-x"
            @click="setModalDeleteUser(false)"
          ></box-icon>
        </div>
      </template>
      <div class="content-modal">
        Are you sure you want to delete the
        <span>{{ dataDelete.username }}</span> user?
      </div>
      <template #footer>
        <button class="btn-action" @click="setModalDeleteUser(false)">
          Close
        </button>
        <button class="btn-action" @click="handleSubmitDelete">Save</button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalDelete: this.modalDeleteUser,
    };
  },
  props: [
    "modalDeleteUser",
    "setModalDeleteUser",
    "handkeSubmitDelete",
    "dataDelete",
  ],
  methods: {
    handleSubmitDelete() {
      this.$store.dispatch("deleteUser", this.dataDelete._id);
      this.setModalDeleteUser(false);
    },
  },
  watch: {
    modalDeleteUser(newValue) {
      this.modalDelete = newValue;
    },
  },
};
</script>


<style scoped>
.box-head-modal {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  color: #333;
  font-weight: 500;
}

.content-modal {
  font-size: 15px;
}

.content-modal span {
  font-weight: 500;
}

.btn-action {
  border: none;
  height: 38px;
  padding: 0px 15px;
  border-radius: 5px;
  font-size: 13px;
  color: #333;
  font-weight: 500;
  background: #fff;
  border: 1px solid #f2eded;
}

.btn-action:hover {
  color: #333;
  background-color: #f5f9fa;
}
</style>