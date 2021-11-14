<template>
  <div class="mt-3 p-3 signup">
    <h3>SignUp</h3>
    <div class="row mt-2">
      <div class="col-md-3"></div>
      <!-- name -->
      <div class="col-md-6 row">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label"
          >Name</label
        >
        <div class="col-sm-7">
          <input
            class="form-control form-control"
            id="colFormLabel"
            placeholder="Name"
            v-model="form.name"
          />
        </div>
      </div>
      <!-- end -->
      <div class="col-md-3"></div>
    </div>
    <div class="row mt-2">
      <div class="col-md-3"></div>
      <!-- name -->
      <div class="col-md-6 row">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label"
          >Email</label
        >
        <div class="col-sm-7">
          <input
            type="email"
            class="form-control form-control"
            id="colFormLabel"
            placeholder="Email"
            v-model="form.email"
          />
        </div>
      </div>
      <!-- end -->
      <div class="col-md-3"></div>
    </div>
    <div class="row mt-2">
      <div class="col-md-3"></div>
      <!-- name -->
      <div class="col-md-6 row">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label"
          >Password</label
        >
        <div class="col-sm-7">
          <input
            type="password"
            class="form-control form-control"
            id="colFormLabel"
            placeholder="Password"
            v-model="form.password"
          />
        </div>
      </div>
    </div>
    <!-- end -->
    <div class="col-md-3"></div>
    <!-- sssdsd -->
    <div class="row mt-2">
      <div class="col-md-3"></div>
      <!-- name -->
      <div class="col-md-6 row">
        <label
          for="colFormLabel"
          class="col-sm-2 col-form-label col-form-label"
        ></label>
        <div class="col-sm-7 d-flex justify-content-around">
          <button
            class="btn btn-success border btn-sm"
            @click.prevent="submitform()"
          >
            Submit
          </button>
          <button
            class="btn btn-secondary btn-sm border"
            @click.prevent="gotologin()"
          >
            Go to Login
          </button>
        </div>
      </div>
      <!-- end -->
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        email: "",
      },
      error: [],
      formvalid: false,
      baseUrl: "https://jsonservrestuvus.herokuapp.com",
    };
  },
  methods: {
    async submitform() {
      if (
        this.form.email.length < 1 ||
        this.form.password.length < 1 ||
        this.form.name.length < 1
      ) {
        this.$swal("Failed !", "", "error");
        return false;
      }
      await axios
        .post(`${this.baseUrl}/user`, this.form)
        .then((res) => {
          if (res.status == 201) {
            localStorage.setItem("user-info", JSON.stringify(res.data));

            this.$swal("success", "", "success");
            this.$router.push({ name: "home" });
          }
        })
        .catch((err) => console.log(`err`, err));
    },
    gotologin() {
      this.$router.push({ name: "login" });
    },
  },

  mounted() {
    let logedUser = localStorage.getItem("user-info");
    if (logedUser) {
      this.$router.push({ name: "home" });
    }
  },
};
</script>

<style scoped>
.signup {
  justify-content: space-between;
}
</style>