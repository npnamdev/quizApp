<template>
  <div class="box-filter">
    <b-dropdown
      :text="filter ? filter : 'All Category'"
      menu-class="w-100"
      class="dropbtn"
    >
      <b-dropdown-item
        href="#"
        @click="handleRoleFilterClick('')"
        class="dropdown-content"
      >
        All Role
      </b-dropdown-item>
      <b-dropdown-item
        href="#"
        v-for="item in items"
        :key="item"
        @click="handleRoleFilterClick(item)"
        class="dropdown-content"
      >
        {{ item }}
      </b-dropdown-item>
    </b-dropdown>

    <!-- ds -->
    <button class="btn-filter" @click="handleFilterUser">
      <box-icon
        class="icon-btn-filter"
        name="filter"
        color="#959599"
        size="22px"
      ></box-icon>
      <span> Filter </span>
    </button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: ["user", "admin"],
      filter: "",
    };
  },
  created() {
    this.filter = this.$store.state.users.filter;
  },
  methods: {
    handleRoleFilterClick(filterValue) {
      this.filter = filterValue;
    },

    async handleFilterUser() {
      this.$store.commit("setPage", 1);
      await this.$store.dispatch("getAllUsers", this.filter);
    },
  },
  watch: {
    filter(newValue) {
      this.filter = newValue;
      this.$store.commit("setFilter", newValue);
    },
    "$store.state.users.filter"(newFilter) {
      this.filter = newFilter;
    },
  },
};
</script>

<style>
.dropbtn button {
  display: flex;
  align-items: center !important;
  justify-content: space-between !important;
  background-color: #fff !important;
  width: 200px;
  height: 38px;
  border-radius: 5px;
  border: 1px solid #f2eded !important;
  outline: none;
  font-size: 13px;
  color: #747171 !important;
}

ul.dropdown-menu {
  border: none;
  box-shadow: 1px 1px 3px rgba(200, 195, 195, 0.5),
    -1px -1px 3px rgba(200, 195, 195, 0.5);
  max-height: 250px;
  overflow: auto;
  margin: 4px 0px !important;
}

ul.dropdown-menu li .dropdown-item {
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