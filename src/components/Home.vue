<template>
  <h1>Welcome</h1>

  <h1 class="text-warning">{{ username }}</h1>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="mr-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button
        type="button"
        class="ml-2 mb-1 close"
        data-dismiss="toast"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">Hello, world! This is a toast message.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    let logedUser = localStorage.getItem("user-info");
    if (logedUser) {
      console.log(`logedUser`, logedUser);
      this.username = JSON.parse(logedUser).name;
      console.log(`this.username `, this.username);
    } else {
      this.$router.push({ name: "signup" });
    }
  },
};
</script>

<style>
</style>