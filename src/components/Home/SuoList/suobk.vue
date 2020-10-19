<template>
    <div class="suolistcon">
        <div class="font_ibn" v-if="bk_list.length != ''">
            <div class="font_ibnitem">
                <img src="http://a.appjsh.com//Uploads/store_join/2020_07_18/15950023314372.png" alt="">
                <h2>111</h2>
                <strong>111</strong>
                <p>111</p>
            </div>
        </div>
        <div class="font_ibn" v-else>
            <img src="../../../assets/images/Index_Img/soufase.png" alt="" class="falimg">
            <p class="dp">没有搜索到关于“{{mesg}}”的相关百科</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'suobk',
    data () {
        return {
            bk_list:[],

            mesg:'',
        }
    },
    mounted() {
        var $this = this;
         $this.mesg = localStorage.getItem('sou_mesg');     // 搜索值

        $this.$post($this.$api.search_to,{name:$this.mesg,type:'wikipedia'}).then(data => {
            $this.shang_list = data.data.data;
        });
    },
    methods: {
    
    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../assets/sass/base.scss';


.font_ibn{
    width: 100%;
    padding:rem(20px) rem(27px) 0 rem(32px);
    padding-bottom: rem(120px);
    .font_ibnitem{
        width: 100%;
        margin-top:rem(40px);
        img{
            display: block;
            width: rem(690px);
            height: rem(386px);
            border-radius: rem(20px);
        }
        h2{
            width: 100%;
            margin-top:rem(17px);
            height: rem(45px);
            line-height: rem(45px);
            font-size:rem(32px);
            font-family:font_pc;
            font-weight:400;
            color:rgba(51,51,51,1);
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
        }
        strong{
            display: block;
            margin-top:rem(3px);
            height: rem(33px);
            line-height: rem(33px);
            font-size:rem(24px);
            font-family:font_pc;
            font-weight:300;
            color:rgba(153,153,153,1);
        }
        p{
            max-height:rem(80px);
            line-height:rem(40px);
            font-size:rem(28px);
            font-family:font_pc;
            font-weight:300;
            color:rgba(102,102,102,1);
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    
}
</style>
