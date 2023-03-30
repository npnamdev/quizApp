<template>
  <div class="box-table">
    <div class="box-table-head">
      <div class="box-table-left">
        <div class="search">
          <box-icon
            class="icon-search"
            name="search"
            color="#d9d0c1"
            size="18px"
            animation="tada-hover"
          ></box-icon>
          <input class="input-search" type="text" placeholder="Search..." />
        </div>
        <div class="box-filter">
          <div class="dropdown">
            <button class="dropbtn" v-on:click="toggleDropdown">
              <span>{{ selectedItem || "All Role" }}</span>
              <box-icon
                class="icondrop"
                color="#d9d0c1"
                size="15.5px"
                name="expand-vertical"
              ></box-icon>
            </button>
            <ul v-show="showDropdown" class="dropdown-content">
              <li aria-disabled="" class="all">All Role</li>
              <li
                v-for="(item, index) in items"
                :key="index"
                v-on:click="selectItem(index)"
              >
                <span class="list-drop"> {{ item }}</span>
              </li>
            </ul>
          </div>
          <button class="btn-filter">
            <box-icon
              class="icon-btn-filter"
              name="filter"
              color="#959599"
              size="22px"
            ></box-icon>
            <span> Filter </span>
          </button>
        </div>
        <button class="btn-row-filter">
          <box-icon
            name="objects-horizontal-center"
            color="#959599"
            size="16.5px"
            class="btn-row-filter-icon"
          ></box-icon>
          Rows
        </button>
      </div>
      <button class="btnadd" @click="setModalCreateUser(true)">
        <box-icon
          class="icon-btn-add"
          name="plus"
          color="#9e9ea7"
          size="17px"
        ></box-icon>
        Add User
      </button>
    </div>
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
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in $store.state.users" :key="user._id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.createdAt }}</td>
            <td>
              <box-icon
                class="icon-action"
                color="#867070"
                size="18px"
                animation="tada-hover"
                name="edit"
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
        </tbody>
      </table>
    </div>
  </div>
</template>




<script>
import "../../../../assets/css/tableUser.css";

export default {
  props: ["setModalCreateUser", "setModalDeleteUser", "handleClickBtnDelete"],
  data() {
    return {
      showDropdown: false,
      items: ["Admin", "User", "Test"],
      selectedItem: "",
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectItem(index) {
      this.selectedItem = this.items[index];
      this.showDropdown = false;
    },
  },
};
</script>

<style scoped>
</style>