<template>
    <!-- 商品列表 -->
    <section class="shop-cart-goods-box">
      <ul class="books-content-list">
        <li class="bg-white p-15 bc-item">
          <!-- 订单 -->
          <ul class="gb-list">
            <li class="d-flex bg-white m-v-30 gl-item active" style="box-shadow: none;">
              <div class="col-3 col-sm-2">
                <div
                  class="position-relative bg-white overflow-hidden center-goods-img"
                  style="padding-bottom: 100%;"
                >
                  <img
                    data-echo="./src/img/test-0.png"
                    alt="goods img"
                    class="position-absolute imgCover"
                  />
                </div>
              </div>
              <div class="col d-flex flex-column p-l-15 right-goods-mess">
                <p
                  class="f16 font-weight-bold color-6 text-over-two"
                >sportswearsportswearsportswear sportswear</p>
                <div class="row m-t-auto gm-footer">
                  <p class="f15 font-weight-bold gf-price">$6.00</p>
                  <ul class="d-flex justify-content-center m-l-auto gf-num-box active">
                    <li
                      class="f15 font-weight-bold c-0 text-center m-l-auto nb-btn num"
                      eventType="currentChooseNum"
                    >0</li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="d-flex bg-white m-v-30 gl-item active" style="box-shadow: none;">
              <div class="col-3 col-sm-2">
                <div
                  class="position-relative bg-white overflow-hidden center-goods-img"
                  style="padding-bottom: 100%;"
                >
                  <img
                    data-echo="./src/img/test-0.png"
                    alt="goods img"
                    class="position-absolute imgCover"
                  />
                </div>
              </div>
              <div class="col d-flex flex-column p-l-15 right-goods-mess">
                <p
                  class="f16 font-weight-bold color-6 text-over-two"
                >sportswearsportswearsportswear sportswear</p>
                <div class="row m-t-auto gm-footer">
                  <p class="f15 font-weight-bold gf-price">$6.00</p>
                  <ul class="d-flex justify-content-center m-l-auto gf-num-box active">
                    <li
                      class="f15 font-weight-bold color-0 text-center m-l-auto nb-btn num"
                      eventType="currentChooseNum"
                    >0</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <!-- 价格等信息 -->
          <p class="row m-v-15">
            <span class="f14 color-6">Actual payment：</span>
            <span class="f15 t-c-red">$6.00000</span>
            <span class="col text-right f14 theme-font-color">Pending payment</span>
          </p>
          <div class="m-v-15 d-flex f15 books-btn-list">
            <a class="d-block m-l-auto text-center m-r-10 bb-btn">Cancel order</a>
            <a class="d-block text-center bb-btn active">Buy now</a>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
/* 购物车-商品列表 */
.shop-cart-goods-box .gl-item {
  box-shadow: 0px 2px 0.755rem 0px rgba(0, 0, 0, 0.11);
}
.shop-cart-goods-box .gl-item .left-check-icon img:last-child {
  display: none;
}
.shop-cart-goods-box .gl-item.active .left-check-icon img:first-child {
  display: none;
}
.shop-cart-goods-box .gl-item.active .left-check-icon img:last-child {
  display: block;
}
.shop-cart-goods-box .gl-item .center-goods-img {
  height: 4.5rem;
  box-shadow: 0 2px 0.75rem 0 rgba(0, 0, 0, 0.11);
  border-radius: 0.4rem;
  flex-shrink: 0;
}
/* 缺货 */
.shop-cart-goods-box .gl-item.SHORTAGE .left-check-icon {
  visibility: hidden;
}
.shop-cart-goods-box .gl-item.SHORTAGE_FINSHED .left-check-icon {
  visibility: visible;
}
.shop-cart-goods-box .gl-item.SHORTAGE {
  background-image: url("~@/assets/icon/icon-shortage.gif");
  /* background-size: 8.05rem 5rem; */
  background-size: 4rem 2.5rem;
  background-position: 90% 3rem;
  background-repeat: no-repeat;
  z-index: 100;
  opacity: 0.6;
}

.shop-cart-goods-box .right-goods-mess {
}
.shop-cart-goods-box .right-goods-mess .gf-price {
  color: #bf1e2e;
}
.shop-cart-goods-box .right-goods-mess .gf-num-box {
  border: 1px solid #999;
  border-radius: 0.2rem;
  min-width: 4.8rem;
}
.shop-cart-goods-box .right-goods-mess .gf-num-box.active {
  border: 1px solid transparent;
  text-align: center;
}
.shop-cart-goods-box .right-goods-mess .gf-num-box.active .down,
.shop-cart-goods-box .right-goods-mess .gf-num-box.active .up {
  display: none;
}
.shop-cart-goods-box .right-goods-mess .gf-num-box.active .nb-btn.num {
  border: 1px solid transparent !important;
  /* text-align: right !important; */
}
.shop-cart-goods-box .right-goods-mess .gf-num-box.active .nb-btn.num::before {
  content: "X";
  display: inline-block;
  font-size: 0.6rem;
  margin-right: 0.25ch;
  color: #000;
}
.shop-cart-goods-box .right-goods-mess .gf-num-box .nb-btn {
  min-width: 1.6rem;
  height: 1.1rem;
}
.shop-cart-goods-box .right-goods-mess .gf-num-box .nb-btn.down::after,
.shop-cart-goods-box .right-goods-mess .gf-num-box .nb-btn.up::before,
.shop-cart-goods-box .right-goods-mess .gf-num-box .nb-btn.up::after {
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
.shop-cart-goods-box .right-goods-mess .gf-num-box .nb-btn.down::after {
  background-color: #999;
}
.shop-cart-goods-box .right-goods-mess .gf-num-box .nb-btn.up::after {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
}
.shop-cart-goods-box .right-goods-mess .gf-num-box .nb-btn.num {
  line-height: 1.1rem;
  border-left: 1px solid #999;
  border-right: 1px solid #999;
}

.books-content-list .bc-item {
  box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, 0.11);
}
.books-btn-list .bb-btn {
  width: 5rem;
  line-height: 1.65rem;
  border-radius: 0.2rem;
  border: 1px solid #bf1e2e;
  color: #bf1e2e;
}
.books-btn-list .bb-btn.active {
  background: #bf1e2e;
  color: #fff;
}
</style>