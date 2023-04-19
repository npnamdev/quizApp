<template>
  <ul class="post-test">
    <li v-for="(post, index) in $store.state.posts.posts" :key="post._id">
      <a href="">
        <img :src="post.image" alt="" />
        <h2>{{ post.title }}</h2>
        <p>{{ post.description }}</p>
        <div v-html="post.content"></div>
        <p>tác giả: {{ post?.author?.username }}</p>
        <p>Danh mục: {{ post?.category?.name }}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {},
  created() {
    this.$store.dispatch("getAllPosts");
  },
};
</script>



<style scoped>
.post-test {
  width: 800px;
  height: 100vh;
  margin: 20px auto;
}
.post-test li {
  list-style: none;
}

.post-test a {
  padding: 20px 0px;
  width: 800px;
  color: #333;
  text-decoration: none;
}

img {
  width: 100%;
}
</style>