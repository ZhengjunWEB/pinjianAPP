<template>
  <div class="con_list_orde">
    <div class="con_list_orde_con">
      <div
        class="con_list_orde_con-iltem"
        v-for="(v, k) in Orderlist"
        :key="k"
        @click="item_jr(v)"
      >
        <div class="order_title">{{ v.cn_status }}</div>
        <div class="order_body">
          <div v-for="(a, b) in v.order_goods" class="order_item" :key="b">
            <div>
              <img :src="a.image" alt />
            </div>
            <div class="order_info">
              <h3>{{ a.goods_name }}</h3>
              <p>{{ a.author }}</p>
              <p>{{ a.goods_no }}</p>
              <div class="order_price">
                <div>
                  <img src="http://res.pinjianapp.com/vue_wap/images/c_money.png" alt="">
                  <span>{{ a.goods_price }}</span>
                </div>
                <i>x{{ a.goods_num }}</i>
              </div>
            </div>
          </div>
          <div class="order_pay">
            <span>总计：{{ v.total_price }} </span>
            <span>优惠：￥0 </span>
            <span>实付款：{{ v.order_price }}</span>
          </div>
          <div class="order_footer">
            <!-- <div class="btn1">售后</div> -->
            <div class="btn2">提醒发货</div>
          </div>
        </div>
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
    $this
      .$post($this.$api.cartList, {
        token: localStorage.getItem("token"),
        page: 1,
        order_no: "",
        order_type: "WAITSEND",
      })
      .then((data) => {
        $this.Orderlist = data.data.order_list.data;
        console.log($this.Orderlist);
      });
  },
  methods: {
    item_jr(val) {
      this.$router.push({
        path: `/payment/order/delierCon/${val.id}`,
        query: {
          status: val.cn_status,
        },
      });
      // this.$toast('提醒发货成功!')
    },
    // 测试方法 后期删除
    ce() {},
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/sass/base.scss";
@import "../../../assets/sass/cartCommon.scss";
.order_title {
  color: #517aff !important;
}
</style>
