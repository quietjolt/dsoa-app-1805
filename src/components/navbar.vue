<template>
  <div class="navbar">
    <div class="nav">
      <div>
          <div @click="dealback" v-if="showBack"><img src="../views/img/返回.png" alt="" class="nav-img"></div>
      </div>
      <div class="nav-title">{{title}}</div>
      <div>
          <router-link to="/record" v-if="showBack">
              <img src="../views/img/时间3.png" alt="" class="nav-img">
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "navbar",
    props : ['title','showBack'],
    data () {
        return {
            msg : 'hello world',
        }
    },
    methods : {
        dealback(){
            this.$router.back()
        }
    },
    created(){
        console.log(this.navTitle)
        console.log(this.title)
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
