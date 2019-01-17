
<template>
  <v-app>
    <v-container>
      <div id="app">
        <app-menu></app-menu>
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </v-container>
  </v-app>
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
}
</style>
