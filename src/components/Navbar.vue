<template>
  <nav class="navbar navbar-expand-lg navbar-light navBg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/addrestaurant" class="nav-link"
              >Add Restaurant</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/restaurantList" class="nav-link"
              >Restaurant List</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <button class="nav-link btn" @click="logout">Logout</button>
          </li>
          <li class="nav-item">
            <input
              type="text"
              placeholder="serach"
              class="form-control p-2"
              v-model="search"
              @input="handlesearch(search)"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loggeduser: "",
      search: null,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user-info");
      this.$router.push({ name: "login" });
      this.$swal("Logout success !", "", "success");
    },
    ...mapActions(["getproducts", "handledelete", "handlesearch"]),
  },

  mounted() {
    this.loggeduser = localStorage.getItem("user-info");
    console.log(`this.loggeduser`, this.loggeduser);
  },
};
</script>

<style scoped>
</style>