<template>
    <div class="delierCon">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="mi()"></div>
            <span>订单详情</span> 
            <div class="to_b"></div>
        </div>

        <div class="delierCon_main">

        
            <div class="delierCon_main_title" v-if="rou_con.cn_status == 0">等待支付中</div>
            <div class="delierCon_main_title" v-else-if="rou_con.cn_status == 1">等待发货中</div>
            <div class="delierCon_main_title" v-else-if="rou_con.cn_status == 2">等待收货中</div>
            <div class="delierCon_main_title" v-else-if="rou_con.cn_status == 3">已完成</div>


            <div class="delierCon_main_dizhi1">
                <div class="payment_main-t-lits">
                    <img src="../../../assets/images/Index_Img/dingwei.png" class="img">
                    <div class="item-con">
                         <p class="item-con-t">
                            <strong>{{rou_con.receive_name}}</strong>
                            <span>{{rou_con.receive_tel}}</span>
                        </p> 
                        <p class="item-con-b">{{rou_con.province}}{{rou_con.city}}{{rou_con.region}}</p>
                    </div>
                </div>
            </div>
            

            <div class="delierCon_main_ListCon">
                <div class="delierCon_main_items" v-for="(a,b) in rou_con.goods_list" :key="b">
                    <img :src="a.image" alt="">
                    <div class="itemRightCon">
                        <strong>{{a.goods_name}}</strong>
                        <span class="p1">作品名字</span>
                        <span class="p2">编号</span>
                        <p>￥{{a.goods_price}}<font>x{{a.goods_num}}</font></p>
                    </div>
                </div>

                <div class="item_li">
                    <div class="my_spn"><span>商品总价：</span><span>￥{{rou_con.total_price}}</span></div>
                    <div class="my_spn"><span>运费（快递）：</span><span>￥0</span></div>
                    <div class="my_spn"><span>优惠卷抵扣：</span><span>￥0</span></div>
                </div>

                <div class="zj_pirce">
                    <span>实付款</span>
                    <span>￥{{rou_con.total_price}}</span>
                </div>



            <!-- <div class="delierCon_main_title" v-if="rou_con.order_status == 0">等待支付中</div>
            <div class="delierCon_main_title" v-else-if="rou_con.order_status == 1">等待发货中</div>
            <div class="delierCon_main_title" v-else-if="rou_con.order_status == 2">等待收货中</div>
            <div class="delierCon_main_title" v-else-if="rou_con.order_status == 3">已完成</div> -->
                <div class="zi_btns" v-if="rou_con.cn_status == 0">
                    <div class="btns" @click="zehifu()">立即支付</div>
                    <div class="btnss" @click="order()">取消订单</div>
                </div>
                <div class="zi_btn" v-else-if="rou_con.cn_status == 1">
                    <!--<div class="btn">查看物流</div>-->
                    <div class="btn">提醒发货</div>
                </div>
                <div class="zi_btn" v-else-if="rou_con.cn_status == 2">
                    <div class="btn">查看物流</div>
                    <div class="btn" @click="Receiving()">确认收货</div>
                </div>
                <div class="zi_btn" v-else-if="rou_con.cn_status == 3">
                    <div class="btn">申请售后</div>
                    <div class="btn">评价</div>
                </div>
            </div>

            <div class="foot_main" v-if="false">
                <h1>订单信息</h1>
                <div class="foot_main_item">
                    <span>订单编号</span>
                    <span>{{rou_con.order_no}}</span>
                </div>
                <div class="foot_main_item">
                    <span>订单时间</span>
                    <span>{{rou_con.add_time}}</span>
                </div>
                <div class="foot_main_item">
                    <span>支付方式</span>
                    <span v-if="rou_con.pay_type == 'wxpay'">微信支付</span>
                    <span v-else-if="rou_con.pay_type == 'alipay'">支付宝支付</span>
                    <span v-else-if="rou_con.pay_type == 'money_pay'">钱包支付</span>
                </div>

                <b></b>
                <div class="btn_of">
                    <div class="btn_from"><img src="../../../assets/images/Mi/ben_kf.png" alt=""><span>联系客服</span></div>
                    <div class="btn_from" @click="iphome()"><img src="../../../assets/images/Mi/ben_ihope.png" alt=""><span>拨打电话</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'delierCon',
    data () {
        return {
            rou_id:'',
            rou_con:[],

            // rou_num:''
        }
    },
    mounted(){
        var $this = this;
        $this.rou_id = $this.$route.params.order_id;
        $this.$post($this.$api.order_Listcon, {
            token:localStorage.getItem('token'),
            id:$this.rou_id
        }).then(data => {
            $this.rou_con = data.data;
            console.log($this.rou_con.pay_type);


            // if($this.rou_con.pay_type == 'wxpay'){
            //     $this.rou_num = 2
            // }else if($this.rou_con.pay_type == 'alipay'){
            //     $this.rou_num = 3
            // }else if($this.rou_con.pay_type == 'money_pay'){
            //     $this.rou_num = 1
            // }
        })
        window.WeChatpaymentTrue = $this.WeChatpaymentTrue;         // 微信支付成功方法
        window.WeChatpaymentFalse = $this.WeChatpaymentFalse;       // 微信支付失败方法
        window.AlipaymentTrue = $this.AlipaymentTrue;               // 支付宝支付成功方法
        window.AlipaymentFalse = $this.AlipaymentFalse;             // 支付宝支付失败方法
    },
    methods: {
        mi(){
             this.$router.go(-1); 
        },
        iphome(){
            window.android.callPhone(this.rou_con.phone)
        },

        // 再次支付
        zehifu(){
            var $this = this;
            if($this.rou_con.pay_type == 'wxpay'){
                $this.$post($this.$api.continue_pay, {
                    token:localStorage.getItem('token'),
                    id:$this.rou_con.id,
                    is_money_pay:2
                }).then(data => {
                    var wxAPP = JSON.stringify(data.data);
                    window.android.WeChatpayment(wxAPP)
                })
            }else if($this.rou_con.pay_type == 'alipay'){
               $this.$post($this.$api.continue_pay, {
                    token:localStorage.getItem('token'),
                    id:$this.rou_con.id,
                    is_money_pay:3
                }).then(data => {
                   window.android.Alipayment(data);
                })
            }else if($this.rou_con.pay_type == 'money_pay'){
                return;
            }
        },

        // 支付宝支付成功 失败
        AlipaymentTrue(){
             alert('支付宝支付成功');
        },
        AlipaymentFalse(){
            alert('支付宝支付失败');
        },

         // 微信支付成功 失败
        WeChatpaymentTrue(){
             alert('微信支付成功');
        },
        WeChatpaymentFalse(){
            alert('微信支付失败');
        },

        Receiving(){
            var $this = this;
            $this.$post($this.$api.order_status, {
                token:localStorage.getItem('token'),
                order_id:$this.rou_con.id,
            }).then(data => {
                if(data.code == 200){
                    swal('收货成功','susses');
                     this.$router.go(-1);//返回上一层
                }else{
                    swal('收货失败','error');
                }
            });
        },

        // 取消订单
        order(){
            var $this = this;
            $this.$post($this.$api.close_order, {
                token:localStorage.getItem('token'),
                order_no:$this.rou_con.order_no,
            }).then(data => {
                if(data.code == 200){
                    this.$router.go(-1);//返回上一层
                }else{
                    swal('订单无法取消','error');
                }
            });
        },
    }
    
}
</script>

<style scoped lang="scss">
@import '../../../assets/sass/base.scss';
@import '../../../assets/sass/cartCommon.scss';

.delierCon_main{
   position: absolute;
   width: 100%;
   padding-top:rem(88px);
   background:rgba(248,248,248,1);
   .delierCon_main_title{
       width: rem(750px);
       height: rem(128px);
       line-height: rem(128px);
       background:rgba(0,0,0,1);
       font-size:rem(36px);
       font-family:font_b;
       font-weight:bold;
       color:rgba(255,255,255,1);
       text-align: center;
       margin:0 auto;
   }
   .delierCon_main_dizhi1{
        padding:rem(0px) rem(32px);
        margin-top:rem(40px);
        .payment_main-t-lits{
            background: #fff;
            padding:rem(20px) rem(21px);
            display: flex;
            border-radius:rem(20px);
            .img{
                display: block;
                width:rem(27px);
                height:rem(33px);
                margin-top:rem(31px);
            }
            .item-con{
                flex:1;
                margin-left:rem(34px);
                position: relative;
                .item-con-t{
                    margin-top:rem(10px);
                    line-height:1;
                    strong{
                        font-size:rem(32px);
                        color:rgba(0,0,0,1);
                        font-weight:400;
                        font-family: font_pc;
                    }
                    span{
                        margin-left:rem(64px);
                        font-size:rem(28px);
                        font-weight:400;
                        color:rgba(0,0,0,1);
                        font-family: font_pc;
                    }
                }
                .item-con-b{
                    margin-top:rem(15px);
                    font-size:rem(28px);
                    letter-spacing:rem(1px);
                    color:rgba(0,0,0,1);
                    font-family: font_pc;
                }
                .v{
                    position: absolute;
                    display: block;
                    width: rem(16px);
                    height: rem(30px);
                    top:50%;
                    right:0;
                    transform: translate(0, -50%);
                }
            }
        }
   }
   .delierCon_main_ListCon{
       width: rem(750px);
       padding: rem(30px) rem(32px) rem(143px);
       background:rgba(255,255,255,1);
       margin: 0 auto;
       border-radius:rem(20px);
       margin-top:rem(20px);
       .delierCon_main_items{
           width: 100%;
           height: rem(222px);
           display: flex;
           margin-bottom:rem(47px);
           img{
               display: block;
               width: rem(222px);
               height: rem(222px);
           }
           .itemRightCon{
               flex: 1;
               padding-left:rem(40px);
               strong{
                   width: 100%;
                   height: rem(45px);
                   line-height: rem(45px);
                   font-size:rem(32px);
                   font-family:font_pc;
                   font-weight:400;
                   color:rgba(0,0,0,1);
               }
               .p1{
                   width: 100%;
                   height: rem(33px);
                   line-height: rem(33px);
                   font-size:rem(24px);
                   font-family:font_pc;
                   font-weight:400;
                   color:rgba(153,153,153,1);
                   margin-top:rem(3px);
                   display: block;
               }
               .p2{
                   width: 100%;
                   height: rem(33px);
                   line-height: rem(33px);
                   font-size:rem(24px);
                   font-family:font_pc;
                   font-weight:400;
                   color:rgba(153,153,153,1);
                   margin-top:rem(4px);
                   display: block;
               }
               p{
                    width: 100%;
                   height: rem(40px);
                   line-height: rem(40px);
                   font-size:rem(28px);
                   font-family:font_b;
                   font-weight:bold;
                   color:rgba(0,0,0,1);
                   margin-top:rem(9px);
                   font{
                       margin-left:rem(15px);
                       font-size:rem(20px);
                   }
               }
           }
       }
       .item_li{
           margin-top:rem(17px);
           .my_spn{
               display: flex;
               height: rem(33px);
               line-height: rem(33px);
               margin-top:rem(10px);
               span:nth-of-type(1){
                   font-size:rem(24px);
                   font-family:font_pc;
                   font-weight:400;
                   color:rgba(153,153,153,1);
               }
               span:nth-of-type(2){
                   font-size:rem(24px);
                   font-family:font_pc;
                   font-weight:400;
                   color:rgba(153,153,153,1);
                   margin-left:auto;
               }
           }
       }
       .zj_pirce{
           margin-top:rem(60px);
           height: rem(45px);
           line-height: rem(45px);
           display: flex;
           span:nth-of-type(1){
                font-size:rem(32px);
                font-family:font_pc;
                font-weight:400;
                color:rgba(51,51,51,1);
           }
           span:nth-of-type(2){
                font-size:rem(32px);
                font-family:font_pc;
                font-weight:400;
                color:rgba(51,51,51,1);
                margin-left:auto;
           }
       }
       .zi_btn{
           margin-top:rem(60px);
           display: flex;
           justify-content: flex-end;
           .btn{
                width:rem(248px);
                height:rem(100px);
                line-height:rem(100px);
                text-align: center;
                border:1px solid rgba(112,112,112,1);
                opacity:1;
                border-radius:rem(54px);
                font-size:rem(32px);
                font-family:font_b;
                font-weight:bold;
                color:rgba(102,102,102,1);
                margin-left:rem(50px);
           }
           
       }
       .zi_btns{
           margin-top:rem(50px);
           .btns{
                width: rem(686px);
                height: rem(100px);
                line-height: rem(100px);
                background: #000000;
                opacity: 1;
                border-radius: rem(54px);
                font-size: rem(32px);
                font-family: font_b;
                font-weight: bold;
                color: #FFFFFF;
                margin-top:rem(20px);
                text-align: center;
           }
           .btnss{
                width: rem(686px);
                height: rem(80px);
                line-height: rem(80px);
                border-radius: rem(40px);
                font-size: rem(28px);
                font-family: font_pc;
                color: #999999;
                margin-top:rem(20px);
                text-align: center;
                border: rem(1px) solid #707070;
           }
       }
   }
   .foot_main{
       margin:0 auto;
       margin-top:rem(20px);
       margin-bottom:rem(28px);
       padding: rem(30px) rem(32px) rem(45px);
       border-radius:rem(20px);
       background: #Fff;
       h1{
            height: rem(50px);
            line-height: rem(50px);
            font-size:rem(36px);
            font-family:font_b;
            font-weight:bold;
            color:rgba(51,51,51,1);
       }
       .foot_main_item{
           height: rem(45px);
           line-height: rem(45px);
           display: flex;
           font-size:rem(32px);
           font-family:font_pc;
           font-weight:400;
           color:rgba(102,102,102,1);
           margin-top:rem(10px);
           span:nth-of-type(2){
               margin-left: auto;
           }
       }
       .foot_main_item:nth-of-type(1){
           margin-top:rem(20px);
       }
       b{
           margin-top:rem(41px);
           display: block;
           background: rgba(225,225,225,1);
           height: rem(1px);
       }
       .btn_of{
           margin-top:rem(38px);
           height: rem(50px);
           line-height: rem(50px);
           padding: 0 rem(65px);
           display: flex;
           .btn_from{
               display: flex;
               img{
                   display: block;
                   width: rem(50px);
                   height: rem(50px);
               }
               span{
                   display: block;
                   font-size:rem(32px);
                   font-family:font_pc;
                   font-weight:400;
                   color:rgba(51,51,51,1);
                   margin-left:rem(20px);
               }
           }
           .btn_from:nth-of-type(2){
               margin-left:auto;
           }
       }
   }
   
}
</style>
