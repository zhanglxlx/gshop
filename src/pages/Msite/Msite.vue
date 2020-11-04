<template>
  <div id="app">
    <section class="msite">
    <!-- 首页头部 -->
     <!-- <HeaderTop :title="address.name"> -->
     <HeaderTop title="陕西省西安市雁塔区高新路50号南洋国际">
       <span class="header_search" slot="search" @click="login('/search')">
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
     <ShopList></ShopList>
    </section>
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import {mapState} from 'vuex'
import { reqCategorys } from '../../../../Vue-MintShop/mintshop-client/src/api'
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
  computed: {
    ...mapState(['address','categorys']),
    /**
     * 根据categorys一位数组生成一个二维数组
     * 小数组中的元素个数最大是8
     */
    categorysArr(){
      const {categorys}=this
      //准备一个空的二维数组
      const arr=[];
      // 准备一个小数组（最大长度为8）
      let minArr=[]
      //遍历categorys
      categorys.forEach(c=>{
        // 如果当前小数组已经满了，创建一个新的
        if(minArr.length===8){
          minArr=[]
        }
        //如果minArr是空的，将小数组保存在大数组中
        if(minArr.length===0){
          arr.push(minArr)
        }
        minArr.push(c)
      })
      return []
    }
  },
  methods: {
    login(path){
      this.$router.push(path)
    }
  },
  mounted() {
    // 发送请求
    this.$store.dispatch('getCategorys')
    // setTimeout(()=>{
    //   new Swiper(".swiper-container",{
    //     autoplay: true,
    //     loop:true, //可以循环轮播
    //     pagination:{
    //       el:'.swiper-pagination',
    //       clickable:true,
    //     },//这样写小圆点就有了
    //   })
    // },200000)
  },
  watch: {
    //categorys(value){//categorys数组是有数据了，在异步更新界面之前执行
      // 创建一个swiper实例对象，来实现轮播
    // 使用setTimeout()可以实现效果，但不是最好的
      // setTimeout(()=>{
      //   new Swiper(".swiper-container",{
      //   autoplay: true,
      //   loop:true, //可以循环轮播
      //   pagination:{
      //     el:'.swiper-pagination',
      //     clickable:true,
      //   },//这样写小圆点就有了
      // })
      // },100)
     // }
      // 界面更新就立即创建swiper对象
      getCategorys(){
        this.$nextTick(()=>{//一旦完成界面更新，立即调用（此条语句要写在数据更新以后）
          new Swiper(".swiper-container",{
            autoplay: true,
            loop:true, //可以循环轮播
            pagination:{
              el:'.swiper-pagination',
              clickable:true,
            },//这样写小圆点就有了
          })
        })
      }
  }
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