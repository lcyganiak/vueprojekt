/* eslint-disable */
<template>
  <div>
    <h1>Lista ksiązek</h1>
    <table class="tabel">
      <tr
        v-for="(books) in books"
        v-bind:key="books.id"
        v-bind:title="books.title"
        v-bind:author="books.author"
        v-bind:description="books.description"
      >
        <td>{{books.title}}</td>
      </tr>
    </table>
    <!-- <input v-model="test"> -->
    <!-- <button @click="book">Book</button> -->
  </div>
</template>

/* eslint-disable */
<script>
import axios from "axios";
export default {
  data() {
    return {
      books: [],
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
        console.log(result.data);
        this.books = result.data;
        // eslint-disable-next-line
      });
    }
  }
  // eslint-disable-next-line
};
</script>
