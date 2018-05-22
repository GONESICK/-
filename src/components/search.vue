<template>
  <transition name="show">
    <div class="detail-wrapper" v-show="showflag">
      <div class="logo-bar">
        <div class="site-info">
          <h2>手机网易网</h2>
        </div>
        <div class="site-search">
          <div class="site-wrapper">
            <span class="site-icon"></span>
          </div>
          <input type="text">
        </div>
        <div class="return-text" @click="turnback()">
          <span class="icon-arrow_lift"></span>
          <span>返回</span>
        </div>
      </div>
      <div class="search-contnet">
        <div class="searchtab">
          <span>热门搜索</span>
        </div>
        <div class="content-list">
          <ul>
            <li v-for="(items,index) in arr" :key="index"><span :style="`color:rgb(${250+index*1},${10+index*20},${50+index*50});padding-right:10px;`">{{index+1}}.</span>{{items}}</li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        showflag: false,
        arr: ['印度北部遭遇致命沙尘暴', '世乒赛朝韩突然宣布组成联队', '中国成功发射亚太', '揭西安无人机表演', '17岁少年撞伤7岁儿童', '夏威夷火山爆发', '俄胜利日阅兵', '范冰冰被要签名']
      }
    },
    methods: {
      show () {
        this.showflag = !this.showflag
      },
      turnback () {
        this.showflag = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .detail-wrapper
    height 100%
    width 100%
    background-color #f6f6f6
    transition all .2s linear
    position fixed
    top 0
    left 0
    z-index 30
    &.show-enter, &.show-leave-to
      transform translateY(100%)
    .logo-bar
      display flex
      align-items center
      height 40px
      weight 100%
      background-color #ee1a1a
      .site-info
        width 20%
        height 40px
        order 1
        flex 1
        border-right 1px solid #c00
      h2
        line-height 20px
        height 20px
        margin-top 7.5px
        margin-left 7.5px
        background url('../images/logo-site.png') no-repeat
        -webkit-background-size contain;
        background-size contain;
        font-size 0
        color #fff
    .site-search
      position relative
      width 60%
      height 80%
      border-radius 50px
      order 2
      .site-wrapper
        position absolute
        top 30%
        left 15%
      .site-icon
        margin-left -10px
        display inline-block
        width 20px
        height 20px
        background url('../images/search.png') no-repeat
        background-size 80%
      input
        margin-left 10px
        width 70%
        height 30px
        line-height 30px
        font-size 100%
        color #fff
        font-family '宋体'
        outline none
        padding 0px 10px 0px 32px
        border-radius 50px
        border 1px solid #ee1a1a
        background-color rgba(255, 255, 255, 0.3)
      .site-text
        flex 3
        width 50%
        height 20px
        line-height 20px
        border-left 1px solid #f66
        order 2
        color white
        padding-left 5px
        font-size 13px
        .span-text
          margin-left 10%
          border 1px solid #f66
          border-radius 50px
          padding-left 3px
          padding-right 3px
    .return-text
        flex 1
        width 10%
        order 3
        color #fff
        text-align center
        height 25px
        line-height 25px
        & > .icon-arrow_lift
          padding-right 0px
    .search-contnet
      width 100%
      .searchtab
        margin-top 20px
        margin-left 10px
        color #888
    .content-list
      width 100%
      ul
        margin-top 15px
        & > li
          margin-top 8px
          margin-left 10px
          margin-right 10px
          border-top 1px solid #ccc
          padding-top 8px
</style>
