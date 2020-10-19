<template>
  <div class="pay_now">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="ind()"></div>
      <span>收银台</span>
      <div class="to_b" style="visibility: hidden"></div>
    </div>
    <div class="pay_main commons_mainsContoApp">
      <div class="price">
        <p>3600</p>
        <span>支付金额（元）</span>
      </div>
      <div class="wallet" @click="change_pay(1)">
        <div class="l">
          <img :src="srcPath + 'wallet.png'" />
          <span>钱包支付</span>
        </div>
        <div class="r " :class="{'selete': flag == 1 }"> 
          <img :src="srcPath +'y.png'" v-show="flag == 1" alt="" />
        </div>
      </div>
      <div class="other">
        <div class="weixin" @click="change_pay(2)">
          <div class="l">
            <img :src="srcPath + 'weixin.png'" />
            <span>微信支付</span>
          </div>
          <div class="r" :class="{'selete': flag == 2 }">
            <img :src="srcPath +'y.png'" v-show="flag == 2" alt="" />
          </div>
        </div>
        <div class="alipay" @click="change_pay(3)">
          <div class="l">
            <img :src="srcPath + 'alipay.png'" />
            <span>支付宝支付</span>
          </div>
          <div class="r" :class="{'selete': flag == 3 }">
            <img :src="srcPath +'y.png'" v-show="flag == 3" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="buy">立即支付</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcPath: "http://res.pinjianapp.com/vue_wap/images/pay/", //配置地址
      flag: 1
    };
  },
  methods: {
    ind() {
      this.$router.back();
      // this.$router.push({
      //   path: '/home/indexdetails/33'
      // })
    },
    change_pay(i) {
      this.flag = i
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/base.scss";
.pay_now {
  .selete {
    border: none !important;
  }
  .pay_main {
    background-color: #f8f8f8;
    height: 100vh;
    .price {
      width: rem(686px);
      height: rem(210px);
      background-color: #fff;
      border-radius: rem(10px);
      margin: rem(20px) auto 0;
      padding-top: rem(48px);
      text-align: center;
      p {
        font-size: rem(60px);
        margin-bottom: rem(24px);
      }
      span {
        font-size: rem(30px);
        color: #666;
      }
    }
    .wallet {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: rem(686px);
      height: rem(145px);
      background-color: #fff;
      margin: rem(22px) auto 0;
      border-radius: rem(10px);
      padding: 0 rem(42px) 0 rem(56px);
      .l {
        img {
          width: rem(50px);
          height: rem(50px);
          vertical-align: middle;
          margin-right: rem(32px);
        }
      }
      .r {
        width: rem(40px);
        height: rem(40px);
        border-radius: 50%;
        overflow: hidden;
        border: rem(1px) solid #707070;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .other {
      width: rem(686px);
      margin: rem(16px) auto 0;
      border-radius: rem(10px);
      padding-top: 0 rem(20px);
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: rem(686px);
        height: rem(145px);
        background-color: #fff;
        padding: 0 rem(42px) 0 rem(56px);
        .l {
          img {
            width: rem(50px);
            height: rem(50px);
            vertical-align: middle;
            margin-right: rem(32px);
          }
        }
        .r {
        width: rem(40px);
        height: rem(40px);
        border-radius: 50%;
        overflow: hidden;
        border: rem(1px) solid #707070;
         img {
          width: 100%;
          height: 100%;
        }
      }
      }
      .weixin {
        border-bottom: rem(1px) solid #eee;
      }
    }
  }
  .buy {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: rem(45px);
    width: rem(520px);
    height: rem(85px);
    text-align: center;
    line-height: rem(85px);
    background-color: #f44647;
    color: #fff;
    font-size: rem(32px);
    font-weight: 700;
    letter-spacing: rem(3px);
  }
}
</style>