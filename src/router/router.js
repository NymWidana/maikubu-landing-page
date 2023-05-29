import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import About from "./../components/About.vue"
import Homepage from "./../App.vue";

const routes = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
