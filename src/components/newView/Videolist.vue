<template>
    <div class="Selection clearfix">
        <div class="App-header">
          <div class="to_a"></div>
          <span>直播</span>
          <div class="to_b" style="visibility: hidden;"></div>
        </div>
        <div class="Selection-main commons_mainsContoApp">
           <!-- <img src="static/images/20200411/ddddddd.png"> -->
           <div class="mainConList_viedeo">
              <div class="mainItems clearfix">
                  <div class="item"  v-for="(a,b) in livelist" :key="b" @click="selectItem(a)">
                      <img class="imgs" :src="a.thumb" alt="">
                      <!-- <img class="imgs" src="../../assets/images/Index_Img/pexels-myicahel-tamburini-1152994.png"" alt=""> -->
                      <div class="style1">
                          <div class="s"></div>
                          <div class="c1" v-if="a.status == 1">直播中</div>
                          <div class="c1" v-else-if="a.status == 3">以下播</div>
                          <div class="c2">{{a.view_num}}观看</div>
                      </div>
                      <div class="foot-oc">{{a.name}}</div>
                      <div class="foot-con">
                          <img :src="a.avatar" alt="">
                          <span>{{a.nickname}}</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    <bottom_nav />

    </div>

</template>

<script>
import store from "@/store/store.js";
import bottom_nav from '@/components/Common/new_bottom'
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
        console.log($this.livelist);
    });
  },
    components: {
    bottom_nav
  },
  methods: {
    selectItem(item) {
      console.log(item);
      var $this = this;
      $this.$router.push({
        path: `/live/video/${item.id}/${item.roomid}`
      });
      // $this.$post($this.$api.livedetails, {id:item.id}).then(data => {
      //     $this.status =data.data[0].status;
      //     $this.live_address =data.data[0].live_address;
      //     $this.roomid =data.data[0].roomid;

      //     $this.thumb =data.data[0].thumb;
      //     var href  = window.location.href;
      //     var str_di = href.split("home/videolist")[0];
      //     $this.$store.commit('Change_live_address',$this.live_address)
      //     $this.$store.commit('Change_live_id',$this.roomid)


      //     if($this.status == 1){
      //         $this.$post($this.$api.get_area_liveroom, {
      //             token:localStorage.getItem('token'),
      //             url:str_di,
      //             roomid:item.roomid
      //           }).then(data => {
      //             $this.lturl = data.data;
      //             // this.$router.replace({
      //             //   path: `/home/video/${item.id}`
      //             // });
      //             window.android.playLive($this.live_address,$this.thumb,$this.lturl)
      //         });
      //     }else if($this.status == 2){
      //       alert('直播故障');
      //     }else if($this.status == 3){
      //       alert('直播结束');
      //     }
      // });
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
  .Selection-main{
    width: 100%;
    min-height: 100%;
    padding-top:rem(88px);
    position: absolute;
    background: #f8f8f8;
    max-width: rem(750px);
    left: 50%;
    transform: translate(-50%, 0);
    .mainConList_viedeo{
      width: 100%;
      padding:0 rem(28px) rem(150px) rem(32px);
      box-sizing: border-box;
      .mainItems{
        .item{
          width: rem(337px);
          height: rem(600px);    
          border-radius: rem(5px);
          position: relative;
          margin-top:rem(16px);
          .imgs{
            display: block;
            width: 100%;
            height: 100%;
          }
          .foot-con{
            position: absolute;
            width: 100%;
            height: rem(40px);
            line-height: rem(40px);
            padding: 0 rem(20px);
            bottom: rem(24px);
            display: flex;
            img{
              display: block;
              width: rem(40px);
              height: rem(40px);
              border-radius: 50%;
            }
            span{
              font-size: rem(24px);
              color: #FFFFFF;
              margin-left: rem(16px);
            }
          }
          .foot-oc{
            position: absolute;
            width: 100%;
            height: rem(30px);
            line-height: rem(30px);
            padding: 0 rem(20px);
            font-size: rem(24px);
            color: #ffffff;
            bottom: rem(80px);
            overflow:hidden; 
            white-space:nowrap;
            text-overflow:ellipsis;
          }
          .style1{
            position: absolute;
            width: rem(224px);
            height: rem(39px);
            left: 0;
            top: 0;
            display: flex;
            .s{
              position: absolute;
              width: 100%;
              height: 100%;
              background: #999999;
              opacity: 0.58;
            border-radius: rem(10px) 0px rem(10px) 0px;
            }
            .c1{
              left: 0;
              position: absolute;
              width: rem(117px);
              height: rem(39px);
              line-height: rem(39px);
              text-align: center;
              background: linear-gradient(180deg, #FF0300 0%, #FF4A13 100%);
              opacity: 1;
              border-radius: rem(10px) 0px rem(10px) 0px;
              font-size: rem(20px);
              color: #fff;
              letter-spacing:rem(1px);
            }
            .c2{
              height: rem(39px);
              line-height: rem(39px);
              width: rem(107px);
              text-align: center;
              position: absolute;
              right: 0;
              color: #fff;
              font-size: rem(20px);
              letter-spacing:rem(1px);
            }
          }
        }
        .item:nth-of-type(odd){
          float: left;
        }
        .item:nth-of-type(even){
          float: right;
        }
      }
    }
    
  }
}

</style>