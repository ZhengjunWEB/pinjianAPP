<template>
    <div class="nl_con" id="nl_con">

        <div class="nl_con_div" v-if="index_In == 0">
            <div class="sousuo">
                <div class="soousuo1">
                    <input type="text" placeholder="请输入要查询的壶型" v-model="Index_text">
                    <i class="iconfont iconsousuo"></i>
                </div>
            </div>

            <div class="artist-list">
                <div class="artist-item">
                     <div class="title"><span class="p-relative">标题</span></div>
                     <div class="con">
                        <div class="con_IMg">
                            <img class="img" src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png">
                        </div>
                        <div class="con_Text">
                            <div class="name">名字</div>
                            <div class="title">研究员高级工程师</div>
                            <div class="con_text">文本文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍介绍</div>
                        </div>
                     </div>
                     <div class="con">
                        <div class="con_IMg">
                            <img class="img" src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png">
                        </div>
                        <div class="con_Text">
                            <div class="name">名字</div>
                            <div class="title">研究员高级工程师</div>
                            <div class="con_text">文本文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍介绍</div>
                        </div>
                     </div>
                     <div class="con">
                        <div class="con_IMg">
                            <img class="img" src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png">
                        </div>
                        <div class="con_Text">
                            <div class="name">名字</div>
                            <div class="title">研究员高级工程师</div>
                            <div class="con_text">文本文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍介绍</div>
                        </div>
                     </div>
                     <button class="btn">研究员高级工程师<i class="iconfont iconchangyongicon-"></i></button>
                </div>
                <div class="artist-item">
                     <div class="title"><span class="p-relative">标题</span></div>
                     <div class="con">
                        <div class="con_IMg">
                            <img class="img" src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png">
                        </div>
                        <div class="con_Text">
                            <div class="name">名字</div>
                            <div class="title">研究员高级工程师</div>
                            <div class="con_text">文本文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍介绍</div>
                        </div>
                     </div>
                     <div class="con">
                        <div class="con_IMg">
                            <img class="img" src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png">
                        </div>
                        <div class="con_Text">
                            <div class="name">名字</div>
                            <div class="title">研究员高级工程师</div>
                            <div class="con_text">文本文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍介绍</div>
                        </div>
                     </div>
                     <div class="con">
                        <div class="con_IMg">
                            <img class="img" src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png">
                        </div>
                        <div class="con_Text">
                            <div class="name">名字</div>
                            <div class="title">研究员高级工程师</div>
                            <div class="con_text">文本文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍文本介绍介绍</div>
                        </div>
                     </div>
                     <button class="btn">研究员高级工程师<i class="iconfont iconchangyongicon-"></i></button>
                </div>
            </div>
        </div>
        <div class="nl_con_div" v-else>
            <div class="artist-list_or">
                <div class="title"><span class="p-relative">标题</span></div> 
                <div class="artist_or_lisrt">
                    <div class='artist_or_lisrt-item'>
                        <img src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png" alt="" class="img">
                        <div class="user_icon">
                            <p class="name">名字</p>
                            <p class="title">标题</p>
                        </div>
                    </div>
                    <div class='artist_or_lisrt-item'>
                        <img src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png" alt="" class="img">
                        <div class="user_icon">
                            <p class="name">名字</p>
                            <p class="title">标题</p>
                        </div>
                    </div>
                    <div class='artist_or_lisrt-item'>
                        <img src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png" alt="" class="img">
                        <div class="user_icon">
                            <p class="name">名字</p>
                            <p class="title">标题</p>
                        </div>
                    </div>
                    <div class='artist_or_lisrt-item'>
                        <img src="static/images/20200411/7c4a499060b941e689a7cf5eb575e482.png" alt="" class="img">
                        <div class="user_icon">
                            <p class="name">名字</p>
                            <p class="title">标题</p>
                        </div>
                    </div>
                </div>   
            </div>     
        </div>
        <!-- 首页样式 -->
       
        

        <!-- 子类样式 -->
        
    </div>
   
</template>

<script>
export default {
  name: 'common_yr',
  data () {
    return {
       index_In:"",
       Index_text:''
    }
  },

  

  props:['Index'],
  watch:{
    Index(val){ //message即为父组件的值，val参数为值
    this.index_In = val;
    },
 },
  mounted(){
      this.index_In = this.Index;
  },
  methods: {
     change:function(index){
        this.$emit('transfer_index',index)
　　　   document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
     },
   
  }
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.nl_con{
    padding-top:rem(190px);
    .artist-list{
        .artist-item{
            // padding:0 rem(20px);
            margin:rem(50px) auto;
            .title{
                text-align:center;
                span{
                    color:#4b4b4b;
                    height:rem(40px);
                    line-height:rem(40px);
                    font-size:rem(26px);
                }
                span:after{
                    position:absolute;
                    content:'';
                    width:rem(127px);
                    height:rem(1px);
                    background:#9c9c9c;
                    top:rem(20px);
                    right:rem(-137px);
                }
                span:before{
                    position:absolute;
                    content:'';
                    width:rem(127px);
                    height:rem(1px);
                    background:#9c9c9c;
                    top:rem(20px);
                    left:rem(-137px);
                }
            }
            .con{
                margin-top:rem(30px);
                height:rem(185px);
                display: flex;
                padding:0 rem(20px);
                border-bottom:1px solid #666;
                padding-bottom:rem(20px);
                .con_IMg{
                    width:rem(270px);
                    height:100%;
                    .img{
                        display:block;
                        width:100%;
                        height:100%;
                    }
                }
                .con_Text{
                    flex:1;
                    padding:0 rem(10px) 0 rem(30px);
                    .name{
                        font-size:rem(26px);
                        color:#4b4b4b;
                        margin-top:rem(20px);
                    }
                    .title{
                        font-size:rem(26px);
                        color:#4b4b4b;
                        margin-top:rem(12px);
                        text-align:left;
                    }
                    .con_text{
                        font-size:rem(20px);
                        color:#b1b0b0;
                        height:rem(60px);
                        line-height:rem(28px);
                        overflow: hidden;
                        display: -webkit-box;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        margin-top:rem(20px);
                    }
                    .btn{
                        padding:0 rem(20px);
                    }
                }
            }
            .con:nth-of-type(4){
                border:0;
            }
            .btn{
                display: block;
                padding:0 rem(30px);
                margin:rem(40px) auto;
                height: rem(45px);
                line-height: rem(45px);
                border-radius: rem(30px);
                border:1px solid #666;
                background: #fff;
                outline: none;
                font-size: rem(26px);
                i{
                    font-size: rem(26px);
                    margin:rem(0px) rem(5px);
                }
            }
        }
    }


    .artist-list_or{
        .title{
            text-align:center;
            margin:rem(50px) 0 rem(40px);
            span{
                color:#4b4b4b;
                height:rem(40px);
                line-height:rem(40px);
                font-size:rem(26px);
            }
            span:after{
                position:absolute;
                content:'';
                width:rem(127px);
                height:rem(1px);
                background:#9c9c9c;
                top:rem(20px);
                right:rem(-137px);
            }
            span:before{
                position:absolute;
                content:'';
                width:rem(127px);
                height:rem(1px);
                background:#9c9c9c;
                top:rem(20px);
                left:rem(-137px);
            }
        }
        .artist_or_lisrt{
            padding:0 rem(20px);
            margin:0 0 rem(22px);
            .artist_or_lisrt-item{
                width: rem(340px);
                height: rem(320px);
                border: rem(1px) solid #666;
                margin:0 0 rem(25px);
                .img{
                    display: block;
                    width: 100%;
                    height: rem(230px);
                }
                .user_icon{
                    width: 100%;
                    height: rem(90px);
                    padding:rem(15px) rem(18px);
                    .name{
                        font-size:rem(27px);
                        color: #000;
                    }
                    .title{
                        color: #A3A3A3;
                        font-size: rem(22px);
                        margin:0;
                        text-align: left;
                        margin-top:rem(10px);
                        overflow:hidden;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                    }
                }
            }
            .artist_or_lisrt-item:nth-of-type(odd){
                float:left;
            }
            .artist_or_lisrt-item:nth-of-type(even){
                float:right;
            }
        }
    }
}
.sousuo{
    background:#fff;
    padding:rem(37px) 0 rem(20px);
    .soousuo1{
        width:rem(645px);
        height:rem(50px);
        line-height:rem(50px);
        display:flex; 
        margin:0 auto;
        border:1px solid #666;
        border-radius:rem(30px);
        overflow:hidden;
        input{
            font-size:rem(26px);
            color:rgb(73,73,73);
            outline:none;
            border:0;
            flex:1;
            padding:0 rem(30px);
        }
        i{
            display:block;
            height:rem(48px);
            font-size:rem(26px);
            margin:rem(0px) rem(30px);
            color:rgb(73,73,73);
        }
    }
}
</style>
