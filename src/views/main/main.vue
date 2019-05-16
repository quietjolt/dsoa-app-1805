<template>
  <div class="hello">
    <navbar :title="navTitle" :show-back="showBack"></navbar>
    <div class="content">
      <div class="con-img">
        <router-link class="con-text" to="/leave">
          <img src="../img/首页.png" alt>
          <span>请假</span>
        </router-link>
        <router-link class="con-text" to="/">
          <img src="../img/签到1.png" alt>
          <span>打卡</span>
        </router-link>
        <router-link class="con-text" to="">
          <img src="../img/waichu.png" alt>
          <span>外出</span>
        </router-link>
        <router-link class="con-text" to="/">
          <img src="../img/加班.png" alt>
          <span>加班</span>
        </router-link>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>


<script>
import tabbar from "@/components/tabbar"
import navbar from "@/components/navbar"

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      navTitle : "首页",
      showback : false
    };
  },
  created() {},
  methods: {
      showBack(){

      }
  },
  components: {
    tabbar: tabbar,
    navbar : navbar
  },
  computed: {},
  watch: {}
};
</script>

<style lang="scss">
.hello{
    width: 100%;
    // overflow: hidden;
}
.content{
    width: 100%;
}
.con-img {
//   width: 6.89rem;
  margin: 0.4rem auto;
  display: flex;
  justify-content: space-around;
}
.con-img img {
  width: 1.42rem;
  height: 1.42rem;
}
.con-img span {
  font-size: 0.3rem;
  text-align: center;
}
.con-text{
    display: flex;
    flex-direction: column;
}
</style>