<template>
  <section>
    <ul class="bg-white pay-detail-list">
      <li class="p-v-15 p-h-20 pay-item">
        <p class="d-flex item-top">
          <span class="col f15 color-6">Online payment</span>
          <span class="f16 font-weight-bold t-c-red">-10.00</span>
        </p>
        <p class="d-flex item-top">
          <span class="col f14 font-weight-bold color-6">balance : 0.00</span>
          <span class="f14 color-9">2019-03-01 12:00</span>
        </p>
      </li>
      <li class="p-v-15 p-h-20 pay-item">
        <p class="d-flex item-top">
          <span class="col f15 color-6">Online payment</span>
          <span class="f16 font-weight-bold t-c-red">-10.00</span>
        </p>
        <p class="d-flex item-top">
          <span class="col f14 font-weight-bold color-6">balance : 0.00</span>
          <span class="f14 color-9">2019-03-01 12:00</span>
        </p>
      </li>
      <li class="p-v-15 p-h-20 pay-item">
        <p class="d-flex item-top">
          <span class="col f15 color-6">Online payment</span>
          <span class="f16 font-weight-bold t-c-red">-10.00</span>
        </p>
        <p class="d-flex item-top">
          <span class="col f14 font-weight-bold color-6">balance : 0.00</span>
          <span class="f14 color-9">2019-03-01 12:00</span>
        </p>
      </li>
      <li class="p-v-15 p-h-20 pay-item">
        <p class="d-flex item-top">
          <span class="col f15 color-6">Online payment</span>
          <span class="f16 font-weight-bold t-c-red">-10.00</span>
        </p>
        <p class="d-flex item-top">
          <span class="col f14 font-weight-bold color-6">balance : 0.00</span>
          <span class="f14 color-9">2019-03-01 12:00</span>
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* ---------------
    payDetail
-----------------*/
.pay-detail-list .pay-item .item-top{
  line-height: 1.5;
}
.pay-detail-list .pay-item:nth-child(2n){
  background-color: #F7F7FB;
}

</style>