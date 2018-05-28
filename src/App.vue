<template>
  <div id="app">
    <div class="footer">
      <router-link to="/Face"><div class="icon-home2"></div></router-link>
      <router-link to="/Book"><div class="icon-hat"></div></router-link>
      <router-link to="/Read"><div class="icon-books"></div></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="stylus" scoped>
.footer
  width 100%
  display flex
  height 50px
  position fixed
  bottom 0px
  background-color #ccc
  border-top 1px solid #ccc
  z-index 30
  & > a
    flex 1
    text-align center
    line-height 50px
    color #000
    & > div
      line-height 50px
</style>
