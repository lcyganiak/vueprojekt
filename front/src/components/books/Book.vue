<template>
  <div>
    <v-card class="mt-5">
      <v-layout wrap :class="`pa-3 ${book.typeBook}  cardBook` ">
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
        </v-flex>
      </v-layout>
      <!-- <v-divider class="my-1"></v-divider> -->
    </v-card>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";

import AddBookVue from "./AddBook.vue";
export default {
  props: ["book"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(["delteBook"]),
    // deleteBook(id) {
    //   axios.delete(`api/book/${id}`).then(res => {
    //     this.$store.dispatch("books");
    //   });
    // },
    detal(id) {
      // axios.get(`api/books/${id}`).then(res => {
      //   console.log(res);
      //   this.bookone = res.data;
      //   console.log(this.bookone.title);
      //   this.$router.push("/editbook");
      //   return bookone;
      // });
    }
  }
};
</script>
<style  scoped>
.cardBook {
  box-shadow: 5px 5px 10px;
}

.sciFi {
  border-left: 4px solid grey;
}
.educational {
  border-left: 4px solid red;
}
.childrenNovel {
  border-left: 4px solid grey;
}
.historyk {
  border-left: 4px solid grey;
}
</style>


