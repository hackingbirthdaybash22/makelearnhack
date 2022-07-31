import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Demo from "../views/Demo.vue";
import Card from "../views/Card.vue";
import GettingStarted from "../views/GettingStarted.vue";
import Faq from "../views/Faq.vue";

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
    children: [
      {
        path: "card",
        component: Card,
      },
      {
        path: "gettingstarted",
        component: GettingStarted,
      },
    ],
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
