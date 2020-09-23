<template>
  <!-- 通用--二级导航 -->
  <section class="position-sticky com-second-nav">
    <ul class="bg-white d-flex nav-list" eventType="selectedNav">
      <li class="col item active">
        <a href="javaScript: void(0);" class="d-block item-txt">All</a>
      </li>
      <li class="col item">
        <a href="javaScript: void(0);" class="d-block item-txt">Can use</a>
      </li>
      <li class="col item">
        <a href="javaScript: void(0);" class="d-block item-txt">Cannot use</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* 公用--二级导航 */
.com-second-nav{
  height: 2.85rem;
  top: 2.25rem;
  z-index: 400;
}
.com-second-nav .nav-list{
  box-shadow:0px 2px 35px 0px rgba(0, 0, 0, 0.11);
}
.com-second-nav .nav-list .item-txt{
  line-height: 2.85rem;
  text-align: center;
  font-size: 0.75rem;
  color: #666;
}
.com-second-nav .nav-list .active .item-txt{
  color: #BF1E2E;
}

</style>