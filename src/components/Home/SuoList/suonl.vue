<template>
    <div class="suolistcon">
        <div class="suoniliao clearfix" v-if="nl_list.length != ''">
            <div class="suo-items" v-for="(v,k) in nl_list" :key='k'>
                <img :src="v.thumb" alt="" class="pods">
                <img src="../../../assets/images/Index_Img/8cb1cb13495409239c1e0b5c9158d109b3de4998.png" alt="" class="pod">
                <p>{{v.name}}</p>
            </div>
        </div>
        <div class="suoniliao" v-else>
            <img src="../../../assets/images/Index_Img/soufase.png" alt="" class="falimg">
            <p class="dp">没有搜索到关于“{{mesg}}”的相关泥料</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'suonl',
    data () {
        return {
            nl_list:[],

            mesg:'',
        }
    },
    mounted() {
        var $this = this;
         $this.mesg = localStorage.getItem('sou_mesg');     // 搜索值

        $this.$post($this.$api.search_to,{name:$this.mesg,type:'plaster'}).then(data => {
            $this.nl_list = data.data.data;
        });
    },
    methods: {
    
    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../assets/sass/base.scss';

.suoniliao{
    padding: rem(20px) rem(27px) rem(30px) rem(32px);
    .suo-items{
        width: rem(217px);
        height: rem(217px);
        float: left;
        margin-right: rem(20px);
        margin-top: rem(20px);
        border-radius: rem(20px);
        overflow: hidden;
        position: relative;
        .pods{
            display: block;
            width: 100%;
            height: 100%;
        }
        .pod{
            position: absolute;
            width: 100%;
            height: 100%;
            display: block;
            top:0;
            left:0;
        }
        p{
            width: 100%;
            position: absolute;
            left:50%;
            bottom:rem(8px);
            transform: translate(-50%, 0);
            font-size: rem(28px);
            font-family:font_pc;
            font-weight: bold;
            color: #FFFFFF;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis; 
            -o-text-overflow: ellipsis;
            white-space:nowrap;
            padding: 0 rem(20px);
        }
    }
    .suo-items:nth-of-type(3n+3){
        margin-right: 0;
    }
}
</style>
