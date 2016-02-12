<template>
<div class="row">
  <side-nav></side-nav>
  <div class="col-md-9">
    <h4 class="page-header">Projects</h4>
    <feed
      v-for="feed in feeds"
      :feed="feed">
    </feed>
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
      title: '',
      content: '',
      projects: [],
      feeds: []
    }
  },

  created () {
    store.reloadFeeds(this, 'feeds')
  }
}
</script>
