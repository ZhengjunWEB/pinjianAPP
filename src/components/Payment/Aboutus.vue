<template>
   <div class="sell_exit">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="back()"></div>
            <span>关于我们</span> 
            <div class="to_b" style="visibility: hidden;"></div>
        </div>
        <div class="sell_exit_main commons_mainsContoApp">
            <img src="../../assets/images/Mi/67a39d31bd6e9b1f41145c2b26c51d0.png" class="img">  
            <!-- <div class="sell_exit_main_con">
                <div class="sell_exit_main_con_item">
                    <span>隐私政策</span>
                    <i class="iconfont iconyoujiantou"></i>
                </div>
                <div class="sell_exit_main_con_item">
                    <span>用户协议</span>
                    <i class="iconfont iconyoujiantou"></i>
                </div>
                <div class="sell_exit_main_con_item">
                    <span>检查更新</span>
                    <i class="iconfont iconyoujiantou"></i>
                </div>
                <div class="sell_exit_main_con_item">
                    <span>清除缓存</span>
                    <strong>241.88MB</strong>
                    <i class="iconfont iconyoujiantou"></i>
                </div>
            </div> -->
        </div>
        <div class="sell_exit_footer">
            <div class="sell_exit_footer_title">品见</div>
            <div class="sell_exit_footer_title">v1.0.0</div>
        </div>
        <div class="copyright">
            丰行紫砂文化有限公司
        </div>
   </div>
</template>

<script>
export default {
  name: 'Find',
  data () {
    return {
      HeaderCon_goods_day:[],
    }
  },
  mounted() {
      var $this = this;
      
  },
  methods: {
    back(){
       this.$router.back();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';

.sell_exit{
    position: absolute;
    background: #f8f8f8;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .sell_exit_main{
      width: 100%;
      padding-top:rem(88px);
      .img{
          width:rem(160px);
          height:rem(160px);
          display:block;
          margin:rem(141px) auto rem(24px);
          border-radius:rem(20px);
      }
      .sell_exit_main_con{
          width:100%;
          padding:0 rem(35px);
          .sell_exit_main_con_item{
              width:100%;
              height:rem(100px);
              line-height:rem(100px);
              border-bottom:rem(1px) solid rgba(225,225,225,1);
              padding:0 rem(20px);
              display:flex;
              span{
                font-size:rem(28px);
                font-family:font_pc;
                font-weight:400;
                color:rgba(0,0,0,1);
              }
              strong{
                  flex:1;
                  text-align:right;
                  padding:0 rem(10px);
                  color:rgba(0,0,0,1);
                  font-size:rem(25px);
                  font-family:font_pc;
                  font-weight:400;
              }
              i{
                  font-size:rem(30px);
                  color:rgba(0,0,0,1);
                  flex:1;
                  text-align:right;
                  line-height:rem(99px);
              }
              strong~i{
                  flex:0;
              }
          }
      }
    }
    .sell_exit_footer{
        .sell_exit_footer_title{
            font-size:rem(32px);
            text-align:center;
            margin-bottom:rem(24px);
            font-family:font_pc;
            font-weight:400;
            color:#666;
        }
    }
    .copyright {
        position: absolute;
        bottom: rem(65px);
        left: 50%;
        transform: translateX(-50%);
        font-size: rem(28px);
        font-weight: 700;
        color: #666;
    }
}
</style>