<template>
<div class="col-md-3">
  <h4 class="page-header">User name</h4>
  <ul class="nav nav-pills nav-stacked">
    <li v-for="project in projects">
      <a :href="'#/project/' + project._id">{{ project.title }}</a>
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
      projects: []
    }
  },

  created () {
    store.reloadProjects(this, 'projects')
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
