<template>
  <nav id="sidebar" :class="{ close: navbarMenu }">
    <div class="logo">
      <router-link to="/admin" class="logo-icon">
        <img :src="imageIconPath" />
      </router-link>
      <router-link to="/admin" class="logo-text">
        <img :src="imageTextPath" />
      </router-link>
    </div>
    <ul id="main-menu">
      <li>
        <router-link to="/admin" exact-active-class="active">
          <box-icon
            class="link-icon"
            name="category"
            color="#5F6A7A"
            size="19px"
          ></box-icon>
          <span class="link-title">Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/post" exact-active-class="active">
          <box-icon
            class="link-icon"
            color="#5F6A7A"
            size="19px"
            name="book-open"
          ></box-icon>
          <span class="link-title">Post</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/category" exact-active-class="active">
          <box-icon
            class="link-icon"
            color="#5F6A7A"
            size="19px"
            name="bar-chart-alt-2"
          ></box-icon>
          <span class="link-title">Category</span>
        </router-link>
      </li>
      <li>
        <router-link to="/admin/user" exact-active-class="active">
          <box-icon
            class="link-icon"
            color="#5F6A7A"
            size="19px"
            name="user"
          ></box-icon>
          <span class="link-title">User</span>
        </router-link>
      </li>
    </ul>
    <ul id="menu-bottom">
      <li>
        <router-link to="" @click="setModalShow(true)">
          <box-icon
            class="link-icon"
            color="#5F6A7A"
            size="19px"
            name="log-out"
          ></box-icon>
          <span class="link-title">Logout</span>
        </router-link>
        <div>
          <b-modal v-model="modalShow" no-close-on-backdrop>
            <template #header>
              <div class="box-head-modal">
                Logout
                <box-icon
                  name="x"
                  color="#867070"
                  size="25px"
                  class="icon-x"
                  @click="setModalShow(false)"
                ></box-icon>
              </div>
            </template>
            <div class="content-modal">Are you sure you want to sign out?</div>
            <template #footer>
              <button class="btn-action" @click="setModalShow(false)">
                Cancel
              </button>
              <button class="btn-action" @click="handleLogout">Ok</button>
            </template>
          </b-modal>
        </div>
      </li>
      <li>
        <router-link to="">
          <box-icon
            class="link-icon"
            color="#5F6A7A"
            size="19px"
            name="cog"
            animation="spin"
          ></box-icon>
          <span class="link-title">Setting</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>




<script>
import imageIcon from "../../assets/images/icon.png";
import imageText from "../../assets/images/text.png";

export default {
  data() {
    return {
      imageIconPath: imageIcon,
      imageTextPath: imageText,
      modalShow: false,
    };
  },
  methods: {
    setModalShow(value) {
      this.modalShow = value;
    },
    handleClone() {
      setModalShow(false);
    },
    async handleLogout() {
      await this.$store.dispatch("logoutAdmin", {
        handleClone: this.handleClone,
        $router: this.$router,
      });
    },
  },
  props: ["navbarMenu"],
};
</script>





<style scoped>
#wrapper-admin nav#sidebar {
  width: 250px;
  height: 100vh;
  border-right: 1px solid #f1f1f1;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: all 0.5s ease-in-out;
  z-index: 1000;
}

#wrapper-admin nav#sidebar .logo {
  padding: 0px 20px;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  text-decoration: none;
}

#wrapper-admin nav#sidebar .logo .logo-icon {
  min-width: 40px;
  display: flex;
  justify-content: center;
}

#wrapper-admin nav#sidebar .logo .logo-text {
  min-width: 40px;
  display: flex;
  transition: all 0.5s ease-in-out;
}

#wrapper-admin nav#sidebar #main-menu {
  width: 100%;
  height: calc(100% - 190px);
  padding: 15px 20px;
}

#wrapper-admin nav#sidebar #menu-bottom {
  width: 100%;
  height: 60%;
  padding: 15px 20px;
  border-top: 1px solid #f1f1f1;
  background-color: #fff;
}

#wrapper-admin nav#sidebar li {
  list-style: none;
}

#wrapper-admin nav#sidebar li a {
  text-decoration: none;
  width: 100%;
  display: flex;
  height: 37px;
  align-items: center;
  color: #5f6a7a;
  margin-bottom: 7px;
  border-radius: 6px;
}

#wrapper-admin nav#sidebar li a.active {
  background-color: #f9f4f4;
}

#wrapper-admin nav#sidebar li a:hover {
  background-color: #f9f4f4;
}

#wrapper-admin nav#sidebar li a .link-icon {
  min-width: 40px;
  display: flex;
  justify-content: center;
  height: 30px;
  display: flex;
  align-items: center;
}

#wrapper-admin nav#sidebar li a .link-title {
  font-size: 14px;
  padding-left: 3px;
  font-weight: 400;
  height: 30px;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;
}
</style>