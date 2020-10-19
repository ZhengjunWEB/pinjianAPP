<template>
  <div class="nl_cons">
    <img :src="srcPath + 'f_goback.png'" class="gogo" @click="goback" />
    <div class="top_img">
      <img :src="goods_parse_imgs[0]" alt="" />
      <div class="nl_con">
        <h3><span>紫泥</span>.{{ parse.name }}</h3>
        <p>{{ parse.tags }}</p>
        <div class="all">
          <span>展开</span>
          <img :src="srcPath + 'down.png'" alt="" />
        </div>
      </div>
    </div>
    <div class="goods">
      <div class="more_t">类目商品</div>
      <div class="App_mainConList">
        <div class="mi-mi-mainItem clearfix">
          <div class="item" v-for="(a, b) in goods_parse" :key="b">
            <img :src="a.goods_master_image" alt="" @click="selectItem(a)" />
            <div class="item_comn">
              <strong>{{ a.goods_name }}</strong>
              <span>{{ a.author }}</span>

              <div class="pp_con" v-if="a.goods_type == 0">
                <dd>￥????</dd>
                <!-- <dt @click="commits(a)">
                  <img
                    src="../../assets/images/Index_Img/gouwupirce.png"
                    alt=""
                  />
                </dt> -->
              </div>
              <div class="pp_con" v-else>
                <dd>￥{{ Math.round(a.goods_price) }}</dd>
                <!-- <dt @click="addCart(a)">
                  <img
                    src="../../assets/images/Index_Img/gouwuchewx.png"
                    alt=""
                  />
                </dt> -->
              </div>
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
      parse: [], // 返回的全部数据
      parse_List: [], // 返回的类型子分类
      goods_parse: [], // 推荐商品的数据
      goods_parse_imgs: [], // 图片轮播数据
      JsonParse: [], // 转义数据
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
    };
  },
  created() {
    var $this = this;
    var r_id = $this.$route.params.id;
    $this
      .$post($this.$api.get_api_plaster_detail, {
        id: r_id,
        no: 4,
      })
      .then((data) => {
        $this.parse = data.data[0];
        $this.parse_List = data.data.goods_class;
        $this.goods_parse_imgs = data.data[0].thumb.split(",");
        $this.JsonParse = JSON.parse(data.data[0].text);
        $this.goods_parse = data.data[0].goods.data;
      });
  },
  methods: {
    goback() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.nl_cons {
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
  .top_img {
    position: relative;
    box-sizing: content-box;
    width: 100%;
    height: rem(402px);
    padding-bottom: rem(366px);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
    }
    .nl_con {
      position: absolute;
      top: rem(280px);
      left: 50%;
      transform: translateX(-50%);
      width: rem(638px);
      height: rem(458px);
      box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.1);
      border-radius: rem(5px);
      background-color: #fff;
      padding: 0 rem(20px) 0 rem(58px);

      h3 {
        text-align: center;
        font-size: rem(32px);
        font-weight: 700;
        margin-top: rem(40px);
        span {
          color: #f44647;
        }
      }
      p {
        margin-top: rem(24px);
        width: 100%;
        height: rem(210px);
        overflow: hidden;
        font-size: rem(28px);
        color: #666;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        -webkit-line-clamp: 5;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .all {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: rem(147px);
        height: rem(82px);
        border-radius: rem(25px) rem(25px) 0 0;
        background-color: #e8c396;
        text-align: center;
        span {
          display: block;
          font-size: rem(28px);
          font-weight: 500;
          margin: rem(10px) 0 rem(18px) 0;
        }
        img {
          width: rem(22px);
          height: rem(23px);
        }
      }
    }
  }
  .goods {
    background-color: #fff;
    margin-top: rem(16px);
    padding: rem(40px) rem(32px) rem(50px);

    .more_t {
      position: relative;
      width: 100%;
      height: rem(43px);
      line-height: rem(43px);
      padding-left: rem(27px);
      font-size: rem(32px);
      font-weight: 700;
      margin-bottom: rem(7px);
      &::after {
        content: "";
        position: absolute;
        // display: block;
        width: rem(11px);
        height: rem(43px);
        left: rem(0px);
        top: 0;
        background: linear-gradient(
          180deg,
          #f44647 0%,
          rgba(244, 70, 71, 0.25) 100%
        );
      }
    }
  }
}
</style>