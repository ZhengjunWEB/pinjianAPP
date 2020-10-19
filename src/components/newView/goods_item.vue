<template>
  <div>
    <div
      class="goods_item"
      v-for="(item, i) in data"
      :key="i"
      @click="c_item(item, i)"
    >
      <div class="select" :class="{ checked: a.indexOf(item.goods_id) != -1 }">
        <img src="../../assets/images/select.png" alt="" />
      </div>
      <div>
        <img class="goods_img" :src="item.goods_master_image" alt="" />
      </div>
      <div class="info">
        <h2>{{ item.goods_name }}</h2>
        <p>{{ item.author }}</p>
        <p>{{ item.goods_no }}</p>
        <div class="price">
          <i>￥</i><span>{{ item.goods_price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
    is_delete: {
      type: Boolean, //是否选择管理
    },
  },
  data() {
    return {
      is_select: false,
      a: [],
    };
  },
  created() {
    console.log(this.data);
  },
  mounted() {
    this.$bus.$on('aa', () => {
      this.a = []
    })
  },
  methods: {
    c_item(item, i) {
      var path = this.$route.path;
      if (!this.is_delete && path != "/find/ass") {
        // this.is_select = !this.is_select;
        let flag = this.a.indexOf(item.goods_id)
        if(flag == -1) {
          this.a.push(item.goods_id)
        } else {
          this.a.splice(flag, 1)
        }
        // console.log(this.a.join(','));
        localStorage.setItem('checked_items', this.a.join(','))
      } else {
        if (path == "/find/ass") {
          localStorage.setItem("goods_info", JSON.stringify(item));
          this.$router.push({
            path: "/find/add",
          });
        } else {
          this.$router.push({
            path: "/home/indexdetails/" + item.goods_id,
          });
        }
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.goods_item {
  display: flex;
  // width: 100%;
  height: rem(302px);
  box-sizing: border-box;
  padding: rem(40px) 0;
  border-bottom: rem(1px) solid #eee;
  .select {
    width: rem(40px);
    height: rem(40px);
    border: rem(2px) solid #707070;
    border-radius: 50%;
    margin-top: rem(105px);
    line-height: rem(40px);
    text-align: center;
    img {
      width: rem(21px);
      height: rem(15.5px);
    }
  }
  .checked {
    background-color: #f44647;
    border: none;
  }
  .goods_img {
    width: rem(222px);
    height: rem(222px);
    margin-left: rem(16px);
    margin-right: rem(40px);
  }
  .info {
    h2 {
      font-size: rem(32px);
      color: #000;
      font-weight: 700;
      margin-bottom: rem(17px);
      margin-top: rem(6px);
    }
    p {
      font-size: rem(26px);
      color: #666;
      margin-bottom: rem(16px);
    }
    .price {
      margin-top: rem(44px);
      color: #fd3b38;
      span {
        font-size: rem(32px);
        font-weight: 700;
      }
    }
  }
}
</style>