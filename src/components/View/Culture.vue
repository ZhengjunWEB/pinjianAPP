<template>
  <div class="coll-Pinp">
        <div class="coll-Pinp_header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>品牌文化</span> 
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="coll-Pinp_main">
            <div class="coll-Pinp_main-imgs">
                <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_11/15891769502580.jpg" alt="">
            </div>
            <div class="coll-Pinp_main-lists">
                
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'coll-sc',
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
.coll-Pinp{
    .coll-Pinp_header{
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
    .coll-Pinp_main{
        width:100%;
        padding-top:rem(114px);
        .coll-Pinp_main-imgs{
            width: 100%;
            height: rem(390px);
            img{
                display: block;
                width:100%;
                height: 100%;
            }
        }
       
    }
}

</style>
