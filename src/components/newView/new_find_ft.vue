<template>
  <div class="font_ft">
    <div v-show="!show">
      <div class="ft_item" v-for="(item, i) in list" :key="i">
        <div class="item_top">
          <div class="top_l">
            <img :src="item.thumb" alt="" />
          </div>
          <div class="top_r">
            <p>{{ item.goods_name }}</p>
            <span>{{ item.author }}</span>
          </div>
        </div>
        <div class="item_article">
          {{item.found_con}}
         <!-- <p v-text="item.found_con"></p> -->
        </div>
        <div v-if="total_img[i].length == 3 || total_img[i].length > 3"  class="item_img3"  @click="click_i(item.id, total_img[i])">
          <img :src="a"  v-for="(a, b) in total_img[i]"  :key="b"  v-show="b < 3"  />
          <div class="img_sheet">
            {{'+'+total_img[i].length}}
          </div>
        </div>
        <div v-else-if="total_img[i].length == 2"  class="item_img2"  @click="click_i(item.id, total_img[i])"  >
          <img :src="a" v-for="(a, b) in total_img[i]" :key="b" v-show="b < 3" />
        </div>
        <div v-else-if="total_img[i].length == 1" class="item_img1" @click="click_i(item.id, total_img[i])">
          <img
            :src="a"
            v-for="(a, b) in total_img[i]"
            :key="b"
            v-show="b < 3"
          />
        </div>
        <div class="item_user">
          <div class="user_avatar">
            <img :src="item.avatar" alt="" />
            <span>{{item.nickname}}</span>
          </div>
          <div class="user_date">
            <span>{{ item.create_time | time }}</span>
          </div>
        </div>
        <div class="item_bottom">
          <div><img :src="srcPath + 'zf.png'" alt="" /></div>
          <!-- <div>
            <img :src="srcPath + 'pl.png'" alt="" /> <span>500000</span>  评论功能
          </div> -->
          <div class="zan" @click="praise(item.id)"> 
            <img :src="srcPath + 'zan.png'" v-show="item.praise_status == 1" alt="" />
            <img :src="srcPath + 'dianzan.png'" v-show="item.praise_status == 0" alt="" /> 
            <span>{{item.praise_num}}</span>
          </div>
        </div>
      </div>
      <div class="my_ft" @click="show_myy" align="center">
        <img :src="srcPath + 'ft1.png'" alt="" />
      </div>
      <infinite-loading @infinite="infiniteHandler" v-if="isShow">
      </infinite-loading>
      <div class="footers" v-else>真的没有数据了~</div>
    </div>
    <transition name="fade">
      <Show_my v-show="show" @hidden_my="hidden_my" />
    </transition>

  </div>
</template>

<script>
import Show_my from "@/components/newView/new_find_my";
import { ImagePreview } from 'vant';
// 引入滑动刷新的组件
import InfiniteLoading from "vue-infinite-loading";
export default {
  name: "font_ft",
  data() {
    return {
      srcPath: "http://res.pinjianapp.com/vue_wap/images/find/", //配置地址
      show: false,
      list: [], //返图列表
      photo: [],
      total_img: [],
      isShow: true, //下拉隐藏|显示
      page:0,
    };
  },
  components: {
    Show_my,
    InfiniteLoading
  },
  created() {

  },
  mounted() {
    this.get_figure();
  },
  activated() {
    this.get_figure();
  },
  methods: {
    show_myy() {   //显示我的返图
      let token = localStorage.getItem('token')
      if(token == null) {
        this.$toast('请先登录！')
      } else {
        this.show = true;
      }
    }, 
    hidden_my() {   //隐藏我的返图
      this.show = false;
    },
    click_i(id, img_arr) {
      console.log(img_arr);
      ImagePreview(img_arr);
      // this.$router.push({
      //   path: "/find/comment/" + id,   返图详情页
      // });
    },
    get_figure() {  //获取返图列表
      this.total_img = []
      this.page = ++this.page
      this.$post(this.$api.figure, {
        page: this.page,
        no: 10
      }).then((res) => {
        if(res.data.data.length != 0) {
          this.list.push(...res.data.data) 
          this.list.forEach((item) => {
          this.total_img.push(item.found_photo.split(","));
        });
        } else {
          this.isShow = false
          return false
        }

      });
    },
          //下拉刷新
    infiniteHandler($state) {
      setTimeout(() => {
        var $this = this;
        // 请求下一页的数据
        if($this.show = false) {
          $this.get_figure();
        }
        $state.loaded();
      }, 1000);
    },
    praise(id) { //点赞
      let token = localStorage.getItem('token')
      if(token == null) {
        this.$toast('需要登录才能进行操作')
        return  false
      }
      this.$post(this.$api.praise_add, {
        token: localStorage.getItem('token'),
        maxid: id,
        type: 'figure'
      }).then( (res) => {  //将结果赋值，不用刷新页面
        let data = res
        if(data.code == 200) {
          this.list.forEach( (i) => {
            if(i.id == id) {
              i.praise_num = data.data.count
              i.praise_status = data.data.state
              return false
            }
          })
        } else {
          this.$toast('操作失败')
        }
        
      })
    }
  },

  filters: {
    time(v) {   // 裁剪时间
      return v.split(" ")[0];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/base.scss";
.font_ft {
  // position: relative;
  width: 100%;
  padding-top: rem(168px);
  // background: #f8f8f8;
  padding: 0 rem(36px) 0 rem(32px);
  margin-bottom: rem(300px);
  .ft_item {
    width: 100%;
    margin-bottom: rem(40px);
    padding-bottom: rem(11px);
    box-sizing: border-box;
    border-bottom: rem(1px) solid #eee;
    .item_top {
      display: flex;
      width: 100%;
      // height: rem(85px);
      padding-top: rem(40px);
      .top_l {
        margin-right: rem(34px);
        img {
          width: rem(85px);
          height: rem(85px);
          // background-color: pink;
        }
      }
      .top_r {
        p {
          font-size: rem(26px);
          color: #333;
          font-weight: 600;
          margin-bottom: rem(26px);
        }
        span {
          font-size: rem(24px);
          color: #666;
        }
      }
    }
    .item_article {
      width: 100%;
      margin-top: rem(39px);
      line-height: rem(40px);
      font-size: rem(28px);
      color: #333;
      font-weight: 600;
      border: 1px solid #fff;
      overflow: hidden;
    }
    .item_img3 {
      position: relative;
      width: 100%;
      height: rem(452px);
      margin-top: rem(40px);
      img {
        // background-color: pink;
        border-radius: rem(5px);
        &:nth-child(1) {
          width: rem(452px);
          height: rem(452px);
        }
        &:nth-child(2) {
          width: rem(222px);
          height: rem(222px);
          margin-left: rem(8px);
        }
        &:nth-child(3) {
          position: absolute;
          width: rem(222px);
          height: rem(222px);
          top: 0;
          right: 0;
        }
      }
      .img_sheet {
        position: absolute;
        width: rem(222px);
        height: rem(222px);
        text-align: center;
        line-height: rem(222px);
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,.55);
        font-size: rem(50px);
        color: #fff;
        border-radius: rem(5px);
      }
    }
    .item_img2 {
      display: flex;
      justify-content: space-between;
      margin-top: rem(40px);
      img {
        width: rem(337px);
        height: rem(337px);
      }
    }
    .item_img1 {
      margin-top: rem(40px);
      img {
        width: rem(452px);
        height: rem(452px);
      }
    }
    .item_user {
      display: flex;
      line-height: rem(44px);
      margin-top: rem(32px);
      justify-content: space-between;
      font-size: rem(24px);
      .user_avatar {
        img {
          width: rem(44px);
          height: rem(44px);
          border-radius: 50%;
          vertical-align: middle;
          margin-right: rem(16px);
        }
        span {
          color: #333;
        }
      }
      .user_date {
        color: #e8c396;
      }
    }
    .item_bottom {
      display: flex;
      width: 100%;
      height: rem(80px);
      line-height: rem(80px);
      margin-top: rem(21px);
      color: #999;
      > div {
        // width: rem(80px);
        // padding-right: rem(10px);
        height: rem(80px);
        &:nth-child(1) {
          width: rem(80px);
          margin-right: rem(70px);
          img {
            width: rem(32px);
            height: rem(32px);
          }
        }
        &:nth-child(2) {
          margin-left: auto;
          padding-left: rem(20px);
        }
        img {
          width: rem(36px);
          height: rem(36px);
          vertical-align: rem(-8px);
        }
        span {
          font-size: rem(28px);
        }
      }
    }
  }
  .my_ft {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: rem(120px);
    height: rem(120px);
    background-color: #f44647;
    border-radius: 50%;
    bottom: rem(168px);
    right: rem(38px);
    box-shadow: 0px 35px 34px rgba(251, 13, 13, 0.2);
    img {
      width: rem(61px);
      height: rem(61px);
      vertical-align: rem(-30px);
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
.footers {
  text-align: center;
  font-size: rem(28px);
  color: #666;
  margin-top: rem(20px);
}
</style>