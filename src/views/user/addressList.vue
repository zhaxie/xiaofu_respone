<template>
  <div class="container">
    <!-- 分割线 -->
    <ul class="d-flex justify-content-around receipt-line">
      <li class="rl-item"></li>
      <li class="rl-item"></li>
      <li class="rl-item"></li>
      <li class="rl-item"></li>
      <li class="rl-item"></li>
      <li class="rl-item"></li>
      <li class="rl-item"></li>
      <li class="rl-item"></li>
      <li class="rl-item"></li>
      <li class="rl-item"></li>
      <li class="rl-item"></li>
      <li class="rl-item"></li>
    </ul>
    <!-- 地址列表 -->
    <section>
      <ul class="address-list" eventType="list">
        <!-- 地址 -->
        <li class="m-b-10 address-item">
          <ul class="row bg-white p-h-10 p-v-20 short-mess-list">
            <li class="col-6 item">
              <p class="text-over-one p-h-10">
                <span class="d-inline-block title">Receiver:</span>
                <span class="content">JONJONJONJON</span>
              </p>
            </li>
            <li class="col-6 item">
              <p class="text-over-one p-h-10">
                <span
                  class="d-inline-block title"
                  style="min-width: 3.0rem;"
                >Phone:</span>
                <span class="content">11315</span>
              </p>
            </li>
            <li class="col-6 item">
              <p class="text-over-one p-h-10">
                <span class="d-inline-block title">Post Code:</span>
                <span class="content">11315</span>
              </p>
            </li>
            <li class="col-6 item">
              <p class="text-over-one p-h-10">
                <span
                  class="d-inline-block title"
                  style="min-width: 3.0rem;"
                >Mailbox:</span>
                <span class="content">11315</span>
              </p>
            </li>
            <li class="d-flex p-h-10 item">
              <p class="title">Address:</p>
              <span class="text-over-two s16 c-3" style="line-height: 1.2rem;">
                sjin jisn nzxjcn xc sjin jisn nzxjcn xcsjin
                jisn nzxjcn xcsjin jisn nzxjcn xcsjin jisn nzxjcn xc
              </span>
            </li>
          </ul>
          <div class="d-flex m-h-20 p-v-15 bt-1-e edit-btn-list">
            <a
              href="javaScript: void(0);"
              class="d-block m-r-10 text-center f15 btn"
              style="margin-left: auto;"
              eventType="delectAdress"
              data-id="0121314"
            >Del</a>
            <a href="./addressDetail.html" class="d-block text-center f15 btn active">Edit</a>
          </div>
        </li>
        <!-- 地址 -->
        <li class="m-b-10 address-item">
          <ul class="row bg-white p-h-10 p-v-20 short-mess-list">
            <li class="col-6 item">
              <p class="text-over-one p-h-10">
                <span class="d-inline-block title">Receiver:</span>
                <span class="content">JONJONJONJON</span>
              </p>
            </li>
            <li class="col-6 item">
              <p class="text-over-one p-h-10">
                <span
                  class="d-inline-block title"
                  style="min-width: 3.0rem;"
                >Phone:</span>
                <span class="content">11315</span>
              </p>
            </li>
            <li class="col-6 item">
              <p class="text-over-one p-h-10">
                <span class="d-inline-block title">Post Code:</span>
                <span class="content">11315</span>
              </p>
            </li>
            <li class="col-6 item">
              <p class="text-over-one p-h-10">
                <span
                  class="d-inline-block title"
                  style="min-width: 3.0rem;"
                >Mailbox:</span>
                <span class="content">11315</span>
              </p>
            </li>
            <li class="d-flex p-h-10 item">
              <p class="title">Address:</p>
              <span class="text-over-two s16 c-3" style="line-height: 1.2rem;">
                sjin jisn nzxjcn xc sjin jisn nzxjcn xcsjin
                jisn nzxjcn xcsjin jisn nzxjcn xcsjin jisn nzxjcn xc
              </span>
            </li>
          </ul>
          <div class="d-flex m-h-20 p-v-15 bt-1-e edit-btn-list">
            <a
              href="javaScript: void(0);"
              class="d-block m-r-10 text-center f15 btn"
              style="margin-left: auto;"
              eventType="delectAdress"
              data-id="0121314"
            >Del</a>
            <a href="./addressDetail.html" class="d-block text-center f15 btn active">Edit</a>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

/* -------------
   booksDetails
---------------*/
.receipt-box .icon-location{
  width: .9rem;
  height: 1.2rem;
  margin: 0 1rem 0  1.15rem;
}
.receipt-box .rr-receipt-details{
  min-height: 2rem;
}
.receipt-line .rl-item{
  width: 0.8rem;
  height: 2px;
  background-color: #BF1E2E;
  transform: skew(-45deg);
  -webkit-transform: skew(-45deg);
}
.receipt-line .rl-item:nth-child(2n){
  background-color: #253B6D;
}


/* ---------------
     addressList
-----------------*/
.address-list .address-item{
  box-shadow:0px 2px 35px 0px rgba(0, 0, 0, 0.11);
}
.address-list .address-item .short-mess-list .item{
  line-height: 1.5rem;
}
.address-list .address-item .short-mess-list .item .title{
  min-width: 3.8rem;
  line-height: inherit;
  font-size: 0.7rem;
  color: #666;
}
.address-list .address-item .short-mess-list .item .content{
    line-height: inherit;
  font-size: 0.7rem;
  color: #333;
}
.address-list .address-item .edit-btn-list .btn{
  width: 5.5rem;
  line-height: 1.65rem;
  border-radius: 0.2rem;
  border: 1px solid #BF1E2E;
  color: #BF1E2E;
}
.address-list .address-item .edit-btn-list .btn.active{
  background-color: #BF1E2E;
  color: #fff;
}


</style>