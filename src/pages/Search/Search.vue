<template>
  <div class="search">
      <HeaderTop title="搜 索"></HeaderTop>
      <p class="p_search">
        <input type="text" placeholder="请输入搜索的关键字" @focus="inpSearch()" id="keyvalue">
        <button class="search_btn">搜 索</button>
      </p>
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components:{
    HeaderTop
  },
  methods: {
    inpSearch(){
      var keyvalue=document.getElementById("keyvalue")
      keyvalue.style.outline="none"
    }
  },
}
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';
.search
  background #F5F5F5
  .p_search
    font-size 16px
    border 1px solid #cccccc
    padding-left 5px
    input
      width 72%
      margin 0
      height 35px
      border none
    button 
      width 25%
      padding 10px
      border none 
      border-radius 5px
      background $green
      color #ffffff
</style>