

var saveUserInfo = (user)=>{
    localStorage.isLogin = 1
    localStorage.user = JSON.stringify(user)
}

var clearUserInfo = (user)=>{
    localStorage.removeItem("isLogin")
    localStorage.removeItem("user")
}

var getIsLogin = ()=>{
    return localStorage.isLogin == 1
}

var getUserId = ()=>{
    if(!localStorage.isLogin){
        return null
    }

    var user = JSON.parse(localStorage.user)
    return user.id
}

var getUsername = ()=>{
    if(!localStorage.isLogin){
        return null
    }

    var user = JSON.parse(localStorage.user)
    return user.username
}

export default {
    saveUserInfo,
    clearUserInfo,
    getIsLogin,
    getUserId,
    getUsername
}