<template>
    <div class="picturedetails">
        <div class="picturedetails-header">
            <div class="to_a iconfont iconzuo" @click="tuichu()"></div>
            <span>壶友详情</span>
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="picturedetails-main p-absolute">
            <div class="m_title">
                <span>名字</span>
                <button>我要发图</button>
            </div>
            <div class="lun">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                      <img src="static/images/20200411/jianb.jpg" alt="" class="img">
                  </div>
                  <div class="swiper-slide">
                      <img src="static/images/20200411/jianb.jpg" alt="" class="img">
                  </div>
                </div>
              </div>
            </div>
            <div class="m_userinfo">
                <img src="//img.zisha.com/attachment/author/201904/c3db757812ac6d0be82b3aa37a84af40.jpg" alt="" class="img">
                <div class="con">
                    <dd class="p1"><span class="s1">王先生</span><strong>养壶时长：6天</strong></dd>
                    <dd class="p2"><span class="s1">编号：9527</span><strong>2024-110-01发布</strong></dd>
                </div>
                <img src="static/images/20200411/zbrk.jpg" alt="" class="img1">
                <p class="p1">看<br>藏<br>品</p>
            </div>
        </div>
        <div class="picturedetails-footer p-fixed">
            <input type="text" placeholder="我来说两句" readonly="readonly" @click="isShow()">
            <p class="p1"><i class="iconfont iconfenxiang1"></i>分享</p>
            <p class="p2"><i class="iconfont icondianzan"></i>赞 10</p>
        </div>

        <!-- <div class="tan_ment" :class="ishide?'z-in':''" @click="hide()">
          <div class="tan" :class="{'tran': ishide}"></div>
        </div> -->
        <common-chant :hide="ishide"  @transfer="getUser"></common-chant>
    </div>
</template>

<script>
// 引入 Swipter 组件
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import CommonChant from "@/components/Common/common_chat";

export default {
  name: 'Picture',
  data () {
    return {
      iSstyle:'iconfont iconxiajiantou-copy',
      ishide:false,
    }
  },
 components: {
    // 底部组件
    CommonChant,
  },
  mounted() {
    var swiper = new Swiper('.swiper-container');
  },
   
  methods: {
      tuichu(){
        this.$router.push({
            path: `/payment/picture`
        })
      },
      isShow(){
        this.ishide = true;
      },
      
      getUser(msg){
        this.ishide = msg
      },
  }
}
</script>

<style lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.picturedetails{
  .picturedetails-header {
    width: 100%;
    height: rem(115px);
    line-height: rem(115px);
    border-bottom: rem(1px) solid #ccc;
    display: flex;
    position: fixed;
    z-index: 9999;
    background: #333;
    box-sizing: content-box;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    .to_a {
      width: 20%;
      display: block;
      font-size: rem(40px);
      color: rgb(15, 15, 15);
      font-weight: bold;
      margin-left: rem(20px);
      color:#fff
    }
    span {
      display: block;
      font-size: rem(30px);
      color: #fff;
      font-weight: bold;
      text-align: center;
      flex: 1;
    }
    i {
      width: 25%;
      font-size: rem(45px);
      display: block;
      text-align: right;
      font-weight: bold;
      margin-right: rem(30px);
    }
  }
  .picturedetails-main{
    top:rem(115px);
    bottom:rem(105px);
    width: 100%;
    padding: rem(20px) 0;
    .m_title{
      width: 100%;
      height: rem(75px);
      line-height: rem(75px);
      display: flex;
      padding: 0 rem(34px);
      span{
        color: #333333;
        font-size: rem(30px);
      }
      button{
        width: rem(205px);
        height: rem(50px);
        line-height: rem(50px);
        border-radius: rem(30px);
        background: #24211c;
        color: #fff;
        text-align: center;
        outline: none;
        border:0;
        margin-top:rem(13px);
        margin-left:auto;
        font-size: rem(26px);
      }
    }
    .lun{
      position: absolute;
      top:rem(100px);
      bottom: rem(100px);
      width: 100%;
      .swiper-container{
        width: 100%;
        height: 100%;
        .img{
          width: 100%;
        }
      }
    }
    .m_userinfo{
      width: 100%;
      height: rem(100px);
      background: #50504f;
      display: flex;
      position: absolute;
      bottom:0;
      .img{
        display: block;
        width: rem(66px);
        height: rem(66px);
        border-radius: 50%;
        margin:rem(19px) 0 0 rem(25px);
      }
      .con{
        flex: 1;
        padding-left:rem(25px);
        dd{
          height: rem(40px);
          line-height: rem(40px);
          color:#fff;
          font-size: rem(24px);
          display: flex;
          strong{
            margin-left: auto;
          }
        }
        dd:nth-of-type(1){
          margin-top:rem(10px);
        }
      }
      .img1{
        width: rem(120px);
        height: rem(76px);
        margin:rem(12px) rem(20px);
      }
      p.p1{
        width: rem(50px);
        height: 100%;
        text-align: center;
        background: #24211c;
        color: #fff;
        font-size: rem(24px);
        padding-top:rem(14px)
      }
    }
  }
  .picturedetails-footer{
      width:100%;
      height:rem(105px);
      line-height:rem(105px);
      background:#efefef;
      bottom:0;
      left:0;
      padding:0 rem(25px);
      display:flex;
      z-index: 9;
      input{
          width:rem(390px);
          border:1px solid #24211c;
          height:rem(45px);
          margin-top:rem(28px);
          border-radius:rem(30px);
          padding:0 rem(20px);
          font-size: rem(28px);
          color: #333;
          outline: none;
      }
      .p1{
        margin-left:rem(50px);
        font-size: rem(28px);
        color: #333;
        i{
          font-size: rem(30px);
          margin:0 rem(5px);
        }
      }
      .p2{
        margin-left:rem(30px);
        font-size: rem(28px);
        color: #333;
        i{
          font-size: rem(30px);
          margin:0 rem(5px);
        }
      }
  }
}
// .tan_ment{
//   width:100%;
//   height:100%;
//   position:fixed;
//   top:0;
//   left:0;
// }
// .z-in{
//   z-index:99;
// }
// .tan{
//   width: 100%;
//   height: rem(800px);
//   position: absolute;
//   bottom:rem(-800px);
//   background: red;
//   transition: all 0.5s;
//   z-index: 99;
// }
// .tran{
//   bottom:0;
// }
</style>
