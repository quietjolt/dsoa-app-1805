<template>
  <div class="navbar">
    <div class="nav">
      <div>
          <div @click="dealback" v-if="showBack"><img src="../views/img/返回.png" alt="" class="nav-img"></div>
      </div>
      <div class="nav-title">{{title}}</div>
      <div>
          <router-link :to="rightUrl" v-if="page =='leave'">
              <img src="../views/img/时间3.png" alt="" class="nav-img">
          </router-link>
          <div v-if="page =='main'" @click="dealLogout">
              <x-icon  type="ios-close-empty" size="30"></x-icon>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "navbar",
    props : ['title','showBack',"page"],
    data () {
        return {
            msg : 'hello world',
            rightUrl:""
        }
    },
    created(){
        //console.log("this.page = "+this.page)
        if(this.page == "leave"){
            this.rightUrl = "/leaveRecord"
        }
    },
    watch:{
        page(){
            if(this.page == "leave"){
                this.rightUrl = "/leaveRecord"
            }
        }
    },
    methods : {
        dealback(){
            this.$router.back()
        },

        dealLogout(){
            // 显示
            this.$vux.confirm.show({
                // 组件除show外的属性
                title:"退出",
                content:"是否退出,返回登录界面",
                onCancel : () => {
                    console.log(this) //当前 vm
                },
                onConfirm : () => {
                    this.$service.clearUserInfo()
                    this.$router.replace("/login")
                }
            })
        }
    }
};
</script>


<style lang="scss">
.navbar {
  width: 100%;
  height: 1.28rem;
  background: #476fe0;
  color: #fff;
  font-size: 0.4rem;
  line-height: 1.5rem;
  letter-spacing: 0.14rem;
}
.nav {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.nav-img{
    width: 0.43rem;
    height: 0.43rem;
}
.nav-title{
    // font-size: 
}
</style>
