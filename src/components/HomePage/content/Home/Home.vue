<template>
  <div id="content">
    <div class="banner container">
      <Slider />
      <Featured />
    </div>
    <RecentPost />
  </div>
</template>


<script>
import banner from "../../../../assets/images/Banner1.jpg";
import Slider from "./Slider.vue";
import Featured from "./Featured.vue";
import RecentPost from "./RecentPost.vue";
export default {
  data() {
    return {
      bannerPath: banner,
    };
  },
  components: { Slider, Featured, RecentPost },
};
</script>


<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#content {
  margin-top: 65px;
  padding: 15px 0px;

  .banner {
    display: flex;
    justify-content: space-between;
  }
}
</style>