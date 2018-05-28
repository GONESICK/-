<template>
  <div class="lesson-wrapper">
    <div class="items-list" ref="courselist">
      <div>
        <ul v-for="(items, index) in newvalue.relatedCourse" :key="index" class="contentlist">
          <li>
            <img :src=items.cover alt="">
            <div class="textlist">
              <span class="title">{{items.title}}</span>
              <span class="course">{{items.course_id}}</span>
              <span class="hour">{{items.class_hour}}</span>
              <div class="newtext"><span class="num">{{items.study_num}}</span><span class="people">人学习</span></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  export default {
    created () {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    props: ['newvalue'],
    methods: {
      _initScroll () {
        this.wrapperScroll = new IScroll(this.$refs.courselist, {
          click: true,
          scrollY: true
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .lesson-wrapper
    position: absolute
    z-index 90
    width 100%
    height 100%
    .items-list
      width 100%
      background-color #f2f2f2
      position absolute
      height 70.5%
      overflow hidden
      .contentlist
        width 100%
        height 100%
      .contentlist > li
        margin-top 5px
        background-color #fff
        display flex
        margin-bottom 5px
        img
          width 110px
          height 75px
        .textlist
          flex 1
          height 100%
          width 100%
          .newtext
            float right
            margin-right 5px
          & > span
            display block
            height 20px
            line-height 20px
            padding-left 6px
          .title
            font-size 14px
            font-family '宋体'
          .course
            font-size 12px
            color #888
          .hour
            font-size 12px
            color #888
          .num
            font-size 13px
            color green
            text-align right
            font-family "Segoe UI Symbol"
            display inline-block
          .people
            font-size 12px
            color #888
            text-align right
            display inline-block
</style>
