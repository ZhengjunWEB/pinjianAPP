<template>
    <div class="wrpper-cart">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="ind()"></div>
            <span>购物车</span>
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
       
        <div class="wrpper-cart-link">
           <div class="to_clear">
                 <div class="to-clear-l">共<span>{{getTotal.totalNum}}</span>件商品</div>
                 <div class="to-clear-r" @click="deleteProduct()" v-if="text">清空<i class="iconfont iconlajixiang1"></i></div>
                 <div class="to-clear-r" @click="deleteProduct()" v-else>删除<i class="iconfont iconlajixiang1"></i></div>
            </div>
        </div>
        <div class="wrpper-cart-list">
            <!-- <div class="wrpper-cart-list-item clearfix" v-for="(v,k) in cartList" :key="k" ref="touchmove" v-leftMove="{container: '[data-touchmove-con]'}"> -->
            <div class="wrpper-cart-list-item clearfix" v-for="(v,k) in cartList" :key="k">
                <dd @click="qufan(v)"><img :src="v.select?ifCarIMg_true:ifCarIMg_false" alt=""></dd>
                <div class="wrpper-cart-list-item-l pull-left">
                    <img :src="v.image" alt="">
                </div>
                <div class="wrpper-cart-list-item-r pull-right p-relative">
                    <div class="titie"><strong>{{v.goods_name}}</strong></div>
                    <div class="r-pirce p-absolute">
                        <div class="pirce">￥{{v.goods_price}}</div>
                        <div class="num_jisu">
                          <span @click="change_cart_jain(v)">-</span>
                          <span>{{v.goods_num}}</span>
                          <span  @click="change_cart_add(v)">+</span>
                        </div>
                    </div>
                </div>
                <!-- <div class="delete_item" @click="deleteItem(k)">
                  删除
                </div> -->
            </div>
        </div>

        <div class="footer">
           <div class="ico clearfix"><img :src="isSelectAll?ifCarIMg_true:ifCarIMg_false" alt=""  @click="selectProduct(isSelectAll)"><span>全选</span></div>
           <div class="con">
              <div class="pircse">共计<span>￥{{getTotal.totalPrice}}</span></div>
              <div class="btn" @click="jiesuan()">结算</div>
           </div>
        </div>
    </div>
</template>

<script>
import store from "@/store/store.js";

export default {
  // 引入主题列表组件
  name: 'loading',
  data () {
    return {
      // Num_len:0,       // 总数
      // Num_pirce:0,    // 总价格
      cartList:[],
      text:true,
      ifCarIMg_true:'static/images/20200411/true1.png',  
      ifCarIMg_false:'static/images/20200411/false1.png',  

      totalPrice:0,        // 总价格
      totalNum:0,           // 总个数
      is_rouid:"",
      IdArrayTrue:[],         // 选中个数     
    }
  },
  store,
  // 计算属性
  computed: {
      //检测是否全选
      isSelectAll:function(){
          //如果cartList长度为0
          if(this.cartList.length===0){return false;}
          //如果cartList中每一条数据的select都为true，返回true，否则返回false;
          return this.cartList.every(function (val) {return val.select});
      },
      getTotal:function(){
          //获取cartList中select为true的数据。
          var _proList=this.cartList.filter(function (val) { return val.select}),totalPrice=0,totalNum=0;
          for(var i=0,len=_proList.length;i<len;i++){
              //总价累加
              totalPrice+=_proList[i].goods_price*_proList[i].goods_num;
              totalNum+=_proList[i].goods_num;
          }
          //选择产品的件数就是_proList.length，总价就是totalPrice
          return {totalNum:totalNum,totalPrice:totalPrice}
      },
      store:function(){
        return this.$store.state;
      }
  },
  mounted() {
      var $this = this;
      $this.is_rouid = store.state.rouId
      $this.$get($this.$api.get_cart_list, {token:localStorage.getItem('token')}).then(data => {
      //为data.data添加select（是否选中）字段，初始值为true
      data.data.map(function (item) {
          $this.$set(item, 'select', true);
      })
      $this.cartList = data.data;
      console.log($this.cartList);
      // console.log($this.cartList);
      for(var i = 0 ;i<$this.cartList.length;i++){
        $this.totalPrice += $this.cartList[i].goods_price*$this.cartList[i].goods_num;
        $this.totalNum += $this.cartList[i].goods_num;
        $this.IdArrayTrue.push($this.cartList[i].id);
      }
      $this.$store.commit('changeIdArray',$this.IdArrayTrue)
      //  localStorage.setItem('IdArrayTrue',JSON.stringify($this.IdArrayTrue));
    });
  },
  methods: {
    // 跳首页
    ind() {
      if(this.is_rouid == 'Mi'){
        this.$router.replace({
          path: `/Mi`
        });
      }else if(this.is_rouid == 'Index'){
        this.$router.replace({
          path: `/index`
        });
      }else{
         this.$router.replace({
            path: `/index`
          });
      }
    },
    // 结算
    jiesuan(){
      var $this = this;
      $this.IdArrayTrue = JSON.parse(localStorage.getItem('IdArrayTrue'));
      if($this.IdArrayTrue != ''){
        $this.$store.commit('Change_rouId','Cart')
        this.$router.replace({
          path: `/payment/payment`
        });
      }else{
        alert('先添加购物车');
      }
      
      // localStorage.setItem('IdArrayTrue',JSON.stringify($this.IdArrayTrue));
    },
    // 计算 +
    change_cart_add(t){
      var $this = this;
      t.goods_num++;
      $this.$post($this.$api.change_cart, {
        token:localStorage.getItem('token'),
        id:t.id,
        goods_num:1,
        change_type:1
      }).then(data => {
        if(data.code == 500){
          alert(data.msg);
        }else if(data.code == 200){
          // data.data.map(function (item) {
          //     $this.$set(item, 'select', true);
          // })
          // $this.cartList = data.data
          $this.sum_price();
        }
      });
    },
    // 计算 - 
    change_cart_jain(t){
      var $this = this;
      if(t.goods_num > 1){
          t.goods_num--
          $this.$post($this.$api.change_cart, {
            token:localStorage.getItem('token'),
            id:t.id,
            goods_num:1,
            change_type:0
          }).then(data => {
            if(data.code == 500){
              alert(data.msg);
            }else if(data.code == 200){
              // data.data.map(function (item) {
              //     $this.$set(item, 'select', true);
              // })
              // $this.cartList = data.data;
              $this.sum_price();
            }
          }); 
      }else{
        return false;
      }
      

    },
    // 价格 封装
    sum_price:function(){
        var totalPrice = 0;
        var totalNum = 0;
        this.cartList.forEach(res=>{
            totalPrice += res.goods_price * res.goods_num;
            totalNum += res.goods_num;
        });
        this.totalPrice = totalPrice;
        this.totalNum = totalNum;
    },
    //全选与取消全选
    selectProduct:function(_isSelect){
      //遍历cartList，全部取反
        this.text = !this.text
      for (var i = 0, len = this.cartList.length; i < len; i++) {
          this.cartList[i].select = !_isSelect;
      }
    },
    //删除已经选中(select=true)的产品
    deleteProduct:function () {
      var $this = this;
      var s = $this.IdArrayTrue.toString()
      $this.$post($this.$api.del_cart, {
        token:localStorage.getItem('token'),
        ids:s
      }).then(data => {
          $this.cartList  = data.data
      });
    },
    //删除单条产品
    deleteItem(ind) {
      if (this.$refs['touchmove'][ind]) {
        this.$refs['touchmove'][ind].style.transform = "translateX(0px)";
      }
      this.cartList.splice(ind, 1);
    },

    // 反选
    qufan(v){
      var $this = this;
      v.select = !v.select
      if ($this.IdArrayTrue.indexOf(v.id) === -1) {
        $this.IdArrayTrue.push(v.id)
        $this.$store.commit('changeIdArray',$this.IdArrayTrue)
        $this.text = true;
        // localStorage.setItem('IdArrayTrue',JSON.stringify($this.IdArrayTrue));
      } else {
        $this.IdArrayTrue.splice($this.IdArrayTrue.indexOf(v.id), 1);
        $this.$store.commit('changeIdArray',$this.IdArrayTrue)
        // localStorage.setItem('IdArrayTrue',JSON.stringify($this.IdArrayTrue));
        $this.text = false;
        $this.sum_price();
      }
    },
  },
 
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';

.wrpper-cart{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .wrpper-cart-link{
      width: 100%;
      padding-top:rem(114px);  
      .to_clear{
        height:rem(82px);
        line-height: rem(82px);
        background:#e8e7e7;
        padding: 0 rem(31px);
        display: flex;
        .to-clear-l{
          font-size: rem(26px);
          letter-spacing:rem(2px);
          color: #666;
          font-family: 黑体;
          span{
            margin:0 rem(5px);
          }
        }
        .to-clear-r{
          flex: 1;
          text-align: right;
          font-size: rem(26px);
          letter-spacing:rem(3px);
          color: #666;
          position: relative;
          padding-right: rem(48px);
          font-family: 黑体;
          i{
            font-size: rem(32px);
            color: #666;
            position: absolute;
            right:rem(10px);
          }
        }
      }
  }
  .wrpper-cart-list{
    width: 100%;
    margin-bottom:rem(95px);
    .wrpper-cart-list-item{
      width: 100%;
      padding: rem(25px) rem(35px) rem(20px) rem(80px);
      height: rem(230px);
      background: #fff;
      border:rem(1px) solid #bababa;
      display: flex;
      position: relative;
      dd{
          position: absolute;
          width: rem(40px);
          height:rem(40px);
          border-radius: 50%;
          float: left;
          top:50%;
          left: rem(40px);
          transform: translate(-50%,0);
          img{
            display: block;
            width: 100%;
            height:100%;
          }
        }
      .wrpper-cart-list-item-l{
        height:100%;
        position: relative;
        img{
          width: rem(280px);
          height: rem(180px);
          display: block;
        }
      }
      .wrpper-cart-list-item-r{
        height:100%;
        flex:1;
        margin-left:rem(25px);
        .titie{
          height:rem(80px);
          line-height: rem(40px);
          margin-top:rem(30px);
          overflow: hidden;
          strong{
            color:#333;
            font-size: rem(30px);
            font-weight: bold;
            font-family: 黑体;
          }
          span{
            margin-left:rem(5px);
            color:#666;
            font-size: rem(26px);
          }
        }
        .r-pirce{
          width:100%;
          bottom:rem(20px);
          left:0;
          height: rem(80px);
          line-height: rem(80px);
          display:flex;
          bottom:0;
          .pirce{
            font-size:rem(28px);
            color:#744900;
          }
          .num_jisu{
            width:rem(180px);
            height:rem(60px);
            line-height:rem(60px);
            margin-top:rem(10px);
            margin-left:auto;
            border:1px solid #ccc;
            display:flex;
            span{
              display:block;
              width:rem(60px);
              text-align:center;
            }
            span:nth-of-type(1){
              border-right:1px solid #ccc;
            }
            span:nth-of-type(2){
              border-right:1px solid #ccc;
              font-size:rem(28px);
              input{
                width: 95%;
                height: 95%;
                display: block;
                outline: none;
                border: 0;
                font-size: 52px;
                text-align: center;
              }
            }
          }
        }
      }
    }
    .wrpper-cart-list-item:nth-of-type(1){
      margin-top:0;
    }
  }
  .footer{
    width:100%;
    height:rem(95px);
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 9999;
    background: #e8e7e7;
    .ico{
      img{
        display: block;
        width: rem(40px);
        height:rem(40px);
        float:Left;
        margin-top:rem(27.5px);
        margin-left:rem(30px);
      }
      span{
        display: block;
        float:Left;
        font-size: rem(28px);
        margin-left:rem(20px);
        line-height: rem(95px);
        color: #666;
        font-family: 黑体;
      }
    }
    .con{
      flex:1;
      position: relative;
      text-align:right;
      .btn{
        position: absolute;
        height:rem(95px);
        width: rem(150px);
        background: #744900;
        line-height: rem(95px);
        text-align: center;
        color:#fff;
        font-size: rem(30px);
        right: 0;
        top:0;
      }
      .pircse{
        line-height: rem(95px);
        font-size: rem(30px);
        margin-right:rem(180px);
        span{
          color:#744900;
          font-size:rem(28px);
        }
      }
      
    }
  }
}
.delete_item{
      position: absolute;
      top: 0;
      right: rem(-100px);
      width: rem(100px);
      height:rem(300px);
      line-height:rem(300px);
      font-family: PingFangSC-Regular;
      font-size: rem(30px);
      text-align: center;
      color: white;
      background: #FF7EA9;
}
</style>
