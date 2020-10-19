<template>
    <div class="picture">
        <div class="picture-header">
            <div class="to_a iconfont iconzuo" @click="tuichu()"></div>
            <span>壶友返图</span>
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>

        <div class="picture-main">
            <div class="pic_top">
                <div class="pic_top-sou">
                    <input type="text" placeholder="搜索作者、作品名称或者编号">
                    <i class="iconfont iconsousuo"></i>
                </div>

                <div class="pic_top-xu">
                    <div class="pic_top-xu_item active">上新<i :class="iSstyle"></i></div>
                    <div class="pic_top-xu_item">人气</div>
                    <div class="pic_top-xu_item">艺人筛选</div>
                </div>

            </div>
            <div class="pic_list">
                <div class="pic_item">
                    <div class="pic_list-img" @click="next()"><img src="static/images/20200411/tm.jpg" alt="" class="img"></div>
                    <div class="pic_title">名字</div>
                    <div class="pic_time">[北京市]王先生<span>养壶时长：6天</span>
                        <p><i class="iconfont icondianzan"></i><b>26</b></p>
                    </div>
                </div>
                <div class="pic_item">
                    <div class="pic_list-img" @click="next()"><img src="static/images/20200411/tm.jpg" alt="" class="img"></div>
                    <div class="pic_title">名字</div>
                    <div class="pic_time">[北京市]王先生<span>养壶时长：6天</span>
                        <p><i class="iconfont icondianzan"></i><b>26</b></p>
                    </div>
                </div>
                <div class="pic_item">
                    <div class="pic_list-img" @click="next()"><img src="static/images/20200411/tm.jpg" alt="" class="img"></div>
                    <div class="pic_title">名字</div>
                    <div class="pic_time">[北京市]王先生<span>养壶时长：6天</span>
                        <p><i class="iconfont icondianzan"></i><b>26</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Picture',
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
    
  }
}
</script>

<style lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.picture{
  .picture-header {
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
  .picture-main{
    width:100%;
    padding-top:rem(115px);
    .pic_top{
      padding:0 rem(31px);
      .pic_top-sou{
          width:100%;
          height:rem(45px);
          line-height:rem(45px);
          margin-top:rem(32px);
          border:rem(1px) solid #4c4c4c;
          border-radius:rem(30px);
          display:flex;
          overflow:hidden;
          input{
              flex:1;
              border:0;
              outline:none;
              font-size:rem(25px);
              color:#666;
              padding:0 rem(15px) 0 rem(25px);
          }
          i{
              font-size:rem(30px);
              color:#333;
              margin:0 rem(20px) 0 rem(10px);
          }
      }
      .pic_top-xu{
        margin: rem(22px) 0;
        display: flex;
        justify-content: space-between;
        .pic_top-xu_item{
          width:rem(205px);
          height: rem(45px);
          line-height: rem(45px);
          font-size: rem(26px);
          color: #535353;
          background: #dadada;
          border-radius: rem(30px);
          text-align: center;
          display: flex;
          justify-content: center;
          i{
            font-size: rem(30px);
          }
        }
        .pic_top-xu_item.active{
          color: #fff;
          background: #676662;
        }
      }
    }
    .pic_list{
      padding: 0 rem(15px);
      .pic_item{
        margin-bottom:rem(30px);
        .pic_list-img{
          width: 100%;
          height: rem(400px);
          .img{
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .pic_title{
          font-size: rem(26px);
          color: #262626;
          margin-top:rem(30px);
          font-weight: 600;
        }
        .pic_time{
          color: #3f3f3f;
          font-size: rem(26px);
          margin-top:rem(15px);
          display: flex;
          span{
            margin-left:rem(20px);
          }
          p{
            margin-left: auto;
            i{
              color: #333;
              font-size: rem(30px);
            }
            b{
              color: red;
              margin:0 rem(5px);
            }
          }
        }
      }
    }
  }
}


</style>
