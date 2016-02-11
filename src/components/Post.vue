<template>
  <div class="col-md-9">
    <h4 class="page-header">Projects</h4>
    <div class="panel panel-default">
      <div class="panel-body">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <a class="btn btn-default" :href="'#/post/' + post._id">View</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',

  props: {
    post: Object
  }
}
</script>
