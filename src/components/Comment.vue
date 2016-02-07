<template>
  <div class="col-md-4">
    <div class="panel panel-default">
      <div class="panel-body">
        <p style="margin-bottom:2px;">{{ comment.content }}</p>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',

  props: {
    comment: Object
  }
}
</script>
