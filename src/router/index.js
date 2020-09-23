import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决重复点击导航路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(error => error);
}

const routes = [
  {
    path: '/',
    name: 'GT SCHOOL',
    component: () => import('@/views/home.vue'),
    meta: {
      isShowFooterNavList: true,
      indexInTabList: 0,
    }
  },
  //分类：user相关
  {
    path: '/user/about',
    name: 'about',
    component: () => import('@/views/user/aboutUs.vue'),
    meta: {
      isShowFooterNavList: true,
      indexInTabList: 1,
    }
  },
  {
    path: '/user/concatUs',
    name: 'concatUs',
    component: () => import('@/views/user/concatUs.vue'),
    meta: {
      isShowFooterNavList: true,
      indexInTabList: 2,
    }
  },
  {
    path: '/user/userCenter',
    name: 'userCenter',
    component: () => import('@/views/user/userCenter.vue'),
    meta: {
      isShowFooterNavList: true,
      indexInTabList: 3,
    }
  },
  {
    path: '/user/mySetting',
    name: 'mySetting',
    component: () => import('@/views/user/mySetting.vue')
  },
  {
    path: '/user/accountBalance',
    name: 'accountBalance',
    component: () => import('@/views/user/accountBalance.vue')
  },
  {
    path: '/user/payDetails',
    name: 'payDetails',
    component: () => import('@/views/user/payDetails.vue')
  },
  {
    path: '/user/addressDetail',
    name: 'address Detail',
    component: () => import('@/views/user/addressDetail.vue')
  },
  {
    path: '/user/addressList',
    name: 'address List',
    component: () => import('@/views/user/addressList.vue')
  },
  {
    path: '/user/login',
    name: 'login',
    component: () => import('@/views/user/login.vue')
  },
  {
    path: '/user/register',
    name: 'register',
    component: () => import('@/views/user/register.vue')
  },
  {
    path: '/user/myCoupons',
    name: 'myCoupons',
    component: () => import('@/views/user/myCoupons.vue')
  },
  {
    path: '/user/myIntergral',
    name: 'my Intergral',
    component: () => import('@/views/user/myIntergral.vue')
  },
  {
    path: '/user/password',
    name: 'password',
    component: () => import('@/views/user/password.vue')
  },
  {
    path: '/user/recharge',
    name: 'recharge',
    component: () => import('@/views/user/recharge.vue')
  },
  //分类：order相关
  {
    path: '/order/orderDetails',
    name: 'order Details',
    component: () => import('@/views/order/orderDetails.vue')
  },
  {
    path: '/order/orderList',
    name: 'order List',
    component: () => import('@/views/order/orderList.vue')
  },
  {
    path: '/order/orderDetails',
    name: 'order Details',
    component: () => import('@/views/order/orderDetails.vue')
  },
  //分类：goods相关
  {
    path: '/goods/schoolUniformList',
    name: 'school Uniform List',
    component: () => import('@/views/goods/schoolUniformList.vue')
  },
  {
    path: '/goods/search',
    name: 'search',
    component: () => import('@/views/goods/search.vue')
  },
  {
    path: '/goods/schoolList',
    name: 'school List',
    component: () => import('@/views/goods/schoolList.vue')
  },
  {
    path: '/goods/shoppingCart',
    name: 'shopping Cart',
    component: () => import('@/views/goods/shoppingCart.vue')
  },
  {
    path: '/goods/goodsDetails',
    name: 'goods Details',
    component: () => import('@/views/goods/goodsDetails.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


Vue.use(VueRouter);

router.beforeEach((to, from, next) => {
  // console.info('to', to);
  // console.info('from', from);

  next();
})

export default router
