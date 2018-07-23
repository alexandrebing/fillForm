<template>
  <div id="app">
    <my-menu></my-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "./components/shared/Menu";
export default {
  components: {
    'my-menu': Menu

  },
}
</script>


<style>

body{
   background-image: url("http://digitalblasphemy.com/graphics/fb/highlandspring1fb.jpg");
   background-repeat: no-repeat;
   background-size: cover;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: rgba(0, 128, 248, 0.87);
  font-weight: bolder;
  font-size: 18px
}
</style>
