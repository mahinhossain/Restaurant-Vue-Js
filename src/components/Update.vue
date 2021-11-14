<template>
  <div class="mt-3 p-3 signup">
    <h3>Update Restaurant</h3>
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
            required
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
            required
            type="number"
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
          <button
            class="btn btn-success border w"
            @click.prevent="submitform()"
          >
            Update
          </button>
        </div>
      </div>
      <!-- end -->
      <div class="col-md-3"></div>
    </div>
  </div>
  <div></div>
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
      id: "",
      baseUrl: "https://jsonservrestuvus.herokuapp.com",
    };
  },
  methods: {
    async submitform() {
      this.id = this.$route.params.id;
      await axios
        .put(`${this.baseUrl}/restaurant/` + this.id, this.form)
        .then((res) => {
          console.log(`res put`, res);

          if (res.status == 200) {
            this.$swal("Updated ", res.data.name, "success");
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
    this.id = this.$route.params.id;

    axios
      .get(`${this.baseUrl}/restaurant/` + this.id)
      .then((res) => {
        this.form = res.data;
        console.log(`form`, this.form);
      })
      .catch((err) => console.log(`err`, err));
  },

  watch: {},
};
</script>

<style scoped>
.signup {
  justify-content: space-between;
}
</style>
