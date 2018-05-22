<template>
  <div class="news-wrapper">
    <div class="news-wrapper-header" ref="newlist">
      <ul>
        <li v-for='(items,index) in news' :key='index' class="news-content-main" @click="selectdetail(items,items.picInfo)">
          <div class="main-content">
            <div class="news-detail">
              <h3 class="news-title">{{items.title}}</h3>
              <ul class="news-wrapper">
                <li style="list-style: none">
                  <span class="new-source">{{items.source}}</span>
                  <span class="new-replay">{{items.tcount}}人跟帖</span>
                </li>
              </ul>
            </div>
            <div class="news-pic">
              <ul>
                <li v-for='(pic,index) in items.picInfo' :key="index" style="list-style: none">
                  <img :src="pic.url" width="117" height="73">
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
        </li>
      </ul>
    </div>
    <Detail ref="detail" :newitem="items" :picture="picinfo"></Detail>
  </div>
</template>

<script>
  import IScroll from 'iscroll/build/iscroll-probe'
  import Detail from '../components/NewsDetail'

  export default {
    data () {
      return {
        news: {},
        showStr: false,
        items: {},
        picinfo: ''
      }
    },
    created () {
      this.$axios.get('/api/focus')
        .then((res) => {
          res = res.data
          this.news = res.data
          this.news.forEach((items, index) => {
            if (items.category == null) {
              this.news.splice(index, 1)
            }
          })
          this.$nextTick(() => {
            if (!this.scroll) {
              this._initScroll()
            } else {
              this.scroll.refresh()
            }
          })
        })
        .catch((error) => {
          alert(error)
        })
    },
    methods: {
      _initScroll () {
        this.menuScroll = new IScroll(this.$refs.newlist, {
          click: true,
          scrollY: true,
          bounce: false
        })
      },
      selectdetail (items, picInfo) {
        this.$refs.detail.show()
        this.items = items
        this.picinfo = picInfo[0].url
      }
    },
    components: {
      Detail
    }
  }
</script>

<style lang="stylus" scoped>
  .news-wrapper-header
    position absolute
    width 100%
    bottom 0px
    top 90px
    overflow hidden
    .news-content-main
      padding 20px 24px
      border-bottom 1px solid #f5f7f9
      margin 0 -12px
      .main-content
        display flex
        -webkit-box-align start
        align-items flex-start
        -webkit-box-pack justify
        justify-content space-between
        .news-title
          font-weight 30
          padding-right 10px
          overflow hidden
          line-height 20px
          font-size 18px
          text-overflow ellipsis
          word-break break-word
        .news-wrapper
          margin-top 8px
          .new-source,.new-replay
            text-overflow ellipsis
            font-size 13px
            color #b4b4b4
            letter-spacing 0
</style>
