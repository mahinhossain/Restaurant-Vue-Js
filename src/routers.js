import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Signup from "./components/Signup.vue";
import Login from "./components/Login.vue";
import Restaurant from "./components/Restaurant.vue";
import RestaurantList from "./components/RestaurantList.vue";
import Update from "./components/Update.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/addrestaurant",
    name: "addrestaurant",
    component: Restaurant,
  },
  {
    path: "/restaurantList",
    name: "restaurantList",
    component: RestaurantList,
  },
  {
    path: "/restaurant/:id",
    name: "update",
    component: Update,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
