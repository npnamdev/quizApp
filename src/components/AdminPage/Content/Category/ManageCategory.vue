<template>
  <div id="content">
    <h2 class="content-title">Manage Category</h2>
    <div class="box-table">
      <div class="box-table-head">
        <div class="box-table-left">
          <ShowRowCategory />
        </div>
        <button class="btnadd" @click="setModalCreateCategory(true)">
          <box-icon
            class="icon-btn-add"
            name="plus"
            color="#9e9ea7"
            size="17px"
          ></box-icon>
          Add Category
        </button>
      </div>
      <TableCategory
        :handleClickBtnUpdate="handleClickBtnUpdate"
        :handleClickBtnDelete="handleClickBtnDelete"
      />
    </div>
    <ModalCreateCategory
      :modalCreateCategory="modalCreateCategory"
      :setModalCreateCategory="setModalCreateCategory"
    />
    <ModalUpdateCategory
      :modalUpdateCategory="modalUpdateCategory"
      :setModalUpdateCategory="setModalUpdateCategory"
      :dataUpdate="dataUpdate"
    />
    <ModalDeleteCategory
      :modalDeleteCategory="modalDeleteCategory"
      :setModalDeleteCategory="setModalDeleteCategory"
      :dataDelete="dataDelete"
    />
  </div>
</template>


<script>
import TableCategory from "./TableCategory.vue";
import ShowRowCategory from "./ShowRowCategory.vue";
import ModalCreateCategory from "./ModalCreateCategory.vue";
import ModalUpdateCategory from "./ModalUpdateCategory.vue";
import ModalDeleteCategory from "./ModalDeleteCategory.vue";

export default {
  data() {
    return {
      modalCreateCategory: false,
      modalUpdateCategory: false,
      modalDeleteCategory: false,
      dataUpdate: "",
      dataDelete: "",
    };
  },
  methods: {
    setModalCreateCategory(value) {
      this.modalCreateCategory = value;
    },
    setModalUpdateCategory(value) {
      this.modalUpdateCategory = value;
    },
    setModalDeleteCategory(value) {
      this.modalDeleteCategory = value;
    },
    handleClickBtnUpdate(category) {
      this.modalUpdateCategory = true;
      this.dataUpdate = category;
    },
    handleClickBtnDelete(category) {
      this.modalDeleteCategory = true;
      this.dataDelete = category;
    },
  },
  components: {
    TableCategory,
    ShowRowCategory,
    ModalCreateCategory,
    ModalUpdateCategory,
    ModalDeleteCategory,
  },
  created() {
    this.$store.dispatch("getAllCategorys");
  },
};
</script>
