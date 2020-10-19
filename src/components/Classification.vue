<template>
    <div class="wrpper">
      <!-- <loading v-if="loading"></loading> -->
      <div class="App-header">
            <div class="to_a"></div>
            <span @click="go()">作品分类</span> 
            <div class="to_b" style="visibility: hidden;"></div>
      </div>
      <div class="hide_div"></div>
      <div class="main clearfix">
        <div class="my-ul">
            <div class="item" v-for="(v,k) in Cl_lcon" :key="k" @click="Classifi(v,k)" :class="activeClass ==k?'active':''"><span>{{v.name}}</span></div>
        </div>
        <div class="my-con">
            <h1 secondtype="1"><span>{{title}}</span></h1>
            <ul class="mus-con clearfix">
              <div class="item" v-for="item in ClassifiCon" :key="item.id" @click="selectItemL(item)">
                <!-- <p><img v-lazy="item.thumb"></p> -->
                <p><img :src="item.thumb" alt=""></p>
                <span>{{item.name}}</span>
              </div>
            </ul>
        </div>
      </div>
      <div v-if="is_txt" class="ts">网络异常</div>

    <!-- 底部组件 -->
    <nav-bottom></nav-bottom> 
     
    </div>
    

</template>

<script>
// 引入底部组件
import NavBottom from "@/components/Common/NavBottom";
import Loading from "@/components/Common/Loading_t";
export default {
  name: 'Classification',
  data () {
    return {
      Cl_lcon:[],
      ClassifiCon:[],
      Cl_len:[],

      checkbox:'',
      title:'',
      activeClass: 0,// 0为默认选择第一个，-1为不选择

      loading:true,
      is_txt:false,
      is_time:'',
      iskong:''

    }
  },
  // 加载组件
  components: {
    // 底部组件
    NavBottom,
    Loading
  },
  mounted() {
    var $this = this;
    $this.wnagluo();


    
    // 测试返回 传类型
 
    
  },
  
  methods: {
      // 网络状况
      wnagluo(){
        if(navigator.onLine){
            var $this = this;
            $this.Cl_lcon = JSON.parse(localStorage.getItem("Cl_lcon"));
            $this.Cl_len = JSON.parse(localStorage.getItem("Cl_len"));
            if(this.Cl_lcon == null || this.Cl_len == null){
                $this.$post($this.$api.get_class_list, {}).then(data => {
                    $this.Cl_lcon = data.data.data.list;
                    $this.Cl_len = data.data.data.class;
                    $this.ClassifiCon = data.data.data.class[$this.activeClass].children;
                    $this.is_time = data.data.time;
                    $this.checkbox = data.data.data.list[0].id;
                    $this.title = data.data.data.list[0].name;
                    localStorage.setItem('Cl_lcon',JSON.stringify($this.Cl_lcon));
                    localStorage.setItem('Cl_len',JSON.stringify($this.Cl_len));
                    localStorage.setItem('Cl_time',$this.is_time);
                })
            }else{
                $this.checkbox = $this.Cl_lcon[0].id;
                $this.title = $this.Cl_lcon[0].name;
                $this.ClassifiCon = $this.Cl_len[0].children;
                $this.$post($this.$api.get_class_list, {}).then(data => {
                  if(data.data.time != localStorage.getItem('Cl_time')){
                    localStorage.setItem('Cl_lcon',JSON.stringify(data.data.data.list));
                    localStorage.setItem('Cl_len',JSON.stringify(data.data.data.class));
                    localStorage.setItem('Cl_time',data.data.time);
                  }else{
                    return;
                  }
                })
            }
        }else{
          this.Cl_lcon = JSON.parse(localStorage.getItem("Cl_lcon"));
          this.Cl_len = JSON.parse(localStorage.getItem("Cl_len"));
          if(this.Cl_lcon == null || this.ClassifiCon == null){
              this.is_txt = true; 
          }else{
              this.checkbox = this.Cl_lcon[0].id;
              this.title = this.Cl_lcon[0].name;
              this.ClassifiCon = $this.Cl_len[0].children;
          }
          
        }
      },

      Classifi(v,k){
        var $this = this;
        var ClassifiIdID = v.id
        $this.activeClass = k;
        $this.ClassifiCon = $this.Cl_len[$this.activeClass].children;
        $this.title = $this.Cl_len[$this.activeClass].name;
        // $this.title = v.name;
        // console.log($this.ClassifiCon);
        // $this.$post($this.$api.Cl_lcon, {id:ClassifiIdID}).then(data => {
        //   $this.ClassifiCon = data.data.data;
        // });
      },
      // 跳列表
      selectItemL(item){
          this.$router.push({
              path: `/home/listdetails/${item.id}`
          })
      },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* 引入 基础 scss */
@import '../assets/sass/base.scss';
.wrpper{
  width:100%;
  height:auto;
  .hide_div{
    width: 100%;
    height: rem(40px);
    position: fixed;
    left: 0;
    top:rem(88px);
    background: #fff;
    z-index: 99999;
  }
  .main{
    margin: 0 auto;
    padding-top:rem(128px);
    background: #fff; 
    .my-ul{
        display: block;
        width:rem(193px);
        height: 100%;
        position: fixed;
        margin-bottom: rem(120px);
        overflow-y: scroll;
        border-right: rem(1px) solid rgba(225,225,225,1);
        background: #ffffff;
        .item{
            display: block;
            font-size:rem(28px);
            text-align: left;
            font-weight: bold;
            position: relative;
            margin-top:rem(40px);
            height:rem(40px);
            line-height:rem(40px);
            font-family:font_pc;
            font-weight:400;
            color:rgba(102,102,102,1);
            padding-left: rem(32px);
            position: relative;
        }
        .item.active{
          font-family:font_b;
          font-weight:bold;
          color:rgba(203,72,72,1);
          padding-left: rem(52px);
        }
      .item.active span:before {
          position: absolute;
          content: '';
          height:rem(33px);
          width: rem(8px);
          background:rgba(203,72,72,1);
          top: rem(1px);
          left:rem(32px);
      }
      .item:nth-of-type(1){
        margin-top:0;
      }
    }
    .my-con{
        width:rem(557px);
        height:100%;
        position: fixed;
        margin-left:rem(193px);
        overflow-y: scroll;
        background: #fff;
        h1 {
            width: 100%;
             padding:0 rem(58px) 0 rem(47px);
             text-align:left;
             margin-top:rem(8px);
            span{
              font-size:rem(28px);
              font-family:font_hz;
              font-weight:400;
              color:rgba(203,72,72,1);
            }
        }
        .mus-con {
          padding:0 rem(40px) rem(240px) rem(30px);
          .item{
            width: rem(155px);
            float: left;
            margin-top:rem(25px);
            margin-right: rem(11px);
            p{
              width: 100%;
              height:rem(120px);
              img{
              display:block;
                width:rem(120px);
                height:100%;
                margin:0 auto;
              }
            }
            span {
                display: block;
                text-align: center;
                margin-top:rem(5px);
                font-size:rem(24px);
                line-height:rem(35px);
                font-family:font_pc;
                font-weight:400;
                color:rgba(51,51,51,1);
            }
          }
          .item:nth-of-type(3n+3) {
            margin-right: 0;
          }
          .item:nth-of-type(1),.item:nth-of-type(2),.item:nth-of-type(3){
               margin-top:rem(14px);
          }
        }
    }

  }
}
.ts{
  text-align:center;
  font-size:rem(30px);
  margin-top:5%;
}
</style>