<template>
  <div class="container">
    <section>
      <div class="overflow-hidden my-integral">
        <!-- 积分面板 -->
        <div
          class="m-h-15 position-relative overflow-hidden bg-e mi-socre-box"
          style="padding-bottom: 30%;"
        >
          <div class="position-absolute w-100 h-100">
            <img src="~@/assets/icon/icon-my-intergral.png" alt class="imgCover" />
          </div>
          <div class="position-absolute integral">
            <p class="f15 color-f p-l-30 p-b-5">My Integral</p>
            <p class="f14 color-f p-l-30 integral-num">726.00</p>
          </div>
        </div>
      </div>
    </section>
    <section>
        <!-- 积分明细 -->
        <p class="overflow-hidden bb-1-e m-h-20 p-v-20 f15 color-6">Integral record</p>
        <!-- 积分列表 -->
        <IntergralItem />
    </section>
  </div>
</template>

<script>
import IntergralItem from "@/components/intergralItem.vue";

export default {
  components: {
    IntergralItem
  }
};
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
  margin-bottom: 1.5rem;
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