<template>
    <div class="font_hxlist">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="back()"></div>
            <span>{{parse.name}}</span> 
            <i class="to_b" style="visibility: hidden;"></i>
        </div>
        <div class="main">
            <div class="main_List">
                <div class="main_listcON">
                    <img :src="parse.thumb" alt="">
                    <div class="maindasd">
                      <h2>圆器·<font>{{parse.name}}</font></h2>
                      <span>125款在售</span>
                    </div>
                </div>

                <div class="con_title">{{parse.tags}}</div>
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
        parse:[],
        goods_parse:[],
    }
  },

  mounted() {
   var $this = this;
   var r_id = $this.$route.params.id;
   $this.$post($this.$api.found_pot_detail, {
     id:r_id,
     no:4
   }).then(data => {
     $this.parse = data.data[0];
     $this.goods_parse = data.data[0].goods.data;
   });
   

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
.main{
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f8f8f8;
  padding-top: rem(88px);
  .main_List{
      width: rem(750px);
      margin: 0 auto;
      background: #fff;
      padding:rem(30px) rem(32px);
      margin-top:rem(20px);
      border-radius: rem(20px);
      .main_listcON{
        background: #F6F6F6;
        border-radius: rem(20px);
        width: 100%;
        height: rem(200px);
        overflow: hidden;
        display: flex;
        img{
          display: block;
          width: rem(200px);
          height:100%;
        }
        .maindasd{
          padding-left:rem(39px);
          h2{
            height: rem(45px);
            line-height: rem(45px);
            margin-top:rem(60px);
            font-size: rem(32px);
            font-family: font_b;
            font-weight: bold;
            color: #333333;
            font{
              color: #CB4848;
            }
          }
          span{
            height: rem(33px);
            line-height: rem(33px);
            margin-top:rem(5px);
            font-size: rem(24px);
            font-family:font_pc;
            font-weight: 300;
            color: #333333;
          }
        }
      }
      .con_title{
        margin-top:rem(25px);
        font-size: rem(28px);
        font-family: font_pc;
        font-weight: 300;
        line-height: rem(40px);
        color: #666666;
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