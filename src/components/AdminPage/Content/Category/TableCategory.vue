<template>
  <div class="box-table-body">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Posts</th>
          <th>CreateAt</th>
          <th>UpdateAt</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(category, index) in $store.state.categorys.categorys"
          :key="category._id"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ category.name }}</td>
          <td>{{ category.description }}</td>
          <td>{{ category.posts.length }} Post</td>
          <td>{{ formatDate(category.createdAt) }}</td>
          <td>{{ formatDate(category.updatedAt) }}</td>
          <td>
            <box-icon
              class="icon-action"
              color="#867070"
              size="18px"
              animation="tada-hover"
              name="edit"
              @click="handleClickBtnUpdate(category)"
            />
            <box-icon
              class="icon-action"
              color="#867070"
              size="18px"
              animation="tada-hover"
              name="trash"
              @click="handleClickBtnDelete(category)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  props: ["handleClickBtnDelete", "handleClickBtnUpdate"],
  data() {
    return {};
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
  watch: {},
};
</script>

<style scoped>
</style>