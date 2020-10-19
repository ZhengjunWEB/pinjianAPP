<template>
  <div class="recovery">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="tuichu()"></div>
      <span>藏壶回收</span>
      <div class="to_b" style="visibility: hidden"></div>
    </div>

    <div class="recovery-main commons_mainsContoApp">
      <div class="con">
        <p>丰行紫砂致力于继承并发扬紫砂文化，不忍 明珠蒙尘，特此公告。</p>
        <p>
          我们秉承 <span>以壶交友</span> ，诚交天下紫砂藏家为宗 旨，配备
          <span>专业评估团队</span> ，高价回收紫砂壶。如有
          浮动应以实物用料、做工、容量为准，给你的藏 品留下一个
          <span>好价格</span> ！
        </p>
      </div>
      <div class="recovery-con_show">
        <div class="recovery-con_list clearfix">
          <div class="recovery-con_item">
            <font>姓名：</font
            ><input type="text" v-model="name" placeholder="请输入你的姓名" />
          </div>
          <div class="recovery-con_item">
            <font>性别：</font>

            <div class="mesx" @click="text(1)">
              <img :src="is_hideso ? Img_true : Img_false" alt="" />
              <span>先生</span>
            </div>

            <div class="mesx" @click="text(2)">
              <img :src="is_hidese ? Img_true : Img_false" alt="" />
              <span>女士</span>
            </div>

            <!-- <input type="text" v-model="sex">-->
          </div>

          <div class="recovery-con_item">
            <font>电话：</font
            ><input
              type="number"
              v-model="iphone"
              placeholder="请输入正确的电话号码"
            />
          </div>
          <div class="recovery-con_item">
            <font>微信：</font
            ><input
              type="text"
              v-model="wxNum"
              placeholder="请填写您的微信号"
            />
          </div>
        </div>
      </div>
      <div class="recovery_price">
        <div>您的预期价位</div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div class="recovery_img">
        <div class="img_item" v-for="(a, b) in upload_img" :key="b"> <img :src="a">
         <img :src="srcPath + 'r_delete.png'" class="x" @click="img_d(b)">
        </div>
        <div class="img_items" @click="add_img" v-show="upload_img.length < 6">
          <img :src="srcPath + 'add_img.png'" alt="">
        </div>
        <span v-show="upload_img.length == 0">添加清晰审核图片</span>
      </div>
      <div class="tip">
        <img :src="srcPath + 'error.png'" alt="" />
        <span>您的图片清晰度关系到报价，请尽可能拍摄清晰。</span>
      </div>
      <div class="from_Bnt" @click="submit">提交</div>
    </div>
    <input
      type="file"
      accept="image/*"
      multiple
      ref="ipt_file"
      v-show="false"
      @change="file_change"
    />
  </div>
</template>

<script>
export default {
  name: "recovery",

  data() {
    return {
      name: "",
      sex: 1,
      iphone: "",
      wxNum: "",
      pirce: 1000,
      Img1: "",
      Img2: "",
      Img3: "",
      Img4: "",
      Img5: "",
      Img6: "",

      Img1false: false,
      Img2false: false,
      Img3false: false,
      Img4false: false,
      Img5false: false,
      Img6false: false,

      is_hideso: true,
      is_hidese: false,
      Img_true: require("../../assets/images/cart/flase_a.png"),
      Img_false: require("../../assets/images/cart/flase_o.png"),
      srcPath: "http://res.pinjianapp.com/vue_wap/images/recovery/", //配置地址
      fnt_Img: "http://console.pinjianapp.com/api/user/interactive", // 返图上传
      list_con: [],
      list_base: [],
      upload_img: [],
    };
  },
  mounted() {
    var $this = this;
    window.upis_img = $this.upis_img;
  },
  methods: {
    add_img() {
      //调用h5相机
      this.$refs.ipt_file.click();
    },
    file_change() {
      console.log(event.target.files);
      let $this = this
      let files = event.target.files;
      for (var i = 0; i < files.length; i++) {
        console.log(files[i]);
        if( $this.upload_img.length + i >= 6) {
          $this.$toast('最多允许添加6张图片')
          return
        }
        let reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = function (e) {
          var file = e.target.result
          $this.upload_img.push(e.target.result);
          //  axios
          //   .post("http://console.pinjianapp.com/api/user/interactive", {
          //     token: localStorage.getItem('token'),
          //     file
          //   }).then( (data) => {
          //     console.log(data);
          //   })
        };
      }
    },
    img_d(i) {
      this.upload_img.splice(i, 1)
    },
    text(val) {
      this.sex = val;
      if (val == 1) {
        this.is_hideso = true;
        this.is_hidese = false;
      } else if (val == 2) {
        this.is_hidese = true;
        this.is_hideso = false;
      }
    },
    tuichu() {
      this.$router.back();
    },
    submit() {
      if (
        this.name == "" &&
        this.sex == "" &&
        this.iphone == "" &&
        this.wxNum == "" &&
        this.pirce == "" &&
        this.Img1 == "static/images/20200411/ceshi.png" &&
        this.Img2 == "static/images/20200411/ceshi.png" &&
        this.Img3 == "static/images/20200411/ceshi.png" &&
        this.Img4 == "static/images/20200411/ceshi.png"
      ) {
        alert("请先输入…………");
        return false;
      } else if (this.name == "") {
        alert("名字不能为空…………");
        return false;
      } else if (this.sex == "") {
        // alert('性别不能为空…………');
        // return false;
      } else if (this.iphone == "") {
        alert("联系方式不能为空…………");
        return false;
      } else if (this.wxNum == "") {
        alert("微信号不能为空…………");
        return false;
      } else if (this.pirce == "") {
        alert("价格不能为空…………");
        return false;
      } else if (this.Img1 == "static/images/20200411/ceshi.png") {
        alert("请先上传茶壶正面照…………");
        return false;
      } else if (this.Img2 == "static/images/20200411/ceshi.png") {
        alert("请先上传茶壶反面照…………");
        return false;
      } else if (this.Img3 == "static/images/20200411/ceshi.png") {
        alert("请先上传茶壶底章照…………");
        return false;
      } else if (this.Img4 == "static/images/20200411/ceshi.png") {
        alert("请先上传茶壶盖章照…………");
        return false;
      } else {
        var $this = this;
        $this
          .$post($this.$api.frecycling, {
            name: $this.name,
            sex: $this.sex,
            mobile: $this.iphone,
            price: $this.pirce,
            wechat: $this.wxNum,
            photoa: $this.Img1,
            photob: $this.Img2,
            photoc: $this.Img3,
            photod: $this.Img4,
            photoe: $this.Img5,
            photof: $this.Img6,
            token: localStorage.getItem("token"),
          })
          .then((data) => {
            if (data.code == 200) {
              alert("提交成功");
            } else {
              alert("提交失败");
            }
          });
      }
    },

    // 调安卓相机
    selectImage(num, type) {
      var $this = this;
      $this.type = type;
      var token = localStorage.getItem("token");
      if ($this.type == 1) {
        $this.Img1false = true;
      } else if ($this.type == 2) {
        $this.Img2false = true;
      } else if ($this.type == 3) {
        $this.Img3false = true;
      } else if ($this.type == 4) {
        $this.Img4false = true;
      } else if ($this.type == 5) {
        $this.Img5false = true;
      } else if ($this.type == 6) {
        $this.Img6false = true;
      }
      window.android.selectImage(token, $this.fnt_Img, 1);
    },

    // 返回值接受
    upis_img(val) {
      var $this = this;
      var userCon = JSON.parse(val);
      if ($this.type == 1) {
        $this.Img1 = userCon.data;
        $this.Img1false = true;
      } else if ($this.type == 2) {
        $this.Img2 = userCon.data;
        $this.Img2false = true;
      } else if ($this.type == 3) {
        $this.Img3 = userCon.data;
        $this.Img3false = true;
      } else if ($this.type == 4) {
        $this.Img4 = userCon.data;
        $this.Img4false = true;
      } else if ($this.type == 5) {
        $this.Img5 = userCon.data;
        $this.Img5false = true;
      } else if ($this.type == 6) {
        $this.Img6 = userCon.data;
        $this.Img6false = true;
      }
    },
  },
};
</script>

<style lang="scss">
// 引入 基础 scss
@import "../../assets/sass/base.scss";
.recovery {
  .App-header {
    background-color: #122537;
    .to_a {
      color: #e8c396;
    }
    span {
      color: #e8c396;
    }
  }
  .recovery-main {
    background: #122537;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 0 rem(32px);
    padding-top: rem(88px);
    .con {
      width: rem(690px);
      height: rem(382px);
      background-color: #e8c396;
      margin: rem(40px) auto 0;
      color: #000000;
      line-height: 1.5;
      letter-spacing: rem(1px);
      font-size: rem(32px);
      font-weight: 400;
      box-sizing: border-box;
      padding: rem(40px) rem(27px);
      border-radius: rem(10px);
      span {
        font-weight: 700;
      }
      p {
        text-indent: rem(64px);
      }
    }
    .recovery-con_show {
      width: 100%;
      margin-top: rem(16px);
      background: #1f3951;
      border-radius: rem(10px);
      .recovery-con_list {
        width: 100%;
        height: rem(410px);
        background-color: #1f3951;
        border-radius: rem(10px);
        box-sizing: border-box;
        padding: 0 rem(36px) 0 rem(32px);
        .recovery-con_item {
          width: 100%;
          height: rem(80px);
          line-height: rem(80px);
          display: flex;
          overflow: hidden;
          margin-top: rem(15px);
          border-bottom: rem(1px) dashed #e1e1e1;
          font {
            display: block;
            color: #fff;
            font-size: rem(32px);
            font-weight: bold;
            width: rem(96px);
          }
          input {
            flex: 1;
            background-color: #1f3951;
            border: none;
            outline: none;
            font-size: rem(28px);
          }
          input::-webkit-input-placeholder {
            color: #999999;
            font-size: rem(28px);
          }
          .mesx {
            margin-left: rem(32px);
            display: flex;
            img {
              display: block;
              width: rem(32px);
              height: rem(32px);
              margin-top: rem(23px);
            }
            span {
              margin-left: rem(24px);
              font-size: rem(32px);
              color: #999;
              font-weight: 400;
            }
          }
          .mesx:nth-of-type(2) {
            margin-left: rem(45px);
          }
        }
        .recovery-con_item:nth-of-type(1) {
          margin-top: rem(16px);
        }
        .recovery-con_item.cc {
          width: 100%;
          font {
            width: auto;
          }
          input {
            padding: 0 rem(80px);
            text-align: center;
          }
          span {
            position: absolute;
            right: rem(20px);
          }
        }
        .recovery-con_item.cc.s {
          margin-top: rem(54px);
          .span {
            display: block;
            font-size: rem(32px);
            font-family: font_pc;
            font-weight: 400;
            color: #999999;
            margin-left: auto;
            margin-right: rem(32px);
          }
          img {
            display: block;
            width: rem(16px);
            height: rem(30px);
            margin-left: auto;
            margin-top: rem(25px);
            // margin-right: rem(32px);
          }
        }
        .recovery-con_item.dd {
          margin-bottom: 0;
          font {
            width: 100%;
          }
        }
        .recovery-con_listcon {
          .items {
            width: rem(190px);
            float: left;
            margin-right: rem(55px);
            margin-top: rem(20px);
            p {
              height: rem(190px);
              position: relative;
              border-radius: rem(20px);
              border: rem(3px) solid #e1e1e1;
              overflow: hidden;
            }
            .img {
              display: block;
              width: rem(60px);
              height: rem(50px);
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              margin: auto;
            }
            .mim {
              display: block;
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              margin: auto;
            }
            .active {
              width: 100%;
              height: 100%;
            }
            span {
              display: block;
              height: rem(45px);
              line-height: rem(45px);
              text-align: center;
              margin-top: rem(10px);
              font-size: rem(32px);
              font-family: font_pc;
              font-weight: 400;
              color: #999999;
            }
          }
          .items:nth-of-type(3n + 3) {
            margin-right: 0;
          }
        }
      }
    }
    .recovery_price {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: rem(112px);
      background-color: #1f3951;
      margin-top: rem(16px);
      box-sizing: border-box;
      padding: rem(40px) rem(32px);
      div {
        font-size: rem(32px);
        color: #fff;
      }
    }
    .recovery_img {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: rem(35px) rem(20px);
      // box-sizing: border-box;
      // padding-left: rem(25px);
      width: 100%;
      // height: rem(241px);
      background-color: #1f3951;
      margin-top: rem(16px);
      border-radius: rem(10px);
      .img_item, .img_items {
        position: relative;
        width: rem(161px);
        height: rem(161px);
        margin-right: rem(15px);
        margin-bottom: rem(35px);
        img{
          width: 100%;
          height: 100%;
        }
        .x {
          position: absolute;
          top: rem(-24px);
          right: rem(-24px);
          width: rem(48px);
          height: rem(48px);
        }
      }
      .add_img {
        width: rem(161px);
        height: rem(161px);
        border-radius: rem(10px);
        border: 1px dashed #707070;
        > div {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: rem(69px);
          height: rem(1px);
          background-color: #999;
        }
        .c {
          height: rem(69px);
          width: rem(1px);
        }
      }
      span {
        font-size: rem(28px);
        color: #999;
        margin-left: rem(57px);
      }
    }
    .tip {
      display: flex;
      align-items: center;
      width: 100%;
      height: rem(48px);
      line-height: rem(48px);
      border: rem(1px) solid #e8c396;
      border-radius: rem(10px);
      margin-top: rem(8px);
      img {
        width: rem(36px);
        height: rem(36px);
        margin-left: rem(32px);
      }
      span {
        font-size: rem(26px);
        color: #e8c396;
        margin-left: rem(24px);
      }
    }
    .from_Bnt {
      width: rem(520px);
      height: rem(85px);
      line-height: rem(85px);
      text-align: center;
      background: #f44647;
      color: #fff;
      font-weight: bold;
      font-size: rem(32px);
      margin: rem(88px) auto rem(40px);
    }
  }
}
</style>
