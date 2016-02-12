<template>
  <div class="col-md-3">
    <h4 class="page-header">User name</h4>
    <ul class="nav nav-pills nav-stacked">
      <li v-for="post in posts">
        <a :href="'#/post/' + post._id">{{ post.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../store'

export default {
  data () {
    return {
      id: '',
      title: '',
      content: '',
      posts: []
    }
  },

  created () {
    store.reloadPosts(this, 'posts')
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
</style>
