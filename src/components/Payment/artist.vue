<template>
    <div class="Mud">
        <div class="Mud-header">
            <div class="to_a iconfont iconzuo" @click="back()"></div>
            <span>{{title}}</span>
            <i class="iconfont iconcaidan" style="visibility: hidden;"></i>
        </div>
        <div class="Mud_fix p-fixed">
            <ly-tab
              v-model="selectedId"
              :items="items"
              :options="options"
              @change="handleChange">
            </ly-tab>
        </div>
        

        <common-yr :Index="selectedId" @transfer_index="getUsId"></common-yr>
       
    </div>
</template>

<script>
import commonYr from "@/components/Common/Common_yr";
export default {
  name: 'Mud',
  components: {
    commonYr,
  },
  data () {
    return {
        title:'',
        selectedId: 0,
        items: [],
        options: {
          activeColor: '#000'
        },
    }
  },
  mounted(){
    var $this = this;
  // console.log("a:"+typeof(this.items))

    $this.$post($this.$api.HeaderCon_Nav, {}).then(data => {
        // $this.HeaderCon_Nav = data.data;
        // $this.$store.commit('changeuser_Indexid',data.data[0].id)
        // $this.activeName = data.data[0].id;
        console.log(data);
        if(data.code == 200){
         // 首页底部分类
            $this.items = data.data;
            $this.title = data.data[0].name;
        }
    });
  },
  methods: {
      back(){
        this.$router.go(-1);//返回上一层
      },
      
     handleChange (item, index) {
      this.title = item.name;
      this.selectedId = index;
    },
    getUsId(val){
      this.selectedId = val;
    }
  }
}
</script>

<style lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.Mud{
  .Mud-header {
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
  .Mud_fix{
      top:rem(115px);
      width:100%;
      height:rem(75px);
      line-height:rem(75px);
      padding:0 rem(20px);
      background:#dadada;
      overflow-x: scroll;
      white-space: nowrap;
      .ly-tabbar {
        background:#dadada;
        -webkit-box-shadow: 0 0px 0px 0px #eee;
        box-shadow: 0 0px 0px 0px #eee;
      }
      .ly-tab-item:not(:first-child) {
          margin-left:rem(20px);
      }
      .ly-tab-active-bar{
        bottom:rem(10px);
      }
      .ly-tab-list{
        padding:0;
        .ly-tab-item{
          font-size:rem(28px);
          color:#a5a5a5;
        }
      }
      .Mud_fix_item{
          position:relative;
          font-size:rem(28px);
          color:#a5a5a5;
          margin:0 rem(15px);
      }
      .active{
          color:#000;
      }
      .active:after{
          position:absolute;
          content:'';
          background:#000;
          width:60%;
          height:rem(3px);
          bottom:rem(10px);
          left:50%;
           transform: translate(-50%,0);  
      }
  }
  .Mud-main{
      width:100%;
    //   padding-top:rem(115px);
     
  }
}
.crear{
    display:inline-block;
}

</style>
