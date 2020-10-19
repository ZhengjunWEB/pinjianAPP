<template>
  <div class="Indexdetails clearfix">
    <div class="Indexdetails-main">
    <loading v-if="loading"></loading>
      <!-- 主图 -->
      <div class="main_topImg">
        <div class="swiper-container" id="swiper_one">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(a,b) in params.goods_images" :key="b">
                    <img :src="a" class="imgs">
                </div>
            </div>
        </div>

        <div class="go_fanhui" @click="bacssk()">
            <img src="../../assets/images/Index_Img/6b9589a9f62235faa51c89f68ae447b.png" alt="">
        </div>


      </div>

      <!-- 商品介绍板块 -->
      <div class="main_user_con">
          <div class="main_user_con_title">
              <div class="title">{{params.goods_name}}</div>
              <p><img src="../../assets/images/Index_Img/fenxing.png" alt=""><span>分享</span></p>
          </div>
          <div class="name">{{params.name}}</div>
          <div class="pirce hide" v-if="params.goods_type == 0"></div>
          <div class="pirce" v-else-if="params.goods_type==1">￥{{Math.round(params.goods_price)}}</div>

          <div class="namess">{{params.goods_name}}</div>
          <div class="namess_con" v-html="params.works_describe"></div>

          <div class="namess s">{{params.name}}</div>
          <div class="namess_con" v-html="params.introduce"></div>
      </div>

      <div class="main_topCon">
   
        <div class="name clearfix">
          <p class="zz">
            作者：<span></span><font>{{ params.name }}</font>
          </p>
          <p class="nl">泥料：<span></span>{{ params.capacity_name }}</p>
          <p class="hy">壶形：<span></span>{{ params.capacity_name }}</p>
          <p class="zzsy">工艺：<span></span>{{params.process}}</p>
          <p class="rl">容量：<span></span>{{ params.capacityid }}</p>
          <p class="bh">编号：<span></span>{{params.goods_no}}</p>
        </div>
      </div>
      <div class="main_con">
        <h2><span>商品详情</span></h2>
        <div class="main_com_lits_IMgto" v-html="params.goods_content"></div>

       
      </div>

      <div class="tan_eu" v-if="mi_hide">
          {{mesg}}
      </div>
      <!-- 底部 -->
      <div class="indexdela_bottom">
          <div class="indexdela_bottom_c1">
              <img src="../../assets/images/Index_Img/liaotian.png" alt="">
              <span>客服</span>
          </div>
           <!-- 详情信息   // 0 未关注 1 已关注 -->
          <div class="indexdela_bottom_c1 c2"  v-if="params.is_status == 0" @click="guanzu(0)">
              <img src="../../assets/images/Index_Img/soucang.png" alt="">
              <span>收藏</span>
          </div>
          <div class="indexdela_bottom_c1 c2"  v-else-if="params.is_status == 1" @click="guanzu(1)">
              <img src="../../assets/images/Index_Img/souchang_1.png" alt="">
              <span>收藏</span>
          </div>

          <div class="indexdela_bottom_c3 clearfix" v-if="this.params.goods_type==0">
               <div class="btn btn_san" @click="nexyt()">立即询价</div>
          </div>
          <div class="indexdela_bottom_c3 clearfix" v-else-if="this.params.goods_type==1">
              <div class="btn btn_one" @click="crtami()">立即购买</div>
              <div class="btn btn_two" @click="addCart()">加入购物车</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Common/Loading_t"
import store from "@/store/store.js";
// 引入 Swipter 组件
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: "selection",
  data() {
    return {
      params_id: "", // 商品ID

      params: [],
      SJrandom: [],
      IdArrayTrue:[],

      is_rouid:"",
      mi_hide:false,
      mesg:'',

       loading:true
    };
  },
  components:{
    Loading
  },
  store,
  computed: {
      store:function(){
          return this.$store.state;
      }
  },
  // 页面创建前
  //   created () {
  //     this.params_id = this.$route.params.id;
  //       console.log(this.params_id)
  //   },
  updated() {
      $('.main_com_lits_IMgto').find('img').css('width', '100%');
  },
  // 页面加载后
  mounted() {
    // 详情信息   // 0 未关注 1 已关注
    var $this = this;
    $this.oAtrue();

  },
  // 方法区域
  methods: {
    // 数据初始化
    oAtrue(){
      var $this = this;
      $this.params_id = $this.$route.params.id;
      console.log($this.params_id);
      var token = localStorage.getItem('token');
      $this
        .$post($this.$api.HeaderCon_goods_info, { 
          id: $this.params_id,
          token:token
        })
        .then(data => {
          $this.params = data.data[0];
          this.$nextTick(() => { 
              var swiper = new Swiper('#swiper_one', {
                  direction: 'horizontal',
                  initialSlide :0,
                  autoplay: {
                      delay: 5000,
                      stopOnLastSlide: false,
                      disableOnInteraction: true,
                  },
                  centeredSlides:true,
                  spaceBetween: 20,
                  observer:true,
                  observeParents:true,
                  loop: true, 
              });
          });
          $this.loading = false
        });
    },

    // 返回
    bacssk() {
      this.$router.back()
      // var ristou = localStorage.getItem('get_Android_rouit');
      // if(ristou == 'Mi'){
      //   this.$router.replace({
      //     path: `/Mi`
      //   });
      // }else if(ristou == 'Index'){
      //   this.$router.replace({
      //     path: `/index`
      //   });
      // }else if(ristou == 'Cart'){
      //   this.$router.replace({
      //     path: `/cart`
      //   });
      // }else if(ristou == 'listdetails'){
      //   localStorage.setItem('get_Android_rouit',localStorage.getItem('get_Android_prev'));
      //   localStorage.removeItem('get_Android_prev');
      //   this.$router.replace({
      //     path: `/home/listdetails/${localStorage.getItem('get_Android_rouitid')}`
      //   });
      // }else if(ristou == 'collection'){
      //   localStorage.removeItem('get_Android_rouit');
      //   this.$router.replace({
      //     path: `/mi/collection`
      //   });
      // }else{
      //    this.$router.replace({
      //     path: `/index`
      //   });
      // }
    },
    nexyt() {
      this.$router.replace({
        path: `/home/customerservice/${this.params_id}`
      });
      // alert('功能正在接入…………');
    },
    selectItem(item) {
      var $this = this;
      this.$router.replace({
        path: `/home/indexdetails/${item.id}`
      });
      $this.params_id = $this.$route.params.id;
      $this
        .$post($this.$api.HeaderCon_goods_info, { id: $this.params_id })
        .then(data => {
          $this.params = data.data[0];
        });

      $this.$post($this.$api.HeaderCon_goods_SJrandom, {}).then(data => {
        $this.SJrandom = data.data;
      });
    },

    // 添加购物车
    addCart(){
      if(localStorage.getItem('token') == null){
          var href  = window.location.href;
          var str = href.split("#");
          var rouit = str[0] + '#/login';
          window.android.meto_goback(rouit,'false','false');
      }else{
      var $this = this;
      console.log($this.params);

      $this.$post($this.$api.add_cart, {
          token:localStorage.getItem('token'),

          goods_name:$this.params.goods_name,

          goods_spec:0,

          storeid:$this.params.store_id,

          id:$this.params.id,

          seller_id:$this.params.seller_id,

          store_name:$this.params.store_name,

          user_id:$this.params.user_id,

          goods_master_image:$this.params.goods_master_image,

          goods_price:$this.params.goods_price,

          buy_num:1

        }).then(data => {
           if(data.code == 500){
             alert(data.msg);
           }else if(data.code == 200){
              swal('加入购物车成功', "susses");
              
           }
        });
      }
      
    },

    // 购买
    crtami(){
      // this.$router.replace({
      //   path: `/payment/paymentlist/${this.params.id}/6/1`
      // });
      if(localStorage.getItem('token') == null){
          var href  = window.location.href;
          var str = href.split("#");
          var rouit = str[0] + '#/login';
          // 调安卓
          window.android.meto_goback(rouit,'false','false');
      }else{
          // var href  = window.location.href;
          // var str = href.split("#");
          // var rouit = str[0] + '#/payment/paymentlist/' + this.params.id +'/6/1';
          // window.android.meto_goback(rouit,'false','true');

          this.$router.push({
            path: `/payment/paymentlist/${this.params.id}/6/1`
        })
      }
      // var sds = this.params_id;
      // this.IdArrayTrue.push(JSON.parse(this.params_id)); 
      // this.$store.commit('changeIdArray',this.IdArrayTrue)
      // localStorage.setItem('get_shangpin_id',this.params_id);
      // id  1
      // user_id  3
      
    },

    // 收藏
    guanzu(val){
      var $this = this;
      if(localStorage.getItem('token') == null){
          var href  = window.location.href;
          var str = href.split("#");
          var rouit = str[0] + '#/login';
          window.android.meto_goback(rouit,'true','false');
          // this.$router.replace({
          //   path: `/login`
          // });
      }else{
         if(val == 0){
           $this.$post($this.$api.fav_istrue2,{
              token:localStorage.getItem('token'),
              mix_id:this.params_id,
              is_type:0
           }).then(data => {
             $this.params.is_status = 1;
             $this.mi_hide = true;
             $this.mesg = '已收藏'

          });
         }else{
            $this.$post($this.$api.fav_istrue2,{
              token:localStorage.getItem('token'),
                  mix_id:this.params_id,
                  is_type:0
              }).then(data => {
                $this.params.is_status = 0;
                $this.mi_hide = true;
                $this.mesg = '已取消收藏'
              });
         }
          setTimeout(function(){
            $this.mi_hide = false;
          },1000);
      }
    },
  },
  activated(){
      this.oAtrue();
  },

};
</script>
<style scoped lang="scss">
@import "../../assets/sass/base.scss";

.Indexdetails {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  .Indexdetails-main {
    width: 100%;
 
    margin: 0 auto;
    background:#f8f8f8;
    .main_topImg {
      width: 100%;
      height: rem(750px);
      position: relative;
      overflow: hidden;
      .imgs {
        display: block;
        width: 100%;
        height: 100%;
      }
      .go_fanhui{
        width:rem(56px);
        height:rem(56px);
        border-radius:50%;
        z-index: 99;
        position: fixed;
        top:rem(61px);
        left:rem(32px);
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .main_user_con{
      background: #fff;
      padding: rem(36px) rem(32px) rem(25px);
      .main_user_con_title{
        width: 100%;
        height: rem(70px);
        line-height: rem(70px);
        display: flex;
        .title{
          font-size:rem(50px);
          font-family:font_b;
          // font-weight:bold;
          color:rgba(0,0,0,1);
        }
        p{
          width: rem(145px);
          height: rem(50px);
          line-height: rem(50px);
          background:rgba(238,238,238,1);
          border-radius:rem(25px);
          margin-left: auto;
          margin-top:rem(10px);
          display: flex;
          img{
            display: block;
            width: rem(30px);
            height: rem(29px);
            margin-left:rem(20px);
            margin-top:rem(11px);
          }
          span{
            display: block;
            font-size:rem(28px);
            font-family:font_pc;
            font-weight:400;
            color:rgba(102,102,102,1);
            margin-left:rem(17px);
          }
        }
      }
      .name{
        height: rem(45px);
        line-height: rem(45px);
        font-size:rem(32px);
        font-family:font_pc;
        font-weight:400;
        color:rgba(102,102,102,1);
        margin-top:rem(9px)
      }
      .pirce{
          height:rem(50px);
          line-height:rem(50px);
          margin-top:rem(10px);       
          font-family:font_pc;
          font-weight:bold;
          color:rgba(0,0,0,1);      
          font-size:rem(36px);                  
      }
      .namess{
        height: rem(45px);
        line-height: rem(45px);
        font-size:rem(32px);
        font-family:font_pc;
        font-weight:400;
        margin-top:rem(40px);
        color:rgba(0,0,0,1);
      }
      .namess.s{
         color:rgba(0,0,0,1);
      }
      .namess_con{
        font-size:rem(26px);
        font-family:font_pc;
        font-weight:400;
        color:rgba(153,153,153,1);
        line-height:rem(37px);
        margin-top:rem(10px);
      }
    }






    .main_topCon {
        margin-top: rem(13px);
        padding: rem(20px) rem(32px) rem(27px);
        background: #fff;
        .name{
          font-size: rem(30px);
          margin-top: rem(2px);
          p {
            float: left;
            width: 50%;
            margin-bottom:rem(20px);
            font-size:rem(26px);
            color:rgba(102,102,102,1);
            text-align:left;
            font-family:font_pc;
            font-weight:400;
          }
          .rl,.bh{
            margin-bottom:0;
          }
        }
        .color{
            font-size:rem(26px);
            color:rgba(102,102,102,1);
            text-align:left;
            font-family:font_pc;
            font-weight:400;
        }
    }
    .main_con {
      width: 100%;
      h2{
        height: rem(40px);
        line-height: rem(40px);
        text-align: center;
        margin-top:rem(40px);
        span{
          font-size:rem(28px);
          font-family:font_pc;
          font-weight:bold;
          color:rgba(0,0,0,1);
          position: relative;
        }
        span:before{
          position: absolute;
          content: '';
          width: rem(103px);
          height: rem(1px);
          top:50%;
          left:rem(-146px);
          background: rgba(153,153,153,1);
        }
        span:after{
          position: absolute;
          content: '';
          width: rem(103px);
          height: rem(1px);
          top:50%;
          right:rem(-146px);
          background: rgba(153,153,153,1);
        }
      }
      .zpms-con {
        padding:0 rem(25px);
        font-size: rem(26px);
        line-height: rem(40px);
        color: rgb(0,0,0);
        letter-spacing: rem(2px);
        margin:rem(25px) 0 rem(36px);
      }
  
      .main_com_lits_IMgto{
        width:100%;
        margin:rem(20px) 0 rem(110px);
        .img{
          display:block;
          width:100%;
        }
      }
    }
    .indexdela_bottom{
      width:100%;
      height:rem(117px);
      position: fixed;
      background:#fff;
      display:flex;
      padding:0 rem(30px);
      bottom: 0;
      .indexdela_bottom_c1{
        width: rem(48px);
        img{
          display: block;
          width: rem(43px);
          height: rem(42px);
          margin:0 auto;
          margin-top:rem(21px);
        }
        span{
          display: block;
          height: rem(33px);
          line-height: rem(33px);
          text-align: center;
          font-size:rem(24px);
          font-family:font_pc;
          font-weight:400;
          color:rgba(0,0,0,1);
          margin-top:rem(6px)
        }
      }
      .indexdela_bottom_c1.c2{
        margin-left:rem(77px);
        img{
           display: block;
          width: rem(42px);
          height: rem(41px);
          margin:0 auto;
          margin-top:rem(21px);
        }
      }
      .indexdela_bottom_c3{
        flex:1;
        .btn{
          width:rem(180px);
          height:rem(80px);
          line-height:rem(80px);
          margin:rem(15px) 0 0;
          text-align:center;
          float: right;
        }
        .btn.btn_one{
          width:rem(210px);
          height:rem(83px);
          line-height:rem(83px);
          border-radius: rem(42px);
          font-size:rem(32px);
          font-family:font_b;
          font-weight:bold;
          background:rgba(0,0,0,1);
          color:rgba(255,255,255,1);
          margin-left: rem(10px);
        }
        .btn.btn_two{
          width:rem(210px);
          height:rem(83px);
          line-height:rem(83px);
          border:1px solid rgba(112,112,112,1);
          border-radius: rem(42px);
          font-size:rem(32px);
          font-family:font_b;
          font-weight:bold;
          color:rgba(0,0,0,1);
        }
        .btn.btn_san{
          width:rem(445px);
          height:rem(83px);
          line-height:rem(83px);
          background:rgba(255,255,255,1);
          font-size:rem(32px);
          font-family:font_b;
          font-weight:bold;
          background:rgba(0,0,0,1);
          color:rgba(255,255,255,1);
          border-radius: rem(42px);
        }
        
      }
    }
  }
}

.tan_eu{
  padding: 0 rem(30px);
  height: rem(60px);
  line-height: rem(60px);
  position: fixed;
  bottom: rem(130px);
  left: 50%;
  transform: translate(-50%, 0);
  background: red;
  text-align: center;
  color: #fff;
  font-size: rem(30px);
  font-family: font_pc;
}


</style>
