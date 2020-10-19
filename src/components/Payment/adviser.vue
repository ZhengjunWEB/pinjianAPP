<template>
  <div class="advier">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>专属客服</span> 
            <div class="to_b" style="visibility: hidden;"></div>
        </div>
        <div class="advier_main commons_mainsContoApp">
            <div class="advier_main-list">
                <div class="fsjhb">

                
                    <div class="advier_main-item">
                        <div class="advier_main-item-l">工号</div>
                        <div class="advier_main-item-r">{{customer.number}}</div>
                    </div>
                    <div class="advier_main-item">
                        <div class="advier_main-item-l">顾问</div>
                        <div class="advier_main-item-r">{{customer.name}}</div>
                    </div>
                    <div class="advier_main-item">
                        <div class="advier_main-item-l">手机</div>
                        <div class="advier_main-item-r">{{customer.mobile}}</div>
                    </div>
                    <div class="advier_main-item">
                        <div class="advier_main-item-l">微信</div>
                        <div class="advier_main-item-r">{{customer.wx}}</div>
                    </div>
                    <div class="advier_main-item ac">
                        <div class="advier_main-item-l">照片</div>
                        <div class="advier_main-item-r">
                            <img :src="customer.photo">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
        text_mesg:'',
        customer:[],

    }
  },
    mounted() {
        // 安卓调返回
        var $this = this;
        $this.$post($this.$api.customer, {
            token:localStorage.getItem('token'),
        }).then(data => {
            console.log(data);
            $this.customer = data.data
        });

        
       
        
    },
    methods: {
        
        adviser(){
            // var ristou = localStorage.getItem('get_Android_rouit');
            // if(ristou == 'Mi'){
            //         localStorage.removeItem('get_Android_rouit')                          // 清除token
            //         this.$router.push({
            //         path: `/mi`
            //     })
            // }else{
            //     this.$router.go(-1) 
            // }
            this.$router.back();
        },

        
    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.advier{
    .advier_main{
        width:100%;
        padding-top:rem(88px);
        .advier_main-list{
            padding:rem(10px) rem(32px);
            .fsjhb{
                width: 100%;
                border-radius: rem(15px);
            }
            .advier_main-item{
                width:100%;
                height:rem(100px);
                line-height:rem(100px);
                border-bottom:rem(1px) solid #eee;
                display:flex;
                .advier_main-item-l{
                    font-size:rem(28px);
                    font-family:font_pc;
                    font-weight:400;
                    color:#666666;
                }
                .advier_main-item-r{
                    font-size:rem(28px);
                    flex:1;
                    text-align:right;
                    font-family:font_pc;
                    font-weight:400;
                    color:#333;
                }
            }
            .advier_main-item.ac{
                height:rem(320px);
                .advier_main-item-l{
                    line-height:rem(100px);
                }
                .advier_main-item-r img{
                    display:block;
                    width:rem(242px);
                    height:rem(242px);
                    margin:rem(30px) 0;
                    float:right;
                }
            }
        }
    }
    
}

.advier{
    position: fixed;
    background: #f8f8f8;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
</style>
