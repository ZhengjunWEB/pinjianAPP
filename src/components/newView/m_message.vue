<template>
  <div class="m_message">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="goBack"></div>
      <span>消息</span>
      <div class="to_b"></div>
    </div>
    <div class="m_message_main commons_mainsContoApp">
      <div class="message_top">
        <div class="top_item" @click="m_chat(1)">
          <img :src="srcPath + '/system.png'" alt="" />
          <div>
            <p>系统通知</p>
            <span>还没有新的通知</span>
          </div>
        </div>
        <div class="top_item" @click="m_chat(2)">
          <img :src="srcPath + '/deal.png'" alt="" />
          <div>
            <p>交易信息</p>
            <span>还没有新的交易信息</span>
          </div>
        </div>
        <div class="top_item" @click="m_chat(3)">
          <img :src="srcPath + '/comment.png'" alt="" />
          <div>
            <p>评论和点赞</p>
            <span>你还没有新的评论</span>
          </div>
        </div>
      </div>
      <div class="message_body">
        <div class="top_item" @click="m_chat(4)">
          <div class="img">
            <img :src="srcPath + '/deal.png'" alt="" />
            <i>9</i>
          </div>
          <div class="service">
            <p>客服小壶</p>
            <span>你这把壶买的可以啊！能给我点建议吗</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcPath: "http://res.pinjianapp.com/vue_wap/images/mi/msg/", //配置地址
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    m_chat(i) {
     if(i == 1) {
        this.$router.push({
        path:'/mi/msg_system'
      })
     } else if(i ==2) {
      this.$router.push({
        path:'/mi/msg_deal'
      })
     }else if (i ==3) {
      this.$toast('功能暂未开启！')
     } else {
        this.$router.push({
        path:'/mi/chat'
      })
     }

    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
.m_message {
  background-color: #f8f8f8;
  .message_top {
    width: 100%;
    // height: rem(478px);
    padding: rem(40px) rem(32px) 0;
    border-top: rem(1px) solid #eee;
    background-color: #fff;
    .top_item {
      display: flex;
      height: rem(154px);
      margin-bottom: rem(24px);
      img {
        width: rem(106px);
        height: rem(106px);
        border-radius: 50%;
        margin-top: rem(25px);
      }
      > div {
        flex: 1;
        margin-left: rem(34px);
        border-bottom: rem(1px) solid #eee;
        p {
          font-size: rem(32px);
          font-weight: 700;
          margin-top: rem(39px);
          margin-bottom: rem(19px);
        }
        span {
          font-size: rem(26px);
          color: #999;
        }
      }
    }
  }
  .message_body {
    background-color: #fff;
    margin-top: rem(16px);
    padding: rem(0px) rem(36px) 0 rem(32px);
    .top_item {
      display: flex;
      height: rem(163px);
      margin-bottom: rem(24px);
      .img {
        position: relative;
        width: rem(106px);
        height: rem(106px);
        margin-top: rem(33px);
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
        i {
          position: absolute;
          top: rem(-5px);
          left: rem(80px);
          height: rem(35px);
          line-height: rem(35px);
          padding: 0 rem(10px);
          border-radius: rem(35px);
          background-color: #ff0000;
          color: #fff;
        }
      }

      .service {
        flex: 1;
        margin-left: rem(34px);
        border-bottom: rem(1px) solid #eee;
        p {
          font-size: rem(32px);
          font-weight: 700;
          margin-top: rem(50px);
          margin-bottom: rem(19px);
        }
        span {
          font-size: rem(26px);
          color: #999;
        }
      }
    }
  }
}
</style>

