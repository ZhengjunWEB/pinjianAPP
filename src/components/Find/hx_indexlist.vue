<template>
    <div class="font_hxlist">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="back()"></div>
            <span>{{title}}</span> 
            <i class="to_b" style="visibility: hidden;"></i>
        </div>


         <div class="main">
            <div class="main_list">
                <h2>{{title}}</h2>
                <p>{{mesg}}</p>
                <div class="font_hxn_list clearfix">
                    <div class="font_hxn_list-item" v-for="(a,b) in pot_Lits" :key="b" @click="rouidto(a)">
                        <img :src="a.thumb" alt="">
                        <span>{{a.name}}</span>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>

export default {
  name: 'font_hxlist',
  data () {
    return {
        pot_Lits:[],
        title:'',
        mesg:''
    }
  },

  mounted() {
   var $this = this;
   var r_id = $this.$route.params.id;
   $this.$post($this.$api.found_pot_list, {
     id:r_id,
     no:1
   }).then(data => {
      $this.pot_Lits = data.data.list;
      $this.title = data.data.desc[0].name;
      $this.mesg = data.data.desc[0].tags;
   });
   
  },
  methods: {
      back(){
        window.android.goback()
      },


      rouidto(val){
        var href  = window.location.href;
        var str = href.split("#");
        var rouit = str[0] + '#/find/hx_indexcon/' + val.id;
        window.android.meto_goback(rouit,'false','false');
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
.main{
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f8f8f8;
  padding-top: rem(88px);
  .main_list{
    width: rem(750px);
    margin: rem(20px) auto 0;
    padding:rem(30px) rem(32px);
    background: #ffffff;
    border-radius: rem(20px);
    h2{
      height: rem(45px);
      line-height: rem(45px);
      font-size: rem(32px);
      font-family: font_b;
      font-weight: bold;
      color: #333333;
    }
    p{
      font-size: rem(28px);
      font-family: font_pc;
      font-weight: 300;
      line-height: rem(40px);
      color: #666666;
      margin-top:rem(20px);
    }
    .font_hxn_list{
      padding:0 rem(15px) 0 rem(25px);
      .font_hxn_list-item{
        width: rem(150px);
        margin-right: rem(95px);
        float: left;
        margin-top:rem(20px);
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
          text-overflow :ellipsis; 
          white-space :nowrap; 
          overflow : hidden; 
        }
      }
      .font_hxn_list-item:nth-of-type(3n+3){
        margin-right: 0;
      }
    }
  }
}

</style>