<template>
  <div class="row">
    <side-nav></side-nav>
    <div class="col-md-9">
      <h4 class="page-header">Projects</h4>
      <div class="panel panel-default">
        <div class="panel-body">
          <h3>Post title</h3>
          <p>Post content</p>
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
      posts: []
    }
  },

  created () {
    store.reloadPosts(this, 'posts')
  },

  methods: {
    submit () {
      const data = {
        'type': 'post',
        'title': this.title,
        'content': this.content,
        'createdAt': new Date().toJSON()
      }
      store.create(data).then(results => {
        store.reloadPosts(this, 'posts')
      })
      this.title = ''
      this.content = ''
    }
  }
}
</script>

<style lang="stylus">
  @import '../variables.styl'

  .nav-pills {
    a {
      color: $text-color
    }
    > li.active > a,
    > li.active > a:hover,
    > li.active > a:focus {
      color: $text-color
      background-color: #e4e4e4
    }
    > li > a:hover {
      background-color: #e4e4e4
    }
  }

  .panel {
    -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0)
    box-shadow: 0 0 0 rgba(0, 0, 0, 0)
    h3 {
      margin-top: 0
    }
  }
</style>
