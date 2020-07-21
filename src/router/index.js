import Vue from "vue";
import VueRouter from "vue-router";
// import { validate } from "../utils/validatePermission";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../components/login/Login.vue"),
  },
  {
    path: "/sidebar",
    name: "SideBar",
    component: () => import("../components/sidebar/SideBar.vue"),
    redirect: "/messages",
    children: [
      {
        path: "/messages",
        component: () => import("../components/messages/Messages.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (localStorage.getItem("user")) {
//       switch (to.path) {
//         case "/route1":
//           next(validate("MODULE/ACTION"));
//           break;
//         case "/route2":
//           next(validate("MODULE/ACTION"));
//           break;
//         case "/route3":
//           next(validate("MODULE/ACTION"));
//           break;
//         default:
//           next();
//           return;
//       }
//     } else {
//       next("/");
//     }
//   } else {
//     next();
//   }
// });
export default router;
