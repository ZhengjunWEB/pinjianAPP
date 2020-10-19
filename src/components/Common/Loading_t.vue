<template>
  <div class="loading">
      <img src="../../assets/images/GIF/dddd.gif" alt="">
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.loading{
    z-index: 99999999; 
    position:fixed;
    width:100%;
    height:100%;
    // background-color: rgba(255,255,255,.4);
    // background:rgba(0,0,0,0.1);

    background: #fff;
}
.loading img{
  position: absolute;
    display: block;
    width:rem(400px);
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}

</style>
