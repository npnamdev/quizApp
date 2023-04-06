<template>
  <div class="form-login-admin">
    <div class="form-group">
      <label for="email">Email</label>
      <input
        v-model="email"
        type="text"
        id="email"
        @keydown.enter="handleLoginAdmin"
        ref="email"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        v-model="password"
        type="password"
        id="password"
        @keydown.enter="handleLoginAdmin"
      />
    </div>
    <button @click="handleLoginAdmin">Login</button>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    this.$refs.email.focus();

    const token = sessionStorage.getItem("token");
    if (token) {
      sessionStorage.removeItem("token");
      this.$router.push("/login");
    }
  },
  methods: {
    async handleLoginAdmin() {
      let auth = {
        email: this.email,
        password: this.password,
      };

      //   this.$router.push("/admin");
      if (auth.email == "") {
        toast.error("Please Enter Email!", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else if (auth.password == "") {
        toast.error("Please Enter Password!", {
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        await this.$store.dispatch("loginAdmin", {
          auth,
          $router: this.$router,
        });
      }
    },
  },
};
</script>
