<template>
  <div id="app">
    <!-- 首页头部 -->
      <header class="header">
      <!-- 搜所 -->
        <!-- <span class="header_search">
          <i class="icon iconfont icon-sousuo"></i>
        </span> -->
        <!-- 订单 -->
        <!-- 使用插槽 -->
        <slot name="search"></slot>
        <p class="header_title">{{title}}</p>
        <!-- 我的 -->
        <!-- <span class="header_login">
          <span class="header_login_text" @click="login('/login')">登录 | </span>
          <span @click="login('/register')"> 注册</span>
        </span> -->
        <slot name="login_reg"></slot>
      </header>
  </div>
</template>
<script>

export default {
  props:{
    title:String
  },

  data() {
    return {
      
    }
  }
};
</script>
<style  lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.header
  width 100%
  height 45px
  background-color $green
  color #fff
  line-height 40px
  display inline-flex
  .header_search
    width 16%
    padding-top 5px
    padding-left 5px
    .icon-sousuo
      font-size 30px
  .header_title
    width 100%
    text-align center 
    overflow hidden
    font-size 18px
  .header_login
    width 40%
    text-align right
</style>