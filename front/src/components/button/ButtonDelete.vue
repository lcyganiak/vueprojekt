<template>
  <v-btn @click="delteBook(bookEditor.id)" color="warning" class="white--text">
    <v-icon>delete</v-icon>
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
        contenteditable: "",
        id: this.$store.state.bookOne.id
      }
    };
  },
  methods: {
    ...mapActions(["delteBook"])
  }
};
</script>
 <style>
</style>
