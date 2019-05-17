<template>
    <div class="hello">
        <navbar :title="navTitle" :show-back="showBack"></navbar>
        <div class="page-content">
            <div class="record">
                <div class="record-color">全部</div>
                <div>已通过</div>
                <div>未通过</div>
            </div>

            <div>
                <div class="record-item" v-for="(item,index) in list" :key="index">
                    <div class="list-img">
                        <img src="../img/waichu.png" alt class="list-img-img">
                    </div>
                    <div class="list-con">
                        <div class="list-con1">{{item.username}}</div>
                        <div class="list-con2">{{item.cause}}</div>
                        <div class="list-con2">
                            {{item.type==1?'病假':'事假'}}：
                            <span class="color1" v-if="item.is_pass==1">
                                通过  
                            </span>
                            <span class="color2" v-if="item.is_pass==0">
                                未通过  
                            </span>

                            </div>
                    </div>
                    <div class="list-time">
                        <span>{{item.show_start_time}}</span>至<span>{{item.show_end_time}}</span>
                    </div>
                </div>

            </div>
            <!-- <div class="record-item">
                <div class="list-img">
                    <img src="../img/waichu.png" alt class="list-img-img">
                </div>
                <div class="list-con">
                    <div class="list-con1">张三</div>
                    <div class="list-con2">原因：拉肚子，吃坏了疼.....</div>
                    <div class="list-con2">病假：<span class="color1">通过</span></div>
                </div>
                <div class="list-time">
                    <span>05-14</span>至<span>05-15</span>
                </div>
            </div>
            <div class="record-item">
                <div class="list-img">
                    <img src="../img/waichu.png" alt class="list-img-img">
                </div>
                <div class="list-con">
                    <div class="list-con1">张三</div>
                    <div class="list-con2">原因：拉肚子，吃坏了疼.....</div>
                    <div class="list-con2">病假：<span class="color2">未通过</span></div>
                </div>
                <div class="list-time">
                    <span>05-14</span>至<span>05-15</span>
                </div>
            </div>
            <div class="record-item">
                <div class="list-img">
                    <img src="../img/waichu.png" alt class="list-img-img">
                </div>
                <div class="list-con">
                    <div class="list-con1">张三</div>
                    <div class="list-con2">原因：拉肚子，吃坏了疼.....</div>
                    <div class="list-con2">病假：<span class="color3">审核中</span></div>
                </div>
                <div class="list-time">
                    <span>05-14</span>至<span>05-15</span>
                </div>
            </div> -->
        </div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import navbar from "@/components/navbar"
import tabbar from "@/components/tabbar"
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      navTitle:"请假记录",
      showBack : true,

      list:[]
    };
  },
  created() {
      this.downloadData()
  },
  methods: {
      downloadData(){

          //  user_id
            //  token
          var dict = {
              user_id: this.$service.getUserId(),
              token: this.$service.getToken()
          }

          this.$api.getLeaveRecordRequest(dict,res=>{

              console.log(res.data)

              var list = res.data.data
              for(var item of list){

                var str = item.start_time
                str.replace("T"," ")
                console.log(str)
                item.show_start_time = (new Date(str)).Format("yy-MM-dd")

                var str = item.end_time
                str.replace("T"," ")
                item.show_end_time = (new Date(str)).Format("yy-MM-dd")

              }

              this.list = list

          },error=>{

          })

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

<style lang="scss" scoped>
.page-content{
    position:absolute;
    left: 0;
    top: 1.28rem;
    width: 100%;
    bottom: 0.98rem;
    overflow-y: scroll;
}
.record{
    

    width: 100%;
    height: 0.86rem;
    font-size: 0.32rem;
    padding: 0 0.59rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.record-item{
    width: 100%;
    height: 1.62rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
}
.list-img{
    width: 1rem;
    height: 1rem;
    margin:0.31rem 0.47rem 0.31rem 0.3rem;
}
.list-img-img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    display: block;
}
.list-con{
    margin-top: 0.2rem;
}
.list-con1{
    font-size: 0.32rem;
}
.list-con2{
    font-size: 0.26rem;
    color: #8f8f8f;
}
.record-color{
    color: #3366cc;
}
.list-time{
    width: 3.22rem;
    font-size: 0.28rem;
    display: flex;
    justify-content: space-around;
    margin-top: 0.26rem;
    color: #747474;
}
.color1{
    color: #00cc99;
}
.color2{
    color: #ff3300;
}
.color3{
    color: #ff9900;
}
</style>