<template>
  <div class="box-table-body">
    <table>
      <thead>
        <tr class="row-head">
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Role</th>
          <th>CreateAt</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="$store.state.users.users.length > 0">
          <tr v-for="(user, index) in $store.state.users.users" :key="user._id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.role }}</td>
            <td>{{ formatDate(user.createdAt) }}</td>
            <td>
              <box-icon
                class="icon-action"
                color="#867070"
                size="18px"
                animation="tada-hover"
                name="edit"
                @click="handleClickBtnUpdate(user)"
              ></box-icon>
              <box-icon
                @click="handleClickBtnDelete(user)"
                class="icon-action"
                color="#867070"
                size="18px"
                animation="tada-hover"
                name="trash"
              ></box-icon>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="8">No record exists!</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>



 

<script>
import "../../../../assets/css/tableUser.css";

export default {
  props: ["setModalCreateUser", "handleClickBtnDelete", "handleClickBtnUpdate"],
  data() {
    return {
      items: ["Admin", "User", "Test"],
      iconClear: false,
      keyword: "",
      check: this.$store.state.users.users > 0,
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      let checkDay = day < 10 ? "0" + day : day;
      let checkMonth = month < 10 ? "0" + month : month;

      return `${checkDay}/${checkMonth}/${year}`;
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
    check(newValue) {
      this.check = newValue;
    },
  },
};
</script>

<style scoped>
</style>