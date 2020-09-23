<template>
  <div class="container">
    <!-- 收货地址 -->
    <section>
      <div class="d-flex p-t-20 bg-white receipt-box">
        <div class="receipt-box">
          <img src="~@/assets/icon/icon-loaction-red.png" alt class="icon-location" />
        </div>
        <div class="p-b-15 p-r-20 rb-right">
          <p class="text-over-two s15 c-3 rr-receipt-details">
            s
            Shan Tou High-tech Zone Science and Technology Road No. 13
          </p>
          <p class="p-t-5 s15 c-3">
            <span>Candy</span>
            <span>18888845454</span>
          </p>
        </div>
      </div>
      <!-- 分割线 -->
      <ul class="d-flex justify-content-around receipt-line">
        <li class="rl-item" v-for="(item, index) in 16" :key="'line' + index" v-once></li>
        <li class="rl-item d-none d-sm-block" v-for="(item, index) in 20" :key="'line' + index" v-once></li>
      </ul>
    </section>
    <GoodsItem />

    <!-- 订单信息 -->
    <section class="p-h-15 p-v-10 m-v-15 bg-white books-details-mess">
      <div class="bd-txt">
        <p class="d-flex align-items-center justify-content-between txt-item">
          <span class="s14 c-6">Order number :</span>
          <span class="t14 c-3">2020 0022 4444 78</span>
        </p>
        <p class="d-flex align-items-center justify-content-between txt-item">
          <span class="s14 c-6">Order time :</span>
          <span class="t14 c-3">2020-02-24 10 : 54</span>
        </p>
      </div>
    </section>
    <!-- 订单跟踪 -->
    <section class="p-h-40 p-b-40 bg-white order-pass">
      <p class="s14 c-3 p-v-15 op-title">Courier number : 856969652662326</p>
      <div class="position-relative op-pass-details">
        <div class="op-right-mess">
          <ul class="rm-list">
            <li class="position-relative rl-item active">
              <p class="position-relative m-b-10 s14 c-3 ri-title">Your parcel has been sent out</p>
              <p class="s14 c-60 rt-time">2020-02-24 10 : 54</p>
            </li>
            <li class="position-relative rl-item active">
              <p class="position-relative m-b-10 s14 c-3 ri-title">Your parcel has been sent out</p>
              <p class="s14 c-60 rt-time">2020-02-24 10 : 54</p>
            </li>
            <li class="position-relative rl-item active">
              <p class="position-relative m-b-10 s14 c-3 ri-title">Your parcel has been sent out</p>
              <p class="s14 c-60 rt-time">2020-02-24 10 : 54</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GoodsItem from '@/components/goodsItem.vue'

export default {
    components: {
        GoodsItem,
    },
};
</script>

<style lang="scss" scoped>
.receipt-box .icon-location{
  width: .9rem;
  height: 1.2rem;
  margin: 0 1rem 0  1.15rem;
}
.receipt-box .rr-receipt-details{
  min-height: 2rem;
}
.receipt-line .rl-item{
  width: 0.8rem;
  height: 2px;
  background-color: #BF1E2E;
  transform: skew(-45deg);
  -webkit-transform: skew(-45deg);
}
.receipt-line .rl-item:nth-child(2n){
  background-color: #253B6D;
}


/* -------------
   booksDetails
---------------*/
.books-details-mess{
  box-shadow:0px 2px 35px 0px rgba(0, 0, 0, 0.11);
}
.books-details-mess .txt-item{
  line-height: 1.5rem;
}
.order-pass .op-pass-details::before{
  position: absolute;
  left: 0;
  top: 6px;
  bottom: 6px;
  content: '';
  display: block;
  width: 6px;
  height: 100%;
  /* background-color: #EEEDEA; */
  background-color: #EEEDEA;
  border-radius: 6px;
}
.order-pass .op-right-mess{
  padding-left: 1.4rem;
}
.order-pass .op-right-mess .rl-item{
  height: 5rem;
}
.order-pass .op-right-mess .rl-item .ri-title::before{
  position: absolute;
  left: calc(-1.4rem - 4px);
  top: 50%;
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #EEEDEA;
  transform: translate3d(0, -50%, 0);
  -webkit-transform: translate3d(0, -50%, 0);
}
.order-pass .op-right-mess .rl-item.active .ri-title::after{
  position: absolute;
  left: calc(-1.4rem - 4px);
  top: 50%;
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #BF1E2E;
  transform: translate3d(0, -50%, 0) scale(0.7);
  -webkit-transform: translate3d(0, -50%, 0) scale(0.7); 
}
.order-pass .op-right-mess .rl-item.active:not(:last-child)::before{
  position: absolute;
  left: calc(-1.4rem + 2px);
  top: 6px;
  bottom: 6px;
  z-index: 100;
  content: '';
  display: block;
  width: 2px;
  height: 100%;
  background-color: #BF1E2E;
}

</style>