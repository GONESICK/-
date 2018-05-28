<template>
  <div class="main-wrapper">
    <div class="header">
      <div class="header-text">课程</div>
      <div class="icon-search"></div>
    </div>
    <div class="lesson-list" ref="contentlist">
      <div>
        <div class="detail">
          <ul v-for="(items, index) in booklist" :key="index">
            <li>
              <img :src=items.cover alt="">
              <div class="main-text">
                <span>{{items.course_name}}</span>
                <div class="icon-hat">主讲：{{items.main_teacher}}</div>
                <div class="icon-clock">{{items.class_hour}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    created () {
      this.$axios.get('/api/result')
        .then((res) => {
          res = res.data
          this.booklist = res.data
          this.$nextTick(() => {
            this._initScroll()
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    data () {
      return {
        booklist: []
      }
    },
    methods: {
      _initScroll () {
        this.wrapperScroll = new IScroll(this.$refs.contentlist, {
          click: true,
          scrollY: true
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .main-wrapper
    width 100%
    height 100%
    .header
      width 100%
      height 45px
      border-bottom 1px solid #ccc
      background-color #fff
      .header-text
        float left
        line-height 45px
        padding-left 8px
      .icon-search
        float right
        color blue
        line-height 45px
        padding-right 10px
    .lesson-list
      width 100%
      position absolute
      overflow hidden
      height 85.5%
      .detail
        width 100%
        background-color #ccc
      .detail > ul
        padding-top 5px
        padding-left 3px
      .detail > ul > li
        display flex
        background-color #fff
        width 100%
        height 80px
      .detail > ul > li > img
        width 150px
        height 80px
      .detail > ul > li > .main-text
        position relative
        left 3%
        top 10%
        flex 1
        & > div
          color #888
          font-size 14px
          margin-top 8px
</style>
