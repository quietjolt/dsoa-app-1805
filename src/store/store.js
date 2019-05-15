import Vue from 'vue'

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//axios 不是必要的
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)



//定义对象 store
const store = new Vuex.Store({

    state:{

        tabIndex:0,
        // navTitle:"Demo",
        // pageType:"list",    //detail
        // theme:"normal",      //night,dark,...Vue..
        // list:[]

    },

    getters:{
        //默认传入state
        // navTitle(state){
        //     return state.navTitle
        // },

        tabIndex(state){
            return state.tabIndex
        },

        // theme(state){
        //     return state.theme
        // },

        // list(state){
        //     return state.list
        // }
    },

    mutations:{

        // //只要修改这一句,  整个程序中所有用到的地方都改了
        // setNavTitle(state, data){
        //     state.navTitle = data
        // },

        // setTabIndex(state, data){
        //     state.tabIndex = data
        // },

        // setTheme(state,data){
        //     state.theme = data
        // },

        // setList(state,data){
        //     state.list = data
        // }

    },

    actions:{

        // //异步函数
        // requestBookListData(state,data){

        //     var url = netapi.bookListUrl
        //     axios.get(url).then(res=>{

        //         //
        //         var list = res.data.result
        //         console.log(list)

        //         //同步修改数据
        //         this.commit("setList",list)

        //     })

        // }
    }

})



//导出store
export default store;

