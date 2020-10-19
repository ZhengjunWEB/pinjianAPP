<template>
  <div class="m_afterSale">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="goback()"></div>
      <span>我的售后</span>
      <div class="to_b"></div>
    </div>
    <div class="m_afterSale_main commons_mainsContoApp">
      <div class="m_body">
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
                  <span>{{ a.goods_price }}</span>
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
              <div class="btn1">取消售后</div>
              <div class="btn2" @click="sale_detail">查看详情</div>
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
      Orderlist: [],
    };
  },
  created() {
    this.true_of()
  },
  methods: {
    goback() {
      this.$router.back();
    },
    true_of() {
      var $this = this;
      $this
        .$post($this.$api.cartList, {
          token: localStorage.getItem("token"),
          page: 1,
          order_no: "",
          order_type: "NOPAY",
        })
        .then((data) => {
          $this.Orderlist = data.data.order_list.data;
        });
    },
    sale_detail() {    //跳转详情页
      this.$router.push({
        path:'/mi/m_sale_detail'
      })
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/cartCommon.scss";
.m_afterSale {
  background-color: #f8f8f8;
  .con_list_orde_con {
    .con_list_orde_con-iltem {
      &:nth-child(1) {
        margin-top: rem(16px);
      }
    }
  }
}
</style>