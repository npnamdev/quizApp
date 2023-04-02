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
      v-model="keyword"
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
      keyword: "",
    };
  },
  methods: {
    handleClearSearch() {
      this.keyword = "";
      this.$store.dispatch("searchUser", this.keyword);
      this.iconClear = false;
    },

    async handleSearchUser() {
      await this.$store.dispatch("searchUser", this.keyword);
    },
  },
  watch: {
    keyword(newValue) {
      this.keyword = newValue;
      this.iconClear = true;
      if (this.keyword == "") {
        this.$store.dispatch("searchUser", this.keyword);
        this.iconClear = false;
      }
    },
  },
};
</script>