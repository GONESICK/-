<template>
  <div class="main-wrapper">
    <div class="header">
      <div class="header-text">读书</div>
      <div class="icon-search"></div>
    </div>
    <div class="menu-content">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for='(item,index) in booklist'
              class="menu-item"
              :class="{current: currentIndex===index}"
              @click="selectMenu(index)"
              :key='index'>
            <div class="menu-name">
              <span class=name>{{item.name}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="content-list" ref="foodsWrapper">
        <ul>
          <li v-for="(items, index) in booklist" :key="index" ref="foodList">
            <div class="icon-book"><span>{{items.name}}</span>---------</div>
            <ul>
              <li v-for="(item, index) in items.list" :key="index" :style="newcolor[index]" class="colorlist">
                <img :src=item.book_cover alt="">
                <div class="text">
                  <span class="first">{{item.book_name}}</span>
                  <span class="second">出版社：{{item.publishing}}</span>
                  <span class="second">出版时间：{{item.publishtime}}</span>
                </div>
              </li>
            </ul>
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
      this.$axios.get('/api/read')
        .then((res) => {
          res = res.data
          this.booklist = res.data
          this.$nextTick(() => {
            this._initScroll()
            this._calculateHeight()
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    mounted () {
      this.$nextTick(() => {
        this.num = 20
        for (let i = 0; i < this.num; i++) {
          this.newcolor.push(this.newcolor[i])
        }
      })
    },
    data () {
      return {
        booklist: [],
        listHeight: [],
        scrollY: 0,
        newcolor: [{background: 'red'}, {background: 'green'}, {background: 'orange'}, {background: 'blue'}, {background: 'purple'}, {background: 'green'}]
      }
    },
    methods: {
      _initScroll () {
        this.menuScroll = new IScroll(this.$refs.menuWrapper, {
          click: true
        })
        this.foodsScroll = new IScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3
        })
        let self = this
        // 给foodList做滚动监听
        this.foodsScroll.on('scroll', function () {
          self.scrollY = Math.abs(Math.round(this.y))
        })
      },
      selectMenu (index) {
        console.log(index)
        if (index !== this.currentIndex) {
          let height = this.listHeight[index] + 2
          this.foodsScroll.scrollTo(0, -height, 300)
        }
      },
      _calculateHeight () {
        let foodList = this.$refs.foodList
        // 获取每一组左上角的y轴坐标
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i]
          height += item.clientHeight
          this.listHeight.push(height)
          console.log(item)
        }
      }
    },
    computed: {
      currentIndex () {
        for (let i = 0; i < this.listHeight.length - 1; i++) {
          let h1 = this.listHeight[i]
          let h2 = this.listHeight[i + 1]
          if (this.scrollY >= h1 && this.scrollY < h2) {
            console.log(this.scrollY)
            console.log(h1)
            console.log(h2)
            return i
          }
        }
        return 0
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .main-wrapper
    width 100%
    .header
      width 100%
      height 45px
      border-bottom 1px solid #ccc
      .header-text
        float left
        line-height 45px
        padding-left 8px
      .icon-search
        float right
        color blue
        line-height 45px
        padding-right 10px
    .menu-content
      display flex
      position absolute
      top 45px
      bottom 52px
      width 100%
      overflow hidden
      .menu-wrapper
        flex 0 0 110px
        width 110px
        background #f3f5f7
        .menu-item
          position relative
          width 100px
          height 54px
          padding 5px 5px
          line-height 14px
          font-size 0
          display table
          &.current
            position: relative
            z-index 10
            background #ccc
            font-weight 700
            margin-top -1px
          .menu-name
            display table-cell
            vertical-align middle
            .name
              font-size 15px
      .content-list
        flex 1
        font-size 0
        .icon-book
          width 100%
          height 30px
          font-size 15px
          padding-left 10px
          background-color deepskyblue
          color white
          & > span
            line-height 30px
            padding-left 10px
      .content-list > ul > li > ul > .colorlist
        margin-top 5px
        display flex
        & > img
          width 70px
          height 60px
          flex 0 0 70px
          margin-top 2.5%
          margin-bottom 2.5%
          margin-left 2%
        & > .text
          width 70%
          margin-left 5%
          margin-top 5%
          color white
        & > .text > .first
          display inline-block
          width 80%
          font-size 16px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        & > .text > .second
          display inline-block
          font-size 14px
          width 100%
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
</style>
