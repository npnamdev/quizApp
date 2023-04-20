<template>
  <div id="content" class="container">
    <ul class="box-left">
      <li v-for="post in $store.state.posts.posts" :key="post._id">
        <b-breadcrumb
          :items="items"
          style="--bs-breadcrumb-divider: '>'"
        ></b-breadcrumb>
        <h2 class="post-title">{{ post.title }}</h2>
        <div class="wp-info">
          <div class="author">
            <router-link class="avatar" to="/">
              <img
                :src="
                  post?.author?.avatar ? post?.author?.avatar : avatarNonePath
                "
              />
              <span class="name">{{ post?.author?.username }}</span>
            </router-link>
          </div>
          <div class="time">
            <box-icon
              class="icon"
              name="time"
              color="#868282"
              size="15px"
            ></box-icon>
            <span>{{ formatDate(post.createdAt) }}</span>
          </div>
        </div>
        <p class="post-description">{{ post.description }}</p>
        <img class="post-image" :src="post.image" />
        <p class="post-content" v-html="post.content"></p>
      </li>
    </ul>
    <div class="box-right">
      <div class="row-1">
        <h2 class="title">Category</h2>
        <ul class="list-categoty">
          <li
            v-for="category in $store.state.categorys.categorys"
            :key="category._id"
          >
            <router-link :to="'/posts/' + category._id">
              <span>{{ category.name }}</span>
              <span class="total-post">({{ category.posts.length }})</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="row-2">
        <img
          src="https://tpc.googlesyndication.com/simgad/16021214867444779560?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qm3UhtS_kr7AY1HVMHnbHI6CormiQ"
        />
      </div>
    </div>
  </div>
</template>

<script>
import avatarNone from "../../../assets/images/avatar-none.webp";
export default {
  data() {
    return {
      avatarNonePath: avatarNone,
      postsId: this.$route.params.id,
      items: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Post",
          to: "/posts/all",
        },
        {
          text: "Detail",
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
  created() {
    this.$store.dispatch("getDetailPosts", this.postsId);
    this.$store.dispatch("getAllCategorys");
  },
};
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#content {
  margin-top: 85px;
  margin-bottom: 20px;
  padding: 0;
  display: flex;
  justify-content: space-between;
  ul.box-left {
    width: 70%;
    border-radius: 5px;
    padding: 20px;
    border: 1px solid rgb(243, 243, 237);
    li {
      list-style: none;
      .post-title {
        margin-top: 20px;
        color: #333;
        font-size: 30px;
        font-weight: 500;
      }
      .wp-info {
        margin: 20px 0px;
        display: flex;
        align-items: center;
        .author {
          .avatar {
            text-decoration: none;
            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;
            }
            span {
              margin-left: 7px;
              color: #333;
              font-weight: 500;
              font-size: 14px;
            }
          }
        }
        .time {
          color: #868282;
          display: flex;
          align-items: center;
          margin-left: 20px;
          .icon {
            margin-top: -5px;
            margin-right: 3px;
          }
          span {
            font-size: 13.5px;
          }
        }
      }
      .post-description {
        color: #7a7777;
        line-height: 1.6;
        font-size: 15px;
      }
      .post-image {
        margin: 20px 0px;
        width: 100%;
        border-radius: 5px;
      }
      .post-content {
        line-height: 1.6;
        font-size: 15.5px;
      }
    }
  }
  .box-right {
    width: 28%;
    .row-1 {
      border: 1px solid rgb(243, 243, 237);
      border-radius: 5px;
      padding: 20px;
      .title {
        font-size: 19px;
        border-bottom: 2px solid #ded8d8;
        height: 35px;
        color: #232222;
      }

      ul.list-categoty {
        margin-top: 15px;

        li {
          list-style: none;
          a {
            text-decoration: none;
            color: #333;
            width: 100%;
            display: flex;
            height: 30px;
            align-items: center;
            justify-content: space-between;
            font-size: 14.5px;
            &:hover {
              color: rgb(42, 172, 215);
            }
            .total-post {
              font-size: 12.5px;
            }
          }
        }
      }
    }
    .row-2 {
      margin-top: 40px;
      border: 1px solid rgb(243, 243, 237);
      border-radius: 5px;
      padding: 20px;
      img {
        width: 100%;
      }
    }
  }
}
</style>