<template>
  <div class="container">
    <!-- 输入验证码-->
    <div class="bg-white d-flex align-items-center p-h-20 input-with-boxshow">
      <span class="must-need"></span>
      <input type="text" placeholder="Security code" class="w-100 input-box" id="securityCode" />
    </div>
    <!-- 新密码-->
    <div class="bg-white d-flex align-items-center m-t-15 p-h-20 input-with-boxshow">
      <span class="must-need"></span>
      <input type="password" placeholder="New password" class="w-100 input-box" id="newPassword" />
    </div>
    <!-- 重复新密码 -->
    <div class="bg-white d-flex align-items-center m-t-15 p-h-20 input-with-boxshow">
      <span class="must-need"></span>
      <input
        type="password"
        placeholder="Repeat new password"
        class="w-100 input-box"
        id="repeatNewPassword"
      />
    </div>
    <div class="t-bg-red com-comfirm-btn" style="margin-top: 4rem;">Submit</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>