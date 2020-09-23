<template>
  <div class="container">
    <!-- 学校信息 -->
    <section name="schoolMessBox" style="padding-top: 1rem;">
      <div class="position-relative school-mess-box">
        <div class="position-absolute z50 w-100 mess-box" id="messBox">
          <div class="position-relative bg-white p-v-20 m-h-10 sm-box">
            <p class="f15 font-weight-bold color-3 text-over-one">
              <span class="sm-title">Aberdeen public school</span>
            </p>
            <div class="d-flex align-items-center m-t-5">
              <div class="sb-left">
                <img src="~@/assets/img/test-0.png" alt class="imgCover" />
              </div>
              <div class="sb-right">
                <p class="d-flex align-items-center sr-item">
                  <img src="~@/assets/icon/icon-member.png" alt class="iconfont" />
                  <span class="m-l-5 f14 color-3">School unifrom shop</span>
                </p>
                <a href="tel:(02) 9349 3868" class="d-flex align-items-center sr-item">
                  <img src="~@/assets/icon/icon-tel.png" alt class="iconfont" />
                  <span class="m-l-5 f14 color-3">(02) 9349 3868</span>
                </a>
                <a href="Pbregoni@bigpond.net.au" class="d-flex align-items-center sr-item">
                  <img src="~@/assets/icon/icon-emial.png" alt class="iconfont" />
                  <span class="m-l-5 f14 color-3">Pbregoni@bigpond.net.au</span>
                </a>
                <p class="d-flex align-items-center sr-item">
                  <img src="~@/assets/icon/icon-loaction.png" alt class="iconfont" />
                  <span class="m-l-5 f14 color-3">Osullivan Ave Marouba， 2035 NSW</span>
                </p>
              </div>
            </div>
            <div
              class="position-absolute iconfont tra-z6 up-icon"
              onclick="methods.toggleMoreMess(this);"
            >
              <img
                src="~@/assets/icon/icon-up.png"
                alt
                class="pos-mc"
                style="width: 0.85rem; height: 0.5rem"
              />
            </div>
            <!-- <p class="f14 color-3 sm-txt d-none" eventType="toggleMoreMess">Spring, summer, autumn and winter are the four
            seasons.
            There is a variety of formal uniform attire and sports wear
            designed for every season
            </p>-->
            <div class="d-none" eventType="toggleMoreMess">
              <p class="f14 color-3 sm-txt">
                Spring, summer, autumn and winter are the four
                seasons.
                There is a variety of formal uniform attire and sports wear
                designed for every season
              </p>
              <!-- /* 会员专用按钮 */ -->
              <ul class="row m-b-10 w-auto member-btn-list">
                <li class="col-6">
                  <a
                    href="javaScript: void(0)"
                    class="d-block m-r-10 m-b-10 text-center s14 c-f btn-item"
                  >top up report</a>
                </li>
                <li class="col-6">
                  <a
                    href="javaScript: void(0)"
                    class="d-block m-r-10 m-b-10 text-center s14 c-f btn-item"
                  >Daily sales report</a>
                </li>
                <li class="col-6">
                  <a
                    href="javaScript: void(0)"
                    class="d-block m-r-10 m-b-10 text-center s14 c-f btn-item"
                  >Inventory report</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品列表-导航 -->
    <section class="produce-list-nav">
      <swiper class="p-b-40" :options="freeSwiperOptions">
        <swiper-slide
          v-for="(item, index) in 5"
          :key="'bannerList' + index"
          style="width: auto;"
        >
          <li class="d-inline-block nav-item active">ALL</li>
        </swiper-slide>
      </swiper>
    </section>

    <!-- 商品列表 -->
    <ul class="m-l-20 m-r-5 m-v-30 row">
      <li
        class="col-6 col-sm-4 col-md-3"
        v-for="(item, index) in 10"
        :key="'goodsItemOnSale' + index"
      >
        <GoodsItemOnSale class="m-r-15" />
      </li>
    </ul>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import GoodsItemOnSale from "@/components/goodsItem_onSale.vue";

export default {
  components: {
    swiper,
    swiperSlide,
    GoodsItemOnSale,
  },
  data() {
    return {
      freeSwiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
/* ---------------
    schoolClassficate 
-----------------*/

/* 学校分类--学校信息  */
.school-mess-box .sm-title {
  margin-left: 6.95rem;
}
.school-mess-box {
  height: 10rem;
  /* margin-top: 1rem; */
}
.school-mess-box .sm-box {
  box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, 0.11);
}
.school-mess-box .sm-box .sb-left {
  width: 3.45rem;
  height: 3.45rem;
  margin-left: 2rem;
  margin-right: 1.5rem;
}
.school-mess-box .sm-box .sb-right {
  max-width: 52%;
}
.school-mess-box .sm-box .sb-right .sr-item {
  margin: 0.15rem 0;
}
.up-icon {
  right: 1rem;
  bottom: 0.5rem;
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}
.up-icon.active {
  transform: rotate(0);
  -webkit-transform: rotate(0);
}
.school-mess-box .sm-txt {
  padding: 1rem 2rem;
  line-height: 2.2;
}
/* 会员专用按钮 */
.school-mess-box .member-btn-list {
  padding: 0 2rem;
  margin-right: -0.5rem;
}
.school-mess-box .member-btn-list .btn-item {
  padding: 0 0.5rem;
  line-height: 2rem;
  border-radius: 0.2rem;
  background-color: #bf1e2e;
}


/* 学校分类--产品列表-导航 */

.produce-list-nav {
  height: 2.25rem;
  &.active{
      
  }
}
.produce-list-nav.active {
  position: fixed;
  top: 2rem;
  width: 100%;
  z-index: 100;
  background-color: #fff;
}
.produce-list-nav .nav-item {
  height: 2.25rem;
  line-height: 2.25rem;
  width: auto;
  padding: 0 0.9rem;
  position: relative;
}
.produce-list-nav .nav-item.active::after {
  position: absolute;
  z-index: 300;
  left: 0;
  bottom: 0;
  right: 0;
  content: "";
  display: block;
  margin: auto;
  width: 0.75rem;
  height: 0.3rem;
  background: rgba(255, 210, 5, 1);
  border-radius: 0.15rem;
}

</style>