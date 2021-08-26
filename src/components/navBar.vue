<template>
  <div class="navWrap">
    <van-tabs>
      <van-tab v-for="item in navData" :title="item.n">
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      msg: "navBar",
      navData:[{
          n:"关注",
          hot:0,
          link:"http://www.sian.com/a"
      },{
          n:"推荐",
          hot:0,
          link:"http://www.sian.com/a"
      },{
          n:"热榜",
          hot:0,
          link:"http://www.sian.com/a"
      },{
          n:"奥运",
          hot:0,
          link:"http://www.sian.com/a"
      },{
          n:"视频",
          hot:0,
          link:"http://www.sian.com/a"
      },{
          n:"小说",
          hot:0,
          link:"http://www.sian.com/a"
      },{
          n:"沈阳",
          hot:0,
          link:"http://www.sian.com/a"
      },{
          n:"抗议",
          hot:0,
          link:"http://www.sian.com/a"
      },{
          n:"小视频",
          hot:0,
          link:"http://www.sian.com/a"
      },{
          n:"要闻",
          hot:0,
          link:"http://www.sian.com/a"
      },]
    };
  },
};
</script>
<style scoped>
.navWrap{
    margin: .16rem 0;
    border-bottom: 1px solid #666;
}
</style>