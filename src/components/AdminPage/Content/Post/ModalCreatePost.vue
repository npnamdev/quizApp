<template>
  <div>
    <b-modal
      v-model="modalCreate"
      scrollable
      title="Overflowing Content"
      size="lg"
      no-close-on-backdrop
    >
      <template #header>
        <div class="box-head-modal">
          Add Post
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
        <div class="form-add-post">
          <div class="form-group">
            <label for="title">Title</label>
            <textarea v-model="title" id="title"></textarea>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea v-model="description" id="description"></textarea>
          </div>
          <div class="form-group">
            <label for="content">Content</label>
            <ckeditor
              :editor="editor"
              v-model="contents"
              :config="editorConfig"
            />
          </div>
          <div class="form-group">
            <label for="">Category</label>
            <b-dropdown
              :text="category ? category : 'choose the Category'"
              menu-class="w-100"
            >
              <b-dropdown-item
                href="#"
                v-for="item in $store.state.categorys.categorys"
                :key="item._id"
                @click="handleCategoryClick(item.name, item._id)"
              >
                {{ item.name }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="box-images">
            <input
              type="file"
              @change="previewImage"
              id="input-preview-post"
              hidden
            />
            <div class="box-image-top">
              <label for="input-preview-post">
                <box-icon
                  size="18px"
                  color="#95a5a6"
                  name="folder-plus"
                ></box-icon>
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
              for="input-preview-post"
              @dragenter.prevent
              @dragover.prevent
              @dragleave.prevent
              @drop.prevent="onDrop"
            >
              <img
                v-if="imagePreview"
                class="image-preview-post"
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
        <button class="btn-action" @click="handleCreatePost">Save</button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import "../../../../assets/css/modalCreateUser.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast } from "vue3-toastify";

export default {
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "italic",
          "link",
          "|",
          "bulletedList",
          "numberedList",
          "|",
          "insertTable",
          "|",
          //   "imageUpload",
          "undo",
          "redo",
        ],
      },
      modalCreate: this.modalCreatePost,
      title: "",
      description: "",
      contents: "",
      category: "",
      categoryId: "",
      imageFile: null,
      imagePreview: null,
    };
  },
  props: ["modalCreatePost", "setModalCreatePost"],
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

    handleCategoryClick(newCategory, newCategoryId) {
      this.category = newCategory;
      this.categoryId = newCategoryId;
    },

    handleClone() {
      this.title = "";
      this.description = "";
      this.contents = "";
      this.category = "";
      this.imageFile = "";
      this.imagePreview = "";
      this.setModalCreatePost(false);
    },

    async handleCreatePost() {
      const post = {
        title: this.title,
        description: this.description,
        content: this.contents,
        category: this.categoryId,
        image: this.imageFile,
      };

      if (post.title == "") {
        toast.error("Please Enter Title", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else if (post.category == "") {
        toast.error("Please Enter Category", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        await this.$store.dispatch("addPost", {
          post,
          handleClone: this.handleClone,
        });
      }
    },
  },
  watch: {
    modalCreatePost(newValue) {
      this.modalCreate = newValue;
    },
  },
};
</script>


<style >
.form-add-post .form-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.form-add-post .form-group label {
  margin: 5px 0px;
}

.form-add-post .form-group textarea {
  border: 1px solid #e3dcdc;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  font-size: 14px;
}
.form-add-post .form-group textarea#title {
  height: 65px;
}

.form-add-post .form-group textarea#description {
  height: 80px;
}

.ck {
  font-size: 14px;
  outline: none;
  border-radius: 5px;
}
.box-image-top {
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
}

.box-image-top label {
  background-color: #fff;
  border-radius: 5px;
  height: 35px;
  border: 1px solid #f2eded;
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: center;
  font-size: 13px;
}

.box-image-top label:hover {
  background-color: #faf9f9;
}

.box-image-top label span {
  padding-left: 5px;
}

.box-image-top button.delete-images {
  height: 35px;
  width: 150px;
  border: 1px solid #f2eded;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 13px;
  background-color: #f5f9fa;
  color: #b1afaf;
  pointer-events: none;
  cursor: no-drop;
  margin-left: 20px;
}

.box-image-top button.delete-images:hover {
  background-color: #faf9f9;
}

.box-image-top button.delete-images span {
  padding-left: 5px;
}

.box-image-top button.delete-images.active {
  background-color: #fff;
  color: #747171;
  cursor: pointer;
  pointer-events: auto;
}

.box-image-top button.delete-images.active:hover {
  background: #f5f9fa;
}

.image-preview-post {
  width: 35%;
}

.btn-group {
  border: none;
}

.btn-group button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff !important;
  width: 200px;
  height: 37px;
  border-radius: 5px;
  border: 1px solid #f2eded !important;
  outline: none;
  padding: 0px 10px;
  font-size: 13px;
  color: #747171 !important;
}

.btn-group button:hover {
  background-color: #fff;
  color: #747171;
  border: 1px solid #f2eded;
}
</style>

