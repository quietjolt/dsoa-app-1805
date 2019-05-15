<template>
  <div class="hello">
    <x-header>2017年满意度调查</x-header>

    <tab>
      <tab-item selected >已发货</tab-item>
      <tab-item >未发货</tab-item>
      <tab-item >全部订单</tab-item>
    </tab>

    test1
    222
    <div class="test">
      test1
    </div>

    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/demo/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../assets/demo/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../assets/demo/icon_nav_cell.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>


  </div>
</template>

<script>

import { XHeader, Confirm} from 'vux'

import { Tab, TabItem } from 'vux'

import { Tabbar, TabbarItem } from 'vux'


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  components: {
    Confirm,
    XHeader,

    Tab,
    TabItem,

    Tabbar, 
    TabbarItem
  },

  created(){

    var url = "http://127.0.0.1/project/dou/api/index.php?m=book&a=list"
    this.axios.get(url).then(res=>{
      console.log(res.data)
    })

    var url = "http://127.0.0.1/api/front/user/login"
    this.axios.get(url).then(res=>{
      console.log(res.data)
    })

    console.log("tabIndex = "+this.$store.getters.tabIndex)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<style lang="scss">

$test-color:red;
.test{
  color: $test-color;
}

</style>
