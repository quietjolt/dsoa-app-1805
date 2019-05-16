import axios from 'axios' 


//定义网址
var host = "http://127.0.0.1:3000/"


//类型: GET
//参数1: username
//参数2: password
//  http://127.0.0.1:3000/api/wap/user/login?username=zhangsan&password=123
var loginUrl = host + "api/wap/user/login"




//定义get请求函数
var ajaxGet = (url,params,sucsess,fail)=>{
    if(sucsess == undefined){
        sucsess = ()=>{}
    }
    if(fail == undefined){
        fail = ()=>{}
    }
    axios.get(url,{params:params}).then(sucsess).catch(fail)
}

//login
var loginRequest = (params,sucsess,fail)=>{
    ajaxGet(loginUrl,params,sucsess,fail)
}

export default {
    ajaxGet,
    loginRequest
}