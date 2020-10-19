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
    background:#efefef;
}
.loading img{
    width:100%;
    margin-top: 300px;
}

</style>
