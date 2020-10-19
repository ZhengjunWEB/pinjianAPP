<template>
  <div class="font_ft commons_mainsContoApp">
    <div class="ft_item">
      <div class="item_top">
        <div class="top_l">
          <img src="" alt="" />
        </div>
        <div class="top_r">
          <p>天际·情怀</p>
          <span>戴尔其</span>
        </div>
      </div>
      <div class="item_article">
        此件南瓜，作七棱腹，卷叶成流，流口一任自然，
        瓜藤作壶柄，蜿蜒灵动，瓜梗作盖钮，挖中空而
        显秀巧，南瓜造型活灵活现，浑然天成。
      </div>
      <div class="item_img">
        <img src="~@/assets/images/c5.png" alt="" />
        <img src="~@/assets/images/c5.png" alt="" />
        <img src="~@/assets/images/c5.png" alt="" />
      </div>
      <div class="item_user">
        <div class="user_avatar">
          <img src="~@/assets/images/c5.png" alt="" />
          <span>小胡小胡</span>
        </div>
        <div class="user_date">
          <span>2个小时前</span>
        </div>
      </div>
      <div class="item_bottom">
        <div><van-icon name="share-o" /></div>
        <div><van-icon name="chat-o" /> <span>50</span></div>
        <div><van-icon name="good-job" /> <span>50</span></div>
      </div>
    </div>
    44
  </div>
</template>

<script>
export default {
  name: "font_ft",
  data() {
    return {};
  },

  mounted() {
    var $this = this;
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.font_ft {
  position: absolute;
  width: 100%;
  padding-top: rem(168px);
  // background: #f8f8f8;
  padding: 0 rem(36px) 0 rem(32px);
  margin-bottom: rem(98px);
  .ft_item {
    width: 100%;
    // height: rem(959px);
    box-sizing: border-box;
    border-bottom: rem(1px) solid #eee;
    // background-color: pink;
    &:nth-child(1) {
      margin-top: rem(96px);
    }
    .item_top {
      display: flex;
      width: 100%;
      // height: rem(85px);
      padding-top: rem(40px);
      .top_l {
        margin-right: rem(34px);
        img {
          width: rem(85px);
          height: rem(85px);
          background-color: pink;
        }
      }
      .top_r {
        p {
          font-size: rem(26px);
          color: #333;
          font-weight: 500;
          margin-bottom: rem(26px);
        }
        span {
          font-size: rem(24px);
          color: #666;
        }
      }
    }
    .item_article {
      margin-top: rem(39px);
      font-size: rem(32px);
      color: #333;
      font-weight: 700;
      line-height: 1.5;
    }
    .item_img {
      position: relative;
      width: 100%;
      height: rem(452px);
      margin-top: rem(40px);
      img {
        // background-color: pink;
        border-radius: rem(5px);
        &:nth-child(1) {
          width: rem(452px);
          height: rem(452px);
        }
        &:nth-child(n + 2) {
          width: rem(222px);
          height: rem(222px);
        }
        &:nth-child(3) {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }
    .item_user {
      display: flex;
      line-height: rem(44px);
      margin-top: rem(32px);
      justify-content: space-between;
      font-size: rem(24px);
      .user_avatar {
        img {
          width: rem(44px);
          height: rem(44px);
          border-radius: 50%;
          vertical-align: middle;
          margin-right: rem(16px);
        }
        span {
          color: #333;
        }
      }
      .user_date {
        color: #e8c396;
      }
    }
    .item_bottom {
      display: flex;
      width: 100%;
      height: rem(36px);
      margin-top: rem(38px);
      color: #999;
      > div {
        .van-icon {
          font-size: rem(36px);
        }
        span {
          font-size: rem(28px);
        }
      }
    }
  }
}
</style>