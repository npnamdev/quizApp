<template>
  <div id="category">
    <h2 class="title">Categorys</h2>
    <ul class="list-categorys">
      <li>
        <a href="">
          <span>JavaScript</span>
          <span>100</span>
        </a>
      </li>
      <li>
        <a href="">
          <span>NodeJs</span>
          <span>56</span>
        </a>
      </li>
      <li>
        <a href="">
          <span>Angular</span>
          <span>20</span>
        </a>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  data() {
    return {};
  },
};
</script>



<style scoped lang="scss">
#category {
  width: 35%;
  border: 1px solid #eee8e8;
  border-radius: 5px;
  background-color: #fff;
  padding: 15px;
  // box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1), -2px -2px 10px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 23px;
    color: #333;
    font-weight: 500;
  }
}

ul.list-categorys {
  display: flex;
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    a {
      // display: flex;
    }
  }
}
</style>