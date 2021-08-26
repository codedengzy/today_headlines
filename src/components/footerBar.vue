<template>
  <div class="footerBar">
    <van-tabbar
      v-model="active"
      active-color="#fa5858"
      @change="footerChangeFn"
    >
      <van-tabbar-item>
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.homeactive : icon.homeinactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>西瓜视频</span>
        <template #icon="props">
          <img :src="props.active ? icon.playactive : icon.playinactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>放映厅</span>
        <template #icon="props">
          <img :src="props.active ? icon.cinemaactive : icon.cinemainactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>{{ footerUserTxt }}</span>
        <template #icon="props">
          <img :src="props.active ? icon.loginactive : icon.logininactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import home_red from "../assets/footerImg/home_red.png";
import home_grey from "../assets/footerImg/home_grey.png";

import play_red from "../assets/footerImg/play_red.png";
import play_grey from "../assets/footerImg/play_grey.png";

import cinema_red from "../assets/footerImg/cinema_red.png";
import cinema_grey from "../assets/footerImg/cinema_grey.png";

import login_red from "../assets/footerImg/login_red.png";
import login_grey from "../assets/footerImg/login_grey.png";

export default {
  name: "footerBar",
  data() {
    return {
      msg: "footerBar",
      active: 0,
      footerUserTxt: "未登录",
      loginState:0,
      icon: {
        homeactive: home_red,
        homeinactive: home_grey,

        playactive: play_red,
        playinactive: play_grey,

        cinemaactive: cinema_red,
        cinemainactive: cinema_grey,

        loginactive: login_red,
        logininactive: login_grey,
      },
    };
  },
  created() {
    //  localStorage.clear();
    let _u_name = localStorage.getItem("u_name");
    let _p_word = localStorage.getItem("p_word");
    console.log(_u_name + "," + _p_word);
    if (_u_name !== null && _p_word !== null) {
      this.footerUserTxt = "已登录";
      this.loginState=1;
    } 
  },
  mounted() {
    this.active = Number(localStorage.getItem("footerInx"));
  },
  methods: {
    footerChangeFn(_inx) {
      // console.log(_inx);
      localStorage.setItem("footerInx", _inx);
      let _pathName='';
      if (this.loginState===1) {
        _pathName='userCenter';
      }else{
        _pathName='login';
      }
      switch (_inx) {
        case 0:
          this.$router.push({ name: "indexWrap" });
          break;
        case 1:
          this.$router.push({ name: "playWrap" });
          break;
        case 2:
          this.$router.push({ name: "cinemaWrap" });
          break;
        case 3:
          this.$router.push({ name: _pathName });
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
</style>