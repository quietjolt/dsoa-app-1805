<template>
  <div class="hello">
    <!-- login -->
    <div class="login">
      <div class="login-icon">
        <img src="../img/yunduo.png" alt class="login-icon-img">
      </div>
      <div class="login-user">
        <div class="login-user-icon">
          <img src="../img/个人.png" alt class="login-user-img">
          <input type="text" class="login-user-input" v-model="username">
        </div>
      </div>
      <div class="login-password">
        <div class="login-user-icon">
          <img src="../img/锁.png" alt class="login-user-img">
          <input type="password" class="login-user-input"  v-model="password">
        </div>
      </div>
      <div class="login-register" @click="dealLogin">登录</div>
      <div class="login-reg">
        <a href="#" class="login-reg-a">注册用户</a>
        <a href="#" class="login-reg-a">忘记密码</a>
      </div>
      <div class="login-company">
          东时软件公司出品
      </div>
    </div>

    <toast v-model="show" type="text">{{msg}}</toast>


  </div>
</template>

<script>

import { Toast, Group, XSwitch, XButton } from 'vux'

import service from '@/service/service'

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      username:"",
      password:"",
      show:false
    };
  },
  created() {

    //检测是否登录
    if(service.getIsLogin()){

      // 显示
      this.$vux.confirm.show({
        // 组件除show外的属性
        title:"直接登录",
        content:"是否直接登录",
        onCancel : () => {
          console.log(this) //当前 vm
        },
        onConfirm : () => {
          this.$router.push("/main")
        }
      })

    }

    

  },
  methods: {
    dealLogin(){
      console.log(this.username)

      if(this.username == ""){
        this.msg = "请输入用户名"
        this.show = true
        return 
      }

      if(this.username.length < 4){
        this.msg = "用户名至少4位"
        this.show = true
        return 
      }

      
      if(this.password == ""){
        this.msg = "请输入密码"
        this.show = true
        return 
      }

      if(this.password.length < 4){
        this.msg = "密码至少4位"
        this.show = true
        return 
      }

      //发起网络请求
      // var url = ""
      // this.axios.get(url).then(res=>{

      // })

      var p = {
        username:this.username,
        password:this.password
      }

      this.$api.loginRequest(p,(res)=>{
        console.log(res.data)

        if(res.data.code == 1){

          
          console.log("ok")
          //保存用户信息
          //存储到
          service.saveUserInfo(res.data.data)

          this.$router.push("/main")

        }else{
          this.msg = "登录失败, 请检查用户名和密码"
          this.show = true
        }

      },(error)=>{
        console.log(error)
      },)


    }
  },
  components: {
    Toast
  },
  computed: {},
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<style lang="scss" scoped>
.hello {
  height: 100%;
  background-color: #3366cc;
  font-size: 0.38rem;
  font-family: "微软雅黑";
}
.login {
  width: 6.1rem;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.login-icon {
  width: 2.08rem;
  height: 1.25rem;
  margin: 0 auto;
  margin-top: 1.91rem;
  box-sizing: border-box;
}
.login-user-icon input{
  color: white;
}
.login-icon-img {
  width: 2.08rem;
  height: 1.25rem;
}

//用户
.login-user {
  width: 6.1rem;
  height: 0.75rem;
  border-bottom: 0.01rem solid #fff;
  margin-top: 1rem;
}
.login-user-icon {
  margin: 0.09rem 0.11rem;
  display: flex;
}
.login-user-img {
  width: 0.5rem;
  height: 0.55rem;
}
.login-user-input {
  width: 5rem;
  height: 0.57rem;
  font-size: .38rem;
  border: 0;
  background-color: #3366cc;
  outline: 0;
  padding-left: .2rem;
  box-sizing: border-box;
}
//密码
.login-password {
  width: 6.1rem;
  height: 0.75rem;
  border-bottom: 0.01rem solid #fff;
  margin-top:.60rem;
}
//登录
.login-register{
  width: 6.1rem;
  height: .9rem;
  line-height: .9rem;
  text-align: center;
  border: 1px solid #fff;
  box-sizing: border-box;
  margin-top:1.2rem;
  color: #fff;
  border-radius: .5rem;
  font-size: .38rem;
  letter-spacing: .12rem;
}
.login-reg{
  display: flex;
  justify-content: space-between;
  margin-top: .4rem;
}
.login-reg-a{
  color: #fff;
  font-size: .26rem;
}
.login-company{
  width: 6.1rem;
  height: .26rem;
  font-size: .26rem;
  color: #fff;
  text-align: center;
  // margin-top: 3.72rem;
  position: absolute;
  bottom: .3rem;
}
</style>
