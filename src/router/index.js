import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '@/views/user/login'
import main from '@/views/main/main'
import leave from '@/views/leave/leave'
import leaveRecord from '@/views/leave/leaveRecord'

import service from '@/service/service'

Vue.use(Router)

var r =  new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/main',
      name: 'main',
      component: main
    },{
      path: '/leave',
      name: 'leave',
      component: leave
    },{
      path: '/leaveRecord',
      name: 'leaveRecord',
      component: leaveRecord
    }
  ]
})


//每个路由切换之前添加钩子函数\
//参数1: to     目标路由
//参数2: from   来源路由
//参数3: next函数, 回调函数中调用,  用来执行下一步
r.beforeEach((to,from,next)=>{

  //console.log("beforeEach")
  //console.log(from.path)
  //console.log(to.path)
  
  //有些界面需要登录, 如果没有登录, 不让跳转
  var isLogin = service.getIsLogin()
  if(to.path == "/main" || to.path == "/leave" || to.path == "/leaveRecord"){

    if(isLogin==false){
      console.log("没有登录")

      r.replace("/login")

      return
    }
    

    
  }
  next();
})
//每个路由切换之后添加钩子函数
r.afterEach((to,from,next)=>{

  console.log("afterEach")

})


export default r;