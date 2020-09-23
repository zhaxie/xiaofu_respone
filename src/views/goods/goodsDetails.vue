<template>
  <div class="d-flex flex-wrap container">
    <!-- 带详情的轮播图 -->
    <div class="col good-img-box">
      <div class="position-relative z100 bg-white" style="padding-bottom: 60%;">
        <div class="position-absolute gi-box">
          <div class="overflow-hidden goods-mess-box">
            <!-- 轮播图 -->
            <bannerSwiper :bannerList="bannerList" :bannerSwiperOptions="bannerSwiperOptions" />

            <!-- 商品名字 -->
            <p class="position-absolute z100 title">Lemon Junior Blouse</p>

            <!-- 切换展示更多的按钮 -->
            <div
              class="position-absolute z100 iconfont tra-z6 up-icon"
              style="right: 0.75rem; bottom: 0.75rem;"
              :class="showGoodsDetailsMess === true ? 'active' : ''"
              @click="handleShowGoodsDetailsMess();"
            >
              <img
                src="~@/assets/icon/icon-up.png"
                alt
                class="pos-mc"
                style="width: 0.85rem; height: 0.5rem"
              />
            </div>

            <!-- 商品的更多介绍 -->
            <ul
              class="f14 color-3 bg-white goods-more-mess"
              :class="showGoodsDetailsMess === true ? '' : 'd-none'"
              ref="goodsMoreMess"
            >
              <li class="row p-b-15 gm-item">100% cotton</li>
              <li class="row p-b-15 gm-item">Environmentally Friendly Material Safety</li>
              <li class="row p-b-15 gm-item">Various sizes are suitable for students at all stages.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 空占位符, 用于设备为pad 时，占位使得显示商品更多信息时不会挡到规格表-->
      <div :style="'height:' + this.goodsMessHeight + 'px'"></div>
    </div>

    <!-- 规格表格 -->
    <div class="col-12 col-lg-6">
      <section class="bg-white p-h-5 symbol-list-box">
        <ul class="text-center sl-list">
          <li class="w-100 sl-item">
            <ul class="d-flex align-items-center text-center sm-title-list">
              <li class="col-2">
                <h6 class="tl-item">SPECS</h6>
              </li>
              <li class="col-4">
                <h6 class="tl-item">COLOUR</h6>
              </li>
              <li class="col-2">
                <h6 class="tl-item">STOCK</h6>
              </li>
              <li class="col-4 tl-item"></li>
            </ul>
          </li>
          <ul>
            <li class="w-100 shop-cart-goods-box sl-item">
              <ul class="d-flex align-items-center text-center t12 c-3 sm-title-list">
                <li class="col-2 tl-item">S</li>
                <li class="col-4 tl-item">
                  <ul
                    class="d-flex align-items-center justify-content-center color-list"
                    eventType="selectColor"
                  >
                    <li class="cl-item" data-activebordercolor="red">
                      <i class="d-block w-100 h-100 item-inner-bg" style="background-color: red;"></i>
                    </li>
                    <li class="cl-item" data-activebordercolor="green">
                      <i class="d-block w-100 h-100 item-inner-bg" style="background-color: green;"></i>
                    </li>
                    <li class="cl-item" data-activebordercolor="yellow">
                      <i
                        class="d-block w-100 h-100 item-inner-bg"
                        style="background-color: yellow;"
                      ></i>
                    </li>
                  </ul>
                </li>
                <li class="col-2 tl-item">2</li>
                <li class="col-4 d-flex right-goods-mess tl-item">
                  <ul class="m-auto d-flex justify-content-center gf-num-box" eventType="changeNum">
                    <li class="position-relative nb-btn down"></li>
                    <li class="t15 c-0 text-center nb-btn num" eventType="currentChooseNum">0</li>
                    <li class="position-relative nb-btn up"></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </section>
    </div>

    <!-- 底部-购物按钮 -->
    <section class="goods-details-footer">
      <ul class="fixed-bottom bg-white d-flex align-items-center text-center s14 footer-list">
        <li class="col d-flex flex-column align-items-center justify-content-center fl-item">
          <a href="./concatUs.html" class="text-center d-block">
            <div class="d-inline-block iconfont">
              <img src="~@/assets/icon/icon-tel-2.png" alt class="w-100 h-100" />
            </div>
            <p class="t11 t-c text-center">Contact us</p>
          </a>
        </li>
        <li class="btn-box buy-btn" onclick="methods.addToShopCart();">
          <span class="btn-item">Add TO CART</span>
        </li>
        <li class="m-l-5 m-r-15 theme-bg-color btn-box" onclick="methods.buyNow();">
          <span class="btn-item">BUY NOW</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import BannerSwiper from "@/components/bannerSwiper.vue";
export default {
  components: {
    BannerSwiper
  },
  data() {
    return {
      bannerSwiperOptions: {
        autoplay: false,
        height: "60%"
      },
      bannerList: [
        {
          img: require("@/assets/img/test-1-1.png")
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
      ],
      showGoodsDetailsMess: !this.$isMobile, //pc直接显示出来，mobile就隐藏
      goodsMessHeight: 0
    };
  },
  mounted() {
    this.$nextTick();
    const ref_goodsMoreMess = this.$refs.goodsMoreMess;

    // console.log(ref_goodsMoreMess.offsetHeight);

    this.goodsMessHeight = ref_goodsMoreMess.offsetHeight;
  },
  methods: {
    handleShowGoodsDetailsMess() {
      this.showGoodsDetailsMess = !this.showGoodsDetailsMess;
    }
  }
};
</script>

<style lang="scss" scoped>
/* ---------------
    goodsDetails 
-----------------*/

/* 商品详情-带详情的轮播图 */
.good-img-box {
  margin: 1.25rem;

  .gi-box {
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    .goods-mess-box {
      min-height: 100%;
      box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, 0.11);
      border-radius: 0.5rem;
      overflow: hidden;
    }
    .goods-more-mess {
      padding: 1.45rem;

      .gm-item::before {
        content: "";
        display: block;
        width: 0.45rem;
        height: 0.45rem;
        background-color: #315297;
        border-radius: 50%;
        margin-right: 0.5rem;
      }

      .up-icon {
        right: 1rem;
        bottom: 0.5rem;
        transform: rotate(180deg);
        transition: all 0.4s;

        &.active {
          transform: rotate(0);
        }
      }
    }
  }

  .title {
    left: 0;
    right: 0;
    bottom: 2rem;
    font-size: 0.75rem;
    font-weight: bold;
    color: #333;
    text-align: center;
  }
}

/* 商品详情-规格表格 */
.symbol-list-box {
  margin: 1.25rem;
  box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, 0.11);
  .sl-item {
    border-bottom: 1px solid #eee;

    &:first-child,
    &:last-child {
      border-bottom: none;
    }
  }

  .tl-item {
    line-height: 2.2rem;
  }

  .color-list .cl-item {
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    border: 1px solid transparent;
    margin: 0 0.12rem;

    .item-inner-bg {
      border: 0.1rem solid #fff;
      border-radius: 50%;
    }
  }
}

//数量选择框
.shop-cart-goods-box .right-goods-mess {
  .gf-price {
    color: #bf1e2e;
  }
  .gf-num-box {
    border: 1px solid #999;
    border-radius: 0.2rem;
    min-width: 4.8rem;

    &.active {
      border: 1px solid transparent;
      text-align: center;

      .down,
      .up {
        display: none;
      }
    }
    .nb-btn {
      min-width: 1.6rem;
      height: 1.1rem;

      &.down::after,
      &.up::before,
      &.up::after {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        content: "";
        display: block;
        width: 0.55rem;
        height: 0.05rem;
        background-color: #0c0c0c;
      }

      &.down::after {
        background-color: #999;
      }

      &.up::after {
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
      }

      &.num {
        line-height: 1.1rem;
        border-left: 1px solid #999;
        border-right: 1px solid #999;
      }
    }
  }
}

/* 商品详情-底部-购物按钮 */
.goods-details-footer {
  height: 2.85rem;

  .footer-list {
    height: 2.85rem;
    box-shadow: 0px 7px 27px 0px rgba(0, 0, 0, 0.12);

    .btn-box {
      width: 6.2rem;
      height: 2rem;
      border-radius: 0.2rem;

      .btn-item {
        line-height: 2rem;
        font-size: 0.8rem;
        color: #fff;
      }
    }
    .buy-btn {
      background-color: #bf1e2e;
    }
  }
}

</style>