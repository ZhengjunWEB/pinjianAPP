<template>
  <div class="system">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="goback()"></div>
      <span>系统通知</span>
      <div class="to_b"></div>
    </div>
    <div class="system_main commons_mainsContoApp">
      <div class="item">
        <div class="top">
          <span>2020-02-30   12：36</span>
        </div>
        <div class="s_body">
          <strong>版本更新</strong>
          <p>有新版本啦，为了您能有更好的体验，快去更新吧！</p>
        </div>
      </div>
      <div class="item">
        <div class="top">
          <span>2020-02-30   12：36</span>
        </div>
        <div class="s_body">
          <strong>版本更新</strong>
          <p>有新版本啦，为了您能有更好的体验，快去更新吧！</p>
          <p>有新版本啦，为了您能有更好的体验，快去更新吧！</p>
          <p>有新版本啦，为了您能有更好的体验，快去更新吧！</p>
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
          margin-top: rem(19px);
          font-size: rem(28px);
          color: #999;
          line-height: rem(40px);
        }
      }
    }
  }
</style>