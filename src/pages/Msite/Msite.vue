<template>
  <div id="app">
    <section class="msite">
    <!-- 首页头部 -->
     <HeaderTop title="陕西省西安市雁塔区高新路50号南洋国际">
       <span class="header_search" slot="search">
          <i class="icon iconfont icon-sousuo"></i>
        </span>
       <span class="header_login" slot="login_reg">
          <span class="header_login_text" @click="login('/login')">登录 | </span>
          <span @click="login('/register')"> 注册</span>
      </span>
     </HeaderTop>
      <!-- 首页导航 -->
      <swiper class="swiper-container">
        <swiper-slide class="swiper-slide">
          <ul  class="msite_nav">
            <li class="nav_list"  v-for="(item,index) in images" :key="index">
              <img :src="item.path" alt="">
              <p>{{item.title}}</p>
            </li>
          </ul>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <ul  class="msite_nav">
            <li class="nav_list"  v-for="(item,index) in img2" :key="index">
              <img :src="item.path" alt="">
              <p>{{item.title}}</p>
            </li>
          </ul>
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
      <!-- 首页附近商家 -->
     <ShopList></ShopList>s
    </section>
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      images:[
        {name:"01img",path:require("./images/nav/01.jpg"),title:"川湘菜1"},
        {name:"02img",path:require("./images/nav/02.jpg"),title:"炒饭"},
        {name:"03img",path:require("./images/nav/03.jpg"),title:"冒菜"},
        {name:"04img",path:require("./images/nav/04.jpg"),title:"川湘菜3"},
        {name:"05img",path:require("./images/nav/05.jpg"),title:"过桥米线"},
        {name:"06img",path:require("./images/nav/06.jpg"),title:"川湘菜5"},
        {name:"07img",path:require("./images/nav/07.jpg"),title:"酸菜鱼"},
        {name:"08img",path:require("./images/nav/08.jpg"),title:"川湘菜7"},
      ],
      img2:[
        {name:"09img",path:require("./images/nav/01.jpg"),title:"冒菜"},
        {name:"10img",path:require("./images/nav/02.jpg"),title:"炒菜"},
        {name:"11img",path:require("./images/nav/03.jpg"),title:"冒菜"},
        {name:"12img",path:require("./images/nav/04.jpg"),title:"米线"},
        {name:"13img",path:require("./images/nav/05.jpg"),title:"冒菜"},
        {name:"14img",path:require("./images/nav/06.jpg"),title:"盖饭"},
        {name:"15img",path:require("./images/nav/07.jpg"),title:"大杂烩"},
        {name:"16img",path:require("./images/nav/08.jpg"),title:"拌面"},
      ]
    }
  },
  components: {
    HeaderTop,
    Swiper,
    SwiperSlide,
    ShopList
  },
  methods: {
    login(path){
      this.$router.push(path)
    }
  },
  mounted() {
    // 创建一个swiper实例对象，来实现轮播
    new Swiper(".swiper-container",{
      autoplay: true,
      loop:true, //可以循环轮播
      pagination:{
        el:'.swiper-pagination',
        clickable:true,
      },//这样写小圆点就有了
    })
  },
};
</script>
<style  lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.msite //首页
  width 100%
  .msite_nav
    buttom-border-1px(#666666)
    height 190px
    // background #ffffff
    padding 10px
    .nav_list
      width 19%
      height 75px
      margin 10px
      float left
      text-align center
      img 
        width 100%
        border-radius 50%
  
</style>