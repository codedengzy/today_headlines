<template>
  <div class="cinemaWrap">
    <div class="toTop">
      <!-- 头部 -->
      <headerWrap></headerWrap>
      <!-- 导航 -->
      <navBar></navBar>
    </div>
    <!-- 筛选条件 -->
    <div class="filterWrap">
      <ul>
        <li>爱情</li>
        <li>喜剧</li>
        <li>动作</li>
        <li>古装</li>
        <li @click="showPopup">筛选</li>
      </ul>
    </div>
    <!-- 弹出层 start-->
    <van-popup 
    v-model="isShow"
    closeable
    close-icon="arrow-left"
    close-icon-position="top-left"
    position="right"
    :style="{ height: '100%',width:'100%' }"
    >
      <cinemaFilter></cinemaFilter>
    </van-popup>
    <!-- 弹出层 end -->
    <!-- 视频列表 -->
    <div 
    class="cinemaList"
    v-for="(item,inx) in cinemaArr">
      <span>{{item.title}}</span>
      <img :src="item.image">
    </div>
    <!-- 底部导航栏 -->
    <footerBar></footerBar>
  </div>
</template>

<script>
// @ is an alias to /src
import headerWrap from "@/components/headerWrap";
import navBar from "@/components/navBar";
import footerBar from "@/components/footerBar";
import cinemaFilter from "@/components/cinemaFilter"
import axios from "axios"

export default {
  name: "cinemaWrap",
  data() {
    return {
      msg: "放映厅",
      cinemaArr:{},
      isShow:false
    };
  },
  created(){
    axios.get("/getWangYiNews").then((_result) => {
      this.cinemaArr = _result.data.result;
    });
  },
  components: {
    headerWrap,
    navBar,
    footerBar,
    cinemaFilter
  },
  methods:{
    showPopup() {
      this.isShow = true;
    },
  }
};
</script>
<style scoped>
.mainWrap{
  position:relative;
  margin-top: 200px;
}
.toTop{
  position:fixed;
  left: 0;
  top: 0;
  background-color: white;
}
/* 视频列表 */
.cinemaList{
  clear: both;
}
.cinemaList span{
  font-size: .3rem;
}
.cinemaList img{
  display: block;
  width: 95%;
  margin: 0 auto;
}
.filterWrap{
  margin-top: 2.8rem;
  font-size: .4rem;
}
.filterWrap li{
  float: left;
  background-color: #eee;
  margin-right: .2rem;
  padding: 10px;
  border-radius: 20px;
}
</style>
