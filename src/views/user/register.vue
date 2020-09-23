<template>
  <div class="container">
    <!-- 顶部装饰背景 -->
    <section class="d-flex justify-content-between align-items-center login-top">
      <div class="iconfont m-l-15 lt-left" onclick="history.go(-1);" style="margin-top: -0.8rem;">
        <img src="~@/assets/icon/icon-back-long.png" alt class="iconfont" />
      </div>
      <div class="lt-right">
        <img
          src="~@/assets/icon/icon-register-bg.png"
          alt
          class="icon-rightTopBg"
          style="width: 15.675rem;"
        />
      </div>
    </section>
    <!-- 中间登录输入 -->
    <section>
      <!-- 登录背景 -->
      <div class="position-relative canter-top" style="width: 16.2rem; height: 2.85rem;">
        <img src="~@/assets/icon/icon-register.png" alt class="w-100 h-100" />
        <p class="position-absolute t24 c-0 login-big-title register">Your Personal Details</p>
      </div>
      <!-- 登录输入 -->
      <div class="login-box">
        <!-- >First Name -->
        <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
          <p class="input-name active">First Name</p>
          <input class="w-100 input-content" type="text" id="firstName" />
        </label>
        <!-- Last Name -->
        <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
          <p class="input-name active">Last Name</p>
          <input class="w-100 input-content" type="text" id="lastName" />
        </label>
        <!-- Last Name-->
        <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
          <p class="input-name active">E-mail</p>
          <input class="w-100 input-content" type="text" id="email" />
        </label>
        <!-- Telephone -->
        <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
          <p class="input-name active">Telephone</p>
          <input class="w-100 input-content" type="text" id="telphone" />
        </label>
        <!-- Class -->
        <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
          <p class="input-name">Class</p>
          <input class="w-100 input-content" type="text" id="Class" />
        </label>
        <p class="t24 c-0 m-t-30 login-big-title">Your Password</p>
        <!-- Telephone -->
        <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
          <p class="input-name active">Password</p>
          <input class="w-100 input-content" type="text" id="password" />
        </label>
        <!-- Password Confirm -->
        <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
          <p class="input-name active">Password Confirm</p>
          <input class="w-100 input-content" type="text" id="passwordConfrim" />
        </label>
      </div>
      <!-- 通用提交按钮 -->
      <a
        href="javaScript: void(0);"
        class="active-bg-a8 d-block m-b-20 t-bg-red m-t-40 com-comfirm-btn"
        eventType="register"
      >Register</a>
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