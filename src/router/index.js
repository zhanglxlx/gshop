/**这是一个路由器对象的模块 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载

// import Msite from '../pages/Msite/Msite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
const Msite=()=>import('../pages/Msite/Msite.vue')
const Search=()=>import('../pages/Search/Search.vue')
const Order=()=>import('../pages/Order/Order.vue')
const Profile=()=>import('../pages/Profile/Profile.vue')


import Login from '../pages/Login/Login.vue' 
import Register from '../pages/Register/Register.vue' 
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue' 
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue' 
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue' 
import FooterGuide from '../components/FooterGuide/FooterGuide.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',component: Msite
    },
    {
      path: '/footerGuide',component: FooterGuide
    },
    {
      path: '/msite',component: Msite,meta:{showFooter:true} //返回路由组件的函数，只有执行此函数才会加载路由组件。这个函数在请求对应的路由路径时才会执行
    },
    {
      path: '/search',component: Search,meta:{showFooter:true}
    },
    {
      path: '/order',component: Order,meta:{showFooter:true}
    },
    {
      path: '/profile',component: Profile,meta:{showFooter:true}
    },
    {
      path: '/login',component: Login
    },
    {
      path: '/register',component: Register
    },
    {
      path: '/shop',component: Shop,children:[
        {
          path: '/shop/goods',component: ShopGoods
        },
        {
          path: '/shop/ratings',component: ShopRatings
        },
        {
          path: '/shop/info',component: ShopInfo
        },
      ]
    }
  ]
})
