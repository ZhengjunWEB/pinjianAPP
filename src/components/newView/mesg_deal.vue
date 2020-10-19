<template>
  <div class="system">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="goback()"></div>
      <span>交易信息</span>
      <div class="to_b"></div>
    </div>
    <div class="system_main commons_mainsContoApp">
      <div class="item">
        <div class="top">
          <span>2020-02-30   12：36</span>
        </div>
        <div class="s_body">
          <strong>您的售后信息处理完成</strong>
          <p>请注意您的物流信息，祝您购物愉快</p>
          <div class="goods">
            <img src="" alt="">
            <span>天际·情怀</span>
            <i>戴尔其</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goback() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
  .system {
    background-color: #f8f8f8;
    min-height: 100vh;
    .item {
      margin-top: rem(40px);
      .top {
        text-align: center;
        margin-bottom: rem(33px);
        span {
          display: inline-block;
          padding: 0 rem(16px);
          background-color: #e1e1e1;
          color: #fff;
          font-size: rem(28px);
          line-height: rem(44px);
          border-radius: rem(44px);
        }
      }
      .s_body {
        width: rem(686px);
        padding: rem(24px);
        background-color: #fff;
        margin: 0 auto;
        strong {
          font-size: rem(32px);
          font-weight: bold;
        }
        p {
          font-size: rem(28px);
          color: #999;
          margin-top: rem(19px);
        }
        .goods {
          display: flex;
          align-items: center;
          margin-top: rem(32px);
          height: rem(117px);
          background-color: #f8f8f8;
          img {
            width: rem(116px);
            height: rem(116px);
            background-color: pink;
            margin-right: rem(35px);
          }
          span {
            font-size: rem(28px);
            font-weight: 500;
            margin-right: rem(16px);
          }
          i {
            font-size: rem(24px);
            color: #666;
          }
        }
      }
    }
  }
</style>