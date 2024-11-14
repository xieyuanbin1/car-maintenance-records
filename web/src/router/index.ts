import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {Home} from "../views/home/Home";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: []
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由前缀
// 前置逻辑校验等
/*router.beforeEach((to, _from, next) => {
    if (to.path === '/login') next()
    else {
        if (sessionStorage.getItem('token')) next()
        else router.replace('/login')
    }
    // next()
})*/
