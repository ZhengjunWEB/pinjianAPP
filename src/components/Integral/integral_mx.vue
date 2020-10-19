<template>
  <div class="integral-mx">
        <div class="integral-mx_header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>积分明细</span> 
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="integral-mx_main">
            <div class="integral-mx_main-djdj-list">
                <div class="integral-mx_main-djdj-items">
                     <img src="http://a.appjsh.com/Uploads/goods/2020_05_11/15891770266303.jpg" class="img">
                     <div class="integral-mx_main-djdj-items-con">
                         <div class="integral-mx_main-djdj-items-con-title">
                             <strong>名字</strong>
                             <span>#656266</span>
                         </div>
                         <div class="integral-mx_main-djdj-items-con-pirce">
                             <strong>消费送积分</strong>
                             <span>2019-10-11 13:10:11</span>
                             <b>+36</b>
                         </div>
                     </div>
                </div>
                <div class="integral-mx_main-djdj-items">
                     <img src="http://a.appjsh.com/Uploads/goods/2020_05_11/15891770266303.jpg" class="img">
                     <div class="integral-mx_main-djdj-items-con">
                         <div class="integral-mx_main-djdj-items-con-title">
                             <strong>名字</strong>
                             <span>#656266</span>
                         </div>
                         <div class="integral-mx_main-djdj-items-con-pirce">
                             <strong>消费送积分</strong>
                             <span>2019-10-11 13:10:11</span>
                             <b>+36</b>
                         </div>
                     </div>
                </div>
                <div class="integral-mx_main-djdj-items">
                     <img src="http://a.appjsh.com/Uploads/goods/2020_05_11/15891770266303.jpg" class="img">
                     <div class="integral-mx_main-djdj-items-con">
                         <div class="integral-mx_main-djdj-items-con-title">
                             <strong>名字</strong>
                             <span>#656266</span>
                         </div>
                         <div class="integral-mx_main-djdj-items-con-pirce">
                             <strong>消费送积分</strong>
                             <span>2019-10-11 13:10:11</span>
                             <b>+36</b>
                         </div>
                     </div>
                </div>
                <div class="integral-mx_main-djdj-items">
                     <img src="http://a.appjsh.com/Uploads/goods/2020_05_11/15891770266303.jpg" class="img">
                     <div class="integral-mx_main-djdj-items-con">
                         <div class="integral-mx_main-djdj-items-con-title">
                             <strong>名字</strong>
                             <span>#656266</span>
                         </div>
                         <div class="integral-mx_main-djdj-items-con-pirce">
                             <strong>消费送积分</strong>
                             <span>2019-10-11 13:10:11</span>
                             <b>+36</b>
                         </div>
                     </div>
                </div>
            </div>
        </div>

        
  </div>
</template>

<script>
export default {
  name: 'integral-wx',
  data () {
    return {
        text_mesg:'',

    }
  },
    methods: {
        adviser(){
            this.$router.go(-1);//返回上一层
        },
    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.integral-mx{
    .integral-mx_header{
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
        font-family: 黑体;
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
    .integral-mx_main{
        width:100%;
        padding-top:rem(114px);
        .integral-mx_main-djdj-list{
            .integral-mx_main-djdj-items{
                width:100%;
                height:rem(200px);
                display:flex;
                background:#f5f3f4;
                margin-bottom:rem(4px);
                padding:0 rem(30px);
                .img{
                    display:block;
                    width:rem(200px);
                    height:rem(150px);
                    margin:rem(25px) 0;
                }
                .integral-mx_main-djdj-items-con{
                    flex:1;
                    margin-left:rem(50px);
                    .integral-mx_main-djdj-items-con-title{
                        margin-top:rem(70px);
                        strong{
                            font-size:rem(26px);
                            color:rgb(74,70,67);
                        }
                        span{
                             font-size:rem(22px);
                            color:rgb(186,186,186);
                            margin-left:rem(5px);
                        }
                    }
                    .integral-mx_main-djdj-items-con-pirce{
                        margin-top:rem(35px);
                        display: flex;
                        strong{
                            font-size:rem(22px);
                            color:rgb(186,186,186);
                        }
                        span{
                            font-size:rem(22px);
                            color:rgb(186,186,186);
                            margin-left:rem(8px);
                        }
                        b{
                            flex:1;
                            text-align:right;
                            font-size: rem(22px);
                            color:rgb(117,73,2);
                        }
                    }
                }
            }
        }
    }
}

</style>
