<template>
  <div class="Author clearfix">
    <div class="cover">
      <div class="to_a iconfont iconzuo" @click="back()"></div>
      <img class="bg" :src="params.thumb" />
      <img :src="params.thumb" class="avatar" />
    </div>
    <div class="author_title">
      <div class="collect">
        <div v-if="params.is_status == 0" @click="guanzu(1)">
          <van-icon  name="star-o" />
          <span >收藏</span>
        </div>
        <div v-else @click="guanzu(2)">
          <!-- <van-icon name="star" /> -->
          <span>已收藏</span>
        </div>
      </div>
      <h3>{{ params.name }}</h3>
      <p>{{ params.label }}</p>
      <div class="title_nav">
        <ul>
          <li @click="change_nav(0)" :class="{ active: is_active == 0 }">
            介绍
          </li>
          <li @click="change_nav(1)" :class="{ active: is_active == 1 }">
            风采
          </li>
          <li @click="change_nav(2)" :class="{ active: is_active == 2 }">
            作品
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="App-header">
          <div class="to_a iconfont iconzuo" @click="back()"></div>
          <span>{{params.name}}</span>
          <div class="to_b" style="visibility: hidden;"></div>
        </div> -->
    <div class="Author-main">
      <div class="ref" v-if="is_active == 0">
        <p class="icon_con" v-html="params.introduce"></p>
      </div>
      <div class="mien" v-else-if="is_active == 1">
        <div v-for="(item, i) in master_thumb" :key="i">
          <img :src="item" alt="" />
        </div>
      </div>
      <div class="works" v-else>作品</div>
      <!-- <div class="Adi_D">
                <div class="Author_main_top">
                    <div class="Author_main_topL">
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
            <div class="Adi_Ds_list hide" v-else></div> -->

      <!-- 印章款式 -->
      <!-- <div class="Adi_D_yz" v-if="seal_thumb != ''">
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
            </div> -->

      <!-- 大师风采 -->
      <!-- <div class="Adi_D_yz" v-if="master_thumb != ''">
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
              </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "selection",
  data() {
    return {
      params_id: "",
      num_cc: "28",
      params: [],
      is_active: 0,
      AuthorList: [],

      seal_thumb: [], // 印章款式
      master_thumb: [], // 大师风采
    };
  },
  updated() {
    $(".icon_con").css("font-size", "");
  },
  created() {
    this.params_id = this.$route.params.id;
  },
  mounted() {
    // 详情信息
    var $this = this;
    $this
      .$post($this.$api.HeaderCon_goods_Yinfo, {
        token: localStorage.getItem("token"),
        id: $this.params_id,
      })
      .then((data) => {
        $this.params = data.data.data[0];
        $this.AuthorList = data.data.data.goods;

        $this.seal_thumb = data.data.data[0].seal_thumb.split(",");
        $this.master_thumb = data.data.data[0].master_thumb.split(",");
        $this.master_thumb.push(...$this.seal_thumb);
      });
  },
  methods: {
    back() {
      this.$router.back();
    },
    //切换nav
    change_nav(i) {
      this.is_active = i;
    },
    // 收藏
    guanzu(val) {
      var $this = this;
      console.log(val);
      if (val == 2) {
        if (localStorage.getItem("token") == null) {
          // this.$router.replace({
          //     path: `/login`
          // });
          var href = window.location.href;
          var str = href.split("#");
          var rouit = str[0] + "#/login";
          window.android.meto_goback(rouit, "false", "false");
        } else {
          $this
            .$post($this.$api.fav_istrue2, {
              token: localStorage.getItem("token"),
              mix_id: this.params_id,
              is_type: 4,
            })
            .then((data) => {
              $this.params.is_status = 0;
            });
        }
      } else {
        if (localStorage.getItem("token") == null) {
          // this.$router.replace({
          //     path: `/login`
          // });
          var href = window.location.href;
          var str = href.split("#");
          var rouit = str[0] + "#/login";
          window.android.meto_goback(rouit, "false", "false");
        } else {
          $this
            .$post($this.$api.fav_istrue2, {
              token: localStorage.getItem("token"),
              mix_id: this.params_id,
              is_type: 4,
            })
            .then((data) => {
              $this.params.is_status = 1;
            });
        }
      }
    },
    selectItem(item) {
      this.$router.push({
        path: `/indexdetails/${item.id}`,
      });
    },
    sddd(val) {
      var href = window.location.href;
      var str = href.split("#");
      var rouit = str[0] + "#/home/authorcon/" + this.params_id + "/" + val;
      window.android.meto_goback(rouit, "false", "false");
      // this.$router.replace({
      //     path: `/home/authorcon/${this.params_id}/${val}`
      // });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/base.scss";

.Author {
  width: 100%;
  margin-bottom: rem(30px);
  background-color: #f8f8f8;
  .cover {
    position: relative;
    width: 100%;
    height: rem(464px);
    background-color: #fff;
    .to_a {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: rem(56px);
      height: rem(56px);
      text-align: center;
      // line-height: rem(56px);
      border-radius: 50%;
      background-color: #fff;
      top: rem(56px);
      left: rem(32px);
      z-index: 999;
      font-size: rem(32px);
    }
    .bg {
      width: 100%;
      height: 100%;
      filter: blur(5px);
    }
    .avatar {
      position: absolute;
      width: rem(166px);
      height: rem(166px);
      border-radius: 50%;
      z-index: 999;
      left: 50%;
      transform: translateX(-50%);
      bottom: rem(-83px);
    }
  }
  .author_title {
    position: relative;
    width: 100%;
    text-align: center;
    height: rem(343px);
    background-color: #fff;
    padding-top: rem(119px);
    .collect {
      position: absolute;
      width: rem(147px);
      height: rem(50px);
      line-height: rem(50px);
      background-color: #e8c396;
      right: 0;
      top: rem(80px);
      border-top-left-radius: rem(50px);
      border-bottom-left-radius: rem(50px);
      & >>> .van-icon {
        font-size: rem(32px);
        vertical-align: text-bottom;
      }
      span {
        font-size: rem(28px);
      }
    }
    h3 {
      font-size: rem(32px);
      font-weight: 700;
    }
    p {
      margin-top: rem(24px);
      font-size: rem(28px);
      color: #e8c396;
    }
    .title_nav {
      ul {
        display: flex;
        margin-top: rem(88px);
        width: 100%;
        height: rem(52px);
        padding: 0 rem(111px);
        justify-content: space-between;
        li {
          position: relative;
          font-size: rem(28px);
          color: #666;
        }
        .active {
          font-weight: 700;
          color: #333;
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: rem(33px);
            height: rem(8px);
            background: linear-gradient(
              90deg,
              #f44647 0%,
              rgba(244, 70, 71, 0.15) 100%
            );
          }
        }
      }
    }
  }
  .Author-main {
    margin-top: rem(16px);
    background-color: #fff;
    padding: rem(40px) rem(18px) rem(42px) rem(32px);
    line-height: 1.5;
    white-space: pre-line;
    overflow: hidden;
    .ref {
      p {
        font-size: rem(28px);
        color: #333;
      }
    }
    .mien {
      > div {
        width: rem(207px);
        height: rem(207px);
        float: left;
        margin-right: rem(33px);
        margin-bottom: rem(20px);
        &:nth-child(3n) {
          margin: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>