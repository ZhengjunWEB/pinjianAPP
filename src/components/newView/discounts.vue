<template>
  <div class="discounts">
    <img :src="srcPath + 'f_goback.png'" class="gogo" @click="goback" />
    <div class="top">
      <img :src="srcPath + 'discounts.png'" alt="" />
      <div class="abs">
        <span>新人福利</span>
        <img :src="srcPath + 'abs.png'" alt="" />
      </div>
    </div>
    <div class="discounts_main">
      <div class="body">
        <div
          class="item"
          v-for="(a, b) in goods"
          :key="b"
          @click="goods_d(a.id)"
        >
          <img :src="a.goods_master_image" alt="" @click="selectItem(a)" />
          <div class="item_comn">
            <strong>{{ a.goods_name }}</strong>
            <span>{{ a.author }}</span>

            <div class="pp_con" v-if="a.goods_type == 0">
              <dd>￥????</dd>
            </div>
            <div class="pp_con" v-else>
              <dd>￥{{ Math.round(a.goods_price) }}</dd>
            </div>
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
      srcPath: "http://res.pinjianapp.com/vue_wap/images/index/", //配置地址
      goods: [], //商品数据
    };
  },
  mounted() {
    this.$post(this.$api.get_benefit, {}).then((data) => {
      this.goods = data.data.data;
    });
  },
  methods: {
    goback() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
.discounts {
  .gogo {
    position: fixed;
    box-sizing: content-box;
    left: rem(12px);
    top: rem(36px);
    width: rem(56px);
    height: rem(56px);
    padding: rem(20px);
    z-index: 999;
  }
  .top {
    position: relative;
    img {
      width: 100%;
      vertical-align: bottom;
    }
    .abs {
      position: absolute;
      z-index: 2;
      width: rem(399px);
      left: 50%;
      transform: translateX(-50%);
      bottom: rem(-15px);
      span {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: rem(71px);
        font-size: rem(32px);
        font-weight: 700;
        color: #712724;
      }
    }
  }
  .discounts_main {
    position: relative;
    top: rem(-6px);
    width: 100%;
    padding: 0 rem(32px) rem(61px);
    background-color: #fb5631;
    .body {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      border-radius: rem(20px);
      padding: rem(64px) rem(28px) rem(32px);
      background-color: #fff1d1;
      .item {
        width: rem(306px);
        height: rem(470px);
        background: #fff;
        box-shadow: 0px rem(6px) rem(20px) rgba(0, 0, 0, 0.1);
        opacity: 1;
        overflow: hidden;
        margin-top: rem(22px);
        img {
          display: block;
          width: 100%;
          height: rem(306px);
        }
        .item_comn {
          height: rem(180px);
          width: 100%;
          padding: rem(20px) rem(30px) 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          strong {
            font-size: rem(30px);
            height: rem(42px);
            line-height: rem(42px);
            color: #000;
            font-weight: bold;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          span {
            display: block;
            font-size: rem(25px);
            color: #666;
            font-weight: 400;
            height: rem(36px);
            line-height: rem(36px);
            margin-top: rem(5px);
          }
          .pp_con {
            margin-top: rem(10px);
            display: flex;
            dd {
              font-size: rem(31px);
              color: #fd3b38;
              font-weight: bold;
              margin-top: rem(10px);
            }
            dt {
              width: rem(61px);
              height: rem(61px);
              background: rgba(203, 72, 72, 1);
              border-radius: 50%;
              margin-left: auto;
              margin-top: rem(-15px);
              position: relative;
              img {
                display: block;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>