<template>
  <div class="wrapper">
    <HeaderHomePage />
    <transition name="fade">
      <router-view />
    </transition>
    <FooterHomepage />
  </div>

  <button v-if="showScrollButton" @click="scrollToTop" class="backtop">
    <box-icon color="#fff" name="chevron-up"></box-icon>
  </button>
</template>


<script>
import HeaderHomePage from "./HeaderHomePage.vue";
import FooterHomepage from "./FooterHomePage.vue";

export default {
  data() {
    return {
      scrollPosition: 0,
      showScrollButton: false,
    };
  },
  components: {
    HeaderHomePage,
    FooterHomepage,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      this.showScrollButton = this.scrollPosition > 200;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>


<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s !important;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.backtop {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #827c7c;
  outline: none;
  border: none;
  position: fixed;
  bottom: 30px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease-in-out;
}
</style>
