<template>
  <div class="page-wrapper">
    <mobile-header></mobile-header>

    <admin-sidebar></admin-sidebar>

    <div class="page-container">
      <admin-header></admin-header>

      <Nuxt />
    </div>
  </div>
</template>

<script>
import MobileHeader from "../components/partials/MobileHeader";
import AdminSidebar from "../components/partials/AdminSidebar";
import AdminHeader from "../components/partials/AdminHeader";

export default {
  components: { AdminHeader, AdminSidebar, MobileHeader },
  mounted() {
    document.head.appendChild(
      Object.assign(document.createElement("script"), {
        src: "/js/main.js",
        type: "text/javascript",
      })
    );

    this.checkUserLogin();
  },
  methods: {
    async checkUserLogin() {
      if (
        localStorage.getItem("auth_token") &&
        localStorage.getItem("auth_token") !== undefined
      ) {
        this.$axios.setHeader(
          "Authorization",
          "Bearer " + localStorage.getItem("auth_token")
        );

        try {
          const response = await this.$axios.$get("api/check-login");
          if (response.success !== 1) {
            this.handleLogout();
          }
        } catch (err) {
          this.handleLogout();
        }
      }
    },

    handleLogout() {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("is_authenticated");
      localStorage.removeItem("user_data");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
</style>
