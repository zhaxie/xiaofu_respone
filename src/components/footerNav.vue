<template>
  <div v-if="isShowFooterNavList === true">
    <!-- 响应式：大屏幕 -->
    <footer class="d-none d-sm-block overflow-hidden">
      <!-- <footer class="d-none overflow-hidden d-sm-block"> -->
      <div class="position-relative z100 container m-t-40 footer-xl-nav">
        <ul class="row">
          <li class="col-4 nav-item">
            <ul class="item-list" style="margin-top: -0.5rem;">
              <li class="href-item">
                <a href class="href">HOME</a>
              </li>
              <li class="href-item">
                <a href class="href">ABOUT</a>
              </li>
              <li class="href-item">
                <a class="href">SERVERS</a>
              </li>
              <li class="href-item">
                <a href class="href">School Uniforms</a>
              </li>
              <li class="href-item">
                <a href class="href">Buy for your School</a>
              </li>
              <li class="href-item">
                <a href class="href">Online Stores</a>
              </li>
              <li class="href-item">
                <a href class="href">Sports Team Uniforms</a>
              </li>
              <li class="href-item">
                <a href class="href">Custom Made</a>
              </li>
              <li class="href-item">
                <a href class="href">Design Your Uniforms</a>
              </li>
              <li class="href-item">
                <a href class="href">USER CENTTER</a>
              </li>
              <li class="href-item">
                <a href class="href">CONTACT</a>
              </li>
            </ul>
          </li>
          <li class="col-4 nav-item">
            <ul class="item-list">
              <li class="href-item">
                <a href class="href">HEAD OFFIICE</a>
              </li>
              <li class="txt-item">
                <span class="txt">35 Shirlow Street Marrickville 2204 NSW</span>
                <span class="tel">Phone: (02) 9550-1289</span>
                <a class="href">General enquires</a>
                <a href class="href">info@gtschool.com.au</a>
              </li>
              <li class="txt-item">
                <a class="href">Account enquires</a>
                <a href class="href">accounts@ozsports.net.au</a>
              </li>
            </ul>
          </li>
          <li class="col-4 nav-item">
            <ul class="item-list">
              <li class="href-item">
                <a href class="href">CENTRAL COAST BRANCH</a>
              </li>
              <li class="txt-item">
                <span class="txt">Shop 10 Ebbtide Mall The Entrance 2261 NSW</span>
                <span class="tel">Phone: (02) 4332-1570</span>
                <a class="href">General enquires</a>
                <a href class="href">info@gtschool.com.au</a>
              </li>
              <li class="txt-item">
                <a class="href">Account enquires</a>
                <a href class="href">accounts@ozsports.net.au</a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-flex align-items-center justify-content-center customer-server">
          <span class="text">CUSTOMER SERVICE CALL OR TEXT: 0416 119 119</span>
          <img src="~@/assets/icon/icon-facebookBig.png" alt class="icon" />
        </div>
      </div>
    </footer>
    <!-- 响应式：小屏幕 -->
    <footer class="d-sm-none com-header">
      <!-- 公用-底部导航 -->
      <footer class="footer-sm-nav">
        <ul class="row fixed-bottom bg-white cf-list">
          <li
            class="col d-flex h-100 animated"
            :class="activeIndex_footerNav === item.index ? 'active bounceIn' : ''"
            v-for="(item, key) in footerNavListObj"
            :key="'footerNavListObj' + key"
            @click="$router.push(item.url);"
          >
            <div href class="d-block m-auto">
              <div class="m-auto iconfont">
                <img
                  :src="activeIndex_footerNav === item.index ? item.iconUrl_active : item.iconUrl"
                  alt="urlIcon"
                  class="w-100 h-100"
                />
              </div>
              <p class="text-center txt-active">{{item.name}}</p>
            </div>
          </li>
        </ul>
      </footer>
    </footer>
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
      footerNavListObj: {},
      isShowFooterNavList: false,
      activeIndex_footerNav: ""
    };
  },
  mounted() {
    this.filterOutFooterNavListObj();
  },
  watch: {
    $route: "showFooterNav_byRouterMeta"
  },
  methods: {
    //过滤出小屏幕的底部导航
    filterOutFooterNavListObj() {
      const _navListObj = this.navListObj;
      let _footerNavListObj = {};

      for (let key in _navListObj) {
        let item = _navListObj[key];
        item.iconUrl !== undefined && (_footerNavListObj[key] = item);
      }

      this.footerNavListObj = _footerNavListObj;
    },

    //根据路由meta元信息来判断是否要显示底部的导航条
    showFooterNav_byRouterMeta() {
      const _$route = this.$route;
      const _$route_isShowFooterNavList = _$route.meta.isShowFooterNavList;

      this.isShowFooterNavList !== _$route_isShowFooterNavList &&
        (this.isShowFooterNavList = !!_$route_isShowFooterNavList);

      if (_$route_isShowFooterNavList === true) {
        this.activeIndex_footerNav = _$route.meta.indexInTabList;
      }

    }
  }
};
</script>

<style lang="scss" scoped>
/* ------------------
    通用---底部
------------------- */
.footer-xl-nav {
  padding: 2rem 0;
}
.footer-xl-nav::after {
  position: absolute;
  z-index: -1;
  top: 0;
  right: -100%;
  bottom: 0;
  left: -100%;
  content: "";
  display: block;
  background-color: rgb(1, 5, 32);
}
.footer-xl-nav .nav-item {
  padding-left: 1rem;
}
.footer-xl-nav .item-list .href-item {
  margin: 0.75rem 0;
}
.footer-xl-nav .item-list .href {
  line-height: 1.5;
  display: inline-block;
  font-size: 0.7rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
}
.footer-xl-nav .item-list .href[href] {
  display: block;
  text-decoration: underline;
}
.footer-xl-nav .nav-item .txt-item {
  margin: 0.75rem 0;
}
.footer-xl-nav .nav-item .txt-item .txt {
  display: inline-block;
  max-width: 60%;
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
}
.footer-xl-nav .nav-item .txt-item .tel {
  display: block;
  margin: 1rem 0;
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 1px;
}

.customer-server.customer-server .text {
  margin-right: 2.5rem;
  font-size: 0.7rem;
  font-weight: bold;
  color: #fff;
}
.customer-server.customer-server .icon {
  width: 6rem;
}

/* 公用--底部 */
.footer-sm-nav {
  height: 2.9rem;
}
.footer-sm-nav .cf-list {
  height: 2.9rem;
  box-shadow: 0px 7px 27px 0px rgba(0, 0, 0, 0.12);
}
.footer-sm-nav .cf-list .active .txt-active {
  color: #315297;
}
</style>