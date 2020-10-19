<template>
  <div class="m_chat">
    <div class="bg"></div>
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="goBack"></div>
      <span>客服小壶</span>
      <div class="to_b"></div>
    </div>
    <div class="m_chat_main commons_mainsContoApp">
      <div class="chat_body">
        <div class="left">
          <p>12.33</p>
          <div class="c_body">
            <img src="" alt="" />
            <span>你这把壶买的可以啊！</span>
          </div>
        </div>
        <div class="right">
          <p>15.61</p>
          <div class="c_body">
            <span>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</span>
            <img src="" alt="" />
          </div>
        </div>
        <div class="left">
          <p>12.33</p>
          <div class="c_body">
            <img src="" alt="" />
            <span>你这把壶买的可以啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊！</span>
          </div>
        </div>
         <div class="right">
          <p>15.61</p>
          <div class="c_body">
            <span>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</span>
            <img src="" alt="" />
          </div>
        </div>
         <div class="right">
          <p>15.61</p>
          <div class="c_body">
            <span>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦</span>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="chat_bottom">
      <!-- <img :src="srcPath + 'audio.png'" alt="" /> -->
      <img :src="srcPath + 'emoji.png'" alt="" />
      <input type="text" v-model="text" @focus="is_focus" @blur="is_blur" />
      <img v-if="show" :src="srcPath + 'add_file.png'" class="add_file" />
      <div v-else @click="biu">发送</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcPath: "http://res.pinjianapp.com/vue_wap/images/mi/msg/", //配置地址
      show: true,
      text: "",
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    is_focus() {
      this.show = false;
    },
    is_blur() {
      this.show = true;
    },
    biu() {
      if (this.text == "") {
        console.log(1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
.m_chat {
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #f8f8f8;
  }
  .m_chat_main {
    background-color: #f8f8f8;
    width: 100%;
    // height: 100vh;
    // padding-bottom: rem(98px);
    .chat_body {
      width: 100%;
      background-color: #f8f8f8;
      padding: rem(16px) rem(32px) 0;
      padding-bottom: rem(120px);
      p {
        margin-bottom: rem(32px);
        text-align: center;
        font-size: rem(24px);
        color: #999;
      }
      .left,
      .right {
        margin-bottom: rem(51px);
        p {
          text-align: center;
        }
        .c_body {
          display: flex;
          img {
            width: rem(106px);
            height: rem(106px);
            border-radius: 50%;
            background-color: pink;
            // margin-bottom: rem(40px);
            vertical-align: middle;
          }
          span {
            display: inline-block;
            margin-top: rem(21px);
            letter-spacing: rem(1px);
            font-size: rem(28px);
            padding: rem(26px) ;
            line-height: 1.5;
            max-width: rem(442px);

          }
        }
      }
      .left {
        span {
          background-color: #fff;
          border-radius: 0 rem(43px) rem(43px) rem(43px);
          margin-left: rem(30px);
        }
      }
      .right {
        .c_body {
          justify-content: flex-end;
        }
        span {
          text-align: left;
          background-color: #fde243;
          border-radius: rem(43px) 0 rem(43px) rem(43px);
          margin-right: rem(30px);
        }
      }
    }
  }
  .chat_bottom {
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    height: rem(98px);
    bottom: 0;
    padding: 0 rem(32px);
    background-color: #fff;
    > div {
      width: rem(85px);
      height: rem(56px);
      text-align: center;
      line-height: rem(56px);
      border-radius: rem(56px);
      background-color: #517aff;
      margin-left: rem(16px);
      color: #fff;
    }
    img {
      width: rem(48px);
      height: rem(48px);
    }
    input {
      box-sizing: border-box;
      padding-left: rem(30px);
      font-size: rem(28px);
      width: rem(522px);
      height: rem(72px);
      border: none;
      outline: none;
      background-color: #f8f8f8;
      border-radius: rem(72px);
      margin-left: rem(12px);
    }
    .add_file {
      width: rem(50px);
      height: rem(50px);
      margin-left: rem(50px);
    }
  }
}
</style>