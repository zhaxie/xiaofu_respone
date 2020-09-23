<template>
  <div class="container">
    <!-- 登录输入 -->
    <div class="login-box">
      <ul>
        <!-- Your Person details------------------------------------------------------------ -->
        <li>
          <p
            class="position-sticky bg-white p-t-30 p-b-20 login-big-title"
            style="top: 2.25rem;"
          >Your Person details</p>
          <label class="d-block p-h-15 p-v-10 p-b-5 input-with-name">
            <p class="input-name active">First Name</p>
            <input class="w-100 input-content" type="text" id="firstName" />
          </label>
          <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
            <p class="input-name active">Last Name</p>
            <input class="w-100 input-content" type="text" id="lastName" />
          </label>
          <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
            <p class="input-name active">E-mail</p>
            <input class="w-100 input-content" type="text" id="email" />
          </label>
          <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
            <p class="input-name active">Telephone</p>
            <input class="w-100 input-content" type="text" id="telphone" />
          </label>
        </li>
        <li>
          <!-- Your post address------------------------------------------------------------ -->
          <!-- <p class="m-t-30 login-big-title"></p> -->
          <p
            class="position-sticky bg-white p-t-30 p-b-20 login-big-title"
            style="top: 2.25rem;"
          >Postal Address</p>
          <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
            <p class="input-name active">Company</p>
            <input class="w-100 input-content" type="text" id="company" />
          </label>
          <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
            <p class="input-name active">Address</p>
            <input class="w-100 input-content" type="text" id="address" />
          </label>
          <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
            <p class="input-name active">Suburb/City</p>
            <input class="w-100 input-content" type="text" id="suburb" />
          </label>
          <label class="d-block p-h-15 p-v-10 p-b-5 m-t-20 input-with-name">
            <p class="input-name active">Post Code</p>
            <input class="w-100 input-content" type="text" id="postCode" />
          </label>
        </li>
        <li>
          <!-- Country------------------------------------------------------------ -->
          <p class="m-t-30 login-big-title">Country</p>
          <div class="m-t-20 check-list-box">
            <label class="d-block p-h-15 p-v-10 p-b-10 input-with-name">
              <p class="input-name active">Country</p>
              <div class="input" style="border: none;">
                <select
                  type="text"
                  class="h-100 w-100 select-box"
                  id="countrySelect"
                >
                  <option value>Please Select</option>
                  <option value="saab">萨博</option>
                  <option value="mercedes">奔驰</option>
                  <option value="audi">奥迪</option>
                </select>
              </div>
            </label>
          </div>
        </li>
        <li>
          <!-- Region/State------------------------------------------------------------ -->
          <p class="m-t-30 login-big-title">Region/State</p>
          <!--  -->
          <div class="m-t-20 check-list-box">
            <label class="d-block p-h-15 p-v-10 p-b-10 input-with-name">
              <p class="input-name active">Region/State</p>
              <div class="input" style="border: none;">
                <select
                  type="text"
                  class="h-100 w-100 select-box"
                  id="regionSelect"
                >
                  <option value>Please Select</option>
                  <option value="saab">萨博</option>
                  <option value="mercedes">奔驰</option>
                  <option value="audi">奥迪</option>
                </select>
              </div>
            </label>
          </div>
        </li>
      </ul>
    </div>
    <!-- 通用提交按钮 -->
    <a
      href="javaScript: void(0);"
      class="active-bg-a8 d-block m-b-20 t13 c-f text-center t-bg-red m-t-40 com-comfirm-btn"
      eventType="confimSave"
    >Confim Save</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>