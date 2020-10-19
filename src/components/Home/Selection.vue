<template>
    <div class="Selection clearfix">
        <div class="Selection-header">
          <router-link class="to_a iconfont iconzuo" to="javascript:history.go(-1)" tag="div"></router-link>
          <span>每日甄选</span>
          <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="Selection-main">
           <img src="static/images/20200411/ddddddd.png">
           <div class="mainConList">
              <div class="mainItem clearfix">
                <div class="item" v-for="item in HeaderCon_goods_day" :key="item.id">
                  <div @click="selectItem(item)"><img v-lazy="item.goods_images"></div>
                  <p>{{item.goods_name}}<span>#{{item.goods_num}}</span></p>
                    <div class="pirce">
                        <strong>￥{{item.goods_price}}</strong>
                        <span>￥{{item.goods_market_price}}</span>
                        <i class="iconfont icongouwuche" @click="addCart(item)"></i>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'selection',
  data () {
    return {
      HeaderCon_goods_day:[],
    }
  },
  mounted() {
    var $this = this;
    // 首页底部分类
    $this.$post($this.$api.HeaderCon_goods_day, {no:8,page:1}).then(data => {
        $this.HeaderCon_goods_day = data.data.data;
    });
  },
  methods: {
    selectItem(item) {
      var $this = this;
      this.$router.replace({
        path: `/home/indexdetails/${item.id}`
      });
    },
    addCart(value){
      if(localStorage.getItem('token') == null){
          this.$router.push({
              path: `/login`
          })
      }else{
      var $this = this;
      $this.$post($this.$api.add_cart, {
          token:localStorage.getItem('token'),
          goods_name:value.goods_name,
          goods_spec:0,
          storeid:value.store_id,
          id:value.id,
          seller_id:value.seller_id,
          store_name:value.store_name,
          user_id:value.user_id,
          goods_master_image:value.goods_images,
          goods_price:value.goods_price,
          buy_num:1
        }).then(data => {
           if(data.code == 500){
             alert(data.msg);
           }else if(data.code == 200){
               $this.$router.push({
                  path: `/common/cart`
              })
           }
        });
      }
      
    }
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';
@import '../../assets/sass/IndexCommon.scss';

.Selection{
  width: 100%;
  .Selection-header{
      width: 100%;
      height:rem(88px);
      line-height:rem(88px);
      border-bottom:rem(1px) solid #ccc;
      display: flex;
      position: fixed;
      z-index: 9999;
      background: #fff;
      padding-top:rem(55px);
      box-sizing: content-box;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      .to_a{
          width: 20%;
          display: block;
          font-size:rem(40px);
          color: rgb(15,15,15);
          font-weight: bold;
          margin-left:rem(20px);
      }
      span {
          display: block;
          font-size:rem(30px);
          color: #333;
          font-weight: bold;
          text-align: center;
          flex: 1;
      }
      i {
          width: 25%;
          font-size:rem(45px);
          display: block;
          text-align: right;
          font-weight: bold;
          margin-right:rem(30px);
      }
  }
  .Selection-main{
    width: 100%;
    padding-top:rem(145px);
    img {
        display: block;
        width: 100%;
    }
  }
}

</style>