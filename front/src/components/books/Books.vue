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
      books: {},
      // eslint-disable-next-line
      title: "",
      // eslint-disable-next-line
      id: "",
      // eslint-disable-next-line
      author: "",
      // eslint-disable-next-line
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
        console.log(books);
      });
    }
  },
  components: {
    appBook: Book
  }
};
</script>
