<template>
  <div class="position-sticky z1000 overflow-hidden" style="top: 0;">
    <!-- pc和pad 的 头部 -->
    <header class="d-none d-sm-block m-b-40 header-modules">
      <div class="position-sticky z400 header">
        <div class="container">
          <!-- 头--顶部 -->
          <ul class="row align-items-center justify-content-end top-box">
            <li class="position-relative">
              <a
                href="javaScript: void(0);"
                class="d-inline-block theme-font-color top-item"
                @click="$router.push(navListObj.login.url)"
              >Login</a>
            </li>
            <li class="position-relative">
              <a
                href="javaScript: void(0);"
                class="d-inline-block theme-font-color top-item"
                @click="$router.push(navListObj.register.url)"
              >Register</a>
            </li>
            <li class="position-relative">
              <a
                href="javaScript: void(0);"
                class="d-flex align-items-center theme-font-color top-item"
                @click="$router.push(navListObj.shoppingCart.url)"
              >
                <span>(0)</span>
                <img
                  src="~@/assets/icon/icon-shopCart.png"
                  alt="goods cart"
                  class="iconfont"
                  style="margin-left: 0.2rem;"
                />
              </a>
            </li>
          </ul>
          <!-- 头--底部 -->
          <div class="d-flex align-items-stretch footer-box">
            <div class="col-3 d-none d-xl-block bg-white" style="max-width: 22%;">
              <div class="position-relative h-100">
                <!-- <img
                  src="~@/assets/icon/icon-bigLogo.png"
                  class="position-absolute"
                  style="left:1rem; right: 0; bottom: 0;"
                />-->
                <div
                  class="position-absolute"
                  style="left:0.75rem; right: 0.75rem; bottom: -0.1rem; top:-1.4rem;"
                >
                  <img src="~@/assets/icon/icon-bigLogo.png" alt class="imgCover" />
                </div>
              </div>
            </div>
            <div class="col">
              <ul class="position-relative row footer-center">
                <li v-for="(item, index) in navListObj" :key="'navListObj' + index">
                  <a
                    href="javaScript: void(0);"
                    class="d-inline-block nav-item"
                    v-if="item.iconUrl"
                    @click="$router.push(item.url);"
                  >{{item.name}}</a>
                </li>
              </ul>
            </div>
            <!-- <a class="footer-right d-none d-md-block">
              <p class="d-flex nav-item">
                <img src="~@/assets/icon/icon-facebookl.png" alt="face book" class="iconfont" />
                <span style="letter-spacing: 0.2ex;">(02)9550 1289</span>
              </p>
            </a>-->
          </div>
        </div>
      </div>
    </header>

    <!-- phone的头部 -->
    <section class="d-sm-none com-header">
      <ul
        class="fixed-top z400 theme-bg-color d-flex align-items-center ch-list"
        @click.stop="pageScrollToTop();"
      >
        <li class="m-l-10 iconfont color-f" @click.stop="$router.go(-1)" v-if="!isShowTurnBackBtn">
          <img src="~@/assets/icon/icon-back-deep.png" alt="search" class="w-100 h-100" />
        </li>

        <li class="pos-ac text-center font-weight-bolder color-f">{{pageName}}</li>
        <li class="m-l-auto iconfont color-f" @click.stop="$router.push(navListObj.search.url)">
          <img src="~@/assets/icon/icon-search-white.png" alt="search" class="w-100 h-100" />
        </li>
        <li class="m-h-10 iconfont color-f" @click.stop="$router.push(navListObj.shoppingCart.url)">
          <img src="~@/assets/icon/icon-shopCart-white.png" alt="shop cart" class="imgCover" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    navListObj: {
      type: Object
    }
  },
  data() {
    return {
      pageName: "GT SCHOOL",
      isShowTurnBackBtn: true
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "rotuerChange"
  },
  methods: {
    //改变当前页面的名字
    rotuerChange() {
      const _$route = this.$route;
      const _routeName = _$route.name;

      const isShowFooterNavList = _$route.meta.isShowFooterNavList; //tab栏的页面就不显示返回按钮，跟app做法一样
      const _isShowTurnBackBtn = this.isShowTurnBackBtn;

      _isShowTurnBackBtn !== isShowFooterNavList &&
        (this.isShowTurnBackBtn = !!isShowFooterNavList);
      this.pageName = _routeName.toUpperCase(); //改变当前页面的名字

    },

    //点击顶部导航，页面滚动到顶部
    pageScrollToTop() {
      const _window = window || (this.window = window);

      _window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// pad 和 pc 的头部---------------------------------------

.header-modules .header {
  background-color: #fff;
  top: 0;
}
.header-modules .top-box .top-item {
  line-height: 2.25rem;
  padding: 0 0.8rem;
  font-size: 0.8rem;
  letter-spacing: 0.2ex;
  font-weight: bold;
}
.header-modules .top-box .top-item::after {
  position: absolute;
  z-index: 100;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  content: "";
  display: block;
  width: 2px;
  height: 30%;
  background-color: #365a99;
}
.header-modules .top-box li:last-child .top-item::after {
  display: none;
}
/* <!-- 头--底部 --> */
.header-modules .footer-box {
  /* margin: 0 -0.5rem; */
  /* background-color: red; */
}
.header-modules .footer-box .footer-center::after {
  position: absolute;
  z-index: -1;
  top: 0;
  right: -100%;
  left: -100%;
  content: "";
  display: block;
  height: 100%;
  background-color: #365a99;
}
.header-modules .footer-box .footer-left {
  z-index: 100;
  top: -1.5rem;
  left: 0;
  width: 12rem;
  height: 4.5rem;
}
.header-modules .footer-box .footer-left::after {
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 -0.5rem;
  content: "";
  display: block;
  background-color: #fff;
}
.header-modules .footer-box .nav-item {
  padding: 0 1rem;
  line-height: 3rem;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.2ex;
  color: #fff;
}
.header-modules .footer-box .nav-item .iconfont {
  margin-right: 0.75rem;
  width: 1.4rem;
  height: 1.4rem;
}

// phone的头部---------------------------------------

/* 公用--头部 */
.com-header {
  height: 2.25rem;
}
.com-header .ch-list {
  height: 2.25rem;
}
.com-header .ch-list .cl-item {
  line-height: 2.25rem;
}

/* 公用--带搜索头部 */
.com-header-nav-box {
  height: 2rem;
}
.com-header-nav {
  height: 2rem;
}
.com-header-nav .center-input {
  height: 1.5rem;
  background: rgba(242, 242, 242, 1);
  border-radius: 0.75rem;
}
.com-header-nav .center-input .ci-input {
  height: 1.5rem;
  background: transparent;
}
.com-header-nav .center-input .ci-input::-webkit-input-placeholder {
  color: #fff;
}
</style>