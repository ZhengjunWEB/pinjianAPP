<template>
  <div class="find">
    <div class="find_header">
      <div class="find_h_l">
        <router-link to="/find/recom" tag="div" class="items"
          >推荐</router-link
        >
        <router-link to="/find/ft" tag="div" class="items"
          >返图</router-link
        >
      </div>
      <router-link to="/find/wk_search" tag="div"> 
        <div class="find_h_r" v-show="path == '/find/recom'">
          <van-icon name="search" />
          搜索
        </div>
      </router-link>
    </div>
    <div class="find_main commons_mainsContoApp">

      <div class="find_body">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
    <nav-bottom></nav-bottom>
  </div>
</template>

<script>
import NavBottom from "@/components/Common/new_bottom";

export default {
  name: "Find",
  data() {
    return {

      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
      path: ''
    };
  },
  created() {
    this.path = this.$route.path
  },
  components: {
    NavBottom,
  },
  mounted() {
    // new Swiper(".swiper-container", {
    //   loop: true,
    //   // 如果需要分页器
    //   pagination: ".swiper-pagination",
    // });
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";
.find {
  .find_header {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: rem(128px);
    line-height: rem(88px);
    padding: rem(40px) rem(32px) 0;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 999;
    .find_h_l {
      display: flex;
      justify-content: space-between;
      width: rem(270px);
      height: 100%;
      font-size: rem(32px);
      font-weight: 500;
      > div {
        position: relative;
        width: rem(110px);
        height: 100%;
      }
    }
    .find_h_r {
      width: rem(190px);
      height: rem(70px);
      margin-top: rem(10px);
      line-height: rem(70px);
      font-size: rem(25px);
      border-radius: rem(70px);
      background-color: #eee;
      color: #999;
      .van-icon {
        font-size: rem(40px);
        vertical-align: middle;
        margin: 0 rem(32px);
      }
    }
    .router-link-active {
      font-size: rem(38px);
      font-weight: 700;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 20%;
        width: rem(33px);
        height: rem(8px);
        background: linear-gradient(
          270deg,
          rgba(244, 70, 71, 0.25) 0%,
          #f44647 100%
        );
      }
    }
  }
  .find_main {
    background-color: #f8f8f8;

    .find_body {
      width: 100%;
      background-color: #fff;
      padding-top: rem(16px);
      // padding: rem(40px) rem(72px) 0 rem(32px);
    }
  }
}
</style>