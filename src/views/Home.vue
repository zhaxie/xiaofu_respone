<template>
  <div class="home">
    <div class="container">
      <!-- 轮播图 -->
      <bannerSwiper :bannerList="bannerList" :bannerSwiperOptions="bannerSwiperOptions"/>

      <!-- 联系方式 -->
      <section class="m-h-15 m-t-10 m-b-10 p-t-10 school-com">
        <div class="mAuto sc-img">
          <img src="~@/assets/icon/icon-logo-sm.png" alt="school logo" class="w-100 h-100" />
        </div>
        <p class="p-t-10 text-center sc-txt">
          Spring, summer, autumn and winter are the four seasons. There is a variety of
          formal uniform attire and sports weardesigned for every season…
        </p>
        <ul class="d-flex align-items-center justify-content-center p-v-30 sc-contact-list">
          <li class="position-relative cl-item">
            <img src="~@/assets/icon/icon-facebook.png" alt="contact icon" class="w-100 h-100" />
          </li>
          <li class="position-relative cl-item">
            <img src="~@/assets/icon/icon-goole.png" alt="contact icon" class="w-100 h-100" />
          </li>
          <li class="position-relative cl-item">
            <img src="~@/assets/icon/icon-twitter.png" alt="contact icon" class="w-100 h-100" />
          </li>
          <li class="position-relative cl-item">
            <img src="~@/assets/icon/icon-QQ.png" alt="contact icon" class="w-100 h-100" />
          </li>
          <li class="position-relative cl-item">
            <img src="~@/assets/icon/icon-weChat.png" alt="contact icon" class="w-100 h-100" />
          </li>
        </ul>
      </section>

      <!-- 商品列表 -->
      <section class="m-h-15 two-list-box">
        <ul class="row align-content-stretch wl-list">
          <li class="col-6 col-md-4" @click="$router.push('/goods/schoolList')">
            <a href="javaScript: void(0);" class="position-relative d-block m-r-10 m-b-10 item-box">
              <div class="position-relative" style="padding-bottom: 96%;">
                <img
                  src="~@/assets/img/test-16-0.png"
                  alt="ONLINE ORDER SCHOOL UNIFORMS "
                  class="position-absolute imgCover"
                />
              </div>
            </a>
          </li>
          <li class="col-6 col-md-4" @click="$router.push('/goods/schoolList')">
            <a href="javaScript: void(0);" class="position-relative d-block m-r-10 m-b-10 item-box">
              <div class="position-relative" style="padding-bottom: 96%;">
                <img
                  src="~@/assets/img/test-16-0.png"
                  alt="ONLINE ORDER SCHOOL UNIFORMS "
                  class="position-absolute imgCover"
                />
              </div>
            </a>
          </li>
          <li class="col-6 col-md-4" @click="$router.push('/goods/schoolList')">
            <a href="javaScript: void(0);" class="position-relative d-block m-r-10 m-b-10 item-box">
              <div class="position-relative" style="padding-bottom: 96%;">
                <img
                  src="~@/assets/img/test-16-0.png"
                  alt="ONLINE ORDER SCHOOL UNIFORMS "
                  class="position-absolute imgCover"
                />
              </div>
            </a>
          </li>
         
        </ul>
      </section>

      <!-- 大标题 -->
      <p class="d-flex align-items-center justify-content-center p-t-15 p-b-5">
        <img src="~@/assets/icon/icon-fire.png" alt="icon" class="iconfont" />
        <span class="m-l-10 f15 font-weight-bolder c-3">OUR HOT SELLING PRODUCTS</span>
      </p>

      <!-- 自由滑动模块：热卖商品 -->
      <section class="free-swiper hot-sale-list">
        <swiper class="p-b-40" :options="freeSwiperOptions">
          <swiper-slide v-for="(item, index) in bannerList" :key="'bannerList' + index">
            <GoodsItemOnSale class="m-v-20 m-r-15 goods-item" />
          </swiper-slide>
        </swiper>
      </section>

      <!-- 团队定制 -->
      <a href="javaScript: void(0);" class="position-relative d-block team-build-clother">
        <img
          src="~@/assets/img/test-4.png"
          alt="team-build-clother"
          class="position-absolute imgCover"
        />
      </a>

      <!-- 使用我们 -->
      <section class="used-us-modules">
        <p
          class="d-flex align-items-center justify-content-center w-100 f15 font-weight-bold color-3 some-title"
        >
          SOME OF OUR
          <br />HAPPY SCHOOLS
        </p>

        <!-- 自由滑动---使用我们 -->
        <div class="some-list">
          <swiper class="p-b-40" :options="freeSwiperOptions">
            <swiper-slide
              class="col-3"
              v-for="(item, index) in bannerList"
              :key="'bannerList' + index"
            >
              <a href="javaScript: void(0);" class="position-relative d-block some-item">
                <img
                  class="position-absolute imgCover"
                  src="~@/assets/img/test-14-1.png"
                  alt="our user logo"
                />
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </section>

      <!-- 需要帮助？ -->
      <a href="javaScript: void(0);" class="position-relative d-block team-build-clother">
        <img
          src="~@/assets/img/test-1-1.png"
          alt="team-build-clother"
          class="position-absolute imgCover"
        />
      </a>
    </div>
  </div>
</template>

<script>
import BannerSwiper from "@/components/bannerSwiper.vue";
// import FreeSwiper from "@/components/freeSwiper.vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import GoodsItemOnSale from "@/components/goodsItem_onSale.vue";

export default {
  name: "home",
  components: {
    BannerSwiper,
    // FreeSwiper,
    swiper,
    swiperSlide,
    GoodsItemOnSale
  },
  data() {
    return {
      bannerSwiperOptions: {
        autoplay: {
          disableOnInteraction: false
        }
      },
      freeSwiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true
      },
      bannerList: [
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        },
        {
          img: require("@/assets/icon/icon-shopCart.png")
        }
      ]
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
/* 首页-校园网址 */
.school-com {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, 0.11);
  border-radius: 0.25rem;
}
.school-com .sc-img {
  width: 8rem;
  height: 4rem;
}
.school-com .sc-txt {
  padding-left: 2rem;
  padding-right: 2rem;
}
.school-com .sc-contact-list .cl-item {
  width: 1.7rem;
  height: 1.7rem;
  margin: 0 0.6rem;
  border-radius: 50%;
}

/* 首页-两列布局 */
.two-list-box .wl-list {
  margin-right: -0.5rem;
}
.two-list-box .wl-list .item-box {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, 0.11);
  border-radius: 0.25rem;
}
.two-list-box .wl-list .item-box .wi-img {
  padding-bottom: 80%;
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  overflow: hidden;
}
.two-list-box .wl-list .item-box .wi-img .sm-title {
  line-height: 2;
  color: #fff;
  max-width: 70%;
  background-color: rgb(57, 88, 153);
  border-bottom-right-radius: 0.25rem;
}

/* <!-- 底部-自由横行滑动 --> */
.used-us-modules .some-title {
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 0.2rem;
  line-height: 1.5;
}
.used-us-modules .some-title::before,
.used-us-modules .some-title::after {
  margin: 0 1rem;
  content: "";
  display: block;
  width: 10%;
  height: 1px;
  background-color: #999;
}
.used-us-modules .some-list .some-item-box {
  margin: 0 0.75rem;
  width: 25%;
}
.used-us-modules .some-list .some-item {
  padding-bottom: 100%;
}

/* <!-- 团队定制 --> */
.team-build-clother {
  padding-bottom: 30%;
  margin: 2rem 0 2rem;
}

/* <!-- 轮播图 --> */
.banner-modules {
  margin-top: 1rem;
}
/* <!-- 经营范围 --> */
.manage-range {
  margin: 1rem 4rem;
  height: 2.5rem;
}
/* <!-- 使用我们 --> */
.used-us-modules .some-title {
  margin-bottom: 1rem;
  line-height: 3;
  font-size: 1rem;
  color: #666;
  text-align: center;
  letter-spacing: 0.2rem;
}
.used-us-modules .some-title::before,
.used-us-modules .some-title::after {
  margin: 0 1rem;
  content: "";
  display: block;
  width: 12%;
  height: 2px;
  background-color: #999;
}
.used-us-modules .some-list .some-item-box {
  margin: 0 0.75rem;
  width: 8.6%;
}
.used-us-modules .some-list .some-item {
  padding-bottom: 100%;
}

//自由滑行
.free-swiper {
  .swiper-wrapper {
    .swiper-slide {
      width: auto !important;
    }
  }
}

//自由滑行-特别定制
.hot-sale-list {
  .swiper-slide {
    &:first-child {
      .goods-item {
        margin-left: 0.75rem;
      }
    }
    .goods-item {
      width: 8.75rem;
    }
  }
}
</style>