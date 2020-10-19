<template>
  <div class="personal">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span @click="upis_img()">个人资料</span> 
            <div class="to_b" style="visibility: hidden;"></div>
        </div>
        <div class="personal_main commons_mainsContoApp">
           <div class="jiaz">
                <div class="spersonal_item ad">
                  <span>个人头像</span>
                  <div class="spersonal_item_right"><img @click="up_img()" :src="user_img"></div>
                </div>
                <div class="spersonal_item" @click="personalcon()">
                  <span>昵称</span>
                  <strong>{{user_name}}</strong>
                  <i class="iconfont iconyoujiantou"></i>
                </div>
                <div class="spersonal_item">
                  <span>生日</span>
                  <strong>2019-10-01</strong>
                  <i class="iconfont iconyoujiantou"></i>
                </div>
                <div class="spersonal_item" @click="changeSex()">
                  <span>性别</span>
                  <strong v-if="gender == 1">男</strong>
                  <strong v-else-if="gender == 0">女</strong>
                  <strong v-else-if="gender == 2">不详</strong>
                  <i class="iconfont iconyoujiantou"></i>
                </div>
                <div class="spersonal_item">
                  <span>绑定手机</span>
                  <strong>{{phone}}</strong>
                  <i class="iconfont iconyoujiantou"></i>
                </div>
            </div>
        </div>


      <div class="touming" v-if="tan" @click="bacoks()"></div>

      <div class="tomun" v-if="tansex">
          <p v-for="(a,b) in sexlits" :key="b" :class="gender == b?'active':''" @click="sexchange(a)">{{a.sex}}</p>
      </div>


      <div class="tomun_riqi hide">
          <div class="title_list">
              <p class="p1">取消</p>
              <p class="p2">请选择生日日期</p>
              <p class="p3">保存</p>
          </div>
          <div class="list_con">
              <div class="list_con_one">
                  <div class="items" v-for="(a,b) in year" :key="b" @click="yeascon(a,b)"  :class="yearCon ==b?'active':''">{{a.con}}年</div>
              </div>
              
              <div class="list_con_two">
                  <div class="items"  v-for="(a,b) in month" :key="b">{{a.monthitem}}月</div>
              </div>
              <div class="list_con_san">
                  <div class="items" v-for="(a,b) in day" :key="b">{{a.dayitem}}日</div>
              </div>
          </div>
      </div>
        
  </div>
</template>

<script>
export default {
  name: 'coll-sc',
  data () {
    return {
        user_img:'',        // 头像
        user_name:'',       // 名字
        phone:'',           // 名字

        gender:1,           

        u_Img:'http://console.pinjianapp.com/api/user/avatar',
        tan:false,
        tansex:false,
        /// 年
        year:[
          {con:'1080'},
          {con:'1081'},
          {con:'1082'},
          {con:'1083'},
          {con:'1084'},
          {con:'1085'},
          {con:'1086'},
          {con:'1087'},
          {con:'1088'},
          {con:'1089'},
          {con:'1090'},
        ],
        yearCon:0,
        /// 月
        month:[
          {monthitem:'01'},
          {monthitem:'02'},
          {monthitem:'03'},
          {monthitem:'04'},
          {monthitem:'05'},
          {monthitem:'06'},
          {monthitem:'07'},
          {monthitem:'08'},
          {monthitem:'09'},
          {monthitem:'10'},
          {monthitem:'11'},
          {monthitem:'12'},
        ],
        /// 日
        day:[
          {dayitem:'01'},
          {dayitem:'02'},
          {dayitem:'03'},
          {dayitem:'04'},
          {dayitem:'05'},
          {dayitem:'06'},
          {dayitem:'07'},
          {dayitem:'08'},
          {dayitem:'09'},
          {dayitem:'10'},
          {dayitem:'11'},
          {dayitem:'11'},
          {dayitem:'12'},
          {dayitem:'13'},
          {dayitem:'14'},
          {dayitem:'15'},
          {dayitem:'16'},
          {dayitem:'17'},
          {dayitem:'18'},
          {dayitem:'19'},
          {dayitem:'20'},
          {dayitem:'21'},
          {dayitem:'22'},
          {dayitem:'23'},
          {dayitem:'24'},
          {dayitem:'25'},
          {dayitem:'27'},
          {dayitem:'28'},
          {dayitem:'29'},
          {dayitem:'30'},
          {dayitem:'31'},
        ],
        sexlits:[
          {id:0,sex:'女'},
          {id:1,sex:'男'},
          {id:2,sex:'不详'},
        ],
    } 
  },
  mounted(){
    var $this = this;
  

    var user_info = JSON.parse(localStorage.getItem('user_info'));
    console.log(user_info);
    $this.user_img = user_info.avatar;
    $this.user_name = user_info.nickname;
    $this.gender = user_info.gender
    var tel = user_info.phone;
    tel = "" + tel;
    $this.phone = tel.substr(0,3) + "****" + tel.substr(7);



    // 返回参数
    window.upis_img = $this.upis_img;
  },
    methods: {
        adviser(){
            this.$router.go(-1);//返回上一层
        },
        personalcon(){
            this.$router.push({
                path: `/mi/personalcon`
            })
        },
        // 上传图片
        up_img(){
            var $this = this;
            var token = localStorage.getItem('token');
            window.android.selectImage(token,$this.u_Img,1);
        },

        // 接受返回值
        upis_img(val){
            var $this = this;
            var userCon = JSON.parse(val);
            if(userCon.code == 200){
                localStorage.setItem('user_info',JSON.stringify(userCon.data));
                var user_info = JSON.parse(localStorage.getItem('user_info'));
                $this.user_img  = userCon.data.avatar;
            }else{
              alert('上传失败');
              return;
            }
        },

        // 改变性别
        changeSex(){
          this.tan = true
          this.tansex = true
        },
        // 改变性别选中
        sexchange(val){
          var $this = this;
          $this.gender = val.id;
          $this.$post($this.$api.edit_user_info, {gender:val.id}).then(data => {
             localStorage.setItem('user_info',JSON.stringify(data.data));
          })
          $this.tan = false;
          $this.tansex = false
        },

        // 点击删除弹窗
        bacoks(){
          this.tan = false;
          this.tansex = false
        },
        yeascon(val,index){
          this.yearCon = index;
          
        },

    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
@import '../../assets/font/font.css';
.personal{
    position: absolute;
    width:100%;
    height: 100%;
    background: #f8f8f8;
    top: 0;
    left: 0;
   .personal_main{
     width: 100%;
     padding-top: rem(88px);
     .jiaz{
        background: #ffffff;
        margin-top:rem(20px);
        border-radius:rem(20px);
        padding:0 rem(32px);
        .spersonal_item{
              width:100%;
              height:rem(91px);
              line-height:rem(91px);
              border-bottom:rem(1px) solid #eee;
              display:flex;
              span{
                  font-size:rem(28px);
                  font-family:font_pc;
                  font-weight:400;
                  color:#666;
              }
               strong{
                  flex:1;
                  text-align:right;
                  padding:0 rem(20px);
                  color:#333;
                  font-size:rem(28px);
                  font-family:font_pc;
                  font-weight:400;
              }
              i{
                  font-size:rem(30px);
                  color:#333;
                  flex:1;
                  text-align:right;
                  line-height:rem(89px);
              }
              strong~i{
                  flex:0;
              }
        }
        .spersonal_item.ad{
          height: auto;
          span{
            line-height: rem(190px);
          }
          .spersonal_item_right{
            flex:1;
            text-align:right;
            font-family:font_pc;
            font-weight:400;
            img{
              display: block;
              width: rem(142px);
              height:rem(142px);
              border-radius: 50%;
              float: right;
              margin:rem(24px) 0;
            }
          }
        }
        .spersonal_item:nth-last-of-type(1){
          border-bottom:0;
        }
     }
   }
}
.touming{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 9999;
}
.tomun{
  width: 100%;
  height: rem(200px);
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: rem(50px) rem(32px);
  overflow-y: scroll;
  z-index: 9999999;
  p{
    height: rem(60px);
    line-height: rem(60px);
    font-size: rem(30px);
    font-family: font_pc;
    font-weight: 400;
    color: #666;
  }
  p.active{
    height: rem(80px);
    line-height: rem(80px);
    font-size: rem(32px);
    font-family: font_b;
    color: #000;
  }
}
.tomun_riqi{
  width: 100%;
  height: rem(400px);
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  .title_list{
    padding: 0 rem(32px);
    height: rem(80px);
    line-height: rem(80px);
    display: flex;
    justify-content: space-between;
    p{
      font-size: rem(30px);
      font-family: font_pc;
    }
  }
  .list_con{
    width: 100%;
    height: rem(320px);
    padding: 0 rem(32px);
    display: flex;
    justify-content: space-between;
    padding-bottom: rem(20px);
    .list_con_one{
      overflow-y: scroll;
      width: 33.3%;
      padding-bottom:rem(120px);
      .items{
        height: rem(60px);
        line-height: rem(60px);
        font-size: rem(28px);
      }
    }
    .list_con_two{
      overflow-y: scroll;
      width: 33.3%;
      text-align: center;
       padding-bottom:rem(120px);
      .items{
        height: rem(60px);
        line-height: rem(60px);
        font-size: rem(28px);
      }
    }
    .list_con_san{
      overflow-y: scroll;
      width: 33.3%;
      text-align: right;
       padding-bottom:rem(120px);
      .items{
        height: rem(60px);
        line-height: rem(60px);
        font-size: rem(28px);
      }
    }
  }
}
</style>
