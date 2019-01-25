<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="primary--text" @click="drawer= !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase primary--text">
        <span class="font-weigh-light">Biblioteka</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat small color="gray" @click="dialogs">
        <span>Dodaj</span>
        <v-icon>add</v-icon>
      </v-btn>
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
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <add-book></add-book>
      </v-card>
    </v-dialog>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import AddBook from "./books/AddBook";
export default {
  data() {
    return {
      drawer: false,

      links: [
        { path: "/books", name: "Books", icon: "folder_open" },
        { path: "/addbook", name: "AddBook", icon: "fas fa-edit" }
      ],
      dialog: false
    };
  },
  beforeViewInit() {},
  methods: {
    ...mapActions(["dialogMes"]),
    goHome() {
      this.$router.push("/");
    },
    dialogs() {
      this.dialog = true;
    }
  },

  computed: {
    // dialogMes: function() {
    //   this.dialog = "sssss";
    // }
  },

  watch: {
    dialogMes() {
      this.dialog = false;
      if (this.$store.state.dialog == false) {
        console.log(this.dialog);
      } else {
        // console.log(this.dialog);
        //this.dialog = this.$store.state.dialog;
        console.log(this.dialog);
      }
    }
  },

  components: {
    addBook: AddBook
  }
};
</script>
<style  scoped>
</style>
