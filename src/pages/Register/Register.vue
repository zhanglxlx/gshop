<template>
  <div class="register">
    <span @click="back()"
      class="icon iconfont icon-fanhui"
      style="font-size: 25px; padding: 5px"
    ></span>
    <h2 class="register_logo">Mini外卖</h2>
    <div class="register_header_title">
      <a href="javascript:;" class="active">手机号注册</a>
    </div>
    <div>
      <section class="register_message">
        <input type="text" maxlength="11" placeholder="请输入手机号"  @focus="boxSh()" id="reg" />
        <button disabled="disabled" class="get_verification">获取验证码</button>
      </section>
      <section class="register_message">
        <input type="text" maxlength="11" placeholder="验证码"  @focus="boxSh()" id="reg" />
        <button disabled="disabled" class="get_verification">验证</button>
      </section>
      <section class="register_message">
        <input type="text" maxlength="11" placeholder="请输入密码"  @focus="boxSh()" id="reg" />
      </section>
      <section class="register_message">
        <input type="text" maxlength="11" placeholder="确认密码"  @focus="boxSh()" id="reg" />
        <button disabled="disabled" class="get_verification">记住密码</button>
      </section>
      <section class="register_hint">
       <input type="radio"> 温馨提示：每一个手机号只能注册一次，是否同意注册
      </section>
      <button class="myLogin">注 册</button>
      <button class="myLogin" @click="login()">登 录</button>
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
    back(){
      this.$router.go(-1)
    },
    login(){
      this.$router.push("/login")
    },
    boxSh(){
      var reg=document.getElementById("reg")
      reg.style.outline = "none" 
    }
  },
};
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';
.register
  width 100%
  .register_logo
    color: $green;
    margin-top: 80px;
    font-size: 40px;
    text-align: center;
  .register_header_title
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
  .register_message
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
  .register_verification
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
  .register_hint
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
</style>