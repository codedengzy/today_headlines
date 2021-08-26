<template>
  <div class="newsList">
    <!-- 置顶新闻 -->
    <div v-for="item in newsArr">
      <img :src="item.image" alt="新闻图片">
      <p><a target="_blank" :href="item.path">{{ item.title }}</a></p>
      <span>{{ item.passtime }}</span>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "newsList",
  data() {
    return {
      msg: "newsList",
      // 新闻列表
      newsArr: {},
    };
  },
  created() {
    axios.get("/getWangYiNews").then((_result) => {
      // console.log(_result.data);
      this.newsArr = _result.data.result;
    });
  },
};
</script>
<style scoped>
.newsList {
  margin: 0.04rem.3rem;
  font-size: 0.4rem;
}
.newsList span {
  font-size: 0.2rem;
  color: #666;
}
</style>