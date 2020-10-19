<template>
  <div class="sell_Receipt">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="sell_mi()"></div>
      <span>我的收货地址</span>
      <!-- <div class="to_b" @click="sellAdd()">添加收货地址</div> -->
    </div>
    <div class="sell_Receipt_main commons_mainsContoApp">
      <div class="add_main">
        <div
          class="address_box"
          v-for="(a, b) in address_indexList"
          :key="b"
          @click="s_back(a)"
        >
          <div class="area_info">
            <i v-show="a.is_default == 1">默认</i>
            <span>{{ a.area_info }}</span>
          </div>
          <div class="address">{{ a.address }}</div>
          <div class="user_info">
            <span>{{ a.receive_name }}</span> <span>{{ a.receive_tel }}</span>
          </div>
          <div class="edit" @click="sellEdit(a)">
            <img src="~@/assets/images/edit.png" alt="" />
          </div>
        </div>
      </div>

      <div class="add_box">
        <div class="add_address" @click="sellAdd()">+ 添加收货地址</div>
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
      address_indexList: [],
      is_rouid: "",
      id: "",
      ifto: "",
      iid: "", //路由参数id
    };
  },
  // 获取主题列表的数据
  store,
  computed: {
    store: function () {
      return this.$store.state;
    },
  },
  mounted() {
    var $this = this;
    $this.is_rouid = localStorage.getItem("get_Android_rouit");
    $this.ifto = store.state.user_tifo;
    $this
      .$get($this.$api.address_index, { token: localStorage.getItem("token") })
      .then((data) => {
        $this.address_indexList = data.data;
        $this.id = $this.address_indexList;
      });
    this.iid = $this.$route.params.id;
  },
  methods: {
    //  添加收货地址
    sellAdd() {
      this.$router.push({
        path: `/sell/addreceipt`,
      });
    },
    sellEdit(value) {
      this.$router.push({
        path: `/sell/editReceipt/${value.id}`,
      });
    },
    sell_default(value) {
      var $this = this;
      $this
        .$post($this.$api.address_default, {
          token: localStorage.getItem("token"),
          id: value.id,
        })
        .then((data) => {
          $this.address_indexList = data.data.data;
        });
    },
    sell_del(value) {
      var $this = this;
      $this
        .$post($this.$api.address_del, {
          token: localStorage.getItem("token"),
          id: value.id,
        })
        .then((data) => {
          $this.address_indexList = data.data.data;
        });
    },
    sell_mi() {
      this.$router.push({
        path: '/mi'
      });
      // this.$router.back();
    },
    quzhi(val) {
      this.$store.commit("Change_user_dizhi", val);
      this.$store.commit("Change_rouId", "Cart");
      this.$router.push({
        path: `/payment/payment`,
      });
    },

    quzhis(val) {
      localStorage.setItem("paymentlist", JSON.stringify(val));
      var dsa = JSON.parse(localStorage.getItem("get_Android_rouit_id"));
      this.$router.push({
        path: `/payment/paymentlist/${dsa.id}/${dsa.bid}/${dsa.pid}`,
      });
    },
    s_back(i) {
      if (this.iid == 1) {
        localStorage.setItem("DZ_info", JSON.stringify(i));
        this.$router.back();
        return false;
      }
      console.log(2);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/base.scss";

.sell_Receipt {
  .sell_Receipt_main {
    width: 100%;
    height: 100%;
    padding-top: rem(88px);
    position: absolute;
    overflow-y: scroll;
    .add_main {
      margin-bottom: rem(200px);
      .address_box {
        position: relative;
        width: 100%;
        // height: rem(212px);
        padding: rem(40px) 0 rem(40px) rem(32px);
        border-bottom: rem(1px) solid #eee;
        background-color: #fff;
        // background-color: pink;
        .area_info {
          margin-bottom: rem(16px);
          i {
            display: inline-block;
            width: rem(58px);
            height: rem(35px);
            line-height: rem(35px);
            text-align: center;
            color: #fff;
            font-size: rem(20px);
            border-radius: rem(35px);
            background-color: #f44647;
            margin-right: rem(10px);
          }
          span {
            font-size: rem(28px);
          }
        }
        .address {
          font-size: rem(32px);
          font-weight: 700;
          margin-bottom: rem(20px);
          padding-right: rem(98px);
          line-height: 1.3;
        }
        .user_info {
          span {
            font-size: rem(28px);
            padding-right: rem(30px);
          }
        }
        .edit {
          position: absolute;
          width: rem(50px);
          height: rem(50px);
          line-height: rem(50px);
          top: 50%;
          transform: translateY(-50%);
          right: rem(20px);
          img {
            width: rem(38px);
            height: rem(33px);
          }
        }
      }
    }

    .add_box {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: rem(125px);
      background-color: #fff;
      .add_address {
        margin: 0 auto;
        width: rem(520px);
        height: rem(85px);
        line-height: rem(85px);
        text-align: center;
        color: #fff;
        background-color: #f44647;
        font-size: rem(32px);
        font-weight: 700;
      }
    }
  }
}
.App-header .to_b {
  font-size: rem(26px);
  padding: 0;
}
</style>