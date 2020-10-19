<template>
  <div class="system">
        <div class="system_header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>消息中心</span> 
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="system_main">
             <div class="system_main-listcon" @click="next()">
                <i class="i1 iconfont iconshezhi"></i>
                <span>系统通知</span>
                <i class="i2 iconfont iconzuo-copy"></i>
             </div>
        </div>

        
  </div>
</template>

<script>
export default {
  name: 'system',
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
        next(){
            this.$router.replace({
                path: `/sell/systemlist`
            })
        },
    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
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
        width:100%;
        padding-top:rem(114px);
        .system_main-listcon{
            width:100%;
            height:rem(102px);
            line-height:rem(102px);
            padding:0 rem(30px);
            display:flex;
            border-bottom:1px solid #666;
            .i1{
                display:block;
                font-size:rem(45px);
                color:#666;
            }
            span{
                display:block;
                font-size:rem(26px);
                color:rgb(7,7,5);
                margin-left:20px;
            }
            .i2{
                display:block;
                flex:1;
                font-size:rem(30px);
                text-align:right;
                color:#666;
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
