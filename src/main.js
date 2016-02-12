import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import ProjectNew from './components/ProjectNew'
import ProjectList from './components/ProjectList'
import ProjectView from './components/ProjectView'

Vue.use(Router)

const router = new Router()

router.map({
  '/projects/new': {
    component: ProjectNew
  },

  '/projects': {
    component: ProjectList
  },

  '/project/:id': {
    component: ProjectView
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/projects'
})

router.start(App, '#app')
