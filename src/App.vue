<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
          <a class="navbar-brand" :href="'#/projects'"><img src="./assets/logo.png"></a>
        </div>
        <div class="navbar-collapse collapse" id="searchbar">
          <ul class="nav navbar-nav navbar-right">
           <li><a :href="'#/projects/new'">New project</a></li>
           <li><a :href="'#/signup'">Signup</a></li>
           <li><a :href="'#/login'">Login</a></li>
         </ul>
          <form class="navbar-form">
            <div class="form-group" style="display:inline">
              <div class="input-group" style="display:table">
                <span class="input-group-addon" style="width:1%"><i class="fa fa-search"></i></span>
                <input class="form-control" name="search" placeholder="Search Here" autocomplete="off" autofocus="autofocus" type="text">
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view
        class="view"
        keep-alive
        transition
        transition-mode="out-in">
    </div>
  </div>
</template>

<style lang="stylus">
  @import "./global.styl"

  .navbar {
    position: relative
    min-height: 50px
    margin-bottom: 20px
    border: 1px solid transparent
  }

  .navbar-default {
    background-color: #fff
    border-width: 0
  }

  .navbar-form {
    margin-top: 0
    margin-bottom: 0
   .input-group > .form-control {
      background-color: #fff
      border-width: 0
      min-height: 50px
      border-radius: 0
    }
  }
</style>
