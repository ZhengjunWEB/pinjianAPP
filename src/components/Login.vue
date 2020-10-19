<template>
  <div class="logiddn-main" style="">
      <div class="loin-x">
          <img src="../assets/images/login/btn_oft.png" alt="" @click="hrefIndex()">
          <span>密码登陆</span>
      </div>  

      <div class="login_title">登录</div> 
      <div class="dv">
          <div class="dv_one">
              <div class="dv_left">+86</div>
              <input type="number" v-model="number"  placeholder="请输入手机号码">
          </div>
          <div class="dv_two">
               <div class="dv_left">验证码</div>
              <input type="number" v-model="password" placeholder="输入验证码">
              <div class="btn-s-yzm"  v-if="isShowGetCode" @click="getVerificationCodes()">发送验证码</div>
              <div v-else class="btn-s-yzm">{{countdown}}s后可重试</div>
          </div>
      </div>  

      <div class="dv_btn1" @click="getApplicationInfo()">登录</div>
      <div class="dv_title">
            <p>未注册手机登录后自动注册</p>
            <p class="dsa">代表您同意买壶<font>用户协议</font>和<font>隐私政策</font></p>
      </div>


      <!-- <div class="dv_btn2" @click="yjlogin()">
          <img src="../assets/images/login/login_btn_yj.png" alt="">
      </div> -->
      
      <div class="dv_cen"><span>快捷登录</span></div>

      <div class="dv_Img">
        <img src="../assets/images/login/login_wx.png" alt="">
        <img src="../assets/images/login/login_qq.png" alt="">
      </div>
     
  </div>
</template>

<script>
import store from "@/store/store.js";
import Router from 'vue-router'
export default {
  name: 'Login',
  data () {
    return {
      cook:true,
      number:'',
      password:'',
      code:'',

      phone:'',           
      android_phone:[],   // 一键登录返回的信息
      iosbanben:'',       // 获取的版本号

      countdown:60,
      isShowGetCode:true
    }
  },
  store,
  // 计算属性
  computed: {
      store:function(){
        return this.$store.state;
      }
  },
  mounted() {
    var $this = this;
    // // banner数据
    // $this.$post($this.$api.login, {}).then(data => {
    //   $this.HeaderCon = data.data.adv;
    // });
    // 给Android 调用的方式 一键登录
    // window.loginInfo = $this.loginInfo;
    // 给Android 调用的方式 获取设备信息
    window.uploadVersionInfo = $this.uploadVersionInfo;
    // 验证验证码
    window.vertifyCodeSuccess = $this.vertifyCodeSuccess;


   
    
  },
  watch:{
    // cook(val){
    //   this.cook = val;
    //   console.log(val);
    // }
  },
  methods: {
 


    setCameraPostion(){
      this.cook = !this.cook
    },
    
    // 不登录返回首页
    hrefIndex(){
        this.$router.push({
            path: `/index`
        })
        //  window.android.goback()
    },
    // 登录
    getApplicationInfo () {
      if(this.cook){
          let $this = this;
          if ($this.number === '' && $this.password === '') {
            alert('不能都为空');
          }else if($this.number === ''){
            alert('手机号不能为空');
          }else if($this.password === ''){
            alert('验证码不能为空');
          }else{
            // window.android.verificationCode($this.number,$this.password);
            $this.$post($this.$api.login, {phone:$this.number,password:$this.password}).then(data => {
              if(data.code == 200){
                    $this.phone = data.user_info.phone;
                    // window.android.getApplicationInfo();
                    $this.$store.commit('changeuser_info_one',data.token)
                    $this.$store.commit('changeuser_info_two',data.token_type)
                    $this.$store.commit('changeuser_info_san',data.user_info)
                    localStorage.setItem('token',data.token);
                    localStorage.setItem('token_type',data.token_type);
                    localStorage.setItem('wy',JSON.stringify(data.wy));
                    localStorage.setItem('user_info',JSON.stringify(data.user_info));

                    $this.$router.push('/mi');
              }else{
                alert('账号或密码错误');
              }
            }).catch(error => {
              console.log(error);
            });
          }

      }else{
        alert('先确定勾选');
        return false;
      }
    },
    // 一键登录
    // yjlogin(){
    //   window.android.oneKeyLogin()
    // },
    // 方法给原生调用
    // loginInfo(value){
    //     var $this = this;
    //     $this.android_phone =  JSON.parse(value);
    //     this.$post(this.$api.get_area_otmphone, {
    //             token:$this.android_phone.token,
    //             optoken:$this.android_phone.opToken,
    //             operator:$this.android_phone.operator,
    //     }).then(data => {
    //         if(data.code == 0){
    //             alert('登录失败');
    //         }else{
    //           $this.phone = data.user_info.phone;
    //           window.android.getApplicationInfo();
    //           $this.$store.commit('changeuser_info_one',data.token)
    //           $this.$store.commit('changeuser_info_two',data.token_type)
    //           $this.$store.commit('changeuser_info_san',data.user_info)
    //           localStorage.setItem('token',data.token);
    //           localStorage.setItem('token_type',data.token_type);
    //           localStorage.setItem('user_info',JSON.stringify(data.user_info));
    //         }
    //     });
    // },
    // 安卓传递版本号
    uploadVersionInfo(iosbanben){
          this.iosbanben = iosbanben;
          var str = this.iosbanben.split(",");
          var str_1 = str[0];
          var str_2 = str[1];
          var str_3 = str[2];
          this.$post(this.$api.get_area_device, {
                  version:str_1,
                  type:str_2,
                  device_no:str_3,
                  user_tel:this.phone,
                  app_no:localStorage.getItem('app_no')
          }).then(data => {
              // this.$router.push('/index');
              
          });
          window.android.goback();
          window.android.so_index('true');
    },
    // 获取验证码  // 第一步
    getVerificationCodes(){
      if(this.number == ''){
        alert('请输入手机号');
      }else if(this.number.length != 11){
        alert('手机号格式有误');
      }else{
        this.countDown()
        this.isShowGetCode = false
        window.android.getVerificationCode(this.number)
      }
    },

    // 时间倒计时
    countDown(){
      const self = this
      this.timer =  setInterval(() =>{
         self.countdown--
         if(self.countdown === 0){
           clearInterval(self.timer)
           self.countdown = 60
           self.isShowGetCode = true
         }
       },1000)
    },
    // 验证验证码
    vertifyCodeSuccess(value){
        if(value == 0){
          alert('验证码不正确');
        }else{
          alert('验证码正确');
          this.$post(this.$api.get_area_phonelogin, {
                 phone:this.number
          }).then(data => {
              if(data.code == 200){
                window.android.getApplicationInfo();
                this.phone = data.user_info.phone;
                localStorage.setItem('token',data.token);
                localStorage.setItem('token_type',data.token_type);
                localStorage.setItem('user_info',JSON.stringify(data.user_info));
                // this.$router.push('/index');
              }
          });
        }
    },

  },


  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 /* 引入 基础 scss */
@import '../assets/sass/base.scss';

.logiddn-main{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  background:#ffffff;
  background-size:100% 100%;
  .loin-x{
    margin-top: rem(58px);
    width: 100%;
    height: rem(76px);
    line-height: rem(76px);
    padding: 0 rem(32px) 0 rem(61px);
    display: flex;
    img{
      display: block;
      width: rem(76px);
      height: rem(76px);
    }
    span{
      display: none;
      margin-left: auto;
      font-size:rem(32px);
      font-family:font_b;
      font-weight:bold;
      color:rgba(0,0,0,1);
    }
  }
  .login_title{
    width: 100%;
    height: rem(70px);
    line-height: rem(70px);
    font-family:font_b;
    font-weight:800;
    color: #000;
    letter-spacing:rem(2px);
    font-size:rem(50px);
    padding: 0 rem(32px) 0 rem(76px);
    margin-top:rem(26px);
  }


  .dv{
    .dv_one{
      width: rem(686px);
      height: rem(97px);
      display: flex;
      margin: 0 auto;
      margin-top:rem(45px);
      padding:0 0 0 rem(31px);
      border-bottom:1px solid  rgba(225,225,225,1);
      .dv_left{
        width: rem(151px);
        min-width: rem(151px);
        height: rem(97px);
        line-height: rem(97px);
        font-size:rem(36px);
        font-family:font_pc;
        font-weight:800;
        color:rgba(0,0,0,1);
        padding-left: rem(14px);
      }
      input{
        display: block;
        flex:1;
        height: rem(95px);
        border:0;
        outline: none;
        font-size: rem(36px);
        margin:rem(1px) 0;
        background:transparent;
        font-family:font_pc;
        font-weight:400;
        color:#000;
        padding: 0 rem(10px) 0 rem(27px);
      }
      input::-webkit-input-placeholder {
        color:rgba(153,153,153,1);
      }
    }
    .dv_two{
      width: rem(686px);
      height: rem(97px);
      display: flex;
      margin: 0 auto;
       margin-top:rem(45px);
      padding:0 0 0 rem(31px);
      border-bottom:1px solid  rgba(225,225,225,1);
      .dv_left{
        width: rem(151px);
        line-height: rem(97px);
        font-size:rem(36px);
        font-family:font_pc;
        font-weight:800;
        color:rgba(0,0,0,1);
        padding-left: rem(14px);
      }
      input{
        display: block;
        width: rem(230px);
        height: rem(95px);
        border:0;
        outline: none;
        margin:rem(12px) 0 0;
        background:transparent;
        font-size: rem(36px);
        margin:rem(1px) 0;
        font-family:font_pc;
        font-weight:400;
        color:#000;
        padding: 0 rem(10px) 0 rem(27px);
      }
      input::-webkit-input-placeholder {
         color:rgba(153,153,153,1);
      }
      .btn-s-yzm{
        width: rem(186px);
        height: rem(60px);
        line-height: rem(60px);
        color:rgba(0,0,0,1);
        font-size: rem(26px);
        font-family:font_pc;
        font-weight:400;
        text-align: center;
        border:1px solid rgba(51,51,51,1);
        border-radius:rem(54px);
        margin-left:auto;
        margin-top:rem(21px);
      }
    }
    .dv_one:nth-of-type(3){
      input{
        width:40%;
      }
      span{
        width: 30%;
        height: rem(45px);
        line-height: rem(45px);
        font-size: rem(26px);
        text-align: center;
      }
    }
  }
  .dv_btn1{
    width: rem(626px);
    height: rem(100px);
    line-height: rem(100px);
    background: #F44647;
    border-radius:rem(67px);
    margin:0 auto;
    margin-top:rem(65px);
    position: relative;
    text-align: center;
    font-size:rem(36px);
    font-family:font_b;
    font-weight:bold;
    color:rgba(255,255,255,1);
    letter-spacing:rem(1px);
    img{
      display: block;
      width: rem(52px);
      height: rem(26px);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
  .dv_btn2{
   width: rem(564px);
    height: rem(65px);
    background:url('../assets/images/login/login_44.png') no-repeat;
    background-size:100% 100%;
    margin:0 auto rem(32px);
    position: relative;
    img{
      display: block;
      width: rem(106px);
      height: rem(26px);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }
  }
  .dv_cen{
    margin-top: rem(100px);
    text-align: center;
    height: rem(40px);
    line-height: rem(40px);
    span{
      font-size: rem(27px);
      color: #fff;
      position: relative;
    }
    span::before{
      position: absolute;
      content: '';
      width:rem(220px);
      height:rem(2px);
      background: #fff;
      top:rem(17px);
      left:rem(125px);
    }
    span::after{
      position: absolute;
      content: '';
      width:rem(220px);
      height:rem(2px);
      background: #fff;
      top:rem(17px);
      right:rem(125px);
    }
  }
  
  .dv_Img{
    width: 90%;
    margin:0 auto;
    display: flex;
    justify-content: center;
    margin-top: rem(35px);
    display: none;
    img{
      display: block;
      width: rem(71px);
      height:rem(71px);
      margin:0 rem(20px);
    }
  }
  .dv_title{
    margin-top:rem(41px);
    p{
      text-align: center;
      color: #999;
      font-size:rem(24px);
      font-family:font_pc;
      font-weight:400;
    }
    .dsa{
      margin-top:rem(8px);
    }
    font{
      font-size: rem(24px);
      color:#00A8FF;
    }
  }
}

</style>