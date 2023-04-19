<template>
  <div class="wrapper">
    <HeaderHomePage />
    <router-view />
    <FooterHomepage />
  </div>
</template>


<script>
import HeaderHomePage from "./HeaderHomePage.vue";
import FooterHomepage from "./FooterHomePage.vue";

export default {
  data() {},
  components: {
    HeaderHomePage,
    FooterHomepage,
  },
};
</script>

