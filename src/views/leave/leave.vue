<template>
    <div>
        <navbar :title="navTitle" :show-back="showBack" page="leave"></navbar>
        <div>
            <div class="con-begin con">
                <div>开始时间</div>
                <!-- <div>2019-05-14</div> -->

                <datetime :order-map="{
                        year: 1,
                        month: 2,
                        day: 3,
                        hour: 4,
                        minute: 5
                        }"
                        v-model="start_time"
                        format="YYYY-MM-DD HH:mm">
                </datetime>


            </div>
            <div class="con-begin con">
                <div>结束时间</div>
                <!-- <div>2019-05-15</div> -->
                <datetime :order-map="{
                        year: 1,
                        month: 2,
                        day: 3,
                        hour: 4,
                        minute: 5
                        }"
                        v-model="end_time"
                        format="YYYY-MM-DD HH:mm">
                </datetime>
            </div>
            <div class="con-over con">
                <div class="con-leave-left">总时间</div>
                <!-- <div class="con-leave-right">病假</div> -->
                <div  class="con-leave-right">
                    {{timeInterval}}
                </div>
            </div>
            <div class="con-leave">
                <div class="con-leave-left">请假类型</div>
                <!-- <div class="con-leave-right">病假</div> -->
                <selector class="con-leave-right" ref="defaultValueRef"  :options="list" v-model="defaultValue"></selector>
            </div>
            <div class="con-leave-cause">
                <div class="con-lan">&nbsp;</div>
                <div>请假原因</div>
            </div>
            <div class="con-leave-content">
                <textarea v-model="cause" name="" id="" cols="30" rows="10" placeholder="请输入你的请假原因..." class="con-text"></textarea>
            </div>
            <div class="btn">
                <div @click="dealSend" class="btn-one" to="">提交申请</div>
                <div @click="dealCancel" class="btn-two" to="">取消</div>
            </div>
        </div>

        <toast v-model="show" type="text">{{msg}}</toast>


        <tabbar></tabbar>
    </div>
</template>

<script>
import  navbar from "@/components/navbar"
import  tabbar from "@/components/tabbar"

import { Datetime, Group, XButton } from 'vux'

import { Selector } from 'vux'

import { Toast, XSwitch } from 'vux'


export default {
    data (){
        return{
            msg:"",
            navTitle:"请假",
            showBack:true,

            start_time:"2019-01-01 00:00:00",
            end_time:"2019-01-02 00:00:00",

            list:[{key: '1', value: '病假'}, {key: '2', value: '事假'}],
            defaultValue: 1,

            cause:"121",

            timeInterval:"112",

            show:false

        }
    },
    created(){
        this.computeTimeInterval()
    },
    methods:{
        dealSend(){

            console.log("dealSend")

            //检测输入的值
            //  结束时间必须大于开始时间
            let startTime = new Date(this.start_time); // 开始时间
            let endTime = new Date(this.end_time); // 结束时间
            if(startTime >= endTime){
                this.msg = "结束时间早于开始时间, 请重新选择时间"
                this.show = true
                return
            }

            if(this.cause == ""){
                this.msg = "请输入请假原因"
                this.show = true
                return
            }


            //发起请假申请
            //参数
            //  user_id
            //  start_time
            //  end_time
            //  type
            //  cause
            //  token
            var dict = {
                user_id: this.$service.getUserId(),
                start_time: this.start_time,
                end_time: this.end_time,
                type: this.defaultValue,
                cause: this.cause,
                token: this.$service.getToken()
            }
            this.$api.sendLeaveRecordRequest(dict,(res)=>{
                console.log(res.data)

                if(res.data.code == 1){
                    this.msg = "提交请假申请成功"
                    this.show = true
                }else{
                    this.msg = "提交请假申请失败 info"+res.data.info
                    this.show = true
                }
            },error=>{

            })


            //显示是否成功

        },
        dealCancel(){

            //弹框, 显示是否退出, 输入的信息,没有

            //返回上个界面

        },

        computeTimeInterval(){


            let startTime = new Date(this.start_time); // 开始时间
            let endTime = new Date(this.end_time); // 结束时间
            let usedTime = endTime - startTime; // 相差的毫秒数

            usedTime = Math.abs(usedTime) 
            this.timeInterval = usedTime;

            

            let days = Math.floor(usedTime / (24 * 3600 * 1000)); // 计算出天数
            let leavel = usedTime % (24 * 3600 * 1000); // 计算天数后剩余的时间
            let hours = Math.floor(leavel / (3600 * 1000)); // 计算剩余的小时数
            let leavel2 = leavel % (3600 * 1000); // 计算剩余小时后剩余的毫秒数
            let minutes = Math.floor(leavel2 / (60 * 1000)); // 计算剩余的分钟数
            this.timeInterval =  days + '天' + hours + '时' + minutes + '分';


           
        }
    },
    watch:{
        start_time(){
            this.computeTimeInterval()
        },
        end_time(){
            this.computeTimeInterval()
        }
    },
    components:{
        navbar:navbar,
        tabbar:tabbar,
        Datetime:Datetime,
        Group:Group,
        XButton:XButton,
        Selector,
        Toast
    },
    mounted(){
        // this.$parent.navTitle="请假"
        // this.$parent.showBack = true
    }
}
</script>

<style lang="scss" scoped>
.con{
    font-size: .32rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .3rem;
    box-sizing: border-box;
}
.con-begin{
    width: 100%;
    height: 1.06rem;
    border-bottom: 1px solid #ccc;
    line-height: 1.28rem;
}
.con-over{
    width: 100%;
    height: 1.16rem;
    line-height: 0.86rem;
}
.con-leave{
    height: .86rem;
    background: #f4f4f4; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.3rem;
}
.con-leave-left{
    font-size: .32rem;
}
.con-leave-right{
    font-size: .28rem;
}
.con-leave-cause{
    height: 1.1rem;
    font-size: 0.28rem;
    line-height: 1.54rem;
    display: flex;
    overflow: hidden;
}
.con-leave-content{
    height: 3.8rem;
    box-sizing: border-box;
    border-top:1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
.con-lan{
    width: 0.05rem;
    height: 0.27rem;
    background: #476fe0;
    margin-left: 0.3rem;
    margin-top: 0.63rem;
    margin-right: 0.1rem;
}
.con-text{
    width: 100%;
    height: 3.6rem;
    padding: 0 0.3rem;
    box-sizing: border-box;
    font-size: 0.28rem;
    line-height: 0.88rem;
    letter-spacing: 0.02rem;
    outline: 0;
}
.btn{
    width: 100%;
    height: 1.97rem;
    margin-top: 1.09rem;
}
.btn-one{
    display: block;
    width: 100%;
    height: 0.88rem;
    font-size: 0.36rem;
    background: #33cc99;
    color: #fff;
    text-align: center;
    line-height: 0.88rem;
    // box-sizing: border-box;
}
.btn-two{
    display: block;
    font-size: 0.26rem;
    line-height: 1.09rem;
    text-align: center;
    color: red;
}
</style>