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
            @click="setModalCreateUser(false)"
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
              <div class="form-group">
                <label for="">Address</label>
                <button>
                  Address
                  <box-icon
                    size="20px"
                    color="#95a5a6"
                    name="chevron-down"
                  ></box-icon>
                </button>
                <ul v-show="showDropdown" class="dropdown-content">
                  <li aria-disabled="" class="all">All Role</li>
                  <li
                    v-for="(item, index) in items"
                    :key="index"
                    v-on:click="selectItem(index)"
                  >
                    <span class="list-drop"> {{ item }}</span>
                  </li>
                </ul>
              </div>

              <div class="form-group">
                <label for="">Role</label>
                <button>
                  Role
                  <box-icon
                    size="20px"
                    color="#95a5a6"
                    name="chevron-down"
                  ></box-icon>
                </button>
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
        <p>{{ username }}</p>
        <p>{{ password }}</p>
        <p>{{ email }}</p>
        <p>{{ phone }}</p>
        <p>{{ imageFile }}</p>
        <button class="btn-action" @click="setModalCreateUser(false)">
          Close
        </button>
        <button class="btn-action" @click="setModalCreateUser(false)">
          Save
        </button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import "../../../../assets/css/modalCreateUser.css";

export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      phone: "",
      modalCreate: this.modalCreateUser,
      imagePreview: null,
      imageFile: null,
      selectedItem: "",
    };
  },
  props: ["modalCreateUser", "setModalCreateUser"],
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

    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectItem(index) {
      this.selectedItem = this.items[index];
      this.showDropdown = false;
    },
  },
  watch: {
    modalCreateUser(newValue) {
      this.modalCreate = newValue;
    },
  },
};
</script>

