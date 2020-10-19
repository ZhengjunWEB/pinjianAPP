<template>
    <div class="appreciationlist">
        <div class="appreciationlist-header">
            <div class="to_a iconfont iconzuo" @click="tuichu()"></div>
            <span>美物赏析</span>
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>

        <div class="appreciationlist-main">
            <div class="appre_con clearfix">
                <div class="appre_lun p-relative">
                    <!-- <ul class="slide-bar">             -->
                    <ul class="slide-bar" :style="ulWidth" :class="{'tran': noLast}">            
                        <li v-for="(item,t) in list" :style="{'width':liWidth + '%'}" :key="t">
                        <!-- <li v-for="item in list"> -->
                            <img :src="item"> 
                        </li>        
                    </ul> 
                    <div class="btn_left p-absolute" @click="back()"><i class="iconfont iconzuo"></i></div>
                    <div class="btn_right p-absolute" @click="next()"><i class="iconfont iconzuo-copy"></i></div>
                    <div class="lun_num p-absolute">{{current+1}}/{{list.length}}</div>
                </div>
            </div>

            <div class="appre_introduce">
                <div class="appre_introduce-item">文本介文本介绍第一段文本介绍第一段文本介绍第一段文本介绍第一段绍第一段</div>
                <div class="appre_introduce-item">文本介绍第二段</div>
                <div class="appre_introduce-item">文本介绍第三段</div>
            </div>
        </div>


       
    </div>
</template>

<script>
export default {
  name: 'appreciationlist',
  data () {
    return {
       list: [ //数组前后各增加一张图片                
            'http://a.appjsh.com/Uploads/goods/2020_05_11/15891778184064.jpg',                
            'http://a.appjsh.com/Uploads/goods/2020_05_09/15890050921290.png',                
            'http://a.appjsh.com/Uploads/goods/2020_05_11/15891770266303.jpg',                
            'http://a.appjsh.com/Uploads/goods/2020_05_11/15891778184064.jpg',                
            'http://a.appjsh.com/Uploads/goods/2020_05_09/15890050921290.png',                
        ],
        bar: {                
            width: '0',                
            transform: 'translateX(0)',            
        }, 
        current: 0,
        noLast: true  
    }
  },
  computed: {            
    ulWidth(){                                
        this.bar = {                    
        transform: 'translateX(-'+ ((this.current) * 100) +'%)',                
        }                
        return this.bar;            
    },            
    liWidth(){                
        return 100;            
    }           
  },  
  methods: {
      tuichu(){
        this.$router.push({
            path: `/payment/appreciation`
        })
      },
      next(){
        if(this.current >= this.list.length-1) {                 
            return false;
        }else{
            this.current ++;     
        }  
      },
      back(){
        if(this.current > 0) {                 
            this.current --; 
        }else{
            return false;
        }  
      }
  }
}
</script>

<style lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.appreciationlist{
  .appreciationlist-header {
    width: 100%;
    height: rem(115px);
    line-height: rem(115px);
    border-bottom: rem(1px) solid #ccc;
    display: flex;
    position: fixed;
    z-index: 9999;
    background: #333;
    box-sizing: content-box;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    .to_a {
      width: 20%;
      display: block;
      font-size: rem(40px);
      color: rgb(15, 15, 15);
      font-weight: bold;
      margin-left: rem(20px);
      color:#fff
    }
    span {
      display: block;
      font-size: rem(30px);
      color: #fff;
      font-weight: bold;
      text-align: center;
      flex: 1;
    }
    i {
      width: 25%;
      font-size: rem(45px);
      display: block;
      text-align: right;
      font-weight: bold;
      margin-right: rem(30px);
    }
  }
  .appreciationlist-main{
      width:100%;
      padding-top:rem(115px);
      .appre_con{
          padding:rem(20px) rem(20px) rem(20px);
          .appre_lun{
              width:100%;
              height:rem(700px);
              overflow: hidden;
              .slide-bar {    
                  width:100%;
                  height:100%;
                 display: -webkit-box;
                li{
                    // width:100%;
                    height:100%;
                    img{
                        display:block;
                        width:100%;
                        height:100%;
                    }
                }
              }
              .btn_left{
                  width:rem(80px);
                  height:rem(120px);
                  line-height:rem(120px);
                  background:#686863;
                  top:50%;
                  left:rem(20px);
                  transform: translate(0,-50%); 
                  i{
                      display: block; 
                      font-size:rem(50px);
                      color:#fff;
                      text-align:center;
                  }
              }
              .btn_right{
                  width:rem(80px);
                  height:rem(120px);
                  line-height:rem(120px);
                  background:#686863;
                  top:50%;
                  right:rem(20px);
                  transform: translate(0,-50%); 
                  i{
                      font-size:rem(50px);
                      color:#fff;
                      text-align:center;
                      display: block; 
                  }
              }
              .lun_num{
                  right:rem(25px);
                  bottom:rem(30px);
                  font-size:rem(28px);
                  color:#666;
              }
          }
      }
      .appre_introduce{
          padding:0 rem(20px);
          .appre_introduce-item{
              margin-top:rem(20px);
              font-size:rem(28px);
              color:#000;
              line-height:rem(35px);
              max-height:100%;
              letter-spacing:1px;
          }
        //   .appre_introduce-item:nth-of-type(1){
        //       margin:0;
        //   }
      }
  }
}
.tran {    
    transition: all 0.5s;
}

</style>
