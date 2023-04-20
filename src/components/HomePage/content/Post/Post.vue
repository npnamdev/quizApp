<template>
  <div id="content" class="container">
    <ListAllPost />
    <div id="test">menu</div>
  </div>
</template>

<script>
import ListAllPost from "./ListAllPost.vue";
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getAllPosts");
  },
  components: {
    ListAllPost,
  },
};
</script>



<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#content {
  padding: 0 !important;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 85px;
}

#test {
  border: 1px solid;
  width: 308px;
}
</style>