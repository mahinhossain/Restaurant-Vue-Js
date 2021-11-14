<template>
  <div class="mt-3 p-3 signup">
    <h3>Add Restaurant</h3>
    <div class="row mt-2">
      <div class="col-md-3"></div>
      <!-- name -->
      <div class="col-md-6 row">
        <label for="colFormLabel" class="col-sm-2 col-form-label col-form-label"
          >Name</label
        >
        <div class="col-sm-7">
          <input
            required
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
          >Adress</label
        >
        <div class="col-sm-7">
          <textarea
            rows="4"
            cols="50"
            class="form-control form-control"
            id="colFormLabel"
            placeholder="adress"
            v-model="form.adress"
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
          >Phone</label
        >
        <div class="col-sm-7">
          <input
            type="number"
            required
            class="form-control form-control"
            id="colFormLabel"
            placeholder="contact"
            v-model="form.contact"
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
          <button class="btn btn-light border w" @click.prevent="submitform()">
            Submit
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
        contact: "",
        adress: "",
      },
      listofrestu: "",
      error: [],
      formvalid: false,
        baseUrl: "https://jsonservrestuvus.herokuapp.com",
    };
  },
  methods: {
    async submitform() {
      console.log(`this.form`, this.form);
      await axios
        .post(`${this.baseUrl}/restaurant`, this.form)
        .then((res) => {
          if (res.status == 201) {
            this.$swal("success");
            // this.mounted();
            // localStorage.setItem("user-info", JSON.stringify(res.data));
            // this.$router.push({ name: "home" });
          }
        })
        .catch((err) => console.log(`err`, err));
    },
  },

  mounted() {
    let logedUser = localStorage.getItem("user-info");
    if (!logedUser) {
      this.$router.push({ name: "signup" });
    }
  },

  watch: {},
};
</script>

<style scoped>
.signup {
  justify-content: space-between;
}
</style>