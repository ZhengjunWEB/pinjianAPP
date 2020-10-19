import Vue from 'vue'
import Router from 'vue-router'


// 引入 首页组件
// import Index from '@/components/Index'
import Index from '@/components/newView/new_index'
// 引入 分类 组件
import Classification from '@/components/Classification'
// 引入 特卖馆 组件
// import Special from '@/components/Special'
// 引入 特卖馆 组件
// import Find from '@/components/Find'
import Find from '@/components/newView/new_Find'
// 引入 特卖馆 组件
// import Mi from '@/components/Mi'
import Mi from '@/components/newView/new_mi'
// import Cart from '@/components/Cart'                                   // 购物车
import Cart from '@/components/newView/new_cart'                                   // 购物车

import Videolist from '@/components/newView/Videolist'                                   // 直播
import Video from '@/components/newView/video'                                   // 直播详情



// 引入 登录 组件
import Login from '@/components/Login'


// import Suo1 from '@/components/Home/Suo1'                                // 搜索引擎
import Suo1 from '@/components/newView/new_i_search'                                // 搜索引擎
import Suo from '@/components/Home/Suo'                                  // 搜索引擎
import Suoindex from '@/components/Home/SuoList/index'                   // 搜索引擎--商品模块
import Suohx from '@/components/Home/SuoList/suohx'                      // 搜索引擎--壶型模块
import Suonl from '@/components/Home/SuoList/suonl'                      // 搜索引擎--泥料模块
import Suoyr from '@/components/Home/SuoList/suoyr'                      // 搜索引擎--艺人模块
import Suobk from '@/components/Home/SuoList/suobk'                      // 搜索引擎--百科模块


import Selection from '@/components/Home/Selection'                      // 每日甄选
// import Author from '@/components/Home/Author'                            // 作者详情
import Author from '@/components/newView/new_author'                            // 作者详情
import Authorcon from '@/components/Home/AuthorCon'                      // 作者详情 --印章款式 大师风采

// import Indexdetails from '@/components/Home/Indexdetails'                // 首页商品详情
import Indexdetails from '@/components/newView/new_details'                // 首页商品详情
import discounts from '@/components/newView/discounts'                // 首页新人优惠

import Listdetails from '@/components/Home/Listdetails'                  // 列表大分类
// import Videolist from '@/components/Home/Videolist'                      // 视频直播列表页
import Createlive from '@/components/Home/Createlive'                    // 创建视频直播
import Loading from '@/components/Common/Loading_t'                      // Loading组件
import exit from '@/components/Sell/exit'                                // 退出app

// import Receipt from '@/components/Sell/Receipt'                          // 收货地址
import Receipt from '@/components/newView/new_receipt'                          // 收货地址

// import addReceipt from '@/components/Sell/addReceipt'                    // 添加收货地址
import addReceipt from '@/components/newView/new_addReceipt'                    // 添加收货地址

// import EditReceipt from '@/components/Sell/EditReceipt'                  // 添加收货地址
import EditReceipt from '@/components/newView/new_editReceipt'                  // 添加收货地址

// import Payment from '@/components/Payment/payment'                       // 支付结算
import Payment from '@/components/newView/payment'                       // 支付结算

// import paymentlist from '@/components/Payment/paymentlist'               // 直接支付结算
import paymentlist from '@/components/newView/new_paymentlist'               // 直接支付结算

import order from '@/components/Payment/order'                           // 我的订单
import adviser from '@/components/Payment/adviser'                       // 专属顾问
import problem from '@/components/Payment/Comm_problem'                  // 常见问题
import ency from '@/components/Payment/Ency'                             // 紫砂百科
import encyclopedia from '@/components/Payment/Encyclopedia'             // 紫砂百科详情
import appreciation from '@/components/Payment/appreciation'             // 美物赏析
import appreciationlist from '@/components/Payment/appreciationlist'     // 美物赏析详情
import videocation from '@/components/Payment/Videocation'               // 视频鉴赏
import picture from '@/components/Payment/picture'                       // 壶友返图
import picturedetails from '@/components/Payment/picturedetails'         // 壶友返图详情
import Mud from '@/components/Payment/Mud'                               // 泥料
import shaped from '@/components/Payment/shaped'                         // 特卖专区
import shapedlist from '@/components/Payment/shapedList'                 // 特卖专区详情
import urceolate from '@/components/Payment/urceolate'                   // 壶型
import artist from '@/components/Payment/artist'                         // 艺人
import System from '@/components/Sell/System'                            // 消息中心
import SystemList from '@/components/Sell/SystemList'                    // 系统通知

// import Feedback from '@/components/Sell/Feedback'                     // 意见反馈
import Feedback from '@/components/newView/new_feedback'

import integral from '@/components/Integral/integral'                    // 积分商城
import integral_mx from '@/components/Integral/integral_mx'              // 积分明细
import integral_Dind from '@/components/Integral/integral_Dind'          // 积分订单
import integral_gz from '@/components/Integral/integral_gz'              // 积分规则
import CustomerService from '@/components/Common/CustomerService'        // 客服
// import Collection from '@/components/Mi/Collection'                      // 我的收藏
import Collection from '@/components/newView/new_collection'

import inquiry from '@/components/Mi/inquiry'                            // 我的收藏
import coupon from '@/components/Mi/coupon'                              // 优惠券
import Culture from '@/components/View/Culture'                          // 品牌文化

// import recovery from '@/components/Home/recovery'                        // 回收详情
import recovery from '@/components/newView/new_recovery'                        // 回收详情

import aboutus from '@/components/Payment/Aboutus'                       // 关于我们
import personal from '@/components/Mi/personal'                          // 个人资料
import personalcon from '@/components/Mi/personalCon'                    // 修改昵称

// import find_index from '@/components/Find/index'                         // 百科推荐列表
import find_recom from '@/components/newView/new_find_recom'                         // 百科推荐列表
// import nl_index from '@/components/Find/nl_index'                        // 发现泥料列表
import find_ft from '@/components/newView/new_find_ft'                        // 发现泥料列表

import find_my from '@/components/newView/new_find_my'                        // 我的返图
import find_comment from '@/components/newView/new_find_comment'              // 返图评论
import find_add from '@/components/newView/new_find_add'              // 添加我的返图

import find_nl from '@/components/newView/find_nl'              // 泥料
// import find_nl from '@/components/newView/find_nl'              // 泥料
import find_preview from '@/components/newView/ft_preview'              // 返图预览
import find_ass from '@/components/newView/find_ass'              // 添加自定义
import find_cus from '@/components/newView/find_cus'              // 自定义商品

import nl_indexcon from '@/components/Find/nl_indexCon'                  // 发现泥料列表详情
import hx_index from '@/components/Find/hx_index'                        // 发现壶型列表
import hx_indexlist from '@/components/Find/hx_indexlist'                // 发现壶型详情列表
import hx_indexcon from '@/components/Find/hx_indexCon'                  // 发现壶型列表详情   
// import yr_index from '@/components/Find/yr_index'                        // 发现艺人列表
import yr_index from '@/components/newView/yr_index'                        // 发现艺人列表
import yr_detail from '@/components/newView/yr_detail'                        // 发现艺人列表
import nl_detail from '@/components/newView/nl_detail'                        // 发现泥料详情
import hx_detail from '@/components/newView/new_hx'                        // 发现壶型详情
import nl_indexcons from '@/components/newView/nl_indexcons'                // 发现二级泥料列表详情
import wikipedia from '@/components/newView/wikipedia'                      // 百科推荐详情
import hx_details from '@/components/newView/hx_detail'                      // 发现壶型详情
import wk_search from '@/components/newView/wkpk_search'                      // 发现页百科搜索
import hx_search from '@/components/newView/hx_search'                      // 发现页壶型搜索


// import ft_index from '@/components/Find/ft_index'                        // 发现返图列表
// import ft_index from '@/components/newView/new_ft'                        // 发现返图列表

// import queryts from '@/components/Sell/query'                            // 职称查询
import queryts from '@/components/newView/new_query'                            // 职称查询

import querytsCon from '@/components/Sell/queryCon'                      // 职称查询内容

import order_index from '@/components/Payment/order/index'               // 我的订单全部
import order_payment from '@/components/Payment/order/error_payment'     // 我的订单全部 --待付款
import order_deliver from '@/components/Payment/order/error_deliver'     // 我的订单全部 --待发货
import order_Receiving from '@/components/Payment/order/error_Receiving' // 我的订单全部 --待收获
import order_complete from '@/components/Payment/order/error_complete'   // 我的订单全部 --已完成
import pay_now from '@/components/newView/pay_now'   // 支付界面

// import delierCon from '@/components/Payment/order/delierCon'             // 订单详情
import delierCon from '@/components/newView/new_delierCon'             // 订单详情
import postSale from '@/components/newView/post_sale'                      //订单页售后
import m_postSale from '@/components/newView/m_afterSale'                      //我的售后
import m_sale_detail from '@/components/newView/m_sale_detail'                      //我的售后详情
import m_message from '@/components/newView/m_message'                      //我的消息
import chat from '@/components/newView/chat'                      //客服聊天 
import msg_system from '@/components/newView/mesg_system'                      //系统通知
import msg_deal from '@/components/newView/mesg_deal'                      //系统通知
import input from '@/demo/inputfile'                      //我的售后详情
import Privacy from '@/components/newView/Privacy'                            // 隐私政策
import agreement from '@/components/newView/agreement'                        // 用户协议
import upload from '@/demo/upload'                        // 用户协议







Vue.use(Router)

const router = new Router({


  routes: [
    //直播
    {path: '/live', name:'Videolist', component: Videolist},
    {path: '/live/video/:vid/:roomid', name: 'Video',component: Video},   

    // 首页
    {
      path: '/index', name: 'Index', component: Index,
      meta: {
        keepAlive: true // 需要缓存
      }
    },
    { path: '/home/author/:id', name: 'Author', component: Author },
    { path: '/home/authorcon/:id/:pid', name: 'Authorcon', component: Authorcon },
    { path: '/home/selection', name: 'Selection', component: Selection, },
    {
      path: '/home/indexdetails/:id', name: 'Indexdetails', component: Indexdetails,
      meta: {
        keepAlive: true // 需要缓存
      }
    },
    { path: '/home/listdetails/:id', name: 'Listdetails', component: Listdetails },
    { path: '/loading', name: 'Loading', component: Loading },
    { path: '/home/suo1', name: 'Suo1', component: Suo1,
      meta: {
        keepAlive:true
      }
     },
    {
      path: '/home/suo', name: 'Suo', component: Suo,
      children: [
        { path: '/', name: 'Suoindex', component: Suoindex, },
        { path: '/home/suo/Suohx', name: 'Suohx', component: Suohx, },
        { path: '/home/suo/Suonl', name: 'Suonl', component: Suonl, },
        { path: '/home/suo/Suoyr', name: 'Suoyr', component: Suoyr, },
        { path: '/home/suo/Suobk', name: 'Suobk', component: Suobk, },
      ],
    },
    // { path: '/home/videolist', name: 'Videolist', component: Videolist },

    // { path: '/home/video/:id', name: 'Video', component: Video },

    { path: '/home/createlive', name: 'Createlive', component: Createlive },
    { path: '/home/recovery', name: 'recovery', component: recovery },
    { path: '/home/discounts', name: 'discounts', component: discounts }, //新人优惠

    { path: '/sell/exit', name: 'exit', component: exit },
    { path: '/sell/receipt/:id', name: 'Receipt', component: Receipt },
    { path: '/sell/addreceipt', name: 'addReceipt', component: addReceipt },
    { path: '/sell/editReceipt/:id', name: 'EditReceipt', component: EditReceipt },
    { path: '/payment/payment', name: 'Payment', component: Payment },
    { path: '/payment/paymentlist/:id/:bid/:pid', name: 'paymentlist', component: paymentlist },
    { path: '/payment/aboutus', name: 'aboutus', component: aboutus },
    {
      path: '/payment/order', name: 'order', component: order,
      children: [
        { path: '/', name: 'order_index', component: order_index, },
        { path: '/payment/order/order_payment', name: 'order_payment', component: order_payment, },
        { path: '/payment/order/order_deliver', name: 'order_deliver', component: order_deliver, },
        { path: '/payment/order/order_Receiving', name: 'order_Receiving', component: order_Receiving, },
        { path: '/payment/order/order_complete', name: 'order_complete', component: order_complete, },
      ],
    },
    { path: '/payment/order/delierCon/:order_id', name: 'delierCon', component: delierCon, },
    { path: '/payment/order/postSale/:id', name: 'postSale', component: postSale, }, //售后
    { path: '/payment/adviser', name: 'adviser', component: adviser },
    { path: '/payment/comm_problem', name: 'problem', component: problem },
    { path: '/payment/encyclopedia', name: 'encyclopedia', component: encyclopedia },
    { path: '/payment/ency', name: 'ency', component: ency },
    { path: '/payment/appreciation', name: 'appreciation', component: appreciation },
    { path: '/payment/appreciationlist', name: 'appreciationlist', component: appreciationlist },
    { path: '/payment/videocation', name: 'videocation', component: videocation },
    { path: '/payment/picture', name: 'picture', component: picture },
    { path: '/payment/picturedetails', name: 'picturedetails', component: picturedetails },
    { path: '/payment/mud', name: 'Mud', component: Mud },
    { path: '/payment/shaped', name: 'shaped', component: shaped },
    { path: '/payment/shapedlist', name: 'shapedlist', component: shapedlist },
    { path: '/payment/urceolate', name: 'urceolate', component: urceolate },
    { path: '/payment/artist', name: 'artist', component: artist },
    { path: '/pay_now', name: 'pay_now', component: pay_now },
    // 分类组件
    {
      path: '/classification', name: 'Classification', component: Classification,
      // meta: {
      //   keepAlive: true // 需要缓存
      // }
    },
    { path: '/sell/system', name: 'System', component: System, },
    { path: '/sell/systemlist', name: 'SystemList', component: SystemList, },
    { path: '/sell/feedback', name: 'Feedback', component: Feedback, },
    { path: '/home/customerservice/:id', name: 'CustomerService', component: CustomerService, },

    // 积分商城
    { path: '/Integral/integral', name: 'integral', component: integral, },
    { path: '/Integral/integralmx', name: 'integral_mx', component: integral_mx, },
    { path: '/Integral/integral_Dind', name: 'integral_Dind', component: integral_Dind, },
    { path: '/Integral/integralgz', name: 'integral_gz', component: integral_gz, },
    { path: '/view/culture', name: 'Culture', component: Culture, },
    { path: '/sell/query', name: 'queryts', component: queryts, },
    { path: '/sell/querytCon/:id', name: 'querytsCon', component: querytsCon, },
    {
      path: '/find', name: 'Find', component: Find,
      children: [
        { path: '/', redirect: '/find/recom' },
        { path: '/find/recom', name: 'find_recom', component: find_recom, },
        {
          path: '/find/ft', name: 'find_rt', component: find_ft,
          meta: {
            keepAlive: true // 需要缓存
          }
        },
        // {path: '/find/hx_index',name: 'hx_index',component: hx_index,},
        // 
        // {path: '/find/ft_index',name: 'ft_index',component: ft_index,},
      ],
    },
    { path: '/find/hx_indexlist/:id', name: 'hx_indexlist', component: hx_indexlist, },
    { path: '/find/hx_indexcon/:id', name: 'hx_indexcon', component: hx_indexcon, },
    // { path: '/find/nl_indexcon/:id', name: 'nl_indexcon', component: nl_indexcon, },
    { path: '/find/my', name: 'find_my', component: find_my, },
    { path: '/find/comment/:id', name: 'find_com', component: find_comment, },
    { path: '/find/add', name: 'find_add', component: find_add, },
    { path: '/find/nl', name: 'find_nl', component: find_nl, },
    { path: '/find/yr', name: 'find_yr', component: yr_index, },
    { path: '/find/yr_detail/:id', name: 'yr_detail', component: yr_detail, },
    { path: '/finde/ni_detale/:id', name: 'nl_detail', component: nl_detail, },  
    { path: '/find/nl_indexcon/:id', name: 'nl_indexcons', component: nl_indexcons, },
    { path: '/find/wk_search', name: 'wk_search', component: wk_search, 
      // meta: {
      //   keepAlive: true
      // }
    },
    { path: '/find/hx_search', name: 'hx_search', component: hx_search, 
    // meta: {
    //   keepAlive: true
    // }
    },
    {path: '/find/wikipedia/:id',name: 'wikipedia',component: wikipedia,},
    {path: '/find/hx_detail',name: 'hx_detail',component: hx_detail,
      meta: {
        keepAlive: true
      }
    },
    {path: '/find/hx_details/:id',name: 'hx_details',component: hx_details,},
    { path: '/find/preview', name: 'find_preview', component: find_preview, },
    {
      path: '/find/ass', name: 'find_preview', component: find_ass,
      // meta: {
      //   keepAlive: true // 需要缓存
      // }
    },
    { path: '/find/cus', name: 'find_preview', component: find_cus, },
    {
      path: '/cart', name: 'Cart', component: Cart,
      // meta: {
      //   keepAlive: true
      // }
    },


    // 特卖馆组件
    // {path: '/special',name: 'Special',component: Special,},
    // 查询组件
    // 我的组件
    {
      path: '/mi', name: 'Mi', component: Mi,
      // meta: {
      //   keepAlive: true
      // }
    },
    {
      path: '/mi/collection', name: 'Collection', component: Collection,
      // meta: {
      //   keepAlive: true
      // }
    },
    { path: '/mi/inquiry', name: 'inquiry', component: inquiry, },
    { path: '/mi/coupon', name: 'coupon', component: coupon, },
    { path: '/mi/personal', name: 'personal', component: personal, },
    { path: '/mi/personalcon', name: 'personalcon', component: personalcon, },
    { path: '/mi/m_personalcon', name: 'm_personalcon', component: m_postSale, },
    { path: '/mi/m_sale_detail', name: 'm_sale_detail', component: m_sale_detail, },
    { path: '/mi/m_message', name: 'm_message', component: m_message, },
    { path: '/mi/chat', name: 'chat', component: chat, },
    { path: '/mi/msg_system', name: 'msg_system', component: msg_system, },
    { path: '/mi/msg_deal', name: 'msg_deal', component: msg_deal, },
    {path: '/mi/Privacy',name: 'Privacy',component: Privacy,},
    {path: '/mi/agreement',name: 'agreement',component: agreement,},

    // // 登录页面
    { path: '/login', name: 'Login', component: Login, },
    { path: '/input', component: input, },
    { path: '/upload', component: upload, },



    {
      path: '/*',
      // 路由跳转
      redirect: '/index'
    }
  ],
  // mode: 'history',

  // 坑一 页面太长高度坑
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
export default router
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if(to.path == '/mi' && token == null) {
    next('/login')
    return false
  } else {
    next()
  }
})


