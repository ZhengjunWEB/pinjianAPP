<template>
    <div class="suo-wrpper" style="background:#fff">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="prev()"></div>
            <span></span> 
            <div class="to_b"></div>
        </div>
        <div class="sousuo">
             <input type="text" placeholder="请输入要搜索的内容" v-model="sou_name">
             <div class="my_img" @click="submit()">
                <img src="../../assets/images/Index_Img/sousuo.png" alt="">
             </div>
        </div>
        <div class="sousuo-pp">
            <div class="title">历史搜索
                <img src="../../assets/images/cfcb6a35effc423d54657f76599fad4.png" alt="" @click="remove()" v-if="ben_souList.length!=''">
            </div>
            <div class="ls_cart clearfix">
                <span class="items" v-for="(v,k) in ben_souList" :key="k" @click="suo_bd(v)">{{v}}</span>
            </div>

            <div class="title">搜索发现</div>
            <div class="ls_cart clearfix">
                <span class="items" v-for="(v,k) in sou_tj" :key="k" @click="suo_tj(v)">{{v.name}}</span>
            </div>
        </div>
        
    </div>
</template>

<script>
import store from "@/store/store.js";
export default {
  name: 'Find',
  data () {
    return {
        sou_name:'',

        ben_List:[],
        ben_souList:[],
        sou_tj:[],
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
    $this.sub_quzhi();
    // 推荐列表
    $this.$post($this.$api.recommended,{}).then(data => {
       $this.sou_tj = data.data;
    });

    // search_technical
  },
  methods: {
    remove(){
        localStorage.removeItem('ben_souList');
        this.sub_quzhi();
    },
    // 销毁上一层
    prev(){
        window.android.goback()
    //   this.$router.push({
    //       path: `/index`
    //   })
    },

    /// 本地历史记录
    sub_quzhi(){
      var $this = this;
      if(localStorage.getItem('ben_souList') == null){
          $this.ben_souList = [];
          $this.ben_List = [];
      }else{
          $this.ben_souList = JSON.parse(localStorage.getItem('ben_souList'));
          $this.ben_List = JSON.parse(localStorage.getItem('ben_souList'));
      }
    },

    /// 搜索提交
    submit(){
      var _this = this;
      console.log(_this.sou_name);
      if(_this.sou_name == ''){
         return;
      }else{
        _this.ben_List.unshift(_this.sou_name);
        localStorage.setItem('ben_souList',JSON.stringify(_this.ben_List));
        localStorage.setItem('sou_mesg',_this.sou_name);
              var href  = window.location.href;
              var str = href.split("#");
        _this.$post(_this.$api.search_to,{name:_this.sou_name,type:'other'}).then(data => {
            if(data.data.type == 'plaster'){
              var rouit = str[0] + '#/home/suo/Suonl';
              window.android.meto_goback(rouit,'false','false');
              //   this.$router.push({
              //       path: `/home/suo/Suonl`
              //   })
            }else if(data.data.type == 'goods'){
              var rouit = str[0] + '#/home/suo';
              window.android.meto_goback(rouit,'false','false');
              //   this.$router.push({
              //       path: `/home/suo`
              //   })
            }else if(data.data.type == 'artists'){
              var rouit = str[0] + '#/home/suo/Suoyr';
              window.android.meto_goback(rouit,'false','false');
              //   this.$router.push({
              //       path: `/home/suo/Suoyr`
              //   })
            }else if(data.data.type == 'pot'){
              var rouit = str[0] + '#/home/suo/Suohx';
              window.android.meto_goback(rouit,'false','false');
              //   this.$router.push({
              //       path: `/home/suo/Suohx`
              //   })
            }else if(data.data.type == 'wikipedia'){
              var rouit = str[0] + '#/home/suo/Suobk';
              window.android.meto_goback(rouit,'false','false');
              //   this.$router.push({
              //       path: `/home/suo/Suobk`
              //   })
            }
        });
      }
    },
    suo_bd(val){
      var $this = this;
      localStorage.setItem('sou_mesg',val);
      var href  = window.location.href;
      var str = href.split("#");
      $this.$post($this.$api.search_to,{name:val,type:'other'}).then(data => {
          if(data.data.type == 'plaster'){
            var rouit = str[0] + '#/home/suo/Suonl';
            window.android.meto_goback(rouit,'false','false');
          }else if(data.data.type == 'goods'){
            var rouit = str[0] + '#/home/suo';
            window.android.meto_goback(rouit,'false','false');
          }else if(data.data.type == 'artists'){
            var rouit = str[0] + '#/home/suo/Suoyr';
            window.android.meto_goback(rouit,'false','false');
          }else if(data.data.type == 'pot'){
            var rouit = str[0] + '#/home/suo/Suohx';
            window.android.meto_goback(rouit,'false','false');
          }else if(data.data.type == 'wikipedia'){
            var rouit = str[0] + '#/home/suo/Suobk';
            window.android.meto_goback(rouit,'false','false');
          }
      });
    },
    suo_tj(val){
      var $this = this;
      localStorage.setItem('sou_mesg',val.name);
      var href  = window.location.href;
      var str = href.split("#");
      if(val.type == 'plaster'){
          var rouit = str[0] + '#/home/suo/Suonl';
          window.android.meto_goback(rouit,'false','false');
      }else if(val.type == 'goods'){
          var rouit = str[0] + '#/home/suo';
          window.android.meto_goback(rouit,'false','false');
      }else if(val.type == 'artists'){
          var rouit = str[0] + '#/home/suo/Suoyr';
          window.android.meto_goback(rouit,'false','false');
      }else if(val.type == 'pot'){
          var rouit = str[0] + '#/home/suo/Suohx';
          window.android.meto_goback(rouit,'false','false');
      }else if(val.type == 'wikipedia'){
          var rouit = str[0] + '#/home/suo/Suobk';
          window.android.meto_goback(rouit,'false','false');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 @import '../../assets/sass/base.scss';
// @import '../../assets/sass/IndexCommon.scss';
.sousuo{
  position: fixed;
  width: rem(690px);
  height: rem(86px);
  top:rem(108px);
  left: 50%;
  transform: translate(-50%, 0);
  border:rem(1px) solid rgba(112,112,112,1);
  border-radius:rem(43px);
  display: flex;
  padding: 0 rem(30px) 0 rem(40px);
  background: #fff;
  z-index: 99999;
  input{
    height: rem(80px);
    padding-right: rem(20px);
    border:0;
    outline: none;
    font-size:rem(32px);
    font-family:font_pc;
    font-weight:400;
    color:#000;
    padding-top: 0;
    margin-top:rem(2.5px);
  }
  input::-webkit-input-placeholder { 
     color:rgba(153,153,153,1);
  } 
  .my_img{
    margin-left:auto;
    width: rem(50px);
    height: rem(50px);
    margin-top:rem(18px);
    position: relative;
    img{
      position: absolute;
      display: block;
      width: rem(38px);
      height: rem(38px);
      top:0;
      left:0;
      bottom:0;
      right:0;
      margin:auto;
    }
  }
}

.nav_title{
  position: fixed;
  width: rem(750px);
  height: rem(82px);
  line-height: rem(82px);
  top:rem(213px);
  left: 50%;
  transform: translate(-50%, 0);
  padding: 0 rem(32px);
  display: flex;
  justify-content: space-between;
  border-bottom:rem(1px) solid rgba(225,225,225,1);
  z-index: 999;
  .items{
      font-size:rem(28px);
      font-family:font_pc;
      font-weight:400;
      color:rgba(102,102,102,1);
  }
  .items.router-link-active.router-link-exact-active{
    font-family:font_b;
    position: relative;
    font-weight:bold;
    color:rgba(0,0,0,1);
  }
  .items.router-link-active.router-link-exact-active::after{
      position: absolute;
      content: '';
      width: 80%;
      height: rem(8px);
      background:rgba(0,0,0,1);
      bottom: 0;
      left: 50%;
      transform: translate(-50%,0);
  }
}


.sousuo-pp{
  padding: rem(194px) rem(28px) rem(30px) rem(32px);
  .title{
    margin-top:rem(40px);
    height: rem(45px);
    font-size: rem(32px);
    font-family: font_b;
    font-weight: bold;
    line-height: rem(45px);
    color: #333333;
    display: flex;
    img{
        display: block;
        width: rem(40px);
        margin-left:auto;
    }
  }
  .ls_cart{
    max-height: rem(340px);
    overflow: hidden;
    .items{
      display: block;
      height: rem(61px);
      line-height: rem(40px);
      font-size: rem(28px);
      font-family:font_pc;
      font-weight:400;
      color: #333333;
      background:rgba(246,246,246,1);
      border-radius:rem(20px);
      padding:rem(11px) rem(25px);
      float: left;
      margin-right: rem(10px);
      margin-top:rem(20px)
    }
  }
  
}
</style>