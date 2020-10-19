<template>
   <div class="sell_Receipt">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="dd()"></div>
            <span>添加收货地址</span> 
            <div class="to_b" style="visibility: hidden;"></div>
        </div>
        <div class="sell_Receipt_main">
            <div class="sell_Receipt_list">
                <div class="sell_Receipt_items">
                    <div class="sell_Receipt_item-item">
                        <div class="item-l">收货人</div>
                        <input class="item-r" type="text" name="name" maxlength="10"  placeholder="请输入收货人姓名">
                    </div>
                    <div class="sell_Receipt_item-item">
                        <div class="item-l">联系电话</div>
                        <input class="item-r" type="number" name="val" oninput="if(value.length>4)value=value.slice(0,11)"  placeholder="请输入联系电话">
                    </div>
                    <div class="sell_Receipt_item-item">
                        <div class="item-l">所在地区</div>
                        <!-- <input class="item-r" type="text" placeholder="请输入手机号码"> -->
                        <p class="btn1 item-r">-- --</p>
                    </div>
                    <div class="sell_Receipt_item-item">
                        <div class="item-l">详细地址</div>
                        <input class="item-r" type="text" name="address" placeholder="请输入收货人详细地址">
                    </div>

                    <div class="submit">保存</div>
                </div>
            </div>

            <div class="morr">
                <dl>设定默认地址</dl>
                <dd @click="qufan()"><img :src="is_default==1?ifCarIMg_true:ifCarIMg_false" alt=""></dd>
            </div>
        </div>
        

        <input type="hidden" name="sheng" value="">
        <input type="hidden" name="shi" value="">
        <input type="hidden" name="qu" value="">


        <input type="hidden" name="sheng_TyId" value="">
        <input type="hidden" name="shi_TyId" value="">
        <input type="hidden" name="qu_TyId" value="">

        <!-- 引入三级联动 -->
        <lin-kage></lin-kage>
   </div>
</template>

<script>
import LinKage from "@/components/Common/LinKage";

export default {
  name: 'Find',
  data () {
    return {
      ifCarIMg_true:require('../../assets/images/cart/flase_a.png'),  
      ifCarIMg_false:require('../../assets/images/cart/flase_o.png'),  
      is_default:1,
    }
  },
  components: {
    // 底部组件
    LinKage,
  },
  mounted() {
    var _this = this;
   $('.btn1').click(function(){
       $('.linkage').show();
   })

   $('.submit').click(function(){
       var name = $(" input[ name='name']").val()
       var vel = $(" input[ name='val']").val();
       var address = $(" input[ name='address']").val();
       var sheng = $(" input[ name='sheng_TyId']").val();
       var shi = $(" input[ name='shi_TyId']").val();
       var qu = $(" input[ name='qu_TyId']").val();

       var token = localStorage.getItem('token');
       $.ajax({
            type: 'post',
            url: 'http://console.pinjianapp.com/api/address/add',
            async: false,
            dataType: 'json',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: {
                token:token,
                area_info:[sheng,shi,qu],
                receive_name:name,
                receive_tel:vel,
                address:address,
                default:true,
                is_default:_this.is_default
            },
            success: function (res) {
                var href  = window.location.href
                var str = href.split("sell/addreceipt");
                console.log(str);
                console.log(str[0] + 'sell/receipt');
               if(res.code == 200){
                  window.location.href= str[0] + 'sell/receipt';
               }
            }
        })
   })

   
  },
  methods: {
    dd(){
        var ristou = localStorage.getItem('get_Android_rouit');
        if(ristou == 'paymentlist'){
            var dsa = JSON.parse(localStorage.getItem('get_Android_rouit_id'))
            this.$router.push({
                path: `/payment/paymentlist/${dsa.id}/${dsa.bid}/${dsa.pid}`
            })
        }else if(ristou == 'payment'){
            var dsa = JSON.parse(localStorage.getItem('get_Android_rouit_id'))
            this.$router.push({
                path: `/payment/payment`
            })
        }else{
            this.$router.push({
                path: `/sell/receipt`
            })
        }
    },

    qufan(){
        var _this = this;
        if(_this.is_default == 1){
            _this.is_default = 0
        }else{
            _this.is_default = 1
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';


.sell_Receipt{
    .sell_Receipt_main{
        width: 100%;
        height: 100%;
        padding-top:rem(88px);
        background: #f8f8f8;
        position: absolute;
        overflow-y:scroll;
        .sell_Receipt_list{
            background: #fff;
            margin-top:rem(3px);
            .sell_Receipt_items{
                width:100%;
                background:#fff;
                padding:0 rem(32px);
                border-radius:rem(10px);
                .sell_Receipt_item-item{
                    width:100%;
                    height:rem(96px);
                    line-height:rem(96px);
                    border-bottom:rem(1px) solid #e0e0e0;
                    display:flex;
                    .item-l{
                        width:rem(150px);
                        font-size:rem(26px);
                        font-family:font_b;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        letter-spacing:rem(2px);
                    }
                    .item-r{
                        display:flex;
                        width:100%;
                        height:100%;
                        border:0;
                        outline: none;
                        font-size:rem(26px);
                        padding:0 rem(22px);
                        font-family:font_b;
                        font-weight:400;
                        color:#000;
                    }
                    .item-r::-webkit-input-placeholder {
                        color:rgba(153,153,153,1);
                    }
                }
                .sell_Receipt_item-item:nth-last-of-type(1){
                    border-bottom:0;
                }
                .submit{
                    width:rem(686px);
                    height:rem(83px);
                    line-height:rem(83px);
                    background:rgba(0,0,0,1);
                    color:#fff;
                    text-align:center;
                    font-size:rem(32px);
                    margin:rem(25px) auto 0;
                    border-radius:rem(42px);
                    font-family:font_b;
                    font-weight:bold;
                    position: fixed;
                    bottom:rem(67px);
                    left:50%;
                    transform: translate(-50%, 0);
                }
            }
        }
        .morr{
            width: 100%;
            height:rem(83px);
            line-height:rem(83px);
            background:rgba(255,255,255,1);
            padding:0 rem(32px);
            display: flex;
            margin-top:rem(20px);
            dl{
                font-family:font_b;
                font-weight:400;
                color:rgba(102,102,102,1);
                font-size: rem(26px);
            }
            dd{
                width: rem(120px);
                margin-left: auto;
                display: flex;
                img{
                    display: block;
                    width: rem(32px);
                    height: rem(32px);
                    margin-left: auto;
                    margin-top:rem(25px)
                }
            }
        }
    }
}
.sell_Receipt .sell_Receipt_main .sell_Receipt_list .sell_Receipt_items .sell_Receipt_item-item:nth-last-of-type(1){
    border: 0;
}
</style>