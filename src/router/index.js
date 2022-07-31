import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import SimplePipeline from "@/views/SimplePipeline.vue";
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
    path: "/simplepipeline",
    name: "SimplePipeline",
    component: SimplePipeline,
  }, 
  {
    path: "/faq",
    name: "FAQ",
    component: Faq,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
