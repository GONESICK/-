<template>
  <div id="app">
    <hoper></hoper>
    <div class="tab" ref="tablist">
      <ul>
        <li><router-link to="/provide">推荐</router-link></li>
        <li><router-link to="/news">新闻</router-link></li>
        <li><router-link to="/fun">娱乐</router-link></li>
        <li><router-link to="/healthy">健康</router-link></li>
        <li><router-link to="/fina">财经</router-link></li>
        <li><router-link to="/country">国际</router-link></li>
        <li><router-link to="/soid">军事</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import hoper from './components/header'
  import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'App',
  data () {
    return {
      news: {}
    }
  },
  created () {
    this.$axios.get('/api/news')
      .then((res) => {
        res = res.data
        this.news = res.data
        this.$nextTick(() => {
          if (!this.scroll) {
            this._initScroll()
          } else {
            this.scroll.refresh()
          }
        })
      })
      .catch((error) => {
        alert(error)
      })
  },
  methods: {
    _initScroll () {
      this.menuScroll = new IScroll(this.$refs.tablist, {
        click: true,
        scrollX: true
      })
    }
  },
  components: {
    hoper
  }
}
</script>

<style lang="stylus" scoped>
.tab
  width 100%
  height 30px
  overflow hidden
  white-space nowrap
  & > ul
    display inline-block
    line-height 30px
    & > li
      display inline-block
      list-style none
      text-align center
      padding 0 15px
      a
        color #8c8c8c
</style>
