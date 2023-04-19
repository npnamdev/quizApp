<template>
  <Carousel :items-to-show="1" :wrap-around="true">
    <Slide v-for="slide in listSlider" :key="slide">
      <img class="image" :src="slide" alt="" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import banner1 from "../../../../assets/images/Banner3.jpg";
import banner2 from "../../../../assets/images/Banner2.jpg";
import banner3 from "../../../../assets/images/Banner1.jpg";
import banner4 from "../../../../assets/images/Banner4.jpg";

export default {
  data() {
    return {
      bannerPath: banner1,
      listSlider: [banner1, banner2, banner3, banner4],
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>


<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.image {
  width: 100%;
}

.carousel {
  width: 700px;
  height: 380px;
  overflow: hidden;
  border-radius: 5px;
}
</style>