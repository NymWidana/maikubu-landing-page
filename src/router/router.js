import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../components/Layout.vue'
import About from '../components/About.vue'

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
  routes,
});

export default router;
