<template>
  <div id="header">
    <nav class="navbar container">
      <div class="nav-left">
        <router-link to="/" class="nav-logo">
          <img :src="logoPath" />
        </router-link>
        <ul class="nav-menu">
          <li>
            <router-link class="nav-link" to="/"> Home </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/posts/all"> Posts </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/services">
              Services
            </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/blog"> Blog </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/contact"> Contact </router-link>
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <div class="nav-search">
          <input class="input-search" type="text" placeholder="Search..." />
          <box-icon
            class="btn-search"
            color="#8a8686"
            size="18px"
            name="search"
          ></box-icon>
        </div>
        <router-link class="nav-btn-signup" to="/register">
          Sign up
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import logo from "../../assets/images/logo_black.png";

export default {
  data() {
    return {
      logoPath: logo,
    };
  },
  components: {},
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #f3eded;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 1000;
}

#header nav.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0;
}

#header nav.navbar .nav-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#header nav.navbar a.nav-logo {
  margin-left: -12px;
}

#header nav.navbar a.nav-logo img {
  cursor: pointer;
}

#header nav.navbar ul.nav-menu {
  display: flex;
  margin-bottom: 0;
  padding: 0px;
  margin-left: 20px;
}

#header nav.navbar ul.nav-menu li {
  list-style: none;
}

#header nav.navbar ul.nav-menu li a {
  text-decoration: none;
  font-size: 15px;
  color: #333;
  font-weight: 500;
  display: flex;
  height: 100%;
  padding: 0px 15px;
  height: 65px;
  align-items: center;
  transition: all 0.1s ease-in-out;
}

#header nav.navbar ul.nav-menu li a:hover {
  color: #00dd83;
}

#header nav.navbar .nav-right {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-search {
  height: 36px;
  border: 1px solid;
  width: 250px;
  border: 1px solid #f4eeee;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.nav-search .input-search {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding-left: 15px;
  font-size: 13px;
}

.nav-search .btn-search {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.nav-btn-signup {
  margin-left: 5px;
  padding: 0px 15px;
  height: 36px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #e6dddd;
  transition: all 0.1s ease-in-out;
  color: #333;
  font-weight: 500;
}

.nav-btn-signup:hover {
  background-color: #faf5f5;
}
</style>