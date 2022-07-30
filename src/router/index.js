import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          title: "HomeView",
        },
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/AboutView.vue"),
        meta: {
          title: "About",
        },
      },
    ],
  },
];

// {
//   path: '/',
//   name: 'home',
//   component: HomeView
// },
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
// }

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
