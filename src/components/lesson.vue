<template>
  <div class="lesson-wrapper">
    <div class="items-list" ref="menulist">
      <div>
        <ul v-for="(items, index) in newvalue.dCatalog" :key="index">
          <li v-for="(item, index) in items.video" :key="index">
            <span>{{item.title}}</span>
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
        this.wrapperScroll = new IScroll(this.$refs.menulist, {
          click: true,
          scrollY: true
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .lesson-wrapper
    width 100%
    .items-list
      width 100%
      background-color #f2f2f2
      position absolute
      height 70.3%
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
