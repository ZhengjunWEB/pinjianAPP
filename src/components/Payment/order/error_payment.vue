<template>
  <div class="con_list_orde">
    <div class="con_list_orde_con">
      <div class="con_list_orde_con-iltem" v-for="(v,k) in Orderlist" :key="k" @click="item_jr(v)">
        <div class="order_title">{{v.cn_status}}</div>
        <div class="order_body">
          <div v-for="(a, b) in v.order_goods" class="order_item" :key="b"> 
            <div>
                <img :src="a.image" alt />
            </div>
            <div class="order_info">
              <h3>{{a.goods_name}}</h3>
              <p>{{a.author}}</p>
              <p>{{a.goods_no}}</p>
              <div class="order_price">
                <div>
                  <img src="http://res.pinjianapp.com/vue_wap/images/c_money.png" alt="">
                  <span>{{ a.goods_price }}</span>
                </div>
                <i>x{{a.goods_num}}</i>
              </div>
            </div>
          </div>
          <div class="order_pay">
              <span>总计：{{ v.total_price }} </span>
              <span>优惠：￥0 </span>
              <span>实付款：{{v.order_price}}</span>
          </div>
          <div class="order_footer">
              <div class="btn1">取消订单</div>
              <div class="btn2">付款</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // import order_top from ''
  name: "loading",
  data() {
    return {
      Orderlist: [],
    };
  },
  mounted() {
    var $this = this;
    $this.true_of();

    window.WeChatpaymentTrue = $this.WeChatpaymentTrue; // 微信支付成功方法
    window.WeChatpaymentFalse = $this.WeChatpaymentFalse; // 微信支付失败方法
    window.AlipaymentTrue = $this.AlipaymentTrue; // 支付宝支付成功方法
    window.AlipaymentFalse = $this.AlipaymentFalse; // 支付宝支付失败方法
  },
  methods: {
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
    item_jr(val) {
      this.$router.push({
        path: `/payment/order/delierCon/${val.id}`,
        query: {
          status: val.cn_status
        }
      });
    },

    // 取消订单
    order(val) {
      var $this = this;
      $this
        .$post($this.$api.close_order, {
          token: localStorage.getItem("token"),
          order_no: val.order_no,
        })
        .then((data) => {
          if (data.code == 200) {
            swal("取消成功", "success");
            $this.true_of();
          } else {
            swal("订单无法取消", "error");
          }
        });
    },
    // 再次支付
    zehifu(v) {
      var $this = this;
      if (v.pay_type == "wxpay") {
        $this
          .$post($this.$api.continue_pay, {
            token: localStorage.getItem("token"),
            id: v.id,
            is_money_pay: 2,
          })
          .then((data) => {
            var wxAPP = JSON.stringify(data.data);
            window.android.WeChatpayment(wxAPP);
          });
      } else if (v.pay_type == "alipay") {
        $this
          .$post($this.$api.continue_pay, {
            token: localStorage.getItem("token"),
            id: v.id,
            is_money_pay: 3,
          })
          .then((data) => {
            window.android.Alipayment(data);
          });
      } else if (v.pay_type == "money_pay") {
        return;
      }
    },

    // 支付宝支付成功 失败
    AlipaymentTrue() {
      alert("支付宝支付成功");
      this.true_of();
    },
    AlipaymentFalse() {
      alert("支付宝支付失败");
    },
    // 微信支付成功 失败
    WeChatpaymentTrue() {
      alert("微信支付成功");
      this.true_of();
    },
    WeChatpaymentFalse() {
      alert("微信支付失败");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/base.scss";
@import "@/assets/sass/cartCommon.scss";
.order_title {
  color: #F44647 !important;
}
</style>
