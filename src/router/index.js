import { createWebHistory, createRouter } from "vue-router";
import store from "../store.js";
import HomePage from "../components/HomePage.vue"
import LoginPage from "../components/LoginPage.vue"
import CartPage from "../components/CartPage.vue"
import RegisterPage from "../components/RegisterPage.vue"
import PageNotFound from "../components/PageNotFound.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
     beforeEnter: (from) => {
          if (!store.state.userId ) {
              return { name: 'login', query: { nextUrl: from.fullPath }}
          }
      }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;