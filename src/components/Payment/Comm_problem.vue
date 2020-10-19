<template>
  <div class="problem">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>常见问题</span> 
            <i class="to_b" style="visibility: hidden;"></i>
        </div>
        <div class="problem_main commons_mainsContoApp">
            <div class="problem_main_bor">
                <div class="problem_main_bort">
                    <div class="problem_main_bort_item" v-for="(v,k) in comm_problemList" :key="k" @click="xuan(v,k)" :class="activeClass ==k?'active':''">{{v.name}}</div>
                    
                </div>
                <div class="row"></div>
                <div class="problem_main_bors" v-if="isShow">

                    <div class="problem_main_borts_item">问:&nbsp;&nbsp;{{name}}</div>
                    <div class="problem_main_borts_item t" v-html="content"></div>
                </div>
            </div>
        </div>

        
  </div>
</template>

<script>
export default {
    name: 'comm_problem',
    data () {
        return {
            isShow:false,
            comm_problemList:[],
            
            index:0,

            content:'',
            name:'',

            activeClass: -1,// 0为默认选择第一个，-1为不选择
        }
    },
    mounted(){
        var $this = this;
        $this.$post($this.$api.get_article, {
          type:1,
        }).then(data => {
            $this.comm_problemList = data.data.data
        });
    },
    updated() {
        $('.problem_main_borts_item.t').find('p span').css('font-size', '');
    },
    methods: {
        adviser(){
            this.$router.back();
        },
        xuan(v,k){
            console.log(v);
            console.log(k);
            var $this = this;
            $this.activeClass = k;
            $this.content = v.content
            $this.name = v.name

             $this.isShow = true;
        }
    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.problem{
    .problem_main{
        width:100%;
        padding-top:rem(88px);
        background:#f8f8f8;
        position:absolute;
        width:100%;
        height:100%;
        overflow-y:scroll;
        .problem_main_bor{
            padding:rem(0px) rem(0px);
            border-top: rem(16px) solid #f8f8f8;
            background-color: #fff;
            .problem_main_bort{
                width:100%;
                border-radius:rem(10px);
                background:#fff;
                max-height:rem(790px);
                overflow-y:scroll;
                .problem_main_bort_item{
                    padding:rem(20px) rem(32px);
                    font-size:rem(28px);
                    line-height:rem(40px);
                    max-height:100%;
                    font-family:font_pc;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                }
                .problem_main_bort_item:nth-last-of-type(1){
                    border: 0;
                }
                .problem_main_bort_item.active{
                    font-size:rem(28px);
                    font-family:font_pc;
                    font-weight:400;
                    color: #F44647
                }
            }
            .row {
                width: 100%;
                border-bottom: rem(16px) solid #f8f8f8;
            }
            .problem_main_bors{
                width:100%;
                border-radius:rem(10px);
                background:#fff;
                padding:rem(35px) rem(32px) rem(31px) rem(32px);
                margin-top: rem(30px);
                .problem_main_borts_item{
                    line-height:rem(45px);
                    max-height:100%;
                    font-size:rem(28px);
                    font-family:font_pc;
                    font-weight:400;
                    color:#666666;
                }
                .problem_main_borts_item.t{
                    font-size:rem(28px);
                    font-family:font_pc;
                    font-weight:400;
                    color:#F44647;
                    margin-top:rem(42px)
                }
            }
            .problem_main_bort::-webkit-scrollbar {
                display: none; /* Chrome Safari */
            }
        }
    }
    
}

</style>
