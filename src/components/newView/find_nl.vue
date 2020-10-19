<template>
  <div class="find_nl">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="goback"></div>
      <span>矿产泥料</span>
      <div class="header_r"></div>
    </div>
    <div class="find_nl_main commons_mainsContoApp">
      <div class="nl_item" v-for="(a, b) in nl_list" :key="b" @click="go_dtail(a.id)">
        <div class="item_top">
          <div class="l">
            <img :src="srcPath + 'nl_quan.png'" alt="" />
            <span>{{ a.name }}</span>
          </div>
          <div class="r">共12587款在售</div>
        </div>
        <div class="item_t">
          {{ a.tags }}
        </div>
        <div class="item_img">
          <img :src="c" v-for="(c, d) in a.thumb" :key="d">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nl_list: [],
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
    };
  },
  mounted() {
    this.$post(this.$api.get_api_plaster_home, {}).then((data) => {
      this.nl_list = data.data;
    });
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    go_dtail(id) {
      this.$router.push({
        path: '/finde/ni_detale/'+id
      })
    }
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.find_nl {
  .find_nl_main {
    background-color: #f8f8f8;
    padding: 0 rem(32px) rem(50px);
    .nl_item {
      box-sizing: border-box;
      width: 100%;
      height: rem(402px);
      background-color: #fff;
      margin-top: rem(16px);
      padding: 0 rem(24px);
      .item_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        // height: rem(36px);
        padding-top: rem(36px);
        .l {
          img {
            width: rem(36px);
            height: rem(36px);
            vertical-align: rem(-7px);
            margin-right: rem(21px);
          }
          span {
            font-size: rem(32px);
            font-weight: 700;
          }
        }
        .r {
          color: #e8c396;
        }
      }
      .item_t {
        margin-top: rem(40px);
        width: 100%;
        height: rem(75px);
        font-size: rem(26px);
        color: #999;
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .item_img {
        width: 100%;
        height: rem(150px);
        margin-top: rem(32px);
        white-space: nowrap;
        overflow-x: scroll;
        img {
          width: rem(150px);
          height: rem(150px);
          margin-right: rem(15px);
        }
      }
    }
  }
}
</style>