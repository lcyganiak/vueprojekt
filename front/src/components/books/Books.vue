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
    return {};
  },
  computed: {
    books() {
      return this.$store.state.books;
    }
  },
  mounted() {
    this.$store.dispatch("books");
  },

  methods: {},
  components: {
    appBook: Book
  }
};
</script>
