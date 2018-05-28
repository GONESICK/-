<template>
  <transition name="show">
    <div class="video-wrapper" v-show="showflag">
      <div class="header">
        <div class="header-text">课程</div>
        <div class="return" @click='fanhui()'>返回</div>
      </div>
      <div class="container">
        <div class="player">
          <video-player class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions"
          >
          </video-player>
        </div>
      </div>
      <div class="tab">
        <router-link to="/lesson"><div class="menu-items">课程提纲</div></router-link>
        <router-link to="/Detail"><div class="menu-items">课程详情</div></router-link>
        <router-link to="/course"><div class="menu-items">相关课程</div></router-link>
      </div>
      <router-view :newvalue="newme"></router-view>
    </div>
  </transition>
</template>

<script>
  export default {
    created () {
    },
    props: {
      newme: {
        type: Object
      },
      newurl: {
        type: String
      }
    },
    data () {
      return {
        url: '',
        showflag: false,
        playerOptions: {
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          autoplay: false,
          muted: false,
          loop: false,
          preload: 'auto',
          language: 'zh-CN',
          aspectRatio: '16:9',
          fluid: false,
          sources: [{
            type: '',
            src: 'http://test.mingrisoft.com/uploads/video/sz/Ccc/113/100/1115185991313100127_51pgf.mp4'
          }],
          notSupportedMessage: '此视频暂无法播放，请稍后再试',
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true
          }
        }
      }
    },
    methods: {
      show () {
        this.showflag = !this.showflag
          this.$nextTick(() => {
            this.url = this.newurl
          })
      },
      fanhui () {
        this.showflag = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .video-wrapper
    width 100%
    height 80%
    position fixed
    top 40px
    z-index 30
    background-color #cccccc
    transition all .2s linear
    &.show-enter, &.show-leave-to
      transform translateX(100%)
    .header
      position fixed
      z-index 90
      top 0
      left 0
      background-color #fff
      width 100%
      height 40px
      .header-text
        float left
        line-height 45px
        padding-left 8px
      .return
        float right
        color blue
        line-height 45px
        padding-right 10px
    .tab
      display flex
      width 100%
      height 40px
      background-color #fff
      & > a
        flex 1
        text-align center
        line-height 40px
        color #000
      & > div
        line-height 40px
    .items-list
      width 100%
      background-color #f2f2f2
      position absolute
      height 70.5%
      overflow hidden
    .items-list > div > ul > li
      height 35px
      border-top 1px solid #ccc
      & > span
        line-height 35px
        padding-left 35px
        color #888
        font-size 15px
</style>
