<template>
  <div class="box-table-body">
    <table class="table-post">
      <thead>
        <tr>
          <th class="col-1">#</th>
          <th class="col-2">Title</th>
          <th class="col-4">Category</th>
          <th class="col-3">Author</th>
          <th class="col-5">Status</th>
          <th class="col-6">CreatedAt</th>
          <th class="col-7">UpdatedAt</th>
          <th class="col-7"></th>
        </tr>
      </thead>
      <tbody>
        <template v-if="$store.state.posts.posts.length > 0">
          <tr v-for="(post, index) in $store.state.posts.posts" :key="post._id">
            <td class="col-1">{{ index + 1 }}</td>
            <td>
              <span class="wp-2"> {{ post.title }} </span>
            </td>
            <td class="col-2">{{ post.category.name }}</td>
            <td class="col-3">{{ post.author.username }}</td>
            <td class="col-4">Pending</td>
            <td class="col-5">{{ formatDate(post.createdAt) }}</td>
            <td class="col-6">{{ formatDate(post.updatedAt) }}</td>
            <td class="col-8">
              <box-icon
                name="dots-vertical-rounded"
                color="#333"
                size="20px"
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
.box-table-body {
  width: 100%;
  overflow-x: auto;
  border: none;
}

table.table-post,
th,
td {
  border-collapse: collapse;
  padding: 10px 20px;
  line-height: 1.7;
  text-align: left;
  color: rgb(65 63 63);
  font-size: 14px;
  cursor: pointer;
}

table.table-post {
  width: 100%;
  border-top: 1px solid #ebe5e5;
}

table.table-post tr {
  border-bottom: 1px solid #ebe5e5;
}

table.table-post thead tr {
  padding: 20px 0px;
}

table.table-post tbody tr:hover {
  background-color: #f5f1f1;
}

table.table-post th {
  font-weight: 500;
}

table.table-post td {
  font-weight: 400;
  height: 50px;
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}

td .wp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  width: 350px;
}

td.col-8 .icon {
  font-size: 22px;
  cursor: pointer;
}
</style>