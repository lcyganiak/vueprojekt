<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6 offset-md3>
        <v-card>
          <v-toolbar extended>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-fab-transition>
              <!-- <v-btn v-show="!hidden" color="pink" fab dark small absolute bottom left>
                <v-icon>add</v-icon>
              </v-btn>-->
              <p
                v-show="!hidden"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorem placeat voluptates nam iste, vel voluptas, delectus odit similique architecto omnis repellendus voluptatem possimus, dignissimos temporibus excepturi ipsam. Blanditiis, quos!</p>
            </v-fab-transition>
          </v-toolbar>
          <v-card-text style="height: 300px;" class="grey lighten-5 text-xs-center">
            <v-btn color="primary" @click="hidden = !hidden">{{ hidden ? 'Opis' : 'Schowaj' }}</v-btn>
          </v-card-text>
          <v-card-text style="height: 100px; position: relative">
            <v-fab-transition>
              <v-btn v-show="!hidden" color="pink" dark absolute top right fab>
                <v-icon>add</v-icon>
              </v-btn>
            </v-fab-transition>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AddBook from "./books/AddBook";
export default {
  name: "HelloWorld",
  data() {
    return {
      hidden: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
</style>
