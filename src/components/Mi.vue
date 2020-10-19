<template>
    <div class="MI_wrpper">
       <div class="MI_header">
          <div class="Mi_headercON">
              <img :src="user_Img" alt="" @click="up_img()">
              <div class="Mi_heade-z">
                  <p class="lv">{{time_num.nickname}}</p>
                  <p class="time">上次登录：{{time_num.last_login_time}}</p>
              </div>
              <div class="Mi_header-r" @click="sell()">
                  <img :src="httpsCdn_Img+'iocn_bensz.png'" alt="">
              </div>
          </div>
         
       </div>
       <div class="Mi_main p-relative">

           <!-- 头部分类 -->
           <div class="Mi_head-Ma">
              <div class="Mi_head-Maitem" @click="r_link(1)">
                  <span>{{MI_user_num.favorites_count}}</span>
                  <span>我的收藏</span>
              </div>
              <div class="Mi_head-Maitem" @click="r_link(2)">
                  <span>{{MI_user_num.enquiry_count}}</span>
                  <span>我的询价</span>
              </div>
              <!--<router-link to="/mi/collection" tag="div" class="Mi_head-Maitem">
                  <span>{{MI_user_num.favorites_count}}</span>
                  <span>我的收藏</span>
              </router-link>
              <router-link to="/mi/inquiry" tag="div" class="Mi_head-Maitem">
                  <span>{{MI_user_num.enquiry_count}}</span>
                  <span>我的询价</span>
              </router-link> -->
              <!-- <router-link to="/mi/coupon" tag="div" class="Mi_head-Maitem">
                  <span>{{MI_user_num.coupons_count}}</span>
                  <span>优惠券</span>
              </router-link> -->
              <div class="Mi_head-Maitem" @click="tankaung()">
                   <span>{{MI_user_num.coupons_count}}</span>
                  <span>优惠券</span>
              </div>
          </div>

          <!-- 我的订单 -->
          <div class="Mi_main-header">
              <div class="Mi-main_t">
                  <strong>我的订单</strong>
                  <span @click="order(0)">全部订单</span>
              </div>
              <div class="Mi-main-b">
                <div class="Mi-b-item" @click="order(1)">
                    <img :src="httpsCdn_Img+'mi1.png'" alt="">
                    <span>待付款</span>
                </div>
                <div class="Mi-b-item" @click="order(2)">
                    <img :src="httpsCdn_Img+'mi2.png'" alt="">
                    <span>待发货</span>
                </div>
                <div class="Mi-b-item" @click="order(3)">
                    <img :src="httpsCdn_Img+'mi3.png'" alt="">
                    <span>待收货</span>
                </div>
                <div class="Mi-b-item" @click="order(4)">
                    <img :src="httpsCdn_Img+'mi4.png'" alt="">
                    <span>已完成</span>
                </div>
                <div class="Mi-b-item" @click="order(5)">
                    <img :src="httpsCdn_Img+'mi5.png'" alt="">
                    <span>退/换货</span>
                </div>
              </div>
          </div>

          <!-- 我的钱包 -->
          <div class="Mi_main-pirce">
              <div class="Mi-main_t">
                  <strong>我的钱包</strong>
                  <!--<span>查看全部</span>-->
              </div>
              <div class="user_hu">账户余额</div>
              <div class="user_hu_pirce">￥{{Math.round(money)}}</div>
              <div class="youhui p-absolute">
                  <img :src="httpsCdn_Img+'mi6.png'" alt="">
                  <span>优惠卷</span>
              </div>
          </div>


          <div class="Mi_main_con clearfix">
              <div class="Mi-main_t">
                  <strong>我的常用</strong>
                  <!--<span>查看全部</span>-->
              </div>
              
              <div class="Mi-con-item" @click="adviser()">
                  <img :src="httpsCdn_Img+'mi_footer1.png'" alt="">
                  <span>专属顾问</span>
              </div>
              <div class="Mi-con-item" @click="problem()">
                  <img :src="httpsCdn_Img+'mi_footer2.png'" alt="">
                  <span>常见问题</span>
              </div>
              <div class="Mi-con-item" @click="sellReceipt()">
                  <img :src="httpsCdn_Img+'mi_footer3.png'" alt="">
                  <span>收货地址</span>
              </div>
               <div class="Mi-con-item" @click="sellfeedback()">
                  <img :src="httpsCdn_Img+'mi_footer4.png'" alt="">
                  <span>意见反馈</span>
              </div>
              <div class="Mi-con-item" @click="sellintegral()">
                  <img :src="httpsCdn_Img+'mi_footer5.png'" alt="">
                  <span>积分商城</span>
              </div>
              <div class="Mi-con-item" @click="sellauth()">
                  <img :src="httpsCdn_Img+'mi_footer6.png'" alt="">
                  <span>关于</span>
              </div>
              <!-- <div class="Mi-con-item" @click="sellsystem()">
                  <img src="static/images/20200411/fo7.png" alt="">
                  <span>消息中心</span>
              </div> -->
              <!-- <div class="Mi-con-item">
                  <img src="static/images/20200411/fo3.png" alt="">
                  <span>职称查询</span>
              </div>
              <div class="Mi-con-item">
                  <img src="static/images/20200411/fo5.png" alt="">
                  <span>客服验证</span>
              </div>
              <div class="Mi-con-item">
                  <img src="static/images/20200411/fo7.png" alt="">
                  <span>门店查询</span>
              </div> -->

          </div>
          <!-- <div class="Mi-con-bottom">
            <div class="title"><span>为你推荐</span></div>
            <div class="App_mainConList">
              <div class="mi-mi-mainItem clearfix">
                <div class="item" v-for="item in HeaderCon_goods_day" :key="item.id">
                  <div @click="selectItem(item)" class="mu_img"><img v-lazy="item.goods_master_image"></div>
                  <div class="mesg_con">
                      <b>{{item.goods_name}}</b>
                      <strong>{{item.goods_no}}</strong>
                      <p @click="commit(item)" v-if="item.goods_type == 0">询价</p>
                      <p v-else @click="addCart(item)">立即购买</p>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
       </div>
        
      <nav-bottom></nav-bottom>
    </div>
</template>

<script>
import NavBottom from "@/components/Common/NavBottom";
import store from "@/store/store.js";
export default {
  name: 'Mi',
  data () {
    return {
      HeaderCon_goods_day:[],
      time_num:[],
      MI_user_num:[],
      money:'',
      iskong:'',

      u_Img:'http://console.pinjianapp.com/api/user/avatar',   // 上传地址
      user_Img:'',

      httpsCdn_Img:'http://cdn.pinjianapp.com/web_app/img/Mi/',         // 配置地址
      
    }
  },
  store,
  // 计算属性
  computed: {
      store:function(){
        return this.$store.state;
      }
  },
  components: {
    // 底部组件
    NavBottom,
  },
  mounted() {
    var $this = this;
    // 首页底部分类
    $this.time_num = JSON.parse(localStorage.getItem('user_info'))
    $this.user_Img = $this.time_num.avatar
    // $this.time_num = dsd.last_login_time;
    // 钱包
    $this.oAtrue();

   
  },
  methods: {
    // 页面数据 初始化
    oAtrue(){
      var $this = this;
       // 钱包
        $this.$post($this.$api.getlistuser_money, {token:localStorage.getItem('token')}).then(data => {
          $this.money = data.data;
        });

        // 计数
        $this.$post($this.$api.get_user_sum, {token:localStorage.getItem('token')}).then(data => {
            $this.MI_user_num = data.data
        });
    },

    tankaung(){
      swal("功能正在研发中……", "请敬请期待！");
    },
    selectItem(item) {
      var $this = this;
      $this.$store.commit('Change_rouId','Mi')
      this.$router.replace({
        path: `/home/indexdetails/${item.id}`
      });
    },
    sell(){
       this.$router.push({
        path: `/sell/exit`
      });
    },
    sellReceipt(){
      this.$router.push({
        path: `/sell/receipt`
      })
    },

    //// 关于我们
    sellauth(){
      this.$router.push({
        path: `/payment/aboutus`
      })
    },
    order(value){
      if(value=='5'){
          swal('服务暂未开通……', "请敬请期待……");
      }else if(value == '0'){
        this.$router.replace({
          path: `/payment/order`
        })
      }else if(value == '1'){
        this.$router.replace({
          path: `/payment/order/order_payment`
        })
      }else if(value == '2'){
        this.$router.replace({
          path: `/payment/order/order_deliver`
        })
      }else if(value == '3'){
        this.$router.replace({
          path: `/payment/order/order_Receiving`
        })
      }else if(value == '4'){
        this.$router.replace({
          path: `/payment/order/order_complete`
        })
      }
    },

    //// 专属顾问
    adviser(){
      this.$router.push({
        path: `/payment/adviser`
      })
    },

    ///// 常见问题
    problem(){
      this.$router.push({
        path: `/payment/comm_problem`
      })
    },

    //// 消息中心 （砍掉）
    sellsystem(){
      this.$router.replace({
        path: `/sell/system`
      })
    },

    //// 意见反馈
    sellfeedback(){
      this.$router.push({
        path: `/sell/feedback`
      })
    },

    sellintegral(){
      swal('积分商城暂未开放………', "请敬请期待……");
    },
    // 上传图片
    up_img(){
        var $this = this;
        var token = localStorage.getItem('token');
        window.android.selectImage(token,$this.u_Img,1);
    },

    r_link(val){
      var href  = window.location.href;
      var str = href.split("#");
      if(val == 1){
        this.$router.push({
          path: `/mi/collection`
        })
      }else if(val == 2){
        this.$router.push({
          path: `/mi/inquiry`
        })
      }
    },
  },
  activated(){
      this.oAtrue();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 /* 引入 基础 scss */
@import '../assets/sass/base.scss';
// @import '../assets/sass/IndexCommon.scss';

.MI_wrpper{
  padding-bottom:rem(128px);
  background:#f8f8f8;
}
.MI_header{
  width:100%;
  height:rem(353px);
  background:#000000;
  padding: rem(89px) rem(52px) 0;
  .Mi_headercON{
    height:rem(150px);
    box-sizing:border-box;
    display: flex;
    position: relative;
    img{
      display: block;
      width:rem(150px);
      height:rem(150px);
      border-radius: 50%;
    }
    .Mi_heade-z{
      height:100%;
      .lv{
        font-size:rem(36px);
        height:rem(50px);
        line-height:rem(50px);
        text-align:left;
        color:#fff;
        margin-top:rem(30px);
        margin-left:rem(44px);
        font-family:font_b;
        font-weight:bold;

      }
      .time{
        font-size:rem(24px);
        color:#fff;
        text-align: center;
        background: #bebdbb;
        border-radius:rem(30px);
        margin-top:rem(9px);
        margin-left:rem(24px);
        padding: rem(7px) rem(33px) rem(6px) rem(20px);
      }
    }
    .Mi_header-r{
      position: absolute;
      right: 0;
      top:rem(20px);
      img{
        display: block;
        width:rem(39px);
        height: rem(40px);
      }
    }
  }
}
.Mi_main{
  background:#f8f8f8;
  width:100%;
  padding: 0  rem(32px);
  padding-top:rem(160px);
  .Mi_head-Ma{
    width: rem(686px);
    height: rem(215px);
    display:flex;
    border-radius: rem(20px);
    background: #ffffff;
    box-shadow:0px rem(6px) rem(20px) rgba(0,0,0,0.05);
    padding: rem(54px) 0 rem(40px);
    position:absolute;
    top:rem(-76px);
    left:50%;
    transform: translate(-50%,0);
    .Mi_head-Maitem{
      width:33.3%;
      span:nth-of-type(1){
        display: block;
        height: rem(65px);
        line-height: rem(65px);
        font-size:rem(46px);
        font-family:font_b;
        font-weight:800;
        color: #000000;
        text-align: center;
      }
      span:nth-of-type(2){
        display: block;
        margin-top:rem(16px);
        color: #000000;
        font-size:rem(28px);
        font-family:font_b;
        font-weight:bold;
        color:rgba(102,102,102,1);
        text-align: center;
      }
    }
   
  }

  // 我的订单
  .Mi_main-header{
    width:rem(686px);
    height:rem(238px);
    background:#fff;
    box-shadow:0px rem(6px) rem(20px) rgba(0,0,0,0.05);
    z-index:999;
    border-radius:rem(20px);
    padding:rem(20px) rem(31px) rem(20px) rem(30px);
    box-sizing:border-box;
    margin:0 auto;
    .Mi-main_t{
      width:100%;
      height:rem(45px);
      line-height:rem(45px);
      display:flex;
      font-size:rem(32px);
      font-family:font_b;
      font-weight:800;
      strong{
        font-size:rem(30px);
         color:#000;
      }
      span{
        font-size:rem(24px);
        flex:1;
        text-align:right;
        font-weight:400;
        font-family:font_b;
        color:rgba(153,153,153,1);
      }
    }
    .Mi-main-b{
      width:100%;
      display:flex;
      .Mi-b-item{
        width:25%;
        img{
          width:rem(92px);
          height:rem(92px);
          display:block;
          margin:0 auto;
          margin-top:rem(21px);
        }
        span{
          display:block;
          text-align:center;
          font-size:rem(28px);
          margin-top:rem(7px);
          font-family:font_pc;
          font-weight:400;
          color:rgba(102,102,102,1);
        }
      }
    }
  }
  // 我的钱包
  .Mi_main-pirce{
    width:rem(686px);
    height:rem(230px);
    background:#fff;
    box-shadow:0px rem(6px) rem(20px) rgba(0,0,0,0.05);
    z-index:999;
    border-radius:rem(20px);
    padding:rem(20px) rem(31px) rem(19px) rem(30px);
    box-sizing:border-box;
    position: relative;
    margin:0 auto;
    margin-top:rem(20px);
    .Mi-main_t{
      width:100%;
      height:rem(45px);
      line-height:rem(45px);
      display:flex;
      font-size:rem(32px);
      font-family:font_b;
      font-weight:800;
      strong{
        font-size:rem(30px);
         color:#000;
      }
      span{
        font-size:rem(24px);
        flex:1;
        text-align:right;
        font-weight:400;
        font-family:font_b;
        color:rgba(153,153,153,1);
      }
    }
    .user_hu{
      margin-top:rem(42px);
      font-size:rem(28px);
      font-family:ping_pc;
      font-weight:400;
      color:rgba(153,153,153,1);
    }
    .user_hu_pirce{
      margin-top:rem(20px);
      font-size:rem(28px);
      font-family:ping_b;
      font-weight:400;
      font-weight:800;
      color:rgba(0,0,0,1);
      font-size: rem(45px);
    }
    .youhui{
      right:rem(31px);
      bottom:rem(25px);
      img{
        display: block;
        width: rem(50px);
        height: rem(36px);
        margin:0 auto;
      }
      span{
        display: block;
        font-size:rem(24px);
        font-family:font_pc;
        font-weight:400;
        color:rgba(102,102,102,1);
        margin-top:rem(12px);
      }
    }
    
  }
  .Mi_main_con{
    width:rem(686px);
    padding:rem(20px) rem(30px) rem(31px) rem(31px);
    background:#fff;
    box-sizing:border-box;
    background:#fff;
    box-shadow:0px rem(6px) rem(20px) rgba(0,0,0,0.05);
    z-index:999;
    border-radius:rem(20px);
    margin:0 auto;
    margin-top:rem(20px);
    .Mi-main_t{
      width:100%;
      height:rem(45px);
      line-height:rem(45px);
      display:flex;
      font-size:rem(32px);
      font-family:font_b;
      font-weight:800;
      strong{
        font-size:rem(30px);
         color:#000;
      }
      span{
        font-size:rem(24px);
        flex:1;
        text-align:right;
        font-weight:400;
        font-family:font_b;
        color:rgba(153,153,153,1);
      }
    }
    .Mi-con-item{
      width:25%;
      float:left;
      img{
        width:rem(70px);
        height:rem(70px);
        display:block;
        margin:rem(35px) auto 0;
      }
      span{
        display:block;
        text-align:center;
        margin-top:rem(15px);
        font-size:rem(26px);
        font-family:font_pc;
        color:rgba(102,102,102,1);
        font-weight:400;
      }
    }
  }
  
}


</style>