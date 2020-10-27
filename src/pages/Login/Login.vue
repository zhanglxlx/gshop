<template>
  <div id="app">
    <span @click="back()"
      class="icon iconfont icon-fanhui"
      style="font-size: 25px; padding: 5px"></span>
    <h2 class="login_logo">Mini外卖</h2>
    <div class="login_header_title">
      <a href="javascript:;" class="active" :class="{ on: loginWay }" @click="isLoginWay()">短信登录</a>
      <a href="javascript:;" :class="{ on: !loginWay }" @click="isLoginWay()" >密码登录</a>
    </div>
    <div :class="{ on: loginWay }">
      <section class="login_message">
        <input type="tel" maxlength="11" placeholder="请输入手机号" @focus="boxSh()" id="reg" />
        <button disabled="disabled" class="get_verification">获取验证码</button>
      </section>
      <section class="login_verification">
        <input type="tel" maxlength="8" placeholder="验证码" @focus="boxSh()" id="reg" />
      </section>
      <section class="login_hint">
        温馨提示：未注册帐号的手机号，登录时将自动注册，且代表已同意
        <a ref="javascript:;">《用户服务协议》</a>
      </section>
      <button class="myLogin">登 录</button>
      <button class="myLogin" @click="register()">注 册</button>
      <p class="me_login">关于我们</p>
    </div>
    <div :class="{ on: !loginWay }" class="pwd_login">
      <section>
        <section class="login_message">
          <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" @focus="boxSh()" id="reg" />
        </section>
        <section class="login_verification">
          <input type="tel" maxlength="8" placeholder="密码" @focus="boxSh()" id="reg" />
          <div class="switch_button off"></div>         
        </section>
        <section class="login_message">
          <input type="text" maxlength="11" placeholder="验证码" @focus="boxSh()" id="reg" />
          <!-- <img class="get_verification" src="./images/captcha.svg" alt="captcha" /> -->
        </section>
      </section>
      <button class="myLogin">登 录</button>
      <button class="myLogin" @click="register()">注 册</button>
      <p class="me_login">关于我们</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginWay: true,
    };
  },
  methods: {
    isLoginWay(){
      this.loginWay=false
    },
    register(){
      this.$router.push('/register')
    },
    back(){
      this.$router.go(-1)
    },
    boxSh(){
      var reg=document.getElementById("reg")
      reg.style.outline="none" 
    }
  },
};
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';

.login_logo
  color: $green;
  margin-top: 80px;
  font-size: 40px;
  text-align: center;
.login_header_title
  width 100%
  text-align center
  margin-top 25px
  a
    color #666666
    text-decoration none
    font-size 22px
    font-weight bold
    padding 10px
  .active
    color $green
    text-decoration underline
.login_message
  padding 5px
  font-size 16px
  width 90%
  margin 15px
  border 1px solid #E6E6E6
  border-radius 10px
  >input 
    border none
    width 72%
    height 40px
  >button
    height 40px
    background #ffffff
    border  none
.login_verification
  padding 5px
  font-size 16px
  width 90%
  margin 15px
  border 1px solid #E6E6E6
  border-radius 10px
  >input 
    border none
    width 72%
    height 40px 
.login_hint
  font-size 16px
  color #cccccc
  padding 15px
.myLogin
  background $green
  color #ffffff
  font-size 22px
  width 94%
  height 50px
  margin 10px
  border none 
  border-radius 10px
.me_login
  text-align center
  margin-top 15px
  color #ccc
.pwd_login
  position absolute
  top 190px
  left 0
  width 100%
  border 1px solid red
  display none
</style>