import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import ("@/views/HomePage")
    },

    {
        name: "RegisterPage",
        path: "/register",
        component: () => import ("@/views/RegisterPage")
    },

    {
        name: "LoginPage",
        path: "/login",
        component: () => import ("@/views/LoginPage")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

router.beforeEach((to, from, next) => {
    const authRequiredRoutes=["HomePage"]
    const _isAuthenticated = store.getters._isAuthenticated

     if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) next();
    else next({ name: "LoginPage" });
  } else {
    next();
  }
       
});

export default router;