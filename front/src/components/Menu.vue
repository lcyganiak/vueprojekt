<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="primary--text" @click="drawer= !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase primary--text">
        <span class="font-weigh-light">Biblioteka</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn flat color="gray" @click="goHome">
        <span>HOME</span>

        <v-icon right>home</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.name" router :to="link.path">
          <v-icon class="white--text">{{link.icon}}</v-icon>

          <v-list-tile-content>
            <v-list-tile-title class="white--text" m5>{{link.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { path: "/books", name: "Books", icon: "folder_open" },
        { path: "/addbook", name: "AddBook", icon: "fas fa-edit" }
      ]
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style  scoped>
</style>
