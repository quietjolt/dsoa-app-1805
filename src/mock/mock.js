//导入mockjs文件
var Mockjs = require('mockjs')

//random
var Random = Mockjs.Random

//拦截请求
Mockjs.mock("http://127.0.0.1/api/front/user/login",()=>{

    var dict = {
        "code":1,
        "info":"登录成功",
        "data":{}
    }

    return dict

})