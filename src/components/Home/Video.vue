<template>
  <div class="werrpr">
    <div id="mse"></div>
    <!-- 聊天室 -->
    <div class="tan">
        <div class="headert">
            <div class="exit">
              <div class="exit_l">
                  <div class="exit_l_img">
                     <!-- <img :src="video_info.avatar" alt="" class="img"> -->
                     <img class="img" v-lazy="video_info.avatar">
                  </div>
                  <div class="exit_l_con">
                      <p class="l1">{{video_info.nickname}}</p>
                      <p class="l2">本场点赞数<span>{{zan_num}}</span></p>
                  </div>
                  <!-- <div :class="is_gz==0?'exit_l_r1':'exit_l_r'" @click="gzplus()">关注</div> -->
                  <div class="exit_l_r1" v-if="is_gz" @click="gzplus()">已关注</div>
                  <div class="exit_l_r" v-else @click="gzplus()">关注</div>
              </div>
              <!-- // 0 是收藏  -->
              <div class="exit_r clearfix">
                <div class="off_btn"> 
                   <i class="iconfont c1 iconquxiao" @click="back()"></i>
                </div>
                <div class="off_btn"> 
                   <i class="iconfont icongengduo"></i>
                </div>
                <div class="off_btn"> 
                   <i class="iconfont iconfenxiang"></i>
                </div>

              </div>
            </div>
        </div>
        <div class="caption" id="dialog"></div>
        <div class="from">
            <div class="msu">
                <input class="textarea thumbnails" id="textarea" v-model="test_con" placeholder="发个弹幕吧 ~">
                <div class="say-btn" @click="addsend_user">发消息
                    <!-- <button class="btn btn-default" @click="addsend_user">发消息</button> -->
                </div>
            </div>
            <div class="muse clearfix">
                <div class="off_btn btn1" @click="gwplus()"> 
                   <i class="iconfont icongouwuche1"></i>
                </div>
                <div class="off_btn btn2" @click="is_Zanblock()"> 
                   <i class="iconfont icondianzan"></i>
                   <p>{{zan_num}}</p>
                </div>
            </div>
        </div>

        
    </div> 


    <!-- 模态框 -->
    <div class="menkuang" v-if="is_tan" @click="gwplusr()">
        <div class="men_con">
            <div class='men_con-top'>
                <div class="men_con-top_img">
                    <!-- <img :src="video_info.avatar" alt="" class="img"> -->
                    <img class="img" v-lazy="video_info.avatar">
                </div>
                <div class="men_con-top_text">
                    <p class="p1">{{video_info.nickname}}</p>
                    <p class="p2">简简单单随随便便说明一句话title</p> 
                </div>
                <div class="men_con-top_right">
                    <div class="btn">进店看看</div>
                </div>
            </div>
            <div class="men_con-bot">
                <div class="men_con-bot_top"></div>
                <div class="men_con-bot_scr"></div>
            </div>
        </div>
    </div>
  </div>
</template>
 
<script>
import store from "@/store/store.js";
import '../../../static/css/jquery-sinaEmotion-2.1.0.min.css'

export default {
    store,
    // 计算属性
    computed: {
        store:function(){
          return this.$store.state;
        }
    },
    data() {
      return {
        user_info:[],
        video_info:[], // 直播信息
        path:"wss://livechat.eelgame.com:7272",
				socket:"",
				client_id:"",
        test_con:'',
        video_id:"",  // 视频id
        is_tan:false, // 模态框
        is_gz:false,      // 关注状态

        zan_num:''
      }
    },
    mounted () {
      var $this = this;
			// 初始化
      this.init();

      $this.video_id = $this.$route.params.id;
      $this.user_info = JSON.parse(localStorage.getItem('user_info'))
      // console.log($this.$store.state.live_address);
      // console.log($this.$store.state.live_id);
      // console.log($this.user_info.username);
      // 播放
      $this.$post($this.$api.livedetails, {id:$this.video_id}).then(data => {
          $this.video_info = data.data[0];
          console.log($this.video_info);
          let player = new FlvJsPlayer({
            "id": "mse",
            "playsinline": true,
            "whitelist": [
                ""
            ],
            "url": data.data[0].live_address,
            "autoplay": true,
            "controls": false,
            "fluid": true,
            "ignores":["loading"]
          });

          // 判断是否收藏
          $this.$post($this.$api.fav_istrue, {
            token:localStorage.getItem('token'),
            mix_id:$this.video_info.id,
            is_type:2
            }).then(data => {
              if(data.data.status == 0){
                $this.is_gz = true
              }else{
                $this.is_gz = false
              }
          })
          $this.$post($this.$api.fav_istrue, {
            token:localStorage.getItem('token'),
            mix_id:$this.video_info.id,
            is_type:3
            }).then(data => {
              $this.zan_num = data.data.count;
              console.log(data);
          })
      })
      

      
      
		},
		methods: {
      // 点击关注
      gzplus(){
        var $this = this;
        if(localStorage.getItem('token') == '' || localStorage.getItem('token') == null){
            alert('请先去登录');
            this.$router.push({
                path: `/login`
            })
        }else{
          $this.$post($this.$api.fav_istrue2, {
            token:localStorage.getItem('token'),
            mix_id:$this.video_info.user_id,
            is_type:2
            }).then(data => {
              if(data.data == 0){
                $this.is_gz = true
              }else{
                $this.is_gz = false
              }
          })
        }
      },
      gwplus(){
        this.is_tan = true;
      },
      gwplusr(){
        this.is_tan = false;
      },
      is_Zanblock(){
        var $this = this;
        // console.log($this.video_info.user_id);

        if(localStorage.getItem('token') == '' || localStorage.getItem('token') == null){
            alert('请先去登录');
            this.$router.push({
                path: `/login`
            })
        }else{
          $this.$post($this.$api.fav_istrue2, {
            token:localStorage.getItem('token'),
            mix_id:$this.video_info.id,
            is_type:3
            }).then(data => {
              $this.zan_num = data.data.count;
          })
        }
      },

      // 监听视频配置
      handleChange(val){
          // console.log(val);
      },
      onPlay(){
          this.$refs.videoPlayer.player.play();
      },
      onPause(){
          this.$refs.videoPlayer.player.pause();
          this.countTime();
      },
      nextFrame(){
          this.$refs.videoPlayer.player.currentTime(this.$refs.videoPlayer.player.currentTime()+1)
      },
      lastFrame(){

      },
      countTime(){
          this.lefttime = this.$refs.videoPlayer.player.currentTime() //已播放时长
      },
      progressChange(val){
              this.player.currentTime(val);
              this.playerCtrl.currentTimeInt=val;
              this.playerCtrl.currentTime=timeUtil.secondToDate(val);
      },
      drawFaceBorder(){
          var img = this.$refs.videoPlayer.player;
          var canvas = document.getElementById("canvasId");
          var ctx = canvas.getContext("2d");
          var img = new Image();
          img.src = "http://47.106.69.227:888/mudan.jpg";
          img.onload = function () {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img,0,0);
              ctx.strokeStyle = "#f00";
              ctx.strokeRect(30,20,100,100);
          }
      },


      // 监听心跳配置
			init: function () {
				if(typeof(WebSocket) === "undefined"){
					alert("您的浏览器不支持socket")
				}else{
					// 实例化socket
					this.socket = new WebSocket(this.path)
					// 监听socket连接
					this.socket.onopen = this.open
					// 监听socket错误信息
					this.socket.onerror = this.error
					// 监听socket消息
          this.socket.onmessage = this.getMessage
          
          //连接关闭
          this.socket.close  = this.close;
				}
			},
			open: function () {
				console.log("socket连接成功")
				this.login();
			},
			error: function () {
				console.log("连接错误")
			},
			getMessage: function (msg) {
        // 接受所有信息 say,login,logout
        var data = JSON.parse(msg.data);
        this.client_id = data.client_id;
        // console.log(data);
        // console.log(this.client_id);
        var sd = this.$route.path;
        var str = sd.split(this.video_id);
        switch (data['type']) {
          case 'ping':
            break;
          case 'login':
            this.appendlogin(data.client_name);
            break;
          case 'say':
              this.addsend(data.from_client_name,data.content);
            break;
          case 'logout':
              //  var test_con = '退出了';
              //  this.socket.send('{"type":"say","to_client_id":"all","to_client_name":"'+data.from_client_name+'","content":"'+test_con+'"}');
                this.appendlogout(data.from_client_name,data.client_id);
            break;
          default:
            break;
        }
      
			},
			login: function () {

        if(localStorage.getItem('token') == '' ||  localStorage.getItem('token') == null){
          var login_data = '{"type":"login","client_name":"游客","room_id":"'+this.$store.state.live_id+'","avatar":"0"}';
          this.send(login_data);
          setTimeout(function () {
              ($('#dialog').children("div:last-child")[0]).scrollIntoView();
          },100);
        }else{
          var login_data = '{"type":"login","client_name":"'+this.user_info.username+'","room_id":"'+this.$store.state.live_id+'","avatar":"1111"}';
          this.send(login_data);
        }
      
			},
			send: function (params) {
				this.socket.send(params)
			},
      addsend_user:function(){
        if(localStorage.getItem('token') == '' ||  localStorage.getItem('token') == null)
        {
          alert('游客不能发送信息,请登录');
          return false;
        }
        // this.test_con;
        // this.user_info.username;
        if(this.test_con == ''){
            return false;
        }else{
          this.socket.send('{"type":"say","to_client_id":"all","to_client_name":"'+this.user_info.username+'","content":"'+this.test_con+'"}');
            this.test_con = ''
        }
      },
			addsend: function (username,con) {
          var strcc = '';
          strcc += '<div class="speech_item clearfix">'
          // strcc += '<img src="static/images/GIF/error_404.jpg" class="user_icon" />'
          strcc += '<span class="paas">'+username+':'+'</span>'

          strcc += '<div class="psi">'
          strcc += '<p class="top">'+con+'</p>'
          strcc += '</div>'
          strcc += '</div>'
          $("#dialog").append(strcc);
          setTimeout(function () {
              ($('#dialog').children("div:last-child")[0]).scrollIntoView();
          },100);
			},
			close: function (username,id) {
        // console.log(username);
        // console.log('退出登录');
        // this.socket.onmessage = this.close
			},
      appendlogin:function(username){
          var strcc = '';
          strcc += '<div class="speech_item add clearfix">'
          // strcc += '<img src="static/images/GIF/error_404.jpg" class="user_icon" />'
          strcc += '<div class="paas">'+username+'<span>加入直播间</span></div>'
          strcc += '</div>'
          $("#dialog").append(strcc);
          setTimeout(function () {
              ($('#dialog').children("div:last-child")[0]).scrollIntoView();
          },100);
      },
      appendlogout:function(username,id){
          var strcc = '';
          strcc += '<div class="speech_item clearfix">'
          // strcc += '<img src="static/images/GIF/error_404.jpg" class="user_icon" />'
          strcc += '<div class="paas">'+username+'<span>退出直播间</span></div>'
          strcc += '</div>'
          $("#dialog").append(strcc);
          setTimeout(function () {
              ($('#dialog').children("div:last-child")[0]).scrollIntoView();
          },100);
      },

      back(){
        var name_say = '';
        if(localStorage.getItem('token') == '' ||  localStorage.getItem('token') == null){
          name_say = '游客'
        }else{
          name_say = this.user_info.username
        }

        this.socket.send('{"type":"logout","to_client_id":"all","to_client_name":"'+name_say+'","client_id":"'+this.client_id+'"}');
        // var strcc = '';
        // strcc += '<div class="speech_item add clearfix">'
        // // strcc += '<img src="static/images/GIF/error_404.jpg" class="user_icon" />'
        // strcc += '<div class="paas">'+name_say+'<span>退出直播间</span></div>'
        // strcc += '</div>'
        // $("#dialog").append(strcc);
        // setTimeout(function () {
        //     ($('#dialog').children("div:last-child")[0]).scrollIntoView();
        // },100);

        this.$router.push({
            path: `/home/videolist`
        })
        // JSON.parse(localStorage.removeItem('__tea_cache_tokens_1300'))          // 清除个人信息
        // JSON.parse(localStorage.removeItem('__tea_cache_events_1300'))          // 清除个人信息
        // localStorage.removeItem('__tea_cache_events_1300')   
        this.socket.onmessage = this.close
      }
    },
   
		destroyed () {
			// 销毁监听
      this.socket.onmessage = this.close
		}
}  
 
</script>


<style lang="scss">
@import '../../assets/sass/base.scss';
.werrpr{
  position: fixed;
  width: 100%;
  height: 100%;
}
.video-player{
  width: 100%;
  height: 100%;
}
.video-js.vjs-fluid{
  height: 100%;
}
.tan{
  width:100%;
  height:100%;
  top:0;
  position:fixed;
}
#dialog{
  width:100%;
  height:40%;
  padding: 0 rem(20px);
  box-sizing: border-box;
  overflow-y: scroll;
}
.textarea{
    display: block;
    max-width: 100%;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    padding: 0;
    border: 1px solid #333;
    resize: none;
    height: rem(50px);
    margin-top: rem(25px);
    font-size: rem(30px);
    width: rem(500px);
    flex: 1;
}
.from{
  width:100%;
  height:10%;
  display: flex;
  padding: rem(10px) 0;
  box-sizing: border-box;
  background: #ccc;
  padding:0 rem(20px);
}
.speech_item {
    margin:rem(10px) 0;
    padding:rem(20px);
    background:#8b817a;
    width:80%;
    border-radius:rem(20px);
    display:flex;
}
.speech_item img{
    height:rem(30px);
    width:rem(30px);
    border-radius: 50%;
    float: left;
}
.speech_item .paas {
    float: left;
    font-size: rem(30px);
    margin-top: rem(4px);
    margin-left:rem(5px);
    color: #efcf15;
    span{
      color:#fff;
      margin-left:rem(2px);
    }
}
.speech_item .psi {
    width: 50%;
    float: left;
    padding-left: rem(10px);
    
    overflow: hidden;
}
.speech_item p.top {
    font-size: rem(30px);
    color: #fff;
    // margin-top: rem(2px);
    line-height: rem(40px);
}
.say-btn button{
  padding: 0 rem(20px);
  height:rem(50px);
  color:#333;
  font-size: rem(30px);
  margin-top: rem(25px);
}
.headert{
  height: 50%;
}
#mse{
  width:100% !important;
  height:100% !important;
  position: fixed;
  top: 0;
  left: 0;
}
#mse video {
    width: 100%;
    height: 100%;
    outline: none;
    object-fit: fill;
}
.exit {
  font-size:rem(50px);
  height:rem(80px);
  color: #ffffff;
  display: flex;
  padding: rem(40px) 0;
  box-sizing:content-box;
  .exit_l{
    width:rem(410px);
    border-radius:rem(50px);
    background:#ccc;
    margin-left:rem(30px);
    display:flex;
    overflow:hidden;
    .exit_l_img{
      width:rem(80px);
      height:rem(80px);
      border-radius:50%;
      margin:rem(1px) 0 0 rem(1px);
      .img{
        display:block;
        width:100%;
        height:100%;
        border-radius:50%;
      }
    }
    .exit_l_con{
      width:rem(210px);
      height:100%;
      .l1{
        font-size:rem(28px);
        color:#fff;
        text-align:center;
        margin-top:rem(12px);
      }
      .l2{
        font-size:rem(22px);
        color:#666;
        text-align:center;
        margin-top:rem(10px);
      }
    }
    .exit_l_r{
      width:rem(120px);
      height:rem(70px);
      line-height:rem(70px);
      background:#7e0200;
      border-radius:rem(50px);
      margin-top:rem(5px);
      font-size:rem(30px);
      text-align:center;
      color:#fff;
    }
    .exit_l_r1{
      width:rem(120px);
      height:rem(70px);
      line-height:rem(70px);
      background:#666;
      border-radius:rem(50px);
      margin-top:rem(5px);
      font-size:rem(30px);
      text-align:center;
      color:#fff;
    }
  }
  .exit_r{
    flex:1;
    text-align:right;
    padding:0 rem(20px) 0 0;
    box-sizing:border-box;
    .off_btn{
      margin-top:rem(10px);
      margin-right:rem(15px);
      width:rem(60px);
      height:rem(60px);
      line-height:rem(60px);
      border-radius:50%;
      background:#ccc;
      color:#fff;
      text-align:center;
      float:right;
      i{
        font-size:rem(40px);
        display:block;
      }
      i.c1{
        font-size:rem(32px);
      }
    }
  }
}
.msu{
  height:rem(60px);
  display: flex;
  border:rem(2px) solid #333;
  border-radius:rem(10px);
  overflow:hidden;
  margin-top:5%;
  .textarea{
    width:rem(310px);
    height:100%;
    margin-top:0;
    border-radius:rem(10px);
    padding:0 rem(10px);
    border:0;
  }
  .say-btn{
    padding: 0 rem(20px);
    height:rem(60px);
    line-height:rem(60px);
    color:#fff;
    font-size: rem(30px);
  }
}
.muse{
  height:rem(60px);
  flex:1;
  margin-top:5%;
  padding:0 rem(20px);
  .off_btn{
    float:left;
    // margin:0 rem(20px);
    i{
      color:#fff;
      font-size:rem(50px);
    }
  }
  .off_btn.btn1{
    margin-left:rem(40px);
  }
  .off_btn.btn2{
    margin-left:rem(30px);
    position:relative;
    p{
      display:block;
      padding:0 rem(5px);
      border-radius:rem(30px);
      background:red;
      font-size:rem(20px);
      text-align:center;
      position:absolute;
      top:rem(-23px);
      min-width:rem(40px);
      left:50%;
      transform: translate(-50%); 
    }
  }
}
.menkuang{
  width: 100%;
  height: 100%;
  top: 0;
  position: fixed;
  z-index: 99999999;
  background: rgba(16,30,44,0.80);
  .men_con{
    width:100%;
    height:rem(800px);
    position:absolute;
    bottom:0;
    .men_con-top{
      width:100%;
      height:rem(130px);
      background:#f6edeb;
      border-radius:rem(40px) rem(40px) 0 0;
      padding:0 rem(20px);
      display:flex;
      overflow:hidden;
      .men_con-top_img{
        width:rem(100px);
        height:rem(100px);
        border-radius:50%;
        margin-top:rem(15px);
        .img{
          display:block;
          width:100%;
          height:100%;
          border-radius:50%;
        }
      }
      .men_con-top_text{
        flex:1;
        padding:0 rem(20px);
        .p1{
          font-size:rem(30px);
          color:#333;
          margin-top:rem(30px);
        }
        .p2{
          font-size:rem(24px);
          color:#666;
          margin-top:rem(20px);
        }
      }
      .men_con-top_right{
        width:rem(180px);
        height:100%;
        .btn{
          width:rem(150px);
          height:rem(70px);
          line-height:rem(70px);
          margin:rem(30px) auto;
          background:#d72f2a;
          color:#fff;
          text-align:center;
          border-radius:rem(50px);
          font-size:rem(26px);
        }
      }
    }
    .men_con-bot{
      height:100%;
      background:#fff;
      .men_con-bot_top{
        width:100%;
        height:rem(120px);
      }
      .men_con-bot_scr{
        width:100%;
        height:100%;
        overflow-y:scroll;
      }
    }
  }
}
</style>