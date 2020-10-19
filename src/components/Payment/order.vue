<template>
  <div class="order">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="mi()"></div>
            <span>我的订单</span> 
            <div class="to_b"></div>
        </div>
        <div class="order_nav">
            <router-link to="/payment/order" tag="div" class="order_nav-item">全部</router-link>
            <router-link to="/payment/order/order_payment" tag="div" class="order_nav-item">待付款</router-link>
            <router-link to="/payment/order/order_deliver" tag="div" class="order_nav-item">待发货</router-link>
            <router-link to="/payment/order/order_Receiving" tag="div" class="order_nav-item">待收货</router-link>
            <router-link to="/payment/order/order_complete" tag="div" class="order_nav-item">已完成</router-link>
        </div>
        <router-view/>
        
  </div>
</template>

<script>
export default {
    name: 'loading',
    data () {
        return {
            params_id:'',

            stylecolor_0:false,
            stylecolor_1:false,
            stylecolor_2:false,
            stylecolor_3:false,
            stylecolor_4:false,
            stylecolor_5:false,


            Orderlist:[],
        }
    },
    mounted() {
        var $this = this;
        $this.params_id = $this.$route.params.id;  
        if($this.params_id == 0){
            $this.stylecolor_0 = true;
            $this.$post($this.$api.cartList, {
                token:localStorage.getItem('token'),
                page:1,
                order_no:'',
                order_type:''
            }).then(data => {
                $this.Orderlist = data.data.order_list.data
            });
        }else if($this.params_id == 1){
            $this.stylecolor_1 = true;
            $this.$post($this.$api.cartList, {
                token:localStorage.getItem('token'),
                page:1,
                order_no:'',
                order_type:'NOPAY'
            }).then(data => {
                $this.Orderlist = data.data.order_list.data
            });
        }if($this.params_id == 2){
            $this.stylecolor_2 = true;
            $this.$post($this.$api.cartList, {
                token:localStorage.getItem('token'),
                page:1,
                order_no:'',
                order_type:'WAITSEND'
            }).then(data => {
                $this.Orderlist = data.data.order_list.data
            });
        }if($this.params_id == 3){
          $this.stylecolor_3 = true;
          $this.$post($this.$api.cartList, {
                token:localStorage.getItem('token'),
                page:1,
                order_no:'',
                order_type:'WAITREC'
            }).then(data => {
                $this.Orderlist = data.data.order_list.data
            });
        }if($this.params_id == 4){
          $this.stylecolor_4 = true;
          $this.$post($this.$api.cartList, {
                token:localStorage.getItem('token'),
                page:1,
                order_no:'',
                order_type:'WAITCOMMENT'
            }).then(data => {
                $this.Orderlist = data.data.order_list.data
            });
        }if($this.params_id == 5){
          $this.stylecolor_5 = true;
          $this.$post($this.$api.cartList, {
                token:localStorage.getItem('token'),
                page:1,
                order_no:'',
                order_type:'REFUND'
            }).then(data => {
                $this.Orderlist = data.data.order_list.data
            });
        }
    },
     
    methods: {
        mi(){
            this.$router.push({
                path: `/mi`
            })
        },
        item(value){
            var $this = this;
            $this.params_id = value;
            if($this.params_id == 0){
                $this.stylecolor_0 = true;
                $this.stylecolor_1 = false;
                $this.stylecolor_2 = false;
                $this.stylecolor_3 = false;
                $this.stylecolor_4 = false;
                $this.stylecolor_5 = false;
                $this.stylecolor_0 = true;
                $this.$post($this.$api.cartList, {
                    token:localStorage.getItem('token'),
                    page:1,
                    order_no:'',
                    order_type:''
                }).then(data => {
                    $this.Orderlist = data.data.order_list.data
                });
            }else if($this.params_id == 1){
                $this.stylecolor_1 = true;
                $this.stylecolor_0 = false;
                $this.stylecolor_2 = false;
                $this.stylecolor_3 = false;
                $this.stylecolor_4 = false;
                $this.stylecolor_5 = false;
                $this.$post($this.$api.cartList, {
                    token:localStorage.getItem('token'),
                    page:1,
                    order_no:'',
                    order_type:'NOPAY'
                }).then(data => {
                    $this.Orderlist = data.data.order_list.data
                });
            }if($this.params_id == 2){
                $this.stylecolor_2 = true;
                $this.stylecolor_1 = false;
                $this.stylecolor_0 = false;
                $this.stylecolor_3 = false;
                $this.stylecolor_4 = false;
                $this.stylecolor_5 = false;
                $this.$post($this.$api.cartList, {
                    token:localStorage.getItem('token'),
                    page:1,
                    order_no:'',
                    order_type:'WAITSEND'
                }).then(data => {
                    $this.Orderlist = data.data.order_list.data
                });
            }if($this.params_id == 3){
                $this.stylecolor_3 = true;
                $this.stylecolor_1 = false;
                $this.stylecolor_2 = false;
                $this.stylecolor_0 = false;
                $this.stylecolor_4 = false;
                $this.stylecolor_5 = false;
                $this.$post($this.$api.cartList, {
                    token:localStorage.getItem('token'),
                    page:1,
                    order_no:'',
                    order_type:'WAITREC'
                }).then(data => {
                    $this.Orderlist = data.data.order_list.data
                });
            }if($this.params_id == 4){
                $this.stylecolor_4 = true;
                $this.stylecolor_1 = false;
                $this.stylecolor_2 = false;
                $this.stylecolor_3 = false;
                $this.stylecolor_0 = false;
                $this.stylecolor_5 = false;
                $this.$post($this.$api.cartList, {
                    token:localStorage.getItem('token'),
                    page:1,
                    order_no:'',
                    order_type:'WAITCOMMENT'
                }).then(data => {
                    $this.Orderlist = data.data.order_list.data
                });
            }if($this.params_id == 5){
                swal('服务暂未开通……','error');
                // $this.stylecolor_5 = true;
                // $this.stylecolor_1 = false;
                // $this.stylecolor_2 = false;
                // $this.stylecolor_3 = false;
                // $this.stylecolor_4 = false;
                // $this.stylecolor_0 = false;
                // $this.$post($this.$api.cartList, {
                //     token:localStorage.getItem('token'),
                //     page:1,
                //     order_no:'',
                //     order_type:'REFUND'
                // }).then(data => {
                //     $this.Orderlist = data.data.order_list.data
                // });
            }
        },
        deliver(){
            swal('消息已经传达……','客官敬请期待！');
        },
        desliver(){
            swal('服务暂未开通……','error');
        },
        
        Receiving(val){
            var $this = this;
            $this.$post($this.$api.order_status, {
                token:localStorage.getItem('token'),
                order_id:val.id,
            }).then(data => {
                console.log(data.data.order_list.data);
                if(data.code == 200){
                    swal('收货成功','susses');
                    $this.Orderlist = data.data.order_list.data
                }else{
                    swal('收货失败','error');
                }
            });
        },


    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.order{
    .order_nav{
        height: rem(80px);
        line-height: rem(80px);
        width:100%;
        background:#fff;
        padding: 0 rem(32px);
        display: flex;
        justify-content: space-between;
        position: fixed;
        top:rem(128px);
        z-index: 999;
        .order_nav-item{
            font-size:rem(28px);
            font-weight:400;
            position: relative;
            color:rgba(102,102,102,1);
        }
        .order_nav-item.active{       
            font-weight:bold;
            color:rgba(0,0,0,1);
        }
    }
}
.con_list_orde{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top:rem(188px);
    background: #f8f8f8;
    overflow-y: scroll;
}
.order_nav-item.router-link-exact-active.router-link-active{
    font-weight:bold;   
    color:rgba(0,0,0,1);
}
.order_nav-item.router-link-exact-active.router-link-active:after{
    position: absolute;
    content: '';
    width: 60%;
    height: rem(8px);  
    background: linear-gradient(90deg, #F44647 0%, rgba(244, 70, 71, 0.15) 100%);
    bottom: rem(6px);
    left: 50%;
    transform: translate(-50%,0);
}
</style>
