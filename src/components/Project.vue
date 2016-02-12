<template>
<div class="col-md-9">
  <h4 class="page-header">Projects</h4>
  <div class="panel panel-default">
    <div class="panel-body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.content }}</p>
      <a class="btn btn-default" :href="'#/project/' + project._id">View</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Project',

  props: {
    project: Object
  }
}
</script>
