<template>
  <div class="container">
    <HeaderNavSecond />
    <!-- 列表 -->
    <section class="coupons-list">
      <ul class="row p-t-10" id="couponsList">
        <li class="col-12 col-sm-4 m-v-15 p-h-15">
          <div class="list-item active">
            <div class="d-flex align-items-center header-right">
              <div class="left" style="margin-left: auto;">
                <h class="m-b-10 f15 color-f">General coupon</h>
                <p class="f15 c-gold use-command">Full 100 Available</p>
              </div>
              <div class="m-l-10 c-gold right">
                <span class="s14" style="margin-right: -0.2rem;">￥</span>
                <span class="num">10</span>
              </div>
            </div>
            <div class="d-flex align-items-center p-h-20 p-v-15 footer">
              <div class="col f15 duration">Validity until 2019.05.01</div>
              <a class="s14 footer-right" href>To use</a>
            </div>
          </div>
        </li>
        <li class="col-12 col-sm-4 m-v-15 p-h-15">
          <div class="list-item">
            <div class="d-flex align-items-center header-right">
              <div class="left" style="margin-left: auto;">
                <h class="m-b-10 f15 color-f">General coupon</h>
                <p class="f15 c-gold use-command">Full 100 Available</p>
              </div>
              <div class="m-l-10 c-gold right">
                <span class="s14" style="margin-right: -0.2rem;">￥</span>
                <span class="num">10</span>
              </div>
            </div>
            <div class="d-flex align-items-center p-h-20 p-v-15 footer">
              <div class="col f15 duration">Validity until 2019.05.01</div>
              <a class="s14 footer-right" href>To use</a>
            </div>
          </div>
        </li>
       
      </ul>
      <!-- 无数据显示 -->
      <p class="fixed-top f15 c-9 tips d-none" id="noTips">No coupons~</p>
    </section>
  </div>
</template>

<script>
import HeaderNavSecond from "@/components/headerNav_second_onlyBtnName.vue";
export default {
  components: {
    HeaderNavSecond
  }
};
</script>

<style lang="scss" scoped>
/* ---------------
     coupons-list
-----------------*/
.coupons-list .list-item {
  /* background-color: #20449D;
  ba */
  background-image: url("~@/assets/icon/icon-coupon.png");
  background-size: 100% 100%;
}
.coupons-list .list-item .header-right {
  padding: 0.75rem 0.75rem 0.2rem;
}
.coupons-list .list-item .header-right .num {
  font-size: 2.5rem;
}
.coupons-list .list-item .footer .footer-right {
  line-height: 1.25rem;
  padding: 0 0.4rem;
  border-radius: 0.2rem;
  border: 1px solid #9d9e9d;
  color: #9d9e9d;
}
.coupons-list .list-item .footer .duration {
  color: #606060;
}
.coupons-list .list-item.active {
  background-image: url("~@/assets/icon/icon-coupon-active.png");
}
.coupons-list .list-item.active .footer .duration,
.coupons-list .list-item.active .use-command {
  color: #ffffff;
}

.coupons-list .list-item.active .footer .footer-right {
  border-color: #f2dbac;
  color: #f2dbac;
}
</style>