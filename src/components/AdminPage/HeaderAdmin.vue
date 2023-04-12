<template>
  <div id="header">
    <box-icon
      class="menu-bar"
      name="menu"
      color="#333"
      size="24px"
      @click="setNavbarMenu"
    ></box-icon>
    <div class="box-profile">
      <box-icon
        class="icon"
        name="bell"
        color="#5F6A7A"
        size="19px"
        animation="tada-hover"
      ></box-icon>
      <box-icon
        class="icon"
        name="message-detail"
        color="#5F6A7A"
        size="19px"
        animation="tada-hover"
      ></box-icon>
      <img
        class="avatar"
        :src="profileData.avatar ? profileData.avatar : imageAvatarPath"
      />
    </div>
  </div>
</template>




<script>
import imageAvatar from "../../assets/images/avatar-none.webp";

export default {
  data() {
    return {
      imageAvatarPath: imageAvatar,
      profileData: null,
    };
  },
  created() {
    this.profileData = JSON.parse(sessionStorage.getItem("profileData"));
  },
  props: ["setNavbarMenu"],
};
</script>







<style scoped>
#wrapper-admin #header .menu-bar {
  cursor: pointer;
}

#header .box-profile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
}

#wrapper-admin #header .box-profile .avatar {
  width: 30px;
  border-radius: 50%;
}

#wrapper-admin #header .box-profile .icon {
  margin-right: 10px;
}
</style>