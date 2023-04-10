<template>
  <button class="btn-row-filter">
    <b-dropdown
      :text="limit ? `${limit} Rows ` : 5"
      menu-class="w-100"
      class="rowBtn"
    >
      <b-dropdown-item
        href="#"
        v-for="item in items"
        :key="item"
        @click="handleRoleFilterClick(item)"
        class="dropdown-content"
      >
        {{ item }} Rows
      </b-dropdown-item>
    </b-dropdown>
  </button>
</template>

 
    

<script>
export default {
  data() {
    return {
      items: [5, 10, 15, 20],
      limit: "",
    };
  },
  created() {
    this.limit = this.$store.state.users.limit;
  },
  methods: {
    async handleRoleFilterClick(limitValue) {
      this.limit = limitValue;
      this.$store.commit("setLimit", limitValue);
      console.log(this.$store.state.users.limit);
      this.$store.commit("setPage", 1);
      await this.$store.dispatch("getAllUsers");
    },
  },
  watch: {
    limit(newValue) {
      this.limit = newValue;
      this.$store.commit("setLimit", newValue);
    },
    "$store.state.users.limit"(newLimit) {
      this.limit = newLimit;
    },
  },
};
</script>




<style >
.rowBtn button {
  display: flex;
  align-items: center !important;
  justify-content: space-between !important;
  background-color: transparent !important;
  width: 90px;
  height: 38px;
  border-radius: 5px;
  border: none !important;
  outline: none;
  font-size: 13px;
  color: #747171 !important;
}

.rowBtn ul.dropdown-menu {
  border: none;
  box-shadow: 1px 1px 3px rgba(200, 195, 195, 0.5),
    -1px -1px 3px rgba(200, 195, 195, 0.5);
  max-height: 250px;
  overflow: auto;
  min-width: 97px !important;
  margin-left: -2px !important;
}

ul.dropdown-menu li.dropdown-content .dropdown-item {
  font-size: 13px;
  display: flex;
  height: 35px;
  align-items: center;
  padding: 0px 15px;
  color: #747171;
}

ul.dropdown-menu li .dropdown-item:hover {
  background-color: #f5efef;
}

ul.dropdown-menu li .dropdown-item:active {
  background-color: #f5efef;
}
</style>

