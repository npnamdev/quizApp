<template>
  <div>
    <b-modal v-model="modalUpdate" size="lg" no-close-on-backdrop>
      <template #header>
        <div class="box-head-modal">
          Update User
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
              <input disabled v-model="email" id="email" type="text" />
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
              id="input-preview-update"
              hidden
            />
            <div class="box-right-top">
              <label for="input-preview-update">
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
              for="input-preview-update"
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
        <button class="btn-action" @click="handleUpdateUser">Save</button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";

export default {
  data() {
    return {
      modalUpdate: this.modalUpdateUser,
      username: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      role: "",
      imageFile: "",
      imagePreview: "",
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
  props: ["modalUpdateUser", "setModalUpdateUser", "dataUpdate"],
  methods: {
    previewImage(event) {
      const file = event.target.files[0];
      this.readFile(file);
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
      this.setModalUpdateUser(false);
    },

    async handleUpdateUser() {
      const user = {
        username: this.username,
        password: this.password,
        phone: this.phone,
        address: this.address,
        avatar: this.imageFile,
        role: this.role,
        id: this.dataUpdate._id,
      };

      if (user.username == "") {
        toast.error("Please Enter Username", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else if (user.password == "") {
        toast.error("Please Enter Password", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        await this.$store.dispatch("updateUser", {
          user,
          handleClone: this.handleClone,
        });
      }
    },
  },
  watch: {
    modalUpdateUser(newValue) {
      this.modalUpdate = newValue;
    },

    dataUpdate(newValue) {
      this.username = newValue.username;
      this.email = newValue.email;
      this.password = newValue.password;
      this.phone = newValue.phone;
      this.address = newValue.address;
      this.role = newValue.role;
      this.imagePreview = newValue.avatar;
    },
  },
};
</script>

