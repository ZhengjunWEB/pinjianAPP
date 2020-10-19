<template>
    <div class="font_nl">
        <div class="font_nln">
            <div class="font_nln-item" v-for="(v,k) in pnl_home" :key="k">
                <h2>{{v.name}}</h2>
                <div class="font_nln-xscroll">
              <b></b><div class="font_nln-xscroll-item" v-for="(a,b) in v.thumb" :key="b">
                        <img :src="a" alt="">
                    </div>
                </div>
                <p class="font_nln-con">{{v.tags}}</p>
                <strong class="btn_or" @click="rou_news(v)">点击查看更多</strong>
                <div class="font_nln-list-con">
                      <strong class="font_nln-list_title">{{v.name}}明细</strong>
                      <div class="font_nln-list_con">
                          <span @click="rou_new(v)">更多</span>
                          <i class="iconfont iconzuo-copy"></i>
                      </div>
                </div>
                <div class="lisy_t clearfix">
                  <span class="lisy_t-iltem" v-for="(a,b) in v.goods" :key="b">{{a.name}}</span>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>

export default {
  name: 'font_nl',
  data () {
    return {
       pnl_home:[],
    }
  },

  mounted() {
    var $this = this;

    $this.$post($this.$api.get_api_plaster_home, {}).then(data => {
        $this.pnl_home = data.data;
    });
    
   
  },
  methods: {
      rou_news(val){
          var href  = window.location.href;
          var str = href.split("#");
          var rouit = str[0] + '#/find/nl_indexcon/' + val.id;
          window.android.meto_goback(rouit,'false','false');
          // localStorage.setItem('get_Android_rouit','nl_indexcon');
          // this.$router.push({
          //   path: `/find/nl_indexcon/${val.id}`
          // })
      },
      rou_new(val){
          var href  = window.location.href;
          var str = href.split("#");
          var rouit = str[0] + '#/find/nl_indexcon/' + val.id +'#scroll';
          window.android.meto_goback(rouit,'false','false');
        //   localStorage.setItem('get_Android_rouit','nl_indexcon');
        //   this.$router.push({
        //     path: `/find/nl_indexcon/${val.id}#scroll`
        // })
      },
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';
.font_nl{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top:rem(168px);
    background: #f8f8f8;
    .font_nln{
        width: 100%;
        padding-bottom: rem(30px);
        background: #f8f8f8;
        .font_nln-item{
           padding:rem(30px) 0;
           background: #fff;
           border-radius: rem(20px);
           margin-top:rem(20px);
           h2{
             height: rem(45px);
             padding: 0 rem(32px);
             line-height: rem(45px);
             font-family:font_b;
             font-weight:bold;
             color:rgba(51,51,51,1);
             font-size: rem(32px);
           }
           .font_nln-xscroll{
              margin-top:rem(20px);
              height: rem(207px);
              overflow-x: scroll;
              overflow-y: hidden;
              white-space: nowrap;
              b{
                width: rem(32px);
                display: inline-block;
                height: rem(207px);
              }
              .font_nln-xscroll-item{
                width: rem(207px);
                height: rem(207px);
                margin-left:rem(5px);
                display: inline-block;
                img{
                  display: block;
                  width: 100%;
                  height: 100%;
                  border-radius: rem(20px);
                }
              }
              .font_nln-xscroll-item:nth-of-type(1){
                margin-left:0;
              }
              .font_nln-xscroll-item:nth-last-of-type(1){
                margin-right:rem(10px);
              }
           }
           .font_nln-con{
                height:rem(80px);
                line-height:rem(40px);
                font-size:rem(28px);
                font-family:font_pc;
                font-weight:300;
                color:rgba(102,102,102,1);
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                margin-top:rem(20px);
                 padding: 0 rem(32px);
           }
           .btn_or{
             display: block;
             text-align: center;
             margin-top:rem(20px);
             height: rem(40px);
             line-height: rem(40px);
             font-size:rem(28px);
             font-family:font_pc;
             font-weight:400;
             color:rgba(51,51,51,1);
           }
           .font_nln-list-con{
              width: 100%;
              height: rem(45px);
              line-height: rem(45px);
              display: flex;
              margin-top:rem(50px);
               padding: 0 rem(32px);
              .font_nln-list_title{
                  font-size:rem(32px);
                  font-family:font_b;
                  font-weight:bold;
                  color:#333;
              }
              .font_nln-list_con{
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
           .lisy_t{
             margin-top:rem(15px);
             height: rem(152px);
             overflow: hidden;
            padding: 0 rem(32px);
             .lisy_t-iltem{
               display: block;
               height: rem(61px);
               line-height: rem(40px);
               font-size: rem(28px);
               font-family:font_pc;
               font-weight:400;
               color:rgba(51,51,51,1);
               background:rgba(246,246,246,1);
               border-radius:rem(20px);
               padding:rem(11px) rem(25px);
               float: left;
               margin-right: rem(10px);
               margin-top:rem(10px)
             }
           }
        }
    }
}

</style>