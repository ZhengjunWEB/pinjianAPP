<template>
  <div class="sell_Receipt">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="dd()"></div>
      <span>修改地址</span>
      <div class="header_r" @click="sell_del(edid_id)">
        <img src="~@/assets/images/delete.png" alt="" />
        <i>删除</i>
      </div>
    </div>
    <div class="sell_Receipt_main commons_mainsContoApp">
      <div class="sell_Receipt_list">
        <div class="sell_Receipt_items">
          <div class="sell_Receipt_item-item">
            <div class="item-l">收&nbsp;&nbsp;货&nbsp;&nbsp;人</div>
            <input
              class="item-r"
              type="text"
              name="name"
              placeholder="请输入收货人姓名"
            />
          </div>
          <div class="sell_Receipt_item-item">
            <div class="item-l">联系电话</div>
            <input
              class="item-r"
              type="number"
              name="tel"
              placeholder="请输入联系电话"
            />
          </div>
          <div class="sell_Receipt_item-item">
            <div class="item-l">所在地区</div>
            <p class="btn1 item-r">-- --</p>
          </div>
          <div class="sell_Receipt_item-item">
            <div class="item-l">详细地址</div>
            <input
              class="item-r"
              type="text"
              name="address"
              placeholder="请输入收货人详细地址"
            />
          </div>

          <div class="submit">保存</div>
        </div>
      </div>

      <div class="morr">
        <div class="default_add">设为默认地址</div>
        <div class="add_img" @click="qufan()">
          <img :src="is_default == 1 ? ifCarIMg_true : ifCarIMg_false" alt="" />
        </div>
        <div class="tip">每次将会默认推荐使用默认地址</div>
      </div>
    </div>

    <input type="hidden" name="sheng" value="" />
    <input type="hidden" name="shi" value="" />
    <input type="hidden" name="qu" value="" />

    <input type="hidden" name="sheng_TyId" value="" />
    <input type="hidden" name="shi_TyId" value="" />
    <input type="hidden" name="qu_TyId" value="" />

    <!-- 引入三级联动 -->
    <lin-kage></lin-kage>
  </div>
</template>

<script>
import LinKage from "@/components/Common/LinKage";
export default {
  name: "Find",
  data() {
    return {
      edid_id: "",
      ifCarIMg_true: "http://res.pinjianapp.com/vue_wap/images/cart/y.png",  //配置地址
      ifCarIMg_false: "http://res.pinjianapp.com/vue_wap/images/cart/n.png",  //配置地址
      is_default: "",
    };
  },
  components: {
    // 底部组件
    LinKage,
  },
  mounted() {
    $(".btn1").click(function () {
      $(".linkage").show();
    });
    var $this = this;
    $this.edid_id = $this.$route.params.id;
    var token = localStorage.getItem("token");
    $.ajax({
      type: "get",
      url: "http://console.pinjianapp.com/api/address/edit/" + $this.edid_id,
      async: false,
      dataType: "json",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: {
        token: token,
      },
      success: function (res) {
        $(" input[ name='name']").val(res.data.receive_name);
        $(" input[ name='tel']").val(res.data.receive_tel);
        $(".btn1").text(
          res.data.province_name[0].name +
            res.data.city_name[0].name +
            res.data.area_name[0].name
        );
        $(" input[ name='address']").val(res.data.address);
        $(" input[ name='sheng_TyId']").val(res.data.area_info[0]);
        $(" input[ name='shi_TyId']").val(res.data.area_info[1]);
        $(" input[ name='qu_TyId']").val(res.data.area_info[2]);
        $this.is_default = res.data.is_default;
      },
    });

    $(".submit").click(function () {
      var name = $(" input[ name='name']").val();
      var vel = $(" input[ name='tel']").val();
      var address = $(" input[ name='address']").val();
      var sheng = $(" input[ name='sheng_TyId']").val();
      var shi = $(" input[ name='shi_TyId']").val();
      var qu = $(" input[ name='qu_TyId']").val();
      var token = localStorage.getItem("token");
      $.ajax({
        type: "post",
        url: "http://console.pinjianapp.com/api/address/edit/" + $this.edid_id,
        async: false,
        dataType: "json",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: {
          token: token,
          area_info: [sheng, shi, qu],
          receive_name: name,
          receive_tel: vel,
          address: address,
          default: true,
          is_default: $this.is_default,
        },
        success: function (res) {
          var href = window.location.href;
          var str = href.split("sell");
          if (res.code == 200) {
            window.location.href = str[0] + "sell/receipt/0";
          }
        },
      });
    });
  },
  methods: {
    dd() {
      // this.$router.push({
      //   path: `/sell/receipt`,
      // });
      this.$router.go(-1)
    },
    qufan() {
      var _this = this;
      if (_this.is_default == 1) {
        _this.is_default = 0;
      } else {
        _this.is_default = 1;
      }
    },
    sell_del(value){
         var $this = this;
         $this.$post($this.$api.address_del, {token:localStorage.getItem('token'),id:value}).then(data => {
             if(data.code == 200) {
               this.$router.back()
             } else {
               this.$toast('删除失败！')
             }
         })
     },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/base.scss";

.sell_Receipt {
  .header_r {
    position: absolute;
    width: rem(200px);
    height: rem(40px);
    line-height: rem(40px);
    bottom: rem(29px);
    right: rem(32px);
    text-align: right;
    img {
      width: rem(30px);
      height: rem(40px);
      margin-right: rem(8px);
    }
    i {
      font-size: rem(26px);
      color: #fd3b38;
    }
  }
  .sell_Receipt_main {
    width: 100%;
    height: 100%;
    padding-top: rem(88px);
    background: #f8f8f8;
    position: absolute;
    overflow-y: scroll;
    .sell_Receipt_list {
      background: #fff;
      margin-top: rem(3px);
      .sell_Receipt_items {
        width: 100%;
        background: #fff;
        padding: 0 rem(32px);
        border-radius: rem(10px);
        .sell_Receipt_item-item {
          width: 100%;
          height: rem(100px);
          line-height: rem(100px);
          border-bottom: rem(1px) solid #e0e0e0;
          display: flex;
          .item-l {
            width: rem(150px);
            font-size: rem(28px);
            font-weight: 400;
            color: #333;
            letter-spacing: rem(2px);
          }
          .item-r {
            display: flex;
            width: 100%;
            height: 100%;
            border: 0;
            outline: none;
            font-size: rem(28px);
            padding: 0 rem(22px);
            font-family: font_pc;
            font-weight: 400;
            color: #000;
          }
          .item-r::-webkit-input-placeholder {
            color: rgba(153, 153, 153, 1);
          }
        }
        .submit {
          width: rem(520px);
          height: rem(85px);
          line-height: rem(85px);
          background: #f44647;
          color: #fff;
          text-align: center;
          font-size: rem(32px);
          margin: rem(25px) auto 0;
          font-weight: bold;
          position: fixed;
          bottom: rem(40px);
          left: 50%;
          transform: translate(-50%, 0);
        }
      }
    }
    .morr {
      position: relative;
      width: 100%;
      height: rem(229px);
      // line-height:rem(83px);
      background: rgba(255, 255, 255, 1);
      padding: 0 rem(32px);
      margin-top: rem(20px);
      overflow: hidden;
      .default_add {
        font-weight: 500;
        color: #333;
        font-size: rem(28px);
        margin: rem(35px) 0 rem(21px) 0;
      }
      .add_img {
        position: absolute;
        top: rem(14px);
        right: rem(12px);
        width: rem(80px);
        height: rem(80px);
        img {
          display: block;
          width: rem(40px);
          height: rem(40px);
          margin: rem(20px) 0 0 rem(20px);
        }
      }
      .tip {
        font-size: rem(24px);
        color: #333;
      }
    }
  }
}
</style>