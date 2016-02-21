<template>
<div class="col-md-3">
  <h4 class="page-header">User name</h4>
  <ul class="nav nav-pills nav-stacked">
    <li v-for="project in projects">
      <a :href="'#/project/' + project.id">{{ project.title }}</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      projects: []
    }
  },

  created () {
    this.$http.get('http://localhost:8090/api/projects').then(response => {
      this.projects = response.data
    })
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
