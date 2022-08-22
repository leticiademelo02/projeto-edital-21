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
        component: () => import("@/views/HomeView/HomeView.vue"),
        meta: {
          title: "HomeView",
        },
      },
      {
        path: "/cursos",
        name: "cursos",
        component: () => import("@/views/CursoView/CursoView.vue"),
        meta: {
          title: "Cursos",
        },
      },

      {
        path: "/modulos/:id",
        name: "modulos",
        component: () => import("@/views/ModuloView/ModuloView.vue"),
        meta: {
          title: "modulos",
        },
      },
      {
        path: "/parceiros",
        name: "parceiros",
        component: () => import("@/views/ParceirosView/ParceirosView.vue"),
        meta: {
          title: "Parceiros",
        },
      },
      {
        path: "/transparencia",
        name: "transparencia",
        component: () =>
          import("@/views/TransparenciaView/TransparenciaView.vue"),
        meta: {
          title: "Transparencia",
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
