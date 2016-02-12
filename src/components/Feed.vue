<template>
<div class="panel panel-default">
  <div class="panel-body">
    <p>{{ feed.content }}</p>
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
