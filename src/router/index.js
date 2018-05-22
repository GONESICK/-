import Vue from 'vue'
import Router from 'vue-router'
import provide from '../components/provide.vue'
import news from '../components/news.vue'
import country from '../components/country.vue'
import fina from '../components/fina.vue'
import fun from '../components/fun.vue'
import healthy from '../components/healthy.vue'
import soid from '../components/soid.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/provide',
      name: 'provide',
      component: provide
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/fun',
      name: 'fun',
      component: fun
    },
    {
      path: '/healthy',
      name: 'healthy',
      component: healthy
    },
    {
      path: '/country',
      name: 'country',
      component: country
    },
    {
      path: '/soid',
      name: 'soid',
      component: soid
    },
    {
    path: '/fina',
    name: 'fina',
    component: fina
}
  ]
})
