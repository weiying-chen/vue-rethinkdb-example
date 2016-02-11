<template>
  <div class="row">
    <div class="col-md-3">
      <h4 class="page-header">User name</h4>
      <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="#">Projects</a></li>
        <li><a href="#">Tasks2</a></li>
      </ul>
    </div>
    <post
      v-for="post in posts"
      :post="post">
    </post>
    <!-- <div class="col-md-4">
      <div class="panel panel-default">
        <div class="panel-body">
          <input type="text" class="form-control" v-model="title" placeholder="Enter title">
          <input type="text" class="form-control" v-model="content" placeholder="Enter content">
          <button class="btn btn-default" v-on:click="submit">Submit</button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Post from '../components/Post'
import store from '../store'

export default {
  components: {
    Post
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

<style>
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #777;
  background-color: #e4e4e4;
}

.panel {
  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}

.panel h3 {
  margin-top: 0;
}
</style>
