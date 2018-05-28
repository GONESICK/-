<template>
  <div class=banner              ref='banner'>
    <ul ref='box'>
      <li v-for='(img,index) in images' :key=index>
        <img :src='img'/>
      </li>
    </ul>
    {{$store.state.age}}
    {{$store.state.name}}
  </div>
</template>

<script>
  export default {
    props: ['num'],
    mounted () {
      this.$nextTick(function () {
        clearInterval(this.timer)
        let box = this.$refs.box
        let banner = this.$refs.banner
        box.addEventListener('transitionend', this.transitionEnd)
        this.timer = setInterval(() => {
          this.index++
          box.style.transition = 'all .5s'
          let offsetX = -this.index * banner.offsetWidth
          box.style.transform = `translateX(${offsetX}px)`
        }, 2000)
      })
    },
    data () {
      return {
        index: this.num,
        timer: 0,
        images: [
          require('../images/01.png'),
          require('../images/02.png'),
          require('../images/03.png'),
          require('../images/04.png'),
          require('../images/05.png'),
          require('../images/06.png'),
          require('../images/01.png')
        ]
      }
    },
    methods: {
      transitionEnd () {
        if (this.index >= this.images.length - 1) {
          this.$refs.box.style.transition = 'none'
          this.$refs.box.style.transform = `translateX(0)`
          this.index = 0
        }
      }
    },
    watch: {
      index (val) {
        this.$emit('index', val)
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .banner {
    width: 100%;
    overflow: hidden;
  }

  .banner ul {
    list-style: none;
    width: 1000%;
    transition: all .5s;
  }

  .banner ul li {
    width: 10%;
    float: left;
  }

  .banner ul li img {
    width: 100%;
    display: block;
  }
</style>
