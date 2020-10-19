<template>
      <div class="tan_ment" :class="hide?'z-in':''" @click="setUser()">
          <div class="tan_delatis-dcipc_kpl" :class="{'tran': hide}" @click.stop="">
              <div class="tan_sctoll">
                  <div class="item_yi_autor">
                      <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_11/15891769502580.jpg" alt="" class="img">
                       <div class="con">
                          <div class="con_list"><span>卖家名字</span><strong class="sty_1">卖家</strong></div>
                          <div class="con_lists"><span>内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容</span><time>20-19-10</time></div>
                      </div>
                      <p><i class="iconfont icondianzan"></i>赞</p>
                  </div>
                  <div class="item_yi_autor">
                      <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_11/15891769502580.jpg" alt="" class="img">
                       <div class="con">
                          <div class="con_list"><span>卖家名字</span></div>
                          <div class="con_lists"><span>内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容</span><time>20-19-10</time></div>
                      </div>
                      <p class="active"><i class="iconfont icondianzan"></i>赞</p>
                  </div>
                  <div class="item_yi_autor">
                      <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_11/15891769502580.jpg" alt="" class="img">
                       <div class="con">
                          <div class="con_list"><span>卖家名字</span></div>
                          <div class="con_lists"><span>内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容</span><time>20-19-10</time></div>
                      </div>
                      <p><i class="iconfont icondianzan"></i>赞</p>
                  </div>
                  <div class="item_yi_autor">
                      <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_11/15891769502580.jpg" alt="" class="img">
                       <div class="con">
                          <div class="con_list"><span>卖家名字</span></div>
                          <div class="con_lists"><span>内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容</span><time>20-19-10</time></div>
                      </div>
                      <p><i class="iconfont icondianzan"></i>赞</p>
                  </div>
                  <div class="item_yi_autor">
                      <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_11/15891769502580.jpg" alt="" class="img">
                       <div class="con">
                          <div class="con_list"><span>卖家名字</span></div>
                          <div class="con_lists"><span>内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容</span><time>20-19-10</time></div>
                      </div>
                      <p><i class="iconfont icondianzan"></i>赞</p>
                  </div>
                  <div class="item_yi_autor">
                      <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_11/15891769502580.jpg" alt="" class="img">
                       <div class="con">
                          <div class="con_list"><span>卖家名字</span></div>
                          <div class="con_lists"><span>内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容</span><time>20-19-10</time></div>
                      </div>
                      <p><i class="iconfont icondianzan"></i>赞</p>
                  </div>
                  <div class="item_yi_autor">
                      <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_11/15891769502580.jpg" alt="" class="img">
                       <div class="con">
                          <div class="con_list"><span>卖家名字</span></div>
                          <div class="con_lists"><span>内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容</span><time>20-19-10</time></div>
                      </div>
                      <p><i class="iconfont icondianzan"></i>赞</p>
                  </div>
                  <div class="item_yi_autor">
                      <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_11/15891769502580.jpg" alt="" class="img">
                       <div class="con">
                          <div class="con_list"><span>卖家名字</span></div>
                          <div class="con_lists"><span>内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容</span><time>20-19-10</time></div>
                      </div>
                      <p><i class="iconfont icondianzan"></i>赞</p>
                  </div>
                  <div class="item_yi_autor">
                      <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_11/15891769502580.jpg" alt="" class="img">
                       <div class="con">
                          <div class="con_list"><span>卖家名字</span></div>
                          <div class="con_lists"><span>内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容</span><time>20-19-10</time></div>
                      </div>
                      <p><i class="iconfont icondianzan"></i>赞</p>
                  </div>
              </div>
              <div class="tan_say">
                  <div class="say">
                      <input type="text" placeholder="说说你的想法" v-model="say_text">
                      <p>发送</p>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
export default {
  name: 'common_chat',
  data () {
    return {
      iside:'',
      say_text:''
    }
  },
  props:['hide'],
  mounted() {
    this.iside = this.hide;
  },
  methods: {
      setUser:function(){
        this.$emit('transfer',this.iside)
        this.say_text = ''
      }
  }
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.tan_ment{
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
}
.z-in{
  z-index:99;
}
.tan_delatis-dcipc_kpl{
  width: 100%;
  height: rem(800px);
  position: absolute;
  bottom:rem(-800px);
  left:0;
  background: #efefef;
  transition: all 0.5s;
  z-index: 99;
  .tan_sctoll{
    width:100%;
    height:rem(700px);
    overflow-y:scroll;
    .item_yi_autor{
      width: 100%;
      height: rem(120px);
      display: flex;
      padding:0 rem(15px);
      margin:rem(20px) 0;
      .img{
        width: rem(66px);
        height: rem(66px);
        border-radius: 50%;
        margin-top:rem(20px);
      }
      .con{
        flex:1;
        .con_list{
          height: rem(50px);
          line-height: rem(50px);
          font-size: rem(30px);
          padding:0 rem(15px);
          display: flex;
          .sty_1{
            font-size: rem(28px);
            height: rem(40px);
            line-height: rem(38px);
            padding:0 rem(15px);
            background: #fff6e2;
            border:rem(1px) solid #d6950a;
            color: #d6950a;
            border-radius: rem(20px);
            margin:rem(5px) rem(10px);
          }
        }
        .con_lists{
          padding:0 rem(15px);
          // margin-top:rem(10px);
          font-size: rem(26px);
          color: #333;
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          time{
            color: #666;
            font-size: rem(22px);
            margin-left:rem(8px);
          }
        }
      }
      p{
        font-size: rem(28px);color: #333;
        padding-top:rem(50px);
        i{
          font-size: rem(28px);color: #333;
          margin-right: rem(7px);
        }
      }
      p.active{
        color: red;
        i{
          color: red;
        }
      }
    }
  }
  .tan_say{
    width:100%;
    height:rem(100px);
    padding:0 rem(15px);
    .say{
      width:100%;
      height:rem(60px);
      line-height:rem(60px);
      margin-top:rem(20px);
      background:#fff;
      border-radius:rem(30px);
      display:flex;
      overflow:hidden;
      p{
        width:rem(100px);
        background:#009a99;
        color:#fff;
        text-align:center;
        font-size:rem(28px);
      }
      input{
        padding:rem(20px);
        outline:none;
        border:0;
        flex:1;
        font-size:rem(28px);
      }
    }
  }
}
.tran{
  bottom:0;
}
</style>
