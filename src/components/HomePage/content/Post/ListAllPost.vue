<template>
  <ul id="list-post">
    <b-breadcrumb
      style="--bs-breadcrumb-divider: '>'"
      :items="items"
    ></b-breadcrumb>
    <li v-for="post in $store.state.posts.posts" :key="post._id">
      <router-link class="image" :to="'/posts/all/' + post._id">
        <img :src="post.image ? post.image : imageNonePath" />
      </router-link>

      <div class="wp-text">
        <router-link class="title" :to="'/posts/all/' + post._id">
          {{ post.title }}
        </router-link>
        <div class="wp-infor">
          <div class="author">
            <box-icon
              class="icon"
              color="#333"
              size="13.5px"
              name="user"
            ></box-icon>
            <span>{{ post?.author?.username }}</span>
          </div>

          <div class="time">
            <box-icon
              class="icon"
              color="#333"
              size="13.5px"
              name="time-five"
            ></box-icon>
            <span>{{ formatDate(post.createdAt) }}</span>
          </div>
        </div>
        <p class="description">
          {{ post.description }}
        </p>
      </div>
    </li>
  </ul>
</template>


<script>
import imageNone from "../../../../assets/images/img-none.jpg";
export default {
  created() {
    this.$store.dispatch("getAllPosts");
  },
  data() {
    return {
      imageNonePath: imageNone,
      items: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Post",
          to: "/post",
        },
      ],
    };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const monthIndex = date.getMonth();
      const day = date.getDate();
      return `${monthNames[monthIndex]} ${day < 10 ? "0" + day : day}, ${year}`;
    },
  },
};
</script>


<style scoped lang="scss">
ul#list-post {
  padding: 0;
  width: 770px;
  border-radius: 5px;
  border: 1px solid #f1ebeb;
  padding: 20px;
  li {
    border: 1px solid #f1ebeb;
    border-radius: 15px;
    display: flex;
    list-style: none;
    align-items: center;
    margin-bottom: 25px;
    padding: 20px;
    overflow: hidden;
    .image {
      display: flex;
      width: 250px;
      height: 170px;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
        transition: all 0.2s ease-in-out;
        &:hover {
          transform: scale(1.1, 1.1);
        }
      }
    }
    .wp-text {
      height: 170px;
      width: 70%;
      padding: 1px 15px;
      .title {
        font-size: 22px;
        color: #333;
        text-decoration: none;
        font-weight: 500;
        display: flex;
        max-height: 65px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        transition: all 0.1s ease-in-out;
        &:hover {
          color: rgb(20, 143, 220);
        }
      }
      .wp-infor {
        display: flex;
        padding: 10px 0px;
        font-size: 13.5px;
        .author {
          display: flex;
          margin-right: 20px;
          color: #797676;
          span {
            margin-left: 5px;
          }
        }
        .time {
          display: flex;
          color: #797676;
          span {
            margin-left: 5px;
          }
        }
      }
      .description {
        font-size: 14px;
        margin-top: 10px;
        color: #797676;
        display: -webkit-box;
        line-height: 1.6;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>