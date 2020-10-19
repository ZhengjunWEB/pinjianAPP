import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',                       // token
    token_type:'',                  // token 类型
    user_info:[],                   // 个人信息
    IdArrayTrue:[],                 // 购物车选中
    live_address:'',                // 播放端地址
    live_id:'',                     // 播放聊天室id
    rouId:'',                       // 跳转Id

    user_dizhi:[],                  // 地址


    user_tifo:[],                   // useriofo 详细地址



  },
  mutations: {
      //  购物车状态 
      changeIdArray(state,data){
        state.IdArrayTrue = data;
      },
      changeuser_info_one(state,data){
        state.token = data;
      },
       changeuser_info_two(state,data){
        state.token_type = data;
      },
      changeuser_info_san(state,data){
        state.user_info = data;
      },
      Change_live_address(state,data){
        state.live_address = data;
      },
      Change_live_id(state,data){
        state.live_id = data;
      },
      Change_rouId(state,data){
        state.rouId = data;
      },
      Change_user_dizhi(state,data){
        state.user_dizhi = data;
      },
      // useriofo 详细地址
      Change_user_tifo(state,data){
        state.user_tifo = data;
      },

    }
})
