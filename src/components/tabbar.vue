<template>
    <div class="hello tabbar">
        <router-link to="/main" class="tab">
            <img src="../views/img/首页底.png" alt="">
            <span>首页</span>
        </router-link>
        <router-link to="/leave" class="tab">
            <img src="../views/img/消息.png" alt="">
            <span>消息</span>
        </router-link>
        <router-link to="/clockln" class="tab">
            <img src="../views/img/wode.png" alt="">
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.tabbar{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .98rem;
    border-top: 1px solid #ccc;
    font-size: .24rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.tabbar img { 
    width: .58rem;
    height: .6rem;
    margin-top: .06rem;
}
.tabbar a{
    color: #b6b6b6;
    text-decoration: none;
}
.tab{
    display: flex;
    flex-direction: column;
}
.tab span{
    text-align: center;
}
</style>