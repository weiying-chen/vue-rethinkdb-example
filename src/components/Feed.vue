<template>
<div class="col-md-4">
  <div class="panel panel-default">
    <div class="panel-body">
      <p style="margin-bottom:2px;">{{ feed.content }}</p>
      <br>
      <br>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Feed',

  props: {
    feed: Object
  }
}
</script>
