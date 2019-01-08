<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-success mb-3">
      <div class="card-header bg-transparent border-success">{{book.author}}</div>
      <div class="card-body text-success">
        <h5 class="card-title">{{book.title}}</h5>
        <p class="card-text">{{book.description}}</p>
      </div>
      <div class="card-footer bg-transparent border-success">
        <button class="btn btn-success" @click="edit()">edytuj</button>
      </div>
    </div>
  </div>
  <!-- <h1>Lista ksiązek</h1>
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
  </table>-->
  <!-- <input v-model="test"> -->
  <!-- <button @click="book">Book</button> -->
</template>
<script>
export default {
  props: ["book"],
  methods: {
    edit() {
      console.log("work");
    }
  }
};
</script>

