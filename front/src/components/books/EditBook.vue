<template >
  <div class="col-sm-6 col-md-12 marginTop">
    <input type="text" class="form-control" v-model="bookEditor.author" placeholder="Autor">
    <input type="text" class="form-control" v-model="bookEditor.title" placeholder="Tytuł">
    <input type="text" class="form-control" v-model="bookEditor.description" placeholder="Opis">

    <div class="contenteditableSec">
      <h2 class="h2 text-center">Opis książki</h2>
      <ul style="list-style-type: none">
        <button class="btn btn-primary bold" @click="bold()">
          <i class="fas fa-bold"></i>
        </button>
        <button class="btn btn-primary italic" @click="italic()">
          <i class="fas fa-italic"></i>
        </button>
        <button class="btn btn-primary" @click="underline()">
          <i class="fas fa-underline"></i>
        </button>

        <button class="btn btn-primary" @click="backspace()">
          <i class="fas fa-backspace"></i>
        </button>
      </ul>

      <div
        contenteditable="true"
        class="contenteditable"
        id="contenteditable"
        v-html="bookEditor.description"
        @input="update"
      ></div>
    </div>
    <button class="btn btn-success" @click="editBook(bookEditor)">Dodaj</button>
    <button class="btn btn-success" @click="delteBook(bookEditor.id)">Kasuj</button>
    <button>cona</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
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
  computed: {},

  watch: {},

  methods: {
    ...mapActions([
      "editBook",
      "bold",
      "italic",
      "underline",
      "backspace",
      "delteBook"
    ]),

    update: function(event) {
      console.log(event.target.innerHTML);
    }
  }
};
</script>


<style scoped>
.marginTop {
  margin-top: 20px;
}
.form-control {
  box-shadow: 5px 5px 10px;
  margin-bottom: 4%;
  border-top: 1px solid;
  background-color: whitesmoke;
}
.contenteditableSec {
  box-shadow: 5px 5px 10px;
  width: auto;
  min-height: 16rem;
  margin-bottom: 4%;
}
.contenteditable {
  border-top: 1px solid;
}
</style>

