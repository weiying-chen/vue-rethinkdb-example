<template>
<div class="row">
  <side-nav></side-nav>
  <div class="col-md-9">
    <h4 class="page-header">Projects</h4>
    <div class="panel panel-default">
      <div class="panel-body">
        <h3>Project title</h3>
        <p>Project content</p>
        <a class="btn btn-default">View</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SideNav from '../components/SideNav'
import store from '../store'

export default {
  components: {
    SideNav
  },

  data () {
    return {
      id: '',
      title: '',
      content: '',
      createdAt: '',
      type: '',
      projects: []
    }
  },

  created () {
    store.reloadProjects(this, 'projects')
  },

  methods: {
    submit () {
      const data = {
        'type': 'project',
        'title': this.title,
        'content': this.content,
        'createdAt': new Date().toJSON()
      }
      store.create(data).then(results => {
        store.reloadProjects(this, 'projects')
      })
      this.title = ''
      this.content = ''
    }
  }
}
</script>

<style lang="stylus">
.panel {
  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0)
  box-shadow: 0 0 0 rgba(0, 0, 0, 0)
  h3 {
    margin-top: 0
  }
}
</style>
