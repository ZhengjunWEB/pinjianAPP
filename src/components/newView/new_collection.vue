<template>
  <div class="coll-sc">
    <div class="coll_header">
      <div @click="adviser()" class="back">
        <img src="../../assets/images/back.png" alt />
      </div>
      <div class="goods" :class="{ active: is_show }" @click="showGoods">
        商品
      </div>
      <div class="author" :class="{ active: !is_show }" @click="show_author">
        艺人
      </div>
      <span @click="manage" v-if="is_delete">管理</span>
      <span @click="manage" v-else class="red">完成</span>
    </div>
    <div class="goods_body">
      <div v-show="is_show">
        <goods_item :data="zuppin" :is_delete="is_delete" :class="{ choose: is_delete }"/>
      </div>
      <div v-show="!is_show" class="author_box">
        <Author_item :data="yippin" />
      </div>
    </div>
    <div class="delete_box" :class="{ none: is_delete }">
      <div class="delete" @click="removeItem">移出收藏夹</div>
    </div>
  </div>
</template>

<script>
//导入商品模板
import goods_item from "../newView/goods_item";
//导入作者
import author_item from "../newView/author_item";
export default {
  name: "coll-sc",
  data() {
    return {
      zuppin: [], // 作品
      yippin: [], // 艺人
      is_show: true,
      activeClass: -1,
      activeClasss: -1,
      type: 0,
      httpsCdn_Img: "http://cdn.pinjianapp.com/web_app/img/Mi/", // 配置地址
      is_delete: true,
      Loop: null,
    };
  },
  mounted() {
    var $this = this;
    this.get_fav_list(this.type);
  },
  activated() {
    this.get_fav_list(this.type)
  },
  components: {
    Goods_item: goods_item,
    Author_item: author_item,
  },
// window.webkit.messageHandlers.方法名.postMessage([token,$this.fnt_Img,1])
  methods: {
    //显示商品
    showGoods() {
      this.is_delete = true
      this.is_show = true;
      this.type = 0;
      this.get_fav_list(this.type);
    },
    //显示作者
    show_author() {
      this.is_delete = true
      this.is_show = false;
      this.type = 4;
      this.get_fav_list(this.type);
    },
    get_fav_list(type) {
      var $this = this;
      $this
        .$post($this.$api.get_fav_list, {
          token: localStorage.getItem("token"),
          no: 10,
          is_type: type,
        })
        .then((data) => {
          if($this.type == 0) {
             this.zuppin = data.data.data;
          } else if ($this.type == 4) {
             this.yippin = data.data.data;
          }
        });
    },
    manage() {
      localStorage.setItem('checked_items', false)
      this.is_delete = !this.is_delete
    },

    // 点击进入详情
    selectItem(item) {
      var $this = this;
      localStorage.setItem("get_Android_rouit", "collection");
      this.$router.replace({
        path: `/home/indexdetails/${item.goods_id}`,
      });
    },
    // commits 创建询问
    commits(v) {
      var $this = this;
      $this
        .$post($this.$api.create_enquiry, {
          token: localStorage.getItem("token"),
          goods_id: v.id,
        })
        .then((data) => {
          if (data.code == 200) {
            swal("询价" + data.data);
          } else if (data.code == 500) {
            swal(data.msg, "请稍等……");
          } else if (data.code == 400) {
            swal("询价" + data.msg, "请稍等……");
          }
        });
    },
    // 添加购物车
    addCart(value) {
      console.log(value);
      if (localStorage.getItem("token") == null) {
        this.$router.push({
          path: `/login`,
        });
      } else {
        var $this = this;
        $this
          .$post($this.$api.add_cart, {
            token: localStorage.getItem("token"),
            goods_name: value.goods_name,
            goods_spec: 0,
            storeid: value.store_id,
            id: value.id,
            seller_id: value.seller_id,
            store_name: value.store_name,
            user_id: value.user_id,
            goods_master_image: value.goods_master_image,
            goods_price: value.goods_price,
            buy_num: 1,
            type: "cart",
          })
          .then((data) => {
            if (data.code == 500) {
            } else if (data.code == 200) {
            }
          });
      }
    },

    // 进入艺人详情
    jinqu(val) {
      this.$router.replace({
        path: `/home/author/${val.id}`,
      });
    },
    // // 长按删除
    // showDeleteButton: function (e, b) {
    //   console.log(e);
    //   clearTimeout(this.Loop); //再次清空定时器，防止重复注册定时器
    //   this.Loop = setTimeout(
    //     function () {
    //       this.activeClass = b;
    //     }.bind(this),
    //     1000
    //   );
    // },
    showDeleteButtons: function (e, b) {
      clearTimeout(this.Loop); //再次清空定时器，防止重复注册定时器
      this.Loop = setTimeout(
        function () {
          this.activeClasss = b;
        }.bind(this),
        1000
      );
    },
    // 商品长按退出
    emptyTime: function () {
      clearTimeout(this.Loop); //清空定时器，防止重复注册定时器
    },

    // 商品点击空白退出
    remobi() {
      this.activeClass = -1;
    },
    // 艺人点击空白退出ss
    remobis() {
      this.activeClasss = -1;
    },
    // 商品取消收藏
    removeItem() {
      let ids = localStorage.getItem('checked_items')
      console.log(ids);
      this.$post(this.$api.fav_istrue2, {
        token: localStorage.getItem("token"),
        mix_id: ids,
        is_type: 0,
      }).then((data) => {
        this.$bus.$emit('aa')   //清空作品子组件数组数据
        localStorage.setItem('checked_items', false)
        console.log(data);
        if (data.code == 200) {
          this.get_fav_list();
        }
      });
    },
    // 艺人取消收藏
    removeItems(val) {
      console.log(val);
      this.$post(this.$api.fav_istrue2, {
        token: localStorage.getItem("token"),
        mix_id: val.id,
        is_type: 4,
      }).then((data) => {
        if (data.code == 200) {
          this.activeClasss = -1;
          this.off_fas();
        }
      });
    },

    adviser() {
      this.$router.go(-1); //返回上一层
    },
    off_true() {
      var $this = this;
      $this.is_show = true;
      $this
        .$post($this.$api.get_fav_list, {
          token: localStorage.getItem("token"),
          no: 10,
          is_type: 0,
        })
        .then((data) => {
          $this.zuppin = data.data.data;
        });
    },
    off_fas() {
      var $this = this;
      $this.is_show = false;
      $this
        .$post($this.$api.get_fav_list, {
          token: localStorage.getItem("token"),
          no: 10,
          is_type: 4,
        })
        .then((data) => {
          $this.yippin = data.data.data;
        });
    },
  },
};
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import "../../assets/sass/base.scss";
@import "../../assets/font/font.css";
.coll_header {
  display: flex;
  box-sizing: border-box;
  padding: rem(26px) rem(31px) 0 rem(32px);
  width: 100%;
  height: rem(88px);
  font-size: rem(32px);
  font-weight: 700;
  color: #333;
  .back {
    width: rem(100px);
    margin-right: rem(128px);
    img {
      margin-top: rem(2px);
      width: rem(16px);
      height: rem(30px);
      margin-right: rem(213px);
    }
  }
  .goods {
    position: relative;
    margin-right: rem(100px);
  }
  .active {
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
  .author {
    position: relative;
    margin-right: rem(150px);
  }
  span {
    width: rem(70px);
    font-size: rem(28px);
    color: #000;
    font-weight: 400;
    margin-top: rem(4px);
  }
}
.goods_body {
  width: 100%;
  padding: 0 rem(32px);
  border-top: rem(16px) solid #f2f2f2;
  margin-bottom: rem(150px);
  .choose {
    &>>>.goods_item {
      .select {
        display: none;
      }
    }
  }
  .author_box {
    margin-top: rem(40px);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.delete_box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: rem(125px);
  background-color: #fff;
  .delete {
    width: rem(520px);
    height: rem(85px);
    margin: 0 auto;
    line-height: rem(85px);
    text-align: center;
    color: #fff;
    font-size: rem(32px);
    font-weight: bold;
    background-color: #F44647;
  }
}
.none {
  display: none;
}
.red {
  color: #F44647 !important;
}
</style>
