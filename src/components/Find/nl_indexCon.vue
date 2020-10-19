<template>
    <div class="font_hxlist">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="back()"></div>
            <span>{{parse.name}}</span> 
            <i class="to_b" style="visibility: hidden;"></i>
        </div>
        <div class="main">
           <div class="main_List">
                <h2>{{parse.name}}</h2>
                <div class="nl_list">
                    <div class="item" v-for="item in goods_parse_imgs" :key="item"><img :src="item" alt=""></div>
                </div>

                <div class="main_comnl">
                    <h2>简介</h2>
                    <div class="con">{{parse.tags}}</div>
                    <h2>窑温</h2>
                    <div class="con">{{JsonParse.temperature}}</div>
                    <h2>收缩比</h2>
                    <div class="con">{{JsonParse.contraction}}</div>
                    <h2>矿产地</h2>
                    <div class="con">{{JsonParse.reel}}</div>
                    <h2>泥性</h2>
                    <div class="con">{{JsonParse.mud}}</div>
                    <h2>难度</h2>
                    <div class="con">{{JsonParse.difficulty}}</div>
                    <h2>特点</h2>
                    <div class="con">{{JsonParse.characteristics}}</div>
                    <h2>冲茗特性</h2>
                    <div class="con">{{JsonParse.features}}</div>
                    <h2>冲泡建议</h2>
                    <div class="con">{{JsonParse.advice}}</div>
                </div>

                <div class="nl_fnlei">
                    <h3 id="scroll">{{parse.name}}分类</h3>

                    <div class="lisy_t clearfix">
                        <span v-for="(a,b) in parse_List" :key="b">{{a.name}}</span>
                    </div>
                </div>
           </div>

            <div class="main_listocns" v-if="goods_parse.length != 0">
                <h2>在售商品</h2>
                <div class="App_mainConList">
                  <div class="mi-mi-mainItem clearfix">
                      <div class="item" v-for="(a,b) in goods_parse" :key="b">
                          <img :src="a.goods_master_image" alt=""  @click="selectItem(a)">
                          <div class="item_comn">
                              <strong>{{a.goods_name}}</strong>
                              <span>{{a.author}}</span>
                              
                              <div class="pp_con" v-if="a.goods_type == 0">
                                  <dd> ￥????</dd>
                                  <dt @click="commits(a)">
                                      <img src="../../assets/images/Index_Img/gouwupirce.png" alt="">
                                  </dt>
                              </div>
                              <div class="pp_con" v-else>
                                  <dd> ￥{{Math.round(a.goods_price)}}</dd>
                                  <dt @click="addCart(a)">
                                      <img src="../../assets/images/Index_Img/gouwuchewx.png" alt="">
                                  </dt>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="shipeshop">更多商品</div>
            </div>

            <div class="main_listocns hide" v-else></div>
        </div>

        
    </div>
</template>

<script>

export default {
  name: 'font_hxcon',
  data () {
    return {
        parse:[],                    // 返回的全部数据
        parse_List:[],               // 返回的类型子分类
        goods_parse:[],              // 推荐商品的数据
        goods_parse_imgs:[],         // 图片轮播数据
        JsonParse:[],                // 转义数据
    }
  },

  mounted() {
     var hash = window.location.hash;
     var index = hash.lastIndexOf("#");
     if (index != -1) {
       var id = hash.substring(index + 1, hash.length + 1);
       var div = document.getElementById('scroll');
       if (div) {
         setTimeout(function () {
           console.log($(div).offset().top);
           //$('html,body').scrollTop($(div).offset().top - 43);
           $('html, body').animate({scrollTop: $(div).offset().top}, 500)
         }, 500);
       }
     }


    
   var $this = this;
   var r_id = $this.$route.params.id;
   $this.$post($this.$api.get_api_plaster_detail, {
     id:r_id,
     no:4
   }).then(data => {
    $this.parse = data.data[0];
    $this.parse_List = data.data.goods_class;
    $this.goods_parse_imgs = data.data[0].thumb.split(',');
    $this.JsonParse = JSON.parse(data.data[0].text);
    $this.goods_parse = data.data[0].goods.data;
   });

   window.android.getback(localStorage.getItem('get_Android_rouit'));
   
  },
  methods: {
      back(){
        localStorage.removeItem('get_Android_rouit');
        this.$router.go(-1);
      },

      // 安卓用
      back_go(val){
        if(val == 'nl_indexcon'){
          localStorage.removeItem('get_Android_rouit');
          this.$router.go(-1);
        }
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';
.main{
  position: absolute;
  width: 100%;
  background: #f8f8f8;
  padding-top: rem(88px);
  .main_List{
    padding:rem(30px) rem(32px);
    margin-top:rem(20px);
    background: #fff;
    border-radius: rem(20px);
    h2{
      height: rem(45px);
      font-size: rem(32px);
      font-family: font_b;
      font-weight: bold;
      line-height: rem(45px);
      color: #333333;
    }
    .nl_list{
      margin-top:rem(20px);
      height: rem(207px);
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      .item{
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
      .item:nth-of-type(1){
        margin-left:0;
      }
    }
  }
  .main_comnl{
      h2{
          height: rem(40px);
          line-height: rem(40px);
          font-size: rem(28px);
          font-family: font_b;
          font-weight: bold;
          color: #CB4848;
          margin-top:rem(15px)
      }
      h2:nth-of-type(1){
        margin-top:rem(24px);
      }
      .con{
        font-size: rem(28px);
        font-family: font_pc;
        font-weight: 300;
        line-height: rem(40px);
        color: #666666;
        margin-top:rem(10px);
      }
  }
  .nl_fnlei{
    margin-top:rem(40px);
    h3{
      height: rem(45px);
      line-height: rem(45px);
      font-size: rem(32px);
      font-family: font_b;
      font-weight: bold;
      color: #333333;
    }
    .lisy_t{
      margin-top:rem(40px);
      overflow: hidden;
      span{
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
  .main_listocns{
    width: rem(750px);
    margin: rem(20px) auto 0;
    padding:rem(30px) rem(32px);
    background: #fff;
    h2{
      font-size: rem(32px);
      font-family: font_b;
      font-weight: bold;
      height: rem(45px);
      line-height: rem(45px);
      color: #333333;
    }
  }
  .shipeshop{
    width: rem(248px);
    height: rem(60px);
    line-height: rem(60px);
    border: rem(1px) solid #707070;
    border-radius: rem(54px);
    font-size:rem(28px);
    font-family: font_pc;
    font-weight: 400;
    color: #666666;
    text-align: center;
    margin:rem(40px) auto 0;
  }
}

</style>