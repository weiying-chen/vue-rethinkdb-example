<template>
<div id="wrapper">
  <top-nav></top-nav>
  <div class="container">
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
  </div>
</div>
</template>

<script>
import TopNav from './components/TopNav'
export default {
  components: {
    TopNav
  }
}
</script>

<style lang="stylus">
@import "./global"
</style>
