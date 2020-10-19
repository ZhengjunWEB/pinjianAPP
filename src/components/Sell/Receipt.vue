<template>
   <div class="sell_Receipt">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="sell_mi()"></div>
            <span>我的收货地址</span> 
            <div class="to_b" @click="sellAdd()">添加收货地址</div>
        </div>
        <div class=" sell_Receipt_main " v-if="is_rouid == 'payment'">
            <div class="sell_Receipt_list">
                <div class="sell_Receipt_item" v-for="(item,k) in address_indexList" :key="k">
                    <div v-if="item.is_default==1" class='isshow'>
                        <div class="sell_Receipt_item-t" @click="quzhi(item)">
                            <img class="img" src="../../assets/images/cart/ben_dingwei.png">
                            <div class="item-con">
                                <p class="item-con-t"><strong>{{item.receive_name}}</strong><span>{{item.receive_tel}}</span><b @click.stop="sellEdit(item)">编辑</b></p>
                                <p class="item-con-b"><strong>{{item.area_info}}</strong><b @click.stop="sell_del(item)">删除</b></p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="sell_Receipt_item-t" @click="quzhi(item)">
                            <div class="item-con ds">
                                <p class="item-con-t"><strong>{{item.receive_name}}</strong><span>{{item.receive_tel}}</span><b @click.stop="sellEdit(item)">编辑</b></p>
                                <p class="item-con-b"><strong>{{item.area_info}}</strong><b @click.stop="sell_del(item)">删除</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sell_Receipt_main " v-if="is_rouid == 'paymentlist'">
            <div class="sell_Receipt_list">
                <div class="sell_Receipt_item" v-for="(item,k) in address_indexList" :key="k">
                    <div v-if="item.is_default==1" class='isshow'>
                        <div class="sell_Receipt_item-t" @click="quzhis(item)">
                            <img class="img" src="../../assets/images/cart/ben_dingwei.png">
                            <div class="item-con">
                                <p class="item-con-t"><strong>{{item.receive_name}}</strong><span>{{item.receive_tel}}</span><b @click.stop="sellEdit(item)">编辑</b></p>
                                <p class="item-con-b"><strong>{{item.area_info}}</strong><b @click.stop="sell_del(item)">删除</b></p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="sell_Receipt_item-t" @click="quzhis(item)">
                            <div class="item-con ds">
                                <p class="item-con-t"><strong>{{item.receive_name}}</strong><span>{{item.receive_tel}}</span><b @click.stop="sellEdit(item)">编辑</b></p>
                                <p class="item-con-b"><strong>{{item.area_info}}</strong><b @click.stop="sell_del(item)">删除</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sell_Receipt_main " v-else-if="is_rouid == 'Mi'">
            <div class="sell_Receipt_list">
                <div class="sell_Receipt_item" v-for="(item,k) in address_indexList" :key="k">
                    <div v-if="item.is_default==1" class='isshow'>
                        <div class="sell_Receipt_item-t">
                            <img class="img" src="../../assets/images/cart/ben_dingwei.png">
                            <div class="item-con">
                                <p class="item-con-t"><strong>{{item.receive_name}}</strong><span>{{item.receive_tel}}</span><b @click="sellEdit(item)">编辑</b></p>
                                <p class="item-con-b"><strong>{{item.area_info}}</strong><b @click="sell_del(item)">删除</b></p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="sell_Receipt_item-t">
                            <div class="item-con ds">
                                <p class="item-con-t"><strong>{{item.receive_name}}</strong><span>{{item.receive_tel}}</span><b @click="sellEdit(item)">编辑</b></p>
                                <p class="item-con-b"><strong>{{item.area_info}}</strong><b @click="sell_del(item)">删除</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sell_Receipt_main " v-else-if="is_rouid == 'Index'">
            <div class="sell_Receipt_list">
                <div class="sell_Receipt_item" v-for="(item,k) in address_indexList" :key="k">
                    <div v-if="item.is_default==1" class='isshow'>
                        <div class="sell_Receipt_item-t">
                            <img class="img" src="../../assets/images/cart/ben_dingwei.png">
                            <div class="item-con">
                                <p class="item-con-t"><strong>{{item.receive_name}}</strong><span>{{item.receive_tel}}</span><b @click="sellEdit(item)">编辑</b></p>
                                <p class="item-con-b"><strong>{{item.area_info}}</strong><b @click="sell_del(item)">删除</b></p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="sell_Receipt_item-t">
                            <div class="item-con ds">
                                <p class="item-con-t"><strong>{{item.receive_name}}</strong><span>{{item.receive_tel}}</span><b @click="sellEdit(item)">编辑</b></p>
                                <p class="item-con-b"><strong>{{item.area_info}}</strong><b @click="sell_del(item)">删除</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sell_Receipt_main" v-else-if="is_rouid == null">
            <div class="sell_Receipt_list">
                <div class="sell_Receipt_item" v-for="(item,k) in address_indexList" :key="k">
                    <div v-if="item.is_default==1" class='isshow'>
                        <div class="sell_Receipt_item-t">
                            <img class="img" src="../../assets/images/cart/ben_dingwei.png">
                            <div class="item-con">
                                <p class="item-con-t"><strong>{{item.receive_name}}</strong><span>{{item.receive_tel}}</span><b @click="sellEdit(item)">编辑</b></p>
                                <p class="item-con-b"><strong>{{item.area_info}}</strong><b @click="sell_del(item)">删除</b></p>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="sell_Receipt_item-t">
                            <div class="item-con ds">
                                <p class="item-con-t"><strong>{{item.receive_name}}</strong><span>{{item.receive_tel}}</span><b @click="sellEdit(item)">编辑</b></p>
                                <p class="item-con-b"><strong>{{item.area_info}}</strong><b @click="sell_del(item)">删除</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
import store from "@/store/store.js";
export default {
  name: 'Find',
  data () {
    return {
       address_indexList:[],
       is_rouid:'',

       ifto:'',
    }
  },
    // 获取主题列表的数据
    store,
    computed: {
        store:function(){
            return this.$store.state;
        }
    },
  mounted() {
    var $this = this;
    $this.is_rouid = localStorage.getItem('get_Android_rouit');


    $this.ifto = store.state.user_tifo;
    $this.$get($this.$api.address_index, {token:localStorage.getItem('token')}).then(data => {
        $this.address_indexList = data.data;
        console.log($this.address_indexList);
    })
  },
  methods: {
        //  添加收货地址
        sellAdd(){
            this.$router.push({
                path: `/sell/addreceipt`
            })
        },
        sellEdit(value){
            this.$router.push({
                path: `/sell/editReceipt/${value.id}`
            })
        },
        sell_default(value){
            var $this = this;
            $this.$post($this.$api.address_default, {token:localStorage.getItem('token'),id:value.id}).then(data => {
                 $this.address_indexList = data.data.data;
            })
        },
        sell_del(value){
            var $this = this;
            $this.$post($this.$api.address_del, {token:localStorage.getItem('token'),id:value.id}).then(data => {
                $this.address_indexList = data.data.data;
            })
        },
        sell_mi(){
            this.$router.back();
        },
        quzhi(val){
            this.$store.commit('Change_user_dizhi',val)
            this.$store.commit('Change_rouId','Cart')
            this.$router.push({
                path: `/payment/payment`
            })
        },

        quzhis(val){
            localStorage.setItem('paymentlist',JSON.stringify(val));
            var dsa = JSON.parse(localStorage.getItem('get_Android_rouit_id'))
            this.$router.push({
                path: `/payment/paymentlist/${dsa.id}/${dsa.bid}/${dsa.pid}`
            })
        },
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
            padding:rem(0px) rem(32px);
            .sell_Receipt_item{
                width:100%;
                height:rem(176px);
                background:#fff;
                margin-top:rem(20px);
                padding:0 rem(20px) 0;
                border-radius:rem(20px);
                .isshow{
                    width: 100%;
                    height: 100%;
                }
                .sell_Receipt_item-t{
                    width:100%;
                    height: 100%;
                    display:flex;
                    .img{
                        display:block;
                        width:rem(27px);
                        height:rem(33px);
                        margin-top:rem(77px);
                    }
                    .item-con{
                        flex:1;
                        margin-left:rem(45px);
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        .item-con-t{
                            margin-top:rem(45px);
                            display: flex;
                            strong{
                                font-size:rem(32px);
                                font-family:font_pc;
                                font-weight:400;
                                color:rgba(0,0,0,1);
                            }
                            span{
                                margin-left:rem(64px);
                                font-size:rem(28px);
                                font-family:font_pc;
                                font-weight:400;
                                color:rgba(0,0,0,1);
                            }
                            b{
                                width: rem(90px);
                                margin-left:auto;
                                font-size:rem(28px);
                                font-family:font_b;
                                font-weight:bold;
                                color:rgba(0,0,0,1);
                                text-align: right;
                                margin-right: rem(2px);
                            }
                        }
                        .item-con-b{
                            margin-top:rem(30px);
                            display: flex;
                            strong{
                                flex:1;
                                font-size:rem(28px);
                                letter-spacing:rem(1px);
                                font-family:font_pc;
                                font-weight:400;
                                color:rgba(0,0,0,1);
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            b{
                                width: rem(90px);
                                margin-left:auto;
                                font-size:rem(28px);
                                font-family:font_b;
                                font-weight:bold;
                                color:rgba(203,72,72,1);
                                text-align: right;
                            }
                        }
                    }
                     .item-con.ds{
                         margin-left:0;
                     }
                }
               
            }
            .sell_Receipt_item:nth-of-type(1){
                margin-top:rem(40px);
            }
            .sell_Receipt_item .isshow .sell_Receipt_item-b .btn_on i,.sell_Receipt_item .isshow .sell_Receipt_item-b .btn_on span{
                color:#905b46;
            }
        }
    }
}
.App-header .to_b{
    font-size: rem(26px);
    padding:0;
}
</style>