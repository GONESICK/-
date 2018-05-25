<template>
  <transition name="show">
    <div class="detail-wrapper" v-show="showflag">
          <div class="logo-bar">
            <div class="site-info">
              <h2>手机网易网</h2>
            </div>
            <div class="site-text">
              <span>{{newitem.category}}频道</span>
              <span class="span-text">{{newitem.tcount}}人跟帖</span>
            </div>
            <div class="return-text" @click="turnback()">
              <span class="icon-arrow_lift"></span>
              <span>返回</span>
            </div>
          </div>
        <div class="new-content-wrapper" ref="content">
          <div>
            <div class="new-title">
              <h1 class="title-text">{{newitem.title}}</h1>
              <div class="new-info">
                <span>{{newitem.ptime}}</span>
                <span>{{newitem.source}}</span>
              </div>
            </div>
            <div class="content">
              <div class="photo" >
                <img :src="picture" alt="">
              </div>
              <div class="box-text">
                <p v-for="(items,index) in newitem.article" :key="index">
                  {{items}}
                </p>
                <p style="text-align: right">(责任编辑：{{newitem.editor}})</p>
              </div>
            </div>
          </div>
        </div>
      <div class="scroll-box" v-show="isbutton">
        <div class="icon-backtop" @click="backtop()">
          <i class="icon-arrow-up2"></i>
        </div>
        <div class="icon-backhome" @click="backhome()">
          <i class="icon-home"></i>
        </div>
      </div>
      </div>
  </transition>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    created () {
          this.$nextTick(() => {
          })
    },
    props: {
      tname: {
        type: String
      },
      tcount: {
        type: Number
      },
      newitem: {
        type: Object
      },
      picture: {
        type: String
      }

    },
    data () {
      return {
        title: null,
        showflag: false,
        isbutton: false
      }
    },
    methods: {
      show () {
        this.showflag = !this.showflag
        this.$nextTick(() => {
          if (!this.scroll) {
            this.detailscroll = new IScroll(this.$refs.content, {
              click: true,
              scrollY: true,
              bounce: false,
              probeType: 3
            })
            let self = this
            this.detailscroll.on('scroll', function () {
              self.scrollY = Math.abs(Math.round(this.y))
              let newlist = self.$refs.content
              let height = newlist.offsetHeight
              if (self.scrollY >= height) {
                self.isbutton = true
              } else {
                self.isbutton = false
              }
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      turnback () {
        this.showflag = false
        this.detailscroll.destroy()
      },
      backtop () {
        this.detailscroll.scrollTo(0, 0)
      },
      backhome () {
        this.$router.push('./provide')
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
    transform translateX(100%)
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
      width 20%
      order 3
      color #fff
      text-align center
      height 25px
      line-height 25px
      & > .icon-arrow_lift
        padding-right 0px
  .new-title
    position relative
    margin-left 15px

    margin-right 15px
    padding-top 20px
    .title-text
      font-size 26px
      font-weight 550
      line-height 35px
    .new-info
      padding-top 20px
      color #888
  .new-content-wrapper
    width 100%
    top 40px
    bottom 0
    position absolute
    overflow hidden
    background-color #f6f6f6
    .photo
      text-align center
      margin-top 15px
      img
        width 336px
        height 210px
    .box-text
      margin 10px 15px
      & > p
        text-indent 2em
        padding-top 25px
        text-align justify
        font-size 20px
  .scroll-box
    position fixed
    z-index 1
    right 30px
    bottom 110px
    .icon-backtop
      visibility visible
      pointer-events auto
      opacity 1
      & > .icon-arrow-up2
        color #fff
        -webkit-border-radius 100%
        border-radius 100%
        background-color rgba(0,0,0,.5)
        font-size 20px
        line-height 40px
        position relative
        display inline-block
        width 40px
        height 40px
        cursor pointer
        text-align center
    .icon-backhome
      visibility visible
      pointer-events auto
      opacity 1
      & > .icon-home
        color #fff
        -webkit-border-radius 100%
        border-radius 100%
        background-color rgba(0,0,0,.5)
        font-size 20px
        line-height 40px
        position relative
        display inline-block
        width 40px
        height 40px
        cursor pointer
        text-align center
        margin-top 3px
</style>
