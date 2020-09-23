<template>
  <div class="container row">
    <div class="col-12 col-md-6">
      <!-- 头部 -->
      <div class="position-relative  " style="padding-bottom: 80%;">
        <section
          class="position-absolute overflow-hidden d-flex user-header"
          style="left: 0; top: 0; right: 0; bottom: 0; height: auto;"
        >
          <div class="position-relative z100 m-auto uh-box">
            <div class="o-hidden bg-white uh-head-img">
              <img data-echo="~@/assets/img/test-3.png" alt class="imgCover" />
            </div>
            <p class="f30 font-weight-bold color-f text-center p-t-20 p-b-10">Bagus Yuliono</p>
            <p class="f14 color-f text-center p-b-20">bagusy@mail.com</p>
            <a
              href="javaScripit:void(0)"  @click="$router.push('/order/orderList')" 
              class="d-flex justify-content-center align-items-center mAuto order-btn"
            >
              <img src="~@/assets/icon/icon-books-list.png" alt class="m-r-20 icon-book-list" />
              <span class="f16 theme-color">My Order</span>
            </a>
          </div>
        </section>
      </div>
    </div>
    <div class="col-12 col-md-6">
      <!-- 入口列表 -->
      <section class="m-20 user-entry-list">
        <ul class="row position-relative ue-list">
          <li class="col-6">
            <a href="javaScripit:void(0)"  @click="$router.push('/user/mySetting')" class="position-relative d-block bb-1-e ul-item">
              <div
                class="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div class="user-icon">
                  <img src="~@/assets/icon/icon-user-mySetting.png" alt class="imgCover" />
                </div>
                <p class="m-t-5 theme-color f16">My settings</p>
              </div>
            </a>
          </li>
          <li class="col-6">
            <a href="javaScripit:void(0)"  @click="$router.push('/user/accountBalance')" class="position-relative d-block bb-1-e ul-item">
              <div
                class="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div class="user-icon">
                  <img src="~@/assets/icon/icon-user-accout.png" alt class="imgCover" />
                </div>
                <p class="m-t-5 theme-color f16">Account balance</p>
              </div>
            </a>
          </li>
          <li class="col-6">
            <a href="javaScripit:void(0)"  @click="$router.push('/user/myCoupons')" class="position-relative d-block bb-1-e ul-item">
              <div
                class="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div class="user-icon">
                  <img src="~@/assets/icon/icon-user-coupons.png" alt class="imgCover" />
                </div>
                <p class="m-t-5 theme-color f16">My coupons</p>
              </div>
            </a>
          </li>
          <li class="col-6">
            <a href="javaScripit:void(0)"  @click="$router.push('/user/myIntergral')"  class="position-relative d-block bb-1-e ul-item">
              <div
                class="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div class="user-icon">
                  <img src="~@/assets/icon/icon-user-integral.png" alt class="imgCover" />
                </div>
                <p class="m-t-5 theme-color f16">My integral</p>
              </div>
            </a>
          </li>
          <li class="col-6">
            <a href="javaScripit:void(0)"  @click="$router.push('/user/myIntergral')" class="position-relative d-block ul-item">
              <div
                class="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div class="user-icon">
                  <img src="~@/assets/icon/icon-user-suggest.png" alt class="imgCover" />
                </div>
                <p class="m-t-5 theme-color f16">Suggestions</p>
              </div>
            </a>
          </li>
          <li class="col-6">
            <a class="position-relative d-block ul-item">
              <div
                class="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center"
              >
                <div class="user-icon">
                  <img src="~@/assets/icon/icon-user-outLogin.png" alt class="imgCover" />
                </div>
                <p class="m-t-5 theme-color f16">Logout</p>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/* ---------------
    user 
-----------------*/
/* 头部 */
.user-header {
  background-image: url("~@/assets/icon/icon-user-bg.png");
  height: 86vw;
  background-size: 100% 100%;
}
.user-header .uh-box {
  width: 70%;
}
.user-header .uh-box::after {
  position: absolute;
  left: 0;
  top: 2.68rem;
  right: 0;
  bottom: 1rem;
  content: "";
  display: block;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 0.6rem;
  z-index: -1;
}
.user-header .uh-head-img {
  width: 5.36rem;
  height: 5.36rem;
  border: 2px solid #fff;
  border-radius: 50%;
  margin: auto;
}
.user-header .order-btn {
  width: 8.9rem;
  height: 2.1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1.05rem;
}
.user-header .order-btn .icon-book-list {
  width: 1.1rem;
  height: 1.3rem;
}
/* 入口列表 */
.user-entry-list .ue-list::after {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  right: 50%;
  content: "";
  display: block;
  width: 1px;
  background-color: #eee;
}
.user-entry-list .ul-item {
  padding-bottom: 86%;
}
.user-entry-list .ul-item .user-icon {
  width: 1.65rem;
  height: 1.65rem;
}

.books-content-list .bc-item {
  box-shadow: 0px 2px 35px 0px rgba(0, 0, 0, 0.11);
}
.books-btn-list .bb-btn {
  width: 5rem;
  line-height: 1.65rem;
  border-radius: 0.2rem;
  border: 1px solid #bf1e2e;
  color: #bf1e2e;
}
.books-btn-list .bb-btn.active {
  background: #bf1e2e;
  color: #fff;
}
</style>