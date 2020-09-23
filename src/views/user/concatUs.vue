<template>
  <div class="m-v-40 container">
    <!-- 输入全名-->
    <div class="bg-white d-flex align-items-center p-h-20 input-with-boxshow">
      <span class="must-need"></span>
      <input type="text" placeholder="Full Name" class="w-100 f15 color-6 input-box" />
    </div>
    <!-- 输入电话-->
    <div class="bg-white d-flex align-items-center m-t-15 p-h-20 input-with-boxshow">
      <span class="must-need"></span>
      <input type="text" placeholder="Telephone" class="w-100 f15 color-6 input-box" />
    </div>
    <!-- 输入邮箱 -->
    <div class="bg-white d-flex align-items-center m-t-15 p-h-20 input-with-boxshow">
      <span class="must-need"></span>
      <input type="text" placeholder="E-mail" class="w-100 f15 color-6 input-box" />
    </div>
    <!-- 输入邮箱 -->
    <div class="bg-white d-flex align-items-center m-t-15 p-h-20 input-with-boxshow">
      <span class="must-need"></span>
      <input type="text" placeholder="Garment Type" class="w-100 f15 color-6 input-box" />
    </div>
    <!-- 输入邮箱 -->
    <div class="bg-white d-flex align-items-center m-t-15 p-h-20 input-with-boxshow">
      <span class="must-need"></span>
      <input type="text" placeholder="Quarterly" class="w-100 f15 color-6 input-box" />
    </div>
    <div class="bg-white p-15 m-t-15 suggestion-box">
      <!-- 多行输入框 -->
      <div class="sb-textarea">
        <textarea
          type="text"
          placeholder="Please enter the feedback, we will serve you better."
          class="h-100 w-100 s16 c-3"
          id="suggestTextarea"
        ></textarea>
      </div>
      <!-- 输入长度限制 -->
      <p class="text-right p-v-10 s12 color-9">
        <span>0</span>
        <span>/200</span>
      </p>
      <!-- 上传图片 -->
      <div class="p-h-5 upload-img-box">
        <ul class="row p-t ui-list" eventType="uploadImgList">
          <li class="col-4 col-sm-3 col-md-2 m-t-10" eventType="uploadBtn">
            <div class="position-relative m-r-10 item">
              <img
                src="~@/assets/icon/icon-upload.png"
                alt="upload img button"
                class="position-absolute imgCover"
              />
            </div>
          </li>
        </ul>
      </div>
      <!-- 上传input file -->
      <input
        class="d-none"
        type="file"
        name="file"
        id="file"
        value
        accept="image/*"
        multiple
        onchange="methods.imgChange('z_photo','z_file', 'concatUs.html');"
      />
    </div>
    <!-- 通用提交按钮 -->
    <div
      href="javaScript: void(0);"
      class="active-bg-a8 m-b-40 t-bg-red com-comfirm-btn"
      style="margin-top: 4rem;"
      eventType="submitSuggests"
    >Submit</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>


/* -------------
   Suggestions
---------------*/
.suggestion-box{
  box-shadow:0px 2px 35px 0px rgba(0, 0, 0, 0.11);
}
.suggestion-box .sb-textarea{
  height: 4.6rem;
}
 .suggestion-box textarea::-webkit-input-placeholder{
  font-size: 0.8rem;
  color: #606060;
}
.upload-img-box .ui-list{
  margin-right: -0.5rem;
}
.upload-img-box .ui-list .item{
  padding-bottom: calc(100% - 0.5rem);
}
.upload-img-box .ui-list .item .closed-btn{
  right: 0;
  top: 0;
  right: -0.30rem;
  top: -0.30rem;
  width: 1.2rem;
  height: 1.2rem;
  background-color: #315297;
  border-radius: 50%;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.upload-img-box .ui-list .item .closed-btn::before,
.upload-img-box .ui-list .item .closed-btn::after{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  content: '';
  display: block;
  width: 60%;
  height: 2px;
  background-color: #fff;
}
.upload-img-box .ui-list .item .closed-btn::after{
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
}
.input-with-boxshow{
  box-shadow:0px 2px 35px 0px rgba(0, 0, 0, 0.11);
}
.input-with-boxshow .must-need::before{
  content: '*';
  display: inline-block;
  color: #BF1E2E;
  margin-right: 0.2rem;
}
.input-with-boxshow .input-box{
  height: 2.2rem;
}

</style>