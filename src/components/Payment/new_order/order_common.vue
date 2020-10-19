<template>
  <div class="order_top">
    <ul>
      <li>全部</li>
      <li>待付款</li>
      <li>待发货</li>
      <li>待收货</li>
      <li>已完成</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_active : 1
    };
  },
  methods: {
    active(i) {
      this.is_active = i;
    },
  },
};
</script>

<style scoped lang="scss">
.order_top {
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
        bottom: rem(10px);
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
}
</style>