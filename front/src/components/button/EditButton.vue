<template>
  <v-btn @click="editBook(bookEditor)" color="primary" class="white--text">
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
        id: this.$store.state.bookOne.id
      }
    };
  },
  methods: {
    ...mapActions(["editBook"])
  }
};
</script>
 <style>
</style>
