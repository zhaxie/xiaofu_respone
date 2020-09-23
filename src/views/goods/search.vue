<template>
  <div class="container">

    <!-- 搜索条 -->
    <div class="d-flex m-15 search-bar">
      <input type="text" class="col search-input" placeholder="input your search" />
      <div class="d-flex p-h-20 theme-bg-color search-btn">search</div>
    </div>

    <!-- 最近搜索 -->
    <h6 class="row search-title">RECENT SEARCH HISTORY</h6>
    <section class="search-history">
      <ul class="row his-list">
        <li>
          <span class="d-inline-block m-r-10 his-item">TOUKLEY PUBLIC SHOOL</span>
        </li>
        <li>
          <span class="d-inline-block m-r-10 his-item">TOUKLEY PUBLIC SHOOL</span>
        </li>
        <li>
          <span class="d-inline-block m-r-10 his-item">TOUKLEY PUBLIC SHOOL</span>
        </li>
      </ul>
    </section>

    <!-- 热门搜索 -->
    <h6 class="row search-title">POPULAR SEARCH</h6>

    <!-- 商品列表 -->
    <ul class="m-l-20 m-r-5 m-b-30 row">
      <li
        class="col-6 col-sm-4 col-md-3"
        v-for="(item, index) in 10"
        :key="'goodsItemOnSale' + index"
      >
        <GoodsItemOnSale class="m-r-15" />
      </li>
    </ul>

  </div>
</template>

<script>
import GoodsItemOnSale from "@/components/goodsItem_onSale.vue";
export default {
  components: {
    GoodsItemOnSale
  }
};
</script>

<style lang="scss" scoped>
// 搜索条
.search-bar {
  border: 1px solid #365a99;
  border-radius: 0.4rem;
  overflow: hidden;

  .search-input {
    margin: 0 1rem;
    font-size: 0.8rem;
    color: #333;
  }
  &::-webkit-input-placeholder {
    color: #999;
  }
  .search-btn {
    line-height: 2.2rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: #fff;
  }
}

.search-title {
  line-height: 2.6rem;
  margin: 0 0.9rem;

  &::before {
    margin-right: 0.5rem;
    content: "";
    display: block;
    width: 0.2rem;
    height: 0.83rem;
    background-color: #bf1e2e;
    border-radius: 0.09rem;
  }
}

.search-history {
  padding: 0 0.93rem;
  border-bottom: 0.78rem solid rgb(244, 244, 244);

  .his-list {
    margin-right: -0.5rem;
    margin-bottom: 0.5rem;

    .his-item {
      margin-bottom: 0.75rem;
      min-width: 4rem;
      line-height: 1.2rem;
      padding: 0 0.5rem;
      background-color: #f7f7fb;
      font-size: 0.4rem;
    }
  }
}
</style>