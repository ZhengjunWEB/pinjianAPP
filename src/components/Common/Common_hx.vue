<template>
    <div class="nl_con" id="nl_con">

        <div class="nl_con_div" v-if="index_In == 0">
            <div class="con_sy-list">
                <div class="sousuo">
                    <div class="soousuo1">
                        <input type="text" placeholder="请输入要查询的壶型" v-model="Index_text">
                        <i class="iconfont iconsousuo"></i>
                    </div>
                </div>
                <div class="con_sy-item">
                    <h2><font>紫泥</font><b>·</b>赏析</h2>
                    <div class="con_text">
                        <strong>简介:一句话一句话一句话一句话一句话一句话一句话一句话一句话一句话一句话一句话……</strong>
                        <span>更多详情》</span>
                    </div>
                    <div class="con_icon clearfix">
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                    </div>
                    <div class="btn" @click="change(3)">更多壶形<i class="iconfont iconchangyongicon-"></i></div>
                </div>
                <div class="con_sy-item">
                    <h2>紫泥 赏析</h2>
                    <div class="con_text">
                        <strong>简介:一句话一句话一句话一句话一句话一句话一句话一句话一句话一句话一句话一句话……</strong>
                        <span>更多详情》</span>
                    </div>
                    <div class="con_icon clearfix">
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                    </div>
                    <div class="btn" @click="change(4)">更多紫泥</div>
                </div>
                 <div class="con_sy-item">
                    <h2>紫泥 赏析</h2>
                    <div class="con_text">
                        <strong>简介:一句话一句话一句话一句话一句话一句话一句话一句话一句话一句话一句话一句话……</strong>
                        <span>更多详情》</span>
                    </div>
                    <div class="con_icon clearfix">
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                        <div class="con_icon_item">
                            <img src="static/images/20200411/tm.jpg" alt="" class="img">
                            <p>[名字]</p>
                        </div>
                    </div>
                    <div class="btn" @click="change(5)">更多紫泥</div>
                </div>
            </div>
        </div>
        <div class="nl_con_div" v-else>
            <div class="con_zi-list">
                <div class="icon_ahouer">
                    <h2>圆器</h2>
                    <div class="center">这是介绍文本这是介绍文本这是介绍文本这是介绍文本这是介绍文本这是介绍文本这是介绍文本这是介绍文本这是介绍文本</div>
                    <div class="icon_list clearfix">
                        <div class="icon_list-item">
                            <img data-v-00ea18d0="" src="static/images/20200411/tm.jpg" alt="" class="img">
                            <div class="item">
                                <p>原矿紫泥</p>
                                <span>[8652款]</span>
                            </div>
                        </div>
                        <div class="icon_list-item">
                            <img data-v-00ea18d0="" src="static/images/20200411/tm.jpg" alt="" class="img">
                            <div class="item">
                                <p>原矿紫泥</p>
                                <span>[8652款]</span>
                            </div>
                        </div>
                        <div class="icon_list-item">
                            <img data-v-00ea18d0="" src="static/images/20200411/tm.jpg" alt="" class="img">
                            <div class="item">
                                <p>原矿紫泥</p>
                                <span>[8652款]</span>
                            </div>
                        </div>
                        <div class="icon_list-item">
                            <img data-v-00ea18d0="" src="static/images/20200411/tm.jpg" alt="" class="img">
                            <div class="item">
                                <p>原矿紫泥</p>
                                <span>[8652款]</span>
                            </div>
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
  name: 'common_nl',
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
    .con_sy-list{
        width:100%;
        background:#ececec;
        // padding:0 rem(24px);
        .con_sy-item{
          margin:0 0 rem(20px);
          padding:rem(10px) rem(24px) rem(45px);
          background:#fff;
          h2{
              font-size:rem(28px);
              padding:rem(12px) 0 rem(18px);
              border-bottom:1px solid #dadada;
              font{
                  color:rgb(125,81,0)
              }
              b{
                  margin:0 rem(5px)
              }
          }
          .con_text{
              padding:rem(10px) 0;
              line-height: rem(35px);
              max-height: 100%;  
              strong{
                  color:#666;
              }
              span{
                  color:#714f05;
              }
          }
          .con_icon{
              .con_icon_item{
                  width:rem(215px);
                  float:left;
                  margin-right:rem(25px);
                  margin-top:rem(20px);
                  .img{
                      width: 100%;
                      height: rem(140px);
                  }
                  p{
                      width: 100%;
                      height: rem(50px);
                      line-height: rem(50px);
                      text-align: center;
                      font-size: rem(24px);
                      color: rgb(26,25,20);
                      background:#f1f1f1;
                  }
              }
              .con_icon_item:nth-of-type(3n+3){
                  margin-right:0;
              }
          }
          .btn{
              width: rem(200px);
              height: rem(51px);
              line-height: rem(51px);
              border: 1px solid rgb(102,56,0);
              background: #dadada;
              font-size: rem(24px);
              margin:rem(35px) auto 0;
              border-radius: rem(30px);
              color:rgb(102,56,0);
              display:flex;
              justify-content: center;
              i{
                  color:rgb(102,56,0);
                  font-size:rem(26px);
              }
          }
        }
    }
    .con_zi-list{
        width:100%;
        padding:0 rem(24px);
        .icon_ahouer{
            padding-top:rem(35px);
            h2{
                padding-bottom: rem(20px);
                font-size: rem(28px);
                color: #000;
                border-bottom: 1px solid #666;
                span{
                    color: #666;
                }
                 font{
                    margin:0 rem(5px);
                }
            }
            .center{
                margin:rem(20px) 0;
                font-size: rem(24px);
                color: #a3a3a3;
                max-height: 100%;
                letter-spacing:rem(2px);
                line-height: rem(33px);
            }
            .icon_list-item{
                width: rem(215px);
                float: left;
                margin-right: rem(20px);
                margin-bottom:rem(15px);
                .img{
                      width: 100%;
                      height: rem(140px);
                      display: block;
                }
                .item{
                    height: rem(75px);
                    // border:rem(1px) solid #666;
                    padding:0 rem(10px);
                    background: #ececec;
                    padding-top: rem(10px);
                    p{
                        text-align: center;
                        overflow:hidden; 
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        font-size: rem(26px);
                        color: #000000;
                    }
                    span{
                        display: block;
                        font-size: rem(24px);
                        color: #666;
                        text-align: center;
                        margin-top:rem(5px);
                    }
                }
            }
            .icon_list-item:nth-of-type(3n+3){
                margin-right: 0;
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
            font-size:rem(26px);
            margin:rem(0px) rem(30px);
            color:rgb(73,73,73);
        }
    }
}
</style>
