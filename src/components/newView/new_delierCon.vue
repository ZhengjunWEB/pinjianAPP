<template>
  <div class="delierCon">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="mi()"></div>
      <span>订单详情</span>
      <div class="to_b"></div>
    </div>
    <div class="delierCon_main commons_mainsContoApp">
      <div class="delierCon_main_title" v-if="rou_con.cn_status == 0">
        <div>您有待付款订单 &nbsp;&nbsp;&nbsp;<span>23:59:59</span></div>
        <p>
          为确保您的购物体验，请在倒计时结束前完成付款，倒计时结束后我们将会关闭订单
        </p>
      </div>
      <div class="delierCon_main_title" v-else-if="rou_con.cn_status == 1">
        等待发货中
        <p>
        您已支付成功等待您的玩物发货中，祝您有一个美好的购物体验
        </p>
      </div>
      <div class="delierCon_main_title" v-else-if="rou_con.cn_status == 2">
        等待收货中
        <p>
          玩物已发出，请注意您的物流信息。还剩7天24时自动确认收货
        </p>
      </div>
      <div class="delierCon_main_title" v-else-if="rou_con.cn_status == 3">
        已完成
      </div>

      <div class="delierCon_main_dizhi1">
        <div class="payment_main-t-lits">
          <div>
            <i>默认</i>
            <span
              >{{ rou_con.province }}{{ rou_con.city
              }}{{ rou_con.region }}</span
            >
          </div>
          <h3>{{ rou_con.address }}</h3>
          <div>
            <span>{{ rou_con.receive_name }}</span>
            <span>{{ rou_con.receive_tel }}</span>
          </div>
        </div>
      </div>
      <div class="delierCon_main_ListCon">
        <div
          class="delierCon_main_items"
          v-for="(a, b) in rou_con.goods_list"
          :key="b"
        >
          <img :src="a.image" alt="" />
          <div class="itemRightCon">
            <strong>{{ a.goods_name }}</strong>
            <span class="p1">{{a.author}}</span>
            <span class="p2">{{a.goods_no}}</span>
            <p>
              <img src="http://res.pinjianapp.com/vue_wap/images/c_money.png" alt=""> {{ a.goods_price }}<font>x{{ a.goods_num }}</font>
            </p>
          </div>
        </div>

        <div class="item_li">
          <div class="my_spn">
            <span>商品总价：</span><span>￥{{ rou_con.total_price }}</span>
          </div>
          <div class="my_spn"><span>运费（快递）：</span><span>￥0</span></div>
          <div class="my_spn"><span>优惠卷抵扣：</span><span>￥0</span></div>
        </div>

        <div class="zj_pirce">
          <span>实付款</span>
          <span>￥{{ rou_con.total_price }}</span>
        </div>
        <div class="zi_btns" v-if="rou_con.cn_status == 0">
          <div class="btns" @click="zehifu()">立即支付</div>
          <div class="btns btnss" @click="show = true">取消订单</div> <!--order() -->
        </div>
        <div class="zi_btns" v-else-if="rou_con.cn_status == 1">
          <!--<div class="btn">查看物流</div>-->
          <div class="btns" @click="send">提醒发货</div>
        </div>
        <div class="zi_btns" v-else-if="rou_con.cn_status == 2">
          <div class="btns">查看物流</div>
          <div class="btns btnss" @click="Receiving()">确认收货</div>
        </div>
        <div class="zi_btns" v-else-if="rou_con.cn_status == 3">
          <div class="btns" @click="go_post_sale(rou_con.id)">申请售后</div>
          <div class="btns btnss">评价</div>
        </div>
      </div>

      <div class="foot_main" v-if="status == '等待收货'">
        <h1>订单信息</h1>
        <div class="foot_main_item">
          <span>快递公司</span>
          <span>圆通快递</span>
        </div>
        <div class="foot_main_item">
          <span>快递编号</span>
          <span>yt78979454654</span>
        </div>
        <div class="foot_main_item">
          <span>订单编号</span>
          <span>{{ rou_con.order_no }}</span>
        </div>
        <div class="foot_main_item">
          <span>订单时间</span>
          <span>{{ rou_con.add_time }}</span>
        </div>
        <div class="foot_main_item">
          <span>支付方式</span>
          <span v-if="rou_con.pay_type == 'wxpay'">微信支付</span>
          <span v-else-if="rou_con.pay_type == 'alipay'">支付宝支付</span>
          <span v-else-if="rou_con.pay_type == 'money_pay'">钱包支付</span>
        </div>

        <!-- <b></b> -->
        <!-- <div class="btn_of">
          <div class="btn_from">
            <img src="~@/assets/images/Mi/ben_kf.png" alt="" /><span
              >联系客服</span
            >
          </div>
          <div class="btn_from" @click="iphome()">
            <img src="~@/assets/images/Mi/ben_ihope.png" alt="" /><span
              >拨打电话</span
            >
          </div>
        </div> -->
      </div>
    </div>
    <!-- 弹出框 -->
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <h3>您确定要放弃支付么</h3>
        <p>您的订单在23个小时59分钟内未支付将被取消，请尽快完成支付</p>
        <span class="btn1" @click="show = false">放弃</span>
        <span class="btn2">继续支付</span>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "delierCon",
  data() {
    return {
      rou_id: "",
      rou_con: [],
      status: '',
      show: false
      // rou_num:''
    };
  },
  mounted() {
    var $this = this;
    $this.rou_id = $this.$route.params.order_id;
    this.status = this.$route.query.status
    console.log(this.rou_id);
    $this
      .$post($this.$api.order_Listcon, {
        token: localStorage.getItem("token"),
        id: $this.rou_id,
      })
      .then((data) => {
        $this.rou_con = data.data;
        console.log($this.rou_con.pay_type);

        // if($this.rou_con.pay_type == 'wxpay'){
        //     $this.rou_num = 2
        // }else if($this.rou_con.pay_type == 'alipay'){
        //     $this.rou_num = 3
        // }else if($this.rou_con.pay_type == 'money_pay'){
        //     $this.rou_num = 1
        // }
      });
    window.WeChatpaymentTrue = $this.WeChatpaymentTrue; // 微信支付成功方法
    window.WeChatpaymentFalse = $this.WeChatpaymentFalse; // 微信支付失败方法
    window.AlipaymentTrue = $this.AlipaymentTrue; // 支付宝支付成功方法
    window.AlipaymentFalse = $this.AlipaymentFalse; // 支付宝支付失败方法
  },
  methods: {
    mi() {
      this.$router.go(-1);
    },
    iphome() {
      window.android.callPhone(this.rou_con.phone);
    },
    go_post_sale(id) {
      this.$router.push({
        path: `/payment/order/postSale/${id}`,
      });
    },
    send() {  //提醒发货 虚假的
      this.$toast('提醒发货成功！')
    },

    // 再次支付
    zehifu() {
      var $this = this;
      if ($this.rou_con.pay_type == "wxpay") {
        $this
          .$post($this.$api.continue_pay, {
            token: localStorage.getItem("token"),
            id: $this.rou_con.id,
            is_money_pay: 2,
          })
          .then((data) => {
            var wxAPP = JSON.stringify(data.data);
            window.android.WeChatpayment(wxAPP);
          });
      } else if ($this.rou_con.pay_type == "alipay") {
        $this
          .$post($this.$api.continue_pay, {
            token: localStorage.getItem("token"),
            id: $this.rou_con.id,
            is_money_pay: 3,
          })
          .then((data) => {
            window.android.Alipayment(data);
          });
      } else if ($this.rou_con.pay_type == "money_pay") {
        return;
      }
    },

    // 支付宝支付成功 失败
    AlipaymentTrue() {
      alert("支付宝支付成功");
    },
    AlipaymentFalse() {
      alert("支付宝支付失败");
    },

    // 微信支付成功 失败
    WeChatpaymentTrue() {
      alert("微信支付成功");
    },
    WeChatpaymentFalse() {
      alert("微信支付失败");
    },

    Receiving() {
      var $this = this;
      $this
        .$post($this.$api.order_status, {
          token: localStorage.getItem("token"),
          order_id: $this.rou_con.id,
        })
        .then((data) => {
          if (data.code == 200) {
            swal("收货成功", "susses");
            this.$router.go(-1); //返回上一层
          } else {
            swal("收货失败", "error");
          }
        });
    },

    // 取消订单
    order() {
      var $this = this;
      $this
        .$post($this.$api.close_order, {
          token: localStorage.getItem("token"),
          order_no: $this.rou_con.order_no,
        })
        .then((data) => {
          if (data.code == 200) {
            this.$router.go(-1); //返回上一层
          } else {
            swal("订单无法取消", "error");
          }
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/cartCommon.scss";
.delierCon {
  &>>>.van-overlay {
    .wrapper {
      height: rem(366px);
      padding: rem(60px) rem(76px) 0;
      text-align: left;
      h3 {
        font-size: rem(32px);
        font-weight: 700;
        margin-bottom: rem(32px);
        text-align: center;
      }
      p {
        font-size: rem(28px);
        color: #333;
        line-height: 1.5;
        margin-bottom: rem(48px);
      }
      span {
        display: inline-block;
        width: rem(200px);
        height: rem(85px);
        text-align: center;
        line-height: rem(85px);
        font-size: rem(28px);
        font-weight: 700;
        letter-spacing: rem(2px);
      }
      .btn1 {
        background-color: #eee;
      }
      .btn2 {
        background-color: #F44647;
        color: #fff;
        margin-left: rem(30px);
      }
    }
  }
}

.delierCon_main {
  position: absolute;
  width: 100%;
  padding-top: rem(88px);
  background: rgba(248, 248, 248, 1);
  .delierCon_main_title {
    width: rem(750px);
    box-sizing: border-box;
    padding: rem(60px) rem(94px) rem(60px) rem(32px);
    background: #2b2c3e;
    font-size: rem(36px);
    letter-spacing: rem(3px);
    font-weight: bold;
    color: #fff;
    p {
      font-size: rem(26px);
      opacity: 0.81;
      line-height: 1.5;
      font-weight: normal;
      margin-top: rem(30px);
    }
  }
  .delierCon_main_dizhi1 {
    padding: rem(32px);
    background-color: #fff;
    .payment_main-t-lits {
      background: #fff;
      // padding: rem(20px) rem(21px);
      div {
        i {
          display: inline-block;
          width: rem(58px);
          height: rem(35px);
          line-height: rem(35px);
          text-align: center;
          background-color: #f44647;
          border-radius: rem(35px);
          font-size: rem(18px);
          color: #fff;
        }
        span {
          font-size: rem(28px);
          margin-right: rem(28px);
        }
      }
      h3 {
        font-size: rem(32px);
        margin: rem(16px) 0 rem(20px) 0;
        font-weight: 700;
        line-height: 1.3;
      }
    }
  }
  .delierCon_main_ListCon {
    width: rem(750px);
    padding: rem(30px) rem(32px) rem(80px);
    background: rgba(255, 255, 255, 1);
    margin: 0 auto;
    margin-top: rem(20px);
    .delierCon_main_items {
      width: 100%;
      height: rem(222px);
      display: flex;
      margin-bottom: rem(47px);
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
          font-family: font_pc;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
        }
        .p1 {
          width: 100%;
          height: rem(33px);
          line-height: rem(33px);
          font-size: rem(24px);
          font-family: font_pc;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          margin-top: rem(3px);
          display: block;
        }
        .p2 {
          width: 100%;
          height: rem(33px);
          line-height: rem(33px);
          font-size: rem(24px);
          font-family: font_pc;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          margin-top: rem(4px);
          display: block;
        }
        p {
          width: 100%;
          height: rem(40px);
          line-height: rem(40px);
          font-size: rem(28px);
          font-family: font_b;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          margin-top: rem(9px);
          img {
            display: inline-block;
            width: rem(12px);
            height: rem(20px);
            // vertical-align: text-bottom;
          }
          font {
            margin-left: rem(15px);
            font-size: rem(20px);
          }
        }
      }
    }
    .item_li {
      margin-top: rem(17px);
      .my_spn {
        display: flex;
        height: rem(33px);
        line-height: rem(33px);
        margin-top: rem(10px);
        span:nth-of-type(1) {
          font-size: rem(24px);
          font-family: font_pc;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
        span:nth-of-type(2) {
          font-size: rem(24px);
          font-family: font_pc;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          margin-left: auto;
        }
      }
    }
    .zj_pirce {
      margin-top: rem(60px);
      height: rem(45px);
      line-height: rem(45px);
      display: flex;
      span:nth-of-type(1) {
        font-size: rem(32px);
        font-family: font_pc;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
      span:nth-of-type(2) {
        font-size: rem(32px);
        font-family: font_pc;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        margin-left: auto;
      }
    }
    .zi_btns {
      display: flex;
      justify-content: flex-end;
      margin-top: rem(50px);
      .btns {
        width: rem(248px);
        height: rem(100px);
        line-height: rem(100px);
        border: rem(1px) solid #999;
        box-sizing: border-box;
        opacity: 1;
        font-size: rem(32px);
        font-weight: bold;
        color: #999;
        margin-top: rem(20px);
        text-align: center;
        letter-spacing: rem(3px);
      }
      .btnss {
        color: #fff;
        margin-top: rem(20px);
        margin-left: rem(20px);
        background-color: #f44647;
        border: none;
      }
    }
  }
  .foot_main {
    margin: 0 auto;
    margin-top: rem(20px);
    padding: rem(30px) rem(32px) rem(45px);
    background: #fff;
    h1 {
      position: relative;
      height: rem(50px);
      line-height: rem(50px);
      font-size: rem(38px);
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      padding-left: rem(27px);
      &::before {
        content: '';
        position: absolute;
        width: rem(11px);
        height: rem(43px);
        background: linear-gradient(180deg, #F44647 0%, rgba(244, 70, 71, 0.25) 100%);
        top: 0;
        left: 0;
      }
    }
    .foot_main_item {
      height: rem(45px);
      line-height: rem(45px);
      display: flex;
      font-size: rem(28px);
      font-weight: 400;
      color: #333;
      margin-top: rem(10px);
      span:nth-of-type(2) {
        margin-left: auto;
        font-size: rem(28px);
        color: #666;
      }
    }
    .foot_main_item:nth-of-type(1) {
      margin-top: rem(20px);
    }
    b {
      margin-top: rem(41px);
      display: block;
      background: rgba(225, 225, 225, 1);
      height: rem(1px);
    }
    .btn_of {
      margin-top: rem(38px);
      height: rem(50px);
      line-height: rem(50px);
      padding: 0 rem(65px);
      display: flex;
      .btn_from {
        display: flex;
        img {
          display: block;
          width: rem(50px);
          height: rem(50px);
        }
        span {
          display: block;
          font-size: rem(32px);
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          margin-left: rem(20px);
        }
      }
      .btn_from:nth-of-type(2) {
        margin-left: auto;
      }
    }
  }
}
</style>
