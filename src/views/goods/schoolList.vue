<template>

  <!-- 学校列表 -->
  <section class="d-flex container" ref="ref_schoolList">

    <!-- 左侧分类导航 -->
    <div
      class="col-sm-3 col-lg-2 left-nav-list left-nav-sm-list"
      :class="slideOutLeftNavList ? 'active' : ''"
      :style="'top: ' + this.ref_schoolListBoundTop + 'px'"
    >
      <swiper class="p-b-40 h-100" :options="freeSwiperOptions">
        <swiper-slide
          class="nav-item"
          style="height: auto; width: auto;"
          v-for="(item, index) in 10"
          :key="'navList' + index"
          :class="navActiveIndex_school === index ? 'theme-font-color' : ''"
        >
          <div class="m-h-15 p-v-20" @click.stop="handleChangeSchool(index)">
            <span>ONLINE ORDER SCHOOL UNIFORMS + {{index}}</span>
          </div>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>

    <!-- 右侧学分类明细 -->
    <ul class="col row align-items-start align-content-start p-t-15 uniform-list">
      <li class="col-12 col-lg-6 p-h-20" v-for="(item, index) in 50" :key="'schoolList' + index">
        <div class="position-relative ul-item" @click="$router.push('/goods/schoolUniformList')">
          <div class="position-absolute left-img">
            <img data-echo="~@/assets/img/test-0.png" alt class="imgCover" />
          </div>
          <div class="right-mess-box">
            <div class="m-r-20 emb-txt-box">
              <p class="f15 font-weight-bold color-3">Aberdeen public school</p>
              <p class="text-over-three">
                Spring, summer, autumn and winter are the four seasons. ThereSpring,
                sum
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!-- 左下角的显示侧边栏的按钮 -->
    <div
      class="position-fixed z100 theme-bg-red show-left-nav-btn d-none"
      @click="handleSlideOutLeftNavList();"
    >Nav</div>
  </section>
  
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      freeSwiperOptions: {
        direction: "vertical", //文字滚动的方向为垂直方向
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        mousewheel: true
      },
      slideOutLeftNavList: false,
      navActiveIndex_school: 0,
      ref_schoolListBoundTop: 0
    };
  },
  mounted() {
    !this.$isMobile && this.getSchooListDomBoundTop();
  },
  methods: {
    //获取当前dom节点距离顶部的高度(非移动端需要获取))
    getSchooListDomBoundTop() {
      const _document = document;
      const scrollTop =
        (_document.documentElement && _document.documentElement.scrollTop) ||
        (_document.body && _document.body.scrollTop);

      const ref_schoolList = this.$refs.ref_schoolList;
      const ref_schoolList_boundTop = ref_schoolList.getBoundingClientRect()
        .top;

        // console.log(ref_schoolList_boundTop);

      this.ref_schoolListBoundTop = ref_schoolList_boundTop + scrollTop; //需要加上滚动条已滚动的高度，因为ref_schoolList_boundTop有可能是负值
    },

    //打开侧边栏
    handleSlideOutLeftNavList() {
      this.slideOutLeftNavList = !this.slideOutLeftNavList;

      this.$showMask({
        closeMaskCb: () => {
          this.slideOutLeftNavList = !this.slideOutLeftNavList;
        },
        removeEvt_clickMask: false //是否可点击遮罩 可选值：true || false;  默认值：false
      });

    },

    //切换学校
    handleChangeSchool(index) {
      this.navActiveIndex_school = index;
    }
  }
};
</script>

<style lang="scss" scoped>
/* 公用--侧边菜单栏 */
.left-nav-list {
  background-color: #fff;
  box-shadow: 0px 2px 0.755rem 0px rgba(0, 0, 0, 0.11);
  height: calc(100vh - 10rem);
  overflow: hidden;

  .nav-item {
    border-bottom: 1px solid #eee;
    font-size: 0.7rem;
    font-weight: bolder;
  }

  /deep/.swiper-scrollbar-drag {
    background: rgba(54, 90, 153, 0.8) !important;
  }

  .swiper-scrollbar {
    opacity: 0;
    transition: all 0.6s;
  }

  &:hover .swiper-scrollbar {
    opacity: 1;
  }
}

//phone屏幕
@media (max-width: 575.98px) {
  .left-nav-sm-list {
    position: fixed;
    z-index: 1500;
    width: 50%;
    height: 100%;
    transform: translate3d(-100%, 0, 0);
    transition: all 0.6s;

    &.active {
      transform: translate3d(0, 0, 0);
    }

    /deep/.swiper-scrollbar {
      display: none;
    }
  }

  .show-left-nav-btn {
    left: 1rem;
    bottom: 4rem;
    display: block !important;
    width: 3rem;
    line-height: 3rem;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    font-size: 1rem;
    color: #fff;
  }
}
@media (min-width: 575.98px) {
  .left-nav-list {
    position: sticky;
  }
}

/* 校服分类-商品列表 */
.uniform-list {
  .ul-item {
    margin-bottom: 1.2rem;

    .left-img {
      left: 0;
      width: 4.45rem;
      height: 5.95rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 0.755rem 0px rgba(0, 0, 0, 0.11);
      border-radius: 0.3rem;
      margin-top: -0.6rem;
    }

    .right-mess-box {
      margin-top: 0.6rem;
      margin-left: 2rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 0.755rem 0px rgba(0, 0, 0, 0.11);
      border-radius: 0.2rem;

      .emb-txt-box {
        margin-left: 4.25rem;
        padding-bottom: 1.25rem;
        padding-top: 1.25rem;
        min-height: 7rem;
      }
    }
  }
}
</style>