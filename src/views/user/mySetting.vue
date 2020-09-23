<template>
  <div class="container m-v-40 my-setting">
    <ul class="set-list">
      <!-- 头像 -->
      <li class="row p-h-20 m-b-15 item">
        <h class="col f15 color-6">Personal data</h>
        <div class="o-hidden right-header">
          <img src alt class="imgCover" />
        </div>
      </li>
      <!-- 昵称 -->
      <li class="row p-h-20 m-b-15 item">
        <h class="f15 color-6">Nickname</h>
        <input
          class="col p-l-20 h-100 text-right f15 color-3"
          placeholder="Bagus Yuliono"
          eventType="changeNickName"
        />
      </li>
      <!-- 性别 -->
      <li class="row p-h-20 m-b-15 item">
        <div class="col f15 color-6">Gender</div>
        <ul
          class="position-relative d-flex align-items-center right-btn-list"
          eventType="changeSex"
        >
          <li class="position-relative o-hidden btn-item active" data-type="0">
            <img src="~@/assets/icon/icon-sex-boy.png" alt class="position-absolute iconfont" />
            <img
              src="~@/assets/icon/icon-sex-boy-active.png"
              alt
              class="position-absolute iconfont d-none"
            />
          </li>
          <li class="position-relative o-hidden btn-item" data-type="1">
            <img src="~@/assets/icon/icon-sex-girl.png" alt class="position-absolute iconfont" />
            <img
              src="~@/assets/icon/icon-sex-girl-active.png"
              alt
              class="position-absolute iconfont d-none"
            />
          </li>
        </ul>
      </li>
      <!-- 邮件-->
      <li class="row p-h-20 m-b-15 item">
        <h class="col f15 color-6">E-mail validation</h>
        <div class="iconfont">
          <img src="~@/assets/icon/icon-right-more.png" alt class="imgCover" />
        </div>
      </li>
      <!-- 我的地址-->
      <li class="row p-h-20 m-b-15 item">
        <h class="col f15 color-6">My address</h>
        <div class="iconfont">
          <img src="~@/assets/icon/icon-right-more.png" alt class="imgCover" />
        </div>
      </li>
      <!-- 密码-->
      <li class="row p-h-20 m-b-15 item">
        <h class="col f15 color-6">Password</h>
        <div class="iconfont">
          <img src="~@/assets/icon/icon-right-more.png" alt class="imgCover" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* ---------------
    mySettings
-----------------*/
.my-setting .item {
  height: 2.85rem;
  box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, 0.11);
}
.my-setting .item .right-header {
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  background-color: #eee;
}
.my-setting .right-btn-list {
  border: 2px solid #f6f6f6;
  border-radius: 0.5rem;
}
.my-setting .right-btn-list::after {
  position: absolute;
  top: 0;
  right: 50%;
  bottom: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  -webkit-transform: translate3d(-50%, 0, 0);
  display: block;
  width: 2px;
  background-color: #f6f6f6;
}
.my-setting .right-btn-list .btn-item {
  width: 2.9rem;
  height: 2.1rem;
}
.my-setting .right-btn-list .btn-item .iconfont {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
.my-setting .right-btn-list .btn-item.active {
  background-color: #f8f7fc;
}
.my-setting .right-btn-list .btn-item.active img:first-child {
  display: none;
}
.my-setting .right-btn-list .btn-item.active img:last-child {
  display: block !important;
}
</style>