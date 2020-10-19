<template>
  <div class="integral">
        <div class="integral_header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>积分商城</span> 
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="integral_main">
            <div class="integral_main-title"><font>105</font>积分</div>
            <div class="integral_main-spare-list">
                <router-link to="/Integral/integralmx" tag="div" class="integral_main-spare-list-item">积分明细</router-link>
                <router-link to="/Integral/integral_Dind" tag="div" class="integral_main-spare-list-item">兑换订单</router-link>
                <router-link to="/Integral/integralgz" tag="div" class="integral_main-spare-list-item">积分规则</router-link>
            </div>

            <div class="integral_main-corfunkl-list clearfix">
                <div class="integral_main-corfunkl-items">
                    <img src="http://a.appjsh.com/Uploads/goods/2020_05_11/15891770266303.jpg" class="img">
                    <div class="integral_main-corfunkl-items-dd">
                        <dt class="integral_main-corfunkl-items-dt dt_one">
                            <strong>茶盘上螃蟹</strong>
                            <span>#457484</span>
                        </dt>
                        <dt class="integral_main-corfunkl-items-dt dt_two">
                            <strong>20积分</strong>
                            <span>+￥80.00</span>
                        </dt>
                        <dt class="integral_main-corfunkl-items-dt dt_san">立即兑换</dt>
                    </div>
                </div>
                <div class="integral_main-corfunkl-items">
                    <img src="http://a.appjsh.com/Uploads/goods/2020_05_11/15891770266303.jpg" class="img">
                    <div class="integral_main-corfunkl-items-dd">
                        <dt class="integral_main-corfunkl-items-dt dt_one">
                            <strong>茶盘上螃蟹</strong>
                            <span>#457484</span>
                        </dt>
                        <dt class="integral_main-corfunkl-items-dt dt_two">
                            <strong>20积分</strong>
                            <span>+￥80.00</span>
                        </dt>
                        <dt class="integral_main-corfunkl-items-dt dt_san">立即兑换</dt>
                    </div>
                </div>
                <div class="integral_main-corfunkl-items">
                    <img src="http://a.appjsh.com/Uploads/goods/2020_05_11/15891770266303.jpg" class="img">
                    <div class="integral_main-corfunkl-items-dd">
                        <dt class="integral_main-corfunkl-items-dt dt_one">
                            <strong>茶盘上螃蟹</strong>
                            <span>#457484</span>
                        </dt>
                        <dt class="integral_main-corfunkl-items-dt dt_two">
                            <strong>20积分</strong>
                            <span>+￥80.00</span>
                        </dt>
                        <dt class="integral_main-corfunkl-items-dt dt_san">立即兑换</dt>
                    </div>
                </div>
                <div class="integral_main-corfunkl-items">
                    <img src="http://a.appjsh.com/Uploads/goods/2020_05_11/15891770266303.jpg" class="img">
                    <div class="integral_main-corfunkl-items-dd">
                        <dt class="integral_main-corfunkl-items-dt dt_one">
                            <strong>茶盘上螃蟹</strong>
                            <span>#457484</span>
                        </dt>
                        <dt class="integral_main-corfunkl-items-dt dt_two">
                            <strong>20积分</strong>
                            <span>+￥80.00</span>
                        </dt>
                        <dt class="integral_main-corfunkl-items-dt dt_san">立即兑换</dt>
                    </div>
                </div>
            </div>
        </div>

        
  </div>
</template>

<script>
export default {
  name: 'integral',
  data () {
    return {
        text_mesg:'',

    }
  },
    methods: {
        adviser(){
            this.$router.replace({
                path: `/mi`
            })
        },
    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.integral{
    .integral_header{
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
    .integral_main{
        width:100%;
        padding-top:rem(114px);
        background:#e6e6e6;
        .integral_main-title{
            text-align:center;
            font-size:rem(24px);
            color:rgb(37,34,29);
            font-weight:bold;
            margin-top:rem(40px);
            font{
                margin-right:rem(5px);
            }
        }
        .integral_main-spare-list{
            padding:rem(32px) rem(42px) rem(37px);
            display:flex;
            justify-content: space-between;
            .integral_main-spare-list-item{
                width:rem(185px);
                height:rem(45px);
                line-height:rem(45px);
                text-align:center;
                color:rgb(77,74,69);
                font-size:rem(26px);
                border:rem(2px) solid #4c4845;
                border-radius:rem(20px);
            }
        }
        .integral_main-corfunkl-list{
            padding:rem(28px) rem(21px);
            background:#fff;
            .integral_main-corfunkl-items{
                width:rem(345px);
                border:rem(2px) solid #858585;
                margin-bottom:rem(20px);
                .img{
                    display:block;
                    width:100%;
                    height:rem(285px);
                }
                .integral_main-corfunkl-items-dd{
                    width:100%;
                    height:rem(190px);
                    background:#f8f8f8;
                    .integral_main-corfunkl-items-dt.dt_one{
                        margin-top:rem(25px);
                        display:flex;
                        text-align:center;
                        justify-content: center;
                        strong{
                            color:rgb(77,74,69);
                            font-size:rem(26px);
                        }
                        span{
                            color:rgb(185,185,185);
                            font-size:rem(22px);
                            margin-left:rem(25px);
                        }
                    }
                    .integral_main-corfunkl-items-dt.dt_two{
                        margin-top:rem(35px);
                        display:flex;
                        text-align:center;
                        justify-content: center;
                        strong{
                            color:rgb(117,73,2);
                            font-size:rem(22px);
                        }
                        span{
                            color:rgb(128,128,128);
                            font-size:rem(20px);
                            margin-left:rem(25px);
                        }
                    }
                    .integral_main-corfunkl-items-dt.dt_san{
                        width:rem(160px);
                        height:rem(40px);
                        line-height:rem(40px);
                        margin:0 auto;
                        margin-top:rem(30px);
                        background:#754900;
                        color:rgb(255,255,254);
                        text-align:center;
                        border-radius:rem(20px);
                    }
                }
            }
            .integral_main-corfunkl-items:nth-of-type(odd){
                float:left;
            }
            .integral_main-corfunkl-items:nth-of-type(even){
                float:right;
            }
        }
    }
}

</style>
