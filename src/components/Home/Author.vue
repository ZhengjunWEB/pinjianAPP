<template>
    <div class="Author clearfix">
        <div class="App-header">
          <div class="to_a iconfont iconzuo" @click="back()"></div>
          <span>{{params.name}}</span>
          <div class="to_b" style="visibility: hidden;"></div>
        </div>
        <div class="Author-main">
            <div class="Adi_D">
                <div class="Author_main_top">
                    <div class="Author_main_topL">
                        <!-- // <img v-lazy="params.thumb"> -->
                        <img :src="params.thumb" alt="">
                    </div>
                    <div class="Author_main_topR">
                        <div class="ben" @click="guanzu(1)" v-if="params.is_status == 0" >
                        <img src="../../assets/images/Index_Img/shouchang.png" alt=""> 收藏</div>
                        <div class="ben hei" v-else-if="params.is_status == 1" @click="guanzu(2)">已收藏</div>
                        <h2>{{params.name}}</h2>
                        <span>{{params.label}}</span>
                    </div>
                </div>
                <p class="icon_size">人物介绍</p>
                <p class="icon_con" v-html="params.introduce"></p>
            </div>

            <div class="Adi_Ds_list" v-if="AuthorList.length != ''">
                <h2>在售作品</h2>
                <div class="App_mainConList">
                    <div class="mi-mi-mainItem clearfix">
                        <div class="item" v-for="(a,b) in AuthorList" :key="b">
                            <img :src="a.goods_master_image" alt="">
                            <div class="item_comn">
                                <strong>{{a.goods_name}}</strong>
                                <span>{{a.author}}</span>
                                <div class="pp_con" v-if="a.goods_type == 0">
                                  <dd> ￥????</dd>
                                  <dt @click="commits(a)">
                                      <img src="../../assets/images/Index_Img/gouwupirce.png" alt="">
                                  </dt>
                              </div>
                              <div class="pp_con" v-else-if="a.goods_type == 1">
                                  <dd> ￥{{a.goods_price}}</dd>
                                  <dt @click="addCart(a)">
                                      <img src="../../assets/images/Index_Img/gouwuchewx.png" alt="">
                                  </dt>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ADid_btn">查看更多</div>
            </div>
            <div class="Adi_Ds_list hide" v-else></div>

             <!-- 印章款式 -->
            <div class="Adi_D_yz" v-if="seal_thumb != ''">
                <div class="Adi_D_yz_header">
                    <strong class="Adi_D_yz_title">印章款式</strong>
                    <div class="Adi_D_yz_con">
                        <span @click="sddd(2)">更多</span>
                        <i class="iconfont iconzuo-copy"></i>
                    </div>
                </div>
                <div class="Adi_D_yz_list clearfix">
                    <div class="Adi_D_yz_item" v-for="(a,b) in seal_thumb" :key="b">
                        <img :src="a" alt="">
                    </div>
                </div>
            </div>


            <!-- 大师风采 -->
            <div class="Adi_D_yz" v-if="master_thumb != ''">
                <div class="Adi_D_yz_header">
                    <strong class="Adi_D_yz_title">大师风采</strong>
                    <div class="Adi_D_yz_con">
                        <span @click="sddd(2)">更多</span>
                        <i class="iconfont iconzuo-copy"></i>
                    </div>
                </div>
                <div class="Adi_D_yz_list clearfix">
                    <div class="Adi_D_yz_item" v-for="(a,b) in master_thumb" :key="b">
                        <img :src="a" alt="">
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
        params_id:'',
        num_cc:"28",
        params:[],

        AuthorList:[],

        seal_thumb:[],   // 印章款式
        master_thumb:[], // 大师风采
    }
  },
    updated() {
        $('.icon_con').css('font-size', '');
    },
  created () {
    this.params_id = this.$route.params.id;
  },
  mounted() {
    // 详情信息
    var $this = this;
    $this.$post($this.$api.HeaderCon_goods_Yinfo, {token:localStorage.getItem('token'),id:$this.params_id}).then(data => {
        $this.params = data.data.data[0];
        $this.AuthorList = data.data.data.goods

       $this.seal_thumb = data.data.data[0].seal_thumb.split(',');
       $this.master_thumb = data.data.data[0].master_thumb.split(',');




    });
  },
    methods: {
        back(){
            this.$router.back();
        },
         // 收藏
        guanzu(val){
            var $this = this;
            console.log(val);
            if(val == 2){
                if(localStorage.getItem('token') == null){
                    // this.$router.replace({
                    //     path: `/login`
                    // });
                    var href  = window.location.href;
                    var str = href.split("#");
                    var rouit = str[0] + '#/login';
                    window.android.meto_goback(rouit,'false','false');
                }else{
                    $this.$post($this.$api.fav_istrue2,{
                        token:localStorage.getItem('token'),
                        mix_id:this.params_id,
                        is_type:4
                    }).then(data => {
                        $this.params.is_status = 0;
                    });
                }
            }else{
                if(localStorage.getItem('token') == null){
                    // this.$router.replace({
                    //     path: `/login`
                    // });
                    var href  = window.location.href;
                    var str = href.split("#");
                    var rouit = str[0] + '#/login';
                    window.android.meto_goback(rouit,'false','false');

                }else{
                    $this.$post($this.$api.fav_istrue2,{
                        token:localStorage.getItem('token'),
                        mix_id:this.params_id,
                        is_type:4
                    }).then(data => {
                        $this.params.is_status = 1;
                    });
                }
            }
           
        },
        selectItem(item){
            this.$router.push({
                path: `/indexdetails/${item.id}`
            })
        },
        sddd(val){
            var href  = window.location.href;
            var str = href.split("#");
            var rouit = str[0] + '#/home/authorcon/' + this.params_id +'/' + val;
            window.android.meto_goback(rouit,'false','false');
            // this.$router.replace({
            //     path: `/home/authorcon/${this.params_id}/${val}`
            // });
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
      .Adi_D{
        background: #ffffff;
        margin-top:rem(20px);
        padding: rem(30px) rem(28px) rem(30px) rem(32px);
        border-radius: rem(20px);
      }
      .Author_main_top {
          width: 100%;
          height:rem(250px);
          display: flex;
          .Author_main_topL{
            width: rem(250px);
            height: rem(250px);
            img{
               display: block;
               width: 100%;
               height: 100%; 
               border-radius: rem(20px);
            }
            h2 {
                font-weight: bold;
                font-size:rem(32px);
                margin-top:rem(30px);
               
            }
            span {
                display: block;
                font-size:rem(28px);
                margin-top:rem(20px);
                font-weight: bold;
                line-height: rem(40px);
                text-overflow :ellipsis; 
                white-space :nowrap;
                overflow : hidden; 
            }
          }
          .Author_main_topR {
              height: 100%;
              flex:1;
              padding-left:rem(45px);
              .ben{
                  width:rem(145px);
                  height: rem(50px);
                  line-height: rem(50px);
                  background:rgba(255,255,255,1);
                  border:rem(2px) solid rgba(78,104,164,1);
                  opacity:1;
                  border-radius:rem(25px);
                  margin-left:auto;
                  display: flex;
                  justify-content: center;
                  font-size: rem(28px);
                  font-family: font_pc;
                  font-weight:400;
                  color:rgba(78,104,164,1);
                  img{
                      display: block;
                      width: rem(34px);
                      height: rem(33px);
                      margin-top:rem(6px);
                      margin-right: rem(10px);
                  }
              }
              .ben.hei{
                color: #999999;
                border:1px solid #999999;
            }
              h2{
                  font-size: rem(36px);
                  font-family: font_b;
                  font-weight: bold;
                  height: rem(50px);
                  line-height: rem(50px);
                  color:rgba(51,51,51,1);
                  opacity: 1;
                  margin-top:rem(19px);
              }
              span{
                  display: block;
                  margin-top:rem(42px);
                  font-size: rem(32px);
                  height: rem(45px);
                  line-height: rem(45px);
                  color:rgba(102,102,102,1);
                  font-family: font_pc;
              }
          }
      }
      .icon_size{
          font-family: font_b;
          font-size: rem(32px);
          font-weight: bold;
          margin-top:rem(44px);
          color: #333333;
      }
      .icon_con{
          white-space: pre-wrap; //解决的关键就是这一句,
          color: #666;
          font-family: font_pc;
          font-weight:300;
          color:rgba(102,102,102,1);
          font-size:rem(28px);
          margin-top:rem(20px);
          line-height: rem(44px);
      }
      .Adi_Ds_list{
        background: #ffffff;
        margin-top:rem(20px);
        padding: rem(30px) rem(32px);
        border-radius: rem(20px);
        h2{
            color:rgba(51,51,51,1);
            font-size:rem(32px);
            font-family:font_b;
            font-weight:bold;
             height: rem(45px);
            line-height: rem(45px);
        }
        .ADid_btn{
            width: rem(248px);
            height: rem(60px);
            line-height: rem(60px);
            text-align: center;
            border:1px solid rgba(112,112,112,1);
            border-radius:rem(54px);
            margin:rem(50px) auto 0;
            font-size:rem(28px);
            font-weight:400;
            font-family: font_pc;
        }
      }
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
  .Author-con{
    padding:rem(30px) rem(20px);
    .AuthorCon_list{
        margin-top:rem(20px);
    }
    .main_tj{
        padding:rem(40px) rem(20px);
        margin-top: rem(50px);
        border-top:rem(1px) solid #333;
        .titie{
            text-align: center;
            span{
                font-size: rem(30px);
                color: #333;
            }
            span::after{   
                content: '';
                position: absolute;
                width: rem(20px);;
                height: rem(3px);
                background: #333;
                left:rem(-25px);
                top: rem(20px);
            }
            span::before{   
                content: '';
                position: absolute;
                width: rem(20px);;
                height: rem(3px);
                background: #333;
                right:rem(-25px);
                top: rem(20px);
            }
        }
        .tj_list{
            margin-top:rem(30px);
            .item{
                width: 48%;
                padding-bottom: rem(30px);
                .img{
                    display: block;
                    width: 100%;
                    height: rem(240px);
                    border:1px solid #333;
                }
                .item_com{
                    padding:0 rem(15px);
                    .itme_xw{
                        margin-top:rem(20px);
                        display: flex;
                        .p1{
                            font-size: rem(30px);
                            font-weight: bold;
                        }
                        .p2{
                            width:rem(120px);
                            height: rem(35px);
                            line-height: rem(35px);;
                            background: #724a00;
                            color: #fff;
                            text-align: center;
                            font-size: rem(22px);
                            border-radius: rem(30px);
                            margin-left: auto;
                        }
                    }
                    .item_xs{
                        display: flex;
                        margin-top: rem(10px);
                        p{
                            color:#666;
                            font-size: rem(20px);
                        }
                        p.p2{
                            margin-left:auto;
                        }
                    }
                }
            }
            .item:nth-of-type(even){
                float: right;
            }
            .item:nth-of-type(odd){
                float: left;
            }
        }
        .tj_gd{
            width: rem(200px);
            padding:rem(10px) rem(20px);
            border:1px solid #ccc;
            border-radius: rem(30px);
            text-align: center;
            margin:rem(10px) auto;
            background: #dadada;
            color: #666;
            font-size: rem(24px);
            display: flex;
            justify-content: center;
            i{
                color: #666;
                display: block;
                line-height: rem(25px);
                font-size: rem(20px);
            }
            i:nth-of-type(2){
                margin-left: rem(-7px);
            }
        }
    }
    .main_ks{
        border:1px solid #333;
        padding:rem(40px) rem(20px);
        .titie{
            text-align: center;
            span{
                font-size: rem(30px);
                color: #333;
            }
            span::after{   
                content: '';
                position: absolute;
                width: rem(20px);;
                height: rem(3px);
                background: #333;
                left:rem(-25px);
                top: rem(20px);
            }
            span::before{   
                content: '';
                position: absolute;
                width: rem(20px);;
                height: rem(3px);
                background: #333;
                right:rem(-25px);
                top: rem(20px);
            }
        }
        .ks_list{
            margin-top:rem(20px);
            .item{
                width: 30%;
                margin:rem(30px) 3% 0 0;
                float:left;
                .img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .item:nth-of-type(3n+3){
                margin-right: 0;
            }
        }
    }
    .main_ds{
        margin-top:rem(50px);
    }
  }
}
.mainCon-p{
    margin-top:rem(20px);
    line-height: rem(40px);
    font-size: rem(30px);
    color: #666;
    text-indent: rem(61px);
    max-height:100%;
}
</style>