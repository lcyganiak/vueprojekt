<template>
  <div class="row">
    <app-book v-for="book in books" v-bind:key="book.id" :book="book"></app-book>
  </div>
</template>

<script>
import axios from "axios";
import Book from "./Book.vue";

export default {
  data() {
    return {
      bok: [1, 2, 3],
      books: [],
      title: "",
      id: "",
      author: "",
      description: ""
    };
  },
  mounted() {
    this.book();
  },
  methods: {
    book() {
      axios.get("api/books").then(result => {
        this.books = result.data;
      });
    }
  },
  components: {
    appBook: Book
  }
};
</script>
