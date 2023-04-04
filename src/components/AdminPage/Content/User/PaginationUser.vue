<template >
  <b-pagination
    v-if="$store.state.users.totalPages > 1"
    v-model="page"
    :total-rows="totalUsers"
    :per-page="limit"
    ellipsis
    first-number
    last-number
    :limit="3"
    :limit-start="1"
  >
  </b-pagination>
</template>

<script>
export default {
  data() {
    return {
      page: null,
    };
  },
  computed: {
    limit() {
      return this.$store.state.users.limit;
    },
    totalUsers() {
      return this.$store.state.users.totalUsers;
    },
  },
  created() {
    this.page = this.$store.state.users.page;
  },
  methods: {},
  watch: {
    page(newPage) {
      this.$store.commit("setPage", newPage);
      this.$store.dispatch("getAllUsers");
    },
    "$store.state.users.page"(newPage) {
      this.page = newPage;
    },
  },
};
</script>


<style >
.pagination {
  margin: 0;
}
.page-link {
  width: 35px;
  height: 35px;
  color: #333;
}

.page-link {
  width: 35px;
  height: 35px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.page-item.active .page-link {
  border: none;
  outline: none;
  background-color: #333;
  box-shadow: none;
}

.page-item.active .page-link:focus {
  border: none;
  outline: none;
  background-color: #333;
  box-shadow: none;
}

.page-item:first-child .page-link,
.page-item:last-child .page-link {
  font-size: 23px;
}
</style>