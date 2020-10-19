<template>
    <div>
        <div class="image-wrapper">
            <div class="img-wrapper">
                <div class="item" v-for="(item, index) in imgfilesback" :key="index">
                    <img :src="item" class="dis-image">
                    <span class="delete" @click="deleteImg(index)">X</span>
                </div>
                <div class="item upload-icon" @click="preSelect" v-if="imgList.length < fileCount">
                    <span class="heng"></span>
                    <span class="su"></span>
                </div>
            </div>
            <input type="file" class="inputer" id="inputer" ref="inputRef"  accept="image/*" capture="camera" @change="handleChange($event)" multiple="multiple" >
            <input type="file" class="inputer" ref="inputRefs" @change="handleChange($event)">


            <div class="Sdsa" v-if="isSshow" @click="preSelects()">相机</div>
            <div class="Sdsa" v-if="isSshow" @click="preSelectss()">图片</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        imgList: [],         // 图片源文件
        imgfilesback: [],    // base64
        fileCount:10,

        isSshow:false,
    }
  },
  methods: {
    preSelect () {
        //点击上传图片之前
        // this.$refs.inputRef.click();
        this.isSshow = true;
    },
    // h5相机
    preSelects(){
        this.$refs.inputRef.click();
        this.isSshow = false;
    },
    // h5相机
    preSelectss(){
        this.$refs.inputRefs.click();
        this.isSshow = false;
    },

    handleChange (e) {
      /* eslint-disable */
        //点击上传图片事件
        var _this = this
        var event = event || window.event;
        var file = event.target.files
        var leng=file.length;
        for(var i=0;i<leng;i++){
            var reader = new FileReader();    // 使用 FileReader 来获取图片路径及预览效果
            _this.imgList.push(file[i])
            reader.readAsDataURL(file[i]); 
            reader.onload =function(e){
                _this.imgfilesback.push(e.target.result);   // base 64 图片地址形成预览     
                console.log(_this.imgList);
                console.log(e.target.result);
                console.log(_this.imgfilesback);
                axios.post('http://console.pinjianapp.com/api/user/interactive',{token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jb25zb2xlLnBpbmppYW5hcHAuY29tXC9hcGlcL3VzZXJcL2xvZ2luIiwiaWF0IjoxNjAyMDMzMTYwLCJleHAiOjE2MDIyMDU5NjAsIm5iZiI6MTYwMjAzMzE2MCwianRpIjoiSW9YMklQOExqanFCbVNLWiIsInN1YiI6NywicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSJ9.VrRMoD3264LLQ9IgSNjFMCP57mqeu8wRO_d9GIiQmvU',data:_this.imgList[0]}).then(function(res){
                    console.log(res);
                })
            };                 
        }


    },
    deleteImg (ind) {
        // 删除图片
        var $this = this;
        $this.imgfilesback.splice($this.imgfilesback.indexOf(ind), 1);
    }
    
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-wrapper{
    padding:10px 10px;
}
.inputer{
    width:100px;
    height:100px;
    display:none;
}
.img-wrapper{
    display:flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
}
.image-wrapper .upload-icon{
    margin-left:14px;
    margin-bottom:10px;
    /* overflow: hidden; */
    width:20%;
    height:70px;
    text-align: center;
    border:1px solid #dbdbdb;
}
.img-wrapper .item{
    position:relative;
    margin-left:14px;
    margin-bottom:10px;
    /* overflow: hidden; */
    width:20%;
    height:70px;
    text-align: center;
}
.img-wrapper .item .dis-image{
    width:100%;
    height:70px;
}
.image-wrapper .item .delete {
    display:inline-block;
    position:absolute;
    background-color: #dbdbdb;
    width: 20px;
    height: 20px;
    color: #fff;
    font-size: 0.8em;
    border-radius: 50%;
    top:-9px;
    right:-10px;
}

.img-wrapper .item .heng{
    position: absolute;
    display:inline-block;
    width:30px;
    height:3px;
    background:#dbdbdb;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
} 
.img-wrapper .item .su{
    position: absolute;
    display:inline-block;
    width:3px;
    height:30px;
    background:#dbdbdb;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
} 
.Sdsa{
    margin-top:30px;
}
</style>
