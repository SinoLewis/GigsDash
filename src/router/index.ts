import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/settings",
    // name: "Settings",
    component: () => import("@/views/Settings.vue"),
  },
  {
    path: "/stats",
    // name: "Stats",
    component: () => import("@/views/Stats.vue"),
  },
  {
    path: "/tables",
    // name: "Tables",
    component: () => import("@/views/Tables.vue"),
  },
  {
    path: "/maps",
    // name: "Maps",
    component: () => import("@/views/Maps.vue"),
  },
  {
    path: "/testin",
    // name: "Testin",
    component: () => import("@/views/Testin.vue"),
  },
  // {
  //   path: '/tabs/',
  //   component: TabsPage,
  //   children: [
  //     {
  //       path: '',
  //       redirect: '/tabs/tab1'
  //     },
  //     {
  //       path: 'tab1',
  //       component: () => import('@/views/Tabs1Page.vue')
  //     },
  //     {
  //       path: 'tab2',
  //       component: () => import('@/views/Tab2Page.vue')
  //     },
  //     {
  //       path: 'tab3',
  //       component: () => import('@/views/Tab3Page.vue')
  //     }
  //   ]
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
