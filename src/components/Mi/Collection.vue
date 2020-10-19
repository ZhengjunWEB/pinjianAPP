<template>
  <div class="coll-sc">
        <div class="App-header">
            <div class="to_a iconfont iconzuo" @click="adviser()"></div>
            <span>我的收藏</span> 
            <div class="to_b" style="visibility: hidden;"></div>
        </div>
        <div class="coll-sc_main">
            <div class="coll-sc_main_lr">
                <div class='coll-sc_main_lr_item' :class="is_show?'active':''" @click="off_true()">收藏作品</div>
                <div class='coll-sc_main_lr_item' :class="is_show?'':'active'" @click="off_fas()">收藏艺人</div>
            </div>
            <div class="coll-sc_main_le" v-if="is_show">
                <div class="s" v-if="zuppin.length == 0">
                    <div class="collection_error">
                         <img :src="httpsCdn_Img+'collection_error.png'" alt="">  
                         <span>你还没有任何收藏~</span> 
                    </div>
                </div>
                <div class="s" v-else>
                    <!-- <div class="coll-sc_main_le-items style_one" v-for="(v,k) in zuppin" :key="k">
                        <img src="http://a.appjsh.com/Uploads/goods_class/2020_05_11/15891769502580.jpg" alt="" class="imgs">     
                        <div class="con">
                            <h2>艺人名字</h2>    
                            <span>研究员高级工程师</span>
                        </div>               
                    </div> -->
                    <div class="App_mainConList">
                        <div class="mi-mi-mainItem clearfix">
                            <div class="item" v-for="(a,b) in zuppin" :key="b" @touchstart="showDeleteButton(a,b)" @touchend="emptyTime">
                                <img :src="a.goods_master_image" alt=""  @click="selectItem(a)">
                                <div class="item_comn">
                                    <strong>{{a.goods_name}}</strong>
                                    <span>{{a.author}}</span>
                                    <div class="pp_con" v-if="a.goods_type == 0">
                                        <dd> ￥????</dd>
                                        <dt @click="commits(a)">
                                            <img src="../../assets/images/Index_Img/gouwupirce.png" alt="">
                                        </dt>
                                    </div>
                                    <div class="pp_con" v-else>
                                        <dd> ￥{{Math.round(a.goods_price)}}</dd>
                                        <dt @click="addCart(a)">
                                            <img src="../../assets/images/Index_Img/gouwuchewx.png" alt="">
                                        </dt>
                                    </div>
                                </div>
                                <div class="delele" :class="activeClass ==b?'active':''" @click="remobi(a)">
                                    <div class="s" @click.stop="removeItem(a)">取消收藏</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="coll-sc_main_le" v-else>
                <div class="s" v-if="yippin.length == 0">
                    <div class="collection_error">
                         <img :src="httpsCdn_Img+'collection_error.png'" alt="">  
                         <span>你还没有任何收藏~</span> 
                    </div>
                </div>
                <div class="s" v-else>
                    <div class="coll-sc_main_le-items style_two" v-for="(a,b) in yippin" :key="b" @touchstart="showDeleteButtons(a,b)" @touchend="emptyTime">
                        <div class="con-liop" @click="jinqu(a)">
                            <img :src="a.thumb" alt="" class="imgs">     
                            <div class="con">
                                <h2>{{a.name}}</h2>
                                <span>{{a.label}}</span>
                            </div>   
                        </div>
                        <div class="delele" :class="activeClasss ==b?'active':''" @click="remobis(a)">
                            <div class="s" @click.stop="removeItems(a)">取消收藏</div>
                        </div>
                    </div>
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
        zuppin:[],      // 作品
        yippin:[],      // 艺人
        is_show:true,
        activeClass:-1,
        activeClasss:-1,

        httpsCdn_Img:'http://cdn.pinjianapp.com/web_app/img/Mi/',         // 配置地址
        
        Loop:null,
    }
  },
    mounted(){
        var $this = this;
        $this.get_fav_list();
    },

    methods: {
        get_fav_list(){
             var $this = this;
            $this.$post($this.$api.get_fav_list, {
                token:localStorage.getItem('token'),
                no:10,
                is_type:0
            }).then(data => {
                this.zuppin = data.data.data;
                console.log(this.zuppin);
            });
        },

        // 点击进入详情
        selectItem(item) {
            var $this = this;
            localStorage.setItem('get_Android_rouit','collection');
            this.$router.replace({
                path: `/home/indexdetails/${item.goods_id}`
            });
        },
        // commits 创建询问
        commits(v){
            var $this = this;
            $this.$post($this.$api.create_enquiry, {
                token:localStorage.getItem('token'),
                goods_id:v.id
                }).then(data => {
                if(data.code == 200){
                    swal('询价'+data.data);
                }else if(data.code == 500){
                    swal(data.msg, "请稍等……");
                }else if(data.code == 400){
                    swal('询价'+data.msg, "请稍等……");
                }
            });
        },
        // 添加购物车
        addCart(value){
            console.log(value);
            if(localStorage.getItem('token') == null){
                this.$router.push({
                    path: `/login`
                })
            }else{
            var $this = this;
            $this.$post($this.$api.add_cart, {
                token:localStorage.getItem('token'),
                goods_name:value.goods_name,
                goods_spec:0,
                storeid:value.store_id,
                id:value.id,
                seller_id:value.seller_id,
                store_name:value.store_name,
                user_id:value.user_id,
                goods_master_image:value.goods_master_image,
                goods_price:value.goods_price,
                buy_num:1,
                type:'cart'
                }).then(data => {
                if(data.code == 500){
                    
                }else if(data.code == 200){
                
                }
                });
            }
        
        },

        // 进入艺人详情
        jinqu(val){
            this.$router.replace({
                path: `/home/author/${val.id}`
            });
        },
        // 长按删除
        showDeleteButton:function (e,b) {
            console.log(e);
            clearTimeout(this.Loop); //再次清空定时器，防止重复注册定时器
            this.Loop = setTimeout(function() {
            this.activeClass = b;
               
            }.bind(this), 1000);
        },
        showDeleteButtons:function (e,b) {
            clearTimeout(this.Loop); //再次清空定时器，防止重复注册定时器
            this.Loop = setTimeout(function() {
            this.activeClasss = b;
               
            }.bind(this), 1000);
        },
        // 商品长按退出
        emptyTime:function () {
            clearTimeout(this.Loop); //清空定时器，防止重复注册定时器
        },

        // 商品点击空白退出
        remobi(){
            this.activeClass = -1;
        },
        // 艺人点击空白退出ss
        remobis(){
            this.activeClasss = -1;
        },
        // 商品取消收藏
        removeItem(val){
            this.$post(this.$api.fav_istrue2,{
                token:localStorage.getItem('token'),
                mix_id:val.goods_id,
                is_type:0
            }).then(data => {
                console.log(data);
                if(data.code == 200){
                    this.get_fav_list();
                }
            });

        },
        // 艺人取消收藏
        removeItems(val){
            console.log(val);
            this.$post(this.$api.fav_istrue2,{
                token:localStorage.getItem('token'),
                mix_id:val.id,
                is_type:4
            }).then(data => {
                if(data.code == 200){
                    this.activeClasss = -1;
                    this.off_fas();
                }
            });

        },
        


        adviser(){
            this.$router.go(-1);//返回上一层
        },
        off_true(){
            var $this = this;
            $this.is_show = true;
            $this.$post($this.$api.get_fav_list, {
                token:localStorage.getItem('token'),
                no:10,
                is_type:0
            }).then(data => {
                $this.zuppin = data.data.data;
            });
        },
        off_fas(){
            var $this = this;
            $this.is_show = false;
            $this.$post($this.$api.get_fav_list, {
                token:localStorage.getItem('token'),
                no:10,
                is_type:4
            }).then(data => {
                $this.yippin = data.data.data;
            });
        },
    }
    
}
</script>

<style scoped lang="scss">
// 引入 基础 scss
@import '../../assets/sass/base.scss';
@import '../../assets/font/font.css';
.coll-sc_main_le-items.style_two:nth-of-type(1) .con-liop{
    margin-top:rem(40px);
}
.con-liop{
    display: flex;
    height: rem(250px);
    background: #ffffff;
    width: rem(686px);
    height: rem(250px);
    border-radius: rem(20px);
    margin:0 auto;
    margin-top:rem(20px);
    overflow: hidden;
}
.App_mainConList{
    padding: 0 rem(32px);
}
.collection_error img{
    display: block;
    width: rem(146px);
    height: rem(146px);
    margin:rem(150px) auto 0;
}
.collection_error span{
    display: block;
    text-align: center;
    font-size:rem(28px);
    font-family:font_pc;
    font-weight:400;
    color:rgba(153,153,153,1);
    letter-spacing:rem(1px);
    margin-top:rem(30px);
}
.coll-sc{
    .coll-sc_main{
        width:100%;
        padding-top:rem(88px);
        position: absolute;
        width: 100%;
        height: 100%;
        background: #f8f8f8;
        .coll-sc_main_lr{
            width: rem(494px);
            height: rem(71px);
            line-height: rem(71px);
            display: flex;
            margin: rem(20px) auto 0;
            justify-content: center;
            background: #fff;
            .coll-sc_main_lr_item{
                width: rem(247px);
                height: 100%;
                color: #000;
                font-family: font_pc;
                font-size: rem(32px);
                text-align: center;
                border-radius: rem(20px);
            }
            .coll-sc_main_lr_item.active{
                background:rgba(0,0,0,1);
                color:#fff;
            }
        }
        .coll-sc_main_le{
            .coll-sc_main_le-items.style_one{
                padding: rem(28px) rem(32px);
                display: flex;  
                border-bottom:rem(1px) solid #cdcdcd;
                .imgs{
                    display: block;
                    width: rem(282px);
                    height:rem(180px);
                }    
                .con{
                    flex:1;
                    padding-left: rem(50px);
                    h2{
                        margin-top:rem(50px);
                        font-family: 黑体;
                        color: rgb(75, 71, 68);
                        font-size: rem(26px);
                    }
                    span{
                        display: block;
                        margin-top:rem(25px);
                        color: rgb(187, 187, 187);
                        font-size: rem(24px);
                    }
                }     
            }
            .coll-sc_main_le-items.style_two{
                padding:0 rem(32px) 0;
                position: relative;
                .delele{
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    top: 0;
                    left: 0;
                    z-index: 99;
                    background: rgb(75, 71, 68);
                    display: none;
                }
                .delele.active{
                    display: block;
                }
                .s{
                    width: rem(130px);
                    height: rem(130px);
                    line-height: rem(130px);
                    text-align: center;
                    background: red;
                    color:#fff;
                    border-radius: 50%;
                    font-size: rem(26px);
                    font-family: font_pc;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    margin: auto;
                }
                .imgs{
                    display: block;
                    width: rem(250px);
                    height:rem(250px);
                }    
                .con{
                    flex:1;
                    padding-left: rem(40px);
                    text-overflow :ellipsis;
                    white-space :nowrap;
                    overflow : hidden; 
                    h2{
                        margin-top:rem(75px);
                        font-family: font_b;
                        font-weight:bold;
                        color:rgba(0,0,0,1);
                        font-size: rem(32px);
                        text-overflow :ellipsis;
                        white-space :nowrap;
                        overflow : hidden; 
                    }
                    span{
                        display: block;
                        margin-top:rem(35px);
                        color:rgba(153,153,153,1);
                        font-size: rem(28px);
                        font-family:font_pc; 
                        margin-top:rem(35px);
                        text-overflow :ellipsis;
                        white-space :nowrap;
                        overflow : hidden; 
                    }
                }     
            }
        }
    }
}
.App_mainConList .mi-mi-mainItem .item{
   position: relative;
   height: rem(513px);
   .delele{
       position: absolute;
       height: 100%;
       width: 100%;
       top: 0;
       left: 0;
       z-index: 99;
       background: rgb(75, 71, 68);
       display: none;
   }
    .delele.active{
        display: block;
    }
    .s{
        width: rem(130px);
        height: rem(130px);
        line-height: rem(130px);
        text-align: center;
        background: red;
        color:#fff;
        border-radius: 50%;
        font-size: rem(26px);
        font-family: font_pc;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
    }

}

</style>
