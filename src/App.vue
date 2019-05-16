<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html{
  height: 100%;
}
body{
  height: 100%;
}
#app {
 height: 100%;
}
a{
  color: #444;
}
</style>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
