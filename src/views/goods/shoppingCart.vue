<template>
  <div class="row justify-content-center container">
    <div class="col-12 col-lg-9">
      <!-- 右上角的编辑按钮 -->
      <div class="text-right">
        <div class="d-inline-block f15 color-3 right-top-edit-btn">Edit</div>
      </div>

      <!-- 商品列表 -->
      <section class="shop-cart-goods-box">
        <ul class="gb-list">
          <li
            class="row p-15 m-b-5 bg-white gl-item active"
            v-for="(item, index) in 10"
            :key="'goodslist' + index"
          >
            <div class="col-1">
              <div class="m-auto iconfont left-check-icon" eventType="selectThisGoods">
                <img src="~@/assets/icon/icon-check.png" alt="check icon" class="w-100 h-100" />
                <img
                  src="~@/assets/icon/icon-checked-active.png"
                  alt="check icon"
                  class="w-100 h-100"
                />
              </div>
            </div>
            <div class="col-3 col-md-2">
              <div class="bg-white m-l-5 overflow-hidden center-goods-img">
                <img
                  data-echo="~@/assets/img/test-0.png"
                  alt="goods img"
                  class="position-absolute imgCover"
                />
              </div>
            </div>
            <div class="col">
              <div class="m-l-10 d-flex flex-column justify-content-between right-goods-mess">
                <p
                  class="f15 font-weight-bold color-3 text-over-two"
                >sportswearsportswearsportswear sportswear</p>
                <div class="row gm-footer">
                  <p class="f15 font-weight-bold gf-price">$6.00</p>
                  <ul class="m-h-10 d-flex justify-content-center m-l-auto gf-num-box">
                    <li class="position-relative nb-btn down"></li>
                    <li class="t15 c-0 text-center nb-btn num" eventType="currentChooseNum">1</li>
                    <li class="position-relative nb-btn up"></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <!-- 底部-总价格信息 -->
      <footer class="shop-cart-footer">
        <ul class="fixed-bottom bg-white row scf-list">
          <li class="row m-h-20 checked-all" id="selectAll">
            <img src="~@/assets/icon/icon-check.png" alt="no check all" class="iconfont nocheck" />
            <img
              src="~@/assets/icon/icon-checked-active.png"
              alt="check all"
              class="iconfont checked"
            />
            <span class="m-l-10 f14 color-6">SELECT ALL</span>
          </li>
          <li class="col price">
            <p class="f14 si-totall-price">
              <span>TOTAL:</span>
              <span id="totallPrice">AU$6.00</span>
            </p>
          </li>
          <li
            class="m-r-5 text-center tra-z6 submit-btn"
            id="submitBtn"
            onclick="shopCartMethods.submitOrDel();"
          >SETTLEMENT</li>
        </ul>
      </footer>
    </div>

    <!-- 空购物车 -->
    <section class="position-absolute empty-cart d-none">
      <div class="mAuto ec-icon">
        <img src="~@/assets/icon/icon-emptyCart2.png" alt class="w-100 h-100" />
      </div>
      <p class="p-b-30 f14 text-center text-over-one">THE SHOPPING CART IS STILL EMPTY</p>
      <div class="d-flex">
        <p href="./index.html" class="p-h-30 text-over-one ec-btn">Look around now</p>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* 购物车-空购物车 */
.empty-cart {
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  -webkit-transform: translate3d(-50%, -50%, 0);
  .ec-icon {
    width: 4.5rem;
    height: 3.75rem;
    margin-bottom: 0.7rem;
  }
  .ec-btn {
    margin: auto;
    line-height: 1.9rem;
    border-radius: 0.3rem;
    background: rgba(37, 59, 109, 1);
    font-size: 0.75rem;
    color: #fff;
  }
}

/* 购物车-右上角的编辑按钮 */
.right-top-edit-btn {
  border: 0.6rem solid transparent;
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
}

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
  padding-bottom: 100%;
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
  height: 4.5rem;
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

/* 购物车-底部-总价格信息 */
.shop-cart-footer {
  height: 3rem;
}
.shop-cart-footer .scf-list {
  height: 3rem;
  box-shadow: 0px 7px 0.65rem 0px rgba(0, 0, 0, 0.12);
}

.shop-cart-footer .scf-list .checked-all .checked {
  display: none;
}
.shop-cart-footer .scf-list .checked-all.active .nocheck {
  display: none;
}
.shop-cart-footer .scf-list .checked-all.active .checked {
  display: block;
}
.shop-cart-footer .scf-list .si-totall-price {
  color: #bf1e2e;
}
.shop-cart-footer .scf-list .submit-btn {
  width: 6.2rem;
  line-height: 2rem;
  background: #bf1e2e;
  border: 1px solid transparent;
  border-radius: 0.2rem;
  font-size: 0.75rem;
  color: #fff;
}
.shop-cart-footer .scf-list .submit-btn.dis-active {
  background: #fff;
  border: 1px solid #bf1e2e;
  color: #bf1e2e;
}
</style>