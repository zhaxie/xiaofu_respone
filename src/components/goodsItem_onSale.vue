<template>
  <div class="m-v-15 goods-onsale">
    <a href="javaScript:void(0)" @click="$router.push('/goods/goodsDetails')"  class="d-block">
      <div class="position-relative p-20 ss-item">
        <div class="position-relative mAuto sib-img">
          <div class="pos-mc">
            <img alt class="imgCover" />
          </div>
        </div>
        <p class="p-v-5 s14 c-3 text-over-one">Lemon Junior Blouse</p>
        <p class="f14 font-weight-bold color-3">$ 28</p>
        <div class="position-absolute right-top-btn"></div>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* 底部-自由横行滑动 */

.goods-onsale {
  .ss-item {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 20px 0px rgba(201, 201, 201, 0.5);
    border-radius: 0.5rem;

    .sib-img {
      padding-bottom: 100%;
    }

    .right-top-btn {
      right: -0.5rem;
      top: -0.5rem;
      width: 1.6rem;
      height: 1.6rem;
      background-color: #315297;
      border-radius: 0.75rem;

      &::before,
      &::after {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        content: "";
        display: block;
        width: 0.75rem;
        height: 4px;
        border-radius: 4px;
        background-color: #fff;
      }

      &::after {
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
      }
    }
  }
}

</style>