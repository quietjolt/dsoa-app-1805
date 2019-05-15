<template>
  <div class="hello">
      <!-- login -->
    <div class="test">

    </div>

    <div class="login-button">
      登录
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  created(){

    

  },
  methods:{

  },
  components: {
    
  },
  computed:{

  },
  watch:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<style lang="scss">
.hello{
  height: 100%;
  background-color: #3366cc;
}

.test{
  width: 3.75rem;
  height: 3.75rem;
  background-color: red;
}

.login-button{
  width: 6.1rem /* 610/100 */;
  height: .88rem /* 88/100 */;
  background-color: blue;
  margin-left: .71rem;
  font-size: .36rem;

  text-align: center;
  line-height: .88rem;
}

</style>
