<template>
  <div class="featured">
    <router-link class="image" to="/">
      <img :src="imgPath" alt="" />
    </router-link>
    <div class="wp-text">
      <router-link class="title" to="/">
        OTP Verification Form in HTML CSS & JavaScript
      </router-link>
      <p class="description">
        If you are seeking a form that is designed for verifying one-time
        passwords and want to learn how to create it in HTML CSS & JavaScript
        then this blog could meet you demands.
      </p>
      <div class="wp-info">
        <router-link class="btn-detail" to="/">
          <span>See details</span>
          <box-icon
            name="rocket"
            color="#333"
            size="17px"
            animation="tada"
          ></box-icon
        ></router-link>
        <div class="time">
          <box-icon
            class="icon"
            color="#333"
            size="13.5px"
            name="time-five"
          ></box-icon>
          <span>April 17, 2023</span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import img10 from "../../../../assets/images/img-10.jpg";
export default {
  data() {
    return {
      imgPath: img10,
    };
  },
};
</script>



<style scoped lang="scss">
.featured {
  width: 35%;
  border: 1px solid #eee8e8;
  border-radius: 5px;
  background-color: #fff;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;

  .image {
    width: 100%;
    height: 190px;
    border-radius: 5px;
    text-decoration: none;
    overflow: hidden;
    img {
      width: 100%;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
  }
  .wp-text {
    padding: 0px 5px;
  }
  .title {
    margin-top: 15px;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    height: 25px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* số dòng hiển thị */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 15px;
    transition: all 0.1s ease-in-out;
    &:hover {
      color: rgb(12, 132, 184);
    }
  }

  .description {
    height: 45px;
    overflow: hidden;
    margin-top: 5px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* số dòng hiển thị */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #5e5d5d;
  }

  .wp-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn-detail {
      border: 1px solid #ede5e5;
      background-color: #fff;
      padding: 0px 10px;
      height: 38px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      cursor: pointer;
      text-decoration: none;
      color: #2d2c2c;
      &:hover {
        background-color: #f5f0f0;
      }
      span {
        margin-right: 5px;
      }
    }
    .time {
      font-size: 13px;
      padding-right: 5px;
      height: 38px;
      display: flex;
      align-items: center;
      .icon {
        margin-top: -8px;
        margin-right: 3px;
      }
    }
  }
}
</style>