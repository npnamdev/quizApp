<template>
  <div>
    <b-modal v-model="modalCreate" no-close-on-backdrop>
      <template #header>
        <div class="box-head-modal">
          Add Category
          <box-icon
            name="x"
            color="#867070"
            size="25px"
            class="icon-x"
            @click="handleClone"
          ></box-icon>
        </div>
      </template>
      <div class="content-modal">
        <div class="form-add-category">
          <div class="form-group">
            <label for="name">Name</label>
            <input v-model="name" id="name" type="text" />
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <input v-model="description" id="description" type="text" />
          </div>
        </div>
      </div>
      <template #footer>
        <button class="btn-action" @click="handleClone">Close</button>
        <button class="btn-action" @click="handleCreateUser">Save</button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";

export default {
  data() {
    return {
      modalCreate: this.modalCreateCategory,
      name: "",
      description: "",
    };
  },
  props: ["modalCreateCategory", "setModalCreateCategory"],
  methods: {
    handleClone() {
      this.name = "";
      this.description = "";
      this.setModalCreateCategory(false);
    },

    async handleCreateUser() {
      const category = {
        name: this.name,
        description: this.description,
      };
      if (category.name == "") {
        toast.error("Please Enter Name", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        await this.$store.dispatch("addCategory", {
          category,
          handleClone: this.handleClone,
        });
      }
    },
  },
  watch: {
    modalCreateCategory(newValue) {
      this.modalCreate = newValue;
    },
  },
};
</script>




<style scoped>
.form-add-category {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-add-category {
  width: 100%;
}

.form-add-category .form-group {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: column;
}

.form-add-category .form-group label {
  font-size: 14px;
  color: #63666b;
  font-weight: 400;
  margin-bottom: 7px;
}

.form-add-category .form-group input {
  height: 34px;
  border-radius: 5px;
  border: 1px solid #f2eded;
  outline: none;
  padding: 0px 10px;
  font-size: 13px;
  color: #63666b;
}

.btn-action {
  border: none;
  height: 38px;
  padding: 0px 15px;
  border-radius: 5px;
  font-size: 13px;
  color: #333;
  font-weight: 500;
  background: #ffffff;
  border: 1px solid #f2eded;
}

.btn-action:hover {
  color: #333;
  background-color: #f5f9fa;
}
</style>

