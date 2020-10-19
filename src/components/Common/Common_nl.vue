<template>
    <div class="nl_con" id="nl_con">

        <div class="nl_con_div" v-if="index_In == 0">
            <div class="con_sy-list">
                <div class="con_sy-item" v-for="(v,k) in index_con" :key="k">
                    <h2><span>{{v.name}}</span><b>·</b>赏析</h2>
                    <div class="con_text">
                        <strong>{{v.tags}}</strong>
                        <span>更多详情》</span>
                    </div>
                    <div class="con_icon clearfix">
                        <div class="con_icon_item" v-for="(n,l) in v.goods.data" :key="l">
                            <!-- <img :src="n.goods_images" alt="" class="img"> -->
                            <img v-lazy="n.goods_images" class="img">
                            <p>[{{n.goods_name}}]</p>
                        </div>
                    </div>
                    <div class="btn" @click="change(k)">更多{{v.name}}</div>
                </div>
                
            </div>
        </div>
        <div class="nl_con_div" v-else-if="index_In == 1">
            <div class="con_sy-list">
                <div class="con_sy-item" v-for="(v,k) in index_con" :key="k">
                    <h2><span>{{v.name}}</span><b>·</b>赏析</h2>
                    <div class="con_icon clearfix">
                        <div class="con_icon_item" v-for="(n,l) in v.goods.data" :key="l">
                            <!-- <img :src="n.goods_images" alt="" class="img"> -->
                            <img v-lazy="n.goods_images" class="img">
                            <p>[{{n.goods_name}}]</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nl_con_div" v-else>
            <div class="con_zi-list">
                <div class="con_zi-list-top">
                    <img src="/static/images/20200411/tm.jpg" alt="" class="img">
                    <div class="list-top_r">
                        <h2>紫泥</h2>
                        <span>[2015款]</span>
                    </div>
                </div>
                <div class="icon_text">
                    <div class="item">
                        <b>简介：</b>
                        <span>第三大街啊很快就爱好的空间还得靠拉回到家黄金卡汇顶科技</span>
                    </div>
                    <div class="item">
                        <b>窑温：</b>
                        <span>36.5</span>
                    </div>
                    <div class="item">
                        <b>收缩地：</b>
                        <span>36.5</span>
                    </div>
                    <div class="item">
                        <b>破产地：</b>
                        <span>36.5</span>
                    </div>
                    <div class="item">
                        <b>泥性：</b>
                        <span>36.5</span>
                    </div>
                    <div class="item">
                        <b>难度：</b>
                        <span>36.5</span>
                    </div>
                    <div class="item">
                        <b>特点：</b>
                        <span>36.5</span>
                    </div>
                    <div class="item">
                        <b>冲茗特性：</b>
                        <span>36.5</span>
                    </div>
                    <div class="item">
                        <b>冲茗建议：</b>
                        <span>36.5</span>
                    </div>
                </div>
                <div class="icon_list clearfix">
                    <div class="icon_list-item">
                        <p>原矿紫泥</p>
                        <span>[8652款]</span>
                    </div>
                    <div class="icon_list-item">
                        <p>原矿紫泥</p>
                        <span>[8652款]</span>
                    </div>
                    <div class="icon_list-item">
                        <p>原矿紫泥</p>
                        <span>[8652款]</span>
                    </div>
                    <div class="icon_list-item">
                        <p>原矿紫泥</p>
                        <span>[8652款]</span>
                    </div>
                    <div class="icon_list-item">
                        <p>原矿紫泥</p>
                        <span>[8652款]</span>
                    </div>
                    <div class="icon_list-item">
                        <p>原矿紫泥</p>
                        <span>[8652款]</span>
                    </div>
                    <div class="icon_list-item">
                        <p>原矿紫泥</p>
                        <span>[8652款]</span>
                    </div>
                    <div class="icon_list-item">
                        <p>原矿紫泥</p>
                        <span>[8652款]</span>
                    </div>
                </div>
                <div class="icon_ahouer">
                    <h2>紫泥<font>·</font><span>作品荣耀馆</span></h2>
                    <div class="icon_ahouer-title">
                        <div class="icon_ahouer-title-item">金奖</div>
                        <div class="icon_ahouer-title-item">银奖</div>
                        <div class="icon_ahouer-title-item">铜奖</div>
                        <div class="icon_ahouer-title-item">优秀</div>
                        <div class="icon_ahouer-title-item">收藏</div>
                        <div class="icon_ahouer-title-item">专利</div>
                    </div>

                    <!-- <div class="tuijian clearfix">
                        <div class="item">
                            <h2>标题标题标题标题标标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题题标题标题标题标题</h2>
                            <img :src="imh" alt="">
                            <div class="icon-com">
                                <b>贺美媒</b>
                                <b>五行</b>
                                <span>#289955</span>
                            </div>
                            <div class="btn">点击询价</div>
                        </div>
                        <div class="item">
                            <h2>标题标题标题标题标标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题题标题标题标题标题</h2>
                            <img :src="imh" alt="">
                            <div class="icon-com">
                                <b>贺美媒</b>
                                <b>五行</b>
                                <span>#289955</span>
                            </div>
                            <div class="btn">点击询价</div>
                        </div>
                        <div class="item">
                            <h2>标题标题标题标题标标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题题标题标题标题标题</h2>
                            <img :src="imh" alt="">
                            <div class="icon-com">
                                <b>贺美媒</b>
                                <b>五行</b>
                                <span>#289955</span>
                            </div>
                            <div class="btn">点击询价</div>
                        </div>
                        <div class="item">
                            <h2>标题标题标题标题标标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题题标题标题标题标题</h2>
                            <img :src="imh" alt="">
                            <div class="icon-com">
                                <b>贺美媒</b>
                                <b>五行</b>
                                <span>#289955</span>
                            </div>
                            <div class="btn">点击询价</div>
                        </div>
                    </div>   -->
                </div>
                <div class="icon_tk">
                    <h2>紫泥<span><font>·</font>新品推荐</span></h2>
                    <div class="tuijian clearfix">
                        <div class="item">
                            <img src="/static/img/error_404.d5475f3.jpg" alt="">
                            <div class="icon-com">
                                <b>贺美媒</b>
                                <b>五行</b>
                                <span>#289955</span>
                            </div>
                            <div class="btn">点击询价</div>
                        </div>
                        <div class="item">
                            <img src="/static/img/error_404.d5475f3.jpg" alt="">
                            <div class="icon-com">
                                <b>贺美媒</b>
                                <b>五行</b>
                                <span>#289955</span>
                            </div>
                            <div class="btn">点击询价</div>
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

       index_con:'',
    }
  },

  

  props:['Index','nlIndex'],
  watch:{
    Index(val){ //message即为父组件的值，val参数为值
        this.index_In = val;
    },
    nlIndex(val){ //message即为父组件的值，val参数为值
        this.index_con = val;
    },

 },
  mounted(){
      this.index_In = this.Index;
  },
  methods: {
     change:function(index){
        this.$emit('transfer_index',index+2)
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
        padding:0 rem(24px);
        .con_sy-item{
          margin:rem(20px) 0;
          padding-bottom:rem(10px);
          h2{
              font-size:rem(28px);
              padding:rem(12px) 0 rem(18px);
              border-bottom:1px solid #dadada;
              color: #9c9c9c;
              span{
                color: #000;
                font-size:rem(28px);
              }
              b{
                  margin:0 rem(8px);
                  color: #000;
              }
          }
          .con_text{
              padding:rem(10px) 0;
              line-height: rem(35px);
              max-height: 100%;  
              strong{
                  color:#666;
              }
          }
          .con_icon{
              .con_icon_item{
                  width:rem(227px);
                  height:rem(182px);
                  float:left;
                  margin-right:rem(8px);
                  margin-top:rem(20px);
                  .img{
                      width: 100%;
                      height: rem(140px);
                  }
                  p{
                      width: 100%;
                      height: rem(42px);
                      line-height: rem(42px);
                      text-align: center;
                      font-size: rem(25px);
                      color: #333;
                      margin-left:rem(-6px);
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
              text-align: center;
              border: 1px solid #666;
              background: #dadada;
              font-size: rem(26px);
              margin:rem(35px) auto 0;
              border-radius: rem(30px);
          }
        }
    }
    .con_zi-list{
        width:100%;
        padding:0 rem(24px);
        .con_zi-list-top{
            margin:rem(20px) 0;
            width: 100%;
            height: rem(143px);
            display: flex;
            .img{
                display: block;
                width: rem(230px);
                height: 100%;
            }
            .list-top_r{
                flex:1;
                padding-left: rem(25px);
                h2{
                    margin-top:rem(30px);
                    color: #333;
                    font-size: rem(26px);
                }
                span{
                    display: block;
                    margin-top:rem(20px);
                    font-size: rem(26px);
                    color:#666;
                }
            }
        }
        .icon_text{
            margin:rem(30px) 0 rem(50px);
            .item{
                margin-bottom:rem(10px);
                font-size:rem(28px);
                letter-spacing:1px;
                line-height: rem(35px);
                b{
                    color: #000;
                }
                span{
                    color: #666;
                }
            }
        }
        .icon_list{
            .icon_list-item{
                width: rem(165px);
                height: rem(75px);
                border:rem(1px) solid #666;
                padding:0 rem(10px);
                float: left;
                margin-right: rem(10px);
                margin-bottom:rem(15px);
                p{
                    text-align: center;
                    overflow:hidden; 
                    white-space:nowrap;
                    text-overflow:ellipsis;
                    font-size: rem(26px);
                    color: #000000;
                    margin-top:rem(10px);
                }
                span{
                    display: block;
                    font-size: rem(24px);
                    color: #666;
                    text-align: center;
                    margin-top:rem(5px);
                }
            }
            .icon_list-item:nth-of-type(4n+4){
                margin-right: 0;
            }
        }
        .icon_ahouer{
            margin-top:rem(35px);
            h2{
                padding-bottom: rem(30px);
                font-size: rem(28px);
                color: #000;
                span{
                    color: #666;
                }
                 font{
                    margin:0 rem(5px);
                }
            }
            .icon_ahouer-title{
                width: 100%;
                height:rem(62px);
                line-height: rem(62px);
                padding:0 rem(20px);
                display: flex;
                justify-content: space-between;
                border-top:rem(1px) solid #666;
                border-bottom:rem(1px) solid #666;
                .icon_ahouer-title-item{
                    font-size: rem(25px);
                    color: #333;
                }
            }
            .tuijian{
                margin-top:rem(10px);
                .item{
                    width: rem(342px);
                    margin-top:rem(5px);
                    padding-bottom: rem(40px);
                    h2{
                        font-size: rem(25px);
                        // height: rem(75px);
                        line-height: rem(35px);
                        overflow: hidden;
                        display: -webkit-box;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        color: #666;
                        padding:0;
                    }
                    img{
                        width: 100%;
                        height: rem(285px);
                        display: block;
                        margin:rem(18px) 0;
                    }
                    .icon-com{
                        width: 100%;
                        height: rem(70px);
                        line-height: rem(35px);
                        overflow: hidden;
                        display: -webkit-box;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        margin:rem(10px) 0;
                        padding: 0 rem(10px);
                        b{
                            font-size: rem(26px);
                            color: #333;
                        }
                        span{
                            font-size: rem(20px);
                            color: #666;
                            margin-left:rem(5px);
                        }
                    }
                    .btn{
                        width: rem(160px);
                        height: rem(40px);
                        line-height: rem(40px);
                        text-align: center;
                        background: #744900;
                        border-radius: rem(20px);
                        font-size: rem(26px);
                        color: #fff;
                        margin:0 auto;
                    }
                }
                .item:nth-of-type(odd){
                    float:left;
                }
                .item:nth-of-type(even){
                    float:right;
                }
            }
        }
        .icon_tk{
            margin-top:rem(50px);   
            h2{
                padding-bottom: rem(20px);
                font-size: rem(28px);
                color: #000;
                max-height: 100%;
                font{
                    margin:0 rem(5px);
                }
                span{
                    color: #666;
                }
            }
            .tuijian{
                margin-top:rem(10px);
                .item{
                    width: rem(342px);
                    margin-top:rem(5px);
                    padding-bottom: rem(40px);
                    img{
                        width: 100%;
                        height: rem(285px);
                        display: block;
                    }
                    .icon-com{
                        width: 100%;
                        height: rem(70px);
                        line-height: rem(35px);
                        overflow: hidden;
                        display: -webkit-box;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        margin:rem(10px) 0;
                        padding: 0 rem(10px);
                        b{
                            font-size: rem(26px);
                            color: #333;
                        }
                        span{
                            font-size: rem(20px);
                            color: #666;
                            margin-left:rem(5px);
                        }
                    }
                    .btn{
                        width: rem(160px);
                        height: rem(40px);
                        line-height: rem(40px);
                        text-align: center;
                        background: #744900;
                        border-radius: rem(20px);
                        font-size: rem(26px);
                        color: #fff;
                        margin:0 auto;
                    }
                }
                .item:nth-of-type(odd){
                    float:left;
                }
                .item:nth-of-type(even){
                    float:right;
                }
            }
        }
    }
}
</style>
