<template>
  <div class="mainWrap">
    <div class="toTop">
      <!-- 头部 -->
      <headerWrap></headerWrap>
      <!-- 导航 -->
      <navBar></navBar>
    </div>
    <!-- 新闻列表 -->
    <newsList></newsList>
    <!-- 底部导航栏 -->
    <footerBar></footerBar>
  </div>
</template>

<script>
// @ is an alias to /src
import headerWrap from "@/components/headerWrap";
import navBar from "@/components/navBar";
import newsList from "@/components/newsList";
import footerBar from "@/components/footerBar";

export default {
  name: "indexWrap",
  data() {
    return {
      msg: "首页容器",
    };
  },
  components: {
    headerWrap,
    navBar,
    newsList,
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
