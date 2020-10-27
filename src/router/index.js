/**这是一个路由器对象的模块 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue' 
import Register from '../pages/Register/Register.vue' 
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
      path: '/msite',component: Msite,meta:{showFooter:true}
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
    }
  ]
})
