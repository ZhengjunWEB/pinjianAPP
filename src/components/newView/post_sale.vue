<template>
  <div class="post_sale">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="goBack"></div>
      <span>售后服务</span>
      <div class="to_b"></div>
    </div>
    <div class="post_sale_main commons_mainsContoApp">
      <div class="sale_main_item">
        <div class="item_top">
          <img :src="goods.image" alt="" />
          <div class="itemRightCon">
            <strong>{{ goods.goods_name }}</strong>
            <span class="p1">{{ goods.author }}</span>
            <span class="p2">{{ goods.goods_no }}</span>
            <p>
              ￥{{ goods.goods_price }}<font>x{{ goods.goods_num }}</font>
            </p>
          </div>
        </div>
        <div class="item_bottom">
          <span>总计：{{ rou_con.total_price }}</span> <span>优惠：￥0</span>
          <font>实付款：{{ rou_con.total_price }}</font>
        </div>
      </div>
      <div class="sale_type" @click="show = true">
        <div>售后原因</div>
        <div class="type_r">
          <span v-if="select.length == 0">请选择</span>
          <span v-else class="red">已选择</span>
          <div><img :src="srcPath + 'arrow_r.png'" alt="" /></div>
        </div>
      </div>
      <div class="sale_msg">
        <div class="msg_title">
          <p>原因描述：</p>
          <textarea
            placeholder="最多200字"
            v-model="sale_msg"
            maxlength="200"
          ></textarea>
        </div>
      </div>
      <div class="sela_img">
        <div class="img_title"><span>上传凭证</span> <i>最多六张</i></div>
        <div class="B_box">
          <div class="item" v-for="(item, index) in imgfilesback" :key="index">
            <img :src="item" class="dis-image" />
            <span class="delete" @click="deleteImg(index)">X</span>
          </div>
          <div
            class="camera"
            @click="click_s(2)"
            v-show="imgfilesback.length <= 6"
          >
            <img :src="srcPath + 'camera.png'" alt="" />
          </div>
        </div>

        <input
          v-show="false"
          type="file"
          multiple='multiple'
          class="inputer"
          id="inputer"
          ref="inputRef"
          @change="handleChange($event)"
          
        />
        <!-- <input
          v-show="false"
          type="file"
          class="inputer"
          ref="inputRefs"
          @change="handleChange($event)"
        /> -->
      </div>
      <div class="submit_box">
        <div class="sela_submit">立即提交</div>
      </div>
    </div>
    <van-action-sheet v-model="show" title="标题">
      <div @click="change(1)">
        <span>商品质量问题</span>
        <i v-if="select.indexOf(1) == -1"></i>
        <img v-else :src="s_Path" alt="" />
      </div>
      <div @click="change(2)">
        <span>尺寸/容量与商品描述不符</span>
        <i v-if="select.indexOf(2) == -1"></i>
        <img v-else :src="s_Path" alt="" />
      </div>
      <div @click="change(3)">
        <span>卖家发错货</span>
        <i v-if="select.indexOf(3) == -1"></i>
        <img v-else :src="s_Path" alt="" />
      </div>
      <div @click="change(4)">
        <span>收到商品少件或破损</span>
        <i v-if="select.indexOf(4) == -1"></i>
        <img v-else :src="s_Path" alt="" />
      </div>
      <div @click="change(5)">
        <span>其他</span>
        <i v-if="select.indexOf(5) == -1"></i>
        <img v-else :src="s_Path" alt="" />
      </div>
      <em @click="submit">确定</em>
    </van-action-sheet>
    <van-action-sheet class="showB" v-model="showB" title="标题">
      <div @click="click_s(1)"><span>相机</span></div>
      <div @click="click_s(2)"><span>图库</span></div>
      <div @click="click_s(3)"><span>取消</span></div>
    </van-action-sheet>
    <!-- <van-action-sheet class="show" v-model="showB" :actions="actions" cancel-text="取消"
     @cancel="onCancel" round: false /> -->
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  name: "postSale",
  data() {
    return {
      rou_con: {},
      rou_id: "",
      goods: [],
      srcPath: "http://res.pinjianapp.com/vue_wap/images/", //配置地址
      sale_msg: "", //售后备注信息
      show: false, //售后类型弹出框
      showB: false, //选择照片弹出
      actions: [{ name: "相机" }, { name: "图库" }],
      imgList: [], // 图片源文件
      imgfilesback: [], // base64
      select: [], //售后信息类型储存
      s_Path: "http://res.pinjianapp.com/vue_wap/images/cart/y.png", //选中图表
    };
  },
  components: {
    [Button.name]: Button,
  },
  created() {
    console.log(this.select.length);
    var $this = this;
    $this.rou_id = $this.$route.params.id;
    $this
      .$post($this.$api.order_Listcon, {
        token: localStorage.getItem("token"),
        id: $this.rou_id,
      })
      .then((data) => {
        $this.rou_con = data.data;
        $this.goods = data.data.goods_list[0];
        console.log($this.rou_con.pay_type);
      });
  },
  methods: {
    goBack() {
      this.select = [];
      this.$router.go(-1);
    },
    submit() {
      this.show = false;
    },
    change(i) {
      let a = this.select.indexOf(i);
      if (a == -1) {
        this.select.push(i);
      } else {
        this.select.splice(a, 1);
      }
      console.log(this.select);
    },
    onCancel() {},
    onSelect(item) {
      this.showB = false;
      console.log(1);
    },
    handleChange(e) {
      /* eslint-disable */
      //点击上传图片事件
      var _this = this;
      var event = event || window.event;
      var file = event.target.files;
      var leng = file.length;
      for (var i = 0; i < leng; i++) {
        var reader = new FileReader(); // 使用 FileReader 来获取图片路径及预览效果
        _this.imgList.push(file[i]);
        reader.readAsDataURL(file[i]);
        reader.onload = function (e) {
          _this.imgfilesback.push(e.target.result); // base 64 图片地址形成预览
          console.log(_this.imgList);
          console.log(e.target.result);
          console.log(_this.imgfilesback);
          axios
            .post("http://console.pinjianapp.com/api/user/interactive", {
              token:
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jb25zb2xlLnBpbmppYW5hcHAuY29tXC9hcGlcL3VzZXJcL2xvZ2luIiwiaWF0IjoxNjAyMDMzMTYwLCJleHAiOjE2MDIyMDU5NjAsIm5iZiI6MTYwMjAzMzE2MCwianRpIjoiSW9YMklQOExqanFCbVNLWiIsInN1YiI6NywicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSJ9.VrRMoD3264LLQ9IgSNjFMCP57mqeu8wRO_d9GIiQmvU",
              data: e.target.result,
            })
            .then(function (res) {
              console.log(res);
            });
        };
      }
    },
    // h5相机
    preSelects() {
      this.$refs.inputRef.click();
      this.isSshow = false;
    },
    // h5相机
    preSelectss() {
      this.$refs.inputRefs.click();
      this.isSshow = false;
    },
    deleteImg(ind) {
      // 删除图片
      var $this = this;
      $this.imgfilesback.splice($this.imgfilesback.indexOf(ind), 1);
    },
    click_s(i) {
      if (i == 3) {
        this.showB = false;
      } else if (i == 2) {
        this.preSelects();
        this.showB = false;
      } else if (i == 1) {
        this.preSelects();
        this.showB = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";
.post_sale {
  padding-bottom: rem(180px);
  & >>> .van-action-sheet__content {
    position: relative;
    box-sizing: border-box;
    height: rem(907px);
    padding: rem(95px) rem(60px) 0 rem(52px);
    > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: rem(63px);
      span {
        font-size: rem(32px);
      }
      i {
        width: rem(40px);
        height: rem(40px);
        border-radius: 50%;
        border: rem(1px) solid #707070;
      }
      img {
        width: rem(40px);
        height: rem(40px);
      }
    }
    em {
      position: absolute;
      display: block;
      width: rem(520px);
      height: rem(85px);
      text-align: center;
      line-height: rem(85px);
      color: #fff;
      background-color: #f44647;
      font-size: rem(32px);
      font-weight: 700;
      left: 50%;
      transform: translateX(-50%);
      bottom: rem(55px);
      letter-spacing: rem(3px);
    }
  }
  & >>> .van-action-sheet__header {
    display: none;
  }
  & >>> .showB {
    height: rem(250px);
    text-align: center;
    .van-action-sheet__content {
      padding: 0;
      > div {
        display: flex;
        justify-content: center;
        width: 100%;
        height: rem(80px);
        line-height: rem(80px);
        font-size: rem(28px);
        margin-bottom: 0;
        &:nth-child(3) {
          color: #f44647;
          letter-spacing: rem(3px);
        }
      }
    }
  }
  .post_sale_main {
    width: 100%;
    background-color: #f8f8f8;
    .sale_main_item {
      width: 100%;
      height: rem(358px);
      box-sizing: border-box;
      padding: rem(40px) rem(65px) 0 rem(32px);
      margin-top: rem(20px);
      background-color: #fff;
      .item_top {
        display: flex;
        img {
          display: block;
          width: rem(222px);
          height: rem(222px);
        }
        .itemRightCon {
          flex: 1;
          padding-left: rem(40px);
          strong {
            width: 100%;
            height: rem(45px);
            line-height: rem(45px);
            font-size: rem(32px);
            font-weight: 400;
            color: #000;
          }
          .p1 {
            width: 100%;
            height: rem(33px);
            line-height: rem(33px);
            font-size: rem(26px);
            font-weight: 400;
            color: #666;
            margin-top: rem(16px);
            display: block;
          }
          .p2 {
            width: 100%;
            height: rem(33px);
            line-height: rem(33px);
            font-size: rem(26px);
            font-family: font_pc;
            font-weight: 400;
            color: #666;
            margin-top: rem(16px);
            display: block;
          }
          p {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: rem(40px);
            line-height: rem(40px);
            font-size: rem(32px);
            font-weight: bold;
            color: #333;
            margin-top: rem(46px);
            font {
              font-size: rem(28px);
              font-weight: 700;
            }
          }
        }
      }
      .item_bottom {
        width: 100%;
        padding-left: rem(135px);
        margin-top: rem(30px);
        font-size: rem(26px);
        color: #999;
        span {
          margin-right: rem(21px);
        }
        font {
          color: #333;
        }
      }
    }
    .sale_type {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: rem(116px);
      line-height: rem(116px);
      padding: 0 rem(52px);
      padding-right: rem(30px);
      background-color: #fff;
      margin-top: rem(16px);
      > div {
        font-size: rem(32px);
        font-weight: 400;
        span {
          font-size: rem(28px);
          color: #999;
          margin-right: rem(80px);
        }
        img {
          margin-left: rem(20px);
          width: rem(16px);
          height: rem(30px);
          vertical-align: middle;
        }
      }
      .type_r {
        display: flex;
        > div {
          width: rem(60px);
          height: 100%;
        }
        .red {
          color: #f44647;
        }
      }
    }
    .sale_msg {
      width: 100%;
      height: rem(350px);
      margin-top: rem(16px);
      background-color: #fff;
      box-sizing: border-box;
      padding: rem(37px) rem(52px) 0;
      .msg_title {
        p {
          font-size: rem(32px);
          margin-bottom: rem(20px);
          font-weight: 400;
        }
        textarea {
          width: 100%;
          height: rem(250px);
          font-size: rem(28px);
          border: 0;
          outline: none;
          &::placeholder {
            font-size: rem(28px);
          }
        }
      }
    }
    .sela_img {
      width: 100%;
      // height: rem(569px);
      background-color: #fff;
      margin-top: rem(16px);
      box-sizing: border-box;
      padding: rem(37px) 0 0 rem(52px);
      .img_title {
        width: 100%;
        height: rem(32px);
        line-height: rem(32px);
        span {
          font-size: rem(32px);
          font-weight: 400;
          margin-right: rem(36px);
        }
        i {
          font-size: rem(28px);
          color: #999;
        }
      }
      .B_box {
        display: flex;
        flex-wrap: wrap;
        margin-top: rem(34px);
        .camera {
          position: relative;
          width: rem(190px);
          height: rem(190px);
          border: rem(3px) solid #eee;
          // margin-top: rem(34px);
          border-radius: rem(20px);
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: rem(60px);
            height: rem(50px);
          }
        }
        .item {
          position: relative;
          width: rem(190px);
          height: rem(190px);
          margin-right: rem(10px);
          margin-bottom: rem(10px);
          img {
            width: 100%;
            height: 100%;
            border-radius: rem(20px);
          }
          .delete {
            position: absolute;
            width: rem(40px);
            height: rem(40px);
            text-align: center;
            line-height: rem(40px);
            border-radius: 50%;
            background-color: #f44647;
            top: rem(-5px);
            right: rem(-5px);
          }
        }
      }
    }
    .submit_box {
      position: fixed;
      width: 100%;
      height: rem(125px);
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      .sela_submit {
        width: rem(686px);
        height: rem(100px);
        line-height: rem(100px);
        text-align: center;
        font-size: rem(32px);
        color: #fff;
        letter-spacing: rem(3px);
        background-color: #f44647;
        margin: 0 auto;
        // margin: rem(109px) auto rem(50px);
      }
    }
  }
}
</style>