<template>
    <div class="Videocation">
        <div class="Videocation-header">
            <div class="to_a iconfont iconzuo" @click="tuichu()"></div>
            <span>视频鉴宝</span>
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>

        <div class="Videocation-main">
            <div class="Videocation_list">
                <div class="Videocation_item">
                    <div class="Videocation_video p-relative">
                        <img src="static/images/20200411/tm.jpg" alt="" class="img">
                        <img src="static/images/20200411/play.png" alt="" class="img_play">
                    </div>
                    <div class="Videocation_title">
                        <h2>标题名字</h2>
                        <time>2020-10-19</time>
                    </div>
                    <div class="Videocation_con">类容介绍部分类容介绍部分类容介绍部分类容介绍部分类容介绍部分</div>
                    <div class="Videocation_icon">
                        <div class="Videocation_icon-item lun lun1"><i class="iconfont icondianzan"></i><font>23</font></div>
                        <div class="Videocation_icon-item lun lun1"><i class="iconfont iconpinglun"></i><span>评论</span></div>
                        <div class="Videocation_icon-item lun1"><i class="iconfont iconfenxiang"></i><span>分享</span></div>
                    </div>
                </div>
                <div class="Videocation_item">
                    <div class="Videocation_video p-relative">
                        <img src="static/images/20200411/tm.jpg" alt="" class="img">
                        <img src="static/images/20200411/play.png" alt="" class="img_play">
                    </div>
                    <div class="Videocation_title">
                        <h2>标题名字</h2>
                        <time>2020-10-19</time>
                    </div>
                    <div class="Videocation_con">类容介绍部分类容介绍部分类容介绍部分类容介绍部分类容介绍部分</div>
                    <div class="Videocation_icon">
                        <div class="Videocation_icon-item lun lun1"><i class="iconfont icondianzan"></i><font>23</font></div>
                        <div class="Videocation_icon-item lun lun1"><i class="iconfont iconpinglun"></i><span>评论</span></div>
                        <div class="Videocation_icon-item lun1"><i class="iconfont iconfenxiang"></i><span>分享</span></div>
                    </div>
                </div>
            </div>
        </div>


       
    </div>
</template>

<script>
export default {
  name: 'Videocation',
  data () {
    return {
    }
  },
  methods: {
      tuichu(){
        this.$router.go(-1);//返回上一层
      },
    
  }
}
</script>

<style lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.Videocation{
  .Videocation-header {
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
  .Videocation-main{
    width:100%;
    padding-top:rem(115px);
    .Videocation_list{
        padding:0 rem(20px);
        .Videocation_item{
            margin:rem(30px) 0;
            .Videocation_video{
                width:100%;
                height:rem(473px);
                .img{
                    display:block;
                    width:100%;
                    height:100%;
                }
                .img_play{
                    display:block;
                    width:rem(130px);
                    height:rem(130px);
                    position:absolute;
                    margin: auto;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                }
            }
            .Videocation_title{
                margin-top:rem(20px);
                padding:0 rem(15px);
                display:flex;
                height:rem(40px);
                line-height:rem(40px);
                h2{
                    font-size:rem(30px);
                    color:#666;
                }
                time{
                    margin-left:auto;
                    font-size:rem(24px);
                    color:#666;
                }
            }
            .Videocation_con{
                padding:0 rem(15px);
                margin:rem(10px) 0;
                font-size:rem(28px);
                letter-spacing:1px;
                line-height:rem(35px);
                color:#b3b3b3;
            }
            .Videocation_icon{
                padding:0 rem(15px);
                display:flex;
                justify-content: space-between;
                height:rem(50px);
                line-height:rem(50px);
                .Videocation_icon-item{
                    font-size:rem(28px);
                    color:#666;
                    i{
                        color:#666;
                        font-size:rem(40px);
                        margin-right:rem(5px);
                    }
                }
                .Videocation_icon-item.lun{
                    i{
                        font-size:rem(32px);
                    }
                }
                .Videocation_icon-item.lun1{
                    display:flex;
                }
            }
        }
    }
  }
}


</style>
