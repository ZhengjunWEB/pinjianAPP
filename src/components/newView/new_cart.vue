<template>
    <div class="wrpper-cart">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="goback"></div>
            <!-- <div class="to_a" @click="ind()"></div> -->
            <span>购物车</span>
            <div class="to_b" @click="qiehuan(1)" v-if="isHide">管理</div>
            <div class="to_b s" @click="qiehuan(2)" v-else>完成</div>
        </div>
       
        <!-- <div class="wrpper-cart-link">
           <div class="to_clear">
                 <div class="to-clear-l">共<span>{{getTotal.totalNum}}</span>件商品</div>
                 <div class="to-clear-r" @click="deleteProduct()" v-if="text">清空<i class="iconfont iconlajixiang1"></i></div>
                 <div class="to-clear-r" @click="deleteProduct()" v-else>删除<i class="iconfont iconlajixiang1"></i></div>
            </div>
        </div> -->
        <div class="wrpper-cart-mian commons_mainsContoApp">
          <div class="wrpper-cart-pd" v-if="cartList.length == ''">
              <div class="wrpper-cart-pd_error">
                  <dd><img :src="srcPath + 'empty_cart.png'" alt=""></dd>
                  <p class="cart-pd_error_p1">购物车是空的</p>
                  <p class="cart-pd_error_p2">快去逛逛吧</p>

                  <!-- <div class="ebn">去今日特卖</div> -->
              </div>
          </div>
          <div class="wrpper-cart-pd" v-else>
            <h4 class="title">共{{getTotal.totalNum}}件商品</h4>
            <div class="wrpper-cart-list">
                <!-- <div class="wrpper-cart-list-item clearfix" v-for="(v,k) in cartList" :key="k" ref="touchmove" v-leftMove="{container: '[data-touchmove-con]'}"> -->
                <div class="wrpper-cart-list-item clearfix" v-for="(v,k) in cartList" :key="k">
                    <dd @click="qufan(v)"><img :src="v.select?ifCarIMg_true:ifCarIMg_false" alt=""></dd>
                    <div class="wrpper-cart-list-item-l pull-left">
                        <img :src="v.image" alt="">
                    </div>
                    <div class="wrpper-cart-list-item-r pull-right p-relative">
                        <div class="titie"><strong>{{v.goods_name}}</strong></div>
                        <div class="name">{{v.author}}</div>
                        <div class="kuans">{{v.goods_no}}</div>
                        <div class="r-pirce p-absolute">
                            <div class="pirce"><img src="http://res.pinjianapp.com/vue_wap/images/c_money.png" alt=""> {{v.goods_price}}</div>
                            <div class="num_jisu">
                              <span @click="change_cart_jain(v)"><img src="~@/assets/images/cart/btn_jian.png" alt=""></span>
                              <span>{{v.goods_num}}</span>
                              <span  @click="change_cart_add(v)"><img src="~@/assets/images/cart/btn_jia.png" alt=""></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <!-- 猜你发现 -->
          <div class="wrpper-cart-faxn">
              <h4><span>猜你喜欢</span></h4>
              <div class="App_mainConList">
                  <div class="mi-mi-mainItem clearfix">
                      <div class="item" v-for="(a,b) in HeaderCon_goods_day" :key="b" @click="go_detail(a.id)">
                          <img :src="a.goods_master_image" alt=""  >
                          <div class="item_comn">
                              <strong>{{a.goods_name}}</strong>
                              <span>{{a.author}}</span>
                              
                              <div class="pp_con" v-if="a.goods_type == 0">
                                  <dd> <img src="http://res.pinjianapp.com/vue_wap/images/r_money.png" alt=""> ????</dd>
                                  <!-- <dt @click="commits(a)">
                                      <img src="~@/assets/images/Index_Img/gouwupirce.png" alt="">
                                  </dt> -->
                              </div>
                              <div class="pp_con" v-else>
                                  <dd> <img src="http://res.pinjianapp.com/vue_wap/images/r_money.png" alt=""> {{Math.round(a.goods_price)}}</dd>
                                  <!-- <dt @click="addCart(a)">
                                      <img src="~@/assets/images/Index_Img/gouwuchewx.png" alt="">
                                  </dt> -->
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>



        <div class="footer">
           <div class="ico clearfix"><img :src="isSelectAll?ifCarIMg_true:ifCarIMg_false" alt=""  @click="selectProduct(isSelectAll)"><span>全选</span></div>
           <div class="con" v-if="isHide">
              <div class="pircse">合计：<span>￥{{getTotal.totalPrice}}</span>({{getTotal.totalNum}}件)</div>
              <div class="pircses">不含运费</div>
           </div>
            <div class="btn" @click="jiesuan()" v-if="isHide">立即结算</div>
            <div class="btn_yr" @click="ScProduct" v-if="isHide_to">移入收藏夹</div>
            <div class="btn_sc" v-if="isHide_to" @click="deleteProduct()">删除</div>
        </div>


      <!-- <nav-bottom></nav-bottom>  -->

    </div>

    <!-- 底部组件 -->
</template>

<script>
import store from "@/store/store.js";
// 引入底部组件
// import NavBottom from "@/components/Common/new_bottom";

export default {
  inject:['reload'],

  // 引入主题列表组件
  name: 'loading',

  // 加载组件
  components: {
    // 底部组件
    // NavBottom,
  },
  data () {
    return {
      // Num_len:0,       // 总数
      // Num_pirce:0,    // 总价格
      iskong:'',
      cartList:[],
      HeaderCon_goods_day:[],
      text:true,
      ifCarIMg_true:"http://res.pinjianapp.com/vue_wap/images/cart/y.png",  
      ifCarIMg_false:"http://res.pinjianapp.com/vue_wap/images/cart/n.png",  
      srcPath: "http://res.pinjianapp.com/vue_wap/images/cart/",
      totalPrice:0,        // 总价格
      totalNum:0,           // 总个数
      is_rouid:"",
      IdArrayTrue:[],         // 选中个数    
      
      isHide:true,           // 切换状态
      isHide_to:false,        // 切换状态 双架构

    }
  },
  store,
  // 计算属性
  computed: {
      //检测是否全选
      isSelectAll:function(){
          //如果cartList长度为0
          if(this.cartList.length===0){return false;}
          //如果cartList中每一条数据的select都为true，返回true，否则返回false;
          return this.cartList.every(function (val) {return val.select});
      },
      getTotal:function(){
          //获取cartList中select为true的数据。
          var _proList=this.cartList.filter(function (val) { return val.select}),totalPrice=0,totalNum=0;
          for(var i=0,len=_proList.length;i<len;i++){
              //总价累加
              totalPrice+=_proList[i].goods_price*_proList[i].goods_num;
              totalNum+=_proList[i].goods_num;
          }
          //选择产品的件数就是_proList.length，总价就是totalPrice
          return {totalNum:totalNum,totalPrice:totalPrice}
      },
      store:function(){
        return this.$store.state;
      }
  },
  mounted() {
      var $this = this;
      $this.is_rouid = store.state.rouId
      $this.Cart_con();
    // 随机推荐
    $this.$post($this.$api.HeaderCon_goods_SJrandom, {}).then(data => {
      $this.HeaderCon_goods_day = data.data;
    });

  },
  methods: {
    // 初始化
    Cart_con(){
      var $this = this;
      $this.$post($this.$api.get_cart_list, {token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jb25zb2xlLnBpbmppYW5hcHAuY29tXC9hcGlcL0FkbWluXC9sb2dpbiIsImlhdCI6MTU5ODg3MjE5NywiZXhwIjoxNTk5MDQ0OTk3LCJuYmYiOjE1OTg4NzIxOTcsImp0aSI6IlFYeTVncHdINFI5Z0tjMUwiLCJzdWIiOjEsInBydiI6ImY2NGQ0OGE2Y2VjN2JkZmE3ZmJmODk5NDU0YjQ4OGIzZTQ2MjUyMGEifQ.JP7XWgNXU_YEQi0jO2LpGFEEL1v7bBgHNqCLFvknb2M',no:4}).then(data => {
          //为data.data添加select（是否选中）字段，初始值为true
          data.data.map(function (item) {
              $this.$set(item, 'select', true);
          })
          $this.cartList = data.data;
          console.log($this.cartList);
          for(var i = 0 ;i<$this.cartList.length;i++){
            $this.totalPrice += $this.cartList[i].goods_price*$this.cartList[i].goods_num;
            $this.totalNum += $this.cartList[i].goods_num;
            $this.IdArrayTrue.push($this.cartList[i].id);
          }
          $this.$store.commit('changeIdArray',$this.IdArrayTrue)
          localStorage.setItem('IdArrayTrue',JSON.stringify($this.IdArrayTrue));
      });
    },
    // 跳首页
    ind() {
      if(this.is_rouid == 'Mi'){
        this.$router.replace({
          path: `/Mi`
        });
      }else if(this.is_rouid == 'Index'){
        this.$router.replace({
          path: `/index`
        });
      }else{
         this.$router.replace({
            path: `/index`
          });
      }
    },
    goback() {
      this.$router.push({
        path: '/index'
      })
    },
    // 结算
    jiesuan(){
      var $this = this;
      // 细节
      if($this.IdArrayTrue != '' && $this.cartList.length != 0){
        $this.$store.commit('Change_rouId','Cart')

        var href  = window.location.href;
        var str = href.split("#");
        var rouit = str[0] + '#/payment/payment/';
        // window.android.meto_goback(rouit,'false','false');


        this.$router.replace({
          path: `/payment/payment`
        });
      }else if($this.cartList.length != '' && $this.IdArrayTrue == ''){
        swal('请选择商品','……');
      }else{
        swal('先添加商品购物车','……');
      }

      
      
      // localStorage.setItem('IdArrayTrue',JSON.stringify($this.IdArrayTrue));
    },
    // 计算 +
    change_cart_add(t){
      var $this = this;
      $this.$post($this.$api.change_cart, {
        token:localStorage.getItem('token'),
        id:t.id,
        goods_num:1,
        change_type:1
      }).then(data => {
        if(data.code == 500){
            swal(data.msg, "暂无多余商品……");
            return false;
        }else if(data.code == 200){
          // data.data.map(function (item) {
          //     $this.$set(item, 'select', true);
          // })
          // $this.cartList = data.data
          t.goods_num++;
          $this.sum_price();
        }
      });
    },
    // 计算 - 
    change_cart_jain(t){
      var $this = this;
      if(t.goods_num > 1){
          t.goods_num--
          $this.$post($this.$api.change_cart, {
            token:localStorage.getItem('token'),
            id:t.id,
            goods_num:1,
            change_type:0
          }).then(data => {
            if(data.code == 500){
              alert(data.msg);
            }else if(data.code == 200){
              // data.data.map(function (item) {
              //     $this.$set(item, 'select', true);
              // })
              // $this.cartList = data.data;
              $this.sum_price();
            }
          }); 
      }else{
        return false;
      }
      

    },
    // 价格 封装
    sum_price:function(){
        var totalPrice = 0;
        var totalNum = 0;
        this.cartList.forEach(res=>{
            totalPrice += res.goods_price * res.goods_num;
            totalNum += res.goods_num;
        });
        this.totalPrice = totalPrice;
        this.totalNum = totalNum;
    },
    //全选与取消全选
    selectProduct:function(_isSelect){
      //遍历cartList，全部取反
        this.text = !this.text
      for (var i = 0, len = this.cartList.length; i < len; i++) {
          this.cartList[i].select = !_isSelect;
      }
    },
    //删除已经选中(select=true)的产品
    deleteProduct:function () {
     var $this = this;
      var s = $this.IdArrayTrue.toString();
      // 删除选中索引
     
      if(s == ''){
        swal('请先选中在操作','……');
      }else{
          $this.$post($this.$api.del_cart, {
            token:localStorage.getItem('token'),
            ids:s
          }).then(data => {
                $this.cartList = data.data
                location.reload()
          });
      }
      
    },

    // 反选
    qufan(v){
      var $this = this;
      v.select = !v.select
      if ($this.IdArrayTrue.indexOf(v.id) === -1) {
        $this.IdArrayTrue.push(v.id)
        $this.$store.commit('changeIdArray',$this.IdArrayTrue)
        localStorage.setItem('IdArrayTrue',JSON.stringify($this.IdArrayTrue));
      } else {
        $this.IdArrayTrue.splice($this.IdArrayTrue.indexOf(v.id), 1);
        $this.$store.commit('changeIdArray',$this.IdArrayTrue)
        localStorage.setItem('IdArrayTrue',JSON.stringify($this.IdArrayTrue));
        $this.sum_price();
      }
    },

    // 切换状态
    qiehuan(val){
      var _this = this;
      console.log(_this.IdArrayTrue);
      if(val == 1){
        _this.ifCarIMg_true = 'http://res.pinjianapp.com/vue_wap/images/cart/y.png';
        _this.isHide = false;
        _this.isHide_to = true;
        // _this.Cart_con();
      }else{
        _this.ifCarIMg_true = 'http://res.pinjianapp.com/vue_wap/images/cart/y.png';
        _this.isHide = true;
        _this.isHide_to = false;
        // _this.Cart_con();
      }
    },

    // commits 创建询问
    commits(v){
      var $this = this;
      // 首页底部分类1
      $this.$post($this.$api.create_enquiry, {
          token:localStorage.getItem('token'),
          goods_id:v.id
        }).then(data => {
          if(data.code == 200){
              swal('询价'+data.data);
          }else if(data.code == 500){
              swal(data.msg, "请稍等……");
          }else if(data.code == 400){
              swal('询价'+data.msg, "请稍等……");
          }
      });
    },

    // 添加购物车
    addCart(value){
      if(localStorage.getItem('token') == null){
          var href  = window.location.href;
          var str = href.split("#");
          var rouit = str[0] + '#/login';
          // 调安卓
          window.android.meto_goback(rouit,'false','false');
      }else{
      var $this = this;
      $this.$post($this.$api.add_cart, {
          token:localStorage.getItem('token'),
          goods_name:value.goods_name,
          goods_spec:0,
          storeid:value.store_id,
          id:value.id,
          seller_id:value.seller_id,
          store_name:value.store_name,
          user_id:value.user_id,
          goods_master_image:value.goods_master_image,
          goods_price:value.goods_price,
          buy_num:1,
          type:'cart'
        }).then(data => {
           if(data.code == 500){
              swal(data.msg);
           }else if(data.code == 200){
            //  $this.Cart_con();
            $this.reload()
            //  console.log($this.IdArrayTrue);
              // 待优化
              // swal({
              //   title: data.msg,
              //   })
              //   .then((willDelete) => {
              //       if (willDelete) {
              //           // $this.Cart_con();
              //       }
              //   })
           }
        });
      }
      
    },
    // 跳转进入详情
    selectItem(item) {
      var $this = this;
      $this.$store.commit('Change_rouId','Cart')

      var href  = window.location.href;
      var str = href.split("#");
      var rouit = str[0] + '#/home/indexdetails/' + item.id;
      window.android.meto_goback(rouit,'false','false');
      // this.$router.replace({
      //   path: `/home/indexdetails/${item.id}`
      // });
    },
      //进入商品详情页
  go_detail(id) {
    console.log(1);
    this.$router.push({
      path: '/home/indexdetails/' + id
    })
  },
  ScProduct(){   //批量加入收藏夹
      var $this = this;
      var s = $this.IdArrayTrue.toString();
       if(s == ''){
        $this.$toast('请先选中在操作')
      }else{
          $this.$post($this.$api.batch_fav_list, {
            token:localStorage.getItem('token'),
            mix_id:s,
            is_type:0,
            status:1
          }).then(data => {
            if(data.code == 200){
              $this.$toast('加入收藏成功')
              $this.Cart_con();
            }else{
              $this.$toast('加入收藏失败')
              $this.Cart_con();
            }
          });
      }
    },
  },

}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '@/assets/sass/base.scss';

.wrpper-cart{
  width: 100%;
  background: #f8f8f8;
  padding-bottom:rem(150px);
  position: absolute;
  .wrpper-cart-mian{
    width: 100%;
    // padding: 0 rem(32px);
    padding-top:rem(88px);  
    .title{
      margin-top:rem(12px);
      font-size:rem(24px);
      padding-left: rem(32px);
      font-weight:400;
      color:#999;
      letter-spacing:rem(2px);
    }
  }
  .wrpper-cart-pd_error{
    width: 100%;
    dd{
      display: block;
      width: rem(146px);
      height: rem(146px);
      margin:0 auto;
      margin-top:rem(110px);
      border-radius:50%;
      position: relative;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .cart-pd_error_p1{
      margin-top:rem(49px);
      text-align: center;
      font-size:rem(28px);
      font-weight:400;
      color:rgba(153,153,153,1);
    }
    .cart-pd_error_p2{
      margin-top:rem(12px);
      text-align: center;
      font-size:rem(28px);
      font-weight:400;
      color:rgba(153,153,153,1);
      margin-bottom: rem(60px);
    }
    .ebn{
      width:rem(247px);
      height:rem(83px);
      line-height:rem(83px);
      background:rgba(0,0,0,1);
      border-radius:rem(42px);
      text-align: center;
      font-weight:bold;
      color:rgba(255,255,255,1);
      font-size: rem(32px);
      margin: rem(25px) auto rem(85px);
    }
  }
  .wrpper-cart-list{
    width: 100%;
    margin-bottom:rem(40px);
    .wrpper-cart-list-item{
      width: 100%;
      padding: rem(41px) rem(23px) rem(40px) rem(76px);
      height: rem(303px);
      background: #fff;
      display: flex;
      position: relative;
      margin-top:rem(20px);
      dd{
          position: absolute;
          width: rem(32px);
          height:rem(32px);
          border-radius: 50%;
          float: left;
          top:50%;
          left: rem(40px);
          transform: translate(-50%,0);
          img{
            display: block;
            width: 100%;
            height:100%;
          }
        }
      .wrpper-cart-list-item-l{
        height:100%;
        position: relative;
        img{
          width: rem(222px);
          height: rem(222px);
          display: block;
        }
      }
      .wrpper-cart-list-item-r{
        height:100%;
        flex:1;
        margin-left:rem(40px);
        .titie{
          overflow: hidden;
          margin-top:rem(15px);
          strong{
            font-size: rem(32px);
            font-weight:400;
            color:#000;
          }
          span{
            margin-left:rem(5px);
            color:#666;
            font-size: rem(26px);
          }
        }
        .name{
          margin-top:rem(16px);
          font-size:rem(26px);
          font-weight:400;
          color:rgba(153,153,153,1);
        }
        .kuans{
          margin-top:rem(16px);
          font-size:rem(26px);;
          font-weight:400;
          color:rgba(153,153,153,1);
        }
        .r-pirce{
          width:100%;
          bottom:rem(20px);
          left:0;
          display:flex;
          bottom:0;
          height: rem(40px);
          line-height: rem(40px);
          .pirce{
            font-size:rem(32px);
            font-weight:bold;
            color: #333;
            img {
              width: rem(12px);
              height: rme(20px);
            }
          }
          .num_jisu{
            margin-left:auto;
            display:flex;
            background: #FCFCFC;
            span{
              display:block;
              text-align:center;
              img{
                display: block;
                width: rem(35px);
                height: rem(35px);
                margin-top:rem(3px);
              }
            }
            span:nth-of-type(2){
              display: block;
              min-width: rem(60px);
              font-size:rem(30px);
              font-weight:400;
              color:rgba(0,0,0,1);
              margin:0 rem(8px);
            }
          }
        }
      }
    }
    .wrpper-cart-list-item:nth-of-type(1){
      margin-top:rem(10px);
    }
  }
  .wrpper-cart-faxn{
    background-color: #fff;
    padding: rem(31px) rem(32px) 0;
    h4{
      text-align: center;
      margin-bottom: rem(27px);
      span{
        font-size:rem(36px);
        font-weight:bold;
        position: relative;
        letter-spacing: rem(2px);
      }
    }
  }

  .footer{
    width:100%;
    height:rem(120px);
    position: fixed;
    left: 0;
    bottom:0;
    display: flex;
    z-index: 9999;
    background: #fff;
    padding:0 rem(32px);
    .ico{
      img{
        display: block;
        width: rem(32px);
        height:rem(32px);
        margin-top:rem(27.5px);
        margin-left:rem(8px);
      }
      span{
        display: block;
        font-size: rem(24px);
        font-weight:400;
        color:rgba(0,0,0,1);
        margin-top:rem(10px);
      }
    }
    .con{
      flex:1;
      text-align:right;
      padding:0 rem(22px);
      .pircse{
        margin-top:rem(25px);
        font-size: rem(28px);
        font-weight:bold;
        color:#F44647;
        span{
          font-size: rem(28px);
          font-family:font_b;
          font-weight:bold;
          color:#F44647;
        }
      }
      .pircses{
        margin-top:rem(15px);
        font-weight:400;
        color:rgba(153,153,153,1);
        letter-spacing:rem(1px);
      }
    }
    .btn{
      height:rem(83px);
      width: rem(193px);
      line-height: rem(83px);
      text-align: center;
      color:#fff;
      font-size: rem(32px);
      background:#F44647;
      font-weight:bold;
      margin-top:rem(18px);
      letter-spacing:rem(2px);
    }
    .btn_yr{
      width:rem(193px);
      height:rem(85px);
      line-height:rem(85px);
      border:rem(1px) solid #999;
      text-align: center;
      font-weight:400;
      color: #666;
      font-size: rem(32px);
      margin-top:rem(16px);
      margin-left: auto;
      margin-right: rem(20px);
    }
    .btn_sc{
      width:rem(193px);
      height:rem(85px);
      line-height:rem(85px);
      text-align: center;
      font-weight:400;
      background-color:#F44647;
      font-size: rem(32px);
      margin-top:rem(16px);
      color: #fff;
    }
  }
}
.App_mainConList .mi-mi-mainItem .item:nth-of-type(1),.App_mainConList .mi-mi-mainItem .item:nth-of-type(2){
  margin-top:rem(13px);
}
.App-header .to_b.s{
  color: #F44647;
}
</style>
