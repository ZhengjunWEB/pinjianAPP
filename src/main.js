// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'   
import directives from './directives'  // 滑动
import $ from 'jquery'
import ElementUI from 'element-ui'; // 引入ElementUI组件
import 'element-ui/lib/theme-chalk/index.css';// 引入ElementUI组件样式文件
import LyTab from './plugins/tab'
import swal from 'sweetalert'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-contrib-hls'
import goBack from '../static/js/goBack';

import { Icon, Popup, Cell, Dialog, Overlay, ImagePreview, Notify, ActionSheet, Toast, Uploader, Sticky } from 'vant';  
Vue.use(Icon);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(Overlay);
Vue.use(ImagePreview);  
Vue.use(Notify);                                        //引入vant组件
Vue.use(Dialog);
Vue.use(ActionSheet);
Vue.use(Toast);
Vue.use(Uploader);
Vue.use(Sticky);

Vue.prototype.$bus = new Vue()    //事件中兴



// 图片放大组件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview, options)
var options = {
  fullscreenEl: false, //关闭全屏按钮
  tapToClose: true,
}

Vue.prototype.$back = goBack; 

Vue.use(VideoPlayer)
Vue.use(LyTab)



import "babel-polyfill";   // 内核

import {post,get,put,deletes,toJson,isEmpty} from './plugins/http.js' // 请求方式中间件
import {api} from './plugins/api.js'  // API 链接

// 引入 懒加载 组件
import VueLazyload from 'vue-lazyload'
// 懒加载配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 当图片请求失败的时候 就会用 error 里的图片替代
  error: require('./assets/images/GIF/error_404.jpg'),
  // 当前图片正在加载的时候 用 loading 里的图片替代
  loading: require('./assets/images/GIF/jizai.gif'),
  attempt: 1
})



Vue.use(ElementUI);
Vue.config.productionTip = false;
directives.init(Vue);



//定义全局变量
Vue.prototype.$api=api;
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$put=put;
Vue.prototype.$delete=deletes;
Vue.prototype.$toJson=toJson;
Vue.prototype.$isEmpty=isEmpty; 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  /*  components: { App },
   template: '<App/>' */
})