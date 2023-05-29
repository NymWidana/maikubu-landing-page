import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../components/Layout.vue";
import About from "../components/About.vue";
import Workshop from "../components/Workshop.vue";
import Contact from "../components/Contact.vue"

const routes = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/workshop",
    component: Workshop,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
