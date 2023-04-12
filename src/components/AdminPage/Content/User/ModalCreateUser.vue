<template>
  <div>
    <b-modal v-model="modalCreate" size="lg" no-close-on-backdrop>
      <template #header>
        <div class="box-head-modal">
          Add User
          <box-icon
            name="x"
            color="#867070"
            size="25px"
            class="icon-x"
            @click="handleClone"
          ></box-icon>
        </div>
      </template>
      <div class="content-modal">
        <div class="form-add">
          <div class="box-left">
            <div class="form-group">
              <label for="username">Username</label>
              <input v-model="username" id="username" type="text" />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="email" id="email" type="text" />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input v-model="password" id="password" type="password" />
            </div>

            <div class="form-group">
              <label for="phone">Phone</label>
              <input v-model="phone" id="phone" type="text" />
            </div>

            <div class="box-left-buttom">
              <div class="form-group dropdown">
                <label for="">Address</label>
                <b-dropdown
                  dropup
                  :text="address ? address : 'choose the city'"
                  menu-class="w-100"
                >
                  <b-dropdown-item
                    href="#"
                    v-for="item in addressItems"
                    :key="item"
                    @click="handleAddressClick(item)"
                  >
                    {{ item }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>

              <div class="form-group dropdown">
                <label for="">Role</label>
                <b-dropdown
                  dropup
                  :text="role ? role : 'choose the role'"
                  menu-class="w-100"
                >
                  <b-dropdown-item
                    href="#"
                    v-for="item in roleItems"
                    :key="item"
                    @click="handleRoleClick(item)"
                  >
                    {{ item }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
          <div class="box-right">
            <input
              type="file"
              @change="previewImage"
              id="input-preview"
              hidden
            />
            <div class="box-right-top">
              <label for="input-preview">
                <box-icon
                  size="18px"
                  color="#95a5a6"
                  name="folder-plus"
                ></box-icon>
                <span></span>
                <span
                  >{{ imagePreview ? "Change Images" : "Choose Photos" }}
                </span>
              </label>
              <button
                class="delete-images"
                :class="{ active: imagePreview }"
                @click="deleteImage"
              >
                <box-icon name="trash" size="17px" color="#95a5a6"></box-icon>
                <span>Delete Photos </span>
              </button>
            </div>
            <label
              class="box-right-buttom"
              for="input-preview"
              @dragenter.prevent
              @dragover.prevent
              @dragleave.prevent
              @drop.prevent="onDrop"
            >
              <img
                v-if="imagePreview"
                class="image-preview"
                :src="imagePreview"
              />
              <div v-else class="box-text-preview">
                <box-icon
                  class="icon-upload"
                  name="upload"
                  size="45px"
                  color="#bdc3c7"
                >
                </box-icon>
                <span class="text-browse"> Choose a photo or drag & drop </span>
                <span class="btn-browse">Browse</span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <template #footer>
        <button class="btn-action" @click="handleClone">Close</button>
        <button class="btn-action" @click="handleCreateUser">Save</button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import "../../../../assets/css/modalCreateUser.css";

import { toast } from "vue3-toastify";

export default {
  data() {
    return {
      modalCreate: this.modalCreateUser,
      username: "",
      password: "",
      email: "",
      phone: "",
      address: "",
      role: "",
      imageFile: null,
      imagePreview: null,

      roleItems: ["user", "admin"],
      addressItems: [
        "An Giang",
        "Bà Rịa – Vũng Tàu",
        "Bắc Giang",
        "Bắc Kạn",
        "Bạc Liêu",
        "Bắc Ninh",
        "Bến Tre",
        "Bình Định",
        "Bình Dương",
        "Bình Phước",
        "Bình Thuận",
        "Cà Mau",
        "Cần Thơ",
        "Cao Bằng",
        "Đà Nẵng",
        "Đắk Lắk",
        "Đắk Nông",
        "Điện Biên",
        "Đồng Nai",
        "Đồng Tháp",
        "Gia Lai",
        "Hà Giang",
        "Hà Nam",
        "Hà Nội",
        "Hà Tĩnh",
        "Hải Dương",
        "Hải Phòng",
        "Hậu Giang",
        "Hòa Bình",
        "Hưng Yên",
        "Khánh Hòa",
        "Kiên Giang",
        "Kon Tum",
        "Lai Châu",
        "Lâm Đồng",
        "Lạng Sơn",
        "Lào Cai",
        "Long An",
        "Nam Định",
        "Nghệ An",
        "Ninh Bình",
        "Ninh Thuận",
        "Phú Thọ",
        "Phú Yên",
        "Quảng Bình",
        "Quảng Nam",
        "Quảng Ngãi",
        "Quảng Ninh",
        "Quảng Trị",
        "Sóc Trăng",
        "Sơn La",
        "Tây Ninh",
        "Thái Bình",
        "Thái Nguyên",
        "Thanh Hóa",
        "Thừa Thiên Huế",
        "Tiền Giang",
        "TP Hồ Chí Minh",
        "Trà Vinh",
        "Tuyên Quang",
        "Vĩnh Long",
        "Vĩnh Phúc",
        "Yên Bái",
      ],
    };
  },
  props: ["modalCreateUser", "setModalCreateUser"],
  methods: {
    previewImage(event) {
      const file = event.target.files[0];
      this.readFile(file);
      event.target.value = null;
    },
    onDrop(event) {
      const file = event.dataTransfer.files[0];
      this.readFile(file);
    },
    readFile(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.imageFile = file;
      };
    },
    deleteImage() {
      this.imagePreview = null;
      this.imageFile = null;
    },

    handleAddressClick(addressValue) {
      this.address = addressValue;
    },

    handleRoleClick(roleValue) {
      this.role = roleValue;
    },

    handleClone() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.phone = "";
      this.address = "";
      this.role = "";
      this.imageFile = "";
      this.imagePreview = "";
      this.setModalCreateUser(false);
    },

    async handleCreateUser() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
        phone: this.phone,
        address: this.address,
        avatar: this.imageFile,
        role: this.role,
      };

      if (user.username == "") {
        toast.error("Please Enter Username", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else if (user.email == "") {
        toast.error("Please Enter Email", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else if (user.password == "") {
        toast.error("Please Enter Password", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        await this.$store.dispatch("addUser", {
          user,
          handleClone: this.handleClone,
        });
      }
    },
  },
  watch: {
    modalCreateUser(newValue) {
      this.modalCreate = newValue;
    },
  },
};
</script>

