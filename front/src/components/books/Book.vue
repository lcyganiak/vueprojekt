<template>
  <div class="col-sm-6 col-md-4">
    <div class="card border-success mb-3" style="width: 18rem;">
      <div class="card-header bg-transparent border-success">{{book.author}}</div>
      <div class="card-body text-success">
        <h5 class="card-title">{{book.title}}</h5>
        <p class="card-text">{{book.description}}</p>
      </div>
      <div class="card-footer bg-transparent border-success">
        <button class="btn btn-success">edytuj</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["book"],
  methods: {
    // edit() {
    //   axios.put(`api/book/${this.id}`, {
    //        title: this.title,
    //       author: this.author,
    //       description: this.description
    //   })
    // }
  }
};
</script>
<style scoped>
</style>


