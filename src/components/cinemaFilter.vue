<template>
  <div class="cinemaFilter">
    <van-nav-bar title="影视剧">
      <template #right>
        <van-icon name="search" size=".6rem" />
      </template>
    </van-nav-bar>
    <!-- 筛选条件 -->
    <van-tabs v-model="active1" type="card" @change="tabsChangeFn1">
      <van-tab name="a_1" title="全部分类"></van-tab>
      <van-tab name="a_2" title="电影"></van-tab>
      <van-tab name="a_3" title="纪录片"></van-tab>
      <van-tab name="a_4" title="少儿"></van-tab>
      <van-tab name="a_5" title="综艺"></van-tab>
      <van-tab name="a_6" title="动漫"></van-tab>
    </van-tabs>
    <van-tabs v-model="active2" type="card" @change="tabsChangeFn2">
      <van-tab name="b_1" title="全部地区"></van-tab>
      <van-tab name="b_2" title="内地"></van-tab>
      <van-tab name="b_3" title="港台地区"></van-tab>
      <van-tab name="b_4" title="美国"></van-tab>
      <van-tab name="b_5" title="泰国"></van-tab>
      <van-tab name="b_6" title="日本"></van-tab>
    </van-tabs>
    <van-tabs v-model="active3" type="card" @change="tabsChangeFn3">
      <van-tab name="c_1" title="全部类型"></van-tab>
      <van-tab name="c_2" title="动作"></van-tab>
      <van-tab name="c_3" title="家庭"></van-tab>
      <van-tab name="c_4" title="爱情"></van-tab>
      <van-tab name="c_5" title="戏剧"></van-tab>
      <van-tab name="c_6" title="古装"></van-tab>
    </van-tabs>
    <van-tabs v-model="active4" type="card" @change="tabsChangeFn4">
      <van-tab name="d_1" title="为你推荐"></van-tab>
      <van-tab name="d_2" title="最热"></van-tab>
      <van-tab name="d_3" title="最新"></van-tab>
      <van-tab name="d_4" title="最多评论"></van-tab>
    </van-tabs>
    <!-- 筛选视频列表 -->
    <div class="filterCinemaWrap">
      <ul>
        <li v-for="item in filterCinemaArr">
          <img :src="item.image" alt="封面" />
          <span
            ><a :href="item.path" target="_blank">{{ item.title }}</a></span
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "cinemaFilter",
  data() {
    return {
      msg: "放映厅赛选组件",
      filterCinemaArr: {},
      active1: "a_1",
      active2: "b_1",
      active3: "c_1",
      active4: "d_1",
      //   回传数据
      filterObj: {
        a: "a_1",
        b: "b_1",
        c: "c_1",
        d: "d_1",
      },
    };
  },
  created() {
    axios.get("/getWangYiNews").then((_result) => {
      this.filterCinemaArr = _result.data.result;
    });
  },
  methods: {
    tabsChangeFn1(_v) {
      this.filterObj.a = _v;
      this.filterCinemaDataFn(this.filterObj);
    },
    tabsChangeFn2(_v) {
      this.filterObj.b = _v;
      this.filterCinemaDataFn(this.filterObj);
    },
    tabsChangeFn3(_v) {
      this.filterObj.c = _v;
      this.filterCinemaDataFn(this.filterObj);
    },
    tabsChangeFn4(_v) {
      this.filterObj.d = _v;
      this.filterCinemaDataFn(this.filterObj);
    },
    //根据筛选条件返回数据方法
    filterCinemaDataFn(_obj){
        console.log(_obj);
    }
  },
};
</script>
<style scoped>
ol,
ul,
li {
  list-style: none;
}
.filterCinemaWrap {
  margin-left: 20px;
}
.filterCinemaWrap li {
  float: left;
  width: 33%;
}
.filterCinemaWrap li img {
  width: 90%;
}
.filterCinemaWrap li span {
  width: 90%;
  display: block;
  font-size: 0.33rem;
}
.filterCinemaWrap li span a {
  color: #000;
}
</style>