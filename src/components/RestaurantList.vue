<template>
  <div>
    <!-- {{ listofrestu }} -->
    <!-- <input type=" text" placeholder="sercg" v-model="search" /> -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Contact</th>
          <th scope="col">Address</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listofrestu" :key="item.name">
          <th scope="row">{{ item.id }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.contact }}</td>
          <td>{{ item.adress }}</td>
          <td class="d-flex justify-content-around">
            <button class="btn btn-success btn-sm">
              <router-link
                class="text-white text-decoration-none"
                :to="'/restaurant/' + item.id"
                >Update</router-link
              >
            </button>

            <button
              class="btn btn-danger btn-sm"
              @click="handledelete(item.id)"
            >
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import axios from "axios";
export default {
  data() {
    return {
      listofrestu: "",
      search: "",
      baseUrl: "https://jsonservrestuvus.herokuapp.com",
    };
  },

  methods: {
    loadData() {
      axios
        .get(`${this.baseUrl}/restaurant`)
        .then((res) => {
          if (res.status == 200) {
            this.listofrestu = res.data;
          }
        })
        .catch((err) => console.log(`err`, err));
    },

    handledelete(id) {
      // this.listofrestu.splice(index, 1);

      axios
        .delete(`${this.baseUrl}/restaurant/` + id)
        .then((res) => {
          if (res.status == 200) {
            this.loadData();
          }
        })
        .catch((err) => console.log(`err`, err));
    },

    checkLoggin() {
      let logedUser = localStorage.getItem("user-info");
      if (!logedUser) {
        this.$router.push({ name: "signup" });
      }
    },
  },

  mounted() {
    this.checkLoggin();
    this.loadData();
  },

  computed: {
    console: () => console,
    ...mapGetters(["mysearxh"]),

    searchBlog: function () {
      return this.listofrestu.filter((item) => {
        if (this.mysearxh.length > 0) {
          return item.name.toLowerCase().includes(this.mysearxh.toLowerCase());
        } else {
          return item;
        }
      });
    },
  },
};
</script>

<style></style>
