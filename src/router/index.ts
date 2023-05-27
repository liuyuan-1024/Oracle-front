import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/Home.vue';
import LoginView from '@/views/login/Login.vue';
import WorldView from '@/views/world/World.vue';
import MineView from '@/views/mine/Mine.vue';

const routes = [
  {
    // 登录
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { title: '登录', auth: false, keepAlive: false },
  },
  {
    // 主页
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: '主页', auth: true, keepAlive: false },
  },
  {
    // 世界
    path: '/world',
    name: 'World',
    component: WorldView,
    meta: { title: '世界', auth: true, keepAlive: false },
  },
  {
    // 我的
    path: '/mine/:userId',
    name: 'Mine',
    component: MineView,
    meta: { title: '我的', auth: true, keepAlive: false },
  },
];

// router对象
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // return 期望滚动到哪个的位置, false原位置
    return false;
  },
});

// 全局前置路由守卫
// router对象在跳转页面前 to:去哪里 from:来自哪里 next:函数, 用于放行路由, 也能入参,可以改变放行路径
router.beforeEach((to, from, next) => {
  // 判断to是否需要权限
  if (to.meta.auth) {
    // 需要权限
    next();
  } else {
    // 不需要权限
    next();
  }
});

// 全局后置路由守卫
router.afterEach((to) => {
});

export default router;
