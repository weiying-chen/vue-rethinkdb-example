<template>
<div class="col-md-12">
  <div class="panel panel-default">
    <div class="panel-body">
      <input type="text" class="form-control" v-model="title" placeholder="Enter title">
      <input type="text" class="form-control" v-model="content" placeholder="Enter content">
      <button class="btn btn-default" v-on:click="submit">Submit</button>
    </div>
  </div>
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
      createdAt: '',
      type: ''
    }
  },

  methods: {
    submit () {
      const data = {
        'type': 'project',
        'title': this.title,
        'content': this.content,
        'createdAt': new Date().toJSON()
      }
      store.create(data).then(results => {
        console.log('Success')
      })
      this.title = ''
      this.content = ''
    }
  }
}
</script>
