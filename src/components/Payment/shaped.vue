<template>
    <div class="shaped">
        <div class="shaped-header">
            <div class="to_a iconfont iconzuo" @click="back()"></div>
            <span>特卖专场</span>
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="shaped-main">
            <div class="shaped-main_list">
                <div class="shaped-main_item">
                    <img src="static/images/20200411/zbrk.jpg" alt="" class="img">
                    <div class="shaped-main_con">
                        <h3>戴晓<span>虚扁</span></h3>
                        <b></b>
                        <dd>这是内容介绍这是内容介绍这是内容介绍这是内容介绍这是内容介绍这是内容介绍这是内容介绍这是内容介绍</dd>
                    </div>
                </div>
                 <div class="shaped-main_item">
                    <img src="static/images/20200411/zbrk.jpg" alt="" class="img">
                    <div class="shaped-main_con">
                        <h3>戴晓<span>虚扁</span></h3>
                        <b></b>
                        <dd>这是内容介绍这是内容介绍这是内容介绍这是内容介绍这是内容介绍这是内容介绍这是内容介绍这是内容介绍</dd>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'shaped',

  data () {
    return {
     
    }
  },
  methods: {
      back(){
        this.$router.push({
            path: `/index`
        })
      },
     
  }
}
</script>

<style lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.shaped{
  .shaped-header {
    width: 100%;
    height: rem(115px);
    line-height: rem(115px);
    border-bottom: rem(1px) solid #ccc;
    display: flex;
    position: fixed;
    z-index: 9999;
    background: #333;
    box-sizing: content-box;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    .to_a {
      width: 20%;
      display: block;
      font-size: rem(40px);
      color: rgb(15, 15, 15);
      font-weight: bold;
      margin-left: rem(20px);
      color:#fff
    }
    span {
      display: block;
      font-size: rem(30px);
      color: #fff;
      font-weight: bold;
      text-align: center;
      flex: 1;
    }
    i {
      width: 25%;
      font-size: rem(45px);
      display: block;
      text-align: right;
      font-weight: bold;
      margin-right: rem(30px);
    }
  }
  .shaped-main{
    padding-top:rem(115px);
    .shaped-main_list{
        padding:0 rem(28px);
        .shaped-main_item{
            margin:rem(30px) 0 rem(40px);
            .img{
              display: block;
              width:100%;
              height: rem(330px);
            }
            .shaped-main_con{
              display: flex;
              width: 100%;
              height: rem(80px);
              line-height: rem(80px);
              background: #a4a8b1;
              padding:0 rem(25px);
              h3{
                font-size: rem(30px);
                font-family: Font_M;
                span{
                  margin-left:rem(17px);
                }
              }
              b{
                width: 1px;
                height: rem(44px);
                background: #24211c;
                margin:rem(18px) 0;
                margin-left:rem(30px);
              }
              dd{
                flex:1;
                height: rem(58px);
                font-size: rem(22px);
                line-height: rem(28px);
                overflow: hidden;    
                display: -webkit-box;               
                text-overflow: ellipsis;            
                -webkit-box-orient: vertical;       
                -webkit-line-clamp: 2;
                margin:rem(13px) 0 auto rem(30px);
              }
            }
        }
    }
   }
}


</style>
