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
          <th class="col-6">CreateAt</th>
          <th class="col-7">UpdateAt</th>
          <th class="col-7">Action</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="$store.state.posts.posts.length > 0">
          <tr v-for="(post, index) in $store.state.posts.posts" :key="post._id">
            <td class="col-1">{{ index + 1 }}</td>
            <td>
              <span class="wp-2"> {{ post.title }} </span>
            </td>
            <td class="col-2">{{ post?.category?.name }}</td>
            <td class="col-3">{{ post?.author?.username }}</td>
            <td class="col-4">Pending</td>
            <td class="col-5">{{ formatDate(post.createdAt) }}</td>
            <td class="col-6">{{ formatDate(post.updatedAt) }}</td>
            <td class="col-8">
              <div class="wp-8">
                <box-icon
                  name="detail"
                  class="icon-action"
                  color="#867070"
                  size="18px"
                  animation="tada-hover"
                />
                <box-icon
                  class="icon-action"
                  color="#867070"
                  size="18px"
                  animation="tada-hover"
                  name="edit"
                  @click="handleClickBtnUpdate(post)"
                />
                <box-icon
                  @click="handleClickBtnDelete(post)"
                  class="icon-action"
                  color="#867070"
                  size="18px"
                  animation="tada-hover"
                  name="trash"
                />
              </div>
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
export default {
  props: ["handleClickBtnDelete", "handleClickBtnUpdate"],
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
  line-height: 1.7;
  text-align: left;
  color: rgb(61, 59, 59);
  font-size: 14px;
  cursor: pointer;
}

table.table-post {
  width: 100%;
  border-top: 1px solid #ebe5e5;
}

table.table-post tr {
  height: 60px;
  border-bottom: 1px solid #ebe5e5;
}

table.table-post tbody tr:hover {
  background-color: #f5f1f1;
}

table.table-post thead tr:hover {
  background-color: #fff;
}

table.table-post th {
  font-weight: 500;
  padding: 0px 20px;
}

table.table-post td {
  font-weight: 400;
  height: 50px;
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px 20px;
}

td .wp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  min-width: 300px;
}

td .wp-8 {
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>