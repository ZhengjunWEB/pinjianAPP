<template>
  <div class="werrpr">
      <video id="Video" class="video-js vjs-default-skin vjs-big-play-centered"></video>
      <!-- <div id="mse"></div> -->

      <!-- 头部区域 -->
      <div class="header_top">
          <div class="header_topCon">
              <div class="ba"></div>
              <div class="ba_img">
                  <img :src="video_thmub" alt="">
              </div>
              <div class="ba_con">
                <div class="title">{{video_title}}</div>
                <div class="num">{{video_num}}人观看</div> 
              </div>
          </div>  
          <div class="header_icon">
              <div class="icon" @click="isHides()">
                  <img :src="srcPath + 'video_a.png'" alt="">
              </div>
              <div class="icon" @click="back()"><img :src="srcPath + 'video_x.png'" alt=""></div>
          </div>    
      </div>


       <!-- 房间高亮提示 -->
      <div class="main-title" v-if="isHide">{{video_mesgname}} {{ins}}直播间</div>
      <!-- 聊天区域 -->
      <div class="main-listCon" v-if="isHide" id="main-listCon"></div>

      <!-- 底部区域 -->
      <div class="footersa" v-if="isShow">
          <div class="tooterx" @click="input()">
              <div class="ba"></div>
              <input type="text" placeholder="聊点什么吧~" disabled="true">
          </div>
          <div class="footerss_c">
              <img :src="srcPath + 'video_b.png'" alt="">
          </div>
      </div>

      <div class="consl" v-else>
          <input type="text" v-model="mesg" placeholder="你也说些什么吧" ref="inputs">
          <span @click="submit()">发送</span>
      </div>



  </div>



</template>
<script>

export default {
    data() {
      return {
        video_info:[],         // 直播详细信息
        video_id:"",           // 直播间id
        mesg:'',               // 输入框输入内容
        video_num:'',          // 直播见观看人数
        video_thmub:'',        // 直播头像
        video_title:'',        // 直播标题
        video_mesgname:'',     // 直播人名
        ins:'',                // 进入 or 退出
        roomid:'',             // 直播群号
        isHide:true,           // 聊天室显示隐藏
        isShow:true,           // 底部显示
        data:{},               // 集合
        srcPath: "http://res.pinjianapp.com/vue_wap/images/live/",  //配置地址

      }
    },
    created(){
      var $this = this;
      var wy = JSON.parse(localStorage.getItem('wy'))
      $this.roomid = $this.$route.params.roomid;
      $this.$post($this.$api.add_swarm, {members:wy.chat,tid:$this.roomid}).then(data => {});
    },
    mounted () {
      var $this = this;
      $this.video_id = $this.$route.params.vid;
      $this.user_info = JSON.parse(localStorage.getItem('user_info'));
      var wy = JSON.parse(localStorage.getItem('wy'))
      // 播放
      $this.$post($this.$api.livedetails, {id:$this.video_id}).then(data => {
          $this.video_num = data.data.view_num 
          $this.video_thmub = data.data.avatar
          $this.video_title = data.data.nickname
          console.log(data);
          // if(data.code == 200){
          //   this.player(data.data[0].live_address);
          // }
          // console.log($this.video_info.live_address);
          
          // let player = new FlvJsPlayer({
          //   "id": "mse",
          //   "playsinline": true,
          //   "whitelist": [
          //       ""
          //   ],
          //   "url": "http://play.pinjianapp.com/live/room002.m3u8"
          // });
      })
     



      ///  网易云信 初始化
      var data = {};
      var nim = NIM.getInstance({
        debug: false,
        appKey: '07dc25a120904484bac245d60d36d212',
        account: wy.chat,
        token: wy.token,
        onteams: onTeams,
        onmsg:onMsg,
        onsynccreateteam: onCreateTeam,
        onteammembers: onTeamMembers,
        onsyncteammembersdone: onSyncTeamMembersDone,
        onaddteammembers:onAddTeamMembers,
        onupdateteammember:onUpdateTeamMember,
      });
      // 接受群列表
      function onTeams(teams) {
        data.teams = nim.mergeTeams(data.teams, teams);
        onInvalidTeams(teams.invalid);
      };
      function onInvalidTeams(teams) {
        data.teams = nim.cutTeams(data.teams, teams);
        data.invalidTeams = nim.mergeTeams(data.invalidTeams, teams);
        refreshTeamsUI();
      }
      // 接受到信息
      function onMsg(msg){
          console.log(msg);
          switch (msg.type) {
          case 'custom':
              onCustomMsg(msg);
              break;
          case 'notification':
              // 处理群通知消息
              onTeamNotificationMsg(msg);
              break;
          case 'text':
              // 处理群通知消息
              onTeamNotificationMsg(msg);
              break;
          // 其它case
          default:
              break;
          }

        // if(msg.scene == 'team'){
        //     $this.video_mesgname = msg.attach.accounts[0];
           
        // }
      };
      function onTeamNotificationMsg(msg) {
        console.log(msg);
        if(msg.text !== ''){
          var str = '';
          str += '<div class="item">'
          str += '<div class="itemCon"><span>'+msg.fromNick+'：</span>'+msg.text+'</div>'
          str += '</div>'
          $('#main-listCon').append(str);
          $("#main-listCon").scrollTop($("#main-listCon")[0].scrollHeight);

        }
        if(msg.attach.accounts[0] != ''){
          $('.main-title').prepend(msg.attach.accounts[0]);
        }
          
        // 处理群通知消息
        var type = msg.attach.type,
              from = msg.from,
              teamId = msg.to,
              timetag = msg.time,
              team = msg.attach.team,
              account = msg.attach.account,
              accounts = msg.attach.accounts,
              members = msg.attach.members;
          switch (type) {
          case 'updateTeam':
              team.updateTime = timetag;
              onTeams(team);
              break;
          case 'addTeamMembers':
              onAddTeamMembers(team, accounts, members);
              break;
          case 'removeTeamMembers':
              onRemoveTeamMembers(team, teamId, accounts);
              break;
          case 'acceptTeamInvite':
              onAddTeamMembers(team, [from], members);
              break;
          case 'passTeamApply':
              onAddTeamMembers(team, [account], members);
              break;
          case 'addTeamManagers':
              updateTeamManagers(teamId, members);
              break;
          case 'removeTeamManagers':
              updateTeamManagers(teamId, members);
              break;
          case 'leaveTeam':
              onRemoveTeamMembers(team, teamId, [from]);
              break;
          case 'dismissTeam':
              dismissTeam(teamId);
              break;
          case 'transferTeam':
              transferTeam(team, members);
              break;
          }
      };

      function onAddTeamMembers(team, accounts, members) {
          var teamId = team.teamId;
         
          /*
          如果是别人被拉进来了，那么拼接群成员列表
          如果是自己被拉进来了，那么同步一次群成员列表
          */
          if (accounts.indexOf(data.account) === -1) {
              onTeamMembers({
                  teamId: teamId,
                  members: members
              });
          } else {
              nim.getTeamMembers({
                  teamId: teamId,
                  sync: true,
                  done: function(error, obj) {
                      if (!error) {
                          onTeamMembers(obj);
                      }
                  }
              });
          }
          onTeams(team);
      };
      // 创建群的回调, 此方法接收一个参数, 包含群信息和群主信息
      function onCreateTeam(team) {
        console.log('你创建了一个群', team);
        data.teams = nim.mergeTeams(data.teams, team);
        console.log(data.teams);
        refreshTeamsUI();
        onTeamMembers({
          teamId: team.teamId,
          members: owner
        });
      };
      function refreshTeamsUI() {
        // 刷新界面
      };
      function onTeamMembers(obj) {
        console.log('群id', teamId, '群成员', members);
        var teamId = obj.teamId;
        var members = obj.members;
        data.teamMembers = data.teamMembers || {};
        data.teamMembers[teamId] = nim.mergeTeamMembers(data.teamMembers[teamId], members);
        data.teamMembers[teamId] = nim.cutTeamMembers(data.teamMembers[teamId], members.invalid);
        refreshTeamMembersUI();
      };
      function onSyncTeamMembersDone() {
          console.log('同步群成员列表完成');
      }
      function onUpdateTeamMember(teamMember) {
        console.log('群成员信息更新了', teamMember);
        onTeamMembers({
          teamId: teamMember.teamId,
          members: teamMember
        });
      };
      function refreshTeamMembersUI() {
        // 刷新界面
      };
      
		},
		methods: {
      back(){
        var $this = this;
        var wy = JSON.parse(localStorage.getItem('wy'))
        $this.$post($this.$api.leave_swarm, {accid:wy.chat,tid:$this.roomid}).then(data => {});
        // var myPlayer = videojs('Video');
        // myPlayer.dispose();
        this.$router.back();
      },
      // 控制显示隐藏
      isHides(){
        this.isHide = !this.isHide
      },
      // 初始化播放
      player(val){
        var live_address = val;
        hwplayerloaded(function () {
          var player = new HWPlayer('Video', {
              controls: false,
              muted:false,
              // poster:'../../assets/images/Index_Img/pexels-myicahel-tamburini-1152994.png',
              autoplay: true,
          });
          player.src({ 
              src: 'http://pili-live-hls.pinjianapp.com/pinjian/001.m3u8', //视频地址
              type: 'application/x-mpegURL' 
          });
        });
      },
      // 点击显示
      input(){
        this.isShow = false;
        this.$nextTick(() => {
          this.$refs.inputs.focus()
        })
      },
      
      // 发送信息
      submit(){
        var $this = this;
        var wy = JSON.parse(localStorage.getItem('wy'))
        $this.$post($this.$api.sendmsg, {
          fromid:wy.chat,
          toid:$this.$route.params.roomid,
          body:$this.mesg,
          ope:1
        }).then(data => {
          console.log(data);
        })
      },
    },
		destroyed () {
      var $this = this;
      var wy = JSON.parse(localStorage.getItem('wy'))
      $this.$post($this.$api.leave_swarm, {accid:wy.chat,tid:$this.roomid}).then(data => {});
      

      // var myPlayer = videojs('Video');
      // myPlayer.dispose();
		}
}  
 
</script>


<style lang="scss">
@import '@/assets/sass/base.scss';
.header_top{
  width: 100%;
  height: rem(80px);
  line-height: rem(80px);
  padding: 0 rem(32px);
  position: absolute;
  top: rem(48px);
  display: flex;
  .header_topCon{
    width: rem(320px);
    height: rem(80px);
    line-height: rem(80px);
    border-radius: rem(40px);
    overflow: hidden;
    position: relative;
    .ba{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: #000000;
      opacity: 0.2;
      border-radius: rem(40px);
    }
    .ba_img{
      width: rem(70px);
      height: rem(70px);
      position: absolute;
      top: rem(5px);
      left: rem(5px);
      opacity: 1;
      z-index: 1;
      border-radius: 50%;
      img{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .ba_con{
       position: absolute;
       left: rem(90px);
       width: rem(207px);
       height: 100%;
       .title{
          margin-top:rem(11px);
          height: rem(26px);
          line-height: rem(26px);
          font-size: rem(26px);
          font-weight: bold;
          color: #FFFFFF;
          max-height: 100%;
          text-overflow :ellipsis; 
          white-space :nowrap; 
          overflow : hidden; 
       }
       .num{
          margin-top:rem(12px);
          height: rem(22px);
          line-height: rem(22px);
          font-size: rem(22px);
          font-weight: 400;
          color: #FFFFFF;
          text-overflow :ellipsis; 
          white-space :nowrap; 
          overflow : hidden; 
       }
    }
  }
  .header_icon{
    margin-left: auto;
    display: flex;
    .icon{
      width: rem(80px);
      height: rem(80px);
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .icon:nth-of-type(1){
      margin-right: rem(16px);
    }
  }
}
.footersa{
  width: 100%;
  height: rem(80px);
  line-height: rem(80px);
  padding: 0 rem(32px);
  position: absolute;
  bottom: rem(16px);
  display: flex;
  .tooterx{
    width: rem(494px);
    height: rem(80px);
    overflow: hidden;
    position: relative;
    .ba{
      position: absolute;
      width: 100%;
      height: 100%;
      background: #000000;
      opacity: 0.4;
      border-radius: rem(40px);
    }
    input{
      outline: none;
      width: 100%;
      height: rem(70px);
      margin-top: rem(5px);
      padding: 0 rem(40px);
      border: 0;
      position: absolute;
      background: none;
      z-index: 777;
      color: #fff;
      font-size: rem(28px);
    }
    input::-webkit-input-placeholder {
      color: #fff;
      font-size: rem(28px);
    }
  }
  .footerss_c{
    margin-left: auto;
    width: rem(80px);
    height: rem(80px);
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
.main-listCon{
  width: rem(516px);
  height: rem(388px);
  overflow-y: scroll;
  position: absolute;
  bottom:rem(119px);
  left:rem(32px);
  // background: #000;
  .item{
    width: rem(516px);
    margin-top:rem(6px);
    padding:rem(16px) rem(32px) rem(16px) rem(16px);
    position: relative;
    background: rgba(0,0,0,0.25);
    border-radius: rem(27px);
    .itemCon{
      font-size: rem(26px);
      line-height: rem(32px);
      font-weight: bold;
      color: #FFFFFF;
      span{
        color: #E8C396;
      }
    }
  }
}
.main-title{
  width:rem(306px);
  height:rem(48px);
  line-height:rem(48px);
  text-align: center;
  background: linear-gradient(180deg, #72EFA8 0%, #04D860 100%);
  opacity: 1;
  border-radius: rem(185px);
  position: absolute;
  bottom: rem(513px);
  left: rem(32px);
  font-size: rem(24px);
  font-weight: bold;
  color: #FFFFFF;
  letter-spacing: rem(1px);
}
.consl{
  width: 100%;
  height: rem(98px);
  line-height: rem(98px);
  background: #fff;
  display: flex;
  position: fixed;
  bottom: 0;
  background: #fff;
  padding: 0 rem(32px);
  z-index: 1;
  input{
    display: block;
    width: rem(586px);
    height: rem(59px);
    border: 0;
    outline: none;
    margin-top:rem(21px);
    color: #333;
    font-size: rem(28px);
  }
  input::-webkit-input-placeholder {
    color: #999;
    font-size: rem(28px);
  }
  span{
    display: block;
    width: rem(84px);
    height: rem(56px);
    line-height: rem(56px);
    text-align: center;
    background: #517AFF;
    border-radius: rem(28px);
    font-size: rem(26px);
    color: #FFFFFF;
    margin-left: auto;
    margin-top: rem(22px);
  }
}

.video-js{
  position: absolute !important;
  width: 100%;
  height: 100%;
  object-fit: fill;
  background: none;
}
.video-js .vjs-tech {
  object-fit: fill;
}

.xgplayer{
  position: absolute;
  width: 100% !important;
  height: 100% !important;
  video{
    object-fit: fill;
  }
}
</style>