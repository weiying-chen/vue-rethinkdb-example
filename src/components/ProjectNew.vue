<template>
<div class="row">
  <side-nav></side-nav>
  <div class="col-md-9">
    <h4 class="page-header">New project</h4>
    <div class="panel panel-default">
      <div class="panel-body">
        <input type="text" class="form-control" v-model="title" placeholder="Enter title">
        <input type="text" class="form-control" v-model="content" placeholder="Enter content">
        <button class="btn btn-default" v-on:click="submit">Submit</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SideNav from './SideNav'

export default {
  name: 'ProjectNew',

  components: {
    SideNav
  },

  data () {
    return {
      title: '',
      content: ''
    }
  },

  methods: {
    submit () {
      this.$http.post('http://localhost:8090/api/projects', {
        title: this.title,
        content: this.content
      }).then(response => {
        this.$http.get('http://localhost:8090/api/projects').then(response => {
          this.projects = response.data
        })
      })
      this.title = ''
      this.content = ''
    }
  }
}
</script>
