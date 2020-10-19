<template>
  <div class="coll-yhj">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="adviser()"></div>
      <span>我的优惠券</span>
      <div class="to_b"></div>
    </div>
    <div class="coll-yhj_main commons_mainsContoApp">
      <ul>
        <li @click="active(1)" :class="{'active': is_active == 1}">未使用</li>
        <li @click="active(2)" :class="{'active': is_active == 2}">已使用</li>
        <li @click="active(3)" :class="{'active': is_active == 3}">已过期</li>
      </ul>

      <div class="coll-yhj_list">
        <div class="coll-yhj_item">
          <div class="coll-yhj_boxs">
            <p class="p1">满200元可用现金劵</p>
            <p class="p2">
              2006-10-10
              <font>至</font>2020-10-01使用
            </p>
          </div>
          <div class="coll-yhj_boxs-num">120</div>
          <div class="coll-yhj_boxs-till">
            <img src="static/images/20200411/icon_xq/q2.png" alt />
          </div>
        </div>
        <div class="coll-yhj_item">
          <div class="coll-yhj_boxs">
            <p class="p1">满200元可用现金劵</p>
            <p class="p2">
              2006-10-10
              <font>至</font>2020-10-01使用
            </p>
          </div>
          <div class="coll-yhj_boxs-num">250</div>
          <div class="coll-yhj_boxs-till">
            <img src="static/images/20200411/icon_xq/q1.png" alt />
          </div>
        </div>
        <div class="coll-yhj_item">
          <div class="coll-yhj_boxs">
            <p class="p1">满200元可用现金劵</p>
            <p class="p2">
              2006-10-10
              <font>至</font>2020-10-01使用
            </p>
          </div>
          <div class="coll-yhj_boxs-num">580</div>
          <div class="coll-yhj_boxs-till">
            <img src="static/images/20200411/icon_xq/q1.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coll-sc",
  data() {
    return {
      text_mesg: "",
      is_active: 1
    };
  },
  methods: {
    adviser() {
      this.$router.go(-1); //返回上一层
    },
    active(i) {
        this.is_active = i
    }
  },
};
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import "../../assets/sass/base.scss";
@import "../../assets/font/font.css";
.coll-yhj {
  .coll-yhj_header {
    width: 100%;
    height: rem(114px);
    line-height: rem(114px);
    border-bottom: rem(1px) solid #ccc;
    display: flex;
    position: fixed;
    z-index: 9999;
    background: #333;
    box-sizing: content-box;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    .to_a {
      width: 20%;
      display: block;
      font-size: rem(40px);
      color: rgb(15, 15, 15);
      font-weight: bold;
      margin-left: rem(20px);
      color: #fff;
    }
    span {
      display: block;
      font-size: rem(30px);
      color: #fff;
      font-weight: bold;
      text-align: center;
      flex: 1;
      font-family: 黑体;
    }
    i {
      width: 25%;
      font-size: rem(45px);
      display: block;
      text-align: right;
      font-weight: bold;
      margin-right: rem(30px);
    }
  }
  .coll-yhj_main {
    width: 100%;
    height: 100%;
    padding-top: rem(114px);
    // .coll-yhj_title{
    //     width: 100%;
    //     height: rem(75px);
    //     line-height: rem(75px);
    //     padding:0 rem(110px);
    //     display: flex;
    //     justify-content: space-between;
    //     span{
    //         position: relative;
    //         font-size: rem(28px);
    //         color: rgb(165,165,165);
    //     }
    //     span.active:after{
    //         position: absolute;
    //         content: '';
    //         width: 80%;
    //         height: rem(2px);
    //         background: #000;
    //         bottom:rem(10px);
    //         left:50%;
    //         transform: translate(-50%,0);
    //     }
    // }
    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: rem(80px);
      line-height: rem(80px);
      padding: 0 rem(76px) 0;
      .active {
          color: #000;
          font-weight: 700;
             &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: rem(33px);
            height: rem(8px);
            background: linear-gradient(
              90deg,
              #f44647 0%,
              rgba(244, 70, 71, 0.15) 100%
            );
          }
      }
      li {
        position: relative;
        font-size: rem(32px);
        color: #666;
        height: 100%;
        .active {
          color: #000;
        }
      }
    }
    .coll-yhj_list {
      padding: rem(65px) rem(37.5px) rem(35px);
      .coll-yhj_item {
        width: rem(685px);
        height: rem(221px);
        background: url("../../assets/images/bgso_juan.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        .coll-yhj_boxs {
          position: absolute;
          width: rem(375px);
          height: rem(160px);
          border: rem(1px) solid #fff;
          left: rem(36px);
          top: rem(23px);
          .p1 {
            margin-top: rem(40px);
            color: #fff;
            font-size: rem(30px);
            text-align: center;
            font-family: 黑体;
            letter-spacing: rem(1px);
          }
          .p2 {
            margin-top: rem(30px);
            color: #fff;
            font-size: rem(24px);
            text-align: center;
            font-family: 黑体;
            font {
              margin: 0 rem(5px);
            }
          }
        }
        .coll-yhj_boxs-num {
          position: absolute;
          font-size: rem(85px);
          color: #fff;
          font-family: 黑体;
          top: rem(60px);
          right: rem(50px);
        }
        .coll-yhj_boxs-till {
          width: rem(156px);
          height: rem(156px);
          position: absolute;
          top: rem(30px);
          right: rem(40px);
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
