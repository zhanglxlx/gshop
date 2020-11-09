<template>
  <div id="app">
    <router-view/>
    <!-- <FooterGuide v-show="$route.meta.showFooter"/> -->
    <FooterGuide/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FooterGuide from "./components/FooterGuide/FooterGuide.vue"

export default {
  components:{
    FooterGuide
  },
  computed: {
    ...mapActions(['getAddress'])
  },
  mounted() {
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUserInfo')
    // this.getAddress()
    // this.getUserInfo()
  },

}
</script>

<style lang="stylus">
  .app
    font-size 14px
    color #666
    width: 100%
    height: 100%
    background #f5f5f5
</style>
