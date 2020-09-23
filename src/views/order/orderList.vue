<template>
  <div class="container">
    <!-- 订单状态导航 -->
    <section class="position-sticky z400 com-fixed-top-nav">
      <ul class="d-flex align-items-start bg-white cf-list" eventType="freeNavList">
        <li
          class="col d-flex h-100 position-relative"
          v-for="(item, index) in orderStatusNavList"
          :key="'orderStatusNavList' + index"
        >
          <div class="m-auto">
            <div class="m-h-auto iconfont">
              <img :src="item.iconUrl" alt="urlIcon" class="w-100 h-100 icon-disactive" />
            </div>
            <p class="color-6 s10 text-center txt-active">{{item.btnName}}</p>
          </div>
        </li>
      </ul>
    </section>
    <GoodsItem />
  </div>
</template>

<script>
import GoodsItem from '@/components/goodsItem.vue'
export default {
  components: {
    GoodsItem,
  },
  data() {
    return {
      orderStatusNavList: [
        {
          iconUrl: require("@/assets/icon/icon-order-add.png"),
          iconUrl_active: require("@/assets/icon/icon-order-add-active.png"),
          btnName: "All Order"
        },
        {
          iconUrl: require("@/assets/icon/icon-order-pending.png"),
          iconUrl_active: require("@/assets/icon/icon-order-pending-active.png"),
          btnName: "Pending payment"
        },
        {
          iconUrl: require("@/assets/icon/icon-order-toBeDeiviler.png"),
          iconUrl_active: require("@/assets/icon/icon-order-toBeDeiviler-active.png"),
          btnName: "To be delivered"
        },
        {
          iconUrl: require("@/assets/icon/icon-order-confirmed-1.png"),
          iconUrl_active: require("@/assets/icon/icon-order-confirmed-1-active.png"),
          btnName: "To be confirmed"
        },
        {
          iconUrl: require("@/assets/icon/icon-order-complete.png"),
          iconUrl_active: require("@/assets/icon/icon-order-complete-active.png"),
          btnName: "Completed"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
/* com-fixed-top-nav */
.com-fixed-top-nav {
  height: 4.6rem;
}
.com-fixed-top-nav .cf-list {
  height: 4.6rem;
  box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, 0.11);
  top: 2.3rem;
}
.com-fixed-top-nav .cf-list .icon-active {
  display: none;
}
.com-fixed-top-nav .cf-list .iconfont {
  width: 1.65rem;
  height: 1.65rem;
}
.com-fixed-top-nav .cf-list .active .txt-active {
  color: #bf1e2e;
}


</style>