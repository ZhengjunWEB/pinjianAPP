<template>
  <div class="query">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>职称查询</span> 
            <div class="to_b"></div>
        </div>
        <div class="query_main">
             <div class="inpuyt">
                <input type="text" placeholder="请输入工艺师姓名" v-model="con">
             </div>
             <div class="inpuyt_btn" @click="submit()">立即查询</div>

             <div class="main_con_qu">
                <h2>热门查询</h2>
                <div class="main_con_qus clearfix">
                    <span class="lisy_t-iltem">张三疯</span>
                    <span class="lisy_t-iltem">李四</span>
                </div>
             </div>
        </div>

        
  </div>
</template>

<script>
export default {
  name: 'query',
  data () {
    return {
        con:''
    }
  },
  mounted(){

  },
    methods: {
        adviser(){
            // localStorage.removeItem('get_Android_rouit');
            // this.$router.go(-1);//返回上一层
            window.android.goback()
        },
       
        submit(){
            var $this = this;
            localStorage.setItem('get_Android_rouit','querytCon');
            $this.$post($this.$api.search_technical,{name:$this.con}).then(data => {
                var id = data.data[0].id
                var href  = window.location.href;
                var str = href.split("#");
                var rouit = str[0] + '#/sell/querytCon/' + id;
                window.android.meto_goback(rouit,'false','false');

                // this.$router.push({
                //     path: `/sell/querytCon/${id}`
                // })
            });
          
        },
    }   
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.query{
    .query_main{
        width: 100%;
        height: 100%;
        padding-top:rem(88px);
        background: #f8f8f8;
        position: absolute;
        .inpuyt{
            width: rem(690px);
            height: rem(100px);
            border-radius:rem(67px);
            background: #fff;
            margin:rem(81px) auto 0;
            overflow: hidden;
            input{
                display: block;
                width: 100%;
                height: 100%;
                border:0;
                outline: none;
                font-size: rem(36px);
                font-family: font_pc;
                font-weight:400;
                color:#000;
                text-align: center;
            }
            input::-webkit-input-placeholder {
                color:rgba(153,153,153,1);
                font-size: rem(36px);
            }
        }
        .inpuyt_btn{
            width:rem(690px);
            height:rem(100px);
            line-height:rem(100px);
            background:rgba(203,72,72,1);
            border-radius:rem(67px);
            margin:rem(34px) auto 0;
            text-align: center;
            font-size: rem(36px);
            font-family:font_b;
            font-weight:bold;
            color:rgba(255,255,255,1);
        }
        .main_con_qu{
            margin-top:rem(56px);
            padding: 0 rem(32px);
            h2{
                height: rem(45px);
                line-height: rem(45px);
                font-size:rem(32px);
                font-family:font_b;
                font-weight:bold;
                color:rgba(51,51,51,1);
            }
            .main_con_qus{
                .lisy_t-iltem{
                    display: block;
                    line-height: rem(40px);
                    font-size: rem(28px);
                    font-family:font_pc;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    background:rgba(242,242,242,1);
                    border-radius:rem(20px);
                    padding:rem(11px) rem(25px);
                    float: left;
                    margin-right: rem(20px);
                    margin-top:rem(20px);
                    letter-spacing:rem(2px);
                    text-align: center;
                }
            }
        }
    }
}


</style>
