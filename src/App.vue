<template>
  <div id="app">
    <!-- 顶部导航 -->
    <HeaderNav :navListObj="navListObj"></HeaderNav>

    <!-- 中间的显示区域 -->
    <div>
      <router-view />
    </div>

    <!-- 顶部底部导航 -->
    <footerNav :navListObj="navListObj"></footerNav>
  </div>
</template>

<script>
import HeaderNav from "@/components/headerNav.vue";
import footerNav from "@/components/footerNav.vue";

export default {
  components: {
    HeaderNav,
    footerNav
  },
  data() {
    return {
      navListObj: {
        //主要的导航
        home: {
          name: "Home",
          index: 0,
          url: "/",
          iconUrl: require("@/assets/icon/icon-home.png"),
          iconUrl_active: require("@/assets/icon/icon-home-active.png")
        },
        about: {
          name: "About",
          index: 1,
          url: "/user/about",
          iconUrl: require("@/assets/icon/icon-aboutUs.png"),
          iconUrl_active: require("@/assets/icon/icon-aboutUs-active.png")
        },
        concatUs: {
          name: "Contact",
          index: 2,
          url: "/user/concatUs",
          iconUrl: require("@/assets/icon/icon-concatUs.png"),
          iconUrl_active: require("@/assets/icon/icon-concatUs-active.png")
        },
        userCenter: {
          name: "UserCenter",
          index: 3,
          url: "/user/userCenter",
          iconUrl: require("@/assets/icon/icon-per.png"),
          iconUrl_active: require("@/assets/icon/icon-per-active.png")
        },
        // 其他导航
        login: {
          name: 'Login',
          url: '/user/login'
        },
        register: {
          name: 'Register',
          url: '/user/register'
        },
        shoppingCart: {
          name: 'shoppingCart',
          url: '/goods/shoppingCart'
        },
        search: {
          name: 'search',
          url: '/goods/search'
        },
      }
    };
  }
};
</script>

<style lang="scss">
</style>
