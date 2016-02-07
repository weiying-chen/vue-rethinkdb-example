import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import PostList from './components/PostList'
import PostView from './components/PostView'

Vue.use(Router)

const router = new Router()

router.map({
  '/posts': {
    component: PostList
  },

  '/post/:id': {
    component: PostView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/posts'
})

router.start(App, '#app')
