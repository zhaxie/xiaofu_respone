// edit By cxx
// 使用手册:

1) 打开遮罩 
  this.$showMask({
    closeMaskCb: () => {},
    removeEvt_clickMask: false  //是否可点击遮罩 可选值：true || false;  默认值：false
  });

2) 关闭遮罩
  this.$hideMask(); 

<template>
  <transition enter-active-class="mask-fadeIn" leave-active-class="mask-fadeOut">
    <div class="mask" @click.stop="hideMask" v-if="renderMaskBg"></div>
  </transition>
</template>

<script>
export default {
  name: "maskBg",
  data() {
    return {
      renderMaskBg: false
    };
  },
  methods: {
    showMask(options) {
      this.renderMaskBg = true;
      if (options) {
        options.closeMaskCb && (this.closeMaskCb = options.closeMaskCb);

        this.removeEvt_clickMask = options.removeEvt_clickMask ? true : false;
      }
    },
    hideMask() {
      if (this.removeEvt_clickMask) return false;

      this.renderMaskBg = false;
      this.closeMaskCb && this.closeMaskCb();
    }
  }
};
</script>

<style lang="scss" scoped>
.mask-fadeIn {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.mask-fadeOut {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

.mask {
  position: fixed;
  z-index: 200;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>