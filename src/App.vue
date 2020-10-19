<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- 放子组件 -->
    <!--<router-view v-if="isRouterAlive"></router-view>-->
    <!-- <router-view/> -->
    <!-- 备用 -->
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<style lang="scss">
// 引入 基础 scss
@import "./assets/sass/base.scss";
@import "./assets/font/font.css";
html * {
  max-height: 99999999px;
}
//弹出框弹出
.van-overlay {
  z-index: 10000;
  .wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: rem(600px);
    height: rem(303px);
    background-color: #fff;
    .wrapper_title {
      font-size: rem(32px);
      color: #333;
      font-weight: 700;
      letter-spacing: rem(3px);
      margin-top: rem(83px);
    }
    .wrapper_body {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 rem(76px);
      margin-top: rem(63px);
      > div {
        width: rem(200px);
        height: rem(85px);
        line-height: rem(85px);
        font-size: ren(28px);
        font-weight: 700;
        letter-spacing: rem(2px);
        &:nth-child(1) {
          background-color: #eee;
        }
        &:nth-child(2) {
          background-color: #F44647;
          color: #fff;
        }
      }
    }
  }
}
.van-image-preview__index {
  font-size: rem(38px) !important;
}
//toast提示
.van-toast {
  padding: rem(20px) rem(32px);
  border-radius: rem(10px);
  transform: translate3d(-50%,0,0);
  // bottom: rem(200px);
  top: 85%;
  .van-toast__text {
    font-size: rem(26px);
  }
}

.App-header {
  width: 100%;
  height: rem(128px); //
  // height: rem(88px);   //
  line-height: rem(88px);
  display: flex;
  position: fixed;
  z-index: 2006;
  background: #ffffff;
  padding: 0 rem(32px);
  box-sizing: border-box;
  padding-top: rem(40px); //
  .to_a {
    width: 20%;
    display: block;
    font-size: rem(30px);
    font-weight: bold;
    color: #000;
  }
  span {
    display: block;
    font-size: rem(38px);
    color: #000;
    font-weight: bold;
    text-align: center;
    flex: 1;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .to_b {
    width: 25%;
    font-size: rem(28px);
    display: block;
    text-align: right;
    padding-right: rem(10px);
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    margin-left: auto;
  }
}
.commons_mainsContoApp {
  padding-top: rem(128px) !important; //
}

//   头部结束

.suolistcon {
  padding-top: rem(295px);
}

.swal-overlay--show-modal .swal-modal {
  width: 80%;
}
.swal-title {
  font-size: rem(35px);
  padding: rem(20px) rem(30px);
}
.swal-title:not(:last-child) {
  margin-bottom: rem(15px);
}
.swal-title:first-child {
  margin-top: rem(30px);
}
.swal-text {
  font-size: rem(28px);
  padding: 0 rem(20px);
}
.swal-footer {
  text-align: right;
  padding-top: rem(15px);
  margin-top: 0;
  padding: rem(20px) rem(30px);
  border-radius: inherit;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.swal-button {
  font-size: rem(26px);
  padding: rem(10px) rem(30px);
  margin: 0;
  cursor: pointer;
}
.swal-icon:first-child {
  margin-top: rem(32px);
}
// 商品列表通用
.App_mainConList {
  width: 100%;
  .mi-mi-mainItem {
    width: 100%;
    .item {
      width: rem(332px);
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px rem(6px) rem(20px) rgba(0, 0, 0, 0.1);
      opacity: 1;
      overflow: hidden;
      margin-top: rem(22px);
      img {
        display: block;
        width: 100%;
        height: rem(332px);
      }
      .item_comn {
        height: rem(180px);
        width: 100%;
        padding: rem(20px) rem(30px) 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        strong {
          font-size: rem(30px);
          height: rem(42px);
          line-height: rem(42px);
          color: #000;
          font-weight: bold;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        span {
          display: block;
          font-size: rem(25px);
          color: #666;
          font-weight: 400;
          height: rem(36px);
          line-height: rem(36px);
          margin-top: rem(5px);
        }
        .pp_con {
          margin-top: rem(10px);
          display: flex;
          dd {
            font-size: rem(31px);
            color: #FD3B38;
            font-weight: bold;
            margin-top: rem(10px);
            img {
              display: inline-block;
              width: rem(12px);
              height: rem(20px);
            }
          }
          dt {
            width: rem(61px);
            height: rem(61px);
            background: rgba(203, 72, 72, 1);
            border-radius: 50%;
            margin-left: auto;
            margin-top: rem(-15px);
            position: relative;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .item:nth-of-type(odd) {
      float: left;
    }
    .item:nth-of-type(even) {
      float: right;
    }
  }
}

.pswp {
  z-index: 99999999999 !important;
}

// 搜索错误提示
.falimg {
  width: rem(146px);
  height: rem(146px);
  display: block;
  margin: rem(150px) auto 0;
}
.dp {
  font-size: rem(28px);
  font-weight: 400;
  color: #999999;
  text-align: center;
  width: 95%;
  margin: 0 auto;
  margin-top: rem(31px);
  line-height: rem(40px);
}

// 底部
nav.bottom {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: rem(98px);
  background: #fff;
  z-index: 9999;
  justify-content: space-around;
  // .item{
  //   font-size:rem(28px);
  //   color:#fff;
  //   font-family: 黑体;
  // }
  .item {
    display: block;
    width: 20%;
    text-align: center;
    color: #333;
    span {
      width: rem(48px);
      height: rem(48px);
      display: block;
      margin: rem(12px) auto 0;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    p {
      font-size: rem(20px);
      color: #999999;
      opacity: 1;
      font-weight: 400;
      margin-top: rem(6px);
    }
  }
  .item.router-link-active p {
    color: #333;
    font-weight: bold;
  }
  .item .router-link-active p {
    color: #333;
    font-weight: bold;
  }
}

// 列表
// .App_mainConList{
//     width: 100%;
//     padding:0 rem(10px);
//     box-sizing: border-box;
//     margin-bottom:rem(30px);
//     .mi-mi-mainItem{
//       width:100%;
//       .item{
//         width:rem(360px);
//         overflow: hidden;
//         background: #fff;
//         float:left;
//         border:rem(1px) solid #666;
//         margin-bottom:rem(35px);
//         .mu_img{
//           width:100%;
//           height:rem(360px);
//           img{
//             display: block;
//             width: rem(358px);
//             height:rem(358px);
//             margin: 0 auto;
//           }
//         }
//         .mesg_con{
//           width:100%;
//           height:rem(65px);
//           line-height:rem(65px);
//           display:flex;
//           padding:0 rem(30px) 0 rem(20px);
//           b{
//             font-size:rem(20px);
//             color:#6D6D6D;
//             margin-right:rem(8px);
//           }
//           strong{
//             font-size:rem(20px);
//             color:#6D6D6D;
//             display:none;
//           }
//           p{
//             margin-left:auto;
//             height:rem(35px);
//             line-height:rem(32px);
//             background:#906d33;
//             color:#fff;
//             text-align:center;
//             font-size:rem(20px);
//             border-radius:rem(20px);
//             margin-top:rem(15px);
//             padding:0 rem(20px);
//           }
//         }
//       }
//       .item:nth-of-type(even) {
//         float: right;
//       }
//     }
// }

// 错误提示
.Apperror img {
  display: block;
  width: rem(334px);
  height: rem(367px);
  margin: rem(80px) auto rem(30px);
}
.Apperror span {
  display: block;
  text-align: center;
  
  font-size: rem(26px);
  color: #666;
  font-style: italic;
  letter-spacing: 2px;
}
</style>
