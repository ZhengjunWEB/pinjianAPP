<template>
    <div class="recovery">
       
        <div class="App-header">
          <div class="to_a iconfont iconzuo" @click="tuichu()"></div>
          <span>回收详情</span>
          <div class="to_b" style="visibility: hidden;"></div>
        </div>


        <div class="recovery-main">
            <div class="con">
                <p>丰行紫砂致力于继承并发扬紫砂文化，不忍 明珠蒙尘，特此公告。</p>
                <p>我们秉承以壶交友，诚交天下紫砂藏家为宗 旨，配备专业评估团队，高价回收紫砂壶。如有 浮动应以实物用料、做工、容量为准，给你的藏 品留下一个好价格！</p> 
            </div>
            <div class="recovery-con_show">
                <div class="recovery-con_list clearfix">
                    <div class="recovery-con_item">
                        <font>姓名：</font><input type="text" v-model="name" placeholder="请输入你的姓名">
                    </div>
                    <div class="recovery-con_item"><font>性别：</font>
                    
                        <div class="mesx" @click="text(1)">
                            <img :src="is_hideso?Img_true:Img_false" alt="">
                            <span>先生</span>
                        </div>

                        <div class="mesx" @click="text(2)">
                            <img :src="is_hidese?Img_true:Img_false" alt="">
                            <span>女士</span>
                        </div>


                    <!-- <input type="text" v-model="sex">-->
                    
                    </div>


                    <div class="recovery-con_item"><font>电话：</font><input type="number" v-model="iphone" placeholder="请输入正确的电话号码"></div>
                    <div class="recovery-con_item"><font>微信：</font><input type="text" v-model="wxNum" placeholder="请填写您的微信号"></div>
                    <div class="recovery-con_item cc s p-relative">
                        <font>你的预算价位</font>
                        <!-- <input type="number" v-model="pirce"><span>(元)</span>-->
                        <span class="span">请选择</span>
                        <img src="../../assets/images/Index_Img/btn_left.png" alt="">
                    </div>
                    <div class="recovery-con_item cc dd p-relative"><font>上传凭证</font></div>
                    <div class="recovery-con_listcon clearfix">
                        <div class="items" @click="selectImage(1,1)">
                            <p>
                                 <img :src='Img1' v-if="Img1false" alt="" class="mim">
                                 <img src='../../assets/images/Index_Img/ceshi.png' v-else alt="" class="img">
                            </p>
                            <span>茶壶正面</span>
                        </div>
                        <div class="items" @click="selectImage(1,2)">
                            <p>
                                <img :src='Img2' v-if="Img2false" alt="" class="mim">
                                <img src='../../assets/images/Index_Img/ceshi.png' v-else alt="" class="img">
                            </p>
                            <span>茶壶后面</span>
                        </div>
                        <div class="items" @click="selectImage(1,3)">
                            <p>
                                <img :src='Img3' v-if="Img3false" alt="" class="mim">
                                <img src='../../assets/images/Index_Img/ceshi.png' v-else alt="" class="img">
                            </p>
                            <span>茶壶顶部</span>
                        </div>
                        <div class="items" @click="selectImage(1,4)">
                            <p>
                                <img :src='Img4' v-if="Img4false" alt="" class="mim">
                                <img src='../../assets/images/Index_Img/ceshi.png' v-else alt="" class="img">
                            </p>
                            <span>茶壶底部</span>
                        </div>
                         <div class="items" @click="selectImage(1,5)">
                            <p>
                                <img :src='Img5' v-if="Img5false" alt="" class="mim">
                                <img src='../../assets/images/Index_Img/ceshi.png' v-else alt="" class="img">
                            </p>
                            <span>茶壶侧面</span>
                        </div>
                         <div class="items" @click="selectImage(1,6)">
                            <p>
                                <img :src='Img6' v-if="Img6false" alt="" class="mim">
                                <img src='../../assets/images/Index_Img/ceshi.png' v-else alt="" class="img">
                            </p>
                            <span>茶壶侧面</span>
                        </div>
                    </div>
                </div>
            </div>
             <div class="from_Bnt" @click="submit">提交</div>
        </div>
       
    </div>
</template>

<script>
export default {
  name: 'recovery',

  data () {
    return {
      name:'',
      sex:1,
      iphone:'',
      wxNum:'',
      pirce:1000,
      Img1:'',
      Img2:'',
      Img3:'',
      Img4:'',
      Img5:'',
      Img6:'',
      
      Img1false:false,
      Img2false:false,
      Img3false:false,
      Img4false:false,
      Img5false:false,
      Img6false:false,


      
      is_hideso:true,
      is_hidese:false,
      Img_true:require('../../assets/images/cart/flase_a.png'),
      Img_false:require('../../assets/images/cart/flase_o.png'),


      fnt_Img:'http://console.pinjianapp.com/api/user/interactive',   // 返图上传
      list_con:[],
      list_base:[]
    }
  },
  mounted() {

    var $this = this;
    window.upis_img = $this.upis_img;

  },
  methods: {
    text(val){
        this.sex = val;
        if(val == 1){
            this.is_hideso = true;
            this.is_hidese = false;
        }else if(val == 2){
            this.is_hidese = true;
            this.is_hideso = false;
        }
    },
    tuichu(){
        this.$router.back()
    },
    submit(){
        if(this.name == '' && this.sex == '' && this.iphone == '' && this.wxNum == '' && this.pirce =='' && 
        this.Img1 == 'static/images/20200411/ceshi.png' &&
        this.Img2 == 'static/images/20200411/ceshi.png' &&
        this.Img3 == 'static/images/20200411/ceshi.png' &&
        this.Img4 == 'static/images/20200411/ceshi.png' 
        ){
            alert('请先输入…………');
            return false;
        }else if(this.name == ''){
            alert('名字不能为空…………');
            return false;
        }else if(this.sex == ''){
            // alert('性别不能为空…………');
            // return false;
        }else if(this.iphone == ''){
            alert('联系方式不能为空…………');
            return false;
        }else if(this.wxNum == ''){
            alert('微信号不能为空…………');
            return false;
        }else if(this.pirce == ''){
            alert('价格不能为空…………');
            return false;
        }else if(this.Img1 == 'static/images/20200411/ceshi.png'){
            alert('请先上传茶壶正面照…………');
            return false;
        }else if(this.Img2 == 'static/images/20200411/ceshi.png'){
            alert('请先上传茶壶反面照…………');
            return false;
        }else if(this.Img3 == 'static/images/20200411/ceshi.png'){
            alert('请先上传茶壶底章照…………');
            return false;
        }else if(this.Img4 == 'static/images/20200411/ceshi.png'){
            alert('请先上传茶壶盖章照…………');
            return false;
        }else{
            var $this = this;
            $this.$post($this.$api.frecycling, {
                name:$this.name,
                sex:$this.sex,
                mobile:$this.iphone,
                price:$this.pirce,
                wechat:$this.wxNum,
                photoa:$this.Img1,
                photob:$this.Img2,
                photoc:$this.Img3,
                photod:$this.Img4,
                photoe:$this.Img5,
                photof:$this.Img6,
                token:localStorage.getItem('token')
            }).then(data => {
                if(data.code == 200){
                    alert('提交成功');
                }else{
                    alert('提交失败');
                }
            });
        }

        
    },

    

    

    // 调安卓相机
    selectImage(num,type){
        var $this = this;
        $this.type = type;
        var token = localStorage.getItem('token');
        if($this.type == 1){
            $this.Img1false = true;
        }else if($this.type == 2){
            $this.Img2false = true;
        }else if($this.type == 3){
            $this.Img3false = true;
        }else if($this.type == 4){
            $this.Img4false = true;
        }else if($this.type == 5){
            $this.Img5false = true;
        }else if($this.type == 6){
            $this.Img6false = true;
        }
        window.android.selectImage(token,$this.fnt_Img,1);
    },

    // 返回值接受
    upis_img(val){
        var $this = this;
        var userCon = JSON.parse(val);
        if($this.type == 1){
            $this.Img1 = userCon.data;
            $this.Img1false = true;
        }else if($this.type == 2){
            $this.Img2 = userCon.data;
            $this.Img2false = true;
        }else if($this.type == 3){
            $this.Img3 = userCon.data;
            $this.Img3false = true;
        }else if($this.type == 4){
            $this.Img4 = userCon.data;
            $this.Img4false = true;
        }else if($this.type == 5){
            $this.Img5 = userCon.data;
            $this.Img5false = true;
        }else if($this.type == 6){
            $this.Img6 = userCon.data;
            $this.Img6false = true;
        }
    },

  }
}
</script>

<style lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
.recovery{
    .recovery-main{
        background: #fff;
        position: absolute;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding: 0 rem(32px);
        padding-top:rem(88px);
        .con{
            color: #000000;
            max-height: 100%;
            line-height: rem(40px);
            margin-top: rem(40px);
            letter-spacing:rem(1px);
            font-size: rem(32px);
            font-family: font_pc;
            font-weight: 400;
            p{
                text-indent: rem(64px);
            }
        }
        .recovery-con_show{
            width: 100%;
            margin-top:rem(40px);
            background: #fff;
            border-radius: rem(10px);
            .recovery-con_list{
                .recovery-con_item{
                    width: 100%;
                    height: rem(80px);
                    line-height: rem(80px);
                    display: flex;
                    overflow: hidden;
                    margin-top:rem(15px);
                    font{
                        display: block;
                        color: #333333;
                        font-size: rem(32px);
                        font-family: font_b;
                        font-weight: bold;
                        width: rem(96px);
                    }
                    input{
                        flex:1;
                        outline: none;
                        border: rem(1px) solid #707070;
                        color: #000000;
                        font-family: font_pc;
                        font-size: rem(28px);
                        max-height: 100%;
                        margin-right: rem(18px);
                        border-radius: rem(67px);
                        padding: 0 rem(30px);
                        font-weight: 400;
                        height: rem(76px);
                        margin-top:rem(2px)
                    }
                    input::-webkit-input-placeholder { 
                        color: #999999; 
                    } 
                    .mesx{
                        margin-left:rem(32px);
                        display: flex;
                        img{
                            display: block;
                            width: rem(32px);
                            height: rem(32px);
                            margin-top:rem(23px);
                        }
                        span{
                            margin-left:rem(24px);
                            font-size:rem(32px);
                            font-family: font_pc;
                            font-weight: 400;
                        }
                    }
                    .mesx:nth-of-type(2){
                        margin-left:rem(45px);
                    }
                }
                .recovery-con_item:nth-of-type(1){
                    margin-top:rem(92px);
                }
                .recovery-con_item.cc{
                    width: 100%;
                    font{
                        width:auto;
                    }
                    input{
                        padding: 0 rem(80px);
                        text-align: center;
                    }
                    span{
                        position: absolute;
                        right: rem(20px);
                    }
                }
                .recovery-con_item.cc.s{
                    margin-top:rem(54px);
                    .span{
                        display: block;
                        font-size: rem(32px);
                        font-family: font_pc;
                        font-weight: 400;
                        color: #999999;
                        margin-left: auto;
                        margin-right: rem(32px);
                    }
                    img{
                        display: block;
                        width: rem(16px);
                        height: rem(30px);
                        margin-left: auto;
                        margin-top:rem(25px);
                        // margin-right: rem(32px);
                    }
                }
                .recovery-con_item.dd{
                    margin-bottom:0;
                    font{
                        width: 100%;
                    }
                }
                .recovery-con_listcon{
                    .items{
                        width:rem(190px);
                        float: left;
                        margin-right: rem(55px);
                        margin-top:rem(20px);
                        p{
                            height: rem(190px);
                            position: relative;
                            border-radius: rem(20px);
                            border: rem(3px) solid #E1E1E1;
                            overflow: hidden;
                        }
                        .img{
                            display: block;
                            width: rem(60px);
                            height: rem(50px);
                            position: absolute;
                            top: 0;
                            left: 0;
                            bottom: 0;
                            right: 0;
                            margin: auto;
                        }
                        .mim{
                            display: block;
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            bottom: 0;
                            right: 0;
                            margin: auto;
                        }
                        .active{
                            width: 100%;
                            height: 100%;
                        }
                        span{
                            display: block;
                            height: rem(45px);
                            line-height: rem(45px);
                            text-align: center;
                            margin-top:rem(10px);
                            font-size: rem(32px);
                            font-family:font_pc;
                            font-weight: 400;
                            color: #999999;
                        }
                    }
                    .items:nth-of-type(3n+3){
                        margin-right:0;
                    }
                   
                }
            }
        }
        .from_Bnt{
            width: rem(690px);
            height: rem(100px);
            line-height: rem(100px);
            text-align: center;
            background: #CB4848;
            border-radius: rem(67px);
            color: #fff;
            font-family: font_b;
            font-weight: bold;
            font-size: rem(36px);
            margin:rem(92px) auto rem(64px);
        }
    }
}


</style>
