<template>
   <div class="sell_exit">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="back()"></div>
            <span>设置</span> 
            <i class="to_b" style="visibility: hidden;"></i>
        </div>
        <div class="sell_exit_main commons_mainsContoApp">
            <div class="sell_exit_main_con">
                <div class="jiaz">
                    <router-link to="/mi/personal" tag="div" class="sell_exit_main_con_item">
                        <span>个人资料</span>
                        <i class="iconfont iconyoujiantou"></i>
                    </router-link>
                     <!-- <router-link to="/sell/receipt" tag="div" class="sell_exit_main_con_item">
                        <span>收货地址</span>
                        <i class="iconfont iconyoujiantou"></i>
                    </router-link> -->
                </div>
                <div class="jiaz">
                    <router-link tag="div" to="/mi/Privacy" class="sell_exit_main_con_item">
                        <span>隐私政策</span>
                        <i class="iconfont iconyoujiantou"></i>
                    </router-link>
                    <router-link tag="div" to="/mi/agreement"  class="sell_exit_main_con_item">
                        <span>用户协议</span>
                        <i class="iconfont iconyoujiantou"></i>
                    </router-link>
                    <router-link tag="div" to="/index"  class="sell_exit_main_con_item">
                        <span>清除缓存</span>
                        <i class="iconfont iconyoujiantou"></i>
                    </router-link>
                    <router-link tag="div" to="/index"  class="sell_exit_main_con_item">
                        <span>检查更新</span>
                        <i class="iconfont iconyoujiantou"></i>
                    </router-link> 
                </div>
                
            </div>
            <div class="sell_exit_main_con_exit" @click="logout()">退出登录</div>
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
    // 给Android 调用的返回
  },
  methods: {
   rou_link(val){
       console.log(val);
        var href  = window.location.href;
        var str = href.split("#");
        if(val == 1){
            var rouit = str[0] + '#/mi/personal';
            window.android.meto_goback(rouit,'false','false');
        }else if(val == 2){
            var rouit = str[0] + '#/sell/receipt';
            window.android.meto_goback(rouit,'false','false');
        }else if(val == 3){
            var rouit = str[0] + '#/payment/adviser';
            window.android.meto_goback(rouit,'false','false');
        }else if(val == 4){
            var rouit = str[0] + '#/payment/comm_problem';
            window.android.meto_goback(rouit,'false','false');
        }else if(val == 5){
            var rouit = str[0] + '#/sell/feedback';
            window.android.meto_goback(rouit,'false','false');
        }else if(val == 6){
            var rouit = str[0] + '#/payment/aboutus';
            window.android.meto_goback(rouit,'false','false');
        }

        
   },

    logout(){
      var $this = this;
      $this.$get($this.$api.logout, {token:localStorage.getItem('token')}).then(data => {
        if(data.code == 200){
            localStorage.removeItem('token')                          // 清除token
            localStorage.removeItem('token_type')                     // 清除token类型
            localStorage.removeItem('IdArrayTrue')                    // 清除购物选中的状态
            localStorage.removeItem('user_info')         // 清除个人信息
             this.$router.push({
                path: `/index`
            })
        }
      });
    },
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
    position: fixed;
    background: #f8f8f8;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .sell_exit_main{
      width: 100%;
      padding-top:rem(88px);
      .sell_exit_main_con{
          width:100%;
          .sell_exit_main_con_item{
              width:100%;
              height:rem(100px);
              line-height:rem(100px);
              border-bottom:rem(0.5px) solid rgba(239,239,239,1);
              display:flex;
              span{
                  font-size:rem(28px);
                  font-family:font_pc;
                  font-weight:400;
                  color:#333;
              }
              i{
                  font-size:rem(30px);
                  color:#666;
                  flex:1;
                  text-align:right;
                  line-height:rem(99px);
              }
          }
          .jiaz{
              background: #ffffff;
              margin-top:rem(20px);
              border-radius:rem(20px);
              padding:0 rem(32px);
          }
          .jiaz .sell_exit_main_con_item:nth-last-of-type(1){
              border:0;
          }
      }
      .sell_exit_main_con_exit{
            width:rem(520px);
            height:rem(85px);
            line-height:rem(85px);
            background:#F44647;
            text-align:center;
            color:#ffffff;
            font-size: rem(32px);
            font-family:font_b;
            font-weight:bold;
            position: fixed;
            left: 50%;
            bottom:rem(90px);
            transform: translate(-50%, 0);
            letter-spacing: rem(2px);
        }
    }
}
</style>