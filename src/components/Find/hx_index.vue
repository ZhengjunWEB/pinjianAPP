<template>
    <div class="font_hx">
        <div class="font_hxn">
            <div class="font_hxn-item" v-for="(v,k) in pot_home" :key="k">
                <h2>{{v.name}}</h2>
                 <p class="font_hxn-con">{{v.tags}}</p>
                 <strong class="btn_or" @click="rouid(v)">点击查看更多</strong>
                 <div class="font_hxn_list clearfix">
                      <div class="font_hxn_list-item" v-for="(a,b) in v.goods" :key="b" @click="rouidto(a)">
                          <img :src="a.thumb" alt="">
                          <span>{{a.name}}</span>
                      </div>
                 </div>
                 <div class="btn_o" @click="rouid(v)">更多{{v.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'font_hx',
  data () {
    return {
       pot_home:[],
    }
  },

  mounted() {
    var $this = this;
    $this.$post($this.$api.get_api_pot_home, {}).then(data => {
        $this.pot_home = data.data;
    });

   
  },
  methods: {
     rouid(v){
        // localStorage.setItem('get_Android_rouit','hx_indexcon');
        // this.$router.push({
        //     path: `/find/hx_indexlist/${v.id}`
        // })
          var href  = window.location.href;
          var str = href.split("#");
          var rouit = str[0] + '#/find/hx_indexlist/' + v.id;
          window.android.meto_goback(rouit,'false','false');
     },
     rouidto(val){
          var href  = window.location.href;
          var str = href.split("#");
          var rouit = str[0] + '#/find/hx_indexcon/' + val.id;
          window.android.meto_goback(rouit,'false','false');
        // localStorage.setItem('get_Android_rouit','hx_indexcon');
        // this.$router.push({
        //     path: `/find/hx_indexcon/${val.id}`
        // })
     },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';
.font_hx{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top:rem(168px);
    background: #f8f8f8;
    .font_hxn{
       width: 100%;
       padding-bottom: rem(30px);
       background: #f8f8f8;
       .font_hxn-item{
         margin-top:rem(20px);
         padding:rem(30px) rem(32px);
         background: #ffffff;
         border-radius: rem(20px);
          h2{
             height: rem(45px);
             line-height: rem(45px);
             font-family:font_b;
             font-weight:bold;
             color:rgba(51,51,51,1);
             font-size: rem(32px);
          }
          .font_hxn-con{
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
                margin-top:rem(20px)
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
          .font_hxn_list{
            margin-top:rem(40px);
            padding:0 rem(15px) 0 rem(25px);
            .font_hxn_list-item{
              width: rem(150px);
              margin-right: rem(95px);
              float: left;
              margin-top:rem(12px);
              img{
                display: block;
                width: 100%;
                height: rem(200px);
              }
              span{
                display: block;
                height: rem(40px);
                line-height: rem(40px);
                margin-top:rem(5px);
                text-align: center;
                font-size:rem(28px);
                font-family:font_pc;
                font-weight:400;
                color:rgba(51,51,51,1);
              }
            }
            .font_hxn_list-item:nth-of-type(3n+3){
              margin-right: 0;
            }
          }
          .btn_o{
            width:rem(248px);
            height:rem(60px);
            line-height:rem(60px);
            border:rem(1px) solid rgba(112,112,112,1);
            border-radius:rem(54px);
            text-align: center;
            font-size:rem(28px);
            font-family:font_pc;
            font-weight:400;
            color:rgba(102,102,102,1);
            letter-spacing:rem(1px);
            margin:rem(35px) auto 0;
          }
       }
    }
}

</style>