<template>
  <div class="mainWrap">
    <h1>{{msg}}</h1> 
    <van-button type="danger" @click="logoutBtn">退出登录</van-button>
    <!-- 底部导航栏 -->
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from "@/components/footerBar";
import { Dialog } from "vant";

export default {
  name: "userCenter",
  data() {
    return {
      msg: "用户中心页",
    };
  },
  components: {
    footerBar,
  },
  methods:{
    logoutBtn(){
      
      Dialog.alert({message:'退出登录'}).then(()=>{
          localStorage.clear();
          this.$router.push({name:'login'},()=>{
            localStorage.setItem('footerInx',3);
          });
      });
    }
  }
};
</script>
<style scoped>
.mainWrap{
  position:relative;
  margin-top: 200px;
}

</style>
