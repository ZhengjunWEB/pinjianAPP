<template>
  <div class="yr_detail">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="tuichu()"></div>
      <span></span>
      <div class="to_b" style="visibility: hidden"></div>
    </div>
    <div class="body commons_mainsContoApp">
      <div class="row"></div>
      <author_item :data="parse" :label = 'label' />
      <p v-show="isHide">没有更多数据了~</p>
    </div>
    <div class="bottom">
      <infinite-loading
        @infinite="infiniteHandler"
        v-show="isShow"
      ></infinite-loading>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import author_item from "@/components/newView/author_item";
export default {
  data() {
    return {
      parse: [],  //列表
      title: "",
      isShow: true,
      isHide: false,
      page: 1,
      label: '', //职称
    };
  },
  created() {
    this.oAtrue(this.page);
  },
  components: {
    author_item,
    InfiniteLoading,
  },
  methods: {
    oAtrue(i) {
      var $this = this;
      var r_id = $this.$route.params.id;
      $this
        .$post($this.$api.get_list_artists, {
          pid: r_id,
          no: 10,
          page: i,
        })
        .then((data) => {
          this.label = data.data.name
          $this.parse.push(...data.data.list.data);
          if (data.data.list.data.length == 0) {
            $this.isShow = false;
            $this.isHide = true;
          }
          $this.page++;
        });
    },
    infiniteHandler($state) {
      setTimeout(() => {
        var $this = this;
        // console.log(pages);
        // 请求下一页的数据
        this.oAtrue($this.page);
        // 触发 infiniteHandler 功能
        $state.loaded();
      }, 1000);
    },
    tuichu() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";

.body {
  padding: 0 rem(32px);
  .row {
    width: 100%;
    height: rem(20px);
  }
  p {
    text-align: center;
    margin: rem(20px) 0 rem(30px) 0;
  }
}
.bottom {
  & >>> .infinite-loading-container {
    .infinite-status-prompt {
      .loading-default {
        margin-top: rem(16px);
        width: rem(48px);
        height: rem(48px);
      }
    }
  }
}
</style>