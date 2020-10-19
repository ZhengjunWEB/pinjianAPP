<template>
  <div class="MI_wrpper">
    <div class="MI_header">
      <div class="Mi_headercON">
        <div class="MI_heade_img">
          <img :src="user_Img" alt @click="up_img()" />
        </div>
        <div class="MI_heade_info">
          <p class="lv">{{time_num.nickname}}</p>
          <p class="time">上次登录：{{time_num.last_login_time}}</p>
        </div>
        <div class="MI_heade_setting">
          <router-link to="/mi/m_message">
          <div class="set_l">
            <img class="set_l" :src="srcPath+'msg.png'" alt />
            <span>99+</span>
          </div>
          </router-link>
          <div class="set_r" @click="sell">
            <img :src="srcPath+'setting.png'" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="Mi_main p-relative"> -->

    <!-- 头部分类 -->
    <div class="MI_head_ma">
      <div @click="r_link(1)">
        <span>{{MI_user_num.favorites_count}}</span>
        <p>我的收藏</p>
      </div>
      <div @click="r_link(2)">
        <span>{{MI_user_num.enquiry_count}}</span>
        <p>我的询价</p>
      </div>
      <div @click="r_link(3)">
        <span>{{MI_user_num.coupons_count}}</span>
        <p>优惠券</p>
      </div>
    </div>

    <!-- 我的订单 -->
    <div class="Mi_main-header">
      <!-- <div class="order_top">
        <h2>我的订单</h2>
        <span @click="order(0)">查看全部</span>
      </div>-->
      <!-- <div class="Mi-main_t">
        <h2>我的订单</h2>
        <span @click="order(0)">查看全部</span>
      </div>-->
      <div class="order_top">
        <h2>我的订单</h2>
        <span>查看全部</span>
      </div>
      <div class="Mi-main-b">
        <div class="Mi-b-item" @click="order(1)">
          <img :src="srcPath+'mi1.png'" alt /> 
          <span>待付款</span>
        </div>
        <div class="Mi-b-item" @click="order(2)">
          <img :src="srcPath+'mi2.png'" alt />
          <span>待发货</span>
        </div>
        <div class="Mi-b-item" @click="order(3)">
          <img :src="srcPath+'mi3.png'" alt />
          <span>待收货</span>
        </div>
        <div class="Mi-b-item" @click="order(4)">
          <img :src="srcPath+'mi4.png'" alt />
          <span>已完成</span>
        </div>
        <div class="Mi-b-item" @click="order(5)">
          <img :src="srcPath+'mi5.png'" alt />
          <span>售后</span>
        </div>
      </div>
    </div>

    <!-- 我的钱包 -->
    <div class="Mi_main-pirce">
      <div class="pirce_top">
        <h2>我的钱包</h2>
        <span>查看全部</span>
      </div>
      <div class="pirce_body">
        <div class="user_hu">
          <p>余额</p>
          <i>￥</i>
          <span>{{Math.round(money)}}</span>
        </div>
        <div class="youhui" @click="coupon">
          <img :src="httpsCdn_Img+'mi6.png'" alt />
          <p>优惠卷</p>
        </div>
      </div>
    </div>
    <!-- 我的常用 -->
    <div class="MI_often">
      <div class="often_top">
        <h2>我的常用</h2>
        <span>查看全部</span>
      </div>
      <div class="often_body">
        <div>
          <router-link to="/payment/adviser" tag="div">
            <img :src="srcPath +'mi12.png'" alt />
            <p>专属顾问</p>
          </router-link>
        </div>
        <div>
          <router-link to="/payment/comm_problem" tag="div">
            <img :src="srcPath + 'mi7.png'" alt />
            <p>常见问题</p>
          </router-link>
        </div>
        <div  @click="sellReceipt()">
          <!-- <router-link></router-link> -->
          <img :src="srcPath + 'mi8.png'" alt />
          <p>收货地址</p>
        </div>
        <div>
          <router-link to="/sell/feedback" tag="div">
            <img :src="srcPath + 'mi9.png'" alt />
            <p>意见反馈</p>
          </router-link>
        </div>
        <div @click="tankaung">
          <img :src="srcPath + 'mi10.png'" alt />
          <p>积分商城</p>
        </div>
        <div>
          <router-link to="/payment/aboutus" tag="div">
            <img :src="srcPath + 'mi11.png'" alt />
            <p>关于我们</p>
          </router-link>
        </div>
      </div>
    </div>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
// import NavBottom from "@/components/Common/NavBottom";
import NavBottom from "@/components/Common/new_bottom";
import store from "@/store/store.js";
export default {
  name: "Mi",
  data() {
    return {
      HeaderCon_goods_day: [],
      time_num: [],
      MI_user_num: [],
      money: "",
      iskong: "",
      srcPath: 'http://res.pinjianapp.com/vue_wap/images/mi/', //配置地址
      u_Img: "http://console.pinjianapp.com/api/user/avatar", // 上传地址
      user_Img: "",

      httpsCdn_Img: "http://cdn.pinjianapp.com/web_app/img/Mi/", // 配置地址
    };
  },
  store,
  // 计算属性
  computed: {
    store: function () {
      return this.$store.state;
    },
  },
  components: {
    // 底部组件
    NavBottom,
  },
  mounted() {
    var $this = this;
    // 首页底部分类
    $this.time_num = JSON.parse(localStorage.getItem("user_info"));
    $this.user_Img = $this.time_num.avatar;
    // $this.time_num = dsd.last_login_time;
    // 钱包
    $this.oAtrue();
  },
  methods: {
    // 页面数据 初始化
    oAtrue() {
      var $this = this;
      // 钱包
      $this
        .$post($this.$api.getlistuser_money, {
          token: localStorage.getItem("token"),
        })
        .then((data) => {
          $this.money = data.data;
        });

      // 计数
      $this
        .$post($this.$api.get_user_sum, {
          token: localStorage.getItem("token"),
        })
        .then((data) => {
          $this.MI_user_num = data.data;
        });
    },
    //优惠券
    coupon() {
      this.$router.push({
        path: '/mi/coupon'
      })
    },

    tankaung() {
      swal("功能正在研发中……", "请敬请期待！");
    },
    selectItem(item) {
      var $this = this;
      $this.$store.commit("Change_rouId", "Mi");
      this.$router.replace({
        path: `/home/indexdetails/${item.id}`,
      });
    },
    sell() {
      this.$router.push({
        path: `/sell/exit`,
      });
    },
    sellReceipt() {
      this.$router.push({
        path: `/sell/receipt/`+0,
      });
    },

    //// 关于我们
    sellauth() {
      this.$router.push({
        path: `/payment/aboutus`,
      });
    },
    order(value) {
      if (value == "5") {
        this.$router.push({
          path: '/mi/m_personalcon'
        })
      } else if (value == "0") {
        this.$router.replace({
          path: `/payment/order`,
        });
      } else if (value == "1") {
        this.$router.replace({
          path: `/payment/order/order_payment`,
        });
      } else if (value == "2") {
        this.$router.replace({
          path: `/payment/order/order_deliver`,
        });
      } else if (value == "3") {
        this.$router.replace({
          path: `/payment/order/order_Receiving`,
        });
      } else if (value == "4") {
        this.$router.replace({
          path: `/payment/order/order_complete`,
        });
      }
    },

    //// 专属顾问
    adviser() {
      this.$router.push({
        path: `/payment/adviser`,
      });
    },

    ///// 常见问题
    problem() {
      this.$router.push({
        path: `/payment/comm_problem`,
      });
    },

    //// 消息中心 （砍掉）
    sellsystem() {
      this.$router.replace({
        path: `/sell/system`,
      });
    },

    //// 意见反馈
    sellfeedback() {
      this.$router.push({
        path: `/sell/feedback`,
      });
    },

    sellintegral() {
      swal("积分商城暂未开放………", "请敬请期待……");
    },
    // 上传图片
    up_img() {
      var $this = this;
      var token = localStorage.getItem("token");
      window.android.selectImage(token, $this.u_Img, 1);
    },

    r_link(val) {
      var href = window.location.href;
      var str = href.split("#");
      if (val == 1) {
        this.$router.push({
          path: `/mi/collection`,
        });
      } else if (val == 2) {
        this.$router.push({
          path: `/mi/inquiry`,
        });
      }
    },
  },
  activated() {
    this.oAtrue();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
/* 引入 基础 scss */
@import "@/assets/sass/base.scss";
// @import '../assets/sass/IndexCommon.scss';

.MI_wrpper {
  width: 100%;
  margin-bottom: 128px;
  // background-color: pink;
  background-color: #f8f8f8;
  box-sizing: border-box;
  position: relative;
  .MI_header {
    // margin-bottom: rem(71px);
    padding: rem(119px) rem(31px) rem(71px) rem(32px);
    background-color: #fff;
    .Mi_headercON {
      display: flex;
      width: 100%;
      height: rem(150px);
      // background-color: red;
      .MI_heade_img {
        img {
          width: rem(150px);
          height: rem(150px);
        }
      }
      .MI_heade_info {
        box-sizing: border-box;
        padding-left: rem(24px);
        padding-top: rem(33px);
        .lv {
          font-size: rem(42px);
          margin-bottom: rem(26px);
          color: #333333;
          font-weight: 600;
        }
        .time {
          font-size: rem(24px);
          color: #999999;
        }
      }
      .MI_heade_setting {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: rem(148px);
        height: rem(48px);
        // background-color: pink;
        top: rem(61px);
        right: rem(32px);
        img {
          width: rem(48px);
          height: rem(48px);
        }
        .set_l {
          position: relative;
          span {
            position: absolute;
            height: rem(35px);
            line-height: rem(35px);
            padding: 0 rem(5px);
            border-radius: rem(35px);
            font-size: rem(24px);
            top: rem(-12px);
            left: rem(24px);
            background-color: #f44647;
            color: #fff;
          }
        }
      }
    }
  }
  .MI_head_ma {
    display: flex;
    justify-content: space-between;
    width: 100%;
    // padding-left: rem(47px);
    // padding-right: rem(75px);
    // margin-bottom: rem(94px);
    padding: 0 rem(75px) rem(94px) rem(47px);
    background-color: #fff;
    > div {
      // width: rem(112px);
      height: rem(81px);
      // background-color: pink;
      text-align: center;
      span {
        font-size: rem(32px);
        color: #333;
        font-weight: bold;
      }
      p {
        font-size: rem(28px);
        color: #999;
        margin-top: rem(20px);
      }
    }
  }
  .Mi_main-header {
    width: 100%;
    height: rem(289px);
    padding: 0 rem(32px) 0 rem(32px);
    border-bottom: rem(16px) solid #f2f2f2;
    background-color: #fff;
    .Mi-main_t {
      width: 100%;
      height: rem(36px);
      line-height: rem(36px);
      display: flex;
      font-size: rem(36px);
      font-family: font_b;
      font-weight: 800;
      h2 {
        font-size: rem(36px);
        font-weight: 700;
        color: #000;
      }
      span {
        font-size: rem(24px);
        flex: 1;
        text-align: right;
        font-weight: 400;
        // font-family: font_b;
        color: #999;
      }
    }
    .order_top {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: rem(40px) 0 0 0;
      h2 {
        font-size: rem(36px);
        font-weight: 700;
      }
      span {
        font-size: rem(24px);
        color: #999;
      }
    }
    .Mi-main-b {
      width: 100%;
      display: flex;
      margin-top: rem(48px);
      .Mi-b-item {
        width: 25%;
        img {
          width: rem(60px);
          height: rem(60px);
          display: block;
          margin: 0 auto;
          margin-top: rem(21px);
        }
        span {
          display: block;
          text-align: center;
          font-size: rem(28px);
          margin-top: rem(10px);
          font-family: font_pc;
          font-weight: 400;
          color: #666;
        }
      }
    }
  }
  //我的钱包
  .Mi_main-pirce {
    width: 100%;
    height: rem(262px);
    // background-color: pink;
    padding: rem(40px) rem(32px) 0 rem(32px);
    border-bottom: rem(16px) solid #f2f2f2;
    background-color: #fff;
    .pirce_top {
      display: flex;
      justify-content: space-between;
      margin-bottom: rem(48px);
      h2 {
        font-size: rem(36px);
        font-weight: 700;
      }
      span {
        font-size: rem(24px);
        color: #999;
      }
    }
    .pirce_body {
      display: flex;
      justify-content: space-between;
      height: rem(138px);
      padding: 0 rem(61px) 0 rem(30px);
      .user_hu {
        flex: 1;
        height: 100%;
        p {
          font-size: rem(28px);
          color: #333;
          margin-bottom: rem(24px);
        }
        i {
          text-decoration: none;
        }
        span {
          font-size: rem(45px);
          font-weight: 700;
        }
      }
      .youhui {
        // width: rem(72px);
        padding: 0 rem(10px);
        height: 100%;
        box-sizing: border-box;
        padding: rem(14px) 0 0 0;
        img {
          display: block;
          width: rem(50px);
          height: rem(35px);  
          margin: 0 auto rem(20px);
        }
        p {
          font-size: rem(24px);
          color: #666;
        }
      }
    }
  }
  //我的常用
  .MI_often {
    width: 100%;
    height: rem(415px);
    // border-bottom: rem(44px) solid #f2f2f2;
    // margin-bottom: rem(148px);
    box-sizing: border-box;
    // padding-bottom: rem(39px);
    background-color: #fff;
    .often_top {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: rem(40px) rem(32px) rem(43px) rem(32px);
      h2 {
        font-size: rem(36px);
        font-weight: 700;
      }
      span {
        font-size: rem(24px);
        color: #999;
      }
    }
    .often_body {
      display: flex;
      flex-wrap: wrap;
      height: rem(257px);

      > div {
        width: 25%;
        height: 50%;
        text-align: center;

        img {
          width: rem(70px);
          height: rem(70px);
          margin-bottom: rem(12px);
        }
        p {
          font-size: rem(26px);
          color: #666;
        }
      }
    }
  }
}
</style>