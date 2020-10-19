<template>
  <div class="integral-gz">
        <div class="integral-gz_header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>积分规则</span> 
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="integral-gz_main">
            <div class="integral-gz_list">
                <div class="integral-gz_items style_one">
                    <h2>一、什么是丰行积分？</h2>
                    <div class="text_con">介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</div>
                </div>
                <div class="integral-gz_items style_two">
                    <h2>二、什么是丰行积分？</h2>
                    <div class="text_lust">
                        <div class="text_con"><span>1</span><font>.</font>介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</div>
                        <table>
                            <tr>
                                <td>Bill</td>
                                <td>Gates</td>
                            </tr>
                            <tr>
                                <td>Steven</td>
                                <td>Jobs</td>
                            </tr>
                        </table>
                        <div class="text_con"><span>2</span><font>.</font>介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</div>
                    </div>
                </div>
                <div class="integral-gz_items style_san">
                    <h2>三、什么是丰行积分？</h2>
                    <div class="text_lust">
                        <div class="text_con"><span>1</span><font>.</font>介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</div>
                        <div class="text_con"><span>2</span><font>.</font>介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍文字</div>
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
@import '../../assets/font/font.css';
.integral-gz{
    .integral-gz_header{
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
    .integral-gz_main{
        width:100%;
        padding-top:rem(114px);
        .integral-gz_list{
            .integral-gz_items{
                h2{
                    width:100%;
                    height:rem(60px);
                    line-height:rem(60px);
                    background:#e3e3e3;
                    color:rgb(36,33,28);
                    font-size:rem(26px);
                    padding:0 rem(22px);
                }
                .text_con{
                    max-height: 100%;
                    padding:rem(20px) rem(22px);
                    font-size:rem(26px);
                    line-height:rem(45px);
                    color:rgb(119,119,119);
                    letter-spacing:rem(1px);
                }
            }
            .integral-gz_items.style_two{
                .text_lust{
                    padding:rem(20px) rem(22px);
                    table{
                        border-collapse:collapse;
                        margin:rem(30px) auto;
                        td{
                            width:rem(193px);
                            height:rem(58px);
                            line-height:rem(58px);
                            text-align:center;
                            font-size:rem(24px);
                            color:rgb(62,62,62);
                        }
                    }
                    table, td, th{
                        border:rem(1px) solid black;
                    }
                    .text_con{
                        padding:0;
                        margin-bottom:rem(10px);
                        font{
                            margin:0 rem(10px) 0 rem(4px);
                        }
                    }
                }
            }
            .integral-gz_items.style_san{
                .text_lust{
                    padding:rem(20px) rem(22px);
                    .text_con{
                        padding:0;
                        margin-bottom:rem(5px);
                        font{
                            margin:0 rem(10px) 0 rem(4px);
                        }
                    }
                }
            }
        }
    }
}

</style>
