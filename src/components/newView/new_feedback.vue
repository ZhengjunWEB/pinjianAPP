<template>
  <div class="feedback">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>意见反馈</span> 
            <div class="to_b"></div>
        </div>
        <div class="feedback_main commons_mainsContoApp">
             <div class="feedback_top">
               <div class="top_title">
                 <span>反馈类别</span>
               </div>
               <ul>
                 <li @click="active(1)" :class="{'active': is_show == 1}" >异常反馈</li>
                 <li @click="active(2)" :class="{'active': is_show == 2}" >功能建议</li>
                 <li @click="active(3)" :class="{'active': is_show == 3}" >bug反馈</li>
               </ul>
             </div>
             <div class="feedback_ipt">
               <div class="ipt_title">
                 <span>我要反馈</span>
               </div>
               <textarea name="" id="" v-model="text_mesg" placeholder="请填写您宝贵的意见或建议......"></textarea>
             </div>
             <div class="contact">
               <input type="text" v-model="contact" placeholder="请留下您的联系方式（qq、微信、手机号）">
             </div>
             <div class="submit" @click="feedback()">
               提交反馈
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
        is_show: 1,
        contact: ''

    }
  },
    methods: {
        adviser(){
            this.$router.back();
        },
        active(i) {
          this.is_show = i
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
      .feedback_top {
        width: 100%;
        height: rem(233px);
        background-color: #fff;
        padding: 0 rem(32px);
        margin-top: rem(16px);

        .top_title {
          box-sizing: border-box;
          padding-top: rem(40px);
          span {
            font-size: rem(32px);
            color: #333;
            font-weight: bold;
          }
        }
        ul {
          display: flex;
          justify-content: space-between;
          margin-top: rem(40px);
          li {
            width: rem(160px);
            height: rem(88px);
            line-height: rem(88px);
            text-align: center;
            border-radius: rem(10px);         
            border: rem(1px) solid #999999;
            font-size: rem(28px);
            color: #999;
          }
          .active {
            background-color: #F44647;
            color: #fff;
            border: rem(1px) solid #F44647;
          }
        }
      }
    }
    .feedback_ipt {
      width: 100%;
      height: rem(651px);
      margin-top: rem(16px);
      background-color: #fff;
      box-sizing: border-box;
      padding: rem(40px) rem(32px);
       .ipt_title {
          box-sizing: border-box;
          span {
            font-size: rem(32px);
            color: #333;
            font-weight: bold;
          }
        }
        textarea {
          width: 100%;
          height: rem(450px);
          font-size: rem(26px);
          color: #000;
          margin-top: rem(32px);
          border: none;
          outline: none;
          &::placeholder {
            font-size: rem(28px);
            color: #999;
          }
        }
    }
    .contact {
      width: 100%;
      height: rem(100px);
      margin-top: rem(16px);
      box-sizing: border-box;
      padding: 0 rem(32px);
      background-color: #fff;
      
      input {
        width: 100%;
        height: rem(50px);
        font-size: rem(28px);
        margin-top: rem(25px);
        outline: none;
        border: none;
      }
    }
    .submit {
      width: rem(520px);
      height: rem(85px);
      line-height: rem(85px);
      text-align: center;
      background-color: #F44647;
      font-size: rem(32px);
      color: #fff;
      margin: rem(49px) auto 0;
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
