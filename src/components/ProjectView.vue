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
import store from '../store'

export default {
  components: {
    SideNav,
    Feed
  },

  data () {
    return {
      _id: '',
      project: '',
      feeds: [],
      content: '',
      type: '',
      createdAt: '',
      projectId: ''
    }
  },

  route: {
    data ({ to }) {
      return store.findProjectById(to.params.id).then(project =>
        store.findFeedsByProjectId(project._id).then(feeds => ({
          project: project,
          feeds: feeds
        }))
      )
    }
  },

  methods: {
    submit () {
      const data = {
        content: this.content,
        type: 'feed',
        createdAt: new Date().toJSON(),
        projectId: this.project._id
      }
      store.create(data).then(() => {
        store.reloadFeeds(this, 'feeds', this.project._id)
      })
      this.content = ''
    }
  }
}
</script>
