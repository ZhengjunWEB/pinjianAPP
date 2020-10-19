<template>
    <div class="suolistcon">
        <div class="souhux clearfix" v-if="hx_list.length != ''">
            <div class="souhux_items" v-for="(v,k) in hx_list" :key='k'>
                <img :src="v.thumb" alt="">
                <span>{{v.name}}</span>
                <span>125款在售</span>
            </div>
            
        </div>
        <div class="souhux" v-else>
            <img src="../../../assets/images/Index_Img/soufase.png" alt="" class="falimg">
            <p class="dp">没有搜索到关于“{{mesg}}”的相关壶型</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'suohx',
    data () {
        return {
            hx_list:[],

            mesg:'',
        }
    },
    mounted() {
        var $this = this;
         $this.mesg = localStorage.getItem('sou_mesg');     // 搜索值

        $this.$post($this.$api.search_to,{name:$this.mesg,type:'pot'}).then(data => {
            $this.hx_list = data.data.data;
        });
    },
    methods: {
    
    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../assets/sass/base.scss';
.souhux{
    padding: rem(20px) rem(53px) rem(30px) rem(57px);
    .souhux_items{
        width: rem(150px);
        margin-right: rem(95px);
        float: left;
        margin-top:rem(20px);
        img{
            display: block;
            width: 100%;
            height: rem(200px);
        }
        span:nth-of-type(1){
            display: block;
            margin-top:rem(5px);
            height: rem(40px);
            line-height: rem(40px);
            text-align: center;
            font-size: rem(28px);
            font-family: PingFang SC;
            font-weight: 400;
            text-overflow :ellipsis; 
            white-space :nowrap; 
            overflow : hidden;
        }
        span:nth-of-type(2){
            display: block;
            margin-top:rem(5px);
            height: rem(33px);
            line-height: rem(33px);
            text-align: center;
            font-size: rem(24px);
            font-family: PingFang SC;
            font-weight: 300;
        }
    }
    .souhux_items:nth-of-type(3n+3){
        margin-right: 0;
    }
}
</style>
