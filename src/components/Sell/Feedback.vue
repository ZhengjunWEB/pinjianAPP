<template>
  <div class="feedback">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>意见反馈</span> 
            <div class="to_b"></div>
        </div>
        <div class="feedback_main">
             <div class="feedback-lists">
                 <div class="feedback-lists-text p-relative">
                    <textarea class="feedback-mini-textbox-input" maxlength="300" placeholder="请输入备注" v-model="text_mesg"></textarea>
                    <div class="jisu">{{text_mesg.length}}<font>/</font>300</div>
                 </div>

                 <div class="feedback_Frombtn" @click="feedback()">提交</div>
             </div>
        </div>

        
  </div>
</template>

<script>
export default {
  name: 'feedback',
  data () {
    return {
        text_mesg:'',

    }
  },
    methods: {
        adviser(){
            this.$router.back();
        },
        feedback(){
            var $this = this;
            console.log($this.text_mesg);
            if($this.text_mesg == ''){
                swal('请先输入内容反馈', "……");
            }else{
                $this.$post($this.$api.feedback, {token:localStorage.getItem('token'),content:$this.text_mesg}).then(data => {
                    if(data.code == 200){
                        swal('提交成功', "感谢你的宝贵意见");
                        $this.text_mesg = '';
                    }
                })
            }
        }
    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.feedback{
    .feedback_main{
        width: 100%;
        height: 100%;
        padding-top:rem(88px);
        background: #f8f8f8;
        position: absolute;
        .feedback-lists{
            padding:rem(20px);
            .feedback-lists-text{
                height:rem(800px);
                width:100%;
                .jisu{
                    position:absolute;
                    bottom:rem(20px);
                    right:rem(30px);
                    color:rgba(153,153,153,1);
                    font-size:rem(25px);
                    font-family:font_pc;
                    font{
                        margin:0 rem(5px);
                    }
                }
                .feedback-mini-textbox-input{
                    width:100%;
                    height:100%;
                    border-radius:rem(15px);
                    font-size:rem(28px);
                    line-height:rem(36px);
                    padding:rem(35px);
                    outline:none;
                    color:#000000;
                    letter-spacing:rem(2px);
                    background:rgba(255,255,255,1);
                    border: 0;
                    font-family:font_pc;
                    
                }
                .feedback-mini-textbox-input::-webkit-input-placeholder {
                    color:rgba(153,153,153,1);
                    font-size:rem(28px);
                    font-family:font_pc;
                }
            }
            .feedback_Frombtn{
                width:rem(690px);
                height:rem(100px);
                line-height:rem(100px);
                background:rgba(203,72,72,1);
                text-align:center;
                color:#ffffff;
                font-size:rem(36px);
                margin:rem(30px) auto 0;
                border-radius:rem(67px);
                letter-spacing:rem(5px);
                font-family:font_b;
                font-weight:bold;
            }
        }
    }
}

.advier{
    position: fixed;
    background: #e6e6e6;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
</style>
