<template>
  <div class="suo-wrpper" style="background: #fff">
    <div class="search_header">
      <div class="to_a iconfont iconzuo" @click="goback"></div>
      <div class="ipt">
        <input type="text" placeholder="请输入搜索关键字" v-model="mesg"  /> <!--@focus="ipt_focus" @blur="ipt_blur" -->
        <img class="f" :src="srcPath + 'f_search.png'" alt="" />
        <img v-show="mesg != ''" class="x" :src="srcPath + 'xxx.png'" @click="empty">
      </div>
      <div class="search_now" @click="submit()">搜索</div>
    </div>
    <div class="s_main commons_mainsContoApp">
          <div class="sousuo-pp" v-if="!is_focus">
      <div class="title">
        历史搜索
        <img
          :src="srcPath + 'i_s_delete.png'"
          alt=""
          @click="remove()"
          v-if="search_hostiry.length != 0"
        />
      </div>
      <div class="ls_cart clearfix">
        <span
          class="items"
          v-for="(v, k) in search_hostiry"
          :key="k"
          @click="suo_bd(v)"
          >{{ v }}</span
        >
      </div>

      <div class="title">搜索发现 <img :src="srcPath + 'i_s_hot.png'" class="hot"> </div>
      <div class="ls_cart clearfix">
        <span
          class="items"
          v-for="(v, k) in sou_tj"
          :key="k"
          @click="suo_tj(v)"
          >{{ v.name }}</span
        >
      </div>
    </div>
    <div v-else class="other">
      <!-- <van-sticky offset-top="1.5866666rem"> -->
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
      <!-- </van-sticky> -->
      <div class="s_goods">
        <div class="goods_box"  v-if="search_show">
          <div class="item" v-for="(a, b) in hx_list" :key="b" @click="goods_d(a.id)">
            <img :src="a.goods_master_image" alt=""  />
            <div class="item_comn">
            <strong>{{ a.goods_name }}</strong>
            <span>{{ a.author }}</span>

            <div class="pp_con" v-if="a.goods_type == 0">
              <dd>￥????</dd>
            </div>
            <div class="pp_con" v-else>
              <dd>￥{{ Math.round(a.goods_price) }}</dd>
            </div>
          </div>
        </div>
        </div>
        <div class="none" v-else>
          <img src="http://res.pinjianapp.com/vue_wap/images/none.png" >
          <p>没有搜索到关于 “{{this.history}}” 的相关壶型</p>
        </div>
      </div>
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

  </div>
</template>

<script>
import store from "@/store/store.js";
export default {
  name: "Find",
  data() {
    return {
      sou_name: "",
      srcPath: "http://res.pinjianapp.com/vue_wap/images/index/", //配置地址
      ben_List: [],
      ben_souList: [],
      sou_tj: [],
      is_focus: false, //是否点击了输入框
      mesg: '', //搜索框输入
      type: 3, 
            //筛选页
      price1: 0,
      price2: 0,
      cc1: 0,
      cc2: 0,
      total: [],
      show: false,  //弹出层显示与隐藏
      hx_list: [], //搜所出的数据
      search_show: true,
      search_hostiry: [] //搜索历史
    };
  },
  store,
  // 计算属性
  computed: {
    store: function () {
      return this.$store.state;
    },
  },
  mounted() {
    var $this = this;
    $this.sub_quzhi();
    // 推荐列表
    $this.$post($this.$api.recommended, {}).then((data) => {
      $this.sou_tj = data.data;
    });
    this.search_hostiry.push(...JSON.parse(localStorage.getItem('search_hostiry')))
    // search_technical
  },
  methods: {
    goback() {
      this.is_focus = false
      localStorage.setItem('search_hostiry', JSON.stringify(this.search_hostiry))
      this.$router.back()
    },
    remove() {
      this.search_hostiry = []
      this.sub_quzhi();
    },
    // 销毁上一层
    prev() {
      window.android.goback();
      //   this.$router.push({
      //       path: `/index`
      //   })
    },
    // ipt_focus() {
    //   this.is_focus = true
    // },
    //  ipt_blur() {
    //   this.is_focus = true
    // },
    search() {  //点击搜索
      if(this.mesg == '') {
        this.$toast('请输入内容！')
        this.is_focus = false
        return false
      }
      this.$post(this.$api.search_to,{name:this.mesg,type:'goods'}).then(data => {
        this.hx_list = data.data.data;
        if(this.hx_list.length == 0) {
          this.is_focus = false
          this.$toast('没有搜索到相关商品')
        } else {
          this.is_focus = true
        }
        this.mesg = ''

      });
    },
    empty() {  //清空搜索框
      this.mesg = ''
    },
        //跳转具体信息
    goods_d(id) {
      this.$router.push({
        path: '/home/indexdetails/' + id
      })
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
    /// 本地历史记录
    sub_quzhi() {
      var $this = this;
      if (localStorage.getItem("ben_souList") == null) {
        $this.ben_souList = [];
        $this.ben_List = [];
      } else {
        $this.ben_souList = JSON.parse(localStorage.getItem("ben_souList"));
        $this.ben_List = JSON.parse(localStorage.getItem("ben_souList"));
      }
    },
    /// 搜索提交
    submit() {
      if(this.mesg != '') {
        this.search_hostiry.push(this.mesg)
      }
      this.search()
    },
    show_sheet() {
      this.show = true; //显示弹出层
    },
    hide_p() {
      this.show = false; //隐藏弹出层
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/base.scss";
// @import '../../assets/sass/IndexCommon.scss';
.suo-wrpper {
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
.search_header {
  position: fixed;
  top: 0;
  display: flex;
  z-index: 3;
  box-sizing: content-box;
  width: 100%;
  padding: rem(49px) rem(28px) 0 rem(20px);
  height: rem(70px);
  line-height: rem(70px);
  background-color: #fff;
  .to_a {
    font-size: rem(30px);
    padding-right: rem(20px);
  }
  .ipt {
    position: relative;
    width: rem(570px);
    height: rem(70px);
    border-radius: rem(70px);
    overflow: hidden;
    input {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background-color: #f8f8f8;
      padding-left: rem(104px);
      font-size: rem(28px);
    }
    .f {
      position: absolute;
      left: rem(32px);
      top: 50%;
      transform: translateY(-50%);
      width: rem(40px);
      height: rem(39px);
    }
    .x {
      width: rem(70px);
      height: rem(70px);
      position: absolute;
      // top: 0;
      right: rem(0px);
    }
  }
  .search_now {
    font-size: rem(28px);
    color: #333333;
    height: rem(70px);
    padding-left: rem(24px);
  }
}

.sousuo-pp {
  padding: 0 rem(28px) rem(30px) rem(32px);
  .title {
    margin-top: rem(40px);
    height: rem(45px);
    font-size: rem(32px);
    font-weight: bold;
    line-height: rem(45px);
    color: #333333;
    display: flex;
    img {
      display: block;
      box-sizing: content-box;
      width: rem(24px);
      height: rem(24px);
      margin-left: auto;
      padding: rem(10px);
    }
    .hot {
      width: rem(30px);
      height: rem(37px);
      vertical-align: middle;
      margin-left: rem(16px);
      padding: 0;
    }
  }
  .ls_cart {
    max-height: rem(340px);
    overflow: hidden;
    .items {
      display: block;
      height: rem(61px);
      line-height: rem(40px);
      font-size: rem(28px);
      font-family: font_pc;
      font-weight: 400;
      color: #333333;
      background: rgba(246, 246, 246, 1);
      border-radius: rem(20px);
      padding: rem(11px) rem(25px);
      float: left;
      margin-right: rem(10px);
      margin-top: rem(20px);
    }
  }
}
.other {
  //  &>>>.van-sticky--fixed {
  //     //  padding: 0 rem(32px);
  //      background-color: #fff;
  //  }
  position: relative;
   .main_nav {
      position: fixed;
      top: rem(119px);
       display: flex;
       justify-content: space-between;
       width: 100%;
       height: rem(96px);
       line-height: rem(96px);
       border-bottom: rem(1px) solid #eee;
       margin-bottom: rem(18px);
       background-color: #fff;
       padding: 0 rem(32px);
       span {
           font-size: rem(28px);
           color: #999;
       }
       .main_nav_b {
        img {
            width: rem(14px);
            height: rem(23px);
            margin-left: rem(12px);
        }
       }
       .main_nav_c {
           margin-right: rem(20px);
           img {
               width: rem(14px);
               height: rem(23px);
               margin-left: rem(12px);
           }
       }
       .main_nav_d {
           img {
               width: rem(35px);
               height: rem(42px);
               margin-left: rem(7px);
               vertical-align: middle;
           }
       }
       .active {
           color: #F44647;
       }
   }
   .s_goods {

      padding: rem(96px) rem(32px) 0;
      .goods_box {
              display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
            .item {
      width: rem(332px);
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px rem(6px) rem(20px) rgba(0, 0, 0, 0.1);
      opacity: 1;
      overflow: hidden;
      margin-top: rem(22px);
      img {
        display: block;
        width: 100%;
        height: rem(332px);
      }
      .item_comn {
        height: rem(180px);
        width: 100%;
        padding: rem(20px) rem(30px) 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        strong {
          font-size: rem(30px);
          height: rem(42px);
          line-height: rem(42px);
          color: #000;
          font-weight: bold;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        span {
          display: block;
          font-size: rem(25px);
          color: #666;
          font-weight: 400;
          height: rem(36px);
          line-height: rem(36px);
          margin-top: rem(5px);
        }
        .pp_con {
          margin-top: rem(10px);
          display: flex;
          dd {
            font-size: rem(31px);
            color: #fd3b38;
            font-weight: bold;
            margin-top: rem(10px);
          }
          dt {
            width: rem(61px);
            height: rem(61px);
            background: rgba(203, 72, 72, 1);
            border-radius: 50%;
            margin-left: auto;
            margin-top: rem(-15px);
            position: relative;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
      }

   }
}
</style>