<template>
  <div class="cardBook">
    <v-hover>
      <v-card slot-scope="{ hover }" class="mx-auto" color="grey lighten-4" max-width="600">
        <v-img
          :aspect-ratio="16/9"
          src="https://www.incimages.com/uploaded_files/image/970x450/getty_883231284_200013331818843182490_335833.jpg"
        >
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex transition-fast-in-fast-out darken-2 v-card--reveal display-3 white--text"
              :class="`${book.typeBook}`"
              style="height: 100%; margin: 0 auto; text-align: center"
            >Autor :
              <br>
              {{book.author}}
            </div>
          </v-expand-transition>
        </v-img>
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
            <v-icon>home</v-icon>
          </v-btn>
          <div class="font-weight-light grey--text title mb-2">Tytuł Ksiązki</div>
          <h3 class="display-1 font-weight-light orange--text mb-2">{{book.title | capitalize}}</h3>
          <div class="font-weight-light title mb-2">Our Vintage kitchen utensils delight any chef.
            <br>Made of bamboo by hand
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
    <!-- <v-card class="mt-5">
      <v-layout wrap :class="`pa-3 ${book.typeBook}` ">
        <v-flex xs12 sm6 md6>
          <div class="capition grey--text">Tytuł</div>
          <div class="title">{{book.title}}</div>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <div class="capition grey--text">Autor</div>
          <div class="author">{{book.author}}</div>
        </v-flex>
        <v-flex xs12 sm12 md12>
          <div class="capition grey--text">Opis</div>
          <div class="description" v-html="book.description"></div>
          <v-btn color="warning" @click="delteBook(book.id)">kasuj</v-btn>
          <v-btn color="info">Info</v-btn>
        </v-flex>
      </v-layout>

    </v-card>-->
  </div>
</template>
<script>
import { mapActions } from "vuex";

import AddBookVue from "./AddBook.vue";
export default {
  props: ["book"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["delteBook", "getThisBook"])
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
<style  scoped>
.cardBook {
  min-width: 100%;
  margin-bottom: 25px;
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
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>


