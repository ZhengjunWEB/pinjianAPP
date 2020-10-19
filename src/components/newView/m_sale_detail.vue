<template>
  <div class="m_sale_detail">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="goback()"></div>
      <span>售后详情</span>
      <div class="to_b"></div>
    </div>
    <div class="detail_main commons_mainsContoApp">
      <div class="detail_top">
        <h2>您的售后信息处理中</h2>
        <p>您已成功发起售后申请，客服会第一时间与您进行联系，请耐心等待。</p>
      </div>
      <div class="detail_status">
        <h3>售后状态</h3>
        <ul>
          <li><span>售后单号</span> <span>123457</span></li>
          <li><span>申请时间</span> <span>2020-02-23 12：36</span></li>
          <li><span>售后状态</span> <span>客服核对中</span></li>
        </ul>
      </div>
      <div class="detail_msg">
        <h3>售后信息</h3>
        <div class="con_list_orde_con">
          <div class="con_list_orde_con-iltem">
            <div class="order_body">
              <div class="order_item">
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
            </div>
          </div>
        </div>
        <ul>
          <li><span>售后原因</span> <span>商品质量问题</span></li>
          <li><span>售后件数</span> <span>1</span></li>
          <li><span>购买金额</span> <span>￥3600</span></li>
          <li><span>原因描述</span> </li>
        </ul>
        <div class="description">
          <p>本呢这是文本呢本呢这是文本呢本呢这是文本呢呢这是文本呢本呢这
            是文本呢本呢这是文本呢本呢本呢这是文本呢这是文本呢 </p>
        </div>
        <div class="btn1">取消售后</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: {
        image: "~@/assets/images/c5.png",
        goods_name: "仿古",
        author: "拉拉拉",
        goods_no: 123456,
        goods_price: 998,
        goods_num: 1,
      },
    };
  },
  methods: {
    goback() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/base.scss";
@import "@/assets/sass/cartCommon.scss";
.m_sale_detail {
  background-color: #f8f8f8;
  margin-bottom: rem(200px);
  .detail_top {
    width: 100%;
    height: rem(260px);
    background-color: #2b2c3e;
    padding: rem(60px) rem(42px) 0 rem(32px);
    h2 {
      font-size: rem(36px);
      color: #fff;
      font-weight: 700;
      margin-bottom: rem(36px);
      letter-spacing: rem(3px);
    }
    p {
      font-size: rem(26px);
      color: #fff;
      line-height: 2;
      letter-spacing: rem(2px);
    }
  }
  .detail_status {
    width: 100%;
    height: rem(308px);
    padding: rem(40px) rem(32px) 0;
    background-color: #fff;
    h3 {
      font-size: rem(32px);
      font-weight: 700;
      color: #333;
      padding-bottom: rem(24px);
      border-bottom: rem(1px) solid #eee;
      margin-bottom: rem(13px);
      letter-spacing: rem(2px);
    }
    ul {
      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: rem(32px);
        span {
          font-size: rem(28px);
          color: #333;
        }
      }
    }
  }
  .detail_msg {
    background-color: #fff;
    margin-top: rem(16px);
    padding: rem(40px) rem(32px) 0;
    h3 {
      font-size: rem(32px);
      font-weight: 700;
      color: #333;
      padding-bottom: rem(24px);
      border-bottom: rem(1px) solid #eee;
      margin-bottom: rem(13px);
      letter-spacing: rem(2px);
    }
    & >>> .con_list_orde_con {
      .con_list_orde_con-iltem {
        box-shadow: none;
        padding: 0;
      }
    }
    ul {
      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: rem(32px);
        span {
          font-size: rem(28px);
          color: #333;
        }
      }
    }
  }
  .description {
    background-color: #f8f8f8;
    padding: rem(32px) rem(31px) rem(32px) rem(20px);
    font-size: rem(28px);
    color: #666;
    line-height: 1.5;
  }
  .btn1 {
    width: rem(248px);
    height: rem(100px);
    text-align: center;
    line-height: rem(100px);
    background-color: #f44647;
    color: #fff;
    font-size: rem(32px);
    font-weight: 700;
    margin-top: rem(71px);
    margin-left: auto;
  }
}
</style>
