import axios from 'axios' 


//定义网址
var host = "http://127.0.0.1:3000/"
host = "http://dsoa.hechen.shop:3000/"

//类型: GET
//参数1: username
//参数2: password
//  http://127.0.0.1:3000/api/wap/user/login?username=zhangsan&password=123
var loginUrl = host + "api/wap/user/login"



//添加请假记录
//  /api/wap/user/send_clock_in_record
//参数
//  user_id
//  start_time
//  end_time
//  type
//  cause
//  token
//案例: http://127.0.0.1:3000/api/wap/user/send_leave_record?user_id=2&start_time=2019-10-10&end_time=2019-10-10&type=1&cause=肚子疼&token=32242342343
var sendLeaveRecordUrl = host + "api/wap/user/send_leave_record"


//获取请假记录
//  /api/wap/user/get_clock_in_record
//参数
//  user_id
//  token
//案例: http://127.0.0.1:3000/api/wap/user/get_leave_record?user_id=2&token=32242342343
var getLeaveRecordUrl = host + "api/wap/user/get_leave_record"



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

//sendClockInRecord
var sendLeaveRecordRequest = (params,sucsess,fail)=>{
    ajaxGet(sendLeaveRecordUrl,params,sucsess,fail)
}

//getClockInRecord
var getLeaveRecordRequest = (params,sucsess,fail)=>{
    ajaxGet(getLeaveRecordUrl,params,sucsess,fail)
}

export default {
    ajaxGet,
    loginRequest,
    sendLeaveRecordRequest,
    getLeaveRecordRequest
}