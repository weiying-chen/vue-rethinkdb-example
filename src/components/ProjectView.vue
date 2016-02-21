<template>
<div class="row">
  <side-nav></side-nav>
  <div class="col-md-9">
    <h4 class="page-header">{{ project.title }}</h4>
    <div class="panel panel-default">
      <div class="panel-body">
        <p>{{ project.content }}</p>
      </div>
    </div>
    <h4 class="page-header">Feeds ({{ feeds.length }})</h4>
    <feed
      v-for="feed in feeds"
      :feed="feed">
    </feed>
    <div class="panel panel-default">
      <div class="panel-body">
        <input type="text" class="form-control" v-model="content" placeholder="Enter content">
        <button class="btn btn-default" v-on:click="submit">Submit</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import SideNav from '../components/SideNav'
import Feed from '../components/Feed'

export default {
  name: 'ProjectView',

  components: {
    SideNav,
    Feed
  },

  data () {
    return {
      project: {},
      feeds: [],
      content: '',
      projectId: ''
    }
  },

  route: {
    data ({ to }) {
      return this.$http.get(`http://localhost:8090/api/projects/${to.params.id}`).then(project =>
        this.$http.get(`http://localhost:8090/api/projects/${to.params.id}/feeds`).then(feeds => ({
          project: project.data,
          feeds: feeds.data
        }))
      )
    }
  },

  methods: {
    submit () {
      this.$http.post('http://localhost:8090/api/feeds', {
        content: this.content,
        projectId: this.project.id
      }).then(response => {
        this.$http.get(`http://localhost:8090/api/projects/${this.project.id}/feeds`).then(response => {
          this.feeds = response.data
        })
      })
      this.content = ''
    }
  }
}
</script>
