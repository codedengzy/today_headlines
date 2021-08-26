<template>
  <div class="mainWrap">
    <div class="toTop">
      <!-- 头部 -->
      <headerWrap></headerWrap>
      <!-- 导航 -->
      <navBar></navBar>
    </div>
    <h1>{{msg}}</h1>
    <!-- 底部导航栏 -->
    <footerBar></footerBar>
  </div>
</template>

<script>
// @ is an alias to /src
import headerWrap from "@/components/headerWrap";
import navBar from "@/components/navBar";
import footerBar from "@/components/footerBar";

export default {
  name: "playWrap",
  data() {
    return {
      msg: "西瓜视频",
    };
  },
  components: {
    headerWrap,
    navBar,
    footerBar,
  },
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
</style>
