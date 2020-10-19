<template>
  <div class="integral-gz">
        <div class="integral-gz_header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>客服</span> 
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="integral-gz_mains">
            <div class="kf_zis">
                你已经进入客服聊天页面，和TA聊聊你的需求吧！
            </div>

            <div class="kf_zis-ul-list">
                <div class="kf_zis-ul-item">
                    <div class="title-time">7月2日 19:33</div>
                    <div class="clear clearfix">
                        <img src="static/images/20200411/fo2.png" class="img">
                        <div class="con">你还，我是客服小叶，请问有什么能帮助到你吗！</div>
                    </div>
                </div>
                <div class="kf_zis-ul-item yh">
                    <div class="title-time">7月2日 19:33</div>
                    <div class="clear clearfix">
                        <img src="static/images/20200411/fo2.png" class="img">
                        <div class="con">你还，我是客服小叶，请问有什么能帮助到你吗！</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="kf_db_soft"></div>
        
  </div>
</template>

<script>
export default {
  name: 'integral-wx',
  data () {
    return {
        text_mesg:'',
        params_id:'',

    }
  },
  filters: {
      // 将日期过滤为 hour:minutes
      time (date) {
          if (typeof date === 'string') {
              date = new Date(date);
          }
          return date.getHours() + ':' + date.getMinutes();
      }
  },
    mounted () {
        var $this = this;
        $this.params_id = $this.$route.params.id;
    },
    methods: {
        adviser(){
            this.$router.replace({
                path: `/home/indexdetails/${this.params_id}`
            });
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
    .integral-gz_mains{
       position:absolute;
       top:rem(114px);
       bottom:rem(90px);
       background:#e5e5e5;
       width:100%;
       .kf_zis{
           width:rem(495px);
           height:rem(71px);
           background:rgb(199,199,199);
           color:#fff;
           margin:rem(30px) auto rem(36px);
           border-radius:rem(15px);
           font-size:rem(24px);
           padding:rem(5px) rem(15px);
           line-height:rem(30px);
       }
       .kf_zis-ul-list{
           width:100%;
           padding:0 rem(20px);
           .title-time{
               margin:rem(30px) 0;
               font-size:rem(24px);
               color:#666;
               font-family: 黑体;
               text-align:center;
           }
           .img{
               width:rem(70px);
               height:rem(70px);
               border-radius:50%;
               float:left;
           }
           .con{
               width:rem(490px);
               background:#fff;
               font-family: 黑体;
               float:left;
               margin-left:rem(20px);
               padding:rem(15px) rem(30px);
               color:rgb(0,0,0);
               font-size:rem(28px);
               line-height:rem(36px);
               max-height:100%;
               border-radius:rem(15px);
           }
       }
       .kf_zis-ul-list{
           .kf_zis-ul-item.yh{
               .img{
                    float:right;
                }
                .con{
                    float:right;
                     margin-right:rem(20px);
                     background:#ffc057;
                }
           }
       }
    }
    .kf_db_soft{
        width:100%;
        height:rem(90px);
        background:#fff;
        position:fixed;
        bottom:0;
        left:0;
        overflow-y:scroll;
    }
}

</style>
