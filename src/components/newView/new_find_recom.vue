<template>
  <div class="recom_box">
    <div class="find_top">
      <div class="find_swiper">
        <div class="swiper-container" id="swiper_one">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(a, b) in banner" :key="b">
              <img :src="a.adv_image" alt="" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="find_nav">
        <router-link to="/find/nl" tag="div">
          <div align="center">
            <img :src="srcPath + 'nl.png'" alt="" />
            <p>矿产泥料</p>
          </div>
        </router-link>
        <router-link to="/sell/query" tag="div">
          <div align="center">
            <img :src="srcPath + 'zc.png'" alt="" />
            <p>职称查询</p>
          </div>
        </router-link>
        <router-link to="/find/yr" tag="div">
          <div align="center">
            <img :src="srcPath + 'ds.png'" alt="" />
            <p>大师云集</p>
          </div>
        </router-link>
        <router-link to="/find/hx_detail" tag="div">
          <div align="center">
            <img :src="srcPath + 'hx.png'" alt="" />
            <p>壶型明细</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="recom">
      <div class="recom_title">
        <span>知识百科</span>
      </div>
      <div
        class="recom_item"
        v-for="(a, b) in fin_ind"
        :key="b"
        @click="next(a.id)"
      >
        <div class="item_top">
          <div class="top_l">
            <img :src="a.thumb" alt="" />
          </div>
          <div class="top_r">
            <p>{{ a.title | slice }}</p>
            <span>
              {{ a.content | slice2 }}
            </span>
          </div>
        </div>
        <div class="item_bottom">
          <div>
            <i> <img :src="srcPath + 'clock.png'" /> </i>
            <span>{{ a.create_time | time }}</span>
            <i> <img :src="srcPath + 'eye.png'" /> </i> <span>{{a.reading_num}}浏览</span>
          </div>
          <div class="bottom_r">
            <span>立即阅读</span>
            <img
              src="http://res.pinjianapp.com/vue_wap/images/find/arrowR.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
name: "find_recom";
// 引入 Swipter 组件
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
      fin_ind: [],
      banner: [], //banner数据
    };
  },
  created() {
    var $this = this;
    $this.$post($this.$api.getlistwikipedia, {}).then((data) => {
      $this.fin_ind = data.data.data;
    });
    $this.$post($this.$api.find_banner, {}).then((data) => {
      $this.banner = data.data.adv;
    });
  },
  mounted() {
    this.$nextTick(() => {
      // 下一个UI帧再初始化swiper
      var swiper = new Swiper("#swiper_one", {
        direction: "horizontal",
        initialSlide: 0, //默认第二个
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView: 1.7,
        // centeredSlides: true,
        // spaceBetween: 20,
        normalizeSlideIndex:false,   //小圆点不到位问题
        slidesOffsetAfter : 36,
        observer: true,
        observeParents: true,
      });
    });
  },
  methods: {
    next(id) {
      this.$router.push({
        path: "/find/wikipedia/" + id,
      });
    },
  },
  filters: {
    slice(v) {
      return v.slice(0, 9) + "...";
    },
    slice2(v) {
      return v.slice(0, 42) + "...";
    },
    time(v) {
      return v.split(" ")[0];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.recom_box {
  background-color: #f8f8f8;
  .find_top {
  width: 100%;
  padding-bottom: rem(32px);
  background-color: #fff;
  .find_swiper {
    width: 100%;
    height: rem(278px);
    padding-left: rem(32px);
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-slide {
        width: rem(420px);
        margin-right: rem(24px);
        img {
          width: rem(420px);
          height: rem(210px);
          // margin-right: rem(24px);
          border-radius: rem(10px);
          // background-color: pink;
        }
        &:last-child {
          margin-right: rem(24px);
        }
      }
      &>>>.swiper-pagination-bullet {
        width: rem(9px);
        height: rem(9px);
      }
      &>>>.swiper-pagination-bullet-active {
        background-color: #000;
      }
    }
  }
  .find_nav {
    display: flex;
    width: 100%;
    height: rem(155px);
    margin-top: rem(40px);
    > div {
      flex: 1;
      text-align: center;
      img {
        width: rem(100px);
        height: rem(100px);
        margin-bottom: rem(24px);
      }
      p {
        font-size: rem(24px);
      }
    }
  }
}
.recom {
  padding: rem(40px) rem(72px) 0 rem(32px);
  margin-top: rem(16px);
  margin-bottom: rem(98px);
  background-color: #fff;
  .recom_title {
    span {
      font-size: rem(36px);
      font-weight: 700;
    }
  }
  .recom_item {
    padding-top: rem(40px);
    padding-bottom: rem(32px);
    border-bottom: rem(1px) solid #eee;
    .item_top {
      display: flex;
      .top_l {
        flex: 1;
        img {
          width: rem(339px);
          height: rem(272px);
          background-color: pink;
          border-radius: rem(10px);
          margin-right: rem(27px);
        }
      }
      .top_r {
        flex: 1;
        p {
          font-size: rem(28px);
          font-weight: 500;
          height: rem(80px);
          line-height: rem(80px);
          // margin-top: rem(26px);
          margin-bottom: rem(22px);
          white-space: normal;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        span {
          font-size: rem(24px);
          color: #666;
          line-height: 1.5;
        }
      }
    }
    .item_bottom {
      display: flex;
      // align-items: center;
      justify-content: space-between;
      width: 100%;
      height: rem(40px);
      line-height: rem(40px);
      margin-top: rem(45px);
      i {
        display: inline-block;
        // width: rem(24px);
        // height: rem(24px);
        // background-color: #eee;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: rem(8px);
        img {
          width: rem(24px);
          height: rem(24px);
          vertical-align: rem(-2px);
        }
      }
      span {
        color: #999;
        font-size: rem(24px);
        margin-right: rem(16px);
      }
      .bottom_r {
        width: rem(189px);
        height: rem(40px);
        line-height: rem(40px);
        border-radius: rem(40px);
        background-color: #f44647;
        span {
          color: #ffffff;
          margin-left: rem(23px);
        }
        img {
          width: rem(26px);
          height: rem(16px);
        }
      }
    }
  }
}
}

</style>