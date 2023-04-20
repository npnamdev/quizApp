<template>
  <div id="wp-new-post" class="container">
    <div class="new-post-head">
      <h2 class="title">Recent posts</h2>
      <router-link class="btn-show-all" to="/posts/all">
        <span>Show all</span>
        <box-icon
          color="#7d7b7b"
          size="19px"
          class="icon"
          name="chevrons-right"
          animation="fade-right"
        />
      </router-link>
    </div>
    <!-- End New-post-head -->

    <ul class="new-post-body">
      <li v-for="post in $store.state.posts.posts" :key="post._id">
        <router-link class="image" :to="'/posts/all/' + post._id">
          <img :src="post.image ? post.image : imageNonePath" />
        </router-link>

        <div class="wp-text">
          <router-link class="title" :to="'/posts/' + post._id">
            {{ post.title }}
          </router-link>

          <p class="description">
            {{ post.description }}
          </p>

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
        </div>
      </li>
    </ul>
    <!-- End New-post-body -->
  </div>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#wp-new-post {
  margin-top: 20px;
  .new-post-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin-bottom: 10px;

    .title {
      font-size: 26px;
      font-weight: 500;
      color: #333;
    }

    .btn-show-all {
      background: none;
      border: 1px solid #ede6e6;
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 0px 10px;
      height: 36px;
      text-decoration: none;
      overflow: hidden;

      span {
        color: #888282;
        font-size: 13px;
        font-weight: 500;
      }

      &:hover {
        background-color: #f9f6f6;
      }
    }
  }

  .new-post-body {
    display: flex;
    flex-wrap: wrap;
    gap: 26.5px;

    li {
      list-style: none;
      width: 255px;
      max-width: 255px;
      height: 352px;
      max-height: 352px;
      overflow: hidden;
      box-shadow: 2px 2px 3px rgba(68, 66, 66, 0.1),
        -2px -2px 3px rgba(68, 66, 66, 0.1);
      border-radius: 5px;

      .image {
        display: flex;
        width: 100%;
        height: 175px;
        overflow: hidden;

        img {
          width: 100%;
          height: 175px;
          transition: all 0.3s ease-in-out;
          &:hover {
            transform: scale(1.1, 1.1);
          }
        }
      }

      .wp-text {
        padding: 10px 15px;
        .title {
          text-decoration: none;
          font-size: 15.5px;
          font-weight: 500;
          color: #333;
          display: flex;
          height: 50px;
          overflow: hidden;
          display: -webkit-box;
          line-height: 1.5;
          -webkit-line-clamp: 2; /* số dòng hiển thị */
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;

          &:hover {
            color: rgb(12, 132, 184);
          }
        }
        .description {
          font-size: 13.5px;
          height: 67px;
          overflow: hidden;
          display: -webkit-box;
          line-height: 1.55;
          -webkit-line-clamp: 3; /* số dòng hiển thị */
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          margin-top: 3px;
          color: #6f6c6c;
        }
        .wp-infor {
          margin-top: 2px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 35px;
          color: #6f6c6c;

          .author {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              font-size: 12.5px;
            }

            .icon {
              margin-top: -9px;
              margin-right: 2px;
            }
          }

          .time {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              font-size: 12.5px;
            }

            .icon {
              margin-top: -9px;
              margin-right: 1px;
            }
          }
        }
      }
    }
  }
}
</style>