<template>
  <div id="wrapper-admin">
    <SidebarAdmin :navbarMenu="navbarMenu" />
    <div id="wp-content">
      <HeaderAdmin :setNavbarMenu="setNavbarMenu" />
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "./HeaderAdmin.vue";
import SidebarAdmin from "./SidebarAdmin.vue";

export default {
  data() {
    return {
      navbarMenu: false,
    };
  },
  methods: {
    setNavbarMenu() {
      this.navbarMenu = !this.navbarMenu;
      window.sessionStorage.setItem("navbarMenu", this.navbarMenu);
    },
  },
  mounted() {
    const navbarMenu = window.sessionStorage.getItem("navbarMenu");
    if (navbarMenu !== null) {
      this.navbarMenu = JSON.parse(navbarMenu);
    }
  },
  components: {
    HeaderAdmin,
    SidebarAdmin,
  },
};
</script>


<style>
#wp-content {
  width: calc(100% - 250px);
  position: absolute;
  top: 0;
  left: 250px;
  height: 100vh;
  transition: all 0.5s ease-in-out;
}

#wp-content #header {
  background-color: #fff;
  position: fixed;
  padding: 0px 20px;
  border-bottom: 1px solid #f1f1f1;
  width: calc(100% - 250px);
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
  z-index: 1000;
}

#content {
  margin-top: 90px;
  padding: 0px 20px;
}

#content h2.content-title {
  font-size: 24px;
  font-weight: 500;
  color: #333;
}

/* Close */

#wrapper-admin nav#sidebar.close {
  width: 80px;
}

#wrapper-admin nav#sidebar.close .logo .logo-text {
  opacity: 0;
  pointer-events: none;
}

#wrapper-admin nav#sidebar.close li a .link-title {
  opacity: 0;
  pointer-events: none;
}

#wrapper-admin nav#sidebar.close ~ #wp-content {
  left: 80px;
  width: calc(100% - 80px);
}

#wrapper-admin nav#sidebar.close ~ #wp-content #header {
  width: calc(100% - 80px);
}
</style>