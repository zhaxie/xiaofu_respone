<template>
  <section class="container">
    <div class="row overflow-hidden p-b-30 my-integral">
      <div class="col-12 col-md-5">
        <!-- 积分面板 -->
        <div class="m-h-15 position-relative overflow-hidden bg-e mi-socre-box" style="padding-bottom: 30%;">
          <div class="position-absolute w-100 h-100">
            <img src="~@/assets/icon/icon-accountBalance.png" alt class="imgCover" />
          </div>
          <div class="position-absolute integral">
            <p class="f15 color-f p-l-30 p-b-5">My balance</p>
            <p class="f14 color-f p-l-30 integral-num">726.00</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-7">
        <!-- 公用--查看更多 -->
        <div class="com-to-more">
          <a  href="javaScripit:void(0)"  @click="$router.push('/user/recharge')" class="d-flex align-items-center h-100 p-h-15">
            <div class="col f15 color-6">Recharge</div>
            <div class="iconfont" style="margin-right: -0.3rem;">
              <img src="~@/assets/icon/icon-right-more.png" alt class="imgCover" />
            </div>
          </a>
        </div>
        <!-- 公用--查看更多 -->
        <div class="com-to-more">
          <a href="javaScripit:void(0)"  @click="$router.push('/user/payDetails')" class="d-flex align-items-center h-100 p-h-15">
            <div class="col f15 color-6">Payment details</div>
            <div class="iconfont" style="margin-right: -0.3rem;">
              <img src="~@/assets/icon/icon-right-more.png" alt class="imgCover" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* ---------------
    myIntergral , AccountBalance
-----------------*/
.my-integral {
  box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, 0.11);
}
.my-integral .mi-socre-box {
  border-radius: 0.2rem;
  margin-top: 1.5rem;
}
.my-integral .mi-socre-box .integral {
  top: 50%;
  left: 0;
  margin: auto;
  transform: translate3d(0, -50%, 0);
  -webkit-transform: translate3d(0, -50%, 0);
}
.my-integral .mi-socre-box .integral .integral-num {
  font-size: 1.2rem;
}
</style>