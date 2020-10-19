<template>
   <div class="sell_Receipt">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="dd()"></div>
            <span>修改地址</span> 
            <div class="to_b" style="visibility: hidden;"></div>
        </div>
        <div class="sell_Receipt_main">
            <div class="sell_Receipt_list">
                <div class="sell_Receipt_items">
                    <div class="sell_Receipt_item-item">
                        <div class="item-l">收&nbsp;&nbsp;货&nbsp;&nbsp;人</div>
                        <input class="item-r" type="text" name="name" placeholder="请输入收货人姓名">
                    </div>
                    <div class="sell_Receipt_item-item">
                        <div class="item-l">联系电话</div>
                        <input class="item-r" type="number" name="tel" placeholder="请输入联系电话">
                    </div>
                    <div class="sell_Receipt_item-item">
                        <div class="item-l">所在地区</div>
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
        edid_id:'',
        ifCarIMg_true:require('../../assets/images/cart/flase_a.png'),  
        ifCarIMg_false:require('../../assets/images/cart/flase_o.png'),  
        is_default:'',
    }
  },
  components: {
    // 底部组件
    LinKage,
  },
  mounted() {
    $('.btn1').click(function(){
       $('.linkage').show();
   })
    var $this = this;
    $this.edid_id = $this.$route.params.id;
    var token = localStorage.getItem('token');
    $.ajax({
        type: 'get',
        url: 'http://console.pinjianapp.com/api/address/edit/'+$this.edid_id,
        async: false,
        dataType: 'json',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
            token:token,
        },
        success: function (res) {
            $(" input[ name='name']").val(res.data.receive_name);
            $(" input[ name='tel']").val(res.data.receive_tel);
            $('.btn1').text(res.data.province_name[0].name + res.data.city_name[0].name + res.data.area_name[0].name);
            $(" input[ name='address']").val(res.data.address);
            $(" input[ name='sheng_TyId']").val(res.data.area_info[0]);
            $(" input[ name='shi_TyId']").val(res.data.area_info[1]);
            $(" input[ name='qu_TyId']").val(res.data.area_info[2]);
            $this.is_default = res.data.is_default;
        }
    })


     $('.submit').click(function(){
       var name = $(" input[ name='name']").val()
       var vel = $(" input[ name='tel']").val();
       var address = $(" input[ name='address']").val();
       var sheng = $(" input[ name='sheng_TyId']").val();
       var shi = $(" input[ name='shi_TyId']").val();
       var qu = $(" input[ name='qu_TyId']").val();
       var token = localStorage.getItem('token');
        $.ajax({
            type: 'post',
            url: 'http://console.pinjianapp.com/api/address/edit/'+$this.edid_id,
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
                is_default:$this.is_default
            },
            success: function (res) {
                var href  = window.location.href;
                var str = href.split("sell");
                if(res.code == 200){
                    window.location.href= str[0] + 'sell/receipt';
                }
            }
        })
    })

  },
  methods: {
    
    dd(){
        this.$router.push({
            path: `/sell/receipt`
        })
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
                        font-family:font_pc;
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
                        font-family:font_pc;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                    }
                    .item-r::-webkit-input-placeholder {
                        color:rgba(153,153,153,1);
                    }
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
                font-family:font_pc;
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

</style>