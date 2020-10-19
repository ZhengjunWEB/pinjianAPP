<template>
    <div>
        <input type="text" v-model="name" placeholder="请输入标题名字">


        <div class="dv_btn1" @click="login()">创建直播测试</div>
    </div>

</template>

<script>
export default {
  name: 'selection',
  data () {
    return {
      name:'',
      createlive:[],

      streamurl:'',
      roomid:'',
      streamurl_img:'',

    }
  },
  mounted() {
   
  },
  methods: {
    login () {
        let $this = this;
        if(localStorage.getItem('token') == '' ||  localStorage.getItem('token') == null){
          alert('先登录账号');
          return false;
        }else{
          $this.$post($this.$api.createlive, {name:$this.name,token:localStorage.getItem('token')}).then(data => {
              $this.createlive = data.data;
              $this.streamurl =  data.data.streamurl;
              $this.streamurl_img =  data.data.image;
              $this.roomid =  data.data.roomid;
              var href  = window.location.href;
              var str_di = href.split("home/createlive")[0];
              // console.log(data.code);
              if(data.code == 600){
                  alert(data.msg)
              }else if(data.code == 604){
                  alert(data.msg)
              }else{
                $this.$post($this.$api.get_area_liveroom, {
                  token:localStorage.getItem('token'),
                  url:str_di,
                  roomid:$this.roomid
                  }).then(data => {
                    window.android.recordStreaming($this.streamurl,data.data)
                });
              }
          });
        }
        
    }
  }

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';
@import '../../assets/sass/IndexCommon.scss';

input{
    display: block;
    height: rem(150px);
    width: 70%;
    border: 0;
    outline: none;
    font-size: rem(30px);
    text-indent: rem(15px);
    margin:0 auto;
    border:1px solid #ccc;
}
.dv_btn1{
    width: 90%;
    height: 1.6rem;
    line-height: 1.6rem;
    background: #e50e18;
    margin: 0 auto;
    margin-top: .66667rem;
    text-align: center;
    font-size: .46667rem;
    color: #fff;
    border-radius: .66667rem;
}

</style>