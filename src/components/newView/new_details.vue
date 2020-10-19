<template>
  <div class="Indexdetails clearfix">
    <div class="Indexdetails-main">
      <loading v-if="loading"></loading>
      <!-- 主图 -->
      <div class="main_topImg">
        <div class="swiper-container" id="swiper_one">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(a, b) in params.goods_images"
              :key="b"
            >
              <img :src="a" class="imgs" />
            </div>
          </div>
        </div>

        <div class="go_fanhui" @click="bacssk()">
          <img
            src="../../assets/images/Index_Img/6b9589a9f62235faa51c89f68ae447b.png"
            alt=""
          />
        </div>
      </div>
      <!-- 商品介绍 -->
      <div class="detail_top">
        <div class="detail_title">
          <div class="title_left">
            <h3>{{ params.goods_name }}</h3>
            <span>{{ params.name }}</span>
          </div>
          <div class="title_right">
            <img src="http://res.pinjianapp.com/vue_wap/images/r_money.png" alt="">
            <i>{{ params.goods_price }}</i>
          </div>
        </div>
        <div class="detail_ref">
          {{params.works_describe}}
        </div>
        <div class="share">
          <img src="@/assets/images/share.png" alt="" />
          <span>分享匠心好物分享，匠心好物分享匠心</span>
        </div>
      </div>
      <div class="service">
        <div>
          <img src="~@/assets/images/gou.png" alt="" />
          <span>正品保障</span>
        </div>
        <div>
          <img src="~@/assets/images/gou.png" alt="" />
          <span>七天无理由退货</span>
        </div>
        <div>
          <img src="~@/assets/images/gou.png" alt="" />
          <span>全国包邮</span>
        </div>
        <div>
          <img src="~@/assets/images/gou.png" alt="" />
          <span>一对一客服</span>
        </div>
      </div>
      <!-- 商品评价 -->      <!-- 功能以后开通！！！ -->   
      <!-- <div class="comment">
        <div class="com_title">
          <div class="com_title_left">
            <h3>商品评价</h3>
            <span>200+</span>
          </div>
          <div class="com_title_right">
            <span>查看全部</span>
            <img src="~@/assets/images/arrow.png" alt="" />
          </div>
        </div>
        <div class="user_info">
          <div class="suer_name">
            <img src="~@/assets/images/c5.png" alt="" />
            <span>胡古月</span>
          </div>
          <div class="user_date">
            <span>两天前</span>
          </div>
        </div>
        <div class="com_msg">
          包装的很好很完整，发货也快，休息日可以喝起来了包装的
          很好很完整，发货也快，休息日可以喝起来了
        </div>
        <div class="com_img"></div>
      </div> -->
      <!-- 商品详情 -->
      <div class="goods_info">
        <div class="goods_title">
          <div class="goods_title_left">
            <h3>详情</h3>
          </div>
        </div>
        <div class="goods_para">作品参数</div>
        <ul>
          <li>
            <span>作者</span> <span>{{ params.name }}</span>
          </li>
          <li>
            <span>泥料</span> <span>{{ params.pot_name }}</span>
          </li>
          <li>
            <span>壶型</span> <span>{{ params.capacity_name }}</span>
          </li>
          <li><span>制作工艺</span> <span>{{params.process}}</span></li>
          <li>
            <span>容量</span> <span>{{ params.capacityid }}</span>
          </li>
          <li>
            <span>编号</span> <span>{{ params.goods_no }}</span>
          </li>
        </ul>
        <div class="goods_ref">
          <div class="title">{{ params.goods_name }}</div>
          <div class="content">
            {{params.works_describe}}
          </div>
        </div>
        <div class="goods_author_ref">
          <div class="title">{{ params.name }}</div>
          <div class="content">  
            {{params.introduce || '暂无作者介绍！'}}
          </div>
        </div>
      </div>
      <div class="goods_img">
        <img
          v-for="(item, i) in params.goods_images"
          :src="item"
          alt=""
          :key="i"
        />
      </div>
      <!-- 底部栏 -->
      <div class="goods_bottom">
        <div class="bottom_left">
          <div class="serve" @click="guanzu(1)">
            <img src="../../assets/images/Index_Img/liaotian.png" alt="" />
            <p>客服</p>
          </div>
          <div class="collent" @click="guanzu(params.is_status)">
            <img v-show="params.is_status == 0" :src="srcPath + 'soucang.png'" alt="" />
            <p v-show="params.is_status == 0">收藏</p>
            <img v-show="params.is_status == 1" :src="srcPath + 'souchang_1.png'" alt="" />
            <p v-show="params.is_status == 1">已收藏</p>
          </div>
        </div>
        <div class="tan_eu" v-if="mi_hide">
          {{mesg}}
      </div>
        <div class="bottom_right">
          <div class="add_cart" @click="addCart()">加入购物车</div>
          <div class="buy_now" @click="crtami()">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Common/Loading_t";
import store from "@/store/store.js";
// 引入 Swipter 组件
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "selection",
  data() {
    return {
      params_id: "", // 商品ID
      srcPath: "http://res.pinjianapp.com/vue_wap/images/index/", //配置地址
      params: [],
      SJrandom: [],
      IdArrayTrue: [],

      is_rouid: "",
      mi_hide: false,
      mesg: "",
      type: 0,
      loading: true,
    };
  },
  components: {
    Loading,
  },
  store,
  computed: {
    store: function () {
      return this.$store.state;
    },
  },
  // 页面创建前
  //   created () {
  //     this.params_id = this.$route.params.id;
  //       console.log(this.params_id)
  //   },
  updated() {
    $(".main_com_lits_IMgto").find("img").css("width", "100%");
  },
  // 页面加载后
  mounted() {
    // 详情信息   // 0 未关注 1 已关注
    var $this = this;
    $this.oAtrue();
  },
  // 方法区域
  methods: {
    // 数据初始化
    oAtrue() {
      var $this = this;
      $this.params_id = $this.$route.params.id;
      console.log($this.params_id);
      var token = localStorage.getItem("token");
      $this
        .$post($this.$api.HeaderCon_goods_info, {
          id: $this.params_id,
          token: token,
        })
        .then((data) => {
          $this.params = data.data[0];
          this.$nextTick(() => {
            var swiper = new Swiper("#swiper_one", {
              direction: "horizontal",
              initialSlide: 0,
              autoplay: {
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
              },
              centeredSlides: true,
              spaceBetween: 20,
              observer: true,
              observeParents: true,
              loop: true,
            });
          });
          $this.loading = false;
        });
    },

    // 返回
    bacssk() {
      this.$router.back();
      // var ristou = localStorage.getItem('get_Android_rouit');
      // if(ristou == 'Mi'){
      //   this.$router.replace({
      //     path: `/Mi`
      //   });
      // }else if(ristou == 'Index'){
      //   this.$router.replace({
      //     path: `/index`
      //   });
      // }else if(ristou == 'Cart'){
      //   this.$router.replace({
      //     path: `/cart`
      //   });
      // }else if(ristou == 'listdetails'){
      //   localStorage.setItem('get_Android_rouit',localStorage.getItem('get_Android_prev'));
      //   localStorage.removeItem('get_Android_prev');
      //   this.$router.replace({
      //     path: `/home/listdetails/${localStorage.getItem('get_Android_rouitid')}`
      //   });
      // }else if(ristou == 'collection'){
      //   localStorage.removeItem('get_Android_rouit');
      //   this.$router.replace({
      //     path: `/mi/collection`
      //   });
      // }else{
      //    this.$router.replace({
      //     path: `/index`
      //   });
      // }
    },
    nexyt() {
      this.$router.replace({
        path: `/home/customerservice/${this.params_id}`,
      });
      // alert('功能正在接入…………');
    },
    selectItem(item) {
      var $this = this;
      this.$router.replace({
        path: `/home/indexdetails/${item.id}`,
      });
      $this.params_id = $this.$route.params.id;
      $this
        .$post($this.$api.HeaderCon_goods_info, { id: $this.params_id })
        .then((data) => {
          $this.params = data.data[0];
        });

      $this.$post($this.$api.HeaderCon_goods_SJrandom, {}).then((data) => {
        $this.SJrandom = data.data;
      });
    },

    // 添加购物车
    addCart() {
      if (localStorage.getItem("token") == null) {
        var href = window.location.href;
        var str = href.split("#");
        var rouit = str[0] + "#/login";
        window.android.meto_goback(rouit, "false", "false");
      } else {
        var $this = this;
        console.log($this.params);

        $this
          .$post($this.$api.add_cart, {
            token: localStorage.getItem("token"),

            goods_name: $this.params.goods_name,

            goods_spec: 0,

            storeid: $this.params.store_id,

            id: $this.params.id,

            seller_id: $this.params.seller_id,

            store_name: $this.params.store_name,

            user_id: $this.params.user_id,

            goods_master_image: $this.params.goods_master_image,

            goods_price: $this.params.goods_price,

            buy_num: 1,
          })
          .then((data) => {
            if (data.code == 500) {
              alert(data.msg);
            } else if (data.code == 200) {
              // swal("加入购物车成功", "susses");
              this.$toast('加入购物车成功！')
            }
          });
      }
    },

    // 购买
    crtami() {
      // this.$router.replace({
      //   path: `/payment/paymentlist/${this.params.id}/6/1`
      // });
      if (localStorage.getItem("token") == null) {
        var href = window.location.href;
        var str = href.split("#");
        var rouit = str[0] + "#/login";
        // 调安卓
        window.android.meto_goback(rouit, "false", "false");
      } else {
        // var href  = window.location.href;
        // var str = href.split("#");
        // var rouit = str[0] + '#/payment/paymentlist/' + this.params.id +'/6/1';
        // window.android.meto_goback(rouit,'false','true');

        this.$router.push({
          path: `/payment/paymentlist/${this.params.id}/6/1`,
        });
      }
      // var sds = this.params_id;
      // this.IdArrayTrue.push(JSON.parse(this.params_id));
      // this.$store.commit('changeIdArray',this.IdArrayTrue)
      // localStorage.setItem('get_shangpin_id',this.params_id);
      // id  1
      // user_id  3
    },

    // 收藏
    guanzu(val) {
      var $this = this;
      if (localStorage.getItem("token") == null) {
        this.$router.push({
          path: `/login`
        });
      } else {
        if (val == 0) {
          $this
            .$post($this.$api.fav_istrue2, {
              token: localStorage.getItem("token"),
              mix_id: this.params_id,
              is_type: 0,
            })
            .then((data) => {
              $this.params.is_status = 1;
              $this.mi_hide = true;
              $this.mesg = "已收藏";
            });
        } else {
          $this
            .$post($this.$api.fav_istrue2, {
              token: localStorage.getItem("token"),
              mix_id: this.params_id,
              is_type: 0,
            })
            .then((data) => {
              $this.params.is_status = 0;
              $this.mi_hide = true;
              $this.mesg = "已取消收藏";
            });
        }
        setTimeout(function () {
          $this.mi_hide = false;
        }, 1000);
      }
    },
  },
  activated() {
    this.oAtrue();
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/sass/base.scss";

.Indexdetails {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  margin-bottom: rem(102px);
  .Indexdetails-main {
    width: 100%;

    margin: 0 auto;
    background: #f8f8f8;
    .main_topImg {
      width: 100%;
      height: rem(750px);
      position: relative;
      overflow: hidden;
      .imgs {
        display: block;
        width: 100%;
        height: 100%;
      }
      .go_fanhui {
        width: rem(56px);
        height: rem(56px);
        border-radius: 50%;
        z-index: 99;
        position: fixed;
        top: rem(61px);
        left: rem(32px);
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .detail_top {
      width: 100%;
      height: rem(444px);
      box-sizing: border-box;
      padding: rem(40px) rem(32px) 0 rem(32px);
      .detail_title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: rem(50px);
        line-height: rem(50px);
        .title_left {
          h3 {
            display: inline-block;
            font-size: rem(50px);
            color: #000;
            font-weight: 700;
            margin-right: rem(26px);
          }
          span {
            font-size: rem(32px);
            color: #666;
          }
        }
        .title_right {
          img {
            width: rem(12px);
            height: rem(20px);
            // vertical-align: rem(3px);
          }
          i {
            font-size: rem(38px);
            color: #f44647;
          }
        }
      }
      .detail_ref {
        width: 100%;
        height: rem(146px);
        margin-top: rem(32px);
        font-size: rem(26px);
        color: #666;
        line-height: 1.5;
      }
      .share {
        width: rem(584px);
        height: rem(50px);
        line-height: rem(50px);
        // text-align: center;
        border-radius: rem(50px);
        border: rem(1px) solid #e8c396;
        color: #e8c396;
        margin: rem(64px) auto 0;
        img {
          width: rem(30px);
          height: rem(29px);
          margin-left: rem(21px);
          margin-right: rem(21px);
          vertical-align: middle;
        }
      }
    }
    .service {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: rem(104px);
      background-color: #242424;
      box-sizing: border-box;
      border-radius: rem(10px) rem(10px) 0px 0px;
      padding-left: rem(33px);
      padding-top: rem(16px);
      div {
        height: rem(28px);
        line-height: rem(28px);
        color: #e8c396;
        font-size: rem(24px);
        padding-right: rem(48px);
        img {
          width: rem(28px);
          height: rem(28px);
          vertical-align: middle;
        }
      }
    }
    //评价
    .comment {
      width: 100%;
      height: rem(576px);
      // background-color: pink;
      margin-top: rem(20px);
      box-sizing: border-box;
      padding: rem(39px) 0 rem(41px) rem(32px);
      background-color: #fff;
      .com_title {
        position: relative;
        display: flex;
        width: 100%;
        height: rem(43px);
        line-height: rem(43px);
        padding-right: rem(45px);
        justify-content: space-between;
        // background-color: red;
        &::after {
          content: "";
          position: absolute;
          width: rem(11px);
          height: 100%;
          top: 0;
          left: 0;
          background: linear-gradient(
            180deg,
            #f44647 0%,
            rgba(244, 70, 71, 0.24) 100%
          );
        }

        .com_title_left {
          margin-left: rem(26px);
          h3 {
            display: inline-block;
            font-size: rem(32px);
            font-weight: 700;
            margin-right: rem(20px);
          }
          span {
            font-size: rem(24px);
            color: #666;
          }
        }
        .com_title_right {
          font-size: rem(26px);
          color: #f44647;
          letter-spacing: rem(3px);
          img {
            width: rem(11px);
            height: rem(21px);
            margin-left: rem(21px);
          }
        }
      }
      .user_info {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: rem(80px);
        line-height: rem(80px);
        // background-color: pink;
        margin-top: rem(39px);
        padding-right: rem(50px);
        .suer_name {
          img {
            width: rem(80px);
            height: rem(80px);
            border-radius: 50%;
            vertical-align: middle;
            margin-right: rem(30px);
          }
          span {
            font-size: rem(28px);
            color: #333;
            font-weight: 500;
          }
        }
        .user_date {
          font-size: rem(24px);
          color: #999;
        }
      }
      .com_msg {
        width: 100%;
        height: rem(70px);
        margin-top: rem(24px);
        font-size: rem(26px);
        color: #333;
        line-height: 1.5;
      }
      .com_img {
        width: 100%;
        height: rem(200px);
        margin-top: rem(40px);
        background-color: red;
      }
    }
    //商品详情
    .goods_info {
      width: 100%;
      // height: rem(1374px);
      margin-top: rem(16px);
      background-color: #fff;
      box-sizing: border-box;
      padding: rem(40px) 0 0 0;
      .goods_title {
        position: relative;
        display: flex;
        width: 100%;
        height: rem(43px);
        line-height: rem(43px);
        padding-right: rem(45px);
        justify-content: space-between;
        padding-left: rem(32px);
        // background-color: red;
        &::after {
          content: "";
          position: absolute;
          width: rem(11px);
          height: 100%;
          top: 0;
          left: rem(32px);
          background: linear-gradient(
            180deg,
            #f44647 0%,
            rgba(244, 70, 71, 0.24) 100%
          );
        }
        .goods_title_left {
          margin-left: rem(26px);
          h3 {
            display: inline-block;
            font-size: rem(32px);
            font-weight: 700;
            margin-right: rem(20px);
          }
        }
      }
      .goods_para {
        font-size: rem(26px);
        margin-top: rem(21px);
        margin-bottom: rem(16px);
        padding-left: rem(32px);
      }
      ul {
        li {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: rem(100px);
          line-height: rem(100px);
          padding-left: rem(61px);
          padding-right: rem(62px);
          font-size: rem(28px);
          color: #999;
          &:nth-child(2n) {
            background-color: #f6f6f6;
          }
          span {
            &:last-child {
              color: #666;
            }
          }
        }
      }
      .goods_ref,
      .goods_author_ref {
        width: 100%;
        padding: 0 rem(37px) rem(38px);
        .title {
          font-size: rem(32px);
          font-weight: 700;
          margin-bottom: rem(22px);
        }
        .content {
          font-size: rem(26px);
          color: #666;
          letter-spacing: rem(2px);
          line-height: 1.5;
        }
      }
      .goods_ref {
        padding-top: rem(94px);
      }
      .goods_author_ref {
        padding-bottom: rem(120px);
      }
    }
    .goods_img {
      img {
        width: 100%;
      }
    }
    .goods_bottom {
      position: fixed;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      width: 100%;
      height: rem(102px);
      background-color: #fff;
      padding-left: rem(32px);
      img {
        display: block;
        margin: 0 auto;
        width: rem(40px);
        height: rem(40px);
        margin-top: rem(14px);
        margin-bottom: rem(12px);
      }
      .bottom_left,
      .bottom_right {
        display: flex;
      }
      .serve {
        width: rem(102px);
        margin-right: rem(32px);
        text-align: center;
      }
      .collent {
        width: rem(102px);
        text-align: center;
        margin-right: rem(32px);
      }
      .add_cart,
      .buy_now {
        width: rem(230px);
        height: rem(102px);
        line-height: rem(102px);
        text-align: center;
        font-size: rem(28px);
        font-weight: 700;
        letter-spacing: rem(3px);
      }
      .add_cart {
        background-color: #e8c396;
        color: #000;
      }
      .buy_now {
        background-color: #f44647;
        color: #fff;
      }
    }
    .main_topCon {
      margin-top: rem(13px);
      padding: rem(20px) rem(32px) rem(27px);
      background: #fff;
      .name {
        font-size: rem(30px);
        margin-top: rem(2px);
        p {
          float: left;
          width: 50%;
          margin-bottom: rem(20px);
          font-size: rem(26px);
          color: rgba(102, 102, 102, 1);
          text-align: left;
          font-weight: 400;
        }
        .rl,
        .bh {
          margin-bottom: 0;
        }
      }
      .color {
        font-size: rem(26px);
        color: rgba(102, 102, 102, 1);
        text-align: left;
        font-weight: 400;
      }
    }
    .main_con {
      width: 100%;
      h2 {
        height: rem(40px);
        line-height: rem(40px);
        text-align: center;
        margin-top: rem(40px);
        span {
          font-size: rem(28px);
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          position: relative;
        }
        span:before {
          position: absolute;
          content: "";
          width: rem(103px);
          height: rem(1px);
          top: 50%;
          left: rem(-146px);
          background: rgba(153, 153, 153, 1);
        }
        span:after {
          position: absolute;
          content: "";
          width: rem(103px);
          height: rem(1px);
          top: 50%;
          right: rem(-146px);
          background: rgba(153, 153, 153, 1);
        }
      }
      .zpms-con {
        padding: 0 rem(25px);
        font-size: rem(26px);
        line-height: rem(40px);
        color: rgb(0, 0, 0);
        letter-spacing: rem(2px);
        margin: rem(25px) 0 rem(36px);
      }

      .main_com_lits_IMgto {
        width: 100%;
        margin: rem(20px) 0 rem(110px);
        .img {
          display: block;
          width: 100%;
        }
      }
    }
  }
}

.tan_eu {
  padding: 0 rem(30px);
  height: rem(60px);
  line-height: rem(60px);
  border-radius: rem(60px);
  position: fixed;
  bottom: rem(200px);
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, .5);
  text-align: center;
  color: #fff;
  font-size: rem(30px);
}
</style>
