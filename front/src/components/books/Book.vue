<template>
  <div class="cardBook">
    <v-card class="mx-auto" color="grey lighten-4" max-width="600" style=" overflow: hidden;">
      <v-img
        class="hoverImg"
        src="https://www.incimages.com/uploaded_files/image/970x450/getty_883231284_200013331818843182490_335833.jpg"
      ></v-img>
      <v-card-text class="pt-4" style="position: relative;">
        <v-btn
          absolute
          @click="getThisBook(book.id)"
          color="primary"
          class="white--text"
          fab
          right
          top
        >
          <v-icon>info</v-icon>
        </v-btn>

        <div class="font-weight-light grey--text title mb-2">Tytuł Ksiązki</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">{{book.title | capitalize}}</h3>
        <div class="font-weight-light title mb-2">
          <b>Opis:</b>
          <p id="description" v-html="book.description"></p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import AddBookVue from "./AddBook.vue";
export default {
  props: ["book"],
  data() {
    return {
      dialog: this.$store.state.dialog
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
.cardBook {
  min-width: 100%;
  margin-bottom: 25px;
}
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


