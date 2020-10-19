<template>
    <div class="suo-wrpper">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="prev()"></div>
            <span></span> 
            <div class="to_b"></div>
        </div>


        <div class="sousuo">
             <input type="text" placeholder="请输入要搜索的内容" v-model="mesg">
             <div class="my_img" @click="submit()">
                <img src="../../assets/images/Index_Img/sousuo.png" alt="">
             </div>
        </div>

        <div class="nav_title">
            <router-link to="/home/suo" tag="div" class="items">商品</router-link>
            <router-link to="/home/suo/Suobk" tag="div" class="items">百科</router-link>
            <router-link to="/home/suo/Suoyr" tag="div" class="items">艺人</router-link>
            <router-link to="/home/suo/Suohx" tag="div" class="items">壶型</router-link>
            <router-link to="/home/suo/Suonl" tag="div" class="items">泥料</router-link>
        </div>

        <div class="touming"></div>
        <router-view  />
    </div>
</template>

<script>
export default {
  name: 'Find',
  data () {
    return {
      mesg:'',
    }
  },
 
  mounted() {
    var $this = this;
   
    $this.mesg = localStorage.getItem('sou_mesg');     // 搜索值
    
  },
  methods: {
    prev(){
      window.android.goback()
      // this.$router.push({
      //     path: `/home/suo1`
      // })
    },

    /// 搜索提交
    submit(){
      var _this = this;
      localStorage.setItem('sou_mesg',_this.sou_name);
      _this.$post(_this.$api.search_to,{name:_this.sou_name,type:'other'}).then(data => {
          if(data.data.type == 'plaster'){
              this.$router.push({
                  path: `/home/suo/Suonl`
              })
          }else if(data.data.type == 'goods'){
              this.$router.push({
                  path: `/home/suo`
              })
          }else if(data.data.type == 'artists'){
              this.$router.push({
                  path: `/home/suo/Suoyr`
              })
          }else if(data.data.type == 'pot'){
              this.$router.push({
                  path: `/home/suo/Suohx`
              })
          }else if(data.data.type == 'wikipedia'){
              this.$router.push({
                  path: `/home/suo/Suobk`
              })
          }
      });
    },
    
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
.touming{
  width: 100%;
  height:rem(295px);
  position: fixed;
  top:0;
  left:0;
  background: #fff;
  z-index: 19;
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


</style>