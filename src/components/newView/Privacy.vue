<template>
  <div class="personal">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>隐私政策</span> 
        </div>
        <div class="Privacy_main commons_mainsContoApp">
            <div class="ccs" v-html="Privacy"></div>
        </div>

        
  </div>
</template>

<script>
export default {
  name: 'Privacy',
  data () {
    return {
    
      Privacy:[]
    }
  },
  mounted(){
    var $this = this;
    $this.$post($this.$api.get_detail_article, {id:7}).then(data => {
      $this.Privacy = data.data.content
      console.log($this.Privacy);
    });

    
  },
  methods: {
    adviser(){
        this.$router.back();
    },
  }
    
}
</script>

<style lang="scss">
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
   .Privacy_main{
     width: 100%;
     padding-top: rem(88px);
    .ccs{
      padding:rem(30px) rem(32px);
      p{
        font-size: rem(28px);
        span{
          font-size: rem(28px) !important;
          line-height: rem(35px);
          color: #666;
        }
      }
    }
  }
}

</style>
