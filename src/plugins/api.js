export const baseUrl="http://console.pinjianapp.com";
// export const baseUrl="http://192.168.128.194:3333";   
export const api = {
    "HeaderBanner" : baseUrl + "/api/api/get_home_banner",                       // 首页banner  
    "HeaderCon_bot" : baseUrl + "/api/api/get_top_home_goods_class_list",        // 首页banner下icon  
    "HeaderCon_fl" : baseUrl + "/api/api/goods_brand",                           // 首页艺人  
    // "HeaderCon_tj_one" : baseUrl + "/api/api/get_home_artists_list",             // 名家推荐1  
    // "HeaderCon_tj_two" : baseUrl + "/api/api/get_home_artists_list_b",           // 名家推荐2  
    // "HeaderCon_goods" : baseUrl + "/api/api/get_home_treasure_goods",            // 首页镇店之宝  
    // "HeaderCon_goods_sale" : baseUrl + "/api/api/get_goods_sale",                // 首页特卖馆 
    // "HeaderCon_goods_day" : baseUrl + "/api/api/get_goods_day",                  // 首页每日甄选 
    "HeaderCon_goods_Yinfo" : baseUrl + "/api/api/get_artists_info",             // 首页艺人详情 
    "HeaderCon_goods_SJrandom" : baseUrl + "/api/api/get_goods_random",          // 随机推荐商品 
    "HeaderCon_goods_info" : baseUrl + "/api/api/get_goods_info",                // 商品详情 
    "HeaderCon_Nav" : baseUrl + "/api/api/get_bottom_home_goods_class_list",     // 首页底部导航导航  
    "Header_classifl" : baseUrl + "/api/api/get_goods_screening",                // 首页底部分类查询  



    "Header_classifls" : baseUrl + "/api/api/get_classid_goods",                  // 分类大查询  
    "goods_list" : baseUrl + "/api/api/get_class_goods_list",                     // 大分类下二级查询 
    "getidclasschild" : baseUrl + "/api/api/getidclasschild",                     // 根据分类id获取子层分类  
    "classid_goodslist" : baseUrl + "/api/api/get_classid_goodslist",             // 根据分类id获取商品  type 1 
    
    // "livelist" : baseUrl + "/api/api/livelist",                                   // 视频列表  
    // "livedetails" : baseUrl + "/api/api/livedetails",                             // 视频列表详情  
    "createlive" : baseUrl + "/api/api/createlive",                               // 创建视频  



    "check_user_login" : baseUrl + "/Home/check_user_login",                       // 判断token  
    "get_cart_list" : baseUrl + "/api/cart/get_cart_list",                         // 购物车列表  
    "get_cart_count" : baseUrl + "/api/cart/get_cart_count",                       // 购物车数量  
    "add_cart" : baseUrl + "/api/cart/add_cart",                                   // 加入购物车  
    "del_cart" : baseUrl + "/api/cart/del_cart",                                   // 删除购物车  
    "change_cart" : baseUrl + "/api/cart/change_cart",                             // 购物车数量计算加减  
    "get_cart_list_check" : baseUrl + "/api/cart/get_cart_list_check",             // 购物车结算  
    "create_orders" : baseUrl + "/api/order/create_orders",                        // 购物车下订单1 
    "create_order" : baseUrl + "/api/order/create_order",                          // 购物车下订单2 
    "wxpay" : baseUrl + "/api/api/wxpay",                                          // 微信支付 （暂未使用）
    "aliPayApp" : baseUrl + "/api/payment/aliPayApp",                              // 支付宝支付 （暂未使用）
    "continue_pay" : baseUrl + "/api/order/continue_pay",                          // 二次支付
    "order_Listcon" : baseUrl + "/api/order/get_order_info_by_order_id",           // 订单详情
    "batch_fav_list" : baseUrl + "/api/fav/batch_edit_fav",                         // 批量收藏列表  通用
    
    "get_befor_order" : baseUrl + "/api/order/get_befor_order",                    // 预生成订单
    "cartList" : baseUrl + "/api/user/get_user_order",                             // 订单列表 
    "order_status" : baseUrl + "/api/order/change_order_status",                   // 确认收货 
    "close_order" : baseUrl + "/api/order/close_order",                            // 取消订单 
    "cartList_refund" : baseUrl + "/api/order/refund",                             // 申请售后 
    "adddefault" : baseUrl + "/api/address/default",                               // 查看默认地址 

    "address_index" : baseUrl + "/api/address/index",                               // 地址列表  
    "address_default" : baseUrl + "/api/address/set_default",                       // 默认地址列表  
    "address_del" : baseUrl + "/api/address/del",                                   // 删除地址列表  
    "address_add" : baseUrl + "/api/address/add",                                   // 新增地址  
    "address_edit" : baseUrl + "/api/address/edit",                                 // 修改地址  
    "get_area_province" : baseUrl + "/api/api/get_area_province",                   // 获取所有省直辖市  
    "get_area_device" : baseUrl + "/api/api/device",                                // 传递版本号  
    "get_area_liveroom" : baseUrl + "/api/api/liveroom",                            // 商品关联
    "get_area_otmphone" : baseUrl + "/api/otm/otmlogin",                            // 一键登录
    "get_area_phonelogin" : baseUrl + "/api/otm/phonelogin",                        // 短信登陆
    "get_class_list" : baseUrl + "/api/api/get_class_list",                         // 改后大分类
    
    "fav_istrue" : baseUrl + "/api/api/is_fav",                                     // 判断是否关注
    "fav_istrue2" : baseUrl + "/api/fav/edit_fav",                                  // 修改是否关注 + 点赞
    "frecycling" : baseUrl + "/api/recycling/create_recycling",                     // 创建回收
    "auto_upload" : baseUrl + "/api/auto/auto_upload",                              // 上传图片 文件
    "auto_base64" : baseUrl + "/api/auto/base64",                                   // 上传图片 base
    "create_enquiry" : baseUrl + "/api/user/create_enquiry",                        // 创建询问
    "enquiry_list" : baseUrl + "/api/user/enquiry_list",                            // 询问列表
    "get_fav_list" : baseUrl + "/api/user/get_fav_list",                            // 艺人收藏列表  通用
    "feedback" : baseUrl + "/api/api/feedback",                                     // 意见反馈
    "customer" : baseUrl + "/api/user/customer",                                    // 专属顾问
    "get_article" : baseUrl + "/api/api/get_article",                               // 常见问题
    "getlistwikipedia" : baseUrl + "/api/api/getlistwikipedia",                     // 紫砂百科列表
    "getlistuser_money" : baseUrl + "/api/user/user_money",                         // 钱包信息
    "get_user_sum" : baseUrl + "/api/user/user_sum",                                // 收藏信息
    "get_api_artists" : baseUrl + "/api/api/found_artists_home",                    // 发现艺人列表接口
    "get_api_pot_home" : baseUrl + "/api/api/found_pot_home",                       // 发现壶型列表接口
    "found_pot_list" : baseUrl + "/api/api/found_pot_list",                         // 发现壶型二级列表
    "get_list_artists" : baseUrl + "/api/api/found_artists_list",                   // 发现更多艺人列表接口
    "found_pot_detail" : baseUrl + "/api/api/found_pot_detail",                     // 发现壶型详细信息
    
    "get_api_plaster_home" : baseUrl + "/api/api/found_plaster_home",               // 发现泥料列表接口
    "get_api_plaster_detail" : baseUrl + "/api/api/found_plaster_detail",           // 发现泥料详情
    
    "get_api_goods_hot" : baseUrl + "/api/api/get_goods_hot",                       // 首页-特卖
    "get_api_goods_new" : baseUrl + "/api/api/get_goods_new",                       // 首页-新品
    "recommended" : baseUrl + "/api/api/recommended",                               // 搜索——推荐列表
    "search_technical" : baseUrl + "/api/api/search_technical",                     // 职称查询
    "search_to" : baseUrl + "/api/api/search",                                      // 点击搜索
    
    
    
    "livelist" : baseUrl + "/api/live/livelist",                                  // 视频列表  
    "livedetails" : baseUrl + "/api/live/livedetail",                             // 视频列表详情  
    "msgrecord" : baseUrl + "/api/room/msgrecord",                                  // 与客服聊天记录
    "sendmsg" : baseUrl + "/api/room/sendmsg",                                      // 向客服发送信息
    "add_swarm" : baseUrl + "/api/room/add_swarm",                                  // 加入群聊
    "leave_swarm" : baseUrl + "/api/room/leave_swarm",                              // 退出群聊
 



    "Cl_lcon" : baseUrl + "/api/api/get_goods_species",                               // 分类左侧列表 
    "login" : baseUrl + "/api/user/login",                                            // 登录  
    "logout" : baseUrl + "/api/user/logout",                                          // 退出登录  
    "edit_user_info" : baseUrl + "/api/user/edit_user_info",                          // 个人信息修改  

    "create_ft" : baseUrl + "/api/usergoods/create",                                   //添加返图
    "userorder" : baseUrl + "/api/user/userorder",                                     //发现页收藏检索
    "find_banner" : baseUrl + "/api/api/get_wikipedia_banner",                         //发现页banner图
    "figure" : baseUrl + "/api/usergoods/figure",                                      //获取返图列表
    "f_detail" : baseUrl + "/api/usergoods/detail",                                      //获取返图详情
    "getdetailwikipedia" : baseUrl + "/api/api/getdetailwikipedia",                 // 紫砂百科详情
    "reading_add" : baseUrl + "/api/reading/add",                                   // 阅读计数
    "praise_add" : baseUrl + "/api/praise/add",                                     // 点赞数   
    "get_detail_article" : baseUrl + "/api/api/get_detail_article",                 // 关于我们  常见问题  
    "get_benefit" : baseUrl + "/api/goods/benefit",                 // 新人福利    
    "get_userFigure" : baseUrl + "/api/user/figure",                 // 我发布的返图 
    "dele_userFigure" : baseUrl + "/api/user/figure_del",                 // 删除我的返图
    "get_userOrder" : baseUrl + "/api/user/userorder",                 // 获取我的订单
    // "search_to" : baseUrl + "/api/api/search",                                      // 点击搜索

    // "get_cart_count" : baseUrl + "/cart/get_cart_count",                 // 获取购物车数量

}
