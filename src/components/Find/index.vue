<template>
    <div class="font_in">
        <div class="font_ibn">
            <div class="font_ibnitem" v-for="(v,d) in fin_ind" :key="d">
                <img :src="v.thumb" alt="">
                <h2>{{v.title}}</h2>
                <strong>{{v.create_time}}</strong>
                <p>{{v.con}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'font_in',
  data () {
    return {
        fin_ind:[],
    }
  },

  mounted() {
    var $this = this;
    $this.$post($this.$api.getlistwikipedia, {}).then(data => {
        $this.fin_ind = data.data.data;
    });
  },
  methods: {
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/sass/base.scss';
.font_in{
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top:rem(208px);
    // padding-bottom: rem(98px);
    background: #f8f8f8;
    .font_ibn{
        width: 100%;
        // padding: 0 rem(32px);
        padding-bottom: rem(98px);
        background: #f8f8f8;
        .font_ibnitem{
            width: 100%;
            padding: rem(40px) rem(32px); 
            background-color: #fff;
            margin-bottom: rem(16px);
            img{
                display: block;
                width: 100%;
                height: rem(386px);
            }
            h2{
                width: 100%;
                margin-top:rem(23px);
                height: rem(45px);
                line-height: rem(45px);
                font-size:rem(32px);
                font-family:font_pc;
                font-weight:400;
                color:rgba(51,51,51,1);
                white-space:nowrap;
                overflow:hidden;
                text-overflow:ellipsis;
            }
            strong{
                display: block;
                margin-top:rem(3px);
                height: rem(33px);
                line-height: rem(33px);
                font-size:rem(24px);
                font-family:font_pc;
                font-weight:300;
                color:rgba(153,153,153,1);
            }
            p{
                max-height:rem(80px);
                line-height:rem(40px);
                font-size:rem(28px);
                font-family:font_pc;
                font-weight:300;
                color:rgba(102,102,102,1);
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
        // .font_ibnitem:nth-of-type(1){
        //     margin-top:rem(20px);
        // }
    }
}

</style>