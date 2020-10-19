<template>
<!-- 底部导航 组件 -->
 <!--<h1>{{$route.path}}</h1>-->
<!-- <h1>{{resPath}}</h1> -->
 <nav class="n_bottom">
     <router-link to="/index" tag="div" class="item">
        <img v-if="resPath == 'index'" :src="srcPath + 'h21.png'" alt="">
        <img v-else :src="srcPath + 'h11.png'" alt="">  
        <p>主页</p>
    </router-link>
    <router-link to="/live" tag="div" class="item">
        <img v-if="resPath == 'live'" :src="srcPath + 'h24.png'" alt="">
        <img v-else :src="srcPath + 'h14.png'" alt="">  
        <p>直播</p>
    </router-link>
     <router-link to="/find" tag="div" class="item">
        <img v-if="resPath == 'find'" :src="srcPath + 'h22.png'" alt="">
        <img v-else :src="srcPath + 'h12.png'" alt="">
      <p>发现</p>
    </router-link>
     <router-link to="/mi" tag="div" class="item">
        <img v-if="resPath == 'mi'" :src="srcPath + 'h23.png'" alt="">
        <img v-else :src="srcPath + 'h13.png'" alt="">
      <p>我的</p>
    </router-link>
</nav> 
   



</template>

<script>
export default {
  name: 'Find',
  data () {
    return {
      token:'',
      simitype:'',      // 判断是否有手机号
      get_color:'',
      user_info:[],
      httpsCdn_Img:'http://cdn.pinjianapp.com/web_app/img/footer/',         // 配置地址
      srcPath: 'http://res.pinjianapp.com/vue_wap/images/bottom_nav/',    //配置地址
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
  computed: {
    resPath:function(){
      // 用 ‘/’  把字符串 分割成 数组
      var arr = this.$route.path.split('/');
      // 返回能表示 当前是哪个组件 标 index
      return arr[1];
    },
  },
  mounted() {
    var $this = this;
    // banner数据
    $this.token = localStorage.getItem('token');
    $this.user_info = JSON.parse(localStorage.getItem('user_info'))

    // $this.$post('http://192.168.128.194:3333/Home/check_user_login', {token:localStorage.getItem('token')}).then(data => {
    //   console.log(data);
    // });
    window.isSIM = $this.isSIM;    
    // 给Android 调用的方式 一键登录
    window.loginInfo = $this.loginInfo;
    // 给Android 调用的方式 获取设备信息
    window.uploadVersionInfo = $this.uploadVersionInfo;
    window.routches = $this.routches;
  },
  methods:{
    linkrou(val){
      if(val == 1){
        this.$router.push({
            path: `/index`
        })
      }else if(val == 2){
        this.$router.push({
            path: `/classification`
        })
      }
    },


    routches(){
      if(localStorage.getItem('token') == null){
        //  window.android.isHaveSIM();     // 获取SIM 信息
          window.android.oneKeyLogin()
      }else{
        window.android.so_index('true')
          // this.$router.replace({
          //   path: `/mi`
          // });
      }
      
    },
    //  获取 SIM 
    isSIM(val){
        var _this = this;
        _this.simitype = val;
        alert(_this.simitype);
        if(_this.simitype == 1){
            // window.android.oneKeyLogin()
        }else{
          var href  = window.location.href;
          var str = href.split("#");
          var rouit = str[0] + '#/login';
          window.android.meto_goback(rouit,'false','false');
          // _this.$router.replace({
          //   path: `/login`
          // });
        }
    },

    // 方法给原生调用
    loginInfo(value){
        var $this = this;
        $this.android_phone =  JSON.parse(value);
        this.$post(this.$api.get_area_otmphone, {
                token:$this.android_phone.token,
                optoken:$this.android_phone.opToken,
                operator:$this.android_phone.operator,
        }).then(data => {
            if(data.code == 0){
                alert('登录失败');
            }else{
              $this.phone = data.user_info.phone;
              window.android.getApplicationInfo();
              window.android.so_index('true');
              // $this.$store.commit('changeuser_info_one',data.token)
              // $this.$store.commit('changeuser_info_two',data.token_type)
              // $this.$store.commit('changeuser_info_san',data.user_info)
              localStorage.setItem('token',data.token);
              localStorage.setItem('token_type',data.token_type);
              localStorage.setItem('user_info',JSON.stringify(data.user_info));
            }
        });
    },
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
            this.$router.push('/index');
        });
    },


  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';
.n_bottom {
  display: flex;
  position: fixed;
  bottom:0;
  left:0;
  width: 100%;
  height: rem(98px);
  background:#fff;
  padding: 0 rem(34px);
  justify-content: space-between;
  box-shadow: 0px -3px 6px rgba(0, 0, 0, 0.05);
  div {
    box-sizing: content-box;
    text-align: center;
    width: rem(98px);
    height: rem(98px);
    padding: 0 rem(30px);
  }
  img {
    margin: rem(10px) 0 rem(10px) 0;
    width: rem(48px);
    height: rem(48px);
  }
  p {
    font-size: rem(20px);
  }
}
 

</style>



