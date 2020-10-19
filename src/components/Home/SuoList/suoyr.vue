<template>
    <div class="suolistcon">
        <div class="yr_List-to clearfix" v-if="yr_list.length != ''">
            <div class="yr_List-items" v-for="(a,b) in yr_list" :key="b">
                <img :src="a.thumb" alt="">
                <div class="con_Liost">
                    <h2>{{a.name}}</h2>
                    <p>缺字段</p>
                </div>
            </div>

        </div>
        <div class="yr_List-to" v-else>
            <img src="../../../assets/images/Index_Img/soufase.png" alt="" class="falimg">
            <p class="dp">没有搜索到关于“{{mesg}}”的相关艺人</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'suoyr',
    data () {
        return {
            yr_list:[],

            mesg:'',
        }
    },
    mounted() {
        var $this = this;
         $this.mesg = localStorage.getItem('sou_mesg');     // 搜索值

        $this.$post($this.$api.search_to,{name:$this.mesg,type:'artists'}).then(data => {
            $this.yr_list = data.data.data;
        });
    },
    methods: {
    
    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../assets/sass/base.scss';

.yr_List-to{
    padding: rem(20px) rem(27px) rem(30px) rem(32px);
    .yr_List-items{
        margin-top:rem(20px);
        width: rem(340px);
        border-radius: rem(20px);
        background: #FFFFFF;
        box-shadow: 0px rem(6px) rem(20px) rgba(0, 0, 0, 0.05);
        overflow: hidden;
        img{
            display: block;
            width: 100%;
            height:rem(340px);
        }
        .con_Liost{
            padding: rem(12px) rem(30px) rem(30px) rem(24px);
            h2{
                height:rem(42px);
                line-height:rem(42px);
                font-family: font_b;
                font-weight: bold;
                color: #040404;
            }
            p{
                height:rem(90px);
                line-height:rem(30px);
                font-size:rem(22px);
                font-family:font_pc;
                font-weight:300;
                color: #666666;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        }
    }
    .yr_List-items:nth-of-type(odd){
        float: left;
    }
    .yr_List-items:nth-of-type(even){
        float: right;
    }
}
</style>
