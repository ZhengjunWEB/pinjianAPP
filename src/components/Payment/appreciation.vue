<template>
    <div class="appreciation">
        <div class="appreciation-header">
            <div class="to_a iconfont iconzuo" @click="back()"></div>
            <span>美物赏析</span>
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>

        <div class="appreciation-main">
            <div class="appre_list clearfix">
                <div class="appre_item">
                    <img src="static/images/20200411/tm.jpg" alt="" class="img" @click="ceshi">
                    <div class="appre-tille">
                        <span>商品名称</span>
                        <b>1/6</b>
                    </div>
                </div>
                <div class="appre_item">
                    <img src="static/images/20200411/tm.jpg" alt="" class="img" @click="ceshi">
                    <div class="appre-tille">
                        <span>商品名称</span>
                        <b>1/6</b>
                    </div>
                </div>
                <div class="appre_item">
                    <img src="static/images/20200411/tm.jpg" alt="" class="img" @click="ceshi">
                    <div class="appre-tille">
                        <span>商品名称</span>
                        <b>1/6</b>
                    </div>
                </div>
                <div class="appre_item">
                    <img src="static/images/20200411/tm.jpg" alt="" class="img" @click="ceshi">
                    <div class="appre-tille">
                        <span>商品名称</span>
                        <b>1/6</b>
                    </div>
                </div>
                <div class="appre_item">
                    <img src="static/images/20200411/tm.jpg" alt="" class="img" @click="ceshi">
                    <div class="appre-tille">
                        <span>商品名称</span>
                        <b>1/6</b>
                    </div>
                </div>
                <div class="appre_item">
                    <img src="static/images/20200411/tm.jpg" alt="" class="img" @click="ceshi">
                    <div class="appre-tille">
                        <span>商品名称</span>
                        <b>1/6</b>
                    </div>
                </div>
            </div>
        </div>


       
    </div>
</template>

<script>
export default {
  name: 'appreciation',
  data () {
    return {
       
    }
  },
  methods: {
      back(){
        this.$router.go(-1);//返回上一层
      },
      ceshi(){
        this.$router.push({
            path: `/payment/appreciationlist`
        })  
      }
  }
}
</script>

<style lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.appreciation{
  .appreciation-header {
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
  .appreciation-main{
      width:100%;
      padding-top:rem(115px);
      .appre_list{
          padding:rem(20px) rem(20px) rem(40px);
          .appre_item{
              width:48%;
              padding-bottom:rem(30px);
              margin-top:rem(15px);
              .img{
                  width:100%;
                  height:rem(240px)
              }
              .appre-tille{
                  margin-top:rem(20px);
                  display:flex;
                  padding:0 rem(10px);
                  span{
                      font-size:rem(28px);
                      color:#666;
                  }
                  b{
                     font-size:rem(28px);
                     color:#666; 
                     margin-left:auto;
                  }
              }
          }
          .appre_item:nth-of-type(odd){
              float:left;
          }
          .appre_item:nth-of-type(even){
              float:right;
          }
      }
  }
}

</style>
