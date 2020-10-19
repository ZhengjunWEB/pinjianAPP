<template>
  <div class="index">
    <div class="wrapper" id="wrapper">
      <!--<loading v-if="loading"></loading>-->
      <!-- 头部 START -->
      <div class="my_header_or">
        <div class="my_headerCon">
          <router-link to="/home/suo1" tag="div">
            <div class="inpuy_osu">
              <!-- @click="selectItemS()" -->
              <span>请输入搜索关键字</span>
              <!-- <input type="text" placeholder="请输入搜索关键字" disabled="true" /> -->
              <div class="ioxn">
                <img :src="srcPath + 'f_search.png'" alt="" />
              </div>
            </div>
          </router-link>
          <router-link to="/cart">
            <div class="my_header_img">
              <img
                :src="srcPath + 'i_cart.png'"
                alt=""
                class="imimg_cg_c"
                @click="ababa"
              />
              <span>{{cart_count}}</span>
            </div>
          </router-link>
        </div>
        <ul>
          <li @click="change_nav(0)" :class="{ active: nav_active == 0 }">
            紫砂壶
          </li>
          <li @click="change_nav(1)" :class="{ active: nav_active == 1 }">
            紫砂杯
          </li>
          <li @click="change_nav(2)" :class="{ active: nav_active == 2 }">
            瓷器
          </li>
          <li @click="change_nav(3)" :class="{ active: nav_active == 3 }">
            茶盘
          </li>
          <li @click="change_nav(4)" :class="{ active: nav_active == 4 }">
            建盏
          </li>
        </ul>
      </div>
      <div class="index_main">
        <!-- 轮播图 -->
        <div class="head_lun">
          <div class="swiper-container" id="swiper_one">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(a, b) in HeaderCon" :key="b">
                <img :src="a.adv_image" alt="" />
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <!-- 新人福利 -->
        <div class="new_people">
          <div class="new_top" @click="goaa(3)">
            <div class="new_p_title">
              <h3>新人福利</h3>
              <p>进店有礼</p>
              <!-- <i>进店有礼</i> -->
              <span>立即领取新人专享大礼包</span>
            </div>
            <div class="new_p_body">
              <div><img :src="srcPath + 'new_p1.png'" alt="" /></div>
              <div><img :src="srcPath + 'new_p2.png'" alt="" /></div>
            </div>
          </div>
          <div class="new_bottom">
            <div class="new_b_item" @click="goaa(1)">
              <div class="new_p_title">
                <h3>藏壶回收</h3>
                <p>专业收购</p>
                <!-- <i>专业收购</i> -->
                <span>高价回收各类优质紫砂壶</span>
              </div>
              <img :src="srcPath + 'huishou.png'" alt="" />
            </div>
            <div class="new_b_item" @click="goaa(2)">
              <div class="new_p_title">
                <h3>职称查询</h3>
                <p>官方认证</p>
                <!-- <i>官方认证</i> -->
                <span>紫砂艺师信息查询系统</span>
              </div>
              <img :src="srcPath + 'zhicheng.png'" alt="" />
            </div>
          </div>
        </div>
        <!-- 主体 -->
        <div class="main_list_con_child">
          <van-sticky offset-top="3.3333rem">
          <div class="main_nav">
            <div class="main_nav_a" @click="rrank">
              <span :class="{ active: type == 3 }">默认</span>
            </div>
            <div class="main_nav_b" @click="rank">
              <span :class="{ active: type == 1 || type == 2 }">价格</span>
              <img :src="srcPath + 'rank_up.png'" v-show="type == 2" />
              <img :src="srcPath + 'rank_dn.png'" v-show="type == 1" />
            </div>
            <div class="main_nav_c">
              <span>销量</span> 
              <!-- <img :src="srcPath + 'rank_up.png'" /> -->
            </div>
            <div class="main_nav_d" @click="show_sheet">
              <span>筛选</span> 
              <img :src="srcPath + 'i_filter.png'" alt="" />
            </div>
          </div>
          </van-sticky>
          <div class="con_bottm">
            <div class="App_mainConList">
              <div class="mi-mi-mainItem clearfix">
                <div
                  class="item"
                  v-for="a in HeaderCon_goods_day"
                  :key="a.id"
                >
                  <img
                    :src="a.goods_master_image"
                    alt=""
                    @click="selectItem(a)"
                  />
                  <div class="item_comn">
                    <strong>{{ a.goods_name }}</strong>
                    <span>{{ a.author }}</span>

                    <div class="pp_con" v-if="a.goods_type == 0">
                      <dd><img src="http://res.pinjianapp.com/vue_wap/images/r_money.png" >????</dd>
                    </div>
                    <div class="pp_con" v-else>
                  

                      <dd> <img src="http://res.pinjianapp.com/vue_wap/images/r_money.png" > {{ Math.round(a.goods_price) }}</dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <infinite-loading @infinite="infiniteHandler" v-if="isShow">
          </infinite-loading>
          <div class="footers" v-else>真的没有数据了~</div>
        </div>
      </div>
      <!-- 底部组件 -->
      <nav-bottom></nav-bottom>
    </div>
    <van-popup
      v-model="show"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <div class="p_header">
        <div class="t">
          <p>筛选</p>
          <div class="to_a iconfont iconzuo" @click="hide_p()"></div>
        </div>
      </div>
      <div class="p_body">
        <div class="a">推荐</div>
        <div class="b" @click="selete1(0, $event)">
          <span id="1" :class="{ active: total[0] == '1' }">人气推荐</span>
          <span id="2" :class="{ active: total[0] == '2' }">爆款推荐</span>
          <span id="3" :class="{ active: total[0] == '3' }">老壶</span>
          <span id="4" :class="{ active: total[0] == '4' }">藏壶</span>
        </div>
        <div class="a">价格（元）</div>
        <div class="c">
          <input type="number" v-model="price1" @change="c_price" /> <i></i>
          <input type="number" v-model="price2" @change="c_price" />
        </div>
        <div class="b" @click="selete2(1, $event)">
          <span id="1" :class="{ active: total[1] == '1' }">1000以下</span>
          <span id="2" :class="{ active: total[1] == '2' }">1000-4000</span>
          <span id="3" :class="{ active: total[1] == '3' }">4000-8000</span>
          <span id="4" :class="{ active: total[1] == '4' }">8000-1.5w</span>
          <span id="5" :class="{ active: total[1] == '5' }">1.5w-3w</span>
          <span id="6" :class="{ active: total[1] == '6' }">3w-5w</span>
          <span id="7" :class="{ active: total[1] == '7' }">5w-10w</span>
          <span id="8" :class="{ active: total[1] == '8' }">10w以上</span>
        </div>
        <div class="a">壶型</div>
        <div class="b" @click="selete3(2, $event)">
          <span id="1" :class="{ active: total[2] == '1' }">圆器</span>
          <span id="2" :class="{ active: total[2] == '2' }">方器</span>
          <span id="3" :class="{ active: total[2] == '3' }">花塑器</span>
          <span id="4" :class="{ active: total[2] == '4' }">筋纹器</span>
          <span id="5" :class="{ active: total[2] == '5' }">提梁</span>
        </div>
        <div class="a">泥料</div>
        <div class="b" @click="selete4(3, $event)">
          <span id="1" :class="{ active: total[3] == '1' }">紫泥</span>
          <span id="2" :class="{ active: total[3] == '2' }">红泥</span>
          <span id="3" :class="{ active: total[3] == '3' }">段泥</span>
          <span id="4" :class="{ active: total[3] == '4' }">稀有</span>
          <span id="5" :class="{ active: total[3] == '5' }">拼泥</span>
        </div>
        <div class="a">容量（cc）</div>
        <div class="c">
          <input type="number" v-model="cc1" @change="c_cc" /> <i></i>
          <input type="number" v-model="cc2" @change="c_cc" />
        </div>
        <div class="b bb" @click="selete5(4, $event)">
          <span id="1" :class="{ active: total[4] == '1' }">小品壶</span>
          <span id="2" :class="{ active: total[4] == '2' }">中品壶</span>
          <span id="3" :class="{ active: total[4] == '3' }">大品壶</span>
          <span id="4" :class="{ active: total[4] == '4' }">自定</span>
        </div>
      </div>
      <div class="btn_box">
        <div class="btn">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
// 引入 Swipter 组件
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
// 引入底部组件
import store from "@/store/store.js";
// import NavBottom from "@/components/Common/NavBottom";
import NavBottom from "@/components/Common/new_bottom";
import ScrollTop from "@/components/Common/ScrollTop";
import Loading from "@/components/Common/Loading_t";

// 引入滑动刷新的组件
import InfiniteLoading from "vue-infinite-loading";

// import Index_icon from '@/static/json/Index_icon.json'
export default {
  name: "Index",
  data() {
    return {
      nav_active: 0, //顶部导航选中
      selectedId: 0, // 底部导航默认选中
      HeaderCon: [],
      HeaderCon_bot: [],
      HeaderCon_goods_day: [],
      swiperOption: {
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
      },
      srcPath: "http://res.pinjianapp.com/vue_wap/images/index/", //配置地址
      iosbanben: "", // 安卓传的数据
      valeBAN: "", // 版本号
      valesan: "",
      phone: "", // 手机号

      loading: true, // 预加载loading

      isShow: true, // 让 下拉的小菊花 隐藏
      isHide: false, // 提示 还有没有数据的容器

      page: 0, // 页数

      getlipaknum: "", // apk版本号
      get_color: "", // 主色号

      get_goods_hot: [], // 首页-特卖
      get_goods_new: [], // 首页-新品
      cart_count: '', //购物车商品总数
      iskong: "",
      show: false,
      scroll: "",
      offsetTop: "",
      Listdetails_id: 708,
      type: 3,

      //筛选页
      price1: 0,
      price2: 0,
      cc1: 0,
      cc2: 0,
      total: [],
    };
  },

  // 加载组件
  components: {
    // 底部组件
    NavBottom,
    ScrollTop,
    Loading,
    // 滑动刷新的组件
    InfiniteLoading,
  },
  store,
  // 计算属性
  computed: {
    store: function () {
      return this.$store.state;
    },
  },
  beforeCreate() {
    var $this = this;
    $this.selectedId = 0;
  },
  created() {
    this.get_cartCount()
  },
  activated() {
    //  keep-alive组件 页面进入的时候设置滚动高度
    console.log("触发方法");
    console.log(this.scroll);
    this.get_cartCount()
  },
  // 钩子函数
  mounted() {
    var $this = this;
    $this.home_data()
    // 实例化 Swiper
    // 随机推荐
    // $this.$post($this.$api.HeaderCon_goods_SJrandom, {}).then((data) => {
    //   $this.HeaderCon_goods_day = data.data;
    // });
    // banner数据
    $this.$post($this.$api.HeaderBanner, {}).then((data) => {
      console.log(data);
      $this.HeaderCon = data.data.adv;
      this.$nextTick(() => {
        // 下一个UI帧再初始化swiper
        var swiper = new Swiper("#swiper_one", {
          direction: "horizontal",
          initialSlide: 0, //默认第二个
          pagination: {
            el: ".swiper-pagination",
          },
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          slidesPerView: 1.1,
          centeredSlides: true,
          spaceBetween: 20,
          observer: true,
          observeParents: true,
          loop: true,
        });
      });
    });
    // banner下面
    $this.$post($this.$api.HeaderCon_bot, {}).then((data) => {
      $this.HeaderCon_bot = data.data.data;
    });
    // 今日特卖
    $this.$post($this.$api.get_api_goods_hot, {}).then((data) => {
      $this.get_goods_hot = data.data;
    });
    // 今日首发
    $this.$post($this.$api.get_api_goods_new, {}).then((data) => {
      $this.get_goods_new = data.data;
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
    login() {
      this.$router.push({
        path: "/login",
      });
    },
    //改变nav
    change_nav(i) {
      this.nav_active = i;
    },
    get_cartCount() {
          //获取购物车商品数量
      this.$post(this.$api.get_cart_count, {
        token: localStorage.getItem('token')
        }).then( (data) => {
          this.cart_count = data.data
        })
    },
    //回收，职称导航
    goaa(i) {
      if (i == 1) {
        this.$router.push({
          path: "/home/recovery",
        });
      } else if (i == 2) {
        this.$router.push({
          path: "/sell/query",
        });
      } else {
        this.$router.push({
          path: "/home/discounts",
        });
      }
    },
    ababa() {
      this.$router.push({
        path: "/login",
      });
    },
    show_sheet() {
      this.show = true; //显示弹出层
    },
    hide_p() {
      this.show = false; //隐藏弹出层
    },
    //下拉刷新
    infiniteHandler($state) {
      setTimeout(() => {
        var $this = this;
        // 请求下一页的数据
        $this.home_data();
        $state.loaded();
      }, 1000);
    },
    //切换默认
    rrank() {
      this.page = 0
      if (this.type == 3) {
        return false;
      }
      this.type = 3;
      this.HeaderCon_goods_day = [];
      this.$nextTick( () => {
        this.home_data();
      })
    },
    // 价格1升序-2降序，默认-3，人气-4，销量升序-5 降序6-
    //切换价格
    rank() {
      this.page = 0
      if (this.type != 1) {
        this.type = 1;
        this.HeaderCon_goods_day = [];
        this.$nextTick( () => {
          this.home_data();
        })
      } else if (this.type == 1) {
        this.type = 2;
        this.HeaderCon_goods_day = [];
        this.$nextTick( () => {
          this.home_data();
        })
      }
    },
    //点击不同选项改变数组数值
    selete1(id, e) {
      this.$set(this.total, 0, e.target.id);
    },
    selete2(id, e) {
      this.$set(this.total, 1, e.target.id);
      if (e.target.id == 1) {
        (this.price1 = 0), (this.price2 = 1000);
      } else if (e.target.id == 2) {
        (this.price1 = 1000), (this.price2 = 4000);
      } else if (e.target.id == 3) {
        (this.price1 = 4000), (this.price2 = 8000);
      } else if (e.target.id == 4) {
        (this.price1 = 8000), (this.price2 = 15000);
      } else if (e.target.id == 5) {
        (this.price1 = 15000), (this.price2 = 30000);
      } else if (e.target.id == 6) {
        (this.price1 = 30000), (this.price2 = 50000);
      } else if (e.target.id == 7) {
        (this.price1 = 50000), (this.price2 = 100000);
      } else if (e.target.id == 8) {
        (this.price1 = 100000), (this.price2 = "");
      }
    },
    selete3(id, e) {
      this.$set(this.total, 2, e.target.id);
    },
    selete4(id, e) {
      this.$set(this.total, 3, e.target.id);
    },
    selete5(id, e) {
      this.$set(this.total, 4, e.target.id);
      if (e.target.id == 1) {
        (this.cc1 = 0), (this.cc2 = 200);
      } else if (e.target.id == 2) {
        (this.cc1 = 200), (this.cc2 = 400);
      } else if (e.target.id == 3) {
        (this.cc1 = 400), (this.cc2 = "");
      } else if (e.target.id == 4) {
        (this.cc1 = ""), (this.cc2 = "");
      }
    },
    //价格input框输入
    c_price() {
      this.$set(this.total, 1, 0);
    },
    c_cc() {
      this.$set(this.total, 4, 4);
    },
    //获取首页紫砂壶数据
    home_data() {
      var $this = this;
      ++$this.page;
      $this
        .$post($this.$api.classid_goodslist, {
          id: 708,
          no: 10,
          page: $this.page, //
          type: $this.type, //
        })
        .then((data) => {
          if (data.data.goods.length == 0) {
            $this.isShow = false;
            $this.isHide = true;
            return false;
          }
          console.log(data);
          this.HeaderCon_goods_day.push(...data.data.goods);
          // $this.HeaderCon_goods_day = $this.HeaderCon_goods_day.concat(
          //   data.data.goods
          // );
        });
    },
    // ios 调 版本信息
    ba_JumpVC() {
      window.webkit.messageHandlers.getAppInfo.postMessage();
    },
    // ios 版本信息返回
    getApplicationInfo(version, appVersion, Mobile, distUid) {
      var version = version; // 设备版本号
      var appVersion = appVersion; // app版本号
      var Mobile = Mobile; // 手机系统
      var distUid = distUid; // dist版本

      alert("设备版本号=========" + version);
      alert("app版本号=========" + appVersion);
      alert("手机系统=========" + Mobile);
      alert("dist版本=========" + distUid);
    },

    // commits 创建询问
    commits(v) {
      var $this = this;
      // 首页底部分类1
      $this
        .$post($this.$api.create_enquiry, {
          token: localStorage.getItem("token"),
          goods_id: v.id,
        })
        .then((data) => {
          if (data.code == 200) {
            swal("询价" + data.data);
          } else if (data.code == 500) {
            swal(data.msg, "请稍等……");
          } else if (data.code == 400) {
            swal("询价" + data.msg, "请稍等……");
          }
        });
    },
    // 添加购物车
    addCart(value) {
      if (localStorage.getItem("token") == null) {
        var href = window.location.href;
        var str = href.split("#");
        var rouit = str[0] + "#/login";
        // 调安卓
        window.android.meto_goback(rouit, "false", "false");
      } else {
        var $this = this;
        $this
          .$post($this.$api.add_cart, {
            token: localStorage.getItem("token"),
            goods_name: value.goods_name,
            goods_spec: 0,
            storeid: value.store_id,
            id: value.id,
            seller_id: value.seller_id,
            store_name: value.store_name,
            user_id: value.user_id,
            goods_master_image: value.goods_master_image,
            goods_price: value.goods_price,
            buy_num: 1,
            type: "cart",
          })
          .then((data) => {
            if (data.code == 500) {
              swal(data.msg);
            } else if (data.code == 200) {
              // $this.cartList = data.data;
              // 待优化
              swal({
                title: data.msg,
              }).then((willDelete) => {
                if (willDelete) {
                  // this.$router.go(0);
                }
              });
            }
          });
      }
    },
    // 跳商品详情
    selectItem(item) {
      this.$router.push({
        path: `/home/indexdetails/${item.id}`,
      });
    },
    // 跳列表
    selectItemL(item) {
      if (item.type == 1) {
        this.$router.push({
          path: `/home/listdetails/${item.id}`,
        });
      } else if (item.type == 2) {
        // 泥料
        return;
        this.$router.push({
          path: `/find/nl_index`,
          // path: `/payment/mud`
        });
      } else if (item.type == 3) {
        // 壶型
        return;
        this.$router.push({
          // path: `/payment/urceolate`
          path: `/find/hx_index`,
        });
      } else if (item.type == 4) {
        // 百科
        return;
        this.$router.push({
          path: `/find`,
          // path: `/payment/ency`
        });
      } else if (item.type == 5) {
        swal("功能正在研发中………", "请稍等……");
        // this.$router.push({
        //     path: `/payment/videocation`
        // })
      } else if (item.type == 6) {
        swal("功能正在研发中………", "请稍等……");
        // this.$router.push({
        //     path: `/payment/appreciation`
        // })
      } else if (item.type == 7) {
        return;
        this.$router.push({
          path: `/find/yr_index`,
        });
      }
    },
    // 搜索引擎
    selectItemS() {
      var href = window.location.href;
      var str = href.split("#");
      var rouit = str[0] + "#/home/suo1";

      window.android.meto_goback(rouit, "false", "false");
      // if(res.code == 200){
      //     window.location.href= str[0] + 'sell/receipt';
      // }
      // this.$router.push({
      //     path: `/home/suo1`
      // })
    },
    // 跳直播
    ff() {
      this.$router.push({
        path: `/home/createlive`,
      });
    },
    // 跳回收页面
    back_go_recovery() {
      var href = window.location.href;
      var str = href.split("#");
      if (localStorage.getItem("token") == null) {
        var rouit = str[0] + "#/login";
        window.android.meto_goback(rouit, "false", "false");
      } else {
        this.$router.push({
          path: `/home/recovery`,
        });
      }
    },
  },

  deactivated() {
    // keep-alive 组件停用时调用（简单理解为组件离开的时候）。
    // var scroll = document.body.scrollTop || document.documentElement.scrollTop || window.pageXOffset
    console.log(document.body.scrollTop);
  },
};
</script>

<style scoped lang="scss">
//  /* 引入 基础 scss */
@import "../../assets/sass/base.scss";
@import "../../assets/sass/Index.scss";
// @import '../assets/sass/IndexCommon.scss';
.index {
  //筛选弹出框样式
  & >>> .van-popup {
    z-index: 9999 !important;
    .p_header {
      position: relative;
      z-index: 2;
      background-color: #fff;
      top: 0;
      height: rem(128px);
      padding-top: rem(40px);
      text-align: center;
      font-size: rem(38px);
      font-weight: bold;
      .t {
        position: relative;
        line-height: rem(88px);
        .to_a {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          font-size: rem(36px);
          padding: 0 rem(32px);
        }
      }
    }
    .p_body {
      position: absolute;
      top: 0;
      overflow-y: scroll;
      width: 100%;
      height: 100%;
      padding: rem(173px) 0 rem(128px) rem(32px);
      color: #999;
      font-size: rem(28px);
      .a {
        margin-bottom: rem(32px);
      }
      .b {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-right: rem(30px);
        margin-bottom: rem(48px);
        span {
          display: inline-block;
          width: rem(160px);
          height: rem(88px);
          text-align: center;
          line-height: rem(88px);
          border-radius: rem(10px);
          border: rem(1px) solid #999;
          margin-bottom: rem(16px);
        }
      }
      .c {
        margin-bottom: rem(32px);
        position: relative;
        input {
          width: rem(251px);
          height: rem(88px);
          text-align: center;
          font-size: rem(28px);
          color: #333;
          border-radius: rem(88px);
          border: none;
          background-color: #eee;
          outline: none;
          margin-right: rem(54px);
        }
        i {
          position: absolute;
          width: rem(22px);
          height: rem(1px);
          background-color: #707070;
          left: rem(267px);
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .bb {
        margin-bottom: 156px;
      }
      .active {
        border: none !important;
        color: #fff;
        background-color: #f44647;
      }
    }
    .btn_box {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: rem(128px);
      background-color: #fff;
      .btn {
        width: rem(520px);
        line-height: rem(85px);
        text-align: center;
        background-color: #f44647;
        color: #fff;
        margin: 0 auto;
        font-size: rem(32px);
        letter-spacing: rem(2px);
      }
    }
  }
}
#swiper_one {
  width: 100%;
  height: 100%;
  overflow: visible !important;
  .swiper-pagination {
    bottom: rem(10px);
  }
}
.swiper-slide {
  width: rem(686px);
  img {
    display: block;
    width: 100%;
    height: 100%;
    // border-radius: rem(20px);
  }
}
.main_list_con_child {
  & >>> .infinite-loading-container {
    .infinite-status-prompt {
      .loading-default {
        margin-top: rem(16px);
        width: rem(48px);
        height: rem(48px);
      }
    }
  }
  .main_nav {
    > div {
      padding: 0 rem(30px);
    }
  }
}
.el-tabs__header {
  margin-top: rem(20px);
}
.el-tabs__nav-scroll {
  height: rem(110px);
  line-height: rem(110px);
}
.el-tabs__nav {
  width: 100%;
  height: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: rem(20px);
  box-sizing: border-box;
}
.el-tabs__item {
  font-size: rem(35px);
}
.el-tabs__active-bar {
  left: rem(20px) !important;
}
.datainfo {
  width: 100%;
  text-align: center;
  font-size: rem(30px);
  line-height: rem(80px);
  color: #333;
  float: left;
  margin-top: rem(20px);
}
.footers {
  margin-top: rem(40px);
  margin-bottom: 0;
}
</style>
