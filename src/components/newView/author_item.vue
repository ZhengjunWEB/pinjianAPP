<template>
  <div class="item_box">
    <div
      class="author_item"
      v-for="(item, i) in data"
      :key="i"
      @click="jinqu(item)"
    >
      <div class="author_img">
        <img :src="item.thumb" alt="" />
      </div>
      <h2>{{ item.name }}</h2>
      <p>{{ label }}</p>
      <a href="#">查看</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
    },
    label: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    jinqu(item) {
      this.$router.push({
        path: `/home/author/${item.id}`,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.item_box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  .author_item {
    width: rem(335px);
    height: rem(457px);
    text-align: center;
    box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.1);
    margin-bottom: rem(16px);
    .author_img {
      img {
        width: rem(166px);
        height: rem(166px);
        margin-top: rem(44px);
      }
    }
    h2 {
      font-size: rem(32px);
      color: #333;
      font-weight: 700;
      margin-top: rem(47px);
    }
    p {
      font-size: rem(28px);
      margin-top: rem(17px);
      color: #333;
    }
    a {
      display: inline-block;
      width: rem(158px);
      height: rem(50px);
      line-height: rem(50px);
      border-radius: rem(50px);
      background-color: #333;
      margin-top: rem(42px);
      text-decoration: none;
      font-size: rem(28px);
      color: #e8c396;
      font-weight: bold;
    }
  }
}
</style>