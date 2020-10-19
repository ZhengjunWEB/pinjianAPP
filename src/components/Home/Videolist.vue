<template>
    <div class="Selection clearfix">
        <div class="Selection-header">
          <router-link class="to_a iconfont iconzuo" to="javascript:history.go(-1)" tag="div"></router-link>
          <span>视频直播列表</span>
          <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="Selection-main">
           <!-- <img src="static/images/20200411/ddddddd.png"> -->
           <div class="mainConList_viedeo">
              <div class="mainItems clearfix">
                <div class="item" v-for="item in livelist" :key="item.id">
                  <div class="mu_img" @click="selectItem(item)"><img v-lazy="item.thumb"></div>
                  <p>{{item.name}}</p>
                </div>
              </div>
          </div>
        </div>
    </div>

</template>

<script>
import store from "@/store/store.js";
export default {
  name: 'videolist',
  store,
  // 计算属性
  computed: {
      store:function(){
        return this.$store.state;
      }
  },
  data () {
    return {
      livelist:[],
      status:'',   // 状态
      roomid:'',
      live_address:'',  // 地址
      thumb:'',  // 地址
      lturl:''   // 聊天室地址
    }
  },
  mounted() {
    var $this = this;
    // 首页底部分类

    $this.$post($this.$api.livelist, {}).then(data => {
        $this.livelist = data.data;
    });
  },
  methods: {
    selectItem(item) {
      var $this = this;
      $this.$post($this.$api.livedetails, {id:item.id}).then(data => {
          $this.status =data.data[0].status;
          $this.live_address =data.data[0].live_address;
          $this.roomid =data.data[0].roomid;

          $this.thumb =data.data[0].thumb;
          var href  = window.location.href;
          var str_di = href.split("home/videolist")[0];
          $this.$store.commit('Change_live_address',$this.live_address)
          $this.$store.commit('Change_live_id',$this.roomid)
          if($this.status == 1){
              $this.$post($this.$api.get_area_liveroom, {
                  token:localStorage.getItem('token'),
                  url:str_di,
                  roomid:item.roomid
                }).then(data => {
                  $this.lturl = data.data;
                  this.$router.replace({
                    path: `/home/video/${item.id}`
                  });
                  // window.android.playLive($this.live_address,$this.thumb,$this.lturl)
              });
          }else if($this.status == 2){
            alert('直播故障');
          }else if($this.status == 3){
            alert('直播结束');
          }
      });
    }
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';
@import '../../assets/sass/IndexCommon.scss';

.Selection{
  width: 100%;
  .Selection-header{
      width: 100%;
      height:rem(88px);
      line-height:rem(88px);
      border-bottom:rem(1px) solid #ccc;
      display: flex;
      position: fixed;
      z-index: 9999;
      background: #fff;
      padding-top:rem(55px);
      box-sizing: content-box;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      .to_a{
          width: 20%;
          display: block;
          font-size:rem(40px);
          color: rgb(15,15,15);
          font-weight: bold;
          margin-left:rem(20px);
      }
      span {
          display: block;
          font-size:rem(30px);
          color: #333;
          font-weight: bold;
          text-align: center;
          flex: 1;
      }
      i {
          width: 25%;
          font-size:rem(45px);
          display: block;
          text-align: right;
          font-weight: bold;
          margin-right:rem(30px);
      }
  }
  .Selection-main{
    width: 100%;
    padding-top:rem(145px);
    .mainConList_viedeo{
       width: 100%;
        padding:0 rem(30px);
        box-sizing: border-box;
        margin-bottom:rem(30px);
        .mainItems{
          .item{
            width:rem(323px);
            overflow: hidden;
            background: #fff;
            float:left;
            border:rem(1px) solid #666;
            margin-top:rem(35px);
            .mu_img{
              width:100%;
              height:rem(351px);
              img{
                display: block;
                width: 100%;
                height:100%;
              }
            }
            p{
              height: rem(50px);
              line-height: rem(50px);
              font-size: rem(28px);
              padding: 0 rem(30px);
            }
          }
          .item:nth-of-type(even){
            float: right;
          }
        }
    }
    
  }
}

</style>