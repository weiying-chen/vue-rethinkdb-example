<template>
  <div class="row">
    <div class="col-md-12">
      <div class="panel panel-default">
        <div class="panel-body">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <h3 class="page-header">Comments ({{ comments.length }})</h3>
    </div>
    <comment
      v-for="comment in comments"
      :comment="comment">
    </comment>
    <div class="col-md-4">
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
import Comment from '../components/Comment'
import store from '../store'

export default {
  components: {
    Comment
  },

  data () {
    return {
      _id: '',
      post: '',
      comments: [],
      content: '',
      type: '',
      createdAt: '',
      postId: ''
    }
  },

  route: {
    data ({ to }) {
      return store.findPostById(to.params.id).then(post =>
        store.findCommentsByPostId(post._id).then(comments => ({
          post: post,
          comments: comments
        }))
      )
    }
  },

  methods: {
    submit () {
      const data = {
        content: this.content,
        type: 'comment',
        createdAt: new Date().toJSON(),
        postId: this.post._id
      }
      store.create(data).then(() => {
        store.reloadComments(this, 'comments', this.post._id)
      })
      this.content = ''
    }
  }
}
</script>
