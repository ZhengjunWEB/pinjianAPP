<template>
  <div class="suo-wrpper" style="background: #fff">
    <div class="search_header">
      <div class="to_a iconfont iconzuo" @click="goback"></div>
      <div class="ipt">
        <input type="text" placeholder="请输入搜索关键字" v-model="mesg" @focus="ipt_focus" @blur="ipt_blur" />
        <img class="f" :src="srcPath + 'f_search.png'" alt="" />
        <img v-show="mesg != ''" class="x" :src="srcPath + 'xxx.png'" @click="empty">
      </div>
      <div class="search_now" @click="submit()">搜索</div>
    </div>
    <div class="s_main commons_mainsContoApp">
      <div  class="other">
        <div class="s_goods" v-if="show">
          <div class="recom_item" v-for="(a, b) in wk_data" :key="b" @click="next(a.id)">
            <div class="item_top">
              <div class="top_l">
                <img :src="a.thumb" alt="" />
              </div>
              <div class="top_r">
                <p>{{ a.title }}</p>
                <span>
                  {{ a.content }}
                </span>
              </div>
            </div>
            <div class="item_bottom">
            <div>
              <i> <img src="http://res.pinjianapp.com/vue_wap/images/find/clock.png" /> </i>
              <span>{{ a.create_time }}</span>
              <i> <img src="http://res.pinjianapp.com/vue_wap/images/find/eye.png" /> </i> <span>{{a.reading_num}}浏览</span>
            </div>
          <div class="bottom_r">
            <span>立即阅读</span>
            <img src="http://res.pinjianapp.com/vue_wap/images/find/arrowR.png" />
          </div>
        </div>
      </div>
        </div>
        <div class="none" v-else>
          <img src="http://res.pinjianapp.com/vue_wap/images/none.png" >
          <p>没有搜索到关于 “{{this.history}}” 的相关文章</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import store from "@/store/store.js";
export default {
  name: "Find",
  data() {
    return {
      sou_name: "",
      srcPath: "http://res.pinjianapp.com/vue_wap/images/index/", //配置地址
      srcPath1: "http://res.pinjianapp.com/vue_wap/images", //配置地址
      ben_List: [],
      ben_souList: [],
      sou_tj: [],
      is_focus: false, //是否点击了输入框
      mesg: '', //搜索框输入
      show: true,  //搜索无结果显示
      wk_data: [],
      history: '',   //搜索的内容
    };
  },
  store,
  // 计算属性
  computed: {
    store: function () {
      return this.$store.state;
    },
  },
  mounted() {
    var $this = this;
    $this.sub_quzhi();
    // 推荐列表
    // $this.$post($this.$api.recommended, {}).then((data) => {
    //   $this.sou_tj = data.data;
    // });

    // search_technical
  },
  methods: {
    goback() {
      this.$router.back()
    },
    remove() {
      localStorage.removeItem("ben_souList");
      this.sub_quzhi();
    },
    // 销毁上一层
    prev() {
      window.android.goback();
      //   this.$router.push({
      //       path: `/index`
      //   })
    },
    ipt_focus() {
      this.is_focus = true
    },
     ipt_blur() {
      this.is_focus = true
    },
    search() {  //点击搜索
      if(this.mesg == '') {
        this.$toast('请输入内容！')
        return false
      }
      this.history = this.mesg
      this.$post(this.$api.search_to,{name:this.mesg,type:'wikipedia'}).then(data => {
        this.wk_data = data.data.data
        if(this.wk_data.length == 0) {
          this.show = false
        } else {
          this.show = true
        }
      });
      this.mesg = ''
    },
    empty() {  //清空搜索框
      this.mesg = ''
    },
    /// 本地历史记录
    sub_quzhi() {
      var $this = this;
      if (localStorage.getItem("ben_souList") == null) {
        $this.ben_souList = [];
        $this.ben_List = [];
      } else {
        $this.ben_souList = JSON.parse(localStorage.getItem("ben_souList"));
        $this.ben_List = JSON.parse(localStorage.getItem("ben_souList"));
      }
    },
    /// 搜索提交
    submit() {
      this.search()
    },
    next(id) {
      this.$router.push({
        path: "/find/wikipedia/" + id,
      });
    },
  },
    filters: {
    // slice(v) {
    //   return v.slice(0, 9) + "...";
    // },
    // slice2(v) {
    //   return v.slice(0, 42) + "...";
    // },
    // time(v) {
    //   return v.split(" ")[0];
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/base.scss";
// @import '../../assets/sass/IndexCommon.scss';

.search_header {
  position: fixed;
  top: 0;
  display: flex;
  z-index: 3;
  box-sizing: content-box;
  width: 100%;
  padding: rem(40px) rem(28px) rem(18px) rem(20px);
  height: rem(70px);
  line-height: rem(70px);
  background-color: #fff;
  .to_a {
    font-size: rem(30px);
    padding-right: rem(20px);
  }
  .ipt {
    position: relative;
    width: rem(570px);
    height: rem(70px);
    border-radius: rem(70px);
    overflow: hidden;
    input {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background-color: #f8f8f8;
      padding-left: rem(104px);
      font-size: rem(28px);
    }
    .f {
      position: absolute;
      left: rem(32px);
      top: 50%;
      transform: translateY(-50%);
      width: rem(40px);
      height: rem(39px);
    }
    .x {
      width: rem(70px);
      height: rem(70px);
      position: absolute;
      // top: 0;
      right: rem(0px);
    }
  }
  .search_now {
    font-size: rem(28px);
    color: #333333;
    height: rem(70px);
    padding-left: rem(24px);
  }
}

.sousuo-pp {
  padding: 0 rem(28px) rem(30px) rem(32px);
  .title {
    margin-top: rem(40px);
    height: rem(45px);
    font-size: rem(32px);
    font-weight: bold;
    line-height: rem(45px);
    color: #333333;
    display: flex;
    img {
      display: block;
      box-sizing: content-box;
      width: rem(24px);
      height: rem(24px);
      margin-left: auto;
      padding: rem(10px);
    }
    .hot {
      width: rem(30px);
      height: rem(37px);
      vertical-align: middle;
      margin-left: rem(16px);
      padding: 0;
    }
  }
  .ls_cart {
    max-height: rem(340px);
    overflow: hidden;
    .items {
      display: block;
      height: rem(61px);
      line-height: rem(40px);
      font-size: rem(28px);
      font-family: font_pc;
      font-weight: 400;
      color: #333333;
      background: rgba(246, 246, 246, 1);
      border-radius: rem(20px);
      padding: rem(11px) rem(25px);
      float: left;
      margin-right: rem(10px);
      margin-top: rem(20px);
    }
  }
}
.s_main   {
  min-height: 100vh;
  background-color: #f8f8f8;
  // padding: 0 rem(32px);
  .other {
  position: relative;
  margin-top: rem(16px);
  background-color: #fff;
  padding: 0 rem(32px);
  min-height: 100vh;
   .s_goods {
       .recom_item {
    padding-top: rem(40px);
    padding-bottom: rem(32px);
    border-bottom: rem(1px) solid #eee;
    .item_top {
      display: flex;
      .top_l {
        flex: 1;
        img {
          width: rem(339px);
          height: rem(272px);
          background-color: pink;
          border-radius: rem(10px);
          margin-right: rem(27px);
        }
      }
      .top_r {
        flex: 1;
        p {
          font-size: rem(28px);
          font-weight: 500;
          height: rem(80px);
          line-height: rem(80px);
          // margin-top: rem(26px);
          margin-bottom: rem(22px);
          white-space: normal;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        span {
          font-size: rem(24px);
          color: #666;
          line-height: 1.5;
        }
      }
    }
    .item_bottom {
      display: flex;
      // align-items: center;
      justify-content: space-between;
      width: 100%;
      height: rem(40px);
      line-height: rem(40px);
      margin-top: rem(45px);
      i {
        display: inline-block;
        // width: rem(24px);
        // height: rem(24px);
        // background-color: #eee;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: rem(8px);
        img {
          width: rem(24px);
          height: rem(24px);
          vertical-align: rem(-2px);
        }
      }
      span {
        color: #999;
        font-size: rem(24px);
        margin-right: rem(16px);
      }
      .bottom_r {
        width: rem(189px);
        height: rem(40px);
        line-height: rem(40px);
        border-radius: rem(40px);
        background-color: #f44647;
        span {
          color: #ffffff;
          margin-left: rem(23px);
        }
        img {
          width: rem(26px);
          height: rem(16px);
        }
      }
    }
  }
   }
   .none {
     padding-top: rem(260px);
     text-align: center;
     img {
       width: rem(160px);
       height: rem(160px);
     }
     p {
       margin-top: rem(36px);
       color: #999;
       font-size: rem(28px);
     }
   }
  }
}

</style>