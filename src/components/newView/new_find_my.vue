<template>
  <div class="find_my">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="hidden"></div>
      <span>我的返图</span>
      <div class="header_r"></div>
    </div>
    <div class="find_my_main commons_mainsContoApp">
      <div class="my_item" v-for="(a, i) in total" :key="a.id">
        <div class="item_top">
          <div class="top_l">
            <img :src="a.thumb" alt="" />
          </div>
          <div class="top_r">
            <p>{{a.goods_name}}</p>
            <span>{{a.author}}</span>
          </div>
          <div class="delete" @click="showPopup(a.id)">
            <img :src="srcPath + 'more.png'" alt="" />
          </div>
        </div>
        <div class="item_date">
          <span>{{a.create_time | time}}</span>
        </div>
        <div v-if="every_img[i].length == 3 || every_img[i].length > 3"  class="item_img3"  @click="click_i(item.id, every_img[i])">
          <img :src="c"  v-for="(c, b) in every_img[i]"  :key="b"  v-show="b < 3"  />
          <div class="img_sheet">
            {{'+'+every_img[i].length}}
          </div>
        </div>
        <div v-else-if="every_img[i].length == 2"  class="item_img2"  @click="click_i(item.id, every_img[i])"  >
          <img :src="c" v-for="(c, b) in every_img[i]" :key="b" v-show="b < 3" />
        </div>
        <div v-else-if="every_img[i].length == 1" class="item_img1" @click="click_i(item.id, every_img[i])">
          <img :src="c" v-for="(c, b) in every_img[i]" :key="b" v-show="b < 3" />
        </div>
        <div class="item_msg">
          <p>
            {{a.found_con}}
          </p>
        </div>
        <div class="item_bottom">
          <div><img :src="srcPath + 'zf.png'" alt="" /></div>
          <router-link to="/find/comment/1" tag="div">
            <div>
              <!-- <img :src="srcPath + 'pl.png'" alt="" /> <span>500000</span>  点赞功能 -->
            </div>
          </router-link>
          <div><img :src="srcPath + 'zan.png'" alt="" /> <span>{{a.praise_num}}</span></div>
        </div>
      </div>
    </div>
    <!-- <router-link to="/find/add" tag="div"> -->
    <!-- <form action="" style="display: none" ref="form">
      <input type="file" accept="image/*" multiple ref="ipt" @change="ipt_change" name="file">
    </form> -->
      <div class="add_ft" @click="go_add" > <!--@click="upload" -->
        <img :src="srcPath + 'add.png'" alt="" />
      </div>
    <!-- </router-link> -->

    <van-popup v-model="show" position="bottom" :style="{ height: '21%' }">
      <div @click="confirm">删除</div>
      <div @click="show = false">取消</div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
      show: false,
      upload_img: [],
      total: [], //所有返图数据
      page: 1, //页数
      every_img: [], //所有返图图片
      delete_no: '' , //确认删除的id
    };
  },
  created() {
    this.gte_data()
  },
  methods: {
    hidden() {
      this.$emit("hidden_my");
    },
    //显示删除弹出层
    showPopup(id) {
      this.show = true;
      this.delete_no = id
    },
    //确认删除
    confirm() {
      this.$post(this.$api.dele_userFigure, {
        maxid: this.delete_no,
        token: localStorage.getItem('token')
      }).then( (data) => {
        if(data.data.code == 200) {
          this.show = false;
          this.gte_data()
        }
      })
    },
    upload() {
      this.$refs.ipt.click()
    },
    go_add() {
      this.$emit("hidden_my")
      this.$router.push({
        path: '/find/add'
      })
    },
    gte_data() {
      this.total = []
      this.$post(this.$api.get_userFigure, {
      token: localStorage.getItem('token'),
      no: 10,
      page: this.page
    }).then( (data) => {
      let s = data.data.data
      this.total.push(...s) 
      s.forEach( (item, i) => {
        this.every_img.push(item.found_photo.split(','))      //.push(...item.found_photo.split(','))
      })
      
    })
    }
    // ipt_change() {
    //   let a = this.$refs.form
    //   var formData = new FormData(a);
    //   axios({
    //      method: 'post',
    //      url: 'http://console.pinjianapp.com/api/usergoods/interactive',
    //      token: this.token,
    //      data: formData,
    //    }).then( (data) => {
    //      localStorage.setItem('upload_img', [])
    //      this.upload_img.push(data.data.data)
    //      localStorage.setItem('upload_img', JSON.stringify(this.upload_img))
    //      this.$router.push({
    //        path:'/find/preview'
    //      })
    //    }).catch( () => {
    //      alert('上传失败')
    //    })
    // }
  },
  filters: {
    time(v) {
      return v.split(" ")[0];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.find_my {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  .find_my_main {
    margin-bottom: rem(178px);
    min-height: 100vh;
    .my_item {
      width: 100%;
      padding: 0 rem(28px) 0 rem(32px);
      .item_top {
        position: relative;
        display: flex;
        width: 100%;
        padding-top: rem(40px);
        .top_l {
          margin-right: rem(34px);
          img {
            width: rem(85px);
            height: rem(85px);
          }
        }
        .top_r {
          p {
            font-size: rem(26px);
            color: #333;
            font-weight: 600;
            margin-bottom: rem(26px);
          }
          span {
            font-size: rem(24px);
            color: #666;
          }
        }
        .delete {
          position: absolute;
          display: flex;
          align-items: center;
          top: rem(40px);
          right: 0;
          width: rem(48px);
          height: rem(48px);
          img {
            width: rem(36px);
            height: rem(11px);
          }
        }
      }
      .item_date {
        margin-top: rem(23px);
        span {
          font-size: rem(24px);
          color: #999;
        }
      }
          .item_img3 {
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
        &:nth-child(2) {
          width: rem(222px);
          height: rem(222px);
          margin-left: rem(8px);
        }
        &:nth-child(3) {
          position: absolute;
          width: rem(222px);
          height: rem(222px);
          top: 0;
          right: 0;
        }
      }
      .img_sheet {
        position: absolute;
        width: rem(222px);
        height: rem(222px);
        text-align: center;
        line-height: rem(222px);
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,.55);
        font-size: rem(50px);
        color: #fff;
        border-radius: rem(5px);
      }
    }
    .item_img2 {
      display: flex;
      justify-content: space-between;
      margin-top: rem(40px);
      img {
        width: rem(337px);
        height: rem(337px);
      }
    }
    .item_img1 {
      margin-top: rem(40px);
      img {
        width: rem(452px);
        height: rem(452px);
      }
    }
      .item_img {
        width: rem(452px);
        height: rem(452px);
        // background-color: pink;
        margin-top: rem(24px);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item_msg {
        margin-top: rem(32px);
        p {
          font-size: rem(28px);
          color: #999;
          line-height: rem(40px);
          overflow: hidden;
        }
      }
      .item_bottom {
        display: flex;
        width: 100%;
        height: rem(80px);
        line-height: rem(80px);
        margin-top: rem(21px);
        color: #999;
        > div {
          // width: rem(80px);
          // padding-right: rem(10px);
          height: rem(80px);
          &:nth-child(1) {
            width: rem(80px);
            margin-right: rem(70px);
            img {
              width: rem(32px);
              height: rem(32px);
            }
          }
          &:nth-child(3) {
            margin-left: auto;
          }
          img {
            width: rem(36px);
            height: rem(36px);
            vertical-align: rem(-8px);
          }
          span {
            font-size: rem(28px);
          }
        }
      }
    }
  }
  .add_ft {
    position: fixed;
    bottom: rem(38px);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: rem(120px);
    height: rem(120px);
    border-radius: 50%;
    background-color: #f44647;
    box-shadow: 0px 35px 34px rgba(244, 70, 71, 0.2);
    img {
      width: rem(44px);
      height: rem(44px);
    }
  }
  .van-popup {
    box-sizing: border-box;
    text-align: center;
    padding: rem(50px) 0 0 0;
    > div {
      line-height: rem(54px);
      text-align: center;
      font-size: rem(32px);
      font-weight: 700;
      &:nth-child(1) {
        color: #f44647;
      }
      &:nth-child(2) {
        margin-top: rem(90px);
      }
    }
  }
}
</style>