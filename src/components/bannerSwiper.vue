<!-- The ref attr used to find the swiper instance -->
<template>
  <div
    class="position-relative"
    :style="'padding-bottom: ' + (bannerSwiperOptions.height  || '50%')"
  >
    <swiper class="position-absolute banner-container" :options="swiperOption" ref="mySwiper">
      <swiper-slide
        class="position-relative"
        v-for="(item, index) in bannerList"
        :key="'bannerList' + index"
        
      >
        <img :src="item.img" alt class="imgCover" @click="$router.push('/goods/goodsDetails')" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "carrousel",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    bannerList: {},
    bannerSwiperOptions: {}
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: this.bannerSwiperOptions.autoplay
      }
    };
  },
  mounted() {
    console.log(this.bannerList);
  }
};
</script>

<style lang="css" scoped>
.swiper-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.banner-container{
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>