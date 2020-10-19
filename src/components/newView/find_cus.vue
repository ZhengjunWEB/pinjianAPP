<template>
  <div class="find_cus">
    <div class="App-header">
      <div class="to_a iconfont iconzuo" @click="goback"></div>
      <span>自定商品</span>
      <div class="header_r"></div>
    </div>
    <div class="find_nl_main commons_mainsContoApp">
      <div class="item">
        <div>
          <span>商品名称</span>
          <i>(必填)</i>
        </div>
        <input
          type="text"
          v-model="goods_name"
          placeholder="请填入您的作品名称"
        />
      </div>
      <div class="item">
        <div>
          <span>作者</span>
          <i>(必填)</i>
        </div>
        <input type="text" v-model="author" placeholder="请填入您的作品作者" />
      </div>
      <div class="item">
        <div>
          <span>购入价格</span>
          <i>(选填)</i>
        </div>
        <input type="text" v-model="price" placeholder="请填入您的商品购价" />
      </div>
      <div class="item">
        <div>
          <span>单品简介</span>
          <i>(选填)</i>
        </div>
        <div class="textarea_box">
          <textarea
            maxlength="200"
            v-model="con"
            placeholder="向我们介绍您的单品"
          >
          </textarea>
          <div class="count">
            <span>{{ numbre }}</span
            ><span>/200</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div>
          <span>商品图片</span>
          <i>(必填)</i>
        </div>
        <!-- <input type="text" v-model="author"> -->
      </div>
      <div class="e_uploadImg">
        <div v-for="(item, i) in upload_img" :key="i" class="ft_imgBox">
          <img :src="item" alt="" />
          <img
            :src="srcPath + 'c_delete.png'"
            class="delete"
            @click="img_delete(i)"
          />
        </div>
      </div>
      <div class="add_img" @click="add_img" v-show="upload_img.length < 6">
        <img :src="srcPath + 'add_img.png'" alt="">
      </div>
      <form action="" style="display: none" ref="form">
        <input type="file" accept="image/*" multiple ref="ipt" @change="ipt_change" name="file" />
      </form>
    </div>
    <div class="done_box" >
      <div class="done" @click="done">完成</div>
    </div>
    <div class="tip" v-show="show_tip">
      请填入必选项！
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      found_con: "",
      found_photo: "",
      goods_name: "",
      author: "",
      price: "",
      con: "",
      photo: "",
      thumb: "",
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
      show_tip: false,
      upload_img: []  //上传图片保存
    };
  },
  methods: {
    goback() {
      localStorage.removeItem('cus_data')
      this.$router.go(-1);
    },
    add_img() {
      //调用h5相机
      this.$refs.ipt.click();
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
          // localStorage.setItem("cus_img", JSON.stringify(this.upload_img));
        })
        .catch(() => {
          alert("上传失败");
        });
    },
    img_delete(i) {
      //图片删除
      this.upload_img.splice(i, 1);
    },
    done() {   //发布
    if(this.author==null || this.goods_name==null || this.upload_img.length == 0) {
      this.$toast('请填写必填项哦！')
      return false
    }
      let cus_data = {}
      cus_data.con = this.con //介绍
      cus_data.price = this.price  //价格
      cus_data.thumb = this.upload_img[0] //主图
      cus_data.author = this.author //作者
      cus_data.goods_name = this.goods_name  //商品名称
      cus_data.photo = this.upload_img //商品图片
      localStorage.setItem('cus_data', JSON.stringify(cus_data)) 
      this.$router.push({
        path: '/find/add'
      })
      // let $this = this
      // if( !this.goods_name || !this.author) {
      //   this.show_tip = true
      //   setTimeout(() => {
      //     $this.show_tip = false
      //   }, 2000)
      //   return false
      // }
      // this.$post(this.$api.create_ft, {
      //   token: localStorage.getItem("token"),
      //   found_con: "啦啦",
      //   found_photo: "1.jpg",
      //   goods_name: this.goods_name,
      //   author: this.author,
      //   price: this.price,
      //   con: this.con,
      //   photo: this.upload_img.join(),
      //   thumb: this.upload_img[0],
      //   type: 0
      // }).then((res) => {
      //   console.log(res);
      // });
    },
  },
  computed: {
    //计算textarea数字长度
    numbre() {
      return this.con.length;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.find_nl_main {
  overflow: hidden;
  padding: 0 rem(28px) 0 rem(32px);
  margin-bottom: rem(150px);
  .item {
    margin-top: rem(80px);
    > div {
      margin-bottom: rem(40px);
      span {
        font-size: rem(32px);
        font-weight: 700;
      }
      i {
        font-size: rem(28px);
        color: #999;
      }
    }
    input {
      width: 100%;
      height: rem(48px);
      border: none;
      border-bottom: rem(1px) solid #eee;
      font-size: rem(28px);
      &::-webkit-placeholder {
        color: #999;
      }
    }
    .textarea_box {
      position: relative;
      textarea {
        box-sizing: border-box;
        padding: rem(27px) rem(39px);
        width: 100%;
        height: rem(300px);
        border: rem(1px) solid #eee;
        resize: none;
        font-size: rem(28px);
        line-height: rem(40px);
        &::-webkit-placeholder {
          font-size: rem(28px);
          color: #999;
        }
      }
      .count {
        position: absolute;
        bottom: rem(16px);
        right: rem(16px);
        span {
          font-size: rem(24px);
          color: #999;
        }
      }
    }
  }
  .e_uploadImg {
    display: flex;
    .ft_imgBox {
      position: relative;
      margin-right: rem(30px);
      img {
        width: rem(160px);
        height: rem(160px);
      }
      .delete {
        position: absolute;
        width: rem(40px);
        height: rem(40px);
        top: rem(-20px);
        right: rem(-20px);
      }
    } 
  }

  .add_img {
    margin-top: rem(40px);
    img {
      width: rem(160px);
      height: rem(160px);
    }
  }
}
.done_box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: rem(125px);
  background-color: #fff;
  .done {
  // left: 50%;
  // transform: translateX(-50%);
  width: rem(520px);
  text-align: center;
  height: rem(85px);
  line-height: rem(85px);
  margin: 0 auto;
  background-color: #f44647;
  font-size: rem(32px);
  color: #fff;
  font-weight: 700;
}
}
.tip {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  text-align: center;
  height: rem(50px);
  line-height: rem(50px);
  background-color: #F44647;
  color: #fff;
  opacity: .8;
}

</style>