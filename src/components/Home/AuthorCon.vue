<template>
    <div class="Author clearfix">
        <div class="App-header">
          <div class="to_a iconfont iconzuo" @click="back()"></div>
          <span v-if="pidtype == 1">印章款式</span>
          <span v-else>工艺师风采</span>
          <div class="to_b" style="visibility: hidden;"></div>
        </div>
        <div class="Author-main">
            <!-- 印章款式 -->
            <div class="Adi_D_yz">
                <div class="Adi_D_yz_header">
                    <strong class="Adi_D_yz_title">印章款式</strong>
                    <div class="Adi_D_yz_con">
                        <span>更多</span>
                        <i class="iconfont iconzuo-copy"></i>
                    </div>
                </div>
                <div class="Adi_D_yz_list clearfix">
                    <div class="Adi_D_yz_item">
                    <!-- <img preview="0" preview-text="描述文字" :src="item.goods_master_image" v-for="(item,i) in items" :key="i" alt> -->
                        <img preview="0" preview-text="描述文字" src="http://a.appjsh.com/Uploads/goods_class/2020_05_09/15890166991702.jpg">
                    </div>
                    <div class="Adi_D_yz_item">
                        <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_09/15890166991702.jpg" alt="">
                    </div>
                    <div class="Adi_D_yz_item">
                        <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_09/15890166991702.jpg" alt="">
                    </div>
                    <div class="Adi_D_yz_item">
                        <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_09/15890166991702.jpg" alt="">
                    </div>
                    <div class="Adi_D_yz_item">
                        <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_09/15890166991702.jpg" alt="">
                    </div>
                    <div class="Adi_D_yz_item">
                        <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_09/15890166991702.jpg" alt="">
                    </div>
                    <div class="Adi_D_yz_item">
                        <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_09/15890166991702.jpg" alt="">
                    </div>
                    <div class="Adi_D_yz_item">
                        <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_09/15890166991702.jpg" alt="">
                    </div>
                    <div class="Adi_D_yz_item">
                        <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_09/15890166991702.jpg" alt="">
                    </div>
                </div>
            </div>

        </div> 
   
   
    </div>
</template>

<script>
export default {
  name: 'selection',
  data () {
    return {
       pidtype:'',
       params_id:'',
    }
  },
  created () {
    this.params_id = this.$route.params.id;
    this.pidtype = this.$route.params.pid;
  },
  mounted() {
    // 详情信息
    var $this = this;

  
  },
    methods: {
        back(){
            window.android.goback()
        },

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';

.Author{
  width: 100%;
  margin-bottom:rem(30px);
  .Author-main{
      padding-top:rem(88px);
      background: #f8f8f8;
      .Adi_D_yz{
        background: #ffffff;
        margin-top:rem(20px);
        padding: rem(30px);
        border-radius: rem(20px);
        .Adi_D_yz_header{
            width: 100%;
            height: rem(45px);
            line-height: rem(45px);
            display: flex;
            .Adi_D_yz_title{
                font-size:rem(32px);
                font-family:font_b;
                font-weight:bold;
                color:#333;
            }
            .Adi_D_yz_con{
                margin-left:auto;
                display: flex;
                span{
                    font-size:rem(28px);
                    font-family:font_pc;
                    font-weight:400;
                    color:rgba(203,72,72,1);
                }
                i{
                    font-size: rem(24px);
                    color:rgba(203,72,72,1);
                }
            }
        }
        .Adi_D_yz_list{
            width: 100%;
            .Adi_D_yz_item{
                width: rem(207px);
                height: rem(207px);
                margin-top:rem(20px);
                margin-right:rem(34px);
                float: left;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: rem(20px);
                }
            }
            .Adi_D_yz_item:nth-of-type(3n+3){
                margin-right:0;
            }
        }
      }
  }
}

</style>