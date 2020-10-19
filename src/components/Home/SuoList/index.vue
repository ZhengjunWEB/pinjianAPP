<template>
    <div class="suolistcon">
        <div class="App_mainConList" v-if="shang_list.length != ''">
            <div class="mi-mi-mainItem clearfix">
                <div class="item" v-for="(a,b) in shang_list" :key="b">
                    <img :src="a.goods_master_image" alt="" @click="selectItem(a)">
                    <div class="item_comn">
                        <strong>{{a.goods_name}}</strong>
                        <span>{{a.author}}</span>
                        <div class="pp_con" v-if="a.goods_type == 0">
                            <dd> ￥????</dd>
                            <dt @click="commits(a)">
                                <img src="../../../assets/images/Index_Img/gouwupirce.png" alt="">
                            </dt>
                        </div>
                        <div class="pp_con" v-else>
                            <dd> ￥{{a.goods_price}}</dd>
                            <dt @click="addCart(a)">
                                <img src="../../../assets/images/Index_Img/gouwuchewx.png" alt="">
                            </dt>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="App_mainConList" v-else>
            <img src="../../../assets/images/Index_Img/soufase.png" alt="" class="falimg">
            <p class="dp">没有搜索到关于“{{mesg}}”的相关商品</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Find',
    data () {
        return {
            shang_list:[],

            mesg:'',
        }
    },
    mounted() {
        var $this = this;
         $this.mesg = localStorage.getItem('sou_mesg');     // 搜索值
        $this.$post($this.$api.search_to,{name:$this.mesg,type:'goods'}).then(data => {
            $this.shang_list = data.data.data
        });
    },
    methods: {
    
    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../../assets/sass/base.scss';

.App_mainConList{
    padding: rem(20px) rem(27px) rem(30px) rem(32px);
    
}
</style>
