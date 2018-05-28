<template>
  <div class="main-wrapper">
    <div class="header">
      <div class="header-text">明日学院</div>
      <div class="twoma"></div>
      <div class="icon-search"></div>
    </div>
    <div class="content-box" ref="contentbox">
      <div>
        <div class="pic-play">
          <ul ref="box" class="picturn">
            <li v-for="(items, index) in imgarr" :key="index"><img :src='items' alt=""></li>
          </ul>
          <div class="small">
            <ul>
              <li v-for="items in imgarr.length-1" :key="items" :class='{active:items-1 == index}'></li>
            </ul>
          </div>
        </div>
        <div class="main-content">
          <div class="content1" style="background-color: orangered"><span>JAVA<a>(第四季)</a></span></div>
          <div class="content2" style="background-color: cornflowerblue"><span>C#</span></div>
          <div class="content3" style="background-color: forestgreen"><span>Oracle</span></div>
          <div class="content4" style="background-color: hotpink"><span>JAVA<a>(第三季)</a></span></div>
          <div class="content5" style="background-color: lightblue"><span>C++</span></div>
          <div class="content6" style="background-color: lightgreen"><span>Android</span></div>
          <div class="content7" style="background-color: rebeccapurple"><span>PHP</span></div>
          <div class="content8" style="background-color: darkgoldenrod"><span style="font-size: 14px">JavaScript</span>
          </div>
        </div>
        <div class="item-content">
          <div class="content-new">
            <div class="new-items">
              <span>新书上线</span>
              <p>新书上市，惠不可当;</p>
              <p>先到先得，福利多多!</p>
            </div>
            <div class="icon-clock"></div>
          </div>
          <div class="content-achievement">
            <div class="achieve-items">
              <span>成就排行</span>
              <p>看前辈学分排行，继续努力学习吧!</p>
            </div>
            <div class="icon-stats-bars2"></div>
          </div>
          <div class="content-book">
            <div class="book-items">
              <span>攻城宝典</span>
              <p>优秀书籍推荐</p>
            </div>
            <div class="icon-book"></div>
          </div>
          <div class="content-teacher">
            <div class="teacher-items">
              <span>明星讲师</span>
              <p>平台优秀讲师简介及课程</p>
            </div>
            <div class="icon-star-empty"></div>
          </div>
        </div>
        <div class="video-content">
          <div class="content-title">
            <span>发现课程</span>
          </div>
          <div class="video-main">
            <div class="item-one" v-for="(items, index) in newVideo" :key="index" @click="showdetail(items,items.video.file_path)">
              <img :src=items.video.cover alt="">
              <span class="title">{{items.video.title}}</span>
              <div class="items-text">
                <span class="catename">{{items.video.cate_name}}</span>
                <span class="studynum">{{items.video.study_num}}学习</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <shipin ref="playdetail" :newme="newplay" :newurl="url"></shipin>
  </div>
</template>
<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import shipin from '../components/shipin'

  export default {
    created () {
      this.$axios.get('/api/all')
        .then((res) => {
          res = res.data
          this.newVideo = res.data
          this.$nextTick(() => {
            this._initScroll()
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    mounted () {
      this.$nextTick(() => {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
          this.activeindex++
        }, 2500)
      })
    },
    data () {
      return {
        imgarr: [
          require('../images/1.jpg'),
          require('../images/2.jpg'),
          require('../images/3.jpg'),
          require('../images/1.jpg')
        ],
        timer: null,
        activeindex: 0,
        newVideo: {},
        newplay: {},
        url: ''
      }
    },
    watch: {
      activeindex () {
        if (this.activeindex > 3) {
          this.activeindex = 1
          this.$refs.box.style.transition = 'none'
          this.$refs.box.style.transform = `translateX(0px)`
        }
        let change = this.$refs.box
        let width = change.offsetWidth
        change.style.transition = 'all 0.5s linear'
        change.style.transform = `translateX(${width / 4 * this.activeindex * -1}px)`
      }
    },
    computed: {
      index () {
        let result = this.activeindex
        if (result === this.imgarr.length - 1) {
          result = 0
        }
        return result
      }
    },
    methods: {
      _initScroll () {
        this.wrapperScroll = new IScroll(this.$refs.contentbox, {
          click: true,
          scrollY: true
        })
      },
      showdetail (items, btems) {
        this.$refs.playdetail.show()
        this.newplay = items
        this.url = btems
        this.$router.push('/lesson')
      }
    },
    components: {
      shipin
    }
  }
</script>

<style lang="stylus" scoped>
  .main-wrapper
    background-color #eeeee
    width 100%
    height 100%
    .header
      width 100%
      height 40px
      display flex
      line-height 40px
      border-bottom 1px solid #ccc
      background-color #F5F5F5
      .header-text
        padding-left 15px
        -webkit-flex 5
      .twoma
        flex 0 0 25px
        background url("../images/twoma.png") no-repeat 50%
        background-size 100%
      .icon-search
        -webkit-flex 0 0 30px
        line-height 40px
        padding-left 15px
    .content-box
      position absolute
      overflow hidden
      width 100%
      height 87%
      top 40px
      .pic-play
        overflow hidden
        position relative
        height 200px
        .picturn
          width 1600px
          & > li
            float left
            list-style none
        img
          width 400px
          height 200px
        .small
          width 100%
          height 30px
          background-color black
          clear left
          position absolute
          bottom 2px
          opacity 0.3
          & > ul
            line-height 12px
            height 12px
            margin-top 10px
            position absolute
            right 10px
          li
            width 10px
            height 10px
            border-radius 50px
            border 1px solid #ccc
            float left
            list-style none
            margin-left 3px
      .active
        background-color white

      .main-content
        width 100%
        height 100%
        display flex
        flex-wrap wrap
        background-color #f8f8ff
        margin-top 3px
      .main-content > div
        margin-top 4px
        margin-left 1.5%
        margin-bottom 5px
        width 23%
        height 68px
        color white
        text-align center
      .main-content > div > span
        display inline-block
        height 68px
        line-height 68px
        position relative
      .main-content > div > span > a
        display inline-block
        font-size 9px
        position absolute
        top 15px
        left 0px
        white-space nowrap
      .item-content
        margin-top 8px
        display flex
        flex-wrap wrap
        & > div
          height 80px
          background-color #fff
          & > div > span
            display inline-block
            margin-left 10px
            margin-bottom 10px
          & > div > p
            margin-left 10px
            margin-top 3px
            font-size 10px
            line-height 15px
            color #888
        .content-new
          width 49.5%
          margin-right 1px
          margin-bottom 1px
          display table
          .new-items
            display table-cell
            width 100%
            vertical-align middle
            color green
          .icon-clock
            position relative
            top 50px
            right 10px
            color: green
        .content-achievement
          width 48.5%
          margin-bottom 1px
          display table
          .achieve-items
            display table-cell
            width 100%
            vertical-align middle
            color blue
          .icon-stats-bars2
            position relative
            top 50px
            right 10px
            color blue
        .content-book
          width 49.5%
          margin-right 1px
          display table
          .book-items
            display table-cell
            width 100%
            vertical-align middle
            color orange
          .icon-book
            position relative
            top 50px
            right 10px
            color orange
        .content-teacher
          width 49.5%
          display table
          .teacher-items
            display table-cell
            width 100%
            vertical-align middle
            color red
          .icon-star-empty
            position relative
            top 50px
            right 10px
            color red
      .video-content
        background-color #fff
        margin-top 5px
        .content-title
          display inline-block
          margin-top 10px
          margin-left 5px
        .video-main
          width 100%
          height 100%
          display flex
          flex-wrap wrap
          .item-one
            width 48.5%
            background-color #fff
            margin-top 8px
            margin-left 1%
            margin-right 0.5%
            height 100%
            margin-bottom 10px
            & > img
              width 100%
              height 110px
            & > .title
              display inline-block
              margin-top 8px
            .items-text
              margin-top 8px
              & > .catename
                color lightseagreen
                font-size 15px
                float left
              & > .studynum
                font-size 15px
                float right
                margin-right 5px
                color #888
</style>
