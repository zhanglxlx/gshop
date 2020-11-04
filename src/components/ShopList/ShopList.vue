<template>
   <div class="msite_shop_list">
        <h3 style="font-size:20px">附近商家</h3>
        <ul class="shop_detail">
          <li v-for="(item,index) in shopList">
            <img :src="item.imgname" alt="">
            <!-- <img :src="baseImgUrl+shop.iamge_path" alt=""> -->
            <div class="shop_detail_center">
              <h2 class="h_title">
                <span style="background:#F9D755;padding:2px">{{item.pinpai}}</span>
                <b>{{item.title}}</b>
              </h2>
              </p>
              <Star :score="item.pinfen" :size="24"></Star>
              <p>
                <span style="color:#F79A35">评分:{{item.pinfen}}</span>
                <span>月售{{item.shoudan}}单</span>
              </p>
              <p>
                <span>&yen;{{item.qisong}}起送</span>
                <span> / 配送费约&yen;{{item.peisong}}</span>
              </p>
            </div>
            <div class="shop_right">
                <p class="bzp">
                  <span>保</span>
                  <span>准</span>
                  <span>票</span>
                </p>
              <p class="zs">硅谷专送</p>
            </div>
          </li>
        </ul>
      </div>
</template>
<script>
import {mapState} from 'vuex'
import Star from '../Star/Star.vue'
  export default {
    data() {
      return {
        baseImgUrl:'https://raw.githubusercontent.com/W-Qing/Vue-MintShop/master/mintshop-client/src/components/ShopList/images/',
         shopList:[
            {imgname:require("./images/shop/00.jpg"),pinpai:"品牌",title:"嘉禾一品(温都水城)",pinfen:"5分",shoudan:"106",qisong:"20",peisong:"5"},
            {imgname:require("./images/shop/01.jpg"),pinpai:"品牌",title:"闪电哥哥慰问费22",pinfen:"4.6分",shoudan:"654",qisong:"20",peisong:"5"},
            {imgname:require("./images/shop/02.jpg"),pinpai:"品牌",title:"张军擀面皮",pinfen:"4.7分",shoudan:"145",qisong:"20",peisong:"5"},
            {imgname:require("./images/shop/03.jpg"),pinpai:"品牌",title:"川菜香",pinfen:"4.8分",shoudan:"567",qisong:"20",peisong:"5"},
            {imgname:require("./images/shop/04.jpg"),pinpai:"品牌",title:"湖南川菜",pinfen:"4.3分",shoudan:"125",qisong:"20",peisong:"5"},
            {imgname:require("./images/shop/05.jpg"),pinpai:"品牌",title:"兰州拉面",pinfen:"4.1分",shoudan:"200",qisong:"20",peisong:"5"}
        ]
      }
    },
    computed: {
      ...mapState(['shops'])
    },
    components:{
      Star
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .msite_shop_list
    width 100%
    padding 10px
    .shop_detail
      >li
        buttom-border-1px(#666666)
        display block
        height 80px
        margin-top 10px
        padding-bottom 10px
        img 
          width 30%
          float left
          border-radius 10px
        .shop_detail_center
          width 45%
          float left
          margin-left 10px
          .h_title
            font-size 16px
            margin-bottom 7px
            font-weight bold
          p
            margin-bottom 5px
            color #828282
            font-size 14px
      .shop_right
        float right
        width 22%
        margin-top 15px
        .bzp
          >span
            border-color #828282
            border-style solid
            border-width 1px
            padding 2px
            font-size 14px
        .zs
          width 73%
          padding 2px
          border-color $green
          border-style solid
          border-width 1px
          color $green
          font-size 12px
          margin-top 15px
          text-align center
</style>