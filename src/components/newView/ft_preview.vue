<template>
  <div class="ft_preview">
    <div class="back" @click="goback">
      <van-icon name="arrow-left" />
    </div>
    <div class="lay"></div>
    <div class="swiper-container" id="swiper_one">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(a, b) in images" :key="b">
          <img :src="a" alt="" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- <van-image-preview v-model="show" :images="images" > </van-image-preview> -->
    <div class="next" :class="{ allow: images.length != 0 }" @click="go_add">
      下一步
    </div>
    <router-link to="/find/ass" tag="div">
      <div class="ass" v-if="!goods_info">
        <img :src="srcPath + 'ass.png'" /> 请选择您要关联的商品
      </div>
      <div class="ass_goods" v-else>
        <img :src="goods_info.goods_master_image" />
        <span>{{ goods_info.goods_name }}</span>
        <i>{{ goods_info.author }}</i>
        <em>更换</em>
      </div>
    </router-link>
    <form action="" style="display: none" ref="form">
      <input type="file" accept="image/*" multiple ref="ipt" @change="ipt_change" name="file">
    </form>
  </div>
</template>

<script>
// 引入 Swipter 组件
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      show: true,
      index: 0,
      images: [],
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
      goods_info: {}, //商品数据
    };
  },
  created() {
    this.goods_info = JSON.parse(localStorage.getItem("goods_info")); //获取关联的商品数据
    this.images = JSON.parse(localStorage.getItem("upload_img")); //获取上传的返图
  },
  mounted() {
    localStorage.setItem("ft_imgs", JSON.stringify(this.images));
    new Swiper("#swiper_one", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });
  },
  methods: {
    go_add() {
      if (this.images.length == 0) {
        alert("选择商品");
      } else {
        this.$router.push({
          path: "/find/add",
        });
      }
    },
    goback() {
      localStorage.setItem("goods_info", "false");
      this.$router.push({
        path: "/find/ft",
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.swiper-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: visible;
  top: 50%;
  transform: translateY(-50%);
}
.swiper-slide {
  width: 100%;
}
.swiper-slide img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
}
.swiper-pagination {
  position: fixed;
  top: rem(63px);
  color: #fff;
  z-index: 9999;
  &>>>.swiper-pagination-current {
    font-size: rem(38px);
    font-weight: 700;
  }
    &>>>.swiper-pagination-total {
    font-size: rem(28px);
    font-weight: 700;
  }
}
.ft_preview {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
}
.back {
  position: fixed;
  z-index: 9999;
  top: rem(52px);
  left: rem(10px);
  // background-color: red;
  width: rem(64px);
  height: rem(64px);
  text-align: center;
  line-height: rem(64px);
  font-size: rem(30px);
  color: #fff;
}
.next {
  position: fixed;
  z-index: 9999;
  top: rem(52px);
  right: rem(55px);
  width: rem(140px);
  height: rem(64px);
  line-height: rem(64px);
  text-align: center;
  color: #fff;
  font-size: rem(28px);
  font-weight: 700;
  background-color: #ccc;
}
.allow {
  background-color: #f44647;
}
.ass {
  position: fixed;
  z-index: 9999;
  bottom: rem(24px);
  left: 50%;
  transform: translateX(-50%);
  padding-left: rem(48px);
  width: rem(690px);
  height: rem(117px);
  line-height: rem(117px);
  border: rem(1px) dashed #707070;
  color: #999;
  font-size: rem(28px);
  img {
    width: rem(48px);
    height: rem(44px);
    vertical-align: middle;
    margin-right: rem(32px);
  }
}
.ass_goods {
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 9999;
  bottom: rem(24px);
  left: 50%;
  transform: translateX(-50%);
  padding-left: rem(48px);
  padding-right: rem(22px);
  width: rem(690px);
  height: rem(117px);
  line-height: rem(117px);
  background-color: #fff;
  border-radius: rem(10px);
  img {
    width: rem(85px);
    height: rem(85px);
    vertical-align: middle;
    margin-right: rem(32px);
  }
  span {
    font-size: rem(28px);
    font-weight: 500;
    color: #333;
    margin-right: rem(16px);
  }
  i {
    font-size: rem(24px);
    color: #666;
  }
  em {
    display: block;
    width: rem(100px);
    height: rem(56px);
    text-align: center;
    line-height: rem(56px);
    background-color: #f44647;
    margin-left: auto;
    font-size: rem(26px);
    color: #fff;
    font-weight: 700;
  }
}
</style>