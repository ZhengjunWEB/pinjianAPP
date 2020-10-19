<template>
  <div class="find_hx">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="tuichu()"></div>
      <span>壶型</span>
      <div class="to_b" style="visibility: hidden"></div>
    </div>
    <div class="top">
      <ul>
        <li @click="active(1, 80)" :class="{ active: is_active == 1 }">全部</li>
        <li @click="active(2, 80)" :class="{ active: is_active == 2 }">方器</li>
        <li @click="active(3, 79)" :class="{ active: is_active == 3 }">圆器</li>
        <li @click="active(4, 83)" :class="{ active: is_active == 4 }">提梁</li>
        <li @click="active(5, 81)" :class="{ active: is_active == 5 }">
          花塑器
        </li>
        <li @click="active(6, 82)" :class="{ active: is_active == 6 }">
          筋纹器
        </li>
      </ul>
      <div class="ipt">
        <router-link to="/find/hx_search" tag="div"> 
          <div class="search">
            <img :src="srcPath + 'f_search.png'" alt="">
            <span>请输入壶型名称/关键字</span>
            <!-- <input type="text" placeholder="请输入壶型名称/关键字"> -->
          </div>
        </router-link>
      </div>
    </div>
    <div class="find_hx_main" >
      <div class="hx_body" ref="body" v-if="is_active != 1">
        <div class="item" v-for="(a, b) in pot_Lits" :key="b" @click="xq(a.thumb, a.id, a.name)">
          <div class="l">
            <img :src="a.thumb" alt="">
          </div>
          <div class="r">
            <div class="item_top">
              <h3>{{a.name}}</h3>
              <div class="more">
                <img :src="srcPath + 'box1.png'" alt="" />
                <span>{{a.goods_num}}件作品在售</span>
              </div>
            </div>
            <p class="content">{{ a.tags | number }}</p>
          </div>
        </div>
      </div>
      <div class="hx_body"  v-else>
        <div class="item" v-for="(a, b) in pot_home" :key="b" @click="xq(a.thumb, a.id, a.name)">
          <div class="l">
            <img :src="a.thumb" alt="">
          </div>
          <div class="r">
            <div class="item_top">
              <h3>{{a.name}}</h3>
              <div class="more">
                <img :src="srcPath + 'box1.png'" alt="" />
                <span>{{a.goods_num}}件作品在售</span>
              </div>
            </div>
            <p class="content">{{ a.tags | number }}</p>
          </div>
        </div>
      </div>
      <!-- <div class="hx_body">
        <div class="item">
          <div class="title">拉拉</div>
          <img src="~@/assets/images/yq.png" class="big_i" />
          <div class="more">
            <img :src="srcPath + 'box.png'" />
            <span>0件作品在售</span>
          </div>
          <div class="content">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
        </div>
        <div class="item">
          <div class="title">拉拉</div>
          <img src="~@/assets/images/hsq.png" class="big_i" />
          <div class="more">
            <img :src="srcPath + 'box.png'" />
            <span>0件作品在售</span>
          </div>
          <div class="content">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
        </div>
        <div class="item">
          <div class="title">拉拉</div>
          <img src="~@/assets/images/jwq.png" class="big_i" />
          <div class="more">
            <img :src="srcPath + 'box.png'" />
            <span>0件作品在售</span>
          </div>
          <div class="content">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
        </div>
        <div class="item">
          <div class="title">拉拉</div>
          <img src="~@/assets/images/tl.png" class="big_i" />
          <div class="more">
            <img :src="srcPath + 'box.png'" />
            <span>0件作品在售</span>
          </div>
          <div class="content">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
        </div>
        <div class="item">
          <div class="title">拉拉</div>
          <img src="~@/assets/images/fq.png" class="big_i" />
          <div class="more">
            <img :src="srcPath + 'box.png'" />
            <span>0件作品在售</span>
          </div>
          <div class="content">啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_active: 1,
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
      pot_home: [],
      pot_Lits: [],
    };
  },
  created() {
    var $this = this;
    $this.$post($this.$api.get_api_pot_home, {}).then((data) => {
      $this.pot_home = data.data;
    });
  },
  methods: {
    tuichu() {
      this.$router.back();
    },
    active(i, v) {
      this.is_active = i;
      var $this = this;
      $this
        .$post($this.$api.found_pot_list, {
          id: v,
          no: 1,
        })
        .then((data) => {
          $this.pot_Lits = data.data.list;
        });
    },
    xq(i, id, name) {   //进入壶型详情
      this.$router.push({
        path: "/find/hx_details/" + id,
        query: {
          thumb: i,
          name: this.pot_home[0].name,
        },
      });
    },
  },
  filters: {
    number(v) {
      return v.slice(0, 23) + "...";
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";
.find_hx {
  .top {
    position: fixed;
    top: rem(128px);
    width: 100%;
    background-color: #fff;
    ul {
      // position: fixed;
      // top: rem(148px);
      background-color: #fff;
      margin-top: rem(20px);
      display: flex;
      justify-content: space-between;
      // width: 100%;
      white-space: nowrap;
      overflow-x: scroll;
      padding: 0 rem(0px) 0 rem(32px);
      height: rem(52px);
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        position: relative;
        font-size: rem(32px);
        margin-right: rem(46px);
      }
      .active {
        color: #000;
        font-weight: 700;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: rem(6px);
          background: linear-gradient(
            90deg,
            #f44647 0%,
            rgba(244, 70, 71, 0.15) 100%
          );
        }
      }
    }
    .ipt {
      width: 100%;
      height: rem(106px);
      // background-color: pink;
      .search {
        display: flex;
        align-items: center;
        width: rem(686px);
        height: rem(70px);
        border-radius: rem(70px);
        margin: rem(18px) auto 0;
        background-color: #f8f8f8;
        overflow: hidden;
        img {
          width: rem(40px);
          height: rem(39px);
          margin-left: rem(32px);
          margin-right: rem(32px);
        }
        span {
          color: #666;
          font-size: rem(28px);
        }
        input {
          flex: 1;
          height: 100%;
          border: none;
          outline: none;
          background-color: #f8f8f8;
          font-size: rem(28px);
        }
      }
    }
  }
  .find_hx_main {
    padding-top: rem(306px);
    .hx_body {
      // padding: rem(16px) rem(32px) 0;
      background-color: #f8f8f8;
      // min-height: 100vh;
      .item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: rem(180px);
        padding: 0 rem(48px) 0 rem(32px);
        margin-bottom: rem(16px);
        background-color: #fff;
        .l {
          width: 180px;
          height: 180px;
          // margin-right: rem(32px);
          img {
            width: rem(180px);
            height: rem(180px);
          }
        }
        .r {
          width: rem(450px);
          padding: rem(33px) 0 0 rem(0px);
          .item_top {
            display: flex;
            justify-content: space-between;
            // height: 45px;
            align-items: center;
             h3 {
               font-size: rem(32px);
               font-weight: 700;
            }
            .more {
              display: flex;
              align-items: center;
              // width: rem(237px);
              padding: 0 rem(13px);
              height: rem(36px);
              line-height: rem(36px);
              border-radius: rem(36px);
              border: rem(1px) solid #F44647;
              color: #f44647;
              img {
                width: rem(26px);
                height: rem(27px);
                margin-right: rem(10px);
                margin-left: rem(13px);
              }
            }
          }
          .content {
            margin-top: rem(12px);
            font-size: rem(28px);
            color: #666;
            line-height: rem(40px);
          }
        }
        // padding: rem(40px) rem(32px) 0 rem(25px);
        // width: rem(337px);
        // height: rem(454px);
        // margin-bottom: rem(16px);
        // background-color: #fff;
        // .title {
        //   font-size: rem(32px);
        //   font-weight: 700;
        //   margin-bottom: rem(10px);
        // }
        // .big_i {
        //   width: rem(185px);
        //   height: rem(185px);
        //   margin-left: rem(51px);
        // }
        // .more {
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        //   margin: rem(8px) auto 0;
        //   // margin-top: rem(8px);
        //   width: rem(237px);
        //   height: rem(36px);
        //   line-height: rem(36px);
        //   border-radius: rem(36px);
        //   border: rem(1px) solid #517aff;
        //   img {
        //     width: rem(26px);
        //     height: rem(27px);
        //     margin-right: rem(10px);
        //   }
        // }
        // .content {
        //   margin-top: rem(8px);
        //   font-size: rem(28px);
        //   color: #666;
        //   line-height: rem(40px);
        //   letter-spacing: rem(1px);
        // }
      }
    }
  }
}
</style>