<template>
  <div class="system">
        <div class="system_header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>系统通知</span> 
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="system_main">
            <div class='system_main-lists'>
                <div class='system_main-items'>尊敬的客户：你好，你已经成功购买产品，可以在我的订单查看，如果有疑问，请联系我们客服！</div>
            </div>
             <div class='system_main-lists'>
                <div class='system_main-items'>尊敬的客户：你好，你已经成功购买产品，可以在我的订单查看，如果有疑问，请联系我们客服！</div>
            </div>
        </div>

        
  </div>
</template>

<script>
export default {
  name: 'systemlist',
  data () {
    return {
        text_mesg:'',

    }
  },
    methods: {
        adviser(){
            this.$router.replace({
                path: `/sell/system`
            })
        },
    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
body{
    background:red;
}
.system{
    .system_header{
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
    .system_main{
        width: 100%;
        height: 100%;
        padding-top: 1.52rem;
        background: #e6e6e6;
        position: absolute;
        .system_main-lists{
            padding:rem(20px) rem(20px) rem(10px);
            .system_main-items{
                width:100%;
                background:#fff;
                padding:rem(30px) rem(40px);
                font-size:rem(26px);
                line-height:rem(40px);
                letter-spacing:rem(2px);
                border-radius:rem(15px);
            }
        }
    }
}

.advier{
    position: fixed;
    background: #e6e6e6;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
</style>
