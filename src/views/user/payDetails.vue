<template>
    <IntergralItem />
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
.pay-detail-list .pay-item .item-top {
  line-height: 1.5;
}
.pay-detail-list .pay-item:nth-child(2n) {
  background-color: #f7f7fb;
}
</style>