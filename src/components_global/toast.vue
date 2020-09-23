// edit By cxx
// 使用手册:


1) 使用toast
  this.$toast({
    msg: '提示内容',
    duration: 15000, //可选参数， 默认值1000
  });


<template>
  <transition
    enter-active-class="toast-fadeIn"
    leave-active-class="toast-fadeOut"
  >
    <div class="fixed-center" v-if="msg !== ''">
      <p class="com-toast">{{msg}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    };
  },
  mounted() {},
  methods: {
    toast(options) {
      this.msg = options.msg || 'toast的参数有误';

      clearTimeout(this.clearMsgTimer);
      this.clearMsgTimer = setTimeout(() => this.msg = "", options.duration || 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.toast-fadeIn {
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

.toast-fadeOut {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

.com-toast {
  width: auto;
  right: initial;
  line-height: 2.25;
  padding: 0 0.75rem;
  border-radius: 0.4rem;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 0.75rem;
  color: #fff;
}
</style>