
<template>
  <div id="app">
    <app-menu></app-menu>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";
export default {
  name: "App",
  components: {
    appMenu: Menu
  }
};
</script>

<style>
body {
  background-color: whitesmoke;
  padding: 30px;
}
</style>
