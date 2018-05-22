<template>
  <div class="wrapper">
    <div class="logo-bar">
      <div class="site-info">
        <h1>手机网易网</h1>
      </div>
      <div class="site-search">
        <div class="site-wrapper">
          <span class="site-icon"></span>
          <span class="site-text"></span>
        </div>
        <input type="text" @focus="showsearch()">
      </div>
    </div>
    <search ref="search"></search>
  </div>
</template>

<script>
  import search from '../components/search'
  export default {
    methods: {
      showsearch () {
        this.$refs.search.show()
      }
    },
    components: {
      search
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    position relative
    .logo-bar
      display flex
      padding 5px
      flex-direction row
      -webkit-box-align center
      -webkit-box-orient horizontal
      -webkit-box-direction normal
      align-items center
      height 50px
      weight 100%
      background-color #ee1a1a
      .site-info
        width 20%
        -webkit-order 1
        -ms-flex-order 1
        order 1
      h1
        width 70px
        height 20px
        background url('../images/logo-site.png') no-repeat 50%
        -webkit-background-size contain;
        background-size contain;
        font-size 0
        color #fff
    .site-search
      position relative
      width 70%
      height 80%
      border-radius 50px
      order 2
      .site-wrapper
        position absolute
        top 30%
        left 15%
      .site-icon
        margin-left -20px
        display inline-block
        width 20px
        height 20px
        background url('../images/search.png') no-repeat 50%
        background-size 100%
      .site-text
        height 20px
        color white
        display inline-block
        vertical-align bottom
      input
        width 65%
        height 35px
        line-height 100%
        font-size 110%
        color #fff
        font-family '宋体'
        outline none
        padding 2px 10px 2px 40px
        border-radius 50px
        border 1px solid #ee1a1a
        background-color rgba(255, 255, 255, 0.3)
        transition width 0.5s
        -webkit-transition: width 0.5s;
      input:focus
        width 75%
</style>
