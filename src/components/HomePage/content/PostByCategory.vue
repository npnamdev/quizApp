<template>
  <div id="content" class="container">{{ categoryId }}</div>
  <div id="content" class="container">
    {{ $store.state.categorys.categorys }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryId: this.$route.params.category,
    };
  },
  created() {
    this.$store.dispatch("getDetailCategorys", this.categoryId);
  },
};
</script>