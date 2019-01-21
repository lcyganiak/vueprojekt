<template>
  <div class="cardBook">
    <v-card class="mt-5">
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
          <div class="description">{{book.description}}</div>
          <v-btn color="warning" @click="delteBook(book.id)">kasuj</v-btn>
          <v-btn color="info" @click="getThisBook(book.id)">Info</v-btn>
        </v-flex>
      </v-layout>
      <!-- <v-divider class="my-1"></v-divider> -->
    </v-card>
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
  }
};
</script>
<style  scoped>
.cardBook {
  min-width: 100%;
}

.sciFi {
  border-left: 4px solid grey;
}
.educational {
  border-left: 4px solid burlywood;
}
.childrenNovel {
  border-left: 4px solid yellowgreen;
}
.historyk {
  border-left: 4px solid rebeccapurple;
}
</style>


