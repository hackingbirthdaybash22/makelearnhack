import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Demo from "../views/Demo.vue";
import Card from "../views/Card.vue";
import GettingStarted from "../views/GettingStarted.vue";
import HappyBirthday from "../views/HappyBirthday.vue";
import SimplePipeline from "@/views/SimplePipeline.vue";
import Faq from "../views/Faq.vue";
import NotFound from "../views/NotFound.vue";

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
    component: Demo,
  },
  {
    path: "/card",
    component: Card,
  },
  {
    path: "/gettingstarted",
    component: GettingStarted,
  },
  {
    path: "/happybirthday",
    component: HappyBirthday,
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
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
