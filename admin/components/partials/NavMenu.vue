<template>
  <ul :class="ulclass">
    <li :class="{ active: this.$route.path === '/' }">
      <nuxt-link to="/">
        <i class="fas fa-tachometer-alt"></i>Dashboard
      </nuxt-link>
    </li>
    <li :class="{ active: this.$route.path.indexOf('category') !== -1 }">
      <nuxt-link to="/category">
        <i class="fas fa-list"></i>Categories
      </nuxt-link>
    </li>

    <li :class="{ active: this.$route.path.indexOf('menu') !== -1 }">
      <nuxt-link to="/menu">
        <i class="fas fa-television"></i>Menu
      </nuxt-link>
    </li>
    <li :class="{ active: this.$route.path.indexOf('discount') !== -1 }">
      <nuxt-link to="/discount">
        <i class="fas fa-television"></i>Discount
      </nuxt-link>
    </li>
    <li :class="{ active: this.$route.path.indexOf('items') !== -1 }">
      <nuxt-link to="/item">
        <i class="fas fa-shopping-cart"></i>Items
      </nuxt-link>
    </li>

    <!-- <li>
      <a href="#"> <i class="fas fa-users"></i>Users</a>
    </li>
    <li>
      <a href="#"> <i class="fas fa-sign-out-alt"></i>Logout</a>
    </li> -->
  </ul>
</template>

<script>
export default {
  name: "nav-menu",
  props: ["ulclass"],
  mounted() {},
};
</script>

<style scoped>
</style>
