<template>
  <div class="font_yr">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="tuichu()"></div>
      <span>大师云集</span>
      <div class="to_b" style="visibility: hidden"></div>
    </div>
    <!-- <div class="search">hah </div> -->
    <div class="font_yrn commons_mainsContoApp">
      <div class="font_yr-item" v-for="(v, k) in yr_list" :key="k">
        <div class="font_yr-item_header" @click="next_page(v.id)">
          <strong class="font_yr-item_title">
            <img :src="srcPath + `ds${k + 1}.png`" alt="" />
            {{ v.name }}</strong
          >
          <div class="font_yr-item_con">
            <span>共{{ v.list.length }}人</span>
            <i class="iconfont iconzuo-copy"></i>
          </div>
        </div>
        <div class="font_yr_t">深厚的文化素养和突出的艺术成就</div>
        <div class="font_yr-xscroll">
          <div
            class="font_yr-xscroll-item"
            v-for="(a, b) in v.list"
            :key="b"
            @click="selectItemA(a)"
          >
            <img :src="a.thumb" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "font_in",
  data() {
    return {
      yr_list: [],
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
    };
  },

  mounted() {
    var $this = this;
    $this.$post($this.$api.get_api_artists, {}).then((data) => {
      $this.yr_list = data.data;
    });
  },
  methods: {
    tuichu() {
      this.$router.back();
    },
    selectItemA(item) {
      this.$router.push({
        path: `/home/author/${item.id}`,
      });
    },

    backgr() {
      var href = window.location.href;
      var str = href.split("#");
      var rouit = str[0] + "#/sell/query";
      window.android.meto_goback(rouit, "false", "false");
    },
    next_page(id) {
      this.$router.push({
        path: '/find/yr_detail/'+id
      })
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.font_yr {
  position: absolute;
  width: 100%;
  height: 100%;
  // padding-top: 2.24rem;
  background: #f8f8f8;
  .font_yrn {
    width: 100%;
    padding-bottom: rem(30px);
    background: #f8f8f8;
    padding: 0 rem(32px);
    .font_yrnCon {
      width: 100%;
      height: rem(156px);
      padding: rem(46px) rem(28px) 0 rem(32px);
      margin-top: rem(60px);
      background: #fff;
      // border-radius:rem(20px);
      .font_yrnCon-psd {
        width: 100%;
        height: rem(60px);
        line-height: rem(60px);
        display: flex;
        .img1 {
          display: block;
          width: rem(60px);
          height: rem(60px);
        }
        strong {
          margin-left: rem(50px);
          font-size: rem(32px);
          font-family: font_b;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
        }
        .img2 {
          display: block;
          width: rem(16px);
          height: rem(30px);
          margin-top: rem(16px);
          margin-left: auto;
        }
      }
    }
    .font_yr-item {
      width: 100%;
      border-radius: rem(10px);
      background: #fff;
      margin-top: rem(20px);
      padding: rem(30px) rem(28px) 0 rem(29px);
      .font_yr-item_header {
        width: 100%;
        height: rem(45px);
        line-height: rem(45px);
        display: flex;
        .font_yr-item_title {
          font-size: rem(32px);
          font-weight: bold;
          color: #333;
          img {
            width: rem(36px);
            height: rem(45px);
            vertical-align: middle;
            margin-right: rem(20px);
          }
        }
        .font_yr-item_con {
          margin-left: auto;
          display: flex;
          span {
            font-size: rem(24px);
            font-weight: 400;
            color: #999;
          }
          i {
            font-size: rem(24px);
            color: #999;
          }
        }
      }
      .font_yr_t {
        width: rem(400px);
        height: rem(50px);
        line-height: rem(50px);
        background-color: #f8f8f8;
        border-radius: rem(10px);
        font-size: rem(24px);
        color: #999;
        margin-top: rem(26px);
      }
      .font_yr-xscroll {
        margin-top: rem(20px);
        height: rem(198px);
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        .font_yr-xscroll-item {
          width: rem(160px);
          height: rem(160px);
          border-radius: rem(10px);
          overflow: hidden;
          margin-left: rem(10px);
          display: inline-block;
          img {
            display: block;
            width: 100%;
            height: 100%;
            // border-radius: rem(20px);
          }
        }
        .font_yr-xscroll-item:nth-of-type(1) {
          margin-left: 0;
        }
      }
    }
  }
}
</style>