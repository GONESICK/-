import Vue from 'vue'
import Router from 'vue-router'
import Face from '../components/Facecontent'
import Book from '../components/book'
import Read from '../components/read'
import Detail from '../components/lessondetail'
import lesson from '../components/lesson'
import course from '../components/course'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Face',
      name: 'Face',
      component: Face,
      children: [
        {
          path: '/Detail',
          name: 'Detail',
          component: Detail
        },
        {
          path: '/lesson',
          name: 'lesson',
          component: lesson
        },
        {
          path: '/course',
          name: 'course',
          component: course
        }
      ]
    },
    {
      path: '/Book',
      name: 'Book',
      component: Book
    },
    {
      path: '/Read',
      name: 'Read',
      component: Read
    }
  ]
})
