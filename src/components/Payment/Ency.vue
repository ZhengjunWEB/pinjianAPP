<template>
    <div class="Ency">
        <div class="Ency-header">
            <div class="to_a iconfont iconzuo" @click="tuichu()"></div>
            <span>紫砂百科</span>
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>

        <div class="Ency-main">
           <div class="item">
                <img src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png" alt="" class="img" @click="go()">
                <div class="item_title">
                    <p>叫你如何区分紫砂泥！</p>
                    <span>2020-6-12</span>
                </div>
                <div class="item-con">这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容</div>
            </div>
            <div class="item">
                <img src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png" alt="" class="img" @click="go()">
                <div class="item_title">
                    <p>叫你如何区分紫砂泥！</p>
                    <span>2020-6-12</span>
                </div>
                <div class="item-con">这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容</div>
            </div>
            <div class="item">
                <img src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png" alt="" class="img" @click="go()">
                <div class="item_title">
                    <p>叫你如何区分紫砂泥！</p>
                    <span>2020-6-12</span>
                </div>
                <div class="item-con">这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容这是介绍内容</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Ency',
  data () {
    return {
      iSstyle:'iconfont iconxiajiantou-copy',
    }
  },
  methods: {
      tuichu(){
        this.$router.go(-1);//返回上一层
      },
      next(){
        this.$router.push({
            path: `/payment/picturedetails`
        })
      },
      go(){
        this.$router.push({
            path: `/payment/encyclopedia`
        })
    }
    
  }
}
</script>

<style lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.Ency{
  .Ency-header {
    width: 100%;
    height: rem(114px);
    line-height: rem(114px);
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
  .Ency-main{
    width: 100%;
    padding: 0 rem(20px);
    box-sizing: border-box;
    padding-top: rem(114px);
    .item{
      margin-top:rem(30px);
      .img {
          display: block;
          border-right:rem(7px);
          width: 100%;
          height:rem(350px);
      }
      .item_title{
        width: 100%;
        height: rem(80px);
        line-height: rem(80px);
        border-bottom:rem(3px) dashed #b3b3b3;
        display: flex;
        p{
          font-size: rem(32px);
          color: #333;
          font-family: 黑体;
        }
        span{
          margin-left: auto;
          color: #666;
          font-size: rem(26px);
        }
      }
      .item-con{
        color:#b3b3b3;
        padding:rem(15px) 0 rem(20px);
        font-size: rem(28px);
        letter-spacing:1px;
        line-height: rem(35px);
        max-height:100%;
      }
    }
  }
}


</style>
