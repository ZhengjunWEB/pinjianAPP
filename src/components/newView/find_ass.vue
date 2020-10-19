<template>
  <div class="find_ass">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="goback"></div>
      <!-- <span>我的返图</span> -->
      <div class="ipt">
        <img :src="srcPath + 'f_search.png'" alt="" class="search" />
        <input type="text" v-model="goods_name" />
        <img
          v-show="goods_name"
          :src="srcPath + 'empty.png'"
          alt=""
          class="empty"
          @click="ipt_empty"
        />
      </div>
      <div class="header_r" @click="userOrder">搜索</div>
    </div>
    <div class="find_ass_main commons_mainsContoApp">
      <div class="top_nav">
        <div :class="{ active: is_show }" @click="active(1)">我买过的</div>
        <div :class="{ active: !is_show }" @click="active(2)">我收藏的</div>
      </div>
      <div class="find_ass_content" v-if="is_show">
        <goodsitem :data="buy" />
      </div>
      <div class="find_ass_content" v-else>
        <goodsitem :data="zuppin" />
      </div>
    </div>
    <router-link to="/find/cus" tag="div" v-show="zuppin.length == 0">
      <div class="ass_bottom">
        <img :src="srcPath + 'add_goods.png'" /> 没有您的商品？点这自定义一下吧
      </div>
    </router-link>
  </div>
</template>

<script>
//商品组件
import goodsitem from "../newView/goods_item";
export default {
  data() {
    return {
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
      goods_name: "",
      is_show: true,
      zuppin: [], //收藏的
      buy: [] //购买的
    };
  },
  created() {
     this.get_fav_list()
     this.userOrder()
  },
  methods: {
    goback() {
      this.$router.back();
    },
    ipt_empty() {
      this.goods_name = "";
      // this.get_fav_list()
    },
    active(i) {
      if (i == 1) {
        this.is_show = true;
      } else {
        this.is_show = false;
      }
    },
    get_fav_list() {  //获取我的收藏
      var $this = this;
      $this
        .$post($this.$api.get_fav_list, {
          token: localStorage.getItem("token"),
          no: 10,
          is_type: 0,
        })
        .then((data) => {
          this.zuppin = data.data.data;
        });
    },
    userOrder() { //获取我的订单
         var $this = this;
      $this
        .$post($this.$api.userorder, {
          token: localStorage.getItem("token"),
          // goods_name: this.goods_name,
          // no: 10,
          // page: 1,
        })
        .then((data) => {
           this.buy = data.data;
          // console.log(this.zuppin);
          console.log(data);
        });
    }
  },
  components: {
    goodsitem,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.find_ass {
  background-color: #f8f8f8;
  .App-header {
    .to_a {
      width: rem(44px);
      height: rem(70px);
    }
    .ipt {
      position: relative;
      input {
        box-sizing: border-box;
        padding-left: rem(101px);
        font-size: rem(26px);
        width: rem(570px);
        height: rem(70px);
        border-radius: rem(70px);
        background-color: #f8f8f8;
        outline: none;
        border: none;
      }
      .search {
        position: absolute;
        width: rem(45px);
        height: rem(43px);
        left: 28px;
        top: 50%;
        transform: translateY(-50%);
      }
      .empty {
        position: absolute;
        width: rem(50px);
        height: rem(50px);
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .header_r {
      width: rem(76px);
      height: rem(88px);
      text-align: right;
      font-size: rem(28px);
      color: #333;
    }
  }
  .top_nav {
    position: fixed;
    top: rem(128px);
    display: flex;
    width: 100%;
    height: rem(91px);
    line-height: rem(91px);
    padding: 0 rem(50px);
    background-color: #fff;
    > div {
      position: relative;
      flex: 1;
      text-align: center;
      font-size: rem(32px);
      color: #333;
      font-weight: 500;
    }
    .active {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: rem(81px);
        height: rem(8px);
        background: linear-gradient(
          90deg,
          #f44647 0%,
          rgba(244, 70, 71, 0.15) 100%
        );
      }
    }
  }
  .find_ass_content {
    margin-top: rem(16px);
    background-color: #fff;
    margin-bottom: rem(80px);
    padding-top: rem(91px);
    & >>> .goods_item {
      padding-left: rem(16px);
      .select {
        display: none !important;
        img {
          display: none;
        }
      }
    }
  }
  .ass_bottom {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;
    height: rem(85px);
    background-color: #000000;
    line-height: rem(85px);
    font-size: rem(28px);
    color: #e8c396;
    img {
      width: rem(30px);
      margin-right: rem(10px);
    }
  }
}
</style>