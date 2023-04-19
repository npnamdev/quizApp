<template>
  <div class="search">
    <box-icon
      class="icon-search"
      name="search"
      color="#d9d0c1"
      size="18px"
      @click="handleSearchUser"
    ></box-icon>
    <input
      v-model="search"
      class="input-search"
      type="text"
      placeholder="Search..."
      @keydown.enter="handleSearchUser"
    />
    <box-icon
      v-if="iconClear"
      class="clear-search"
      name="x"
      color="#d9d0c1"
      size="18px"
      @click="handleClearSearch"
    ></box-icon>
  </div>
</template>


<script>
export default {
  data() {
    return {
      iconClear: false,
      search: "",
    };
  },
  created() {
    this.search = this.$store.state.users.search;
  },
  methods: {
    handleClearSearch() {
      this.search = "";
      this.$store.dispatch("searchUser", this.search);
      this.iconClear = false;
    },

    async handleSearchUser() {
      this.$store.commit("setPage", 1);
      await this.$store.dispatch("getAllUsers", this.search);
    },
  },
  watch: {
    search(newValue) {
      this.search = newValue;
      this.iconClear = true;
      this.$store.commit("setSearch", newValue);
      if (this.search == "") {
        this.$store.dispatch("getAllUsers", this.search);
        this.iconClear = false;
      }
    },
    "$store.state.users.search"(newSearch) {
      this.search = newSearch;
    },
  },
};
</script>
