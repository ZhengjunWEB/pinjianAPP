<template>
  <div class="hx_detail">
    <img :src="srcPath + 'f_goback.png'" class="gogo" @click="goback" />
    <div class="top">
      <img :src="thumb" alt="" />
    </div>
    <div class="con">
      <div class="con_top">
        <span>{{ name }}</span> . {{ parse.name }}
      </div>
      <p>{{ parse.tags|number }}</p>
    </div>
    <div class="items">
      <div class="more_t">类目商品</div>
      <p v-if="goods_parse.length == 0">暂时没有商品哦~</p>
      <div v-else class="mi-mi-mainItem">
        <div class="item" v-for="(a, b) in goods_parse" :key="b" @click="goods_d(a.id)">
          <img :src="a.goods_master_image" alt=""  />
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
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
      parse: {},
      goods_parse: [],
      thumb: "",
      name: "",
    };
  },
  created() {
    var $this = this;
    var r_id = $this.$route.params.id;
    $this.thumb = $this.$route.query.thumb;
    $this.name = $this.$route.query.name;
    $this
      .$post($this.$api.found_pot_detail, {
        id: r_id,
        no: 4,
      })
      .then((data) => {
        $this.parse = data.data[0];
        $this.goods_parse = data.data[0].goods.data;
      });
  },
  methods: {
    goback() {
      this.$router.back();
    },
    //跳转具体信息
    goods_d(id) {
      this.$router.push({
        path: '/home/indexdetails/' + id
      })
    }
  },
  //限制字数长度
  filters: {
    number(d) {
      return d.slice(0, 108) + "...";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
.hx_detail {
  background-color: #f8f8f8;
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
    width: 100%;
    height: rem(680px);
    text-align: center;
    background-color: #fff;
    img {
      position: relative;
      bottom: rem(100px);
      width: 80%;
    }
  }
  .con {
    width: 100%;
    padding: rem(40px) rem(63px);
    background-color: #fff;
    .con_top {
      text-align: center;
      font-size: rem(32px);
      font-weight: 700;
      margin-bottom: rem(24px);
      span {
        color: #f44647;
      }
    }
    p {
      font-size: rem(28px);
      color: #666;
      line-height: 1.5;
    }
  }
  .items {
    background-color: #fff;
    padding: rem(40px) rem(32px) 0;
    margin-top: rem(16px);
    .more_t {
      position: relative;
      width: 100%;
      height: rem(43px);
      line-height: rem(43px);
      padding-left: rem(27px);
      font-size: rem(32px);
      font-weight: 700;
      margin-bottom: rem(29px);
      &::after {
        content: "";
        position: absolute;
        width: rem(11px);
        height: rem(43px);
        line-height: rem(43px);
        left: rem(0px);
        top: 0;
        background: linear-gradient(
          180deg,
          #f44647 0%,
          rgba(244, 70, 71, 0.25) 100%
        );
      }
    }
    p {
      text-align: center;
      font-size: rem(28px);
      padding-top: rem(30px);
    }
    .mi-mi-mainItem {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
      width: rem(332px);
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px rem(6px) rem(20px) rgba(0, 0, 0, 0.1);
      opacity: 1;
      overflow: hidden;
      margin-top: rem(22px);
      img {
        display: block;
        width: 100%;
        height: rem(332px);
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
  margin-bottom: rem(50px);
}
</style>