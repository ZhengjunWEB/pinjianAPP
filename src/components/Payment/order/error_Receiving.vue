<template>
  <div class="con_list_orde">
    <div class="con_list_orde_con">
      <div
        class="con_list_orde_con-iltem"
        v-for="(v, k) in Orderlist"
        :key="k"
        @click="item_jr(v)"
      >
        <div class="icb" v-for="(a, b) in v.order_goods" :key="b">
          <div class="con_list_orde_con-iltem_img">
            <img :src="a.image" alt="" />
          </div>
          <div class="mm_con_list">
            <div class="mm_con_list-title">
              <strong>{{ a.goods_name }}</strong>
            </div>
            <p class="p1">{{ a.author }}</p>
            <p class="p2">{{ a.goods_no }}</p>

            <div class="pirce">
                <div>
                  <img src="http://res.pinjianapp.com/vue_wap/images/c_money.png" alt="">
                  <span>{{ a.goods_price }}</span>
                </div>
              <span>x{{ a.goods_num }}</span>
            </div>
          </div>
        </div>
        <div class="pice_liu">
          <span
            >总计：<font>￥{{ v.balance }}</font></span
          >
          <span>优惠：<font></font>￥0</span>
          <span class="c">实付款：<font></font>￥{{ v.balance }}</span>
        </div>
        <div class="btn_oee">
          <div class="btn btn1" @click.stop="ce()">查看物流</div>
          <div class="btn btn2" @click.stop="Receiving(v)">确认收货</div>
        </div>

        <b class="zhuangtai">待收货</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {
      Orderlist: [],
    };
  },
  mounted() {
    var $this = this;
    $this.true_of();
  },
  methods: {
    // 付款
    Receiving(val) {
      var $this = this;
      $this
        .$post($this.$api.order_status, {
          token: localStorage.getItem("token"),
          order_id: val.id,
        })
        .then((data) => {
          console.log(data.data.order_list.data);
          if (data.code == 200) {
            swal("收货成功", "susses");
            $this.true_of();
          } else {
            swal("收货失败", "error");
          }
        });
    },

    ///  默认调用
    true_of() {
      var $this = this;
      $this
        .$post($this.$api.cartList, {
          token: localStorage.getItem("token"),
          page: 1,
          order_no: "",
          order_type: "WAITREC",
        })
        .then((data) => {
          $this.Orderlist = data.data.order_list.data;
        });
    },

    item_jr(val) {
      this.$router.push({
        path: `/payment/order/delierCon/${val.id}`,
        query: {
          status: val.cn_status,
        },
      });
    },
    // 测试方法 后期删除
    ce() {},
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/sass/base.scss";
@import "../../../assets/sass/cartCommon.scss";
</style>
