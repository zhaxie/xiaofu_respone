<template>
  <div class="container">
    <!-- 顶部装饰背景 -->
    <section class="d-flex justify-content-between align-items-center login-top">
      <div class="iconfont m-l-15 lt-left" onclick="history.go(-1);">
        <img src="~@/assets/icon/icon-back-long.png" alt class="iconfont" />
      </div>
      <div class="lt-right">
        <img src="~@/assets/icon/icon-login-rightTopBg.png" alt class="icon-rightTopBg" />
      </div>
    </section>
    <!-- 中间登录输入 -->
    <section>
      <!-- 登录背景 -->
      <div class="canter-top">
        <img src="~@/assets/icon/icon-login-centerBg.png" alt class="w-100 h-100" />
      </div>
      <!-- 登录输入 -->
      <div class="login-box">
        <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
          <p class="input-name">Username</p>
          <input class="w-100 input-content" type="text" id="username" />
        </label>
        <label class="d-block p-h-15 p-v-10 p-b-5 m-b-15 input-with-name">
          <p class="input-name">Password</p>
          <input class="w-100 input-content" type="password" id="password" />
        </label>
        <p class="d-flex align-items-center login-check active" eventType="isAutoLogin">
          <img src="~@/assets/icon/icon-check.png" alt class="iconfont m-r-10" />
          <img src="~@/assets/icon/icon-checked-active.png" alt class="iconfont m-r-10" />
          Auto login
        </p>
      </div>
      <!-- 通用提交按钮 -->
      <a
        href="javaScript: void(0);"
        class="active-bg-a8 d-block t-bg-red m-t-40 com-comfirm-btn"
        eventType="login"
      >Register</a>
      <p class="d-flex justify-content-center t14 forget-btn-list">
        <a href="./register.html" class="t-c-red p-v-20 fb-item">free registration</a>
        <a href="./forgetPassword.html" class="t-c p-v-20 fb-item">forget password</a>
      </p>
    </section>
    <!-- 底部装饰背景 -->
    <section class="position-absolute z-1">
      <div class="login-bottom-bg">
        <img src="~@/assets/icon/icon-login-leftBottomBg.png" alt class="w-100 h-100" />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>