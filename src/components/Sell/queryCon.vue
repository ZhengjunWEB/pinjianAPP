<template>
  <div class="queryCon">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>查询 {{params.name}}</span> 
            <div class="to_b"></div>
        </div>
        <div class="queryCon_main commons_mainsContoApp">
            <div class="queryCon_main_userinfo">
                <img :src="params.thumb" alt="" class="class_img">
                <div class="con_lits">
                    <div class="use_shouc" v-if="params.is_status == 0" @click="guanzu(1)"><img src="../../assets/images/Index_Img/shouchang.png" alt=""> 收藏</div> 
                    <div class="use_shouc hei" v-else-if="params.is_status == 1"  @click="guanzu(2)">已收藏</div>
                    <h2>{{params.name}}</h2>
                    <span>{{params.label}}</span>
                </div>
            </div>

            <div class="queryCon_main_userinfo_list">
                <div class="userinfo_list-item">
                    <dd>性别</dd>
                    <dt v-if="params.sex == 0">男</dt>
                    <dt v-else-if="params.sex == 1">女</dt>
                </div>
                <div class="userinfo_list-item">
                    <dd>身份证号</dd>
                    <dt>{{params.info}}</dt>
                </div>
                <div class="userinfo_list-item">
                    <dd>工作单位</dd>
                    <dt>{{params.units}}</dt>
                </div>
                <div class="userinfo_list-item">
                    <dd>专业</dd>
                    <dt>{{params.professional}}</dt>
                </div>
                <div class="userinfo_list-item">
                    <dd>荣誉</dd>
                    <dt>
                        <font v-for="(a,b) in rongyu" :key="b">{{a}}</font>
                    </dt>
                </div>
                <div class="userinfo_list-item">
                    <dd>资格名称</dd>
                    <dt>{{params.label}}</dt>
                </div>
                <div class="userinfo_list-item">
                    <dd>审核通过日期</dd>
                    <dt>{{params.approval}}</dt>
                </div>
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
       
        </div>
        
  </div>
</template>

<script>
export default {
  name: 'queryCon',
  data () {
    return {
        AuthorList:[],
        params:[],

        rongyu:[],
        Rid:'',
    }
  },
   mounted() {
    // 详情信息
    var $this = this;
    $this.Rid = $this.$route.params.id;
    $this.$post($this.$api.HeaderCon_goods_Yinfo, {
        id:$this.Rid,
        token:localStorage.getItem('token')
    }).then(data => {
        $this.params = data.data.data[0];
        $this.AuthorList = data.data.data.goods
        $this.rongyu =data.data.data.honor.split(',');
    });
  },
    methods: {
        adviser(){
            // window.android.goback()
            this.$router.back()
        },
       
         // 收藏
        guanzu(val){
            var $this = this;
            console.log(val);
            if(val == 2){
                if(localStorage.getItem('token') == null){
                    var href  = window.location.href;
                    var str = href.split("#");
                    var rouit = str[0] + '#/login';
                    window.android.meto_goback(rouit,'false','false');
                    // this.$router.replace({
                    //     path: `/login`
                    // });
                }else{
                    $this.$post($this.$api.fav_istrue2,{
                        token:localStorage.getItem('token'),
                        mix_id:this.Rid,
                        is_type:4
                    }).then(data => {
                        $this.params.is_status = 0;
                    });
                }
            }else{
                if(localStorage.getItem('token') == null){
                    var href  = window.location.href;
                    var str = href.split("#");
                    var rouit = str[0] + '#/login';
                    window.android.meto_goback(rouit,'false','false');
                }else{
                    $this.$post($this.$api.fav_istrue2,{
                        token:localStorage.getItem('token'),
                        mix_id:this.Rid,
                        is_type:4
                    }).then(data => {
                        $this.params.is_status = 1;
                    });
                }
            }
           
        },
    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.queryCon{
    .queryCon_main{
        width: 100%;
        height: 100%;
        padding-top:rem(88px);
        background: #f8f8f8;
        position: absolute;
    }
    
    .queryCon_main_userinfo{
        width: rem(750px);
        height: rem(310px);
        margin:0 auto;
        margin-top:rem(20px);
        padding: rem(30px) rem(32px);
        background: #fff;
        border-radius: rem(20px);
        display: flex;
        .class_img{
            display: block;
            width: rem(250px);
            height: rem(250px);
            border-radius: rem(20px);
        }
        .con_lits{
            margin-left:rem(45px);
            flex: 1;
            .use_shouc{
                 width:rem(145px);
                  height: rem(50px);
                  line-height: rem(50px);
                  background:rgba(255,255,255,1);
                  border:1px solid rgba(78,104,164,1);
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
            .use_shouc.hei{
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

    .queryCon_main_userinfo_list{
        width: rem(750px);
        margin:0 auto;
        margin-top:rem(20px);
        padding: 0 rem(28px) 0 rem(32px);
        background: #fff;
        .userinfo_list-item{
            width: 100%;
            height: rem(100px);
            line-height: rem(100px);
            border-top:rem(1px) solid rgba(225,225,225,1);
            display: flex;
            dd{
                font-size:rem(28px);
                font-family:font_pc;
                font-weight:400;
                color:rgba(51,51,51,1);
            }
            dt{
                margin-left: auto;
                font-size:rem(28px);
                font-family:font_pc;
                font-weight:bold;
                color:rgba(0,0,0,1);
                overflow: hidden;
                width: rem(500px);
                text-align: right;
                text-overflow :ellipsis; 
                white-space :nowrap; 
                overflow : hidden; 
                font{
                    margin-left: rem(10px);
                }
            }
        }
        .userinfo_list-item:nth-of-type(1){
            border-top:0;
        }
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
}


</style>
