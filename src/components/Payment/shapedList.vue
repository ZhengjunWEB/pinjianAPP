<template>
    <div class="shapedList">
        <div class="shapedList-header">
            <div class="to_a iconfont iconzuo" @click="tuichu()"></div>
            <span>特卖专场</span>
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="shapedList-main">
            <div class="shapedList-main-con">
                <div class="shapedList_lun p-relative">
                    <!-- <ul class="slide-bar">             -->
                    <ul class="slide-bar" :style="ulWidth" :class="{'tran': noLast}">            
                        <li v-for="(item,t) in list" :style="{'width':liWidth + '%'}" :key="t">
                        <!-- <li v-for="item in list"> -->
                            <img :src="item"> 
                        </li>        
                    </ul> 
                    <div class="btn_left p-absolute" @click="back()"><i class="iconfont iconzuo"></i></div>
                    <div class="btn_right p-absolute" @click="next()"><i class="iconfont iconzuo-copy"></i></div>
                </div>


                <div class="shapedList-main-text">
                    <h3>戴晓<span>虚扁</span></h3>
                    <div class="shapedList_con">
                        <dd>壶型：<span>虚扁</span></dd>
                        <dd>年代：<span>已亥年</span></dd>
                        <dd>泥料：<span>紫泥</span></dd>
                    </div>
                    <div class="shapedList_con">
                        <dd>成型：<span>全手工</span></dd>
                        <dd>容量：<span>200cc</span></dd>
                        <dd>抵款：<span>戴晓</span></dd>
                    </div>
                    <div class="shapedList_con">造型优美清晰、典雅大方</div>
                    <div class="shapedList_con">在平稳中追求动感</div>
                </div>

                <div class="btn">点击询价</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'shapedList',

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
            path: `/payment/shaped`
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
.shapedList{
    .shapedList-header {
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
    .shapedList-main{
        padding-top:rem(115px);
        .shapedList-main-con{
            padding:rem(28px);
            .shapedList_lun{
                width:100%;
                height:rem(790px);
                overflow: hidden;
                border:1px solid #a1a1a1;
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
                    width:rem(70px);
                    height:rem(117px);
                    line-height:rem(120px);
                    background:#686863;
                    top:50%;
                    left:rem(35px);
                    transform: translate(0,-50%); 
                    i{
                        display: block; 
                        font-size:rem(50px);
                        color:#fff;
                        text-align:center;
                    }
                }
                .btn_right{
                    width:rem(70px);
                    height:rem(117px);
                    line-height:rem(120px);
                    background:#686863;
                    top:50%;
                    right:rem(35px);
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
        .shapedList-main-text{
            margin:rem(20px) 0 rem(41px);
            border:1px solid #a1a1a1;
            background:#e8e8e8;
            padding:0 rem(30px);
            padding-bottom:rem(40px);
            h3{
                width:100%;
                height:rem(52px);
                line-height:rem(52px);
                display:flex;
                justify-content: center;
                font-size: rem(26px);
                font-family: Font_M;
                background:#24211c;
                color:#fff;
                margin:rem(15px) 0 rem(41px);
                span{
                  margin-left:rem(17px);
                }
            }
            .shapedList_con{
                display:flex;
                margin-bottom:rem(30px);
                color:#24211c;
                font-size:rem(26px);
                dd{
                  color:#24211c;
                  font-size:rem(26px);
                  margin-left:rem(25px);
                  span{
                      color:#24211c;
                      font-size:rem(26px);
                  }
                }
                dd:nth-of-type(1){
                    margin-left:0;
                }
            }
        }
        .btn{
            width:rem(160px);
            height:rem(45px);
            line-height:rem(43px);
            background:#744900;
            color:#fff;
            text-align:center;
            font-size:rem(27px);
            margin:0 auto;
            border-radius:rem(30px);
        }
    }
}
.tran {    
    transition: all 0.5s;
}

</style>
