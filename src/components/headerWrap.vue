<template>
  <div class="headerWrap">
    <van-row>
      <van-col span="21">
        <van-search
          v-model="searchValue"
          shape="round"
          background="#fa5858"
          placeholder="请输入搜索关键词"
        />
      </van-col>
      <van-col span="3">
        <van-button  round type="info">
          +
          <i>发布</i>
          </van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import '@/assets/resetVant.css'

export default {
  name: "headerBar",
  data() {
    return {
      msg: "headerBar",
      searchValue:''
    };
  },
};
</script>
<style scoped>
.headerWrap {
  background-color: #fa5858;
  width: 100%;
}
</style>