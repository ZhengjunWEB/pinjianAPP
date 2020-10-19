<template>
    <div class="wrpper">
      <header>
          <div class="headerImg">
            <img src="static/images/20200411/2020d_1.png" alt="">
          </div>
          <div class="headerList">
              <ul>
                  <li>
                      <img src="static/images/20200411/2020d_2.png" alt="">
                      <span>累计关注</span>
                      <span id="jlgz">0</span>
                  </li>
                  <li>
                      <img src="static/images/20200411/2020d_3.png" alt="">
                      <span>累计上架</span>
                      <span id="jlsj">0</span>
                  </li>
                  <li>
                      <img src="static/images/20200411/2020d_4.png" alt="">
                      <span>累计订单</span>
                      <span id="jldd">0</span>
                  </li>
                  <li>
                      <img src="static/images/20200411/2020d_5.png" alt="">
                      <span>累计优惠</span>
                      <span id="jlyh">0</span>
                  </li>
                  
              </ul>
          </div>
          <div class="headerj-s clearfix">
              <div class="headerj-sL pull-left">
                  <font>还剩</font>
                  <span>02</span>
                  <span>10</span>
                  <span>30</span>
                  <span>43</span>
              </div>
              <div class="headerj-sR pull-right">
                  <input type="text" placeholder="搜索作者、作品名称或编号">
                  <i class="iconfont iconsousuo"></i>
              </div>
          </div>
      </header>  
      <main class="main">
        <div class="mainImg">
            <router-link to="/index" tag="div"><img src="../../static/images/20200411/2020d_6.png" alt=""></router-link>
        </div>
         <nav class="mainnav">
            <router-link class="item" to="/special" tag="div">上好推荐</router-link>
            <router-link class="item" to="/special/or" tag="div">紫砂壶</router-link>
            <router-link class="item" to="/special/rb" tag="div">日本铁银壶</router-link>
            <router-link class="item" to="/special/pmd" tag="div">品茗杯</router-link>
            <router-link class="item" to="/special/gjyq" tag="div">国匠银器</router-link>
            <router-link class="item" to="/special/xh" tag="div">香炉</router-link>
            <router-link class="item" to="/special/jtl" tag="div">景泰蓝</router-link>
            <router-link class="item" to="/special/tkfx" tag="div">唐卡佛像</router-link>
            <router-link class="item" to="/special/yd" tag="div">烟斗</router-link>
            <router-link class="item" to="/special/jy" tag="div">结缘</router-link>
         </nav>
        

          <!-- 放子组件 -->
          <router-view/>
      </main>
      <!-- 底部组件 -->
        <nav-bottom></nav-bottom>
    </div> 
</template>

<script>
// 引入底部组件
import NavBottom from "@/components/Common/NavBottom";
// swiper js 文件
import Swiper from 'swiper';
// 引入 swiper css 文件
import 'swiper/dist/css/swiper.min.css';


export default {
  name: 'Special',
  data () {
    return {
      Number_er:[],
      name:'',
    }
  },
  // 加载组件
  components: {
    // 底部组件
    NavBottom,
  },
  mounted() {
    var $this = this;
    // $this.$post('http://222.186.30.160:8914/Android.asmx/GetShopDefault', {}).then(data => {
    //     $this.Number_er = data[0];
    //     console.log($this.Number_er);
    // });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 /* 引入 基础 scss */
@import '../assets/sass/base.scss';


.wrpper{
  width: 100%;
  margin-bottom: rem(110px);
  header{
    width:100%;
    .headerImg{
      width: 100%;
      img{
        display: block;
        width: 100%;
      }
    }
    .headerList{
        width: 100%;
        padding: 0 rem(30px);
        margin: rem(20px) 0;
        box-sizing: border-box;
         ul {
            width: 100%;
            display: flex;
            justify-content: space-around;
            li{
              img{
                display: block;
                width:rem(80px);
                height:rem(80px);
                margin: 0 auto;
              }
              span {
                  display: block;
                  text-align: center;
                  margin-top:rem(15px);
              }
              span:nth-of-type(1) {
                  color: #B9A0A3;
                  font-size:rem(28px);
              }
              span:nth-of-type(2) {
                color: #E3120A;
                text-align: left;
                font-size:rem(30px);
              }
            }
        }
    }
    .headerj-s {
        width: 100%;
        padding: 0 rem(30px);
        margin: rem(20px) 0;
        box-sizing: border-box;
        .headerj-sL {
          width: 46%;
          height: rem(60px);
          line-height: rem(60px);
          font-size:rem(24px);
          display: flex;
          color: #A24325;
          span{
              width: rem(40px);
              height: rem(40px);
              line-height: rem(40px);
              text-align: center;
              background: #A24325;
              color: #fff;
              border-radius: rem(7px);
              display: block;
              margin-left: rem(22px);
              margin-top: rem(10px);
              position: relative;
          }
          span:before {
                position: absolute;
                content: ':';
                right: - rem(15px);
                color: #A24325;
                font-size: rem(30px);
            }
            span:nth-of-type(4):before {
                content: '';
            }
        }
        .headerj-sR {
            width: 50%;
            height: rem(60px);
            line-height: rem(60px);
            background: #A24325;
            border-radius: rem(7px);
            display: flex;
            overflow: hidden;
            input {
                display: block;
                width: 80%;
                height: 100%;
                outline: 0;
                border: 0;
                background: #A24325;
                color: #fff;
                text-indent: rem(10px);
                font-size: rem(22px);
            }
            input::-webkit-input-placeholder { /* WebKit browsers */
                color:#fff;
            }
            i {
                width:20%;
                height: rem(65px);
                font-size: rem(30px);
                text-align: center;
                color: #fff;
                flex: 1;
            }
        }
    }
  }
  .main{
    width: 100%;
    margin:0 auto;
    .mainImg {
        width: 100%;
        img{
          display: block;
          width: 100%;
        }
    }
    .mainnav{
      width: 100%;
      height: rem(100px);
      line-height: rem(100px);
      background: #A24323;
      padding: 0 rem(20px);
      overflow-x: scroll;
      white-space: nowrap;
      box-sizing: border-box;
      .item{
          display: inline-block;
          color:#fff;
          font-size: rem(30px);
          padding: 0 rem(20px);
          position: relative;
      }
      .router-link-exact-active::before {
        position: absolute;
        width: rem(50px);
        height:rem(6px);
        content: '';
        bottom:rem(15px);
        background: #FCFDFC;
        left: 50%;
        transform: translate(-50%,0);
    }
    }
  }
}

</style>
