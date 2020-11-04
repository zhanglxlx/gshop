<template>
  <div id="app">
    <HeaderTop title="我 的"></HeaderTop>
    <!-- 登录注册 -->
    <div class="login_reg">
      <span class="item_icon">
        <i class="iconsize icon iconfont icon-wode"></i>
      </span>
      <router-link :to="userInfo._id ? '/userinfo' :'/login'" class="pro_login">
        <p>
          <span v-if="!userInfo.phone">{{userInfo.name ||'登录 / 注册'}}</span>
        </p>
        <p>
          <span class="item_icon">
            <i class="phone icon iconfont icon-dingdan"></i>
          </span>
          <!-- <span>暂无绑定手机号</span> -->
          <span>{{userInfo.phone || '暂无绑定手机号'}}</span>
        </p>
      </router-link>
      <div class="login_back">&gt;</div>
    </div>
    <!-- 余额 积分 优惠 -->
    <div class="jifen">
      <div class="jifen_text">
        <p><span style="color:#F19C38">0.00</span>元</p>
        <p>我的余额</p>
      </div>
      <div class="jifen_text">
        <p><span style="color:#F1674A">0</span>个</p>
        <p>我的优惠</p>
      </div>
      <div class="jifen_text" style="border:none">
        <p><span style="color:#83BD3C">0.00</span>分</p>
        <p>我的积分</p>
      </div>
    </div> 
    <!-- 我的订单 -->
    <ul class="order_jifen">
      <li>
        <span class="dingdan icon iconfont icon-dingdan"></span>
        <span> 我的订单</span>
        <span class="login_back">&gt;</span>
      </li>
      <li>
        <span class="jifensc icon iconfont icon-jifen"></span>
        <span> 积分商城</span>
        <span class="login_back">&gt;</span>
      </li>
      <li>
        <span class="huiyuan icon iconfont icon-huiyuan"></span>
        <span> Mint外卖会员卡</span>
        <span class="login_back">&gt;</span>
      </li>
      <li>
        <span class="dingdan icon iconfont icon-fuwuzixun"></span>
        <span> 服务中心</span>
        <span class="login_back">&gt;</span>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    HeaderTop
  },
  data() {
    return {};
  },
  methods: {
    login(path){
      this.$router.push(path)
    }
  },
};
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl';
#app
  background #F5F5F5
  .pro_me
    text-align: center;
    background: $green;
    buttom-border-1px(#ffffff);
    color: #ffffff;
    font-size: 18px;
    padding: 10px;
  .login_reg
    width: 100%;
    background: $green;
    color: #ffffff;
    font-size: 16px;
    display: inline-flex;
    .iconsize
      font-size: 95px;
      margin: 15px;
    .pro_login
      margin-top 25px
      margin-left -10px
      text-decoration none
      display block
      color: #ffffff;
      >p
        margin-bottom 10px 
        .phone
          font-size 18px
    .login_back
      margin-left 100px
      margin-top 30px
  .jifen
    background #ffffff
    display inline-flex
    color #787878
    width 100%
    font-size 18px
    padding 20px
    text-align center
    .jifen_text
      width 31%
      border-right 1px solid #cccccc
      p
        margin-bottom 10px
        span
          font-size 26px
  .order_jifen
    margin-top 15px
    color #666666
    font-size 18px
    li
      buttom-border-1px(#e4e4e4);
      padding 10px
      position relative
      background #ffffff
    li:last-child
      buttom-border-1px(#ffffff);
      margin-top 15px
    .dingdan
      font-size 26px
      color $green
    .jifensc
      font-size 26px
      color #DB7966
    .huiyuan
      font-size 26px
      color #E2B070
    .login_back
      position absolute
      top 10px
      right 10px
</style>