<template>
  <div class="detail-wrapper">
    <div class="items-list" ref="playerlist">
      <div>
        <ul v-for="(items, index) in newvalue" :key="index" class="mainbox">
          <span class="title" v-if="index == 'video'">课程概述：{{items.title}}</span>
          <li class="listcontent">
            <span v-if="index == 'video'">课程类型：实例</span>
            <span v-if="index == 'video'">课程时长：{{items.class_hour}}{{index}}</span>
            <span v-if="index == 'video'">学习人数{{items.study_num}}</span>
            <span v-if="index == 'video'">学习时长：6小时25分</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['newvalue'],
    data () {
      return {
        valuelist: {}
      }
    },
    methods: {}
  }
</script>
<style lang="stylus" scoped>
  .detail-wrapper
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
      margin-top 5px
      .mainbox
        padding-left 15px
        padding-right 15px
        list-style none
        .title
          display block
          line-height 30px
          hieght 30px
          font-size 15px
          padding-bottom 5px
          border-bottom 1px solid #ccc
          width 100%
        .listcontent
          width 100%
          height 100%
          & > span
            display: block
            padding-top 20px
</style>
