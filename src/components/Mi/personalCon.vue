<template>
  <div class="personal">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>昵称</span> 
            <div class="to_b" @click="submit()">保存</div>
        </div>
        <div class="personal_main commons_mainsContoApp">
           <div class="jiaz">
               <input type="text" v-model="title">
            </div>
            <p class="title">昵称每30天修改一次</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'coll-sc',
  data () {
    return {
        coll_sca:[],

        title:''

    }
  },
  mounted(){
    var $this = this;

    $this.time_num = JSON.parse(localStorage.getItem('user_info'))
    $this.title = $this.time_num.nickname
  },
    methods: {
        adviser(){
            this.$router.go(-1);//返回上一层
        },
        submit(){
          var $this = this;
          $this.$post($this.$api.edit_user_info, {nickname:$this.title}).then(data => {
             localStorage.setItem('user_info',JSON.stringify(data.data));
             $this.title = data.data.nickname
          })
        }
    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
@import '../../assets/font/font.css';
.personal{
    position: absolute;
    width:100%;
    height: 100%;
    background: #f8f8f8;
    top: 0;
    left: 0;
   .personal_main{
     width: 100%;
     padding-top: rem(88px);
     .jiaz{
        background: #ffffff;
        margin-top:rem(20px);
        height: rem(100px);
        padding:0 rem(32px);
        input{
          display: block;
          width: 100%;
          height: 100%;
          outline: none;
          border: 0;
          font-size:rem(28px);
          font-family:font_pc;
          font-weight:400;
          color:#333;
        }
     }
     .title{
        font-size:rem(28px);
        font-family:font_pc;
        font-weight:400;
        color:rgba(153,153,153,1);
        margin-top:rem(20px);
        margin-left:rem(32px);
     }
   }
}

</style>
