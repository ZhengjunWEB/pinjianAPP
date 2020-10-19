<template>
  <div class="nl_detail">
    <img :src="srcPath + 'f_goback.png'" class="gogo" @click="goback">
    <div class="top_img">
      <img :src="goods_parse_imgs[0]" alt="" />
      <div class="nl_con">
        <h3>{{ parse.name }}</h3>
        <p :class="{'is_all': hide}">{{ parse.tags }}</p>
        <div class="all" @click="change">
          <span>{{hide==true?'展开':'收起'}}</span>
          <img :src="srcPath + 'down.png'" :class="{'r': !hide}" />
        </div>
      </div>
    </div>

    <div class="nl_more">
      <div class="more_t">紫泥明细</div>
      <div class="more_body">
        <span v-for="(a, b) in parse_List" :key="b" @click="go_cos(a.id)">{{ a.name }}</span>
      </div>
    </div>
    <div class="zuipin">
      <div class="more_t">类目商品</div>
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
      hide: true, //展开与隐藏
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
    };
  },
  created() {
    console.log(this.$route.params.id);
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
      this.$router.back()
    },
    go_cos(id) {
      this.$router.push({
        path: '/find/nl_indexcon/'+id
      })
    },
    change() {  //切换显示隐藏
      this.hide = !this.hide
    }
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.nl_detail {
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
      // height: rem(458px);
      box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.1);
      border-radius: rem(5px);
      background-color: #fff;
      padding: 0 rem(40px) 0 rem(40px);
      transition: all .5s;
      z-index: 5;

      h3 {
        text-align: center;
        font-size: rem(32px);
        font-weight: 700;
        margin-top: rem(40px);
      }
      p {
        margin-top: rem(24px);
        width: 100%;
        overflow: hidden;
        font-size: rem(28px);
        margin-bottom: rem(142px);
        color: #666;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .is_all {
        -webkit-line-clamp: 5;
      }
      .all {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: rem(147px);
        height: rem(82px);
        border-radius: rem(25px) rem(25px) 0 0;
        background-color: rgba(232,195,150,.37);
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
          transition: all .3s;
        }
        .r {
          transform: rotate(180deg);
        }
      }
    }
  }
  .nl_more {
    background-color: #fff;
    margin-top: rem(16px);
    padding-top: rem(40px);
    .more_t {
      position: relative;
      width: 100%;
      height: rem(43px);
      line-height: rem(43px);
      padding-left: rem(59px);
      font-size: rem(32px);
      font-weight: 700;
      &::after {
        content: "";
        position: absolute;
        // display: block;
        width: rem(11px);
        height: rem(43px);
        left: rem(32px);
        top: 0;
        background: linear-gradient(
          180deg,
          #f44647 0%,
          rgba(244, 70, 71, 0.25) 100%
        );
      }
    }
    .more_body {
      padding: rem(29px) rem(66px) 0;
      span {
        display: inline-block;
        padding: 0 rem(25px);
        height: rem(61px);
        line-height: rem(61px);
        font-size: rem(28px);
        color: #333;
        margin-right: rem(10px);
        background-color: #f6f6f6;
        border-radius: rem(20px);
        margin-bottom: rem(10px);
      }
    }
  }
  .zuipin {
    margin-top: rem(16px);
    background-color: #fff;
    .more_t {
      position: relative;
      width: 100%;
      height: rem(43px);
      line-height: rem(43px);
      padding-left: rem(59px);
      font-size: rem(32px);
      font-weight: 700;
      &::after {
        content: "";
        position: absolute;
        // display: block;
        width: rem(11px);
        height: rem(43px);
        left: rem(32px);
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