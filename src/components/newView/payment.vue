<template>
  <div>
    <div class="payment" v-show="hide_buy">
      <div class="App-header">
        <div class="to_a iconfont iconzuo" @click="ind()"></div>
        <span>核对订单</span>
        <div class="to_b" style="visibility: hidden"></div>
      </div>
      <div class="payment_main">
        <div class="payment_main-t" v-if="dizhiL != ''">
          <div class="payment_main-t-lits">
            <img src="../../assets/images/Index_Img/dingwei.png" class="img" />
            <div class="item-con" @click="link_asses()">
              <p class="item-con-t">
                <strong>{{ dizhiL.receive_name }}</strong>
                <span>{{ dizhiL.receive_tel }}</span>
              </p>
              <p class="item-con-b">{{ dizhiL.area_info }}</p>
              <img
                class="v"
                src="../../assets/images/Index_Img/btn_left.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="payment_main-a" v-else @click="link_assess()">
          <div class="s">
            添加收货地址<img
              class="v"
              src="../../assets/images/Index_Img/btn_left.png"
              alt=""
            />
          </div>
        </div>
        <div class="payment_main-b">
          <div class="dds">
            <div class="payment_main-t-list">
              <div
                class="payment_main-t-item"
                v-for="(v, k) in qianbao"
                :key="k"
              >
                <div class="wrpper-cart-list-item-l">
                  <img :src="v.image" alt="" />
                </div>
                <div class="wrpper-cart-list-item-r p-relative">
                  <div class="titie">
                    <strong>{{ v.goods_name }}</strong>
                    <span class="s">{{ v.author }}</span>
                    <span class="s">{{ v.goods_no }}</span>
                  </div>
                  <div class="r-pirce p-absolute">
                    <div class="pirce">￥{{ v.goods_price }}</div>
                    <div class="num_jisu">x {{ v.goods_num }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="payment_main-t-bot">
              <div class="payment_main-t-botitem">
                <div class="sp_one">配送方式</div>
                <div class="sp_two">
                  快递 免费<img
                    src="../../assets/images/Index_Img/btn_left.png"
                    alt=""
                    style="visibility: hidden"
                  />
                </div>
              </div>
              <!-- <div class='payment_main-t-botitem' @click="yhj()">
                            <div class="sp_one">优惠券</div>
                            <div class="sp_two">选择优惠券<img src="../../assets/images/Index_Img/btn_left.png" alt=""></div>
                        </div>
                        <div class='payment_main-t-botitem'>
                            <div class="sp_one">支付方式</div>
                            <div class="sp_two"  @click="issg()">{{is_text}}
                            <img src="../../assets/images/Index_Img/btn_left.png" alt="" v-if="is_type==0">
                            <img src="../../assets/images/Index_Img/btn_left.png" alt="" v-else-if="is_type==1" class="orderInfo0122">
                            <img src="../../assets/images/Index_Img/btn_left.png" alt="" v-else-if="is_type==2" class="orderInfo0122s">
                            </div>
                        </div> -->
              <div class="payment_main-t-bot_list" v-if="is_show">
                <div class="payment_main-t-bots" @click="xiugai(1)">
                  <img
                    class="icon wx"
                    src="../../assets/images/Index_Img/wx.png"
                    alt=""
                  />
                  <b>微信支付</b>
                  <p :class="istrue1 ? 'active' : ''">
                    <img src="../../assets/images/Index_Img/gou.png" alt="" />
                  </p>
                </div>
                <div class="payment_main-t-bots" @click="xiugai(2)">
                  <img
                    class="icon zfb"
                    src="../../assets/images/Index_Img/zfb.png"
                    alt=""
                  />
                  <b>支付宝支付</b>
                  <p :class="istrue2 ? 'active' : ''">
                    <img src="../../assets/images/Index_Img/gou.png" alt="" />
                  </p>
                </div>
                <div class="payment_main-t-bots" @click="xiugai(3)">
                  <img
                    class="icon qb"
                    src="../../assets/images/Index_Img/zf.png"
                    alt=""
                  />
                  <b>钱包支付</b>
                  <p :class="istrue3 ? 'active' : ''">
                    <img src="../../assets/images/Index_Img/gou.png" alt="" />
                  </p>
                </div>
              </div>
              <div class="payment_main-t-botitem">
                <div class="sp_one">订单备注</div>
                <div class="sp_two s">
                  <input
                    type="text"
                    v-model="text_mesg"
                    placeholder="针对此订单的描述和要求做补充"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="payment_main-f">
        <div class="pirce">
          <span>商品金额：￥{{ Num_pirce }}</span
          ><span class="s">({{ Num_len }}件)</span
          ><span class="q">优惠卷：-￥0</span>
        </div>
        <div class="pirce_con">
          <span>运费：￥0</span><span class="s">合计：￥{{ Num_pirce }}</span>
        </div>
        <button id="Btn" @click="hide_buy = false">立即支付</button>
      </div>
    </div>
    <div class="pay_now" v-show="!hide_buy">
      <div class="App-header">
        <div class="to_a iconfont iconzuo" @click="hide_buy = true"></div>
        <span>收银台</span>
        <div class="to_b" style="visibility: hidden"></div>
      </div>
      <div class="pay_main commons_mainsContoApp">
        <div class="price">
          <p>{{ Num_pirce }}</p>
          <span>支付金额（元）</span>
        </div>
        <div class="wallet" @click="change_pay(1)">
          <div class="l">
            <img :src="srcPath1 + 'wallet.png'" />
            <span>钱包支付</span>
          </div>
          <div class="r" :class="{ selete: flag == 1 }">
            <img :src="srcPath1 + 'y.png'" v-show="flag == 1" alt="" />
          </div>
        </div>
        <div class="other">
          <div class="weixin" @click="change_pay(2)">
            <div class="l">
              <img :src="srcPath1 + 'weixin.png'" />
              <span>微信支付</span>
            </div>
            <div class="r" :class="{ selete: flag == 2 }">
              <img :src="srcPath1 + 'y.png'" v-show="flag == 2" alt="" />
            </div>
          </div>
          <div class="alipay" @click="change_pay(3)">
            <div class="l">
              <img :src="srcPath1 + 'alipay.png'" />
              <span>支付宝支付</span>
            </div>
            <div class="r" :class="{ selete: flag == 3 }">
              <img :src="srcPath1 + 'y.png'" v-show="flag == 3" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="buy" @click="payyy">立即支付</div>
    </div>
  </div>
</template>

<script>
import store from "@/store/store.js";
export default {
  name: "loading",
  data() {
    return {
      text_mesg: "",
      hide_buy: true, //控制支付台显示/隐藏
      istrue1: true,
      istrue2: false,
      istrue3: false,
      dizhiL: [],
      dizhiLs: [],
      flag: 1, //支付方式
      is_show: false,
      is_text: "微信支付",
      is_type: 0,
      money_pay: 2, // 支付类型
      qianbao: [],
      Num_len: 0, // 总数
      Num_pirce: 0, // 总价格
      is_rouid: "",
      srcPath: "http://res.pinjianapp.com/vue_wap/images/index/pay/", //配置地址
      srcPath1: "http://res.pinjianapp.com/vue_wap/images/pay/", //配置地址
      IdArray: [],
    };
  },
  // 获取主题列表的数据
  store,
  computed: {
    store: function () {
      return this.$store.state;
    },
  },
  methods: {
    ind() {
      this.$router.replace({
        path: `/cart`,
      });
      //  if(this.is_rouid == 'Cart'){
      //     this.$router.replace({
      //         path: `/cart`
      //     });
      //  }else{
      //      this.$router.replace({
      //         path: `/index`
      //     });
      //  }
    },
    link_asses() {
      this.$store.commit("Change_rouId", "payment");

      localStorage.setItem("get_Android_rouit", "payment");
      // localStorage.setItem('get_Android_rouit_id',JSON.stringify(this.IdArrayTrue));
      var href = window.location.href;
      var str = href.split("#");
      var rouit = str[0] + "#/sell/receipt";
      // window.android.meto_goback(rouit,'false','false');

      this.$router.push({
        path: `/sell/receipt/` + 1,
      });
    },
    //改变支付方式
    change_pay(i) {
      this.flag = i;
    },
    //支付
    submit() {
      var $this = this;
      if ($this.dizhiL == null) {
        alert("请添加收货地址");
        return;
      }
      if (this.flag == 1) {
        $this
          .$post($this.$api.create_order, {
            token: localStorage.getItem("token"),
            type: 0,
            info: $this.userinfo,
            remark: $this.text_mesg,
            is_money_pay: 1,
            addressid: $this.dizhiL.id,
          })
          .then((data) => {
            if (data.code == 200) {
              if (data.data.is_balance) {
                swal({
                  title: "支付成功",
                }).then((willDelete) => {
                  if (willDelete) {
                    $this.$router.replace({
                      path: `/payment/order/order_deliver`,
                    });
                  }
                });
              } else {
                swal({
                  title: "钱包余额不足",
                });
              }
            } else {
              swal({
                title: "没有默认地址",
                text: "请手动添加……",
              }).then((willDelete) => {
                if (willDelete) {
                  this.$store.commit("Change_rouId", "payment");
                  this.$router.replace({
                    path: `/sell/receipt`,
                  });
                }
              });
            }
          });
      } else if (this.flag == 2) {
        alert("微信支付开始");
        $this
          .$post($this.$api.create_order, {
            token: localStorage.getItem("token"),
            type: 0,
            info: $this.userinfo,
            remark: $this.text_mesg,
            is_money_pay: 2,
            addressid: $this.dizhiL.id,
          })
          .then((data) => {
            var wxAPP = JSON.stringify(data.data);
            console.log(wxAPP);
            window.android.WeChatpayment(wxAPP);
          });
      } else if (this.flag == 3) {
        alert("支付宝支付开始");
        $this
          .$post($this.$api.create_order, {
            token: localStorage.getItem("token"),
            type: 0,
            info: $this.userinfo,
            remark: $this.text_mesg,
            is_money_pay: 3,
            addressid: $this.dizhiL.id,
          })
          .then((data) => {
            window.android.Alipayment(data);
          });
      }
    },
    link_assess() {
      var href = window.location.href;
      var str = href.split("#");
      var rouit = str[0] + "#/sell/addreceipt";
      window.android.meto_goback(rouit, "false", "false");

      // localStorage.setItem('get_Android_rouit','payment');
      // this.$router.replace({
      //     path: `/sell/addreceipt`
      // });
    },
    // 查询默认地址

    // 结算提交
    payyy() {
      var $this = this;
      if ($this.dizhiL == null) {
        var href = window.location.href;
        var str = href.split("#");
        var rouit = str[0] + "#/login";
        window.android.meto_goback(rouit, "false", "false");
      }

      if ($this.money_pay == 1) {
        $this
          .$post($this.$api.create_orders, {
            token: localStorage.getItem("token"),
            type: 1,
            info: $this.IdArrayTrue,
            remark: $this.text_mesg,
            is_money_pay: 1,
            addressid: $this.dizhiL.id,
          })
          .then((data) => {
            if (data.code == 200) {
              if (data.data.is_balance) {
                swal({
                  title: "支付成功",
                }).then((willDelete) => {
                  if (willDelete) {
                    $this.$router.replace({
                      path: `/payment/order/order_deliver`,
                    });
                  }
                });
              } else {
                swal({
                  title: "钱包余额不足",
                });
              }
            } else {
              swal({
                title: "没有默认地址",
                text: "请手动添加……",
              }).then((willDelete) => {
                if (willDelete) {
                  this.$store.commit("Change_rouId", "payment");
                  this.$router.replace({
                    path: `/sell/receipt`,
                  });
                }
              });
            }
          });
      } else if ($this.money_pay == 2) {
        $this
          .$post($this.$api.create_orders, {
            token: localStorage.getItem("token"),
            type: 1,
            info: $this.IdArrayTrue,
            remark: $this.text_mesg,
            is_money_pay: 2,
            addressid: $this.dizhiL.id,
          })
          .then((data) => {
            var wxAPP = JSON.stringify(data.data);
            console.log(wxAPP);
            window.android.WeChatpayment(wxAPP);
          });
      } else if ($this.money_pay == 3) {
        $this
          .$post($this.$api.create_orders, {
            token: localStorage.getItem("token"),
            type: 1,
            info: $this.IdArrayTrue,
            remark: $this.text_mesg,
            is_money_pay: 3,
            addressid: $this.dizhiL.id,
          })
          .then((data) => {
            window.android.Alipayment(data);
          });
      }
    },
    issg() {
      if (this.is_type == 0 || this.is_type == 2) {
        this.is_type = 1;
        this.is_show = true;
      } else {
        this.is_type = 2;
        this.is_show = false;
      }
    },
    xiugai(val) {
      if (val == 1) {
        this.istrue1 = true;
        this.istrue2 = false;
        this.istrue3 = false;
        this.money_pay = 2;
        this.is_text = "微信支付";
      } else if (val == 2) {
        this.istrue2 = true;
        this.istrue1 = false;
        this.istrue3 = false;
        this.money_pay = 3;
        this.is_text = "支付宝支付";
      } else if (val == 3) {
        this.istrue3 = true;
        this.istrue1 = false;
        this.istrue2 = false;
        this.money_pay = 1;
        this.is_text = "钱包支付";
      }
    },
    yhj() {
      swal("服务暂未开通……", "请敬请期待！");
    },

    // 查询默认地址
    is_hide_tb() {
      var $this = this;
      $this
        .$post($this.$api.adddefault, {
          token: localStorage.getItem("token"),
        })
        .then((data) => {
          $this.dizhiL = data.data;
        });
    },

    // 微信支付成功 失败
    WeChatpaymentTrue() {
      alert("微信支付成功");
    },
    WeChatpaymentFalse() {
      alert("微信支付失败");
    },

    // 支付宝支付成功 失败
    AlipaymentTrue() {
      alert("支付宝支付成功");
    },
    AlipaymentFalse() {
      alert("支付宝支付失败");
    },
  },
  mounted() {
    var $this = this;
    // $this.IdArrayTrue = JSON.parse(localStorage.getItem('IdArrayTrue'));
    $this.IdArrayTrue = store.state.IdArrayTrue;
    $this.dizhiL = store.state.user_dizhi;

    $this.is_rouid = store.state.rouId;
    $this
      .$post($this.$api.get_cart_list_check, {
        token: localStorage.getItem("token"),
        id: $this.IdArrayTrue,
      })
      .then((data) => {
        $this.qianbao = data.data;
        for (var i = 0; i < $this.qianbao.length; i++) {
          $this.Num_pirce +=
            $this.qianbao[i].goods_price * $this.qianbao[i].goods_num;
          $this.Num_len += $this.qianbao[i].goods_num;
        }
      });

    if ($this.dizhiL == "") {
      $this.is_hide_tb();
    } else {
      $this.dizhiL = store.state.user_dizhi;
    }

    window.WeChatpaymentTrue = $this.WeChatpaymentTrue; // 微信支付成功方法
    window.WeChatpaymentFalse = $this.WeChatpaymentFalse; // 微信支付失败方法
    window.AlipaymentTrue = $this.AlipaymentTrue; // 支付宝支付成功方法
    window.AlipaymentFalse = $this.AlipaymentFalse; // 支付宝支付失败方法
  },
};
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import "../../assets/sass/base.scss";
.payment {
  .payment_main {
    width: 100%;
    background: #f8f8f8;
    position: absolute;
    left: 0;
    overflow-y: scroll;
    bottom: rem(260px);
    top: rem(128px);
    .payment_main-t {
      padding: rem(20px) rem(32px);
      height: rem(144px);
      .payment_main-t-lits {
        background: #fff;
        padding: rem(20px) rem(21px);
        display: flex;
        border-radius: rem(20px);
        .img {
          display: block;
          width: rem(27px);
          height: rem(33px);
          margin-top: rem(31px);
        }
        .item-con {
          flex: 1;
          margin-left: rem(34px);
          position: relative;
          .item-con-t {
            margin-top: rem(10px);
            line-height: 1;
            strong {
              font-size: rem(32px);
              color: rgba(0, 0, 0, 1);
              font-weight: 400;
              font-family: font_pc;
            }
            span {
              margin-left: rem(64px);
              font-size: rem(28px);
              font-weight: 400;
              color: rgba(0, 0, 0, 1);
              font-family: font_pc;
            }
          }
          .item-con-b {
            margin-top: rem(15px);
            font-size: rem(28px);
            letter-spacing: rem(1px);
            color: rgba(0, 0, 0, 1);
            font-family: font_pc;
          }
          .v {
            position: absolute;
            display: block;
            width: rem(16px);
            height: rem(30px);
            top: 50%;
            right: 0;
            transform: translate(0, -50%);
          }
        }
      }
    }
    .payment_main-b {
      padding: rem(0px) rem(32px) rem(20px);
      margin-top: rem(30px);
      .dds {
        border-radius: rem(20px);
        padding: rem(31px) rem(20px);
        background: #fff;
      }

      .payment_main-t-list {
        .payment_main-t-item {
          background: #ffffff;
          height: rem(249px);
          margin-bottom: rem(20px);
          display: flex;
          padding: rem(13px) 0 rem(14px);
          .wrpper-cart-list-item-l {
            width: rem(222px);
            height: 100%;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .wrpper-cart-list-item-r {
            flex: 1;
            margin-left: rem(40px);
            .titie {
              overflow: hidden;
              strong {
                font-size: rem(32px);
                color: rgba(0, 0, 0, 1);
                font-weight: 400;
                height: rem(45px);
                line-height: rem(45px);
                font-family: font_pc;
              }
              .s {
                display: block;
                font-size: rem(26px);
                height: rem(37px);
                line-height: rem(37px);
                color: rgba(153, 153, 153, 1);
                font-family: font_pc;
                margin-top: rem(5px);
              }
            }
            .r-pirce {
              width: 100%;
              bottom: rem(3px);
              left: 0;
              display: flex;
              .pirce {
                font-size: rem(32px);
                color: rgba(0, 0, 0, 1);
                font-weight: bold;
                font-family: font_b;
              }
              .num_jisu {
                margin-left: auto;
                font-size: rem(32px);
                color: rgba(0, 0, 0, 1);
                font-family: font_pc;
              }
            }
          }
        }
      }
      .payment_main-t-bot {
        .payment_main-t-botitem {
          height: rem(86px);
          line-height: rem(86px);
          background: #fff;
          display: flex;
          box-sizing: content-box;
          margin-top: rem(20px);
          .sp_one {
            font-size: rem(32px);
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            font-family: font_pc;
            span {
              margin: 0 rem(5px);
              color: red;
            }
          }
          .sp_two {
            font-size: rem(28px);
            color: #666;
            text-align: right;
            margin-left: auto;
            display: flex;
            font-family: font_pc;
            input {
              outline: 0;
              border: 0;
              display: block;
              width: 100%;
              height: 100%;
              font-size: rem(28px);
              text-align: right;
              padding-left: rem(20px);
              color: rgba(153, 153, 153, 1);
              font-family: font_pc;
              font-weight: 400;
            }
            span {
              margin: 0 rem(5px);
              color: red;
            }
            .icon img {
              width: rem(40px);
              height: 100%;
            }
            .icon img:nth-of-type(2) {
              width: rem(120px);
            }
          }
          .sp_two.s {
            flex: 1;
            margin-right: 0;
          }
          img {
            display: block;
            width: rem(16px);
            height: rem(30px);
            margin-top: rem(28px);
            margin-left: rem(54px);
          }
        }
        .payment_main-t-botitem:nth-of-type(1) {
          margin-top: rem(40px);
        }
        .payment_main-t-bots {
          margin-top: rem(18px);
          height: rem(60px);
          line-height: rem(60px);
          display: flex;
          .icon {
            display: block;
            width: rem(40px);
          }
          .wx {
            height: rem(36px);
            margin-top: rem(12px);
          }
          .zfb {
            height: rem(36px);
            margin-top: rem(10px);
          }
          .qb {
            height: rem(42px);
            margin-top: rem(6px);
          }
          b {
            margin-left: rem(63px);
            font-family: 黑体;
            font-size: rem(28px);
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
          }
          p {
            width: rem(32px);
            height: rem(32px);
            background: rgba(255, 255, 255, 1);
            border: rem(1px) solid rgba(112, 112, 112, 1);
            border-radius: 50%;
            margin-top: rem(14px);
            margin-left: auto;
            img {
              display: block;
              width: rem(22px);
              height: rem(16px);
              margin: 0 auto;
              margin-top: rem(8px);
              display: none;
            }
          }
          p.active {
            background: rgba(0, 0, 0, 1);
            img {
              display: block;
            }
          }
        }
      }
    }
    .payment_main-a {
      padding: rem(20px) rem(32px);
      height: rem(144px);
      .s {
        background: #fff;
        padding: rem(20px) rem(21px);
        display: flex;
        border-radius: rem(20px);
        height: rem(128px);
        line-height: rem(88px);
        justify-content: center;
        font-family: 黑体;
        font-size: rem(32px);
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        position: relative;
        .v {
          position: absolute;
          display: block;
          width: rem(16px);
          height: rem(30px);
          top: 50%;
          right: rem(21px);
          transform: translate(0, -50%);
        }
      }
    }
  }
  .payment_main-f {
    width: 100%;
    height: rem(260px);
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 rem(32px);
    .pirce {
      margin-top: rem(19px);
      color: rgba(153, 153, 153, 1);
      display: flex;
      font-size: rem(24px);
      font-family: font_pc;
      .s {
        margin-left: rem(10px);
      }
      .q {
        margin-left: auto;
      }
    }
    .pirce_con {
      margin-top: rem(17px);
      color: rgba(153, 153, 153, 1);
      display: flex;
      font-size: rem(24px);
      font-family: font_pc;
      .s {
        margin-left: auto;
        font-size: rem(32px);
        color: #f44647;
        font-weight: bold;
        font-family: font_b;
      }
    }
    #Btn {
      width: 100%;
      color: #fff;
      background: #f44647;
      height: rem(83px);
      line-height: rem(83px);
      font-size: rem(32px);
      border-radius: rem(42px);
      font-family: font_b;
      margin-top: rem(31px);
      outline: none;
      border: 0;
    }
  }
}
.pay_now {
  .selete {
    border: none !important;
  }
  .pay_main {
    background-color: #f8f8f8;
    height: 100vh;
    .price {
      width: rem(686px);
      height: rem(210px);
      background-color: #fff;
      border-radius: rem(10px);
      margin: rem(20px) auto 0;
      padding-top: rem(48px);
      text-align: center;
      p {
        font-size: rem(60px);
        margin-bottom: rem(24px);
      }
      span {
        font-size: rem(30px);
        color: #666;
      }
    }
    .wallet {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: rem(686px);
      height: rem(145px);
      background-color: #fff;
      margin: rem(22px) auto 0;
      border-radius: rem(10px);
      padding: 0 rem(42px) 0 rem(56px);
      .l {
        img {
          width: rem(50px);
          height: rem(50px);
          vertical-align: middle;
          margin-right: rem(32px);
        }
      }
      .r {
        width: rem(40px);
        height: rem(40px);
        border-radius: 50%;
        overflow: hidden;
        border: rem(1px) solid #707070;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .other {
      width: rem(686px);
      margin: rem(16px) auto 0;
      border-radius: rem(10px);
      padding-top: 0 rem(20px);
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: rem(686px);
        height: rem(145px);
        background-color: #fff;
        padding: 0 rem(42px) 0 rem(56px);
        .l {
          img {
            width: rem(50px);
            height: rem(50px);
            vertical-align: middle;
            margin-right: rem(32px);
          }
        }
        .r {
          width: rem(40px);
          height: rem(40px);
          border-radius: 50%;
          overflow: hidden;
          border: rem(1px) solid #707070;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .weixin {
        border-bottom: rem(1px) solid #eee;
      }
    }
  }
  .buy {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: rem(45px);
    width: rem(520px);
    height: rem(85px);
    text-align: center;
    line-height: rem(85px);
    background-color: #f44647;
    color: #fff;
    font-size: rem(32px);
    font-weight: 700;
    letter-spacing: rem(3px);
  }
}
.orderInfo0122 {
  animation: customAnimation1 500ms;
  animation-fill-mode: forwards;
}
@keyframes customAnimation1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
}
.orderInfo0122s {
  animation: customAnimation1s 500ms;
  animation-fill-mode: forwards;
}
@keyframes customAnimation1s {
  from {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
