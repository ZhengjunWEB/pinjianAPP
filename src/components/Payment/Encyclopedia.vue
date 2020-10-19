<template>
    <div class="Encyclopedia">
        <div class="Encyclopedia-header">
            <div class="to_a iconfont iconzuo" @click="back()"></div>
            <span>紫砂百科</span>
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>

        <div class="Encyclopedia-main">
            <div class="Con">
                <!-- 头部信息 -->
                <div class="titleCon">
                    <div class="title">
                        <h2>叫你如何区分紫砂泥！</h2>
                        <div class="author">
                            <span class="c1">作者：大林</span>
                            <span class="c2">日期：2020-11-08</span>
                        </div>
                    </div>
                </div>


                <!-- 图片 -->
                <div class="Encyclopedia_Img">
                    <img src="static/images/20200411/tm.jpg" alt="" class="img">
                </div>

                <!-- 内容文本 -->
                <div class="Encyclopedia_Con">
                    文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍
                </div>

                 <div class="Encyclopedia-footer">
                    <p><i class="iconfont iconliulan"></i><span>{{browse}}</span></p>
                    <p><i class="iconfont iconfenxiang"></i><span>{{share}}</span></p>
                </div>
            </div>
        </div>


       
    </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
        browse:0,    //浏览数
        share:0      //分享次数
    }
  },
  methods: {
      back(){
        this.$router.go(-1);//返回上一层
      }
  }
}
</script>

<style lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.Encyclopedia{
  .Encyclopedia-header {
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
  .Encyclopedia-main{
      width:100%;
      padding-top:rem(114px);
      .Con{
          padding:rem(20px) 0 rem(40px);
          .titleCon{
            padding:0 rem(20px);
            h2{
                font-size:rem(33px);
                color:#000;
                font-weight:600;
            }
            .author{
                margin-top:rem(15px);
                span{
                    color:#666;
                    font-size:rem(26px);
                }
                .c2{
                    margin-left:rem(20px);
                }
            }
          }
          .Encyclopedia_Img{
              width:100%;
              margin:rem(30px) auto;
              .img{
                  display:block;
                  width:100%;
                  max-height:rem(500px);
              }
          }
          .Encyclopedia_Con{
              padding:rem(10px) rem(20px) rem(30px);
              font-size:rem(30px);
              color:#666;
              max-height: 100%;
              letter-spacing:1px;
              line-height: rem(40px);
          }
      }
  }
  .Encyclopedia-footer{
      margin-top:rem(20px);
      display:flex;
      padding:0 rem(20px);
      justify-content: flex-end;
      p{
          i{
              color:#666;
              font-size:rem(30px);
          }
          span{
            font-size:rem(28px);
            color:#666;
            margin-left:rem(5px);
          }
      }
      p:nth-of-type(1){
          margin-right:rem(20px);
      }
  }
}

</style>
