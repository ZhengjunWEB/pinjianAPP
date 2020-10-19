<template>
<div class="wrapper" id="wrapper">
    <!--<loading v-if="loading"></loading>-->
    <!-- 头部 START -->
    <div class="my_header_or">
        <div class="my_headerCon">
            <img class="img_d" :src="srcPath + 'icondd.png'" alt="" @click="ba_JumpVC()">
            <div class="inpuy_osu" @click="selectItemS()">
                <input type="text" placeholder="请输入搜索关键字" disabled="true">
                <div class="ioxn">
                    <img :src="srcPath + 'sousuo.png'" alt="">
                </div>
            </div>
            <img :src="srcPath + 'liaotian.png'" alt="" class="imimg_cg_c" @click="ababa">
        </div>
    </div>
    
    <div class="head_lun">
        <div class="swiper-container" id="swiper_one">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(a,b) in HeaderCon" :key="b">
                    <img :src="a.adv_image" alt="" >
                </div>
            </div>
        </div>
        
        
    </div>
        <!-- 头部 END -->
        <!-- 主体 START -->
    <div class="main">
        <!-- 主体logo -->
        <div class="main_ico">
            <dl class="ico_do clearfix">
                <dd v-for="(item,index) in HeaderCon_bot" :key="index" @click="selectItemL(item)">
                    <!--<img v-lazy="item.imgurl"> --> 
                    <img :src="item.imgurl">
                    <span>{{item.name}}</span> 
                </dd>
            
            </dl>
        </div>

        <div class="temai_sf">
            <h2 class="title"><font>今日特卖</font><span>特价优惠</span></h2>
            <div class="temai_sf-list clearfix">
                <b></b><div class="temai_sf-item" v-for="(v,k) in get_goods_hot" :key="k" @click="selectItem(v)">
                    <img :src="v.goods_master_image" alt="">
                    <p class="p1">{{v.goods_name}}</p>
                    <p class="p2">{{v.author}}</p>
                    <p class="p3">￥{{Math.round(v.goods_price)}}</p>
                </div>
            </div>
        </div>
        <div class="temai_sf">
            <h2 class="title"><font>新品首发</font><span>今日新品</span></h2>
            <div class="temai_sf-list clearfix">
                <b></b><div class="temai_sf-item" v-for="(v,k) in get_goods_new" :key="k" @click="selectItem(v)">
                    <img :src="v.goods_master_image" alt="">
                    <p class="p1">{{v.goods_name}}</p>
                    <p class="p2">{{v.author}}</p>
                    <p class="p3">￥{{Math.round(v.goods_price)}}</p>
                </div>
            </div>
        </div>

        <!-- 广告 -->
        <div class="guanggao-t1" @click="back_go_recovery()">
            <img src="../assets/images/Index_Img/7d7717e6a41ab50535f30c011b79ed6.png" alt="">
        </div>


        <!-- 底部导航 -->
        <div class="main_list_con_child">
            <div class="main_list_con_child-list">
                <div class="main_list_con_child-items">全部</div>
                <div class="main_list_con_child-items">紫砂壶</div>
                <div class="main_list_con_child-items">名家推荐</div>
                <div class="main_list_con_child-items">壶友返图</div>
            </div>   

            <div class="con_bottm">
                <div class="App_mainConList">
                <div class="mi-mi-mainItem clearfix">
                    <div class="item" v-for="(a,b) in HeaderCon_goods_day" :key="b">
                        <img :src="a.goods_master_image" alt=""  @click="selectItem(a)">
                        <div class="item_comn">
                            <strong>{{a.goods_name}}</strong>
                            <span>{{a.author}}</span>
                            
                            <div class="pp_con" v-if="a.goods_type == 0">
                                <dd> ￥????</dd>
                                <dt @click="commits(a)">
                                    <img src="../assets/images/Index_Img/gouwupirce.png" alt="">
                                </dt>
                            </div>
                            <div class="pp_con" v-else>
                                <dd> ￥{{Math.round(a.goods_price)}}</dd>
                                <dt @click="addCart(a)">
                                    <img src="../assets/images/Index_Img/gouwuchewx.png" alt="">
                                </dt>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
        <!-- 主体 END -->
    <!-- 底部组件 -->
    <nav-bottom></nav-bottom> 
  
</div>
</template>

<script>
// 引入 Swipter 组件
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
// 引入底部组件
import store from "@/store/store.js";
// import NavBottom from "@/components/Common/NavBottom";
import NavBottom from "@/components/Common/new_bottom";
import ScrollTop from "@/components/Common/ScrollTop";
import Loading from "@/components/Common/Loading_t";

// 引入滑动刷新的组件
import InfiniteLoading from "vue-infinite-loading";
import Index_icon from '../../static/json/Index_icon.json'
export default {
  name: 'Index',
  data () {
    return {
        selectedId: 0,  // 底部导航默认选中
        HeaderCon:[],
        HeaderCon_bot:[],
        HeaderCon_goods_day:[],
        swiperOption:{
            autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        },
        srcPath: 'http://res.pinjianapp.com/vue_wap/images/index/', //配置地址
        iosbanben:'',     // 安卓传的数据
        valeBAN:'',       // 版本号
        valesan:'',       
        phone:'',         // 手机号

        loading:true,     // 预加载loading 
       
        isShow:false,      // 让 下拉的小菊花 隐藏
        isHide:false,    // 提示 还有没有数据的容器

        page:1,              // 页数

        getlipaknum:'',         // apk版本号
        get_color:'',         // 主色号

        get_goods_hot:[],            // 首页-特卖
        get_goods_new:[],            // 首页-新品


        iskong:'',

        scroll:'',
        offsetTop:''

    }
  },
 
  // 加载组件
  components: {
    // 底部组件
    NavBottom,
    ScrollTop,
    Loading,
    // 滑动刷新的组件
    InfiniteLoading
  },
  store,
  // 计算属性
  computed: {
      store:function(){
        return this.$store.state;
      },
    
  },
 
  beforeCreate(){
    var $this = this;
    $this.selectedId = 0;
  },
  activated() {
　　//  keep-alive组件 页面进入的时候设置滚动高度
    console.log('触发方法');
    console.log(this.scroll);
   
  },
  // 钩子函数
  mounted() {
    var $this = this;
    // 实例化 Swiper
    // 随机推荐
    $this.$post($this.$api.HeaderCon_goods_SJrandom, {}).then(data => {
      $this.HeaderCon_goods_day = data.data;
    });
    // banner数据
    $this.$post($this.$api.HeaderBanner, {}).then(data => {
      $this.HeaderCon = data.data.adv;
        this.$nextTick(() => { // 下一个UI帧再初始化swiper
            var swiper = new Swiper('#swiper_one', {
                direction: 'horizontal',
                initialSlide :0,//默认第二个
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                slidesPerView: 1.1,
                centeredSlides:true,
                spaceBetween: 20,
                observer:true,
                observeParents:true,
                loop: true, 
            });
        });
    });
    // banner下面
    $this.$post($this.$api.HeaderCon_bot, {}).then(data => {
      $this.HeaderCon_bot = data.data.data;
    });
    // 今日特卖
    $this.$post($this.$api.get_api_goods_hot, {}).then(data => {
        $this.get_goods_hot = data.data
    });
    // 今日首发
    $this.$post($this.$api.get_api_goods_new, {}).then(data => {
        $this.get_goods_new = data.data
    });
    // meto_goback(
        // '一级id','0 -- 新添加二级  -- 1，2，3 一级页面id')
        // '路径',
        // '是否销毁 -- false 不销毁 -- true 销毁',
        // '是否是支付页面 -- false 不是  --true 是',
        // '滑动效果  0 没有 1 左 2 右 3 上 4 下 5 缩小'   == 1 透明度  背景颜色  边框阴影    2  
    // 
    window.getApplicationInfo = $this.getApplicationInfo;
  },

   
  // 方法区域  
  methods: {
    ababa() {
        this.$router.push({
            path: '/login'
        })
    },
    // ios 调 版本信息
    ba_JumpVC() {
        window.webkit.messageHandlers.getAppInfo.postMessage()
    },
    // ios 版本信息返回
    getApplicationInfo(version,appVersion,Mobile,distUid){
        var version = version;            // 设备版本号
        var appVersion = appVersion;      // app版本号 
        var Mobile = Mobile;              // 手机系统
        var distUid = distUid;            // dist版本

        alert('设备版本号========='+version);
        alert('app版本号========='+appVersion);
        alert('手机系统========='+Mobile);
        alert('dist版本========='+distUid);
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
    // 跳商品详情
    selectItem(item){
        this.$router.push({
            path: `/home/indexdetails/${item.id}`
        })
    },
    // 跳列表
    selectItemL(item){
        if(item.type == 1){
            this.$router.push({
                path: `/home/listdetails/${item.id}`
            })
        }else if(item.type == 2){
            // 泥料
            return;
            this.$router.push({
                path: `/find/nl_index`
                // path: `/payment/mud`
            })
        }else if(item.type == 3){
            // 壶型
            return;
            this.$router.push({
                // path: `/payment/urceolate`
                path: `/find/hx_index`
            })
        }else if(item.type == 4){
            // 百科
            return;
            this.$router.push({
                path: `/find`
                // path: `/payment/ency`
            })
        }else if(item.type == 5){
            swal('功能正在研发中………', "请稍等……");
            // this.$router.push({
            //     path: `/payment/videocation`
            // })
        }else if(item.type == 6){
            swal('功能正在研发中………', "请稍等……");
            // this.$router.push({
            //     path: `/payment/appreciation`
            // })
        }else if(item.type == 7){
            return;
            this.$router.push({
                path: `/find/yr_index`
            })
        }
        
    },
    // 搜索引擎
    selectItemS(){
    
        var href  = window.location.href;
        var str = href.split("#");
        var rouit = str[0] + '#/home/suo1';

        window.android.meto_goback(rouit,'false','false');
            // if(res.code == 200){
            //     window.location.href= str[0] + 'sell/receipt';
            // }
            // this.$router.push({
            //     path: `/home/suo1`
            // })
    },
    // 跳直播
    ff(){
        this.$router.push({
            path: `/home/createlive`
        })
    },
    // 跳回收页面
    back_go_recovery(){
        var href  = window.location.href;
        var str = href.split("#");
        if(localStorage.getItem('token') == null){
            var rouit = str[0] + '#/login';
            window.android.meto_goback(rouit,'false','false');
        }else{
            this.$router.push({
                path: `/home/recovery`
            })
        }
    },
  },
 
  deactivated() {
    // keep-alive 组件停用时调用（简单理解为组件离开的时候）。
    // var scroll = document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset
    console.log(document.body.scrollTop);
  }, 
 
}
</script>

<style scoped lang="scss">
//  /* 引入 基础 scss */
@import '../assets/sass/base.scss';
@import '../assets/sass/Index.scss';
// @import '../assets/sass/IndexCommon.scss';
#swiper_one{
    width: 100%;
    height: 100%;
    overflow: visible!important;
}
.swiper-slide{
    width: rem(686px);
    img{
        display: block;
        width: 100%;
        height: 100%;
        // border-radius: rem(20px);
    }
}
.el-tabs__header{
    margin-top:rem(20px)
}
.el-tabs__nav-scroll{
    height:rem(110px);
    line-height:rem(110px);
}
.el-tabs__nav{
    width:100%;
    height: 100%;
    overflow-x:scroll;
    overflow-y:hidden;
    padding:rem(20px);
    box-sizing: border-box;
}
.el-tabs__item{
    font-size:rem(35px)
}
.el-tabs__active-bar {
    left:rem(20px) !important;
}
.datainfo{
    width:100%;
    text-align: center;
    font-size: rem(30px);
    line-height: rem(80px);
    color:#333;
    float:left;
    margin-top:rem(20px);
}

</style>
