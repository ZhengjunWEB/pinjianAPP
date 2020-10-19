<template>
    <div class="font_ft">
        <div class="font_ftn">
          <div class="font_ftn_clear clearfix">
              <div class="font_ftn_item">
                  <img src="../../assets/images/c4.png" alt="">
                   <div class="font_ftn_con">
                      <h2>名字</h2>
                      <div class="con">这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</div>
                  </div>
              </div>
               <div class="font_ftn_item">
                  <img src="../../assets/images/c5.png" alt="">
                  <div class="font_ftn_con">
                      <h2>名字</h2>
                      <div class="con">这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</div>
                  </div>
              </div>
              <div class="font_ftn_item">
                  <img src="../../assets/images/c5.png" alt="">
                  <div class="font_ftn_con">
                      <h2>名字</h2>
                      <div class="con">这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</div>
                  </div>
              </div>
              <div class="font_ftn_item">
                  <img src="../../assets/images/c4.png" alt="">
                   <div class="font_ftn_con">
                      <h2>名字</h2>
                      <div class="con">这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容</div>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'font_ft',
  data () {
    return {
       
    }
  },

  mounted() {
    var $this = this;
   
  },
  methods: {
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';
.font_ft{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top:rem(168px);
    background: #f8f8f8;
    .font_ftn{
      width: 100%;
      background: #f8f8f8;
      padding:0 rem(32px);
      padding-bottom: 1.6rem;
      .font_ftn_item{
        width: rem(333px);
        background:rgba(255,255,255,1);
        box-shadow:0px rem(6px) rem(60px) rgba(0,0,0,0.1);
        border-radius:rem(20px);
        margin-top:rem(20px);
        margin-right: rem(20px);
        float: left;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
        .font_ftn_con{
          width: 100%;
          height: rem(140px);
          background: #fff;
          padding:0 rem(20px);
          padding-top: rem(15px);
          h2{
            height: rem(37px);
            line-height: rem(37px);
            font-size:rem(26px);
            font-family:font_pc;
            font-weight:400;
            color:rgba(51,51,51,1);
          }
          .con{
            height:rem(66px);
            font-size:rem(24px);
            font-family:font_pc;
            font-weight:300;
            line-height:rem(33px);
            color:rgba(51,51,51,1);
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
      .font_ftn_item:nth-of-type(2n+2){
        margin-right: 0;
      }
    }
}

</style>