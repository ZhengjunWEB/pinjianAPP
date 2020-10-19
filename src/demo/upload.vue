<template>
<div>
  <form action="" id="forma" ref="forma">
    <input type="file" multiple accept="image/*"  name="file" ref="ipt">
    <input type="text" name="token" value="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9jb25zb2xlLnBpbmppYW5hcHAuY29tXC9hcGlcL3VzZXJcL2xvZ2luIiwiaWF0IjoxNjAyNTc2NTQ3LCJleHAiOjE2MDI3NDkzNDcsIm5iZiI6MTYwMjU3NjU0NywianRpIjoiOTNaSFRxd1kyQ1lOaFI0dSIsInN1YiI6NywicHJ2IjoiZjY0ZDQ4YTZjZWM3YmRmYTdmYmY4OTk0NTRiNDg4YjNlNDYyNTIwYSJ9.hjt3p7FfPQXFWSurMN-shhFSvQL8U5O7a7WAaTc-pcU">
  </form>
  <button @click="aa">点击 </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fileList: [],
      a: "",
      b: "",
    };
  },
  methods: {
    aa() {
      // console.log(this.$refs.forma);
      // let a = this.$refs.forma
      console.log(this.$refs.ipt.files);
      let a = this.$refs.ipt.files[0]
       var formData = new FormData(a);
       console.log(formData);
       axios({
         method: 'post',
         url: 'http://console.pinjianapp.com/api/usergoods/interactive',
         data: formData
       })
      //  axios.post('http://console.pinjianapp.com/api/usergoods/interactive',{
         
      //  })
    }
  }
};
</script>

<style>
</style>