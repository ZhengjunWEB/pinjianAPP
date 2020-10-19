<template>
    <div class="fot_scroll_topbar">
        <div class="ii1">
            <i class="iconfont iconzhixiangshangshangjiantou"></i>
        </div>
        <div class="ii2" @click="isToken()">
            <i class="iconfont icongouwuchekong"></i>
            <dd v-if="isHide">{{num}}</dd>
        </div>
    </div>
</template>

<script>
import store from "@/store/store.js";
export default {
  name: 'Find',
  data () {
    return {
      num: '',
      token:'',
      isHide:false
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
      $('.ii1').click(function(){
        $('html,body').animate({
          scrollTop:0,
        },500)
      }),
      $this.token = localStorage.getItem('token')
      if($this.token == null){
         $this.num = 0; 
         $this.isHide = false; 
      }else{
          $this.$store.commit('Change_rouId','Index')
           $this.$get($this.$api.get_cart_count, {token:localStorage.getItem('token')}).then(data => {
             if(data.data == 0){
                $this.isHide = false; 
             }else{
              $this.num = data.data;
              $this.isHide = true; 
             }
              
          })
      }
  },
  methods: {
      isToken(){
          if(localStorage.getItem('token') == null){
            this.$router.replace({
              path: `/login`
            });
          }else{
            this.$router.replace({
              path: `/common/cart`
            });
          }
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';



.fot_scroll_topbar .ii1{
    position: fixed;
    width:rem(80px);
    height:rem(80px);
    border-radius: 50%;
    background: #333;
    bottom:rem(240px);
    right:rem(20px);
    z-index: 9999999;
    i{
        display: block;
        font-size: rem(80px);
        color: #fff;
        line-height: rem(80px);
        text-align: center;
    }
}
.fot_scroll_topbar .ii2{
    position: fixed;
    width:rem(80px);
    height:rem(80px);
    border-radius: 50%;
    background: #333;
    bottom:rem(140px);
    right:rem(20px);
    z-index: 9999999;
    i{
        display: block;
        font-size: rem(40px);
        color: #fff;
        line-height: rem(80px);
        text-align: center;
    }
    dd{
      position:absolute;
      left:rem(-12px);
      top:rem(-10px);
      width:rem(40px);
      height:rem(40px);
      line-height:rem(40px);
      border-radius:50%;
      background:red;
      text-align:center;
      color:#fff;
    }
}

</style>



