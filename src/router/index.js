import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Demo from "../views/Demo.vue";
import Faq from '../views/Faq.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/guide",
    name: "FAQ",
    component: Faq,
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo
  },
  {
    path: "/faq",
    name: "FAQ",
    component: Faq,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
