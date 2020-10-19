<template>
    <div class="wrappers">
        <div class="App-header">
          <div class="to_a" @click="back()"></div>
          <span>发现</span>
          <div class="to_b"><img src="../assets/images/Index_Img/sousuo.png" alt=""></div>
        </div>
        <div class="head-faxi_top">
          <!--  <div class="item" :class="v.id==list_index?'active':''" v-for="(v,k) in list" :key="k" @click="changelist(v,k)">{{v.txt}}</div>  -->
            <router-link to="/find" tag="div" class="items">推荐</router-link>
            <router-link to="/find/nl_index" tag="div" class="items">泥料</router-link>
            <router-link to="/find/hx_index" tag="div" class="items">壶型</router-link>
            <router-link to="/find/yr_index" tag="div" class="items">艺人</router-link>
            <!-- <div class="items" @click="error()">返图</div> -->
             <router-link to="/find/ft_index" tag="div" class="items">返图</router-link>
        </div>

        
        <!-- 放子组件 -->
        <router-view/>
        <!-- <div class="main-news">
            <div class="item">
                <img src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png" alt="" class="img" @click="go()">
                <div class="item_title">
                    <p>叫你如何区分紫砂泥！</p>
                    <span>2020-6-12</span>
                </div>
                <div class="item-con">这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容</div>
            </div>
            <div class="item">
                <img src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png" alt="" class="img" @click="go()">
                <div class="item_title">
                    <p>叫你如何区分紫砂泥！</p>
                    <span>2020-6-12</span>
                </div>
                <div class="item-con">这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容</div>
            </div>
            <div class="item">
                <img src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png" alt="" class="img" @click="go()">
                <div class="item_title">
                    <p>叫你如何区分紫砂泥！</p>
                    <span>2020-6-12</span>
                </div>
                <div class="item-con">这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容</div>
            </div>
        </div> -->
        

         <!-- 放子组件 -->
        <!-- <router-view/> -->
         <!-- 底部组件 -->
        <nav-bottom></nav-bottom>
    </div>
       
</template>

<script>
// 引入底部组件
// import NavBottom from "@/components/Common/NavBottom";
import NavBottom from "@/components/Common/new_bottom";


// swiper js 文件
import Swiper from 'swiper';
// 引入 swiper css 文件
import 'swiper/dist/css/swiper.min.css';


export default {
  name: 'Find',
  data () {
    return {
      Conber_er:[],
      list_index:0,
      iskong:''
    }
  },
  // 加载组件
  components: {
    // 底部组件
    NavBottom,
  },
  mounted() {
    var $this = this;
    // 实例化 Swiper
    var swiper = new Swiper('#main-nav', {
        slidesPerView:5,
        spaceBetween: 10,
    }); 
   
  },
  methods: {

    go(){
      this.$router.push({
          path: `/payment/encyclopedia`
      })
    },
    error(){
      swal('功能正在研发中………', "请稍等……");
    },

                // this.$router.push({
                //     path: `/payment/videocation`
                // })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 /* 引入 基础 scss */
@import '../assets/sass/base.scss';
.App-header .to_b img{
  display: block;
  width: rem(35px);
  height: rem(35px);
  float: right;
  margin-top:rem(28px);
}
.wrappers{
  width: 100%;
  background: #f8f8f8;
  .head-faxi_top{
    width: 100%;
    height: rem(80px);
    line-height: rem(80px);
    display: flex;
    position: fixed;
    top:rem(128px);
    left:0;
    z-index: 9999;
    background: #fff;
    padding:0 rem(32px);
    justify-content:space-between;
    .items{
      font-size:rem(32px);
      font-family:font_pc;
      font-weight:400;
      color:rgba(102,102,102,1);
    }
    .items.router-link-active.router-link-exact-active{
      font-family:font_b;
      font-weight:bold;
      color:#333;
      position: relative;
    }
    .items.router-link-active.router-link-exact-active::after{
      position: absolute;
      content: '';
      width: 60%;
      height: rem(8px);   
      background: linear-gradient(90deg, #F44647 0%, rgba(244, 70, 71, 0.15) 100%);
      bottom: 0;
      left: 50%;
      transform: translate(-50%,0);
    }

  }
  // .main-news{
  //   width: 100%;
  //   padding: 0 rem(20px);
  //   box-sizing: border-box;
  //   margin-bottom: rem(130px);
  //   .item{
  //     margin-top:rem(30px);
  //     .img {
  //         display: block;
  //         border-right:rem(7px);
  //         width: 100%;
  //         height:rem(350px);
  //     }
  //     .item_title{
  //       width: 100%;
  //       height: rem(80px);
  //       line-height: rem(80px);
  //       border-bottom:rem(3px) dashed #b3b3b3;
  //       display: flex;
  //       p{
  //         font-size: rem(32px);
  //         color: #333;
  //         font-family: 黑体;
  //       }
  //       span{
  //         margin-left: auto;
  //         color: #666;
  //         font-size: rem(26px);
  //       }
  //     }
  //     .item-con{
  //       color:#b3b3b3;
  //       padding:rem(15px) 0 rem(20px);
  //       font-size: rem(28px);
  //       letter-spacing:1px;
  //       line-height: rem(35px);
  //       max-height:100%;
  //     }
  //   }
  // }
}


</style>