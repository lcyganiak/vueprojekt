<template>
  <div>
    <h1>Lista ksiązek</h1>
    <table class="tabel">
      <tr v-for="(books) in books" v-bind:key="books.title"></tr>
    </table>
    <input type="text" name="test" v-model="test">
    <button @click="books">Book</button>
  </div>
</template>


<script>
import GetBooks from "../service/getbooks.js";
export default {
  data() {
    return {
      test: ""
    };
  },
  methods: {
    books() {
      GetBooks.getbooks({});
    }
  }
};
</script>
