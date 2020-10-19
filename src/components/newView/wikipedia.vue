<template>
    <div class="wikipedia">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="back()"></div>
            <div id="box"></div>
        </div>

        <div class="wikipedia_mian commons_mainsContoApp">
            <div class="opent">
                <div class="title">{{wikipedia.title}}</div>

                <div class="opentCOn">
                    <img :src="wikipedia.thumb" alt="">
                    <span>{{wikipedia.author}}</span>
                    <b>{{wikipedia.create_time}}</b>
                    <p>阅读<font>{{num}}</font></p>
                </div>
            </div>
            <div class="css rich" v-html="wikipedia.con" ></div>
        </div>

        <div class="wikipedia_bottom">
            <div class="flexto s1">
                <img :src="srcPath + 'fenxiang.png'" alt="">
                <span>分享</span>
            </div>
            <div class="flexto s2" @click="dianzna()" v-if="ispraise == 0">
               <img :src="srcPath + 'dianzan.png'" alt="">
               <span>{{praise_num}}</span>
            </div>
            <div class="flexto s2" @click="dianzna()" v-else-if="ispraise == 1">
               <img :src="srcPath + 'dianzan.png'" alt="">
               <span>{{praise_num}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'wikipedia',
  data () {
    return {
      wikipedia:[],
      num:'',
      praise_num:'',
      ispraise:'',
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
    }
  },

  mounted() {
    var $this = this;
    var r_id = $this.$route.params.id;
    $this.$post($this.$api.reading_add, {maxid:r_id,type:'wikipedia',token:localStorage.getItem('token')}).then(data => {
      $this.num = data.data
    });
    $this.$post($this.$api.getdetailwikipedia, {id:r_id,token:localStorage.getItem('token')}).then(data => {
        $this.wikipedia = data.data[0];
        $this.praise_num = data.data[0].praise_num;
        $this.ispraise = data.data[0].ispraise;
    });


    
    
    

  },
  methods: {
    back(){
      this.$router.back();
    },
    dianzna(){
      var $this = this;
      var r_id = $this.$route.params.id;
      if(localStorage.getItem('token') == null){
        this.$router.push({
          path: `/login`
        });
      }else{
        $this.$post($this.$api.praise_add, {maxid:r_id,token:localStorage.getItem('token'),type:'wikipedia'}).then(data => {
          $this.praise_num = data.data.count;
          $this.ispraise = data.data.state;
        });
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../assets/sass/base.scss';
.wikipedia{
  position: absolute;
  width:100%;
  min-height: 100%;
  // background: #f8f8f8;
  top: 0;
  left: 0;
}
.wikipedia_mian{
  max-width: rem(750px);
  margin: 0 auto;
  padding-top: rem(88px);
}
.App-header .to_a{
  width: rem(88px);
  height: rem(88px);
}
.opent{
  padding: 0 rem(32px);
  padding-top: rem(30px);
  .title{
    font-size: rem(38px);
    line-height: rem(45px);
    font-weight: bold;
    color: #000;
  }
  .opentCOn{
    margin-top:rem(50px);
    height: rem(40px);
    line-height: rem(40px);
    display: flex;
    img{
      display: block;
      width: rem(40px);
      height: rem(40px);
      border-radius: 50%;
    }
    span{
      font-size: rem(30px);
      margin-left:rem(20px);
      color: #666;
    }
    b{
      font-size: rem(30px);
      margin-left:rem(20px);
      color: #666;
    }
    p{
      margin-left: auto;
      font-size: rem(30px);
      color: #666;
      font{
        font-size: rem(30px);
        margin-left:rem(5px);
        color: #666;
      }
    }
  }
}
.css{
  // max-width: rem(750px);
  // margin: 0 auto;
  padding: rem(30px) rem(32px) rem(132px);
  p{
    font-size: rem(30px);
    line-height: rem(46px);  
    color: #333;
  }
  img{
    display: block;
    width: 100%;
  }
  h3{
    font-size: rem(30px);
    color: #333;
  }
  h2{
    font-size: rem(32px);
    color: #333;
  }
  h1{
    font-size: rem(34px);
    color: #333;
  }
}
.App-header #box{
    display: block;
    font-size: .48rem;
    color: #000;
    font-weight: bold;
    text-align: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    position: absolute;
    left: rem(20px);
    transform: translate(rem(88px), 0);
}

.wikipedia_bottom{
  width: 100%;
  height: rem(102px);
  line-height: rem(102px);
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  border-top: rem(2px) solid rgba(242, 242, 242, 1);
  padding: 0 rem(32px);
  display: flex;
  .flexto {
    display: flex;
  }
  .s1{
    img{
      display: block;
      width: rem(42px);
      height: rem(42px);
      margin-top:rem(30px);
      margin-right: rem(15px);
    }
    span{
      color: #666;
      font-size: rem(24px);
    }
  }
  .s2{
    margin-left: auto;
    img{
      display: block;
      width: rem(42px);
      height: rem(42px);
      margin-top:rem(30px);
      margin-right: rem(10px);
    }
    span{
      color: #666;
      font-size: rem(26px);
    }
  }
}
</style>