<template>
  <div class="coll-sca">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>我的询价</span> 
            <div class="to_b" style="visibility: hidden;"></div>
        </div>
        <div class="coll-sca_main commons_mainsContoApp">
            <div class="coll-sca_main_le" v-if="coll_sca != ''">
                <div class="coll-sc_main_le-items style_one" v-for="(v,k) in coll_sca" :key="k">
                    <img :src="v.goods_master_image" alt="" class="imgs">     
                    <div class="con">
                        <h2>{{v.goods_name}}</h2>  
                        <span>{{v.author}}</span>  
                        <b>{{v.goods_no}}</b>
                    </div>               
                </div>
            </div>
            <div class="coll-sca_main_le" v-else-if="coll_sca == ''">
                <div class="inquirucon">
                    <img src="../../assets/images/Mi/1601e4c632c53927e82ac2b885e53ad.png" alt="">  
                    <span>你还没有任何询价哦~</span> 
                </div>
            </div>
        </div>

        
  </div>
</template>

<script>
export default {
  name: 'coll-sc',
  data () {
    return {
        coll_sca:[],

    }
  },
  mounted(){
    var $this = this;
    $this.$post($this.$api.enquiry_list, {
        token:localStorage.getItem('token'),
        no:10
    }).then(data => {
        $this.coll_sca = data.data.data;
    });
  },
    methods: {
        adviser(){
            this.$router.back();//返回上一层
        },
    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
@import '../../assets/font/font.css';
.coll-sca{
    .coll-sca_main{
        width:100%;
        padding-top:rem(88px);
        position: absolute;
        height: 100%;
        background: #f8f8f8;
        .coll-sca_main_le{
            padding:0 rem(32px);
            .coll-sc_main_le-items.style_one{
                display: flex;  
                margin-top:rem(20px);
                width: rem(686px);
                height: rem(282px);
                border-radius: rem(20px);
                background: #fff;
                padding:rem(30px) rem(20px) 0;
                .imgs{
                    display: block;
                    width: rem(222px);
                    height:rem(222px);
                }    
                .con{
                    flex:1;
                    padding-left: rem(40px);
                    h2{
                        margin-top:rem(45px);
                        font-family: font_pc;
                        color:rgba(0,0,0,1);
                        font-size: rem(32px);
                    }
                    span{
                        display: block;
                        margin-top:rem(15px);
                        font-size: rem(26px);
                        font-family:font_pc;
                        font-weight:400;
                        color:rgba(153,153,153,1);
                    }
                    b{
                        display: block;
                        margin-top:rem(15px);
                        font-size: rem(26px);
                        font-family:font_pc;
                        font-weight:400;
                        color:rgba(153,153,153,1);
                    }
                }     
            }
        }
    }
}
.inquirucon{
    margin: 0 auto;
    margin-top:rem(253px);
    img{
        display: block;
        width: rem(146px);
        height: rem(146px);
        margin: 0 auto;
    }
    span{
        display: block;
        margin-top:rem(40px);
        height:rem(40px);
        line-height:rem(40px);
        text-align: center;
        font-size:rem(28px);
        font-family:font_pc;
        font-weight:400;
        color:rgba(153,153,153,1);
    }
}
</style>
