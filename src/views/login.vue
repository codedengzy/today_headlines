<template>
  <div class="loginWrap">
    <div class="loginBtn" @click="showLoginBtn">登录</div>
    <div class="loginForm" v-show="isLogin">
      <van-field v-model="username" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" placeholder="请输入密码" />
      <div style="margin: 0 auto; text-align: center">
        <van-button
          style="width: 40%; border-radius: 10px"
          type="primary"
          @click="loginBtn"
          >登录</van-button
        >
        <van-button
          style="width: 40%; margin-left: 0.2rem; border-radius: 10px"
          type="primary"
          @click="cancelBtn"
          >取消</van-button
        >
      </div>
    </div>
    <!-- 底部导航栏 -->
    <footerBar></footerBar>
  </div>
</template>

<script>
import footerBar from "@/components/footerBar";
import { Dialog } from "vant";

export default {
  name: "login",
  data() {
    return {
      msg: "登录页面",
      username: "",
      password: "",
      isLogin: false,
    };
  },
  components: {
    footerBar,
  },
  methods: {
    showLoginBtn() {
      this.isLogin = true;
    },
    loginBtn() {
      // username:aaa password:123
      if (this.username === "" || this.password === "") {
        Dialog.alert({ message: "用户名、密码不能为空" }).then(() => {
          this.username = "";
          this.password = "";
        });
      } else {
        if (this.username === "aaa" && this.password === "123") {
          Dialog.alert({
            message: "登录成功",
          }).then(() => {
            localStorage.setItem('u_name',this.username);
            localStorage.setItem('p_word',this.password);
            this.$router.push({ name: "userCenter" },()=>{
              localStorage.setItem("footerInx",3);
            });
          });
        } else {
          Dialog.alert({ message: "用户名密码错误！" }).then(() => {
            this.username = "";
            this.password = "";
          });
        }
      }
    },
    cancelBtn() {
      this.isLogin = false;
    },
  },
};
</script>
<style scoped>
.loginBtn {
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  border-radius: 100%;
  background-color: #fa5858;
  margin: 2rem auto;
  color: #fff;
  text-align: center;
  font-size: 0.8rem;
}
.loginForm {
  width: 80%;
  margin: 2rem auto;
}
</style>
