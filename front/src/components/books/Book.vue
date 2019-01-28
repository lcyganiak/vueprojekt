<template>
  <v-container>
    <v-card class="mx-auto" color="grey lighten-4" max-width="600" style=" overflow: hidden;">
      <v-img
        class="hoverImg"
        src="https://www.incimages.com/uploaded_files/image/970x450/getty_883231284_200013331818843182490_335833.jpg"
      ></v-img>
      <v-card-text class="pt-4" style="position: relative;">
        <v-container>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 sm5>
              <span class="font-weight-light grey--text title mb-2">Tytuł Ksiązki</span>
              <h3
                class="display-1 font-weight-light orange--text mb-2"
                style="word-wrap: break-word "
                v-html="book.title "
              ></h3>
            </v-flex>

            <v-flex xs12 sm5>
              <span class="font-weight-light grey--text title mb-2">Autor</span>
              <h3
                class="display-1 font-weight-light orange--text mb-2"
                style="word-wrap: break-word "
                v-html="book.author "
              ></h3>
            </v-flex>
          </v-layout>
        </v-container>

        <div class="font-weight-light title mb-2">
          <v-fab-transition>
            <div v-show="!hidden">
              <p id="description" v-html="book.description"></p>
            </div>
          </v-fab-transition>
          <v-fab-transition>
            <v-btn
              v-show="!hidden"
              @click="getThisBook(book.id)"
              color="primary"
              class="white--text"
              outline
            >Edytuj
              <v-icon>edit</v-icon>
            </v-btn>
          </v-fab-transition>
          <v-btn outline color="primary" @click="hidden = !hidden">{{ hidden ? 'Opis' : 'Schowaj' }}</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";

import AddBookVue from "./AddBook.vue";
export default {
  props: ["book"],
  data() {
    return {
      dialog: this.$store.state.dialog,
      hidden: true
    };
  },
  methods: {
    ...mapActions(["delteBook", "getThisBook"])
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    description(value) {
      return value.substr(0, 40) + " ....";
    }
  }
};
</script>
<style  scoped>
.mx-auto {
  overflow: hidden;
}

.edukacyjna {
  background-color: burlywood;
}
.sci-fi {
  background-color: yellowgreen;
}
.historyczna {
  background-color: rebeccapurple;
}
.hoverImg:hover {
  transform: scale(1.15);
}
.hoverImg {
  transition: all 1s;
}
</style>


