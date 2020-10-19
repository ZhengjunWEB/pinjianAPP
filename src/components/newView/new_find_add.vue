<template>
  <div class="find_add">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="show = true"></div>
      <!-- <span>我的返图</span>
      <div class="header_r"></div> -->
    </div>
    <div class="find_add_main commons_mainsContoApp">
      <div class="add_img">
        <div v-for="(item, i) in upload_img" :key="i" class="ft_imgBox">
          <img :src="item" alt="" />
          <img
            :src="srcPath + 'c_delete.png'"
            class="delete"
            @click="img_delete(i)"
          />
        </div>
        <div @click="upload">
          <img :src="srcPath + 'add_img.png'" alt="" />
        </div>
        <span v-show="upload_img == ''">点击上传图片</span>
      </div>
        <div class="goods_box" v-if="cus_data == ''" @click="to_ass">   
          <img :src="srcPath + 'add_goodsBox.png'" v-if="!goods_info" />
          <div class="ass_goods" v-else>
            <img :src="goods_info.goods_master_image" />
            <span>{{ goods_info.goods_name }}</span>
            <i>{{ goods_info.author }}</i>
            <em>更换</em>
          </div>
        </div>
        <div class="goods_box" v-else @click="g_edit">    <!--自定义商品 -->
          <div class="ass_goods">
            <img :src="cus_data.thumb" />
            <span>{{cus_data.goods_name }}</span>
            <i>{{ cus_data.author }}</i>
            <em>修改</em>
          </div>
        </div>
      <textarea
        class="textarea"
        placeholder="想说什么就说什么吧"
        v-model="found_con"
        @input="text_ipt"
      ></textarea>
    </div>
    <div class="add_bottom">
      <div align="center" @click="go_add(1)">
        <img :src="srcPath + 'save.png'" alt="" />
        <p>保存并退出</p>
      </div>
      <div @click="done(0)" v-if="cus_data == ''">发布</div>
      <div @click="done(1)" v-else>z发布</div>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="wrapper_title">退出前是否需要保存草稿</div>
        <div class="wrapper_body">
          <div @click="go_add(0)">不保存</div>
          <div @click="go_add(1)">保存</div>
        </div>
      </div>
    </van-overlay>
    <form action="" style="display: none" ref="form">
      <input
        type="file"
        accept="image/*"
        multiple
        ref="ipt"
        @change="ipt_change"
        name="file"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
      img_list: [],
      found_con: "",
      upload_img: [],
      goods_info: {},
      cus_data: ''
    };
  },
  created() {
    this.img_list = JSON.parse(localStorage.getItem("ft_imgs"));
    this.goods_info = JSON.parse(localStorage.getItem("goods_info")); //获取关联的商品数据
    this.found_con = localStorage.getItem("ft_text"); //获取保存的文字
    this.upload_img = JSON.parse(localStorage.getItem("upload_img")) || []; //获取图片
    this.cus_data = JSON.parse(localStorage.getItem("cus_data")) || []; //自定义商品数据
  },
  methods: {
    go_add(i) {
      //退出判断是否保存  （清空localstore）
      this.show = false;
      if (i == 0) {
        localStorage.removeItem("upload_img");
        localStorage.removeItem("goods_info");
        localStorage.removeItem("ft_text");
        this.$router.push({
          path: "/find/ft",
        });
      } else if (i == 1) {
        this.$router.push({
          path: "/find/ft",
        });
      }
    },
    text_ipt() {
      //textarea输入值存储进localstore
      localStorage.setItem("ft_text", this.found_con);
    },
    upload() {
      //点击input事件
      this.$refs.ipt.click();
    },
    img_delete(i) {
      //图片删除
      this.upload_img.splice(i, 1);
    },
    ipt_change() {
      //图片上传
      let a = this.$refs.form;
      var formData = new FormData(a);
      axios({
        method: "post",
        url: "http://console.pinjianapp.com/api/usergoods/interactive",
        token: this.token,
        data: formData,
      })
        .then((data) => {
          console.log(data);
          //  localStorage.setItem('upload_img', [])
          this.upload_img.push(data.data.data);
          localStorage.setItem("upload_img", JSON.stringify(this.upload_img));
        })
        .catch(() => {
          alert("上传失败");
        });
    },
    to_ass() {   //收藏商品的点击跳转
      this.$router.push({   
        path: '/find/ass'
      })
    },
    g_edit() {   //自定义商品点击跳转修改
      this.$router.push({
        path: '/find/cus'
      })
    },
    done(i) {
      
      if (this.found_con == null) {
        this.$toast('请填写必填项哦！')
        return false;
      }
      if(i == 0) {    //选择商品上传返图
        let c = this.upload_img.join(",");
        this.$post(this.$api.create_ft, {
        token: localStorage.getItem("token"),
        found_con: this.found_con,
        found_photo: c,
        goodsid: this.goods_info.goods_id,
        type: 1,
      }).then((res) => {
        if (res.code == 200) {
          localStorage.removeItem("upload_img");
          localStorage.removeItem("goods_info");
          localStorage.removeItem("ft_text");
          this.$router.push("/find/ft");
        }
        });
      } else if(i ==1 ) {  //自定义商品上传返图
        let c = this.upload_img.join(",");
        let d = this.cus_data.photo.join(",");
        this.$post(this.$api.create_ft, {
          token: localStorage.getItem("token"),
          type: 0,
          found_con: this.found_con,
          found_photo: c,
          goods_name: this.cus_data.goods_name,
          author: this.cus_data.author,
          con: this.cus_data.con || '',
          photo: d,
          thumb: this.cus_data.thumb,
          price: this.cus_data.price || '',
        }).then((res) => {
        if (res.code == 200) {
            localStorage.removeItem("upload_img");
            localStorage.removeItem("goods_info");
            localStorage.removeItem("ft_text");
            localStorage.removeItem("cus_data");
            this.$router.push("/find/ft");
          }
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.find_add {
  .find_add_main {
    .add_img {
      width: 100%;
      height: rem(220px);
      padding: rem(40px);
      padding-left: rem(32px);
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      > div {
        display: inline-block;
        border-radius: rem(10px);
        margin-right: rem(8px);
        // overflow: hidden;
        img {
          width: rem(180px);
          height: rem(180px);
        }
      }
      .ft_imgBox {
        position: relative;
        margin-right: rem(30px);
        .delete {
          position: absolute;
          width: rem(40px);
          height: rem(40px);
          top: rem(-20px);
          right: rem(-20px);
        }
      }
      span {
        position: relative;
        top: rem(-75px);
        left: rem(30px);
        font-size: rem(28px);
        color: #999;
      }
    }
    .goods_box {
      text-align: center;
      margin-top: rem(25px);
      img {
        width: rem(690px);
        height: rem(117px);
      }
      .ass_goods {
        display: flex;
        align-items: center;
        padding-left: rem(32px);
        padding-right: rem(22px);
        width: rem(690px);
        height: rem(117px);
        line-height: rem(117px);
        background-color: #eee;
        border-radius: rem(10px);
        margin: 0 auto;
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
    }
    .textarea {
      width: 100%;
      padding: 0 rem(28px) 0 rem(32px);
      margin-top: rem(40px);
      height: rem(650px);
      border: none;
      outline: none;
      font-size: rem(28px);
      line-height: rem(40px);
      &::placeholder {
        font-size: rem(28px);
      }
    }
  }
  .add_bottom {
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    width: 100%;
    height: rem(125px);
    padding: 0 rem(28px) 0 rem(32px);
    > div {
      &:nth-child(1) {
        width: rem(148px);
        height: rem(85px);
        img {
          width: rem(36px);
          height: rem(36px);
          margin-top: rem(5px);
        }
        p {
          font-size: rem(24px);
          margin-top: rem(16px);
        }
      }
      &:nth-child(2) {
        width: rem(520px);
        height: rem(85px);
        line-height: rem(85px);
        background-color: #f44647;
        text-align: center;
        font-size: rem(32px);
        font-weight: 700;
        color: #fff;
      }
    }
  }
  .van-dialog {
    width: rem(600px) !important;
    height: rem(303px);
  }
}
</style>