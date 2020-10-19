<template>
  <div class="find_comment">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="goback"></div>
    </div>
    <div class="comment_main commons_mainsContoApp">
      <div class="comment_top">
        <div class="com_top_header">
          <div class="top_avater">
            <img :src="params.avatar" alt="" />
            <span>{{params.nickname}}</span>
          </div>
          <div class="top_date">
            <span>{{params.create_time | time}}</span>
          </div>
        </div>
        <div class="com_top_img">
           <div class="swiper-container" id="swiper_two">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(a, b) in photo" :key="b">
              <img :src="a" alt="" />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        </div>
        <div class="com_top_to">
          <img :src="params.thumb" alt="" />
          <span>{{params.goods_name}}</span>
          <i>{{params.author}}</i>
          <van-icon name="arrow" />
        </div>
        <div class="com_top_msg">
          <p>
           {{params.found_con}}
          </p>
        </div>
      </div>
      <div class="comment_body">
        <div class="com_body_title">
          <p>全部评论(50)</p>
        </div>
        <div class="com_body_msg">
          <div class="msg_item">
            <div class="item_top">
              <div class="item_top_avatar">
                <img src="@/assets/images/goods.png" alt="" />
                <span>今天天气真好</span>
                <div class="zan">
                  <van-icon name="good-job-o" />
                  <span>50</span>
                </div>
              </div>
              <p>
                此件南瓜，作七棱腹，卷叶成流，流此件南瓜，作七棱腹，卷叶成流，流此件南瓜，作七棱腹，卷叶成流，流
              </p>
              <span>37分钟前</span>
            </div>
            <div class="item_body">
              <div class="item_top_avatar">
                <img src="@/assets/images/goods.png" alt="" />
                <span>今天天气真好</span>
                <div class="zan">
                  <van-icon name="good-job-o" />
                  <span>50</span>
                </div>
              </div>
              <p>
                此件南瓜，作七棱腹，卷叶成流，流此件南瓜，作七棱腹，卷叶成流，流
              </p>
              <span>37分钟前</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="com_bottom">
      <input type="text" placeholder="你也说些什么吧" />
      <div class="bottom_l">
        <img :src="srcPath + 'emoji.png'" alt="" />
      </div>
      <div class="bottom_r">
        <div align="center">
          <img :src="srcPath + 'zf.png'" alt="" />
          <p>50</p>
        </div>
        <div align="center">
          <van-icon name="good-job-o" />
          <p>50</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入 Swipter 组件
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
      params: {},   //所以参数
      photo: [], //发布的照片
    };
  },
  created() {
    this.get_f_detail()
  },
  mounted() {
    this.$nextTick(() => {
      // 下一个UI帧再初始化swiper
      var swiper_two = new Swiper("#swiper_two", {
        direction: "horizontal",
        initialSlide: 0, //默认第二个
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
        },
        // autoplay: {
        //   delay: 5000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        // },
        // slidesPerView: 1.7,
        // centeredSlides: true,
        // spaceBetween: 20,
        // normalizeSlideIndex:false,   //小圆点不到位问题
        // slidesOffsetAfter : 36,
        // observer: true,
        // observeParents: true,
        loop: true,
      });
    });
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    get_f_detail() {
      let iid = this.$route.params.id
      console.log(iid);
      this.$post(this.$api.f_detail,{
        id: iid
      }).then((res) => {
        if(res.code != 200) {
          this.$toast('数据获取失败！')
          return false
        } 
        this.params = res.data
        this.photo = res.data.found_photo.split(',')
      })
    }
  },
  filters: {
    time(v) {
      // return v.split(' ')[0]
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../../assets/sass/base.scss";
.find_comment {
  .comment_main {
    background-color: #f8f8f8;
    margin-bottom: 500px;
    .comment_top {
      width: 100%;
      padding-bottom: rem(80px);
      background-color: #fff;
      .com_top_header {
        display: flex;
        justify-content: space-between;
        line-height: rem(88px);
        padding: rem(24px) rem(28px) 0 rem(32px);
        // margin-top: rem(24px);
        .top_avater {
          img {
            width: rem(88px);
            height: rem(88px);
            vertical-align: middle;
          }
          span {
            font-size: rem(32px);
            font-weight: 700;
            margin-left: rem(34px);
          }
        }
        .top_date {
          span {
            font-size: rem(24px);
            color: #999;
          }
        }
      }
      .com_top_img {
        width: 100%;
        height: rem(750px);
        margin-top: rem(26px);
        .swiper-container {
          width: 100%;
          height: 100%;
          background-color: #fff;

          .swiper-slide {
            position: relative;
            img {
              position: absolute;
              width: 100%;
              top: 50%;
              transform: translateY(-50%);
              
            }
          }
        }
      }
      .com_top_to {
        position: relative;
        box-sizing: border-box;
        width: rem(690px);
        height: rem(117px);
        line-height: rem(85px);
        padding: rem(16px) rem(32px);
        background-color: #eee;
        border-radius: rem(10px);
        margin: rem(40px) auto 0;
        img {
          width: rem(85px);
          height: rem(85px);
          vertical-align: middle;
          margin-right: rem(32px);
        }
        span {
          font-size: rem(28px);
          font-weight: 600;
          color: #333;
          margin-right: rem(16px);
        }
        i {
          font-size: rem(24px);
          color: #666;
        }
        .van-icon {
          position: absolute;
          vertical-align: middle;
          right: rem(46px);
          top: 50%;
          transform: translateY(-50%);
        }
      }
      .com_top_msg {
        padding: 0 rem(46px) 0 rem(32px);
        margin-top: rem(72px);
        p {
          font-size: rem(28px);
          color: #333;
          line-height: 1.5;
          overflow: hidden;
        }
      }
    }
    .comment_body {
      margin-top: rem(16px);
      background-color: #fff;
      padding: rem(40px) rem(32px) 0 rem(52px);
      .com_body_title {
        p {
          font-size: rem(32px);
          color: #333;
          font-weight: 700;
        }
      }
      .com_body_msg {
        margin-top: rem(48px);
        .msg_item {
          padding-bottom: rem(32px);
          border-bottom: rem(1px) solid #eee;
          .item_top,
          .item_body {
            .item_top_avatar {
              position: relative;
              img {
                width: rem(85px);
                height: rem(85px);
                margin-right: rem(24px);
                border-radius: 50%;
                vertical-align: middle;
              }
              span {
                font-size: rem(28px);
                color: #666;
              }
              .zan {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                .van-icon {
                  font-size: rem(30px);
                  vertical-align: bottom;
                }
              }
            }
            > p {
              margin-left: rem(109px);
              margin-bottom: rem(16px);
              font-size: rem(28px);
              color: #333;
              padding-right: rem(109px);
              line-height: 1.2;
            }
            > span {
              margin-left: rem(109px);
              font-size: rem(24px);
              color: #999;
            }
          }
          .item_body {
            padding-left: rem(105px);
            margin-top: rem(40px);
            .item_top_avatar {
              position: relative;
              img {
                width: rem(60px);
                height: rem(60px);
              }
            }
          }
        }
      }
    }
  }
  .com_bottom {
    position: fixed;
    box-sizing: border-box;
    padding: rem(10px) rem(237px) rem(10px) rem(120px);
    bottom: 0;
    width: 100%;
    height: rem(100px);
    box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.08);
    background-color: #fff;
    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      padding-left: rem(32px);
      background-color: #eee;
      font-size: rem(28px);
    }
    .bottom_l {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: rem(9px);
      left: rem(10px);
      width: rem(82px);
      height: rem(82px);
      img {
        width: rem(48px);
        height: rem(48px);
      }
    }
    .bottom_r {
      position: absolute;
      display: flex;
      right: 0;
      top: rem(10px);
      > div {
        width: rem(82px);
        height: rem(82px);
        &:nth-child(1) {
          margin-right: rem(4px);
          p {
            margin-top: rem(7px);
          }
        }
        &:nth-child(2) {
          margin-right: rem(29px);
          padding-top: rem(1px);
          p {
            margin-top: rem(5px);
          }
        }
      }
      img {
        width: rem(32px);
        height: rem(32px);
        margin-top: rem(7px);
      }
      .van-icon {
        font-size: rem(40px);
        color: #666;
      }
    }
  }
}
</style>