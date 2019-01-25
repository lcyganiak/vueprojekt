<template>
  <v-btn @click="k" color="primary" class="white--text">
    <v-icon>edit</v-icon>
  </v-btn>
</template>

 <script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      bookEditor: {
        author: this.$store.state.bookOne.author,
        description: this.$store.state.bookOne.description,
        title: this.$store.state.bookOne.title,
        rating: +this.$store.state.bookOne.rating,
        contenteditable: this.$store.state.bookOne.description,
        id: this.$store.state.bookOne.id
      }
    };
  },
  methods: {
    ...mapActions(["editBook"]),
    k() {
      console.log(this.bookEditor.author);
      // console.log(this.$store.state.bookOne.description);
      // console.log(this.$store.state.bookOne.title);
      // console.log();
      // console.log();
      // console.log();
      // console.log();
    }
  }
};
</script>
 <style>
</style>
