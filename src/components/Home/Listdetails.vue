<template>
    <div class="Lndexdetails clearfix">
        <loading v-if="loading"></loading>
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="back()"></div>
            <span>{{name}}</span>
            <div class="to_b" style="visibility: hidden;"></div>
        </div>
        <div class="mainContg">
                <div class="item" :class="v.id==activeClass?'active':''" v-for="(v,k) in list_details" :key="k" @click="changeStatus_one(v)">
                  {{v.text}}
                  <div v-if="k == 2" >
                      <span v-if="isHide_san">
                          <img :src="isHide_sanCon?IMG_one_2:IMG_one_1" alt="">
                      </span>
                  </div>

                  <div v-else-if="k == 3">
                      <span v-if="isHide_si">
                        <img  :src="isHide_siCon?IMG_one_2:IMG_one_1" alt="">
                      </span>
                  </div>
              
                </div>

            </div>
        <div class="main">
              <div class="App_mainConList">
                  <div class="mi-mi-mainItem clearfix">
                      <div class="item" v-for="(a,b) in HeaderCon_goods_day" :key="b">
                          <img :src="a.goods_master_image" alt=""  @click="selectItem(a)">
                          <!-- <img v-lazy="a.goods_master_image"> -->
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

            <!-- <div class="App_mainConList">
              <div class="mainItem clearfix" v-if="HeaderCon_goods_day.length == ''">
                  <div class="Apperror">
                      <img src="../../assets/images/Mi/error.png" alt="">  
                      <span>空空如也……</span> 
                  </div>
              </div>
              <div class="mi-mi-mainItem clearfix">
                <div class="item" v-for="item in HeaderCon_goods_day" :key="item.id">
                  <div @click="selectItem(item)" class="mu_img"><img v-lazy="item.goods_master_image"></div>
                  <div class="mesg_con">
                      <b>{{item.goods_name}}</b>
                      <strong>{{item.goods_no}}</strong>
                      <p @click="commit(item)" v-if="item.goods_type == 0">询价</p>
                      <p v-else @click="addCart(item)">立即购买</p>
                  </div>
                </div>
              </div>
            </div> -->


        </div>
    </div>
</template>

<script>
import Loading from "@/components/Common/Loading_t"
export default {
  name: 'Find',
  data () {
    return {
      Listdetails_id:'',        // 大分类跳转id
      // preeop_ConClass:[],       // 导航列表
      HeaderCon_goods_day:[],   // 下边列表
      activeClass: 0,           // 索引
      name:'',                  // 标题titie
      ClassifiIdID:'',          // 头部标题id
      isHide_san:false,
      isHide_sanCon:false,
      isHide_si:false,
      isHide_siCon:false,
      IMG_one_1:require("../../assets/images/Index_Img/c63b19f7245ff76ba8c5b45ff778030.png"),
      IMG_one_2:require("../../assets/images/Index_Img/ce9acbf4a5d6616348c478694d2b8cf.png"),

      type:'',
      iSpaixu:true,
      iSpaixu1:false,
      iSbackground1:'str2',
      iSbackground2:'',
      iSbackground3:'',

      list_details:[
        {id:0,'text':'默认'},
        {id:1,'text':'人气'},
        {id:2,'text':'价格'},
        {id:3,'text':'销量'}
      ],


      loading:true
    }
  },
  mounted() {
    var $this = this;
    $this.Listdetails_id = $this.$route.params.id;

     $this.changeStatus_oneCon();

    //  window.android.getback(localStorage.getItem('get_Android_rouit'));
  },
  methods: {
    selectItem(item) {
      var $this = this;
      localStorage.setItem('get_Android_prev',localStorage.getItem('get_Android_rouit'));
      localStorage.setItem('get_Android_rouit','listdetails');
      localStorage.setItem('get_Android_rouitid',$this.Listdetails_id);
      this.$router.push({
        path: `/home/indexdetails/${item.id}`
      });
    },
    back(){
       this.$router.back()
      // var ristou = localStorage.getItem('get_Android_rouit');
      // if(ristou == 'classification'){
      //   localStorage.removeItem('get_Android_rouit');
      //   localStorage.removeItem('get_Android_rouitid');
      //   this.$router.replace({
      //     path: `/classification`
      //   });
      // }else if(ristou == 'Index'){
      //   localStorage.removeItem('get_Android_rouit');
      //   localStorage.removeItem('get_Android_rouitid');
      //   this.$router.replace({
      //     path: `/index`
      //   });
      // }
    },
    // 安卓用
    // back_go(val){
    //   if(val == 'Index'){
    //     localStorage.removeItem('get_Android_rouit');
    //     localStorage.removeItem('get_Android_rouitid');
    //     this.$router.replace({
    //       path: `/index`
    //     });
    //   }else if(val == 'classification'){
    //     localStorage.removeItem('get_Android_rouit');
    //     localStorage.removeItem('get_Android_rouitid');
    //     this.$router.replace({
    //       path: `/classification`
    //     });
    //   }  
    // },

    // 点击获取参数type
    changeStatus_one(val){
      var $this = this;
      $this.activeClass = val.id;
      $this.HeaderCon_goods_day = [];
      if(val.id == 0){
        $this.changeStatus_oneCon();
      }else if(val.id == 1){
        $this.changeStatus_san();
      }else if(val.id == 2){
        $this.changeStatus_two();
      }else if(val.id == 3){
         $this.changeStatus_si();
      }
    },

    // 价格1升序-2降序，默认-3，人气-4，销量升序-5 降序6-
    // 默认显示的列表
    changeStatus_oneCon(){
         var $this = this;
         $this.loading = true;
         $this.type = 1;
         $this.$post($this.$api.classid_goodslist, { 
             id:$this.Listdetails_id,
             no:10,
             page:1,
             type:3
          }).then(data => {
          $this.HeaderCon_goods_day = data.data.goods;
          $this.name = data.data.name
          $this.loading = false;
          $this.isHide_san = false;     // 初始价格
          $this.isHide_si = false;      // 初始销量
          $this.iSpaixu = false;        // 初始价格判断
          $this.iSpaixu1 = false;       // 初始销量判断
        });
    },

    // 价格列表
    changeStatus_two(){
      var $this = this;
      $this.isHide_san = true;
      $this.loading = true;
      $this.isHide_si = false;      // 初始销量
      if($this.iSpaixu){
        $this.type = 1;
        $this.iSpaixu = !$this.iSpaixu;
        $this.isHide_sanCon = false;
      }else{
        $this.type = 2;
        $this.iSpaixu = !$this.iSpaixu;
        $this.isHide_sanCon = true;
      }
      $this.$post($this.$api.classid_goodslist, { id:$this.Listdetails_id,type:$this.type,no:10,page:1}).then(data => {
        $this.HeaderCon_goods_day = data.data.goods;
        $this.loading = false;
        $this.iSpaixu1 = false;

      });
    },
    // 人气列表
    changeStatus_san(){
      var $this = this;
      $this.loading = true;
      $this.$post($this.$api.classid_goodslist, { 
            id:$this.Listdetails_id,
            no:10,
            page:1,
            type:4
        }).then(data => {
        $this.HeaderCon_goods_day = data.data.goods;
        $this.loading = false;
        $this.iSpaixu = !$this.iSpaixu
        $this.iSpaixu1 = !$this.iSpaixu1
        $this.isHide_san = false;     // 初始价格
        $this.isHide_si = false;      // 初始销量
        $this.iSpaixu = false;        // 初始价格判断
        $this.iSpaixu1 = false;       // 初始销量判断
      });
    },
    // 销量列表  5 销量升序  6  销量降序
    changeStatus_si(){
      var $this = this;
      $this.isHide_si = true;
      $this.loading = true;
       $this.isHide_san = false;      // 初始价格
      if($this.iSpaixu1){
        $this.type = 5;
        $this.iSpaixu1 = !$this.iSpaixu1;
        $this.isHide_siCon = false;

      }else{
        $this.type = 6;
        $this.iSpaixu1 = !$this.iSpaixu1;
        $this.isHide_siCon = true;
      }
      $this.$post($this.$api.classid_goodslist, { id:$this.Listdetails_id,type:$this.type,no:10,page:1}).then(data => {
        $this.HeaderCon_goods_day = data.data.goods;
        $this.loading = false;
        $this.iSpaixu = false;
        
      });
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
          this.$router.push({
              path: `/login`
          })
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
              // $this.cartList = data.data;
              // 待优化
              swal({
                title: data.msg,
                })
                .then((willDelete) => {
                    if (willDelete) {
                        // this.$router.go(0);
                    }
                })
           }
        });
      }
      
    },
  
  },
  components:{
    Loading
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.App_mainConList{
  padding: 0 rem(32px) rem(30px);
}
.Lndexdetails {
  width: 100%;
  height: 100%;
  .mainContg{
        width: 100%;
        height: rem(80px);
        line-height: rem(80px);
        display:flex;
        background: #ffffff;
        padding:0 rem(120px);
        justify-content: space-between;
        position: fixed;
        top:rem(88px);
        left:0;
        z-index: 999;
        .item{
          font-size:rem(32px);
          font-family:font_pc;
          color:rgba(102,102,102,1);
          position: relative;
          span{
            position: absolute;
            width: rem(20px);
            height: rem(26px);
            right: rem(-15px);
            top:50%;
            transform: translate(rem(15px), -50%);
            img{
              display: block;
              width: 100%;
              height: 100%;              
            }
          }
        }
        .item.active{ 
            color:rgba(0,0,0,1);
            font-weight: bold;
        }
        .item.active::after{
          position: absolute;
          content: '';
          width: 80%;
          height: rem(8px);
          background:rgba(0,0,0,1);
          bottom: 0;
          left: 50%;
          transform: translate(-50%,0);
        }
  }
  .main{
      width: 100%;
      padding-top:rem(168px);
      background:rgba(248,248,248,1);
  }
}
.App_mainConList .mi-mi-mainItem .item {
    margin-top: .46667rem;
    margin-bottom:0;
}
</style>